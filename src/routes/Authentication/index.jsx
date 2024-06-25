import SignInForm from "../../components/SignInForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import './styles.scss'

const Authentication = () => {
	return (
		<div className="authentication-container">
			
			<SignInForm/>
			<SignUpForm />

		</div>
	);
};

export default Authentication;
