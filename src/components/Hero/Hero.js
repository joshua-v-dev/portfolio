import React from 'react'
import ProjectsPage from '../ProjectsPage/ProjectsPage'
import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import Button from '../../styles/GlobalComponents/Button'
import { LeftSection } from './HeroStyles'

const Hero = (props) => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Welcome To <br />
					Joshua Vaughn's <br />
					Personal Portfolio
				</SectionTitle>
				<SectionText>
					I am a passionate <br />
					Full-Stack Web Developer & UI/UX Designer.
				</SectionText>
				<Button href={<ProjectsPage />} onClick={props.handleClick}>
					Learn More
				</Button>
			</LeftSection>
		</Section>
	</>
)

export default Hero
