import React from "react";
import { Link } from "react-router-dom";
import { Container, Button } from "../../globalStyles";
import {
	InfoSec,
	InfoColumn,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
    BannerButton
} from "./Banner.elements";
//, ImgWrapper, Img
const Banner = () => {
	return (
		<>
			<InfoSec>
				<Container>
						<InfoColumn>
							<TextWrapper>
								<TopLine>Welcome to my portfolio!</TopLine>
								<Heading>I build websites & have a lot of fun with it</Heading>
								<Subtitle>My hobbies besides Web Development include yoga, reading, dancing and traveling</Subtitle>
								<Link to='/contact-me'>
									<BannerButton fontBig>
										Explore my projects
									</BannerButton>
								</Link>
							</TextWrapper>
						</InfoColumn>
				</Container>
			</InfoSec>
		</>
	);
};

export default Banner;
