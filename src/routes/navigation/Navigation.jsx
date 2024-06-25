import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";

const Navigation = () => {
	const { currentUser,setCurrentUser } = useContext(UserContext);
	console.log('currentUser', currentUser)

	return (
		<>
			<div className="navigation">
				<Link className="logo-container" to="/">
					<CrownLogo />
				</Link>

				<div className="nav-links-container">
					<Link className="nav-link" to="shop">
						SHOP
					</Link>
					{!currentUser ? (
						<Link className="nav-link" to="auth">
							SIGN IN
						</Link>
					) : (
						<Link className="nav-link" onClick={signOutUser} to="auth">
							SIGN OUT
						</Link>
					)}				
				</div>
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
