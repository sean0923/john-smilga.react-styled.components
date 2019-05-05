import React from 'react';
import styled from 'styled-components/macro';

import * as sh from '../../helpers/styleHelpers';

const Banner = ({ greeting, title, description }) => {
	return (
		<BannerWrapper>
			<h1>
				{greeting} <span className="title">{title}</span>
			</h1>
			<div className="info">
				<p className="description">{description}</p>
			</div>
		</BannerWrapper>
	);
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const BannerWrapper = styled.div`
	${sh.setPadding({ tb: 60, rl: 32 })};

	text-align: center;
	color: ${sh.colorOptions.white};
	${sh.setTransparentBlackBgColor(0.7)};
	${sh.setLetterSpacing(3)};

	${sh.media.tablet`
		width: 70vw;
		border: 6px solid ${sh.colorOptions.primary};
		p {
			width: 75%;
			margin: 0 auto;
		}
	`};

	p {
		width: 85%;
		margin: 0 auto;
	}

	h1 {
		text-transform: capitalize;
		color: ${sh.colorOptions.primary};
		font-size: 48px;
		${sh.easeIn('50%', '-10%', '0')};
	}

	.title {
		color: ${sh.colorOptions.white};
	}

	.description {
	}

	.info {
		${sh.easeIn('-50%', '10%', '0')};
	}
`;

export default Banner;
