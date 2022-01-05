import React from 'react'
import { projects } from '../../constants/constants'
import {
	PageContainer,
	SliderWrapper,
	SliderImage,
	Nav,
	BackButton,
	NextButton,
	Img,
	CarouselCard,
	CarouselTitle,
} from './ImageCarouselStyles'
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'
import { CardInfo, ExternalLinks, Hr, Tag, TagList, UtilityList } from '../Projects/ProjectsStyles'

import {
	SectionDivider,
	SectionDividerContainer,
	SectionTitle,
} from '../../styles/GlobalComponents'

const ImageCarousel = () => {
	return (
		<>
			<SectionDividerContainer>
				<SectionDivider />
				<CarouselTitle>Projects</CarouselTitle>
			</SectionDividerContainer>

			<CarouselProvider
				naturalSlideWidth={60}
				naturalSlideHeight={40}
				totalSlides={projects.length}
				visibleSlides={1}>
				<PageContainer>
					<SliderWrapper>
						<Slider>
							{projects.map((p, i) => {
								return (
									<Slide key={i} index={i}>
										<CarouselCard>
											<SliderImage>
												<Img src={p.image} />
											</SliderImage>

											<SectionTitle title='true'>{p.title}</SectionTitle>

											<CardInfo className='cardInfo'>{p.description}</CardInfo>

											<SectionTitle>Stack</SectionTitle>
											<TagList>
												{p.tags.map((t, i) => {
													return <Tag key={i}>{t}</Tag>
												})}
											</TagList>

											<UtilityList>
												<ExternalLinks href={p.visit}>Code</ExternalLinks>
												<ExternalLinks href={p.source}>Source</ExternalLinks>
											</UtilityList>
										</CarouselCard>
									</Slide>
								)
							})}
						</Slider>
						<Nav>
							<BackButton>{`<`}</BackButton>
							<NextButton>{`>`}</NextButton>
						</Nav>
					</SliderWrapper>
				</PageContainer>
			</CarouselProvider>
		</>
	)
}
export default ImageCarousel
