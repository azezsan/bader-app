<script lang="ts">
	import DataTable from './(components)/data-table.svelte';
	export let data;
	import * as m from '$paraglide/messages';
</script>

<div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold tracking-tight">{m.orders()}</h2>
	</div>
	{#key data}
		<DataTable data={data.tasks} form={data.form} />
	{/key}
</div>
