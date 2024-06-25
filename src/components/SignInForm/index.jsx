import React, { useContext, useState } from "react";

import FormInput from "../FormInput/FormInput";
import Button from "../Button";

import {
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
	signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";
import "./styles.scss";


const defaultFormFields = {
	email: "",
	password: "",
	confirmPassword: "",
};

const SignInForm = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;
	

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormFields({ ...formFields, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		try {
			const {user} = await signInAuthUserWithEmailAndPassword(email,password);
			resetFormFields();
		} catch (error) {
			switch (error.message) {
				case 'auth/wrong-password':
					alert('Incorrect password for email')
					break;
					case 'auth/user-not-found':
						alert('no user associated with this email')
						break;
			
				default:
					console.log(error)
			}
		}
	};

	const signInWithGoogle = async () => {
		await signInWithGooglePopUp();
		
	};

	return (
		<div className="sign-up-container">
			<h2>Already have an account? </h2>
			<span>Sign in with yout email and password</span>

			<form
				onSubmit={(event) => {
					handleSubmit(event);
				}}
			>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
				<div className="buttons-container">
					<Button type="submit">SIGN IN</Button>
					<Button type='button' buttonType="google" onClick={signInWithGoogle}>
						GOOGLE SIGN IN
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignInForm;
