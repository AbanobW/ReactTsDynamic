import React from "react";

interface ButtonProps {
	text: string;
	bgColor?: string;
	padding?: [number, number, number, number];
	margin?: [number, number, number, number];
	fontSize?: number;
	borderColor?: string;
	borderWidth?: number;
	borderRadius?: number;
	onClick?: () => void;
	className?: string; // Optional custom CSS class
}

const Button: React.FC<ButtonProps> = ({
	text,
	bgColor = "#007bff",
	padding = [10, 20, 10, 20], // Default padding (top, right, bottom, left)
	margin = [0, 0, 0, 0], // Default margin (top, right, bottom, left)
	fontSize = 16,
	borderColor = "black",
	borderWidth = 1,
	borderRadius = 4,
	onClick,
	className,
}) => {
	// Convert padding array to CSS shorthand
	const paddingStyle = padding.map((value) => `${value}px`).join(" ");
	const marginStyle = margin.map((value) => `${value}px`).join(" ");

	return (
		<button
			className={className}
			style={{
				backgroundColor: bgColor,
				padding: paddingStyle,
				margin: marginStyle,
				fontSize: `${fontSize}px`,
				border: `${borderWidth}px solid ${borderColor}`,
				color: "#fff",
				borderRadius: `${borderRadius}px`,
				cursor: "pointer",
			}}
			onClick={onClick}
		>
			{text}
		</button>
	);
};

export default Button;

// Usage example :
/* <Button 
        className="custom-button" // Custom class for additional styling
        text="Custom Border Button"
        bgColor="#28a745"
        padding={[15, 30, 15, 30]}
        margin={[15, 30, 15, 30]}
        fontSize={18}
        borderColor="#333" // Set custom border color
        borderWidth={2} // Set custom border width
        borderRadius={8} // Set custom border radius
        onClick={() => alert('Custom Border Button Clicked!')} 
    />
 */
