import React from 'react';
import styled, { css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Frame from '../../common/Frame';
import Button from '../../common/Button';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import { media } from '../../../helpers/styleHelpers';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import aboutBcg from '../../../images/aboutBcg.jpeg';

const About = () => {
	return (
		<AboutWrapper>
			<Frame marginBottom="32px" src={aboutBcg} />
			<div>
				<TitleWrapper>About Us</TitleWrapper>
				<DescriptionWrapper>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut facilis eligendi quis, iste
					unde aliquam nisi itaque explicabo ut voluptate dicta, perferendis sint quasi magni
					molestiae expedita tempora harum quo. Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Aut facilis eligendi quis, iste unde aliquam nisi itaque explicabo ut voluptate
					dicta, perferendis sint quasi magni molestiae expedita tempora harum quo. Lorem ipsum
					dolor.
				</DescriptionWrapper>
				<Button text="Read More" />
			</div>
		</AboutWrapper>
	);
};

export default About;

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const desktopView = () => {
	return css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 60px;
	`;
};

const AboutWrapper = styled.div`
	padding: 80px;
	${media.desktop`${desktopView()}`};
`;

const TitleWrapper = styled.h2``;
const DescriptionWrapper = styled.p`
	letter-spacing: 3px;
	margin-bottom: 20px;
`;
