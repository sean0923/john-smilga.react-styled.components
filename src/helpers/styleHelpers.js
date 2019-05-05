import { css, keyframes } from 'styled-components';

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

export const setRem = (num = 16) => {
	return `${num / 16}rem`;
};

export const setPadding = ({ t = 0, r = 0, b = 0, l = 0, tb = 0, rl = 0 } = {}) => {
	if (tb && rl) {
		return `padding: ${setRem(tb)} ${setRem(rl)};`;
	}

	return `padding: ${setRem(t)} ${setRem(r)} ${setRem(b)} ${setRem(l)};`;
};

export const setTransparentBlackBgColor = (num = 0.2) => {
	return css`
		background-color: rgba(0, 0, 0, ${num});
	`;
};

export const setLetterSpacing = (num) => {
	return css`
		letter-spacing: ${num}px;
	`;
};

const sizes = {
	large: 1200,
	desktop: 992,
	tablet: 768,
	phone: 576,
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`@media (min-width: ${sizes[label] / 16}em) {${css(...args)};}`;

	return acc;
}, {});

export const easeIn = (beg, mid, end) => {
	const animation = keyframes`
		0% {
			opcaity: 0;
			transform: translateY(${beg});
		}

		50% {
			opcaity: 0.5;
			transform: translateY(${mid});
		}

		100% {
			opcaity: 1;
			transform: translateY(${end});
		}
	`;

	return css`
		animation: ${animation} 1s ease-in-out;
	`;
};
