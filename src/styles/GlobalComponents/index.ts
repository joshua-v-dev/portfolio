import styled from 'styled-components'

export const Section = styled.section`
	display: ${(props) => (props ? 'grid' : 'flex')};
	flex-direction: ${(props) => (props ? 'row' : 'column')};
	padding: ${(props) => (props ? '0' : '1rem')};
	justify-content: ${(props) => (props ? 'center' : 'flex-start')};
	align-items: ${(props) => (props ? 'center' : 'flex-start')};
	box-sizing: content-box;
	position: relative;
	overflow: hidden;

	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin: 0;
		padding: ${(props) => (props ? '0' : '1.5rem 1.5rem 0')};
		flex-direction: column;
	}
`

export const SectionTitle = styled.h2`
	font-size: ${(props) => (props ? '14rem' : '9rem')};
	line-height: ${(props) => (props ? '15rem' : '10rem')};
	background: linear-gradient(121.57deg, #ffffff 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
	-webkit-background-clip: text;
	color: #ffffff;}
	// -webkit-text-fill-color: transparent;
	padding: ${(props) => (props ? '2.5rem 5rem 2.5rem 5rem' : '0')};
	display: flex;
	font-weight: 10000;
	justify-content: center;
	align-items: center;
	position: relative;
	z-index: 1000;
	text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.02);

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${(props) => (props ? '4rem' : '4.8rem')};
		line-height: ${(props) => (props ? '5.6rem' : '4.8rem')};
		margin-bottom: 1.2rem;
		padding: ${(props) => (props ? '3rem 0 1.2rem' : '0')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		// height: ${(props) => (props ? '15rem' : '5rem')};
		font-size: ${(props) => (props ? '6rem' : '3.5rem')};
		line-height: ${(props) => (props ? '7rem' : '4.5rem')};
		margin-bottom: 0.8rem;
		padding: ${(props) => (props ? '1rem 1rem 1rem' : '0')};
	}
`

export const SectionText = styled.p`
	font-size: 6rem;
	line-height: 7rem;
	font-weight: 700;

	// padding: ${(props) => (props ? '0 0 0 10rem' : '0')};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;

	color: ${(props) => props.theme.colors.accent4};

	@media ${(props) => props.theme.breakpoints.md} {
		max-width: 670px;
		font-size: 2rem;
		line-height: 3.2rem;
		padding-bottom: 2.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 2.5rem;
		line-height: 5rem;
		// padding: 3.5rem 10rem;
		width: 100%;
		postion: relative;
		z-index: 1000;
	}
`
export const SectionDividerContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 100;

	@media ${(props) => props.theme.breakpoints.md} {
		height: 0.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 0.4rem;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`
export const SectionDivider = styled.div`
	width: 100%;
	height: 0.3rem;
	border-radius: 1rem;
	background-color: ${(props) => props.theme.colors.fff};
	background: ${(props) =>
		props
			? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)'
			: 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

	margin: ${(props) => (props ? '0 10rem 10rem ' : '')};
	z-index: 100;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 4.8rem;
		height: 0.4rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		height: 0.2rem;
	}
`

export const SectionSubText = styled.p`
	font-size: 2rem;
	line-height: 3rem;
	color: ${(props) => props.theme.colors.accent5};

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 1.6rem;
		line-height: 2.5rem;
		margin-bottom: 1.6rem;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 1.6rem;
		font-size: 1.5rem;
		display: grid;
		padding: 1rem 1rem;
		align-items: center;
		justify-content: center;
		line-height: 2rem;
	}
`

export const ButtonBack = styled.div`
	width: ${({ ...props }) => (props ? '7.5rem' : '15rem')};
	height: ${({ ...props }) => (props ? '2.5rem' : '5rem')};
	border-radius: 5rem;
	border: none;
	font-size: ${({ ...props }) => (props ? '2rem' : '2.2rem')};
	font-weight: 1000;
	display: flex;
	// flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: ${({ ...props }) => (props ? '0' : '0 0 4rem')};
	color: ${(props) => props.theme.colors.accent2};
	box-shadow: 0.01rem 0.4rem 0.4rem 0.5rem #4b9fe1;
	background: ${({ ...props }) =>
		props
			? 'linear-gradient(270deg, #DF3062  0%, #4BAC3F 100%)'
			: 'linear-gradient(270deg, #F5B935 0%, #11ABC1 100%)'};
	cursor: pointer;
	transition: 1.5s ease;
	position: relative;
	overflow: hidden;
	opacity: ${({ ...props }) => (props ? '.5' : '1')};

	@media ${(props) => props.theme.breakpoints.md} {
		width: ${({ ...props }) => (props ? '15rem' : '18.4rem')};
		height: ${({ ...props }) => (props ? '5.2rem' : '4.8rem')};
		font-size: ${({ ...props }) => (props ? '2rem' : '1.6rem')};
		margin-bottom: ${({ ...props }) => (props ? '0' : '6.4rem')};
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: ${({ ...props }) => (props ? '5rem' : '10rem')};
		height: ${({ ...props }) => (props ? '1.5rem' : '3rem')};
		font-size: 1.5rem;
		margin-bottom: ${({ ...props }) => (props ? '0' : '3.2rem')};
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

export const ButtonFront = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	border: none;
	border-radius: 5rem;
	overflow: hidden;
	color: ${(props) => props.theme.colors.accent3};
	box-shadow: 0 0.5rem 0.5rem 0 #150734;
	position: absolute;
	top: 0;
	left: 0;
	width: ${({ ...props }) => (props ? '7.5rem' : '15rem')};
	height: ${({ ...props }) => (props ? '2.5rem' : '5rem')};
	margin: ${({ ...props }) => (props ? '0' : '0 0 4rem')};
	background: ${({ ...props }) =>
		props
			? 'linear-gradient(270deg, #BCFD4C 0%, #3778C2 100%)'
			: 'linear-gradient(270deg, #C1436D 0%, #3778C2 100%)'};
	opacity: ${({ disabled }) => (disabled ? '.5' : '1')};
	transition: 1.5s ease;
	font-size: ${({ ...props }) => (props ? '2rem' : '2.2rem')};
	font-weight: 1000;
	cursor: pointer;
	box-shadow: ${({ disabled }) =>
		disabled
			? 'inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.4rem rgba(20, 20, 55, 0.3)'
			: 'none'};

	&:hover {
		opacity: 0;
	}
	&:focus {
		outline: none;
	}
	&:active {
		opacity: 1;
		box-shadow: inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.4rem rgba(20, 20, 55, 0.3);
	}

	&:disabled {
		background: linear-gradient(270deg, #00dbd8 0%, #b133ff 100%);
		opacity: 0.5;
		box-shadow: inset 0 0.2rem 0.2rem rgba(46, 49, 55, 0.15), inset 0 0 0.2rem rgba(20, 20, 55, 0.3);
	}

	@media ${(props) => props.theme.breakpoints.md} {
		font-size: ${({ ...props }) => (props ? '2rem' : '1.6rem')};
		width: ${({ ...props }) => (props ? '5rem' : '10rem')};
		height: ${({ ...props }) => (props ? '1.5rem' : '3rem')};
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	@media ${(props) => props.theme.breakpoints.sm} {
		width: ${({ ...props }) => (props ? '5rem' : '10rem')};
		height: ${({ ...props }) => (props ? '1.5rem' : '3rem')};
		font-size: 1.5rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`

export const LinkContainer = styled.div`
	margin-left: ${({ ...props }) => (props ? '2rem' : '1rem')};
	transition: 0.5s ease;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 5rem;
	padding: 1rem;

	&:hover {
		background-color: ${(props) => props.theme.colors.accent9};
		transform: scale(1.5);
		cursor: pointer;
	}

	@media ${(props) => props.theme.breakpoints.md} {
		margin-left: ${({ ...props }) => (props ? '1.6rem' : '0.8rem')};
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-left: ${({ ...props }) => (props ? '0' : '0.8rem')};
	}
`

export const LinkIconImg = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: ${({ ...props }) => (props ? '3.2rem' : '2.4rem')};

	@media ${(props) => props.theme.breakpoints.md} {
		height: ${({ ...props }) => (props ? '1.6rem' : '2.4rem')};
	}

	${(props) => props.theme.breakpoints.sm} {
		height: ${({ ...props }) => (props ? '3.2rem' : '1.6rem')};
	}
`