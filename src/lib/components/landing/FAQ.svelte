<script lang="ts">
	import { slide } from 'svelte/transition';

	let activeIndex: number | null = null;

	function toggleAccordion(index: number) {
		activeIndex = activeIndex === index ? null : index;
	}

	const faqs = [
		{
			icon: 'lucide--credit-card',
			question: 'What\'s included in each plan?',
			answer: `All plans include the complete FastSvelte codebase with source code, documentation, and a single project license. Higher tiers add commercial licenses for multiple projects, priority support, and exclusive Discord access. Check our pricing page for full details.`
		},
		{
			icon: 'lucide--rocket',
			question: 'How quickly can I get FastSvelte running?',
			answer: `After setting up your environment variables (Stripe keys, database URL, etc.), FastSvelte can be up and running in under 5 minutes with Docker. Simply clone the repo, configure your <code class="rounded bg-base-200 px-2 py-1 text-sm">.env</code> file, run <code class="rounded bg-base-200 px-2 py-1 text-sm">docker compose up</code>, and you'll have a complete SaaS application running locally.`
		},
		{
			icon: 'lucide--brain',
			question: 'Why choose Python backend over Node.js alternatives?',
			answer: `Python's FastAPI backend gives you access to the entire AI/ML ecosystem (OpenAI, LangChain, pandas, NumPy), superior performance, and clean architecture patterns. Perfect for data-heavy applications, AI features, and complex business logic that other starter kits can't handle.`
		},
		{
			icon: 'lucide--server',
			question: 'Can I deploy FastSvelte anywhere I want?',
			answer: `Yes! Unlike Next.js starters tied to Vercel or Supabase, FastSvelte uses Docker containerization and works with any PostgreSQL database. Deploy to AWS, GCP, Azure, DigitalOcean, or your own VPS. No vendor lock-in means true freedom.`
		},
		{
			icon: 'lucide--dollar-sign',
			question: 'Are there any other costs after purchase?',
			answer: `No hidden costs! You own the code forever. You'll only pay for your own infrastructure (hosting, database) and any third-party services you choose (Stripe for payments, email service, etc.). FastSvelte itself has no recurring fees or licensing costs after purchase.`
		},
		{
			icon: 'lucide--headphones',
			question: 'What kind of support do I get?',
			answer: `All plans include comprehensive documentation and community support. Developer and Team plans include priority email support with faster response times. Team plan also includes exclusive Discord access for direct communication with other FastSvelte developers.`
		},
		{
			icon: 'lucide--info',
			question: 'What is your refund policy?',
			answer: `FastSvelte is a digital source code product. Once you receive access to the code, it cannot be returned, so we do not offer refunds. Please review the documentation and demo carefully before purchasing to ensure it meets your needs.`
		},
		{
			icon: 'lucide--arrow-up-circle',
			question: 'Can I upgrade my plan later?',
			answer: `Yes! You can upgrade anytime with 90% credit from your previous purchase. For example, if you bought Solo for $129 and want to upgrade to Developer ($199), you'll only pay $83 more. This makes it risk-free to start with a smaller plan and upgrade as your needs grow.`
		}
	];
</script>

<div class="container py-8 md:py-12 xl:py-16 2xl:py-24" id="faqs">
	<div class="grid grid-cols-1 gap-12 lg:grid-cols-7 lg:gap-24">
		<div class="col-span-1 flex flex-col max-sm:items-center max-sm:text-center lg:col-span-3">
			<div
				class="inline-flex w-fit items-center rounded-box border border-purple-500/10 bg-purple-500/5 p-2"
			>
				<span class="iconify size-5 text-purple-600 lucide--messages-square" />
			</div>
			<p class="mt-4 text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</p>
			<p class="mt-3 inline-block max-w-lg text-base-content/70 max-sm:text-sm">
				Got questions about FastSvelte? Find answers to the most common questions about our SaaS
				starter kit.
			</p>
			<!-- Contact section for specific questions -->
			<div class="mt-4">
				<h4 class="text-base font-semibold">Have other questions?</h4>
				<p class="mt-1 text-sm text-base-content/70">
					Can't find what you're looking for? We're here to help.
				</p>
				<div class="mt-3 flex items-center gap-3">
					<a
						href="mailto:support@fastsvelte.dev"
						class="btn btn-primary btn-sm gap-2"
					>
						<span class="iconify lucide--mail size-4"></span>
						Email Support
					</a>
					<a
						href="https://docs.fastsvelte.dev"
						target="_blank"
						class="btn btn-outline btn-sm gap-2"
					>
						<span class="iconify lucide--book-open size-4"></span>
						Browse Docs
					</a>
				</div>
			</div>
		</div>
		<div class="lg:col-span-4">
			<div class="space-y-0">
				{#each faqs as faq, index}
					<div class="border-base-300 border-b">
						<div class="cursor-pointer font-medium sm:text-xl p-4 hover:bg-base-50" onclick={() => toggleAccordion(index)}>
							<div class="flex items-center justify-between">
								<div class="flex items-center gap-4">
									<div
										class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
									>
										<span class="iconify size-4.5 {faq.icon}"></span>
									</div>
									{faq.question}
								</div>
								{#if activeIndex === index}
									<span class="iconify lucide--minus size-5 transition-all duration-300 rotate-180"></span>
								{:else}
									<span class="iconify lucide--plus size-5 transition-all duration-300"></span>
								{/if}
							</div>
						</div>
						{#if activeIndex === index}
							<div class="p-4 pl-16" transition:slide={{ duration: 300 }}>
								<p>{@html faq.answer}</p>
							</div>
						{/if}
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
