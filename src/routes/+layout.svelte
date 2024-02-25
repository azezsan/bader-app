<script>
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import { Toaster } from '$lib/components/ui/sonner';
	import { ModeWatcher } from 'mode-watcher';
</script>

<ParaglideJS {i18n}>
	<Toaster />
	<ModeWatcher defaultMode="light" />
	<slot />
</ParaglideJS>
