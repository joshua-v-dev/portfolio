import React from 'react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import { SocialIcons } from '../Header/HeaderStyles'
import {
	CompanyContainer,
	FooterWrapper,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<SocialIconsContainer>
				<CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer>
				<SocialContainer>
					<SocialIcons href='https://github.com/joshua-v-dev'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://www.linkedin.com/in/joshua-vaughn/'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer