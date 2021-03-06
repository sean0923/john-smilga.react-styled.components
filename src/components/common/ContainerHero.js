import React from 'react';
import styled from 'styled-components';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sh from '../../helpers/styleHelpers';

// -----------------------------------------------------------------------------------------
// ----------------------------------------- Data ------------------------------------------
// -----------------------------------------------------------------------------------------
import homeBcg from '../../images/homeBcg.jpeg';

const ContainerHero = ({ url = homeBcg, children }) => {
	return <Warpper url={url}>{children}</Warpper>;
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const Warpper = styled.div`
	min-height: 100vh;
	${({ url }) => sh.setBackgroundWithUrl({ url, color: 'rgba(0, 0, 0, .4)' })};
	${sh.setFlex()};
`;

export default ContainerHero;
