import { taskSchema, type Task } from './(data)/schemas.js';
import { superValidate } from "sveltekit-superforms";
import { zod } from "sveltekit-superforms/adapters";

let tasks: Task[] = [
	{
		"id": "TASK-8782",
		"order_details": "You can't compress the program without quantifying the open-source SSD pixel!",
		"from": "جدة",
		"to": "نيوم",
		"quantity": "4",
		"size": "طبلية",
		"shipping_type": "frozen",
		"type_of_goods": "طعام",
		"status": "new",
		"label": "documentation",
	},
	{
		"id": "TASK-7878",
		"order_details": "We need to quantify the mobile AI sensor!",
		"from": "الرياض",
		"to": "مكة",
		"quantity": "5",
		"size": "طبلية",
		"shipping_type": "dry",
		"type_of_goods": "اجهزة كهربائية",
		"status": "accepted",
		"label": "feature",
	},
	{
		"id": "TASK-5207",
		"order_details": "We need to quantify the mobile AI sensor!",
		"from": "الدمام",
		"to": "الرياض",
		"quantity": "2",
		"size": "طبلية",
		"shipping_type": "frozen",
		"type_of_goods": "طعام",
		"status": "in_progress",
		"label": "feature",
	},
	{
		"id": "TASK-5207",
		"order_details": "We need to quantify the mobile AI sensor!",
		"from": "جدة",
		"to": "مكة",
		"quantity": "1",
		"size": "طبلية",
		"shipping_type": "cold",
		"type_of_goods": "اجهزة كهربائية",
		"status": "delivered",
		"label": "feature",
	},
	{
		"id": "TASK-5207",
		"order_details": "We need to quantify the mobile AI sensor!",
		"from": "الجبيل",
		"to": "الدمام",
		"quantity": "1",
		"size": "طبلية",
		"shipping_type": "dry",
		"type_of_goods": "خشب",
		"status": "cancelled",
		"label": "feature",
	},
	{
		"id": "TASK-8782",
		"order_details": "You can't compress the program without quantifying the open-source SSD pixel!",
		"from": "جدة",
		"to": "نيوم",
		"quantity": "4",
		"size": "طبلية",
		"shipping_type": "frozen",
		"type_of_goods": "طعام",
		"status": "new",
		"label": "documentation",
	},
	{
		"id": "TASK-5207",
		"order_details": "We need to quantify the mobile AI sensor!",
		"from": "الجبيل",
		"to": "الدمام",
		"quantity": "1",
		"size": "طبلية",
		"shipping_type": "dry",
		"type_of_goods": "خشب",
		"status": "cancelled",
		"label": "feature",
	}
]


export const load = async () => {
    return { tasks, form: superValidate(zod(taskSchema)) }
};

export const actions = {

    update: async ({ request }) => {
        const data = Object.fromEntries(await request.formData()) as Task

        tasks = tasks.map(task => task.id === data.id ? data : task)
    },

    create: async ({ request }) => {
        console.log('hello')

		

        const data = Object.fromEntries(await request.formData()) as Task

		data.status = 'new'

        tasks.push(data)

		console.log(tasks)
    },

    delete: async ({ url }) => {

        const id = url.searchParams.get('id')

        tasks = tasks.filter(task => task.id !== id)
    }
};