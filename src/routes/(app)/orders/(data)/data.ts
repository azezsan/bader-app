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
		label: m.m_new(),
		value: "new",
		icon: SignalZero,
	},
	{
		label: m.m_accepted(),
		value: "accepted",
		icon: SignalLow,
	},
	{
		label: m.m_in_progress(),
		value: "in_progress",
		icon: SignalMedium,
	},
	{
		label: m.m_delivered(),
		value: "delivered",
		icon: SignalHigh,
	},
	{
		label: m.m_cancelled(),
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
