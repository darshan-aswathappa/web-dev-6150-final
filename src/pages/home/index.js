import Cards from 'components/home/Cards';
import Carousel from 'components/home/Carousel';
import Video from 'components/home/Video';
import MainLayout from 'layout/main'
import React from 'react'

export default function index() {
  return (
		<MainLayout>
			<Video />
			<Cards />
			<Carousel />
		</MainLayout>
	);
}
