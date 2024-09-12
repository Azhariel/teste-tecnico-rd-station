import Footer from './components/footer';
import Generator from './components/generator';
import Header from './components/header';

const Home = () => {
	return (
		<>
			<meta name='viewport' content='width=device-width, initial-scale=1.0' />
			<title>Gerador de Cartão de Visita</title>
			<div className='flex flex-col min-h-screen'>
				<Header />
				<div className='flex flex-grow flex-col bg-gradient-to-r to-[#806eff] from-primary'>
					<Generator />
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Home;
