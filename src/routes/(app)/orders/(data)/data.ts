import { Snowflake, SunSnow, Sun, SignalZero, SignalLow, SignalMedium, SignalHigh, X } from "lucide-svelte";
import * as m from '$paraglide/messages';

export const labels = [
	{
		value: "bug",
		label: "Bug",
	},
	{
		value: "feature",
		label: "Feature",
	},
	{
		value: "documentation",
		label: "Documentation",
	},
];

export const statuses = [
	{
		label: m.newT(),
		value: "new",
		icon: SignalZero,
	},
	{
		label: m.accepted(),
		value: "accepted",
		icon: SignalLow,
	},
	{
		label: m.in_progress(),
		value: "in progress",
		icon: SignalMedium,
	},
	{
		label: m.delivered(),
		value: "delivered",
		icon: SignalHigh,
	},
	{
		label: m.cancelled(),
		value: "cancelled",
		icon: X,
	},
];

export const shipping_types = [
	{
		label: m.frozen(),
		value: "frozen",
		icon: Snowflake,
	},
	{
		label: m.cold(),
		value: "cold",
		icon: SunSnow,
	},
	{
		label: m.dry(),
		value: "dry",
		icon: Sun,
	},
];
