import styled from 'styled-components'

export const Section = styled.section`
	display: ${(props) => (props.grid ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props.row ? 'row' : 'column')};
	padding: ${(props) => props.nopadding};
	justify-content: ${(props) => (props.center ? 'center' : 'flex-start')};
	align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
	max-width: 100vw;
	box-sizing: content-box;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0;
		// width: 100vw;
		// padding: ${(props) => (props.nopadding ? '0' : '1.6rem 1.6rem 0')};
		flex-direction: column;
	}
`

export const SectionTitle = styled.h2`
	font-weight: 600;
	width: 100vw;
	font-size: ${(props) => (props.main ? '8rem' : '4rem')};
	line-height: ${(props) => (props.main ? '9rem' : '7rem')};
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;

	// padding: ${(props) => (props.nopadding ? '0' : '1rem 1rem 0')};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${(props) => (props.main ? '40px' : '48px')};
		line-height: ${(props) => (props.main ? '56px' : '48px')};
		margin-bottom: 12px;
		// padding: ${(props) => (props.main ? '30px 0 12px' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: ${(props) => (props.main ? '3rem' : '3.5rem')};
		line-height: ${(props) => (props.main ? '4rem' : '4.5rem')};
		margin-bottom: 8px;
		padding: ${(props) => (props.main ? '1rem 0 1rem' : '0')};
		// max-width: 100vw;
	}
`

export const SectionText = styled.p`
	max-width: 850px;
	font-size: 3rem;
	line-height: 4rem;
	font-weight: 300;
	padding-bottom: 4rem;
	color: ${(props) => props.theme.colors.accent4};

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 2rem;
		line-height: 3.2rem;
		padding-bottom: 2.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		// max-width: 375px;
		line-height: 2.4rem;
		padding-bottom: 1.6rem;
	}
`
export const SectionDividerContainer = styled.div`
	margin: auto;
	width: 100vw;

	@media ${(props) => props.theme.breakpoints.md} {
		width: 48px;
		height: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: auto;
		width: 100%;
		height: 5rem;
	}
`
export const SectionDivider = styled.div`
	margin: auto;
	width: 6.4rem;
	height: 0.06rem;
	border-radius: 10px;
	background-color: ${(props) => props.theme.colors.fff};
	background: ${(props) =>
		props.colorAlt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

	margin: ${(props) => (props.divider ? '5rem 0' : '')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: 48px;
		height: 4px;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 3.2rem;
		height: 0.2rem;
	}
`

export const SectionSubText = styled.p`
	max-width: 850px;
	font-weight: 300;
	font-size: 1.8rem;
	line-height: 3.2rem;
	color: ${(props) => props.theme.colors.accent5};

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 672px;
		font-size: 16px;
		line-height: 25px;
		margin-bottom: 1.6rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 1.6rem;
		font-size: 1.6rem;
		line-height: 2.4rem;
		font-weight: 200;
		display: grid;
		padding: 1rem 1rem;
		align-items: center;
		justify-content: center;
		max-width: 850px;
		font-size: 1.4rem;
		line-height: 2.2rem;
	}
`

export const ButtonBack = styled.div`
	width: ${({ alt }) => (alt ? '7.5rem' : '15rem')};
	height: ${({ alt }) => (alt ? '2.5rem' : '5rem')};
	border-radius: 5rem;
	font-size: ${({ alt }) => (alt ? '2rem' : '2.2rem')};
	font-weight: 600;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: ${({ alt, form }) => (alt || form ? '0' : '0 0 4rem')};
	// color: rgba(255, 255, 255, 1);
	color: ${(props) => props.theme.colors.accent1};
	box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
	background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)'
			: 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
	cursor: pointer;
	transition: 1.5s ease;
	position: relative;
	overflow: hidden;
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: ${({ alt }) => (alt ? '150px' : '184px')};
		height: ${({ alt }) => (alt ? '52px' : '48px')};
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
		margin-bottom: ${({ alt }) => (alt ? '0' : '64px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: ${({ alt }) => (alt ? '5rem' : '10rem')};
		height: ${({ alt }) => (alt ? '1.5rem' : '3rem')};
		font-size: 1.5rem;
		margin-bottom: ${({ alt }) => (alt ? '0' : '32px')};
	}
`

export const ButtonFront = styled.button`
	border: none;
	border-radius: 2rem;
	// color: #fff;
	// color: rgba(255, 255, 255, 1);
	color: ${(props) => props.theme.colors.accent3};
	box-shadow: 0 5px 15px rgba(145, 92, 182, 0.4);
	display: flex;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ alt }) =>
		alt
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	transition: 0.4s ease;
	font-size: ${({ alt }) => (alt ? '1.8rem' : '2rem')};
	font-weight: 600;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	box-shadow: ${({ disabled }) =>
		disabled
			? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)'
			: 'none'};

	&:hover {
		opacity: 0;
	}
	&:focus {
		outline: none;
	}
	&:active {
		opacity: 1;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	&:disabled {
		background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
		opacity: 0.5;
		box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${({ alt }) => (alt ? '20px' : '16px')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 14px;
	}
`

export const LinkContainer = styled.div`
	margin-left: ${({ large }) => (large ? '2rem' : '1rem')};
	transition: 0.3s ease;
	justify-content: center;
	border-radius: 50px;
	padding: 8px;

	&:hover {
		// background-color: #212d45;
		background-color: ${(props) => props.theme.colors.accent9};
		transform: scale(1.2);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: ${({ large }) => (large ? '16px' : '8px')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: ${({ large }) => (large ? '0' : '8px')};
	}
`

export const LinkIconImg = styled.div`
	display: flex;
	height: ${({ large }) => (large ? '32px' : '24px')};

	@media ${(props) => props.theme.breakpoints.md} {
		height: ${({ nav }) => (nav ? '16px' : '24px')};
	}

	${(props) => props.theme.breakpoints.sm} {
		height: ${({ large }) => (large ? '32px' : '16px')};
	}
`
