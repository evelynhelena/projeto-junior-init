import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../styles/global.scss";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MyApp({ Component, pageProps }: any) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
