import styled from "styled-components";
import myImage from "../../images/als_photography_magda.8.jpg";
import { Button } from "../../globalStyles";

export const BannerButton = styled(Button)`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 90%;
	background-color: #8d592f;
	${Button}
`;
export const InfoSec = styled.div`
	padding: 3rem;
	height: auto;

	::before {
		content: "";
		position: absolute;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background-image: url(${myImage});
		background-position: center;
		background-size: cover;
		opacity: 0.5;
		z-index: -1;
	}
	@media screen and (max-width: 768px) {
		padding: 1rem 0;
		width: 100%;
	}
`;

export const InfoColumn = styled.div`
	padding: 1rem;

	@media screen and (max-width: 920px) {
		display: flex;
		justify-content: center;
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
	}
`;
