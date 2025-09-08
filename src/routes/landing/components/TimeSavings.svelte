<script lang="ts">
	const timeSavings = [
		{
			task: 'Authentication & User Management',
			timeWithout: '40+ hours',
			status: 'included',
			description: 'Email verification, password reset, session management, user profiles'
		},
		{
			task: 'Payment Integration & Billing',
			timeWithout: '30+ hours',
			status: 'included',
			description: 'Stripe webhooks, subscription management, invoice handling'
		},
		{
			task: 'Multi-Tenant Architecture',
			timeWithout: '60+ hours',
			status: 'included',
			description: 'Organizations, role-based permissions, team invitations, B2B features'
		},
		{
			task: 'Admin Dashboard & UI',
			timeWithout: '80+ hours',
			status: 'included',
			description: 'Professional dashboard UI with 50+ components, charts, tables, forms'
		},
		{
			task: 'Database Setup & Migrations',
			timeWithout: '20+ hours',
			status: 'included',
			description: 'PostgreSQL schema, migration system, seed data, backup strategies'
		},
		{
			task: 'DevOps & Deployment',
			timeWithout: '40+ hours',
			status: 'included',
			description: 'Docker containerization, CI/CD pipelines, environment configs'
		}
	] as const;

	const totalHours = timeSavings.reduce((sum, item) => {
		const hours = parseInt(item.timeWithout.replace(/\D/g, ''));
		return sum + hours;
	}, 0);
</script>

<div class="container py-8 md:py-12 xl:py-16 2xl:py-24">
	<div class="text-center">
		<div class="inline-flex items-center rounded-box border border-red-500/10 bg-red-500/5 p-2">
			<span class="iconify size-5 text-red-600 lucide--clock" />
		</div>
		<p class="mt-4 text-2xl font-semibold sm:text-3xl">Save Months of Development Time</p>
		<p class="mt-3 inline-block max-w-2xl text-base-content/70 max-sm:text-sm">
			Stop rebuilding the same SaaS infrastructure over and over. FastSvelte includes everything you
			need, professionally built and tested, so you can focus on what makes your product unique.
		</p>
	</div>

	<div class="mt-8 xl:mt-16">
		<div class="rounded-box border border-base-300 bg-base-100 p-6 md:p-8">
			<div class="mb-6 text-center">
				<p class="text-sm font-medium text-base-content/60">WITHOUT FASTSVELTE</p>
				<p class="mt-1 text-3xl font-bold text-red-600">{totalHours}+ Hours of Setup</p>
				<p class="mt-1 text-sm text-base-content/70">
					≈ {Math.ceil(totalHours / 40)} weeks of full-time work
				</p>
			</div>

			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each timeSavings as item}
					<div class="rounded-lg border border-base-200 p-4">
						<div class="flex items-start justify-between">
							<div class="flex-1">
								<h3 class="text-sm font-medium">{item.task}</h3>
								<p class="mt-1 text-xs text-base-content/60">{item.description}</p>
								<div class="mt-3 flex items-center justify-between">
									<span class="text-sm font-semibold text-red-600">{item.timeWithout}</span>
									<span
										class="rounded bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/30 dark:text-green-400"
									>
										✅ Included
									</span>
								</div>
							</div>
						</div>
					</div>
				{/each}
			</div>

			<div class="mt-8 text-center">
				<div
					class="rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20"
				>
					<p class="text-lg font-semibold text-green-800 dark:text-green-300">WITH FASTSVELTE</p>
					<p class="mt-1 text-4xl font-bold text-green-600 dark:text-green-400">5 Minutes</p>
					<p class="mt-2 text-green-700 dark:text-green-300">From clone to running application</p>

					<div class="mt-4 rounded-md bg-gray-900 p-4 text-left font-mono text-sm text-green-400">
						<div>$ git clone https://github.com/fastsvelte/fastsvelte</div>
						<div>$ cd fastsvelte</div>
						<div>$ docker compose up</div>
						<div class="mt-2 text-green-300">
							✅ SaaS application running on http://localhost:5173
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
