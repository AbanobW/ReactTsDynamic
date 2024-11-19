import React from "react";

interface AnchorProps {
	href: string;
	target?: "_self" | "_blank" | "_parent" | "_top";
	rel?: string;
	color?: string;
	fontSize?: number;
	textDecoration?: "none" | "underline" | "overline" | "line-through";
	className?: string;
	children: React.ReactNode;
}

const Anchor: React.FC<AnchorProps> = ({
	href,
	target = "_self",
	rel,
	color = "#007bff",
	fontSize = 16,
	textDecoration = "none",
	className,
	children,
}) => {
	const anchorStyle: React.CSSProperties = {
		color,
		fontSize: `${fontSize}px`,
		textDecoration,
		cursor: "pointer",
	};

	return (
		<a
			href={href}
			target={target}
			rel={rel}
			style={anchorStyle}
			className={className}
		>
			{children}
		</a>
	);
};

export default Anchor;
