import { json } from '@sveltejs/kit';
import { PrismaClient } from '@prisma/client';
import type { RequestHandler } from '@sveltejs/kit';

const prisma = new PrismaClient();

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email } = await request.json();

		if (!email || typeof email !== 'string') {
			return json({ error: 'Email is required' }, { status: 400 });
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json({ error: 'Invalid email format' }, { status: 400 });
		}

		// Check if email already exists
		const existingSubscription = await prisma.emailSubscription.findUnique({
			where: { email: email.toLowerCase() }
		});

		if (existingSubscription) {
			if (existingSubscription.active) {
				return json({ message: 'Email already subscribed' }, { status: 200 });
			} else {
				// Reactivate subscription
				await prisma.emailSubscription.update({
					where: { email: email.toLowerCase() },
					data: { active: true }
				});
				return json({ message: 'Subscription reactivated successfully' }, { status: 200 });
			}
		}

		// Create new subscription
		await prisma.emailSubscription.create({
			data: {
				email: email.toLowerCase()
			}
		});

		return json({ message: 'Successfully subscribed to updates!' }, { status: 201 });
	} catch (error) {
		console.error('Subscription error:', error);
		return json({ error: 'Internal server error' }, { status: 500 });
	}
};