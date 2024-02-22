<script>
	import { Button } from '$lib/components/ui/button';
	import { Inbox, ArrowLeftRight, LogOut } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { page } from '$app/stores';
</script>

<div class="relative flex min-h-screen overflow-hidden">
	<div class="h-full w-40">
		<nav class="fixed z-10 flex h-full w-40 flex-col gap-2 border-e-[1px] p-4">
			<Button
				variant="ghost"
				class="flex justify-start gap-2 {$page.url.pathname === '/inbox' ? 'bg-accent' : ''}"
				href="/inbox"><Inbox size="16px" />Inbox</Button
			>
			<Button
				variant="ghost"
				class="flex justify-start gap-2 {$page.url.pathname === '/orders' ? 'bg-accent' : ''}"
				href="/orders"><ArrowLeftRight size="16px" /> Orders</Button
			>
			<Separator orientation="horizontal" class="my-4 bg-border" />
			<Button variant="ghost" class="flex justify-start gap-2" href="/"
				><LogOut size="16px" />Sign Out</Button
			>
		</nav>
	</div>
	<slot />
</div>
