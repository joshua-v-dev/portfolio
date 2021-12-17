import React from 'react'
import { DiFirebase, DiReact, DiZend } from 'react-icons/di'
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents'
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles'

const Technologies = () => (
	<Section id='tech'>
		<SectionDivider divider />
		<SectionTitle>Technologies</SectionTitle>
		<SectionText>
			I have worked with a range a technologies in the web development world. From Back-end To
			Design
		</SectionText>
		<List>
			<ListItem>
				<picture>
					<DiReact color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Front-End</ListTitle>
					<ListParagraph>
						Experiece with <br />
						React.js
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiFirebase color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>Back-End</ListTitle>
					<ListParagraph>
						Experience with <br />
						Node and Databases
					</ListParagraph>
				</ListContainer>
			</ListItem>
			<ListItem>
				<picture>
					<DiZend color='fff' size='3rem' />
				</picture>
				<ListContainer>
					<ListTitle>UI/UX</ListTitle>
					<ListParagraph>
						Experience with <br />
						tools for the Think, Design, and Build process
					</ListParagraph>
				</ListContainer>
			</ListItem>
		</List>
		<SectionDivider divider colorAlt />
	</Section>
)

export default Technologies
