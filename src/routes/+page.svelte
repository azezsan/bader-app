<script lang="ts">
	import * as Form from '$lib/components/ui/form';
	import { formSchema } from './schema.js';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import type { FormSchema } from './schema.js';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$paraglide/messages';
	import { toast } from 'svelte-sonner';

	export let data: SuperValidated<Infer<FormSchema>>;

	const form = superForm(data, {
		validators: zodClient(formSchema),
		dataType: 'json',
		onResult: ({ result }) => {
			if (result.type === 'success') {
				toast.success('Logged in');
			}
		}
	});

	const { form: formData, enhance } = form;
</script>

<section class="flex h-screen items-center justify-center">
	<form method="POST" use:enhance class="flex w-80 flex-col gap-4">
		<Form.Field {form} name="username">
			<Form.Control let:attrs>
				<Form.Label>{m.username()}</Form.Label>
				<Input {...attrs} bind:value={$formData.username} />
			</Form.Control>
		</Form.Field>
		<Form.Field {form} name="password">
			<Form.Control let:attrs>
				<Form.Label>{m.password()}</Form.Label>
				<Input {...attrs} bind:value={$formData.password} type="password" />
			</Form.Control>
		</Form.Field>
		<Form.Button>{m.login()}</Form.Button>
	</form>
</section>
