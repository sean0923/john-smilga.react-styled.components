import React from 'react';

// -----------------------------------------------------------------------------------------
// ----------------------------------- Component Import ------------------------------------
// -----------------------------------------------------------------------------------------
import ContainerHero from '../common/ContainerHero';
import Banner from '../common/Banner';

const Home = ({ className }) => {
	return (
		<div className={className}>
			<ContainerHero>
				<Banner
					greeting="Welcome to"
					title="Hello World"
					description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias laudantium doloremque, quis maiores voluptatem, adipisci ipsam possimus sit in rerum aut dolore porro itaque error quo repellendus perspiciatis illum dolorum."
				/>
			</ContainerHero>
			<div className="description">aaa</div>
		</div>
	);
};

export default Home;
