/* eslint-disable no-lone-blocks */
import React from "react";

interface ParagrapheProps {
	bgColor?: string;
	padding?: [number, number, number, number];
	margin?: [number, number, number, number];
	fontSize?: number;
	lineHeight?: number | string;
	fontFamily?: string;
	fontWeight?: number | string;
	textAlign?: "left" | "right" | "center" | "justify" | "start" | "end";
	color?: string;
	className?: string; // Optional custom CSS class
	children: React.ReactNode;
}

const P: React.FC<ParagrapheProps> = ({
	padding = [0, 0, 0, 0], // Default padding (top, right, bottom, left)
	margin = [0, 0, 0, 0], // Default margin (top, right, bottom, left)
	fontSize = 16,
	lineHeight = 24,
	fontFamily = "",
	fontWeight = 500,
	textAlign = "start",
	color = "#000",
	className,
	children,
}) => {
	// Convert padding and margin array to CSS
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
			{children}
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
