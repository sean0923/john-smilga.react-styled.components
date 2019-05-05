import React from 'react';
import styled from 'styled-components/macro';

// -----------------------------------------------------------------------------------------
// --------------------------------------- Helper ------------------------------------------
// -----------------------------------------------------------------------------------------
import * as sh from '../../helpers/styleHelpers';

const Button = (props) => {
	const { className, children, text, marginTop, ...rest } = props;

	return (
		<ButtonWrapper {...rest} marginTop={marginTop}>
			{renderBtnContent({ children, text })}
		</ButtonWrapper>
	);
};

const renderBtnContent = ({ children, text }) => {
	if (children) return children;

	if (text) return text;

	return 'Pass children or text';
};

// -----------------------------------------------------------------------------------------
// ---------------------------------- Styled Components ------------------------------------
// -----------------------------------------------------------------------------------------
const ButtonWrapper = styled.button`
	line-height: 1;
	${sh.setLetterSpacing()};
	cursor: pointer;
	display: inline-block;
	background-color: ${sh.colorOptions.primary};
	border: 1px solid ${sh.colorOptions.primary};
	color: ${sh.colorOptions.white};
	${sh.setPadding(17, 36)};

	margin-top: ${({ marginTop }) => marginTop};
	font-size: ${sh.setRem(18)};

	${sh.setTransition()};

	&:hover {
		background: transparent;
		color: ${sh.colorOptions.primary};
	}
`;

export default Button;
