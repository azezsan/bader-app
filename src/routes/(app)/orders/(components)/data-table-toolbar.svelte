<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { DataTableFacetedFilter, DataTableViewOptions } from '.';
	import type { Task } from '../(data)/schemas';
	import type { TableViewModel } from 'svelte-headless-table';
	import { Button } from '$lib/components/ui/button';
	import Cross2 from 'svelte-radix/Cross2.svelte';
	import { statuses, shipping_types } from '../(data)/data';
	import type { Writable } from 'svelte/store';
	import { MixerHorizontal } from 'svelte-radix';
	import { Cross, Plus } from 'lucide-svelte';
	import * as m from '$paraglide/messages';

	export let tableModel: TableViewModel<Task>;

	const { pluginStates } = tableModel;
	const {
		filterValue
	}: {
		filterValue: Writable<string>;
	} = pluginStates.filter;

	const {
		filterValues
	}: {
		filterValues: Writable<{
			status: string[];
			shipping_type: string[];
		}>;
	} = pluginStates.colFilter;

	$: showReset = Object.values({ ...$filterValues, $filterValue }).some((v) => v.length > 0);
</script>

<div class="flex items-center justify-between">
	<div class="flex flex-1 items-center gap-2">
		<Input
			placeholder={m.filter_orders()}
			class="h-8 w-[150px] lg:w-[250px]"
			type={m.search()}
			bind:value={$filterValue}
		/>

		<DataTableFacetedFilter
			bind:filterValues={$filterValues.status}
			title={m.status()}
			options={statuses}
		/>

		<DataTableFacetedFilter
			bind:filterValues={$filterValues.shipping_type}
			title={m.shipping_type()}
			options={shipping_types}
		/>
		{#if showReset}
			<Button
				on:click={() => {
					$filterValue = '';
					$filterValues.status = [];
					$filterValues.shipping_type = [];
				}}
				variant="ghost"
				class="h-8 px-2 lg:px-3"
			>
				{m.reset()}
				<Cross2 class="ms-2 h-4 w-4" />
			</Button>
		{/if}
	</div>

	<DataTableViewOptions {tableModel} />
</div>
