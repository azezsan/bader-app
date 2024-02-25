<script lang="ts">
	import { shipping_types } from '../(data)/data';
	export let value: string;
	const shipping_type = shipping_types.find((shipping_type) => shipping_type.value === value);
	const Icon = shipping_type?.icon;
</script>

{#if shipping_type}
	<div class="flex items-center">
		{#if Icon}
			<Icon class="me-2 h-4 w-4 text-muted-foreground" />
		{/if}
		<span>{shipping_type.label}</span>
	</div>
{/if}
