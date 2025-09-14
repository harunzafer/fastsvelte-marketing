<script lang="ts">
	const features = [
		{
			icon: 'lucide--key',
			title: 'Complete Authentication',
			description:
				'Username/password and Google OAuth login, email verification, password reset, and role-based access.',
			iconClass: 'text-blue-500 bg-blue-500/5',
			cardClass: 'hover:border-blue-500/40 hover:bg-blue-500/5'
		},
		{
			icon: 'lucide--credit-card',
			title: 'Stripe Integration',
			description:
				'Payment processing, webhook handling, subscription management, and billing automation.',
			iconClass: 'text-violet-500 bg-violet-500/5',
			cardClass: 'hover:border-violet-500/40 hover:bg-violet-500/5'
		},
		{
			icon: 'lucide--users',
			title: 'Multi-Tenant Architecture',
			description:
				'Organizations, role-based permissions, team invitations - perfect for B2B and B2C SaaS',
			iconClass: 'text-cyan-600 bg-cyan-600/5',
			cardClass: 'hover:border-cyan-600/40 hover:bg-cyan-600/5'
		},
		{
			icon: 'lucide--layout-dashboard',
			title: 'Admin & User Dashboards',
			description:
				'Separate admin and user interfaces with role-based access, analytics, and management tools.',
			iconClass: 'text-violet-500 bg-violet-500/5',
			cardClass: 'hover:border-violet-500/40 hover:bg-violet-500/5'
		},
		{
			icon: 'lucide--globe',
			title: 'Landing Page Template',
			description:
				'Professional marketing site template with SEO optimization and conversion-focused design.',
			iconClass: 'text-emerald-500 bg-emerald-500/5',
			cardClass: 'hover:border-emerald-500/40 hover:bg-emerald-500/5'
		},
		{
			icon: 'lucide--brain',
			title: 'AI/ML Ready Python Backend',
			description:
				'Python FastAPI backend with OpenAI integration demo. Perfect for AI/ML features and data processing.',
			iconClass: 'text-fuchsia-500 bg-fuchsia-500/5',
			cardClass: 'hover:border-fuchsia-500/40 hover:bg-fuchsia-500/5'
		},
		{
			icon: 'lucide--zap',
			title: 'SPA Performance',
			description:
				'SvelteKit SPA with instant navigation, client-side routing, and superior dev experience.',
			iconClass: 'text-orange-400 bg-orange-500/5',
			cardClass: 'hover:border-orange-400/40 hover:bg-orange-400/5'
		},
		{
			icon: 'lucide--layers-3',
			title: 'Clean Architecture',
			description:
				'Enterprise-grade 3-layer API → Service → Repository pattern with dependency injection and testing',
			iconClass: 'text-blue-500 bg-blue-500/5',
			cardClass: 'hover:border-blue-500/40 hover:bg-blue-500/5'
		},
		{
			icon: 'lucide--server',
			title: 'Deploy Anywhere',
			description:
				'Docker-first containerization. Deploy to any VPS, cloud provider, or on-premise infrastructure',
			iconClass: 'text-teal-500 bg-teal-500/5',
			cardClass: 'hover:border-teal-500/40 hover:bg-teal-500/5'
		},
		{
			icon: 'lucide--bot',
			title: 'AI-Optimized Codebase',
			description:
				'Clean structure and docs make AI tools like Claude CLI, Cursor, and Copilot incredibly efficient.',
			iconClass: 'text-emerald-500 bg-emerald-500/5',
			cardClass: 'hover:border-emerald-500/40 hover:bg-emerald-500/5'
		}
	] as const;
</script>

<div id="features" class="container py-8 md:py-12 xl:py-16 2xl:py-24">
	<div class="text-center">
		<div
			class="inline-flex items-center rounded-box border border-indigo-500/10 bg-indigo-500/5 p-2"
		>
			<span class="iconify size-5 text-indigo-600 lucide--wand-2" />
		</div>
		<p id="fade-in" class="custom-fade-in mt-4 text-2xl font-semibold sm:text-3xl">
			Everything You Need for SaaS Success
		</p>
		<p class="mt-3 inline-block max-w-lg text-base-content/70 max-sm:text-sm">
			Skip months of setup and focus on your unique business logic. FastSvelte provides all the
			essential SaaS infrastructure out of the box.
		</p>
	</div>
	<div
		class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:mt-16 xl:grid-cols-4 2xl:mt-24 2xl:gap-6"
	>
		{#each features as feature, index (index)}
			<div
				class={`card cursor-pointer border border-dashed border-base-300 transition-all duration-300 ${feature.cardClass}`}
			>
				<div class="card-body">
					<div>
						<div class={`inline-flex items-center p-2 ${feature.iconClass} rounded`}>
							<span class={`iconify ${feature.icon} size-6`}></span>
						</div>
						<p class="mt-3 text-lg font-medium">{feature.title}</p>
						<p class="mt-0.5 line-clamp-2 text-sm overflow-ellipsis text-base-content/80">
							{feature.description}
						</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
