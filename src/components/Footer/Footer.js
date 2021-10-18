import React from "react";
import { Button } from "../../globalStyles";
import { IconContext } from "react-icons/lib";

import {
	FaFacebook,
	FaYoutube,
	FaInstagram,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";
import {
	FooterContainer,
	FooterSubscription,
	FooterSubHeading,
	FooterSubText,
	Form,
	FormInput,
	SocialMedia,
	SocialMediaWrap,
	SocialLogo,
	SocialIcon,
	WebsiteRights,
	SocialIcons,
	SocialIconLink,
} from "./Footer.elements";

const Footer = () => {
	return (
		<>
			<IconContext.Provider value={{ color: "white" }}>
				<FooterContainer>
					<FooterSubscription>
						<FooterSubHeading>Subscribe to my newsletter</FooterSubHeading>
						<FooterSubText>You can unsubscribe at any time</FooterSubText>
						<Form>
							<FormInput name='email' type='email' placeholder='Your Email' />
							<Button fontBig>Subscribe</Button>
						</Form>
					</FooterSubscription>

					<SocialMedia>
						<SocialMediaWrap>
							<SocialLogo to='/'>
								<SocialIcon />
								Magda
							</SocialLogo>
							<WebsiteRights>Magda &copy; 2020</WebsiteRights>
							<SocialIcons>
								<SocialIconLink href='/' target='_blank' aria-label='Facebook'>
									<FaFacebook />
								</SocialIconLink>
								<SocialIconLink
									href='/'
									target='_blank'
									aria-label='YouTube'
									rel='noopener noreferrer'>
									<FaYoutube />
								</SocialIconLink>
								<SocialIconLink href='/' target='_blank' aria-label='Instagram'>
									<FaInstagram />
								</SocialIconLink>
								<SocialIconLink href='/' target='_blank' aria-label='Twitter'>
									<FaTwitter />
								</SocialIconLink>
								<SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
									<FaLinkedin />
								</SocialIconLink>
							</SocialIcons>
						</SocialMediaWrap>
					</SocialMedia>
				</FooterContainer>
			</IconContext.Provider>
		</>
	);
};

export default Footer;
