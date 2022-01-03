// import AppContext from 'next/app'
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

class MyDocument extends Document {
	static async getInitialProps(ctx: { DocumentContext: () => any }) {
		const sheet = new ServerStyleSheet()
		const originalRenderPage = ctx.DocumentContext

		try {
			ctx.DocumentContext = () =>
				originalRenderPage()({
					enhanceApp: (_App: JSX.IntrinsicAttributes) => (props: JSX.IntrinsicAttributes) =>
						sheet.collectStyles(<DocumentContext {...props} />),
				})

			const initialProps = await Document.getInitialProps(ctx)
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			}
		} finally {
			sheet.seal()
		}
	}
	render() {
		return (
			<Html lang='en-GB'>
				<Head>
					<link
						href='https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap'
						rel='stylesheet'
					/>
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
export default MyDocument
