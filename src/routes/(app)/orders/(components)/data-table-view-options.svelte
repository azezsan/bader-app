<script lang="ts">
	import MixerHorizontal from 'svelte-radix/MixerHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import type { Task } from '../(data)/schemas';
	import type { TableViewModel } from 'svelte-headless-table';
	import * as m from '$paraglide/messages';

	export let tableModel: TableViewModel<Task>;
	const { pluginStates, flatColumns } = tableModel;
	const { hiddenColumnIds } = pluginStates.hide;

	const ids = flatColumns.map((col: { id: string }) => col.id);

	let hideForId = Object.fromEntries(ids.map((id: string) => [id, true]));

	$: $hiddenColumnIds = Object.entries(hideForId)
		.filter(([, hide]) => !hide)
		.map(([id]) => id);

	const hidableCols = ['order_details', 'status', 'shipping_type', "from", "to", "quantity", "size"];
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger asChild let:builder>
		<Button variant="outline" size="sm" class="ms-auto hidden h-8 lg:flex" builders={[builder]}>
			<MixerHorizontal class="me-2 h-4 w-4" />
			{m.view()}
		</Button>
	</DropdownMenu.Trigger>
	<DropdownMenu.Content>
		<DropdownMenu.Label>{m.toggle_columns()}</DropdownMenu.Label>
		<DropdownMenu.Separator />
		{#each flatColumns as col}
			{#if hidableCols.includes(col.id)}
				<DropdownMenu.CheckboxItem bind:checked={hideForId[col.id]}>
					{col.header}
				</DropdownMenu.CheckboxItem>
			{/if}
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
