import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";

import {
	Nav,
	NavbarContainer,
	NavLogo,
	NavIcon,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	NavItemBtn,
	NavBtnLink,
} from "./Navbar.elements";

const Navbar = () => {
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);

	const showButton = () => {
		if (window.innerWidth <= 960) {
			setButton(false);
		} else {
			setButton(true);
		}
	};
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => {
		setClick(false);
	};

	useEffect(() => {
		showButton();
	}, []);

	window.addEventListener("resize", showButton);
	return (
		<>
			<IconContext.Provider value={{ color: "white" }}>
				<Nav>
					<NavbarContainer>
						<NavLogo to='/' onClick={closeMobileMenu} click={click}>
							<NavIcon />
							Magda
						</NavLogo>
						<MobileIcon onClick={handleClick}>
							{click ? <FaTimes /> : <FaBars />}
						</MobileIcon>
						<NavMenu onClick={handleClick} click={click}>
							<NavItem>
								<NavLinks to='/'>Home</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/'>My Projects</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/'>Testimonials</NavLinks>
							</NavItem>

							<NavItem>
								<NavLinks to='/'>Contact me</NavLinks>
							</NavItem>
							<NavItemBtn>
								{/* {button ? ( */}
									<NavBtnLink to='/'>
										<Button>Message me!</Button>
									</NavBtnLink>
								{/* ) : (
									<NavBtnLink to='/'>
										<Button 
										onClick={closeMobileMenu} 
										fontBig>
											Message me!
										</Button>
									</NavBtnLink>
								)} */}
							</NavItemBtn>
						</NavMenu>
					</NavbarContainer>
				</Nav>
			</IconContext.Provider>
		</>
	);
};

export default Navbar;
