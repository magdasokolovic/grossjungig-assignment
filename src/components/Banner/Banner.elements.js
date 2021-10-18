import styled from "styled-components";
import myImage from "../../images/als_photography_magda.8.jpg";
import { Button } from "../../globalStyles";

export const BannerButton = styled(Button)`
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	${Button}
`;
export const InfoSec = styled.div`
	padding: 3rem;
	background-image: url(${myImage});
	background-position: center;
	background-size: cover;
	height: 90vh;

	@media screen and (max-width: 768px) {
		padding: 1rem 0;
        width: 100%;
	}
`;

export const InfoColumn = styled.div`
	padding: 1rem;
	border-radius: 50px;
	background: #e0e0e0;
	box-shadow: 20px -20px 60px #bebebe, -20px 20px 60px #ffffff;
	max-width: 30%;

	@media screen and (max-width: 920px) {
		display: flex;
		justify-content: center;
		/* background: transparent; */
		/* box-shadow: none; */
		padding: 0;
		max-width: 100%;
		width: 100%;
	}
`;

export const TextWrapper = styled.div`
	max-width: 540px;
	padding-top: 16px;
	padding-bottom: 60px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	@media screen and (max-width: 768px) {
		padding: 65px;
	}
`;

export const TopLine = styled.div`
	color: #8d592f;
	font-size: 18px;
	line-height: 16px;
	font-weight: 16px;
	letter-spacing: 1.4px;
	margin-bottom: 16px;
	text-align: center;

	@media screen and (max-width: 768px) {
		font-size: 14px;
	}
`;

export const Heading = styled.h1`
	margin-bottom: 24px;
	font-size: 46px;
	line-height: 1.1;
	color: #261e14;

	@media screen and (max-width: 768px) {
		font-size: 30px;
        /* padding-right: 1rem; */
	}
`;

export const Subtitle = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	line-height: 24px;
	font-size: 18px;
	color: black;

	@media screen and (max-width: 768px) {
		font-size: 16px;
        /* padding-right: 1rem; */
	}
`;
