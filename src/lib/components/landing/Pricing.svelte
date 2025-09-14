<script lang="ts">
	import { redirectToCheckout } from '$lib/stripe';

	const plans = [
		{
			id: 'solo',
			name: 'Solo',
			price: '$129',
			period: 'one-time',
			description: 'Individual developers',
			popular: false,
			features: [
				// Base features (all included, no highlights since this is the base plan)
				{
					name: 'Full-Stack SaaS Foundation',
					tooltip: 'SvelteKit Frontend & FastAPI Backend',
					included: true,
					highlight: false
				},
				{
					name: 'Complete Authentication',
					tooltip: 'Google OAuth + email/password login',
					included: true,
					highlight: false
				},
				{
					name: 'Payment Processing',
					tooltip: 'Stripe subscriptions, webhooks, billing',
					included: true,
					highlight: false
				},
				{
					name: 'Premium Dashboard UI',
					tooltip: 'TailwindCSS + DaisyUI admin components',
					included: true,
					highlight: false
				},
				{
					name: 'Multi-Tenant Architecture',
					tooltip: 'B2B/B2C organizations, roles, invitations',
					included: true,
					highlight: false
				},
				{
					name: 'Database Migrations',
					tooltip: 'PostgreSQL with Sqlich migration system',
					included: true,
					highlight: false
				},
				{
					name: 'Admin & User Dashboards',
					tooltip: 'Role-based access for users and system admins',
					included: true,
					highlight: false
				},
				{
					name: 'AI-Ready Backend',
					tooltip: 'OpenAI API integration ready for AI features',
					included: true,
					highlight: false
				},
				{
					name: 'Email & Notifications',
					tooltip: 'Azure, SendGrid, testing stub integration',
					included: true,
					highlight: false
				},
				{
					name: 'Landing Page Template',
					tooltip: 'Professional marketing site template',
					included: true,
					highlight: false
				},
				{
					name: 'Single Project License',
					tooltip: 'One developer, one project usage rights',
					included: true,
					highlight: false
				}
			],
			cta: 'Get Solo',
			ctaStyle: 'btn-outline btn-block'
		},
		{
			id: 'developer',
			name: 'Developer',
			price: '$199',
			period: 'one-time',
			description: 'Multiple projects + support',
			popular: true,
			features: [
				// Developer-specific features (highlighted - not available in Solo)
				{
					name: 'Unlimited Projects License',
					tooltip: 'Single developer, unlimited projects usage',
					included: true,
					highlight: true
				},
				{
					name: '1:1 Onboarding Session',
					tooltip: '45-minute personalized setup call',
					included: true,
					highlight: true
				},
				{
					name: 'Email Support',
					tooltip: 'Direct email support for technical questions',
					included: true,
					highlight: true
				},
				// All Solo features included
				{
					name: 'Full-Stack SaaS Foundation',
					tooltip: 'SvelteKit Frontend & FastAPI Backend',
					included: true,
					highlight: false
				},
				{
					name: 'Complete Authentication',
					tooltip: 'Google OAuth + email/password login',
					included: true,
					highlight: false
				},
				{
					name: 'Payment Processing',
					tooltip: 'Stripe subscriptions, webhooks, billing',
					included: true,
					highlight: false
				},
				{
					name: 'Premium Dashboard UI',
					tooltip: 'TailwindCSS + DaisyUI admin components',
					included: true,
					highlight: false
				},
				{
					name: 'Multi-Tenant Architecture',
					tooltip: 'B2B/B2C organizations, roles, invitations',
					included: true,
					highlight: false
				},
				{
					name: 'Database Migrations',
					tooltip: 'PostgreSQL with Sqlich migration system',
					included: true,
					highlight: false
				},
				{
					name: 'Admin & User Dashboards',
					tooltip: 'Role-based access for users and system admins',
					included: true,
					highlight: false
				},
				{
					name: 'AI-Ready Backend',
					tooltip: 'OpenAI API integration ready for AI features',
					included: true,
					highlight: false
				},
				{
					name: 'Email & Notifications',
					tooltip: 'Azure, SendGrid, testing stub integration',
					included: true,
					highlight: false
				},
				{
					name: 'Landing Page Template',
					tooltip: 'Professional marketing site template',
					included: true,
					highlight: false
				}
			],
			cta: 'Get Developer',
			ctaStyle: 'from-primary to-secondary text-primary-content border-0 bg-linear-to-r'
		},
		{
			id: 'team',
			name: 'Team',
			price: '$399',
			period: 'one-time',
			description: 'Teams + full support',
			popular: false,
			features: [
				// Team-specific features (highlighted - not available in Developer)
				{
					name: 'Unlimited Team License',
					tooltip: 'Unlimited developers, unlimited projects',
					included: true,
					highlight: true
				},
				{
					name: 'Team Onboarding Session',
					tooltip: '90-minute session for multiple developers',
					included: true,
					highlight: true
				},
				{
					name: 'Priority Support (30 days)',
					tooltip: '30 days of 24-hour response guarantee',
					included: true,
					highlight: true
				},
				{
					name: 'Deployment Assistance',
					tooltip: 'Help with production deployment setup',
					included: true,
					highlight: true
				},
				{
					name: 'Architecture Planning',
					tooltip: 'Custom architecture consultation session',
					included: true,
					highlight: true
				},
				// All Developer features included
				{
					name: '1:1 Onboarding Session',
					tooltip: '45-minute personalized setup call',
					included: true,
					highlight: false
				},
				{
					name: 'Email Support',
					tooltip: 'Direct email support for technical questions',
					included: true,
					highlight: false
				},
				// All Solo features included
				{
					name: 'Full-Stack SaaS Foundation',
					tooltip: 'SvelteKit Frontend & FastAPI Backend',
					included: true,
					highlight: false
				},
				{
					name: 'Complete Authentication',
					tooltip: 'Google OAuth + email/password login',
					included: true,
					highlight: false
				},
				{
					name: 'Payment Processing',
					tooltip: 'Stripe subscriptions, webhooks, billing',
					included: true,
					highlight: false
				},
				{
					name: 'Premium Dashboard UI',
					tooltip: 'TailwindCSS + DaisyUI admin components',
					included: true,
					highlight: false
				},
				{
					name: 'Multi-Tenant Architecture',
					tooltip: 'B2B/B2C organizations, roles, invitations',
					included: true,
					highlight: false
				},
				{
					name: 'Database Migrations',
					tooltip: 'PostgreSQL with Sqlich migration system',
					included: true,
					highlight: false
				},
				{
					name: 'Admin & User Dashboards',
					tooltip: 'Role-based access for users and system admins',
					included: true,
					highlight: false
				},
				{
					name: 'AI-Ready Backend',
					tooltip: 'OpenAI API integration ready for AI features',
					included: true,
					highlight: false
				},
				{
					name: 'Email & Notifications',
					tooltip: 'Azure, SendGrid, testing stub integration',
					included: true,
					highlight: false
				},
				{
					name: 'Landing Page Template',
					tooltip: 'Professional marketing site template',
					included: true,
					highlight: false
				}
			],
			cta: 'Get Team',
			ctaStyle: 'btn-outline btn-block'
		}
	] as const;

	let loadingPlan = $state<string | null>(null);

	async function handlePurchase(planId: 'solo' | 'developer' | 'team') {
		try {
			loadingPlan = planId;
			await redirectToCheckout(planId);
		} catch (error) {
			console.error('Purchase failed:', error);
			alert('Failed to start checkout process. Please try again.');
		} finally {
			loadingPlan = null;
		}
	}
</script>

<div class="container py-8 md:py-12 xl:py-16 2xl:py-24" id="pricing">
	<div class="text-center">
		<div
			class="inline-flex items-center rounded-box border border-purple-500/10 bg-purple-500/5 p-2"
		>
			<span class="iconify size-5 text-purple-600 lucide--dollar-sign"></span>
		</div>
		<p class="mt-4 text-2xl font-semibold sm:text-3xl">Choose Your Plan</p>
		<p class="mt-3 inline-block max-w-2xl text-base-content/70 max-sm:text-sm">
			Start free and scale as you grow. All plans include complete source code, documentation, and
			deployment freedom. No vendor lock-in, no recurring fees.
		</p>
	</div>

	<div
		class="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 xl:mt-16"
	>
		{#each plans as plan}
			<div
				class={`card relative ${plan.popular ? 'border-2 border-transparent bg-linear-to-br from-primary/20 to-secondary/20 bg-origin-border' : 'border border-base-300 bg-base-100'}`}
			>
				{#if plan.popular}
					<div class="absolute -top-3 left-1/2 -translate-x-1/2 transform">
						<div
							class="rounded-full bg-linear-to-r from-primary to-secondary px-4 py-1 text-xs font-semibold text-primary-content"
						>
							Most Popular
						</div>
					</div>
				{/if}

				<div class="card-body flex h-full flex-col p-4 sm:p-6">
					<div class="text-center">
						<h3 class="text-xl font-semibold">{plan.name}</h3>
						<div class="mt-2">
							<span class="text-4xl font-bold">{plan.price}</span>
							<span class="ml-1 text-sm text-base-content/70">/{plan.period}</span>
						</div>
						<p class="mt-2 text-sm text-base-content/70">{plan.description}</p>
					</div>

					<div class="mt-4 flex-grow space-y-2 sm:mt-6 sm:space-y-3">
						{#each plan.features.filter((f) => f.included) as feature}
							<div class="flex items-center gap-2 sm:gap-3">
								{#if feature.highlight}
									<span class="iconify size-4 flex-shrink-0 text-yellow-500 lucide--star sm:size-5"
									></span>
									<div class="tooltip tooltip-right" data-tip={feature.tooltip}>
										<span class="cursor-help text-sm font-medium">{feature.name}</span>
									</div>
								{:else}
									<span class="iconify size-4 flex-shrink-0 text-green-500 lucide--check sm:size-5"
									></span>
									<div class="tooltip tooltip-right" data-tip={feature.tooltip}>
										<span class="cursor-help text-sm">{feature.name}</span>
									</div>
								{/if}
							</div>
						{/each}
					</div>

					<div class="mt-4 flex justify-center sm:mt-6">
						<button
							onclick={() => handlePurchase(plan.id)}
							class={`btn ${plan.ctaStyle}`}
							disabled={loadingPlan !== null}
						>
							{#if loadingPlan === plan.id}
								<span class="loading loading-sm loading-spinner"></span>
								Processing...
							{:else}
								{plan.cta}
							{/if}
						</button>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="mt-8 text-center">
		<p class="text-sm text-base-content/60">
			All plans include lifetime updates and no recurring fees.
			<strong>Upgrade anytime with 90% credit</strong> from your previous purchase.
			<br />
			<a href="#faqs" class="text-primary underline">Questions?</a>
		</p>
	</div>
</div>
