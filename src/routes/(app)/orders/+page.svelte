<script lang="ts">
	import DataTable from './(components)/data-table.svelte';
	export let data;
</script>

<div class="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
	<div class="flex flex-col gap-2">
		<h2 class="text-2xl font-bold tracking-tight">Welcome back!</h2>
		<p class="text-muted-foreground">Here's a list of your tasks for this month!</p>
	</div>
	{#key data}
		<DataTable data={data.tasks} form={data.form} />
	{/key}
</div>
