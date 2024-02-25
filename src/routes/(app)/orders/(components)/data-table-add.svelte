<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { type SuperValidated, type Infer, superForm } from 'sveltekit-superforms';
	import { taskSchema, type Task } from '../(data)/schemas';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';

	export let data: SuperValidated<Task>;

	const form = superForm(data, {
		validators: zodClient(taskSchema)
	});

	const { form: formData } = form;

	let dialogOpen = false;
	let disableInput = false;
</script>

<Dialog.Root bind:open={dialogOpen}>
	<Dialog.Trigger>
		<Button variant="ghost" size="sm">
			<Plus class="h-4 w-4" />
		</Button>
	</Dialog.Trigger>
	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Add Order</Dialog.Title>
			<Dialog.Description>add a cool order</Dialog.Description>
		</Dialog.Header>
		<form method="POST" action="?/create">
			<Form.Field {form} name="id">
				<Form.Control let:attrs>
					<Form.Label>id</Form.Label>
					<Input {...attrs} bind:value={$formData.id} disabled={disableInput} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="order_details">
				<Form.Control let:attrs>
					<Form.Label>title</Form.Label>
					<Input {...attrs} bind:value={$formData.order_details} disabled={disableInput} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="status">
				<Form.Control let:attrs>
					<Form.Label>status</Form.Label>
					<Input {...attrs} bind:value={$formData.status} disabled={disableInput} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="shipping_type">
				<Form.Control let:attrs>
					<Form.Label>priority</Form.Label>
					<Input {...attrs} bind:value={$formData.shipping_type} disabled={disableInput} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="label">
				<Form.Control let:attrs>
					<Form.Label>label</Form.Label>
					<Input {...attrs} bind:value={$formData.label} disabled={disableInput} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Dialog.Footer>
				<Form.Button type="submit" disabled={disableInput}>Add</Form.Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
