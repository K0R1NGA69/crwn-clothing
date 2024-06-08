import SignUpForm from "../../components/SignUpForm/SignUpForm";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopUp,
} from "../../utils/firebase/firebase.utils";

const SignIn = () => {
	const logGoogleUser = async () => {
		const { user } = await signInWithGooglePopUp();
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<>
			<div>SignIn Page</div>
			<button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm/>
		</>
	);
};

export default SignIn;
