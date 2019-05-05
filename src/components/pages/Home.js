import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import ContainerHero from '../common/ContainerHero';
import Banner from '../common/Banner';

const Home = () => {
	return (
		<div>
			<ContainerHero>
				<Banner title="Hello World" />
			</ContainerHero>
		</div>
	);
};

export default Home;
