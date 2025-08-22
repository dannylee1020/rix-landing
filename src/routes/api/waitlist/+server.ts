import { json } from '@sveltejs/kit';
import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from '@sveltejs/kit';

const pool = new Pool({
	connectionString: env.DATABASE_URL,
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email } = await request.json();

		// Validate email
		if (!email || typeof email !== 'string') {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}

		// Insert into database
		const client = await pool.connect();
		try {
			await client.query('INSERT INTO waitlist (email) VALUES ($1)', [email]);
			return json({ success: true, message: 'Successfully joined waitlist!' });
		} catch (dbError: any) {
			// Handle duplicate email error
			if (dbError.code === '23505') { // unique_violation
				return json({ error: 'Email already registered' }, { status: 409 });
			}
			console.error('Database error:', dbError);
			return json({ error: 'Failed to save email' }, { status: 500 });
		} finally {
			client.release();
		}
	} catch (error) {
		console.error('API error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};