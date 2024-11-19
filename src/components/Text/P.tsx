/* eslint-disable no-lone-blocks */
import React from "react";

interface ParagrapheProps {
	text: string;
	bgColor?: string;
	padding?: [number, number, number, number];
	margin?: [number, number, number, number];
	fontSize?: number;
	lineHeight?: number | string; // Allow 'auto' or numeric values
	fontFamily?: string;
	fontWeight?: number | string;
	textAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
	color?: string;
	className?: string; // Optional custom CSS class
}

const P: React.FC<ParagrapheProps> = ({
	text,
	padding = [0, 0, 0, 0], // Default padding (top, right, bottom, left)
	margin = [0, 0, 0, 0], // Default padding (top, right, bottom, left)
	fontSize = 16,
	lineHeight = 24, // Default lineHeight
	fontFamily = "", // Default font-family
	fontWeight = 500, // Default font-weight
	textAlign = "start", // Default text-align
	color = "#000", // Default text color
	className,
}) => {

	// Convert padding and margin array to CSS shorthand
	const paddingStyle = padding.map((value) => `${value}px`).join(" ");
	const marginStyle = margin.map((value) => `${value}px`).join(" ");

	return (
		<p
			className={className}
			style={{
				margin: marginStyle,
				padding: paddingStyle,
				fontSize: `${fontSize}px`,
				lineHeight:
					typeof lineHeight === "number" ? `${lineHeight}px` : lineHeight,
				fontFamily,
				fontWeight,
				textAlign,
				color,
			}}
		>
			{text}
		</p>
	);
};

export default P;

// Usage example :
{
	/* <P
	      text="This paragraph demonstrates all attributes of the P component."
	      padding={[10, 15, 10, 15]} // Top, right, bottom, left padding
	      margin={[20, 0, 20, 0]} // Top, right, bottom, left margin
	      fontSize={18} // Font size in pixels
	      lineHeight={1.6} // Line height as a multiplier
	      fontFamily="'Courier New', monospace" // Custom font family
	      fontWeight={700} // Bold font weight
	      textAlign="center" // Center text alignment
	      color="#ff5733" // Custom text color
	      className="custom-paragraph" // Custom CSS class
/>; */
}
