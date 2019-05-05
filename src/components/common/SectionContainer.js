import React from 'react';
import styled, { css } from 'styled-components';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import { media } from '../../helpers/styleHelpers';

const SectionContainer = ({ children }) => {
	return <Wrapper>{children}</Wrapper>;
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const destopView = () => {
	return css`
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
	`;
};

const Wrapper = styled.div`height: 50vh;`;

export default SectionContainer;
