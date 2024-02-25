<script lang="ts">
	import DotsHorizontal from 'svelte-radix/DotsHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { labels } from '../(data)/data';
	import { taskSchema, type Task } from '../(data)/schemas';
	import { enhance } from '$app/forms';
	import { toast } from 'svelte-sonner';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { superForm, type SuperValidated } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as m from '$paraglide/messages';

	export let row: Task;

	const form = superForm(row, {
		validators: zodClient(taskSchema)
	});

	const { form: formData } = form;

	const task = taskSchema.parse(row);
</script>

<Dialog.Root>
	<DropdownMenu.Root>
		<DropdownMenu.Trigger asChild let:builder>
			<Button
				variant="ghost"
				builders={[builder]}
				class="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
			>
				<DotsHorizontal class="h-4 w-4" />
				<span class="sr-only">Open menu</span>
			</Button>
		</DropdownMenu.Trigger>
		<DropdownMenu.Content class="w-[160px]" align="end">
			<Dialog.Trigger class="w-full text-left">
				<DropdownMenu.Item>{m.edit()}</DropdownMenu.Item>
			</Dialog.Trigger>
			<DropdownMenu.Item>Make a copy</DropdownMenu.Item>
			<DropdownMenu.Item>Favorite</DropdownMenu.Item>
			<DropdownMenu.Separator />
			<DropdownMenu.Sub>
				<DropdownMenu.SubTrigger>Labels</DropdownMenu.SubTrigger>
				<DropdownMenu.SubContent>
					<DropdownMenu.RadioGroup value={task.label}>
						{#each labels as label}
							<DropdownMenu.RadioItem value={label.value}>
								{label.label}
							</DropdownMenu.RadioItem>
						{/each}
					</DropdownMenu.RadioGroup>
				</DropdownMenu.SubContent>
			</DropdownMenu.Sub>
			<DropdownMenu.Separator />
			<form
				action="?/delete&id={row.id}"
				method="POST"
				use:enhance={() => {
					return async ({ result, update }) => {
						switch (result.type) {
							case 'success':
								toast.success('Deleted note!');
								break;
							default:
								break;
						}
						await update();
					};
				}}
			>
				<button type="submit" class="w-full text-left">
					<DropdownMenu.Item>
						{m.delet()}
						<DropdownMenu.Shortcut>⌘⌫</DropdownMenu.Shortcut>
					</DropdownMenu.Item>
				</button>
			</form>
		</DropdownMenu.Content>
	</DropdownMenu.Root>

	<Dialog.Content>
		<Dialog.Header>
			<Dialog.Title>Edit Order</Dialog.Title>
			<Dialog.Description>{row.id}</Dialog.Description>
		</Dialog.Header>
		<form method="POST" action="?/update&id={row.id}">
			<input type="hidden" name="id" value={row.id} />
			<Form.Field {form} name="order_details">
				<Form.Control let:attrs>
					<Form.Label>title</Form.Label>
					<Input {...attrs} bind:value={$formData.order_details} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="status">
				<Form.Control let:attrs>
					<Form.Label>status</Form.Label>
					<Input {...attrs} bind:value={$formData.status} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="shipping_type">
				<Form.Control let:attrs>
					<Form.Label>shipping type</Form.Label>
					<Input {...attrs} bind:value={$formData.shipping_type} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Form.Field {form} name="label">
				<Form.Control let:attrs>
					<Form.Label>label</Form.Label>
					<Input {...attrs} bind:value={$formData.label} />
				</Form.Control>
				<Form.Description />
				<Form.FieldErrors />
			</Form.Field>
			<Dialog.Footer>
				<Form.Button type="submit">Edit</Form.Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
