<div id="showcase">
	<div class="relative container py-8 md:py-12 xl:py-16 2xl:py-24">
		<div class="relative z-10 grid gap-12 lg:grid-cols-7 lg:gap-24">
			<div class="flex flex-col max-sm:items-center max-sm:text-center lg:col-span-3">
				<div
					class="inline-flex w-fit items-center rounded-box border border-teal-500/5 bg-teal-500/5 p-2.5"
				>
					<span class="iconify size-5 text-teal-600 lucide--box" />
				</div>
				<p class="mt-3 text-2xl font-semibold sm:text-3xl">FastSvelte in Action</p>
				<p class="mt-4 text-base-content/70 max-sm:text-sm">
					See FastSvelte's complete SaaS infrastructure in action. From authentication flows to
					payment processing, multi-tenant dashboards to admin panels - everything you need is
					already built.
				</p>
				<div class="mt-6">
					<a
						href="https://docs.fastsvelte.dev"
						target="_blank"
						class="btn btn-outline btn-sm btn-neutral"
					>
						View Documentation
						<span class="iconify lucide--external-link" />
					</a>
				</div>
			</div>
			<div class="relative lg:col-span-4">
				<div
					class="absolute -start-50 -top-50 z-[-1] size-[450px] bg-[url(/images/landing/showcase-bg-gradient.png)] bg-cover bg-center bg-no-repeat opacity-20 sm:size-[600px] dark:hidden"
				></div>
				<div
					class="absolute -end-12 -bottom-12 z-[-1] size-[350px] bg-[url(/images/landing/showcase-bg-element.png)] bg-cover bg-center bg-no-repeat opacity-60 max-lg:hidden sm:size-[120px] dark:opacity-60"
				></div>
				<div
					class="rounded-box bg-linear-to-tl from-base-100/60 to-base-100 to-[20%] p-4 text-center backdrop-blur-[4px] md:p-6 lg:p-8 xl:p-10"
				>
					<div class="flex flex-wrap justify-center gap-6">
						<button class="btn btn-sm btn-secondary">
							<span class="iconify size-3.5 lucide--search" />
							Search
						</button>
						<button class="btn btn-ghost btn-sm">
							<span class="iconify size-3.5 lucide--upload" />
							Upload
						</button>
						<button class="btn btn-circle btn-sm btn-primary" aria-label="Buy Now">
							<span class="iconify size-4 lucide--shopping-cart" />
						</button>
						<div class="dropdown">
							<div tabIndex={0} role="button" class="btn btn-sm">Dropdown</div>
							<ul
								tabIndex={0}
								class="dropdown-content menu z-1 w-40 rounded-box bg-base-100 p-2 shadow-sm"
							>
								<li>
									<a>Item 1</a>
								</li>
								<li>
									<a>Item 2</a>
								</li>
							</ul>
						</div>
					</div>
					<div class="mt-10 flex flex-wrap justify-center gap-6">
						<div role="tablist" class="tabs-border tabs tabs-sm">
							<input
								role="tab"
								class="tab"
								aria-label="Tailwind CSS"
								type="radio"
								name="demo-tabs-radio"
							/>
							<input
								role="tab"
								class="tab"
								aria-label="DaisyUI"
								type="radio"
								defaultChecked
								name="demo-tabs-radio"
							/>
							<input
								role="tab"
								class="tab"
								aria-label="Nexus"
								type="radio"
								name="demo-tabs-radio"
							/>
						</div>
						<span class="loading loading-ring text-primary"></span>
						<span class="loading loading-bars text-primary"></span>
						<span class="loading loading-infinity text-primary"></span>
					</div>
					<div class="mt-10 flex flex-wrap items-center justify-center gap-6">
						<div class="avatar">
							<div class="w-10 rounded-full bg-base-200">
								<img alt="Avatar" src="/images/avatars/1.png" />
							</div>
						</div>
						<div class="avatar-group -space-x-5">
							<div class="avatar">
								<div class="w-10 rounded-full bg-base-200">
									<img alt="Avatar" src="/images/avatars/4.png" />
								</div>
							</div>
							<div class="avatar">
								<div class="w-10 rounded-full bg-base-200">
									<img alt="Avatar" src="/images/avatars/5.png" />
								</div>
							</div>
							<div class="avatar">
								<div class="w-10 rounded-full bg-base-200">
									<img alt="Avatar" src="/images/avatars/7.png" />
								</div>
							</div>
							<div class="avatar avatar-placeholder">
								<div class="w-10 rounded-full bg-base-300">+99</div>
							</div>
						</div>

						<div class="join">
							<button class="btn join-item btn-square btn-sm">1</button>
							<button class="btn btn-active join-item btn-square btn-sm">2</button>
							<button class="btn join-item btn-square btn-sm">3</button>
							<button class="btn join-item btn-square btn-sm">4</button>
						</div>
						<div class="alert w-fit gap-2 alert-info px-2 py-1.5" role="alert">
							<span class="iconify size-5 lucide--info"></span>
							<span>New update available.</span>
						</div>
					</div>
					<div class="mt-10 flex flex-wrap items-center justify-center gap-4">
						<div class="inline-flex gap-2">
							<input
								type="radio"
								class="radio"
								name="showcase_radio"
								aria-label="showcase radio 1"
								defaultChecked
							/>
							<input
								type="radio"
								class="radio"
								name="showcase_radio"
								aria-label="showcase radio 2"
							/>
						</div>
						<div class="inline-flex items-center gap-2">
							<input
								type="checkbox"
								class="toggle toggle-primary toggle-sm"
								id="showcase_toggle"
								defaultChecked
							/>
							<label class="label" for="showcase_toggle"> Toggle </label>
						</div>
						<div class="inline-flex items-center gap-2">
							<input
								type="checkbox"
								class="checkbox checkbox-sm checkbox-error"
								id="showcase_checkbox"
								defaultChecked
							/>
							<label class="label" for="showcase_checkbox"> Checkbox </label>
						</div>
						<div class="inline-flex items-center gap-2">
							<input
								type="checkbox"
								class="checkbox checkbox-sm"
								id="showcase_checkbox_disabled"
								disabled
							/>
							<label class="label text-base-content/40" for="showcase_checkbox_disabled">
								Disabled
							</label>
						</div>
					</div>

					<div class="mt-10 grid gap-6 md:grid-cols-2">
						<div class="col-span-1">
							<div class="rating gap-1">
								<input
									class="mask bg-red-400 mask-heart"
									aria-label="1 star"
									type="radio"
									name="rating-3"
								/>
								<input
									class="mask bg-orange-400 mask-heart"
									aria-label="2 star"
									type="radio"
									name="rating-3"
								/>
								<input
									class="mask bg-yellow-400 mask-heart"
									aria-label="3 star"
									type="radio"
									name="rating-3"
								/>
								<input
									class="mask bg-lime-400 mask-heart"
									aria-label="4 star"
									type="radio"
									defaultChecked
									name="rating-3"
								/>
								<input
									class="mask bg-green-400 mask-heart"
									aria-label="5 star"
									type="radio"
									name="rating-3"
								/>
							</div>
							<div>
								<fieldset class="mt-4 fieldset">
									<legend class="fieldset-legend text-start">Title</legend>
									<input
										class="input"
										placeholder="My awesome page"
										type="text"
										aria-label="Input"
									/>
									<p class="fieldset-label">* Required</p>
								</fieldset>
							</div>
							<div class="form-control mt-4">
								<textarea class="textarea" placeholder="Bio" />
							</div>
							<div class="mt-5">
								<input
									type="range"
									aria-label="Input"
									class="range range-primary range-xs"
									id="showcase_range"
								/>
							</div>

							<div class="mt-2">
								<progress
									aria-label="showcase progress"
									max={100}
									id="showcase_progress"
									class="progress h-1 w-full progress-success"
								/>
								<label class="hidden" for="showcase_progress"> Progress </label>
							</div>
						</div>
						<div class="col-span-1">
							<div class="card-border card bg-base-100">
								<div class="card-body text-start">
									<div class="flex items-center gap-3">
										<div class="avatar">
											<div class="mask w-8 bg-base-200 mask-squircle">
												<img src="/images/avatars/1.png" alt="Avatar" />
											</div>
										</div>
										<div class="text-start">
											<p class="leading-none">James Ford</p>
											<p class="text-xs text-base-content/60">Designer & Developer</p>
										</div>
									</div>
									<img
										src="/images/landing/showcase-card-image.png"
										class="mt-3 rounded-box"
										alt="card"
									/>
									<p class="mt-0.5 text-center text-xs text-base-content/80 italic">
										Image caption
									</p>
									<p class="mt-2">More Text goes here....</p>
									<div class="mt-3 card-actions justify-end">
										<button class="btn btn-ghost btn-sm">Cancel</button>
										<button class="btn btn-sm btn-primary">Action</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
