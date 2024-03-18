import React from 'react'

interface CardProps {
	children: React.ReactElement | React.ReactElement[];
	onClick?: () => void;
}

export function Card(props: CardProps) {
	const { children, onClick } = props;
	return (
		<div
			className="flex flex-col border border-white p-5 border-rounded rounded-5 w-full gap-2"
			onClick={onClick}
		>
			{children}
		</div>
	);
}