import { css } from 'styled-components';

export const colorOptions = {
	primary: 'var(--color-primary)',
	white: 'var(--color-white)',
	black: 'var(--color-black)',
	grey: 'var(--color-grey)',
	lightGrey: 'var(--color-light-grey)',
};

export const fontOptions = {
	main: 'font-family: "Lato", sans-serif;',
	slanted: 'font-family: "Courgette", cursive;',
};

export const setFlex = ({ x = 'center', y = 'center' } = {}) => {
	return css`
		display: flex;
		justify-content: ${x};
		align-items: ${y};
	`;
};

const defaultImgAddress =
	'https://images.pexels.com/photos/1320679/pexels-photo-1320679.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500';

export const setBackgroundWithUrl = (
	{ url = defaultImgAddress, color = 'rgba(0, 0, 0, 0.0)' } = {}
) => {
	return css`
		background: linear-gradient(${color}, ${color}), url(${url}) center/cover fixed no-repeat;
	`;
};
