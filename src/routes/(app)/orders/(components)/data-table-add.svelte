<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Plus } from 'lucide-svelte';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import { taskSchema, type Task } from '../(data)/schemas';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import { Input } from '$lib/components/ui/input';
	import * as m from '$paraglide/messages';
	import * as Select from '$lib/components/ui/select';

	export let data: SuperValidated<Task>;

	const form = superForm(data, {
		validators: zodClient(taskSchema)
	});

	const { form: formData, enhance } = form;

	let dialogOpen = false;
	let disableInput = false;

	$: selectedShippingType = $formData.shipping_type
		? {
				value: $formData.shipping_type,
				label: m[$formData.shipping_type as keyof typeof m]()
			}
		: undefined;
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
			<div class="my-4 grid grid-cols-2 gap-6">
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
						<Form.Label>{m.order_details()}</Form.Label>
						<Input {...attrs} bind:value={$formData.order_details} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="shipping_type">
					<Form.Control let:attrs>
						<Form.Label>{m.shipping_type()}</Form.Label>
						<!-- <Input {...attrs} bind:value={$formData.shipping_type} disabled={disableInput} /> -->
						<Select.Root
							selected={selectedShippingType}
							onSelectedChange={(v) => {
								v && ($formData.shipping_type = v.value);
							}}
						>
							<Select.Trigger {...attrs} disabled={disableInput}>
								<Select.Value placeholder="select" />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="frozen">{m.frozen()}</Select.Item>
								<Select.Item value="cold">{m.cold()}</Select.Item>
								<Select.Item value="dry">{m.dry()}</Select.Item>
							</Select.Content>
						</Select.Root>
						<input hidden bind:value={$formData.shipping_type} name={attrs.name} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="from">
					<Form.Control let:attrs>
						<Form.Label>{m.from()}</Form.Label>
						<Input {...attrs} bind:value={$formData.from} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="to">
					<Form.Control let:attrs>
						<Form.Label>{m.to()}</Form.Label>
						<Input {...attrs} bind:value={$formData.to} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="size">
					<Form.Control let:attrs>
						<Form.Label>{m.size()}</Form.Label>
						<Input {...attrs} bind:value={$formData.size} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="quantity">
					<Form.Control let:attrs>
						<Form.Label>{m.quantity()}</Form.Label>
						<Input {...attrs} bind:value={$formData.quantity} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="type_of_goods">
					<Form.Control let:attrs>
						<Form.Label>{m.type_of_goods()}</Form.Label>
						<Input {...attrs} bind:value={$formData.type_of_goods} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
			</div>
			<Dialog.Footer>
				<Form.Button type="submit" disabled={disableInput}>Add</Form.Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
