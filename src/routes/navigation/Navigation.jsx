import CartIcon from "../../components/CartIcon";
import React, { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
import CartDropdown from "../../components/CartDropdown";
import { CartContext } from "../../contexts/cartContext";

const Navigation = () => {
	const { currentUser, setCurrentUser } = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext)

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
					{currentUser ? 
      						<>
      							<Link className="nav-link" onClick={signOutUser} to="auth">
      								SIGN OUT
      							</Link>
      							<CartIcon />
      						</>
      					 : 
      						<Link className="nav-link" to="auth">
      							SIGN IN
      						</Link>}
				</div>
				{isCartOpen && <CartDropdown/> }
				
			</div>
			<Outlet />
		</>
	);
};

export default Navigation;
