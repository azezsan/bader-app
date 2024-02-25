<script lang="ts">
	import MailDisplay from './mail-display.svelte';
	import MailList from './mail-list.svelte';
	import { mailStore } from '../store.js';
	import { Input } from '$lib/components/ui/input';
	import * as Resizable from '$lib/components/ui/resizable';
	import { Separator } from '$lib/components/ui/select';
	import * as Tabs from '$lib/components/ui/tabs';
	import Search from 'lucide-svelte/icons/search';
	import type { Mail } from '../data.js';

	export let mails: Mail[];
	export let defaultLayout = [265, 440, 655];

	function onLayoutChange(sizes: number[]) {
		document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
	}
</script>

<Resizable.PaneGroup direction="horizontal" {onLayoutChange} class="max-h-screen items-stretch">
	<Resizable.Pane defaultSize={defaultLayout[1]} minSize={30} class="max-h-screen">
		<Tabs.Root value="all">
			<div class="flex items-center px-4 py-2">
				<h1 class="text-xl font-bold">Inbox</h1>
				<Tabs.List class="ms-auto">
					<Tabs.Trigger value="all" class="text-zinc-600 dark:text-zinc-200">All mail</Tabs.Trigger>
					<Tabs.Trigger value="unread" class="text-zinc-600 dark:text-zinc-200">
						Unread
					</Tabs.Trigger>
				</Tabs.List>
			</div>
			<Separator class="my-0 bg-border" />
			<div class="bg-background/95 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<form>
					<div class="relative">
						<Search class="absolute left-2 top-3 h-4 w-4 text-muted-foreground" />
						<Input placeholder="Search" class="ps-8" />
					</div>
				</form>
			</div>
			<Tabs.Content value="all" class="m-0">
				<MailList items={mails} />
			</Tabs.Content>
			<Tabs.Content value="unread" class="m-0">
				<MailList items={mails.filter((item) => !item.read)} />
			</Tabs.Content>
		</Tabs.Root>
	</Resizable.Pane>
	<Resizable.Handle />
	<Resizable.Pane defaultSize={defaultLayout[2]} class="max-h-screen">
		<MailDisplay mail={mails.find((item) => item.id === $mailStore.selected) || null} />
	</Resizable.Pane>
</Resizable.PaneGroup>
