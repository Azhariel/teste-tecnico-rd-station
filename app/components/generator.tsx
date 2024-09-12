'use client';
import React, { useState } from 'react';
import Button from './button';

interface FormValues {
	name: string;
	email: string;
	phone: string;
}

type FormErrors = Partial<FormValues>;

const Generator = () => {
	const [formValues, setFormValues] = useState<FormValues>({
		name: '',
		email: '',
		phone: '',
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isCardGenerated, setIsCardGenerated] = useState(false);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setFormValues({ ...formValues, [name]: value });
		if (name === 'phone') event.target.value = formatPhone(value);
		validateField(name, value);
	};

	const formatPhone = (value: string) => {
		if (!value) return '';
		value = value.replace(/\D/g, '');
		value = value.replace(/(\d{2})(\d)/, '($1) $2');
		value = value.replace(/(\d)(\d{4})$/, '$1-$2');
		return value;
	};

	const validateField = (fieldName: string, value: string) => {
		const newErrors = { ...errors };
		switch (fieldName) {
			case 'name':
				newErrors.name = value.length < 2 ? 'Nome deve ter pelo menos 2 caracteres' : '';
				break;
			case 'email':
				const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
				newErrors.email = !emailRegex.test(value) ? 'Email inválido' : '';
				break;
			case 'phone':
				const phoneRegex = /^[1-9]{2}[9]?[0-9]{8}$/;
				newErrors.phone = !phoneRegex.test(value.replace(/\D/g, '')) ? 'Telefone inválido' : '';
				break;
			default:
				break;
		}
		setErrors(newErrors);
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const submitErrors = { ...errors };
		if (!formValues.name || !formValues.email || !formValues.phone) {
			submitErrors.name = !formValues.name ? 'Campo obrigatório' : errors.name || '';
			submitErrors.email = !formValues.email ? 'Campo obrigatório' : errors.email || '';
			submitErrors.phone = !formValues.phone ? 'Campo obrigatório' : errors.phone || '';
			setErrors({ ...submitErrors });
		}
		if (Object.values(submitErrors).some((error) => error)) return;
		setIsCardGenerated(true);
	};

	const generateNewCard = () => {
		setIsCardGenerated(false);
		setFormValues({
			name: '',
			email: '',
			phone: '',
		});
		setErrors({});
	};

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
					{isCardGenerated ? (
						<>
							<p className='text-body-lg hover:cursor-pointer mb-2' onClick={generateNewCard}>
								{'< Gerar outro cartão'}
							</p>
							<div className='flex items-center gap-4 bg-white rounded-lg min-h-48 max-w-[600px] p-4'>
								<div className='flex items-center justify-center w-2/5'>
									<img src='/symbol.svg' alt='Logo Resultados Digitais' className='' />
								</div>
								<div className='flex flex-col justify-around text-body-lg text-primary-shade-1 border-l-2 border-primary pl-4 gap-2'>
									<p>{formValues.name}</p>
									<p>{formValues.phone}</p>
									<p>{formValues.email}</p>
								</div>
							</div>
							<div className='max-w-[600px]'>
								<Button disabled>BAIXAR CARTÃO ↓</Button>
							</div>
							<a
								href='https://app.rdstation.com.br/signup'
								target='_blank'
								rel='noopener noreferrer'
								className='mt-4 text-body-lg font-bold'
							>
								FAZER UM TESTE GRATUITO DO RD STATION MARKETING →
							</a>
						</>
					) : (
						<form>
							<div className='flex flex-col flex-grow text-body-lg gap-8 min-w-0'>
								<div className='flex flex-col'>
									<label htmlFor='name'>Nome*</label>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Nome completo'
										onChange={handleChange}
										className='placeholder:text-body-sm px-2 h-9 text-gray-100'
									/>
									{errors.name && <p className='text-body-sm text-highlight'>{errors.name}</p>}
								</div>
								<div className='flex flex-1 mb-2 justify-between lg:gap-12'>
									<div className='flex flex-col w-2/5 lg:w-1/2'>
										<label htmlFor='phone'>Telefone*</label>
										<input
											type='tel'
											id='phone'
											name='phone'
											placeholder='(00) 0 0000-0000'
											onChange={handleChange}
											className='placeholder:text-body-sm px-2 h-9 text-gray-100'
										/>
										{errors.phone && <p className='text-body-sm text-highlight'>{errors.phone}</p>}
									</div>

									<div className='flex flex-col w-2/5 lg:w-1/2'>
										<label htmlFor='email'>E-mail*</label>
										<input
											type='text'
											id='email'
											name='email'
											placeholder='nome@email.com'
											onChange={handleChange}
											className='placeholder:text-body-sm px-2 h-9 text-gray-100'
										/>
										{errors.email && <p className='text-body-sm text-highlight'>{errors.email}</p>}
									</div>
								</div>
							</div>
							<Button onClick={handleSubmit}>{'GERAR CARTÃO GRÁTIS →'}</Button>
							<ul className='list-disc list-inside mt-8'>
								<li>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses.</li>
								<li>Ao informar meus dados, eu concordo com a Política de privacidade.</li>
							</ul>
							<br />
							<p>* Você pode alterar suas permissões de comunicação a qualquer tempo.</p>
						</form>
					)}
				</div>
			</div>
		</div>
	);
};

export default Generator;
