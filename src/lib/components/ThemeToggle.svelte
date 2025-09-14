<script lang="ts" module>
	type IThemeToggleDropdown = {
		iconClass?: string;
		class?: string;
	};
</script>

<script lang="ts">
	import { useConfig } from '$lib/contexts/ConfigProvider.svelte';

	const { iconClass, ...props }: IThemeToggleDropdown = $props();

	const { toggleTheme } = useConfig();
</script>

<button
	class={`relative overflow-hidden ${props.class ?? ''}`}
	onclick={toggleTheme}
	aria-label="Toggle Theme"
>
	<span
		class={`absolute iconify size-4.5 -translate-y-4 opacity-0 transition-all duration-300 lucide--sun group-data-[theme=dark]/html:translate-y-0 group-data-[theme=dark]/html:opacity-100 ${iconClass ?? ''}`}
	></span>
	<span
		class={`absolute iconify size-4.5 translate-y-4 opacity-0 transition-all duration-300 lucide--moon group-data-[theme=light]/html:translate-y-0 group-data-[theme=light]/html:opacity-100 ${iconClass ?? ''}`}
	></span>
	<span
		class={`absolute iconify size-4.5 opacity-100 lucide--palette group-data-[theme=dark]/html:opacity-0 group-data-[theme=light]/html:opacity-0 ${iconClass ?? ''}`}
	></span>
</button>
