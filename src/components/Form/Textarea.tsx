import React from "react";

interface TextAreaProps {
	placeholder?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
	name?: string;
	id?: string;
	autoFocus?: boolean;
	disabled?: boolean;
	required?: boolean;
	maxLength?: number;
	minLength?: number;
	rows?: number;
	cols?: number;
	color?: string;
	fontSize?: number;
	padding?: [number, number, number, number];
	margin?: [number, number, number, number];
	borderRadius?: number;
	borderColor?: string;
	className?: string;
}

const TextArea: React.FC<TextAreaProps> = ({
	placeholder = "",
	value,
	onChange,
	name,
	id,
	autoFocus = false,
	disabled = false,
	required = false,
	maxLength,
	minLength,
	rows = 4, // Default number of rows
	cols = 50, // Default number of columns
	color = "#000", // Default text color
	fontSize = 16,
	padding = [8, 12, 8, 12], // Default padding (top, right, bottom, left)
	margin = [8, 0, 8, 0], // Default margin (top, right, bottom, left)
	borderRadius = 4, // Default border radius
	borderColor = "#ccc", // Default border color
	className,
}) => {
	// Convert padding and margin array to CSS shorthand
	const paddingStyle = padding.map((value) => `${value}px`).join(" ");
	const marginStyle = margin.map((value) => `${value}px`).join(" ");

	const textAreaStyle: React.CSSProperties = {
		color,
		fontSize: `${fontSize}px`,
		padding: paddingStyle,
		margin: marginStyle,
		borderRadius: `${borderRadius}px`,
		borderColor,
		borderWidth: 1,
		borderStyle: "solid",
		outline: "none",
		width: "100%", // Makes textarea take full width
	};

	return (
		<textarea
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			name={name}
			id={id}
			autoFocus={autoFocus}
			disabled={disabled}
			required={required}
			maxLength={maxLength}
			minLength={minLength}
			rows={rows}
			cols={cols}
			style={textAreaStyle}
			className={className}
		/>
	);
};

export default TextArea;
