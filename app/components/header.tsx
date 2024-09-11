import React from 'react';

const Header: React.FC = () => {
	return (
		<header className='bg-white flex w-full items-center justify-between px-20 py-6'>
			<img src='logo.svg' alt='Logo Resultados Digitais' className='h-10 w-auto' />
			<h1 className='font-heading font-black text-heading-xs text-gray-100'>Gerador de Cartão de Visita</h1>
		</header>
	);
};

export default Header;
