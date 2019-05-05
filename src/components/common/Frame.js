import React from 'react';
import styled, { css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sh from '../../helpers/styleHelpers';

const Frame = (props) => {
	return <Img {...props} />;
};

export default Frame;

const Img = styled.img`
	display: block;
	width: 100%;
	border: 6px solid ${sh.colorOptions.primary};
	margin-bottom: ${({ marginBottom }) => marginBottom};
`;
