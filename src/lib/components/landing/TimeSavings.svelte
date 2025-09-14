<script lang="ts">
	const timeSavings = [
		{
			title: 'Authentication System',
			savings: '40+ hours',
			icon: 'lucide--shield-check',
			description: 'Complete user management with OAuth, email verification, and secure sessions'
		},
		{
			title: 'Payment Processing',
			savings: '30+ hours', 
			icon: 'lucide--credit-card',
			description: 'Stripe integration with webhooks, subscriptions, and billing management'
		},
		{
			title: 'Multi-Tenant Architecture',
			savings: '60+ hours',
			icon: 'lucide--building-2',
			description: 'Organizations, role-based access, team invitations, and B2B features'
		},
		{
			title: 'Admin & User Dashboard',
			savings: '40+ hours',
			icon: 'lucide--layout-dashboard',
			description: 'Admin and user interfaces with role-based access and management tools'
		},
		{
			title: 'Database & Migrations',
			savings: '20+ hours',
			icon: 'lucide--database',
			description: 'PostgreSQL setup, schema migrations, and data management'
		},
		{
			title: 'Email & Landing Page',
			savings: '25+ hours',
			icon: 'lucide--mail',
			description: 'Email system with templates, plus professional marketing site with SEO optimization'
		}
	] as const;

	const totalHours = timeSavings.reduce((sum, item) => {
		const hours = parseInt(item.savings.replace(/\D/g, ''));
		return sum + hours;
	}, 0);
</script>

<div class="container py-8 md:py-12 xl:py-16 2xl:py-24">
	<div class="text-center">
		<div class="inline-flex items-center rounded-box border border-emerald-500/10 bg-emerald-500/5 p-2">
			<span class="iconify size-5 text-emerald-600 lucide--clock"></span>
		</div>
		<p class="mt-4 text-2xl font-semibold sm:text-3xl">Save Months of Development Time</p>
		<p class="mt-3 inline-block max-w-2xl text-base-content/70 max-sm:text-sm">
			Stop rebuilding the same SaaS infrastructure over and over. FastSvelte includes everything you
			need, professionally built and tested.
		</p>
		<div class="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 dark:border-emerald-800 dark:bg-emerald-900/20">
			<span class="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{totalHours}+ hours</span>
			<span class="text-sm text-emerald-700 dark:text-emerald-300">saved with FastSvelte</span>
		</div>
	</div>

	<div class="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:mt-16">
		{#each timeSavings as item}
			<div class="card bg-base-100 card-border">
				<div class="card-body">
					<div class="flex items-center gap-3">
						<div class="flex size-10 items-center justify-center rounded-box bg-emerald-100 dark:bg-emerald-900/30">
							<span class="iconify size-5 text-emerald-600 dark:text-emerald-400 {item.icon}"></span>
						</div>
						<div>
							<h3 class="font-semibold">{item.title}</h3>
							<span class="text-sm font-medium text-emerald-600 dark:text-emerald-400">{item.savings} saved</span>
						</div>
					</div>
					<p class="mt-3 text-sm text-base-content/70">{item.description}</p>
				</div>
			</div>
		{/each}
	</div>
</div>
