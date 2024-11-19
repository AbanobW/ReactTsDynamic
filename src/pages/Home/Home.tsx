import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import Button from "../../components/Buttons/Button";
import P from "../../components/Text/P";
import { H1, H2, H3, H4, H5, H6 } from "../../components/Text/Heading";
import Anchor from "../../components/Inline/Anchor";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header title="Welcome to My App" />

			<P fontSize={20} textAlign="start" fontWeight={700}>
				{" "}
				test sd wq dsad qwds s Lorem ipsum dolor sit amet, consectetur
				adipisicing elit. Veritatis commodi, voluptatibus voluptates odio enim
				explicabo eligendi architecto ut excepturi laudantium, praesentium
				quisquam. Quasi quos pariatur iure perferendis ullam doloribus sequi.
			</P>

			<Button
				className="custom-button"
				text="Custom Dynamic Button"
				bgColor="#28a745"
				padding={[15, 30, 15, 30]}
				margin={[15, 30, 15, 30]}
				fontSize={18}
				borderColor="#333"
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
				color="#ff5733"
				fontSize={18}
				textDecoration="underline"
			>
				Go to Example
			</Anchor>
		</div>
	);
};

export default Home;
