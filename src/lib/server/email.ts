// Email service using SendGrid
import sgMail from '@sendgrid/mail';
import { sendgrid } from './config';
import { getRepositoryUrl } from './github';

// Initialize SendGrid
sgMail.setApiKey(sendgrid.apiKey);

interface PurchaseConfirmationData {
	customerEmail: string;
	customerName?: string;
	plan: string;
	githubUsername: string;
}

const planDisplayNames: Record<string, string> = {
	solo: 'FastSvelte Solo',
	developer: 'FastSvelte Developer',
	team: 'FastSvelte Team'
};

export async function sendPurchaseConfirmation(data: PurchaseConfirmationData): Promise<void> {
	const { customerEmail, customerName, plan, githubUsername } = data;
	const planName = planDisplayNames[plan] || plan;
	const repoUrl = getRepositoryUrl();

	const htmlContent = `
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Welcome to FastSvelte!</title>
	<style>
		body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; margin: 0; padding: 0; background-color: #f8fafc; }
		.container { max-width: 600px; margin: 0 auto; background-color: white; }
		.header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 40px 30px; text-align: center; }
		.content { padding: 40px 30px; }
		.success-icon { width: 64px; height: 64px; margin: 0 auto 20px; background-color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; }
		.check { color: white; font-size: 32px; font-weight: bold; }
		.card { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 24px; margin: 24px 0; }
		.btn { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 600; margin: 8px 8px 8px 0; }
		.btn-outline { background: transparent; color: #667eea; border: 2px solid #667eea; }
		.footer { background-color: #f1f5f9; padding: 30px; text-align: center; color: #64748b; font-size: 14px; }
		ul { padding-left: 20px; }
		li { margin-bottom: 8px; }
		.highlight { color: #10b981; font-weight: 600; }
	</style>
</head>
<body>
	<div class="container">
		<div class="header">
			<div class="success-icon">
				<div class="check">✓</div>
			</div>
			<h1 style="margin: 0; font-size: 28px;">Welcome to FastSvelte!</h1>
			<p style="margin: 16px 0 0; opacity: 0.9; font-size: 18px;">Your purchase was successful</p>
		</div>

		<div class="content">
			<p>Hi ${customerName || 'there'},</p>

			<p>Thank you for purchasing <strong>${planName}</strong>! Your payment has been processed successfully and you now have access to the complete FastSvelte starter kit.</p>

			<div class="card">
				<h3 style="margin-top: 0; color: #10b981;">What happens next?</h3>
				<ul>
					<li><strong>GitHub Access:</strong> We're granting access to <span class="highlight">@${githubUsername}</span> to the FastSvelte repository</li>
					<li><strong>Repository:</strong> <a href="${repoUrl}" style="color: #667eea;">${repoUrl}</a></li>
					<li><strong>Documentation:</strong> Get started with our comprehensive guides</li>
					<li><strong>Support:</strong> Access to our community and email support</li>
				</ul>
			</div>

			<p>You should receive GitHub repository access within 15 minutes. If you don't see the invitation, please check your GitHub notifications or contact us.</p>

			<div style="text-align: center; margin: 32px 0;">
				<a href="https://docs.fastsvelte.dev" class="btn">View Documentation</a>
				<a href="${repoUrl}" class="btn btn-outline">Access Repository</a>
			</div>

			<p>Ready to build your next SaaS project? FastSvelte includes:</p>
			<ul>
				<li>FastAPI backend with PostgreSQL</li>
				<li>SvelteKit frontend with TypeScript</li>
				<li>Authentication & user management</li>
				<li>Stripe payment integration</li>
				<li>Multi-tenant architecture</li>
				<li>Premium Nexus-Svelte admin dashboard</li>
				<li>Complete deployment guides</li>
			</ul>

			<p>If you have any questions or need help getting started, feel free to reach out to us.</p>

			<p>Happy coding!<br>
			<strong>The FastSvelte Team</strong></p>
		</div>

		<div class="footer">
			<p><strong>FastSvelte</strong> - Full-Stack SaaS Starter Kit</p>
			<p>
				<a href="https://fastsvelte.dev" style="color: #667eea;">Website</a> •
				<a href="https://docs.fastsvelte.dev" style="color: #667eea;">Documentation</a> •
				<a href="${repoUrl}" style="color: #667eea;">GitHub</a>
			</p>
		</div>
	</div>
</body>
</html>`;

	const textContent = `
Welcome to FastSvelte!

Hi ${customerName || 'there'},

Thank you for purchasing ${planName}! Your payment has been processed successfully and you now have access to the complete FastSvelte starter kit.

What happens next?
• GitHub Access: We're granting access to @${githubUsername} to the FastSvelte repository
• Repository: ${repoUrl}
• Documentation: Get started with our comprehensive guides at https://docs.fastsvelte.dev
• Support: Access to our community and email support

You should receive GitHub repository access within 15 minutes. If you don't see the invitation, please check your GitHub notifications or contact us.

FastSvelte includes:
• FastAPI backend with PostgreSQL
• SvelteKit frontend with TypeScript
• Authentication & user management
• Stripe payment integration
• Multi-tenant architecture
• Premium Nexus-Svelte admin dashboard
• Complete deployment guides

If you have any questions or need help getting started, feel free to reach out to us.

Happy coding!
The FastSvelte Team

--
FastSvelte - Full-Stack SaaS Starter Kit
Website: https://fastsvelte.dev
Documentation: https://docs.fastsvelte.dev
GitHub: ${repoUrl}
`;

	const msg = {
		to: customerEmail,
		from: {
			email: sendgrid.fromEmail,
			name: 'FastSvelte Team'
		},
		subject: `Welcome to FastSvelte! Your ${planName} is ready`,
		text: textContent,
		html: htmlContent
	};

	try {
		await sgMail.send(msg);
		console.log(`Purchase confirmation email sent to ${customerEmail} for plan: ${plan}`);
	} catch (error) {
		console.error('SendGrid email error:', error);
		throw new Error(`Failed to send confirmation email: ${error}`);
	}
}