<script>
	import { Button } from '$lib/components/ui/button';
	import { Inbox, ArrowLeftRight, LogOut } from 'lucide-svelte';
	import { Separator } from '$lib/components/ui/separator';
	import { page } from '$app/stores';
	import * as m from '$paraglide/messages';
	import * as Resizable from '$lib/components/ui/resizable';
</script>

<Resizable.PaneGroup direction="horizontal" class="min-h-screen">
	<Resizable.Pane
		defaultSize={1 / 10}
		maxSize={13}
		collapsedSize={0}
		collapsible={true}
		minSize={8}
		order={1}
		class="flex flex-col gap-1 pt-8"
	>
		<Button
			variant="ghost"
			class="mx-2 flex justify-start gap-2 {$page.url.pathname === '/inbox' ? 'bg-accent' : ''}"
			href="/inbox"><Inbox size="16px" />{m.Inbox()}</Button
		>
		<Button
			variant="ghost"
			class="mx-2 flex justify-start gap-2 {$page.url.pathname === '/orders' ? 'bg-accent' : ''}"
			href="/orders"><ArrowLeftRight size="16px" />{m.orders()}</Button
		>
		<Separator orientation="horizontal" class="my-4 bg-border" />
		<Button variant="ghost" class="flex justify-start gap-2" href="/"
			><LogOut size="16px" />{m.logout()}</Button
		>
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={9 / 10} order={2}>
		<slot />
	</Resizable.Pane>
</Resizable.PaneGroup>
