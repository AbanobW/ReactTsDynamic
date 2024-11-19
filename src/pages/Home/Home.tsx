import React from "react";
import Header from "../../components/Header/Header";
import styles from "./Home.module.css";
import Button from "../../components/Buttons/Button";
import P from "../../components/Text/P";
import { H1, H2, H3, H4, H5, H6 } from "../../components/Text/Heading";

const Home: React.FC = () => {
	return (
		<div className={styles.container}>
			<Header title="Welcome to My App" />
			<P
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, distinctio!"
				fontSize={20}
				textAlign="start"
				fontWeight={700}
			/>

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

            <H1 text="heading one text test" />
            <H2 text="heading one text test" />
            <H3 text="heading one text test" />
            <H4 text="heading one text test" />
            <H5 text="heading one text test" />
            <H6 text="heading one text test" />
		</div>
	);
};

export default Home;
