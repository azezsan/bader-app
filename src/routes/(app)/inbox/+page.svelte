<script lang="ts">
	import { mails } from './data';
	import Mail from './(components)/mail.svelte';

	export let data;
</script>

<Mail {mails} defaultLayout={data.layout} />
