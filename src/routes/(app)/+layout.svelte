<script lang="ts">
	import { Separator } from '$lib/components/ui/separator';
	import { cn } from '$lib/utils';
	import * as Resizable from '$lib/components/ui/resizable';
	import { primaryRoutes, secondaryRoutes } from './config';
	import Nav from './(components)/nav.svelte';
	import AccountSwitcher from './(components)/account-switcher.svelte';
	import { accounts } from './inbox/data';

	export let defaultLayout = [265, 440, 655];
	export let defaultCollapsed = false;

	let isCollapsed = defaultCollapsed;

	function onLayoutChange(sizes: number[]) {
		document.cookie = `PaneForge:layout=${JSON.stringify(sizes)}`;
	}

	function onCollapse() {
		isCollapsed = true;
		document.cookie = `PaneForge:collapsed=${true}`;
	}

	function onExpand() {
		isCollapsed = false;
		document.cookie = `PaneForge:collapsed=${false}`;
	}
</script>

<Resizable.PaneGroup
	direction="horizontal"
	{onLayoutChange}
	class="min-h-screen items-stretch overflow-hidden"
>
	<Resizable.Pane
		defaultSize={defaultLayout[0]}
		collapsedSize={4}
		collapsible
		minSize={15}
		maxSize={20}
		{onCollapse}
		{onExpand}
	>
		<div class={cn('flex h-[52px] items-center justify-center', isCollapsed ? 'h-[52px]' : 'px-2')}>
			<AccountSwitcher {isCollapsed} {accounts} />
		</div>
		<Separator />
		<Nav {isCollapsed} routes={primaryRoutes} />
		<Separator />
		<Nav {isCollapsed} routes={secondaryRoutes} />
	</Resizable.Pane>
	<Resizable.Handle withHandle />
	<Resizable.Pane defaultSize={defaultLayout[1]}>
		<slot />
	</Resizable.Pane>
</Resizable.PaneGroup>
