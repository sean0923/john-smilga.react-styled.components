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

export const setPadding = (...args) => {
	if (args.length === 2) {
		return `padding: ${setRem(args[0])} ${setRem(args[1])};`;
	}

	if (args.length === 4) {
		return `padding: ${args[0]} ${args[1]} ${args[2]} ${args[3]};`;
	}

	return `padding: 0`;
};

export const setTransparentBlackBgColor = (num = 0.2) => {
	return css`
		background-color: rgba(0, 0, 0, ${num});
	`;
};

export const setLetterSpacing = (num = 3) => {
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
	acc[label] = (...args) => css`@media (min-width: ${sizes[label] / 16}em) {${css(...args)}};`;

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

export const setTransition = ({ property = 'all', time = '0.3s', timing = 'ease-in-out' } = {}) => {
	return css`
		transition: ${property} ${time} ${timing};
	`;
};

export const setAbsoluteCenter = () => {
	return css`
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	`;
};

export const setBoxShadow = (intensity = 'light') => {
	switch (intensity) {
		case 'light':
			return `box-shadow: 3px 3px 10px 0px rgba(0,0,0,0.75)`;

		case 'dark':
			return `box-shadow: 5px 5px 5px 0px rgba(0,0,0,0.75)`;

		case 'darker':
			return `box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)`;

		default:
			return `box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75)`;
	}
};
