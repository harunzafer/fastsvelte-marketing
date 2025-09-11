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
			<a class="btn mt-4 w-fit btn-sm" target="_blank" href="https://docs.fastsvelte.dev">
				View Documentation
			</a>
		</div>
		<div class="lg:col-span-4">
			<div class="space-y-0">
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--rocket" />
							</div>
							How quickly can I get FastSvelte running?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							FastSvelte can be up and running in under 5 minutes with Docker. Simply clone the
							repo, run
							<code class="rounded bg-base-200 px-2 py-1 text-sm">docker compose up</code>, and
							you'll have a complete SaaS application running locally with authentication, payments,
							and admin dashboard.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--brain" />
							</div>
							Why choose Python backend over Node.js alternatives?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							Python's FastAPI backend gives you access to the entire AI/ML ecosystem (OpenAI,
							LangChain, pandas, NumPy), superior performance, and clean architecture patterns.
							Perfect for data-heavy applications, AI features, and complex business logic that
							other starter kits can't handle.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--server" />
							</div>
							Can I deploy FastSvelte anywhere I want?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							Yes! Unlike Next.js starters tied to Vercel or Supabase, FastSvelte uses Docker
							containerization and works with any PostgreSQL database. Deploy to AWS, GCP, Azure,
							DigitalOcean, or your own VPS. No vendor lock-in means true freedom.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--key" />
							</div>
							How does authentication work without vendor dependencies?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							FastSvelte uses session-based authentication following Lucia guidelines, stored in
							your own PostgreSQL database. No external auth providers required (though OAuth is
							supported). Includes email verification, password reset, and secure session management
							- all under your control.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--zap" />
							</div>
							What's the advantage of SvelteKit SPA over SSR frameworks?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							SvelteKit SPA provides instant navigation without page reloads, superior developer
							experience, easier state management, and simpler debugging. Unlike SSR frameworks that
							reload pages, FastSvelte's SPA architecture feels like a native desktop application.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--palette" />
							</div>
							What UI components are included?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							FastSvelte includes a complete admin dashboard with 50+ professional UI components,
							charts, tables, forms, and responsive layouts built with DaisyUI and TailwindCSS. It's
							a production-ready interface that would take months to build from scratch.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--arrow-up-circle" />
							</div>
							Can I upgrade my plan later?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							Yes! You can upgrade anytime with 90% credit from your previous purchase. For example, if you bought Solo for $129 and want to upgrade to Developer ($199), you'll only pay $83 more. This makes it risk-free to start with a smaller plan and upgrade as your needs grow.
						</p>
					</div>
				</div>
				<div class="collapse-plus collapse border-base-300">
					<input type="radio" aria-label="Accordion radio" name="accordion" />
					<div class="collapse-title cursor-pointer font-medium sm:text-xl">
						<div class="ite flex items-center gap-4">
							<div
								class="inline-flex items-center justify-center rounded-box border border-base-300 p-1.5"
							>
								<span class="iconify size-4.5 lucide--file-text"></span>
							</div>
							What is the AI Note Improver demo application?
						</div>
					</div>
					<div class="collapse-content ms-12">
						<p>
							FastSvelte includes a complete <strong>AI Note Improver</strong> demo that showcases CRUD operations, OpenAI integration, and usage-based billing. <strong>Replace this demo with your own core functionality</strong> while keeping the common SaaS functionality like authentication, payments, and admin dashboard.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
