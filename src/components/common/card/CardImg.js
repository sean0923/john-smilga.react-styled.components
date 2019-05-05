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

const Img = styled.img`
	display: block;
	width: 100%;

	${sh.setTransition()};
`;

const PriceWrapper = styled.div`
	${sh.setAbsoluteCenter()};
	${sh.setTransition()};
	padding: 8px 24px;
	border: 1px solid ${sh.colorOptions.white};
	color: ${sh.colorOptions.white};
	opacity: 0;
`;

const CardImgWrapper = styled.div`
	position: relative;
	${sh.setTransparentBlackBgColor(0)};
	background: ${sh.colorOptions.black};

	&:hover ${PriceWrapper} {
		opacity: 1;
	}

	&:hover ${Img} {
		opacity: 0.5;
	}
`;
