import { json } from '@sveltejs/kit';
import { Pool } from 'pg';
import { env } from '$env/dynamic/private';
import type { RequestHandler } from '@sveltejs/kit';

const pool = new Pool({
	connectionString: env.DATABASE_URL,
});

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { name, email, role, brandName, website } = await request.json();

		// Validate name
		if (!name || typeof name !== 'string' || name.trim().length === 0) {
			return json({ error: 'Name is required' }, { status: 400 });
		}

		// Validate email
		if (!email || typeof email !== 'string') {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		// Basic email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}

		// Validate role
		const validRoles = ['founder', 'growth', 'marketing', 'operation', 'others'];
		if (!role || typeof role !== 'string' || !validRoles.includes(role)) {
			return json({ error: 'Valid role is required' }, { status: 400 });
		}

		// Validate brand name
		if (!brandName || typeof brandName !== 'string' || brandName.trim().length === 0) {
			return json({ error: 'Brand name is required' }, { status: 400 });
		}

		// Validate website
		if (!website || typeof website !== 'string' || website.trim().length === 0) {
			return json({ error: 'Website is required' }, { status: 400 });
		}

		// Insert into database
		const client = await pool.connect();
		try {
			await client.query(
				'INSERT INTO waitlist (name, email, role, brand_name, website) VALUES ($1, $2, $3, $4, $5)',
				[name.trim(), email.trim(), role, brandName.trim(), website.trim()]
			);
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