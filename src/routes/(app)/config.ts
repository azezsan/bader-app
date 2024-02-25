import * as Icons from "./icons.js";

import type { ComponentType } from "svelte";
import type { Icon } from "lucide-svelte";
import * as m from '$paraglide/messages';

export type Route = {
	title: string;
	label: string;
	icon: ComponentType<Icon>;
	variant: "default" | "ghost";
	href: string;
};

export const primaryRoutes: Route[] = [
	{
		title: m.Inbox(),
		label: "128",
		icon: Icons.Inbox,
		variant: "ghost",
		href: "/inbox",
	},
	{
		title: m.orders(),
		label: "23",
		icon: Icons.ArrowLeftRight,
		variant: "ghost",
		href: "/orders",
	}
];

export const secondaryRoutes: Route[] = [
	{
		title: m.logout(),
		label: "",
		icon: Icons.logout,
		variant: "ghost",
		href: "/",
	},
];
