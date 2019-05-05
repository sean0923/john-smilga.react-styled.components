import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sh from '../../../helpers/styleHelpers';

const CardImg = ({ src, price }) => {
	return (
		<CardImgWrapper>
			<Img src={src} />
			<PriceWrapper>${price}</PriceWrapper>
		</CardImgWrapper>
	);
};

export default CardImg;

const CardImgWrapper = styled.div`
	position: relative;
	z-index: 100;
	${sh.setTransparentBlackBgColor(0)};

	&:hover {
		${sh.setTransition()};
		${sh.setTransparentBlackBgColor(0.5)};
	}
`;

const Img = styled.img`
	display: block;
	width: 100%;
	z-index: 1;
`;

const PriceWrapper = styled.div`
	${sh.setAbsoluteCenter()};
	${sh.setTransition()};
	padding: 8px 24px;
	border: 1px solid ${sh.colorOptions.white};
	color: ${sh.colorOptions.white};
	opacity: 0;
	${CardImgWrapper}:hover & {
		opacity: 1;
	}
`;
