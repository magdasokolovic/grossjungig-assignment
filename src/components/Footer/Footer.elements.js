import styled from "styled-components";
import { Link } from "react-router-dom";
import { GrYoga } from "react-icons/gr";

export const FooterContainer = styled.div`
	background-color: #8d592f;
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
    overflow-x: hidden; 
`;
export const FooterSubscription = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	margin-bottom: 24px;
	padding: 24px;
	color: #fff;
`;

export const FooterSubHeading = styled.p`
	font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
		"Lucida Sans", Arial, sans-serif;
	margin-bottom: 24px;
	font-size: 24px;
`;

export const FooterSubText = styled.p`
	margin-bottom: 24px;
	font-size: 20px;
`;

export const Form = styled.form`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 820px) {
		flex-direction: column;
		width: 80%;
	}
`;
export const FormInput = styled.input`
	padding: 10px 20px;
	border-radius: 2px;
	margin-right: 10px;
	outline: none;
	border: none;
	font-size: 16px;
	border: 1px solid #fff;

	&::placeholder {
		color: #242424;
	}

	@media screen and (max-width: 820px) {
		width: 100%;
		margin: 0 0 16px 0;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;
export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 90%;
	max-width: 1000px;
	margin: 1rem auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
        margin: 0 auto;
	}
`;
export const SocialLogo = styled(Link)`
	color: white;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 2rem;
	align-items: center;
	margin-bottom: 16px;
`;

export const SocialIcon = styled(GrYoga)`
	margin-right: 10px;
`;
export const WebsiteRights = styled.small`
	color: white;
	margin-bottom: 16px;
`;
export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;
export const SocialIconLink = styled.a`
	color: white;
	font-size: 24px;
`;
