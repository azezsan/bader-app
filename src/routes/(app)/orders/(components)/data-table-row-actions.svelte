<script lang="ts">
	import DotsHorizontal from 'svelte-radix/DotsHorizontal.svelte';
	import { Button } from '$lib/components/ui/button';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu';
	import { labels } from '../(data)/data';
	import { taskSchema, type Task } from '../(data)/schemas';
	import { toast } from 'svelte-sonner';
	import * as Dialog from '$lib/components/ui/dialog';
	import * as Form from '$lib/components/ui/form';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	import Input from '$lib/components/ui/input/input.svelte';
	import * as m from '$paraglide/messages';
	import * as Select from '$lib/components/ui/select';
	import { enhance } from '$app/forms';

	export let row: Task;

	const form = superForm(row, {
		validators: zodClient(taskSchema)
	});

	const { form: formData } = form;

	const task = taskSchema.parse(row);

	let dialogOpen = false;
	let disableInput = false;

	$: selectedShippingType = $formData.shipping_type
		? {
				value: $formData.shipping_type,
				label: m[$formData.shipping_type as keyof typeof m]()
			}
		: undefined;

	$: selectedStatus = $formData.status
		? {
				value: $formData.status,
				label: m[('m_' + $formData.status) as keyof typeof m]()
			}
		: undefined;
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
		<form method="POST" action="?/update" use:enhance>
			<div class="my-4 grid grid-cols-2 gap-6">
				<input hidden name="id" value={row.id} />
				<Form.Field {form} name="order_details">
					<Form.Control let:attrs>
						<Form.Label>{m.order_details()}</Form.Label>
						<Input {...attrs} bind:value={$formData.order_details} disabled={disableInput} />
					</Form.Control>
					<Form.Description />
					<Form.FieldErrors />
				</Form.Field>
				<Form.Field {form} name="status">
					<Form.Control let:attrs>
						<Form.Label>{m.status()}</Form.Label>
						<!-- <Input {...attrs} bind:value={$formData.shipping_type} disabled={disableInput} /> -->
						<Select.Root
							selected={selectedStatus}
							onSelectedChange={(v) => {
								v && ($formData.status = v.value);
							}}
						>
							<Select.Trigger {...attrs} disabled={disableInput}>
								<Select.Value placeholder="select" />
							</Select.Trigger>
							<Select.Content>
								<Select.Item value="new">{m.m_new()}</Select.Item>
								<Select.Item value="accepted">{m.m_accepted()}</Select.Item>
								<Select.Item value="in_progress">{m.m_in_progress()}</Select.Item>
								<Select.Item value="delivered">{m.m_delivered()}</Select.Item>
								<Select.Item value="cancelled">{m.m_cancelled()}</Select.Item>
							</Select.Content>
						</Select.Root>
						<input hidden bind:value={$formData.status} name={attrs.name} />
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
				<Form.Button type="submit" disabled={disableInput}>{m.edit()}</Form.Button>
			</Dialog.Footer>
		</form>
	</Dialog.Content>
</Dialog.Root>
