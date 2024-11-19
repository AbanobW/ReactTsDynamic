import React from "react";

interface InputProps {
  type: "text" | "password" | "email" | "number" | "tel" | "search";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  id?: string;
  autoFocus?: boolean;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  color?: string;
  fontSize?: number;
  padding?: [number, number, number, number];
  margin?: [number, number, number, number];
  borderRadius?: number;
  borderColor?: string;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
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
  pattern,
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

  const inputStyle: React.CSSProperties = {
    color,
    fontSize: `${fontSize}px`,
    padding: paddingStyle,
    margin: marginStyle,
    borderRadius: `${borderRadius}px`,
    borderColor: `${borderColor}`,
    borderWidth: 1,
    borderStyle: "solid",
    outline: "none",
    width: "100%", // Makes input take full width
  };

  return (
    <input
      type={type}
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
      pattern={pattern}
      style={inputStyle}
      className={className}
    />
  );
};

export default Input;
