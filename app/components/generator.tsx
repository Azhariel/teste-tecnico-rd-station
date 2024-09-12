import React from 'react';

const Generator = () => {
	return (
		<div className='flex flex-col flex-1 mx-8 gap-y-8 lg:mx-12 lg:gap-y-0 justify-center'>
			<div className='flex flex-col items-center justify-center lg:mb-12'>
				<h1 className='text-heading-lg font-heading font-black text-center text-white mb-4'>
					Gerador de Cartão de Visita
				</h1>
				<p className='text-subtitle-sm text-white text-center'>
					Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.
				</p>
			</div>
			<div className='flex flex-col justify-center align-middle gap-y-12 lg:flex-row lg:mt-8 lg:mx-8'>
				<div className='flex flex-1 justify-center lg:justify-start lg:w-1/2'>
					<img src='/landingpage.svg' alt='Ilustração de homem pintando website' className='lg:w-2/3' />
				</div>
				<div className='flex flex-col flex-1 justify-center mb-8 lg:w-1/2'>
					<form>
						<div className='flex flex-col flex-grow text-body-lg gap-8 min-w-0'>
							<div className='flex flex-col'>
								<label htmlFor='name'>Nome*</label>
								<input
									type='text'
									id='name'
									name='name'
									placeholder='Nome completo'
									className='placeholder:text-body-sm px-2 h-9'
								/>
							</div>
							<div className='flex flex-1 mb-2 justify-between lg:gap-12'>
								<div className='flex flex-col w-2/5 lg:w-1/2'>
									<label htmlFor='phone'>Telefone*</label>
									<input
										type='text'
										id='phone'
										name='phone'
										placeholder='(00) 0 0000-0000'
										className='placeholder:text-body-sm px-2 h-9'
									/>
								</div>

								<div className='flex flex-col w-2/5 lg:w-1/2'>
									<label htmlFor='email'>E-mail*</label>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='nome@email.com'
										className='placeholder:text-body-sm px-2 h-9'
									/>
								</div>
							</div>
						</div>
						<button type='submit' className='bg-highlight px-4 py-2 w-full text-body-lg font-bold mt-8 text-gray-100'>
							GERAR CARTÃO GRÁTIS
						</button>
					</form>

					<ul className='list-disc list-inside mt-8'>
						<li>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses.</li>
						<li>Ao informar meus dados, eu concordo com a Política de privacidade.</li>
					</ul>
					<br />
					<p>* Você pode alterar suas permissões de comunicação a qualquer tempo.</p>
				</div>
			</div>
		</div>
	);
};

export default Generator;
