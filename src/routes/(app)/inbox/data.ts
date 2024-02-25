import Vercel from "./(components)/icons/vercel.svelte";
import ICloud from "./(components)/icons/icloud.svelte";
import Gmail from "./(components)/icons/gmail.svelte";

import type { ComponentType } from "svelte";
import type { Icon } from "lucide-svelte";

export const mails = [
	{
		id: "6c84fb90-12c4-11e1-840d-7b25c5ee775a",
		name: "William Smith",
		email: "williamsmith@example.com",
		subject: "Meeting Tomorrow",
		text: "Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.\n\nPlease come prepared with any questions or insights you may have. Looking forward to our meeting!\n\nBest regards, William",
		date: "2023-10-22T09:00:00",
		read: true,
		labels: ["meeting", "work", "important"],
	},
	{
		id: "110e8400-e29b-11d4-a716-446655440000",
		name: "Alice Smith",
		email: "alicesmith@example.com",
		subject: "Re: Project Update",
		text: "Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.\n\nI have a few minor suggestions that I'll include in the attached document.\n\nLet's discuss these during our next meeting. Keep up the excellent work!\n\nBest regards, Alice",
		date: "2023-10-22T10:30:00",
		read: true,
		labels: ["work", "important"],
	},
	{
		id: "3e7c3f6d-bdf5-46ae-8d90-171300f27ae2",
		name: "Bob Johnson",
		email: "bobjohnson@example.com",
		subject: "Weekend Plans",
		text: "Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.\n\nIf you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.\n\nLooking forward to your response!\n\nBest, Bob",
		date: "2023-04-10T11:45:00",
		read: true,
		labels: ["personal"],
	},
];

export type Mail = (typeof mails)[number];

export type Account = {
	label: string;
	email: string;
	icon: ComponentType<Icon>;
};

export const accounts: Account[] = [
	{
		label: "Alicia Koch",
		email: "alicia@example.com",
		icon: Vercel,
	},
	{
		label: "Alicia Koch",
		email: "alicia@gmail.com",
		icon: Gmail,
	},
	{
		label: "Alicia Koch",
		email: "alicia@me.com",
		icon: ICloud,
	},
];

export const contacts = [
	{
		name: "Emma Johnson",
		email: "emma.johnson@example.com",
	},
	{
		name: "Liam Wilson",
		email: "liam.wilson@example.com",
	},
	{
		name: "Olivia Davis",
		email: "olivia.davis@example.com",
	},
	{
		name: "Noah Martinez",
		email: "noah.martinez@example.com",
	},
	{
		name: "Ava Taylor",
		email: "ava.taylor@example.com",
	},
	{
		name: "Lucas Brown",
		email: "lucas.brown@example.com",
	},
	{
		name: "Sophia Smith",
		email: "sophia.smith@example.com",
	},
	{
		name: "Ethan Wilson",
		email: "ethan.wilson@example.com",
	},
	{
		name: "Isabella Jackson",
		email: "isabella.jackson@example.com",
	},
	{
		name: "Mia Clark",
		email: "mia.clark@example.com",
	},
	{
		name: "Mason Lee",
		email: "mason.lee@example.com",
	},
	{
		name: "Layla Harris",
		email: "layla.harris@example.com",
	},
	{
		name: "William Anderson",
		email: "william.anderson@example.com",
	},

];

export type Contact = (typeof contacts)[number];
