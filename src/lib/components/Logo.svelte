<script lang="ts">
	type ILogo = {
		className?: string;
	};

	let { className }: ILogo = $props();
</script>

<div class={`flex items-center gap-1 ${className ?? ''}`}>
	<span class="text-xl">⚡</span>
	<span class="text-lg font-semibold">FastSvelte</span>
</div>
