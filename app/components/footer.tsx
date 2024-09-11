import React from 'react';

const Footer = () => {
	return (
		<footer className='text-center text-gray-80 py-4 bg-gray-10 font-body'>
			<p>
				<a
					href='https://legal.rdstation.com/pt/privacy-policy/'
					target='_blank'
					rel='noopener noreferrer'
					className='underline font-semibold'
				>
					Política de Privacidade
				</a>{' '}
				© 2023 Resultados Digitais
			</p>
		</footer>
	);
};

export default Footer;
