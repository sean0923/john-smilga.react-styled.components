import React from 'react';
import styled from 'styled-components';

import * as sh from '../../helpers/styleHelpers';

const Banner = ({ title }) => {
	return (
		<BannerWrapper>
			<h1>{title}</h1>
		</BannerWrapper>
	);
};

const BannerWrapper = styled.div`
	padding: 100px;
	border: 10px solid ${sh.colorOptions.primary};
`;

export default Banner;
