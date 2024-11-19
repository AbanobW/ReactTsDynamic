/* eslint-disable no-lone-blocks */
import React from "react";

interface HeadingProps {
	text: string;
	bgColor?: string;
	padding?: [number, number, number, number];
	margin?: [number, number, number, number];
	fontSize?: number;
	lineHeight?: number | string;
	fontFamily?: string;
	fontWeight?: number | string;
	textAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
	color?: string;
	className?: string;
}

const createHeadingComponent = (
	tag: keyof JSX.IntrinsicElements,
	defaults: Partial<HeadingProps>
) => {
	return ({
		text,
		padding = defaults.padding || [0, 0, 0, 0],
		margin = defaults.margin || [0, 0, 0, 0],
		fontSize = defaults.fontSize || 16,
		lineHeight = defaults.lineHeight || 1.2,
		fontFamily = defaults.fontFamily || "Arial, sans-serif",
		fontWeight = defaults.fontWeight || 500,
		textAlign = defaults.textAlign || "start",
		color = defaults.color || "#000",
		className,
	}: HeadingProps) => {
		const paddingStyle = padding.map((value) => `${value}px`).join(" ");
		const marginStyle = margin.map((value) => `${value}px`).join(" ");

		return React.createElement(
			tag,
			{
				className,
				style: {
					margin: marginStyle,
					padding: paddingStyle,
					fontSize: `${fontSize}px`,
					lineHeight:
						typeof lineHeight === "number" ? `${lineHeight}` : lineHeight,
					fontFamily,
					fontWeight,
					textAlign,
					color,
				},
			},
			text
		);
	};
};

// Individual Heading Components with Defaults
export const H1 = createHeadingComponent("h1", {
	fontSize: 32,
	lineHeight: 1.2,
	fontWeight: 700,
});

export const H2 = createHeadingComponent("h2", {
	fontSize: 24,
	lineHeight: 1.5,
	fontWeight: 600,
});

export const H3 = createHeadingComponent("h3", {
	fontSize: 20,
	lineHeight: 1.4,
	fontWeight: 600,
});

export const H4 = createHeadingComponent("h4", {
	fontSize: 18,
	lineHeight: 1.4,
	fontWeight: 500,
});

export const H5 = createHeadingComponent("h5", {
	fontSize: 16,
	lineHeight: 1.3,
	fontWeight: 500,
});

export const H6 = createHeadingComponent("h6", {
	fontSize: 14,
	lineHeight: 1.3,
	fontWeight: 400,
});
