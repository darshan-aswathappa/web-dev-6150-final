import Cards from 'components/home/Cards';
import Carousel from 'components/home/Carousel';
import HeroCard from 'components/home/HeroCard';
import Video from 'components/home/Video';
import MainLayout from 'layout/main'
import React from 'react'

export default function index() {
  return (
		<MainLayout>
			<Video />
			<HeroCard/>
			<Cards />
			<Carousel />
		</MainLayout>
	);
}
