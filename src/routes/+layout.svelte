<script>
	import '../app.pcss';
	import { ParaglideJS } from '@inlang/paraglide-js-adapter-sveltekit';
	import { i18n } from '$lib/i18n.js';
	import { Toaster } from '$lib/components/ui/sonner';
</script>

<ParaglideJS {i18n}>
	<Toaster />
	<slot />
</ParaglideJS>
