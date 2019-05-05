import React from 'react';
import styled, { css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import Button from './Button';
import CardImg from './card/CardImg';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sh from '../../helpers/styleHelpers';

const marginBottom = { marginBottom: '32px' };

const Card = ({ src, title = 'Default Title', description, price }) => {
	return (
		<CardWrapper>
			<CardImg src={src} price={price} />
			<Box>
				<TitleWrapper style={marginBottom}>{title}</TitleWrapper>
				<div style={marginBottom}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et quasi odio cupiditate
					veritatis nisi tempora beatae quibusdam at. Consequuntur, perferendis quaerat iste dolore
					expedita sapiente amet maxime? Iste, quas.
				</div>
				<Button text="More Info" />
			</Box>
		</CardWrapper>
	);
};

export default Card;

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const CardWrapper = styled.div`
	margin-bottom: 40px;
	${sh.setBoxShadow()};
`;

const Box = styled.div`padding: 12px;`;

const TitleWrapper = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
`;
