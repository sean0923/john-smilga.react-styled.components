const func = ({ a = 1, b = 2 } = {}) => {
	console.log(a, b);
};

func({a: 3});
