<script>
	import { Button } from '$lib/components/ui/button';
	import { Inbox, ArrowLeftRight, LogOut } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { page } from '$app/stores';
	import * as m from '$paraglide/messages';
</script>

<div class="flex min-h-screen overflow-hidden">
	<nav class="relative flex w-40 flex-col gap-2 border-e-[1px] p-4">
		<Button
			variant="ghost"
			class="flex justify-start gap-2 {$page.url.pathname === '/inbox' ? 'bg-accent' : ''}"
			href="/inbox"><Inbox size="16px" />{m.Inbox()}</Button
		>
		<Button
			variant="ghost"
			class="flex justify-start gap-2 {$page.url.pathname === '/orders' ? 'bg-accent' : ''}"
			href="/orders"><ArrowLeftRight size="16px" />{m.orders()}</Button
		>
		<Separator orientation="horizontal" class="my-4 bg-border" />
		<Button variant="ghost" class="flex justify-start gap-2" href="/"
			><LogOut size="16px" />{m.logout()}</Button
		>
	</nav>
	<slot />
</div>
