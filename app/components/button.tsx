import React from 'react';

interface ButtonProps {
	children: React.ReactNode;
	disabled?: boolean;
	onClick?: (e: React.FormEvent) => void;
}

const Button = ({ children, disabled, onClick }: ButtonProps) => {
	return (
		<button
			className={`
        ${disabled ? 'bg-gray-300' : 'bg-highlight'}
        ${disabled ? 'text-gray-60' : 'text-gray-100'}
        ${disabled ? 'border-gray-60' : 'border-black'}
        px-4 py-2
        w-full
        text-body-lg
        font-bold
        mt-8
        border 
        border-b-8
        ${!disabled && 'hover:bg-highlight-shade-3'}
      `}
			disabled={disabled}
			onClick={onClick}
		>
			{children}
		</button>
	);
};

export default Button;
