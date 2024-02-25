import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
	id: z.string(),
	status: z.string(),
	label: z.string().optional(),
	shipping_type: z.string(),
	from: z.string(),
	to: z.string(),
	order_details: z.string(),
	size: z.string(),
	quantity: z.string(),
	type_of_goods: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
