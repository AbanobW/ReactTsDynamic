import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import Button from "../../components/Buttons/Button";
import P from "../../components/Text/P";
import { H1, H2, H3, H4, H5, H6 } from "../../components/Text/Heading";
import Anchor from "../../components/Inline/Anchor";
import Input from "../../components/Form/Input";
import TextArea from "../../components/Form/Textarea";

const Home: React.FC = () => {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value);
	};
	const [textAreaValue, setTextAreaValue] = useState("");

	const handleChangetext = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		setTextAreaValue(e.target.value);
	};

	return (
		<div className={styles.container}>
			<Header title="Welcome to My App" />

			<Button
				className="custom-button"
				text="Custom Dynamic Button"
				bgColor="#28a745"
				padding={[15, 30, 15, 30]}
				margin={[15, 30, 15, 30]}
				fontSize={18}
				borderColor="#ccc"
				borderWidth={0}
				borderRadius={8}
				onClick={() => alert("Custom Border Button Clicked!")}
			/>

			<H1>heading one text test</H1>
			<H2>heading one text test</H2>
			<H3>heading one text test</H3>
			<H4>heading one text test</H4>
			<H5>heading one text test</H5>
			<H6>heading one text test</H6>

			<Anchor
				href="https://www.example.com"
				target="_blank"
				color="aqua"
				fontSize={18}
				textDecoration="underline"
			>
				Go to Example
			</Anchor>

			<Input
				type="text"
				placeholder="Enter some text"
				value={inputValue}
				onChange={handleChange}
				fontSize={18}
				color="#333"
				padding={[10, 15, 10, 15]}
				margin={[10, 0, 10, 0]}
				borderRadius={5}
				borderColor="#ccc"
			/>

			<TextArea
				placeholder="Write your thoughts here..."
				value={textAreaValue}
				onChange={handleChangetext}
				fontSize={18}
				color="#333"
				padding={[10, 15, 10, 15]}
				margin={[10, 0, 10, 0]}
				borderRadius={5}
				borderColor="#007bff"
				rows={6}
				cols={60}
			/>

			<P fontSize={20} textAlign="start" fontWeight={600}>
				Current value: {textAreaValue}
			</P>
		</div>
	);
};

export default Home;

