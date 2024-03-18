import React from 'react';
import { Card } from './Card';

interface BlogPostProps {
	title: string;
	lines: string[];
	onPostClicked: () => void;
}

export function BlogPost(props: BlogPostProps) {
	const { title, lines, onPostClicked } = props;

	const [count, setCount] = React.useState(0);
    

	const onInternalClick = () => {
		onPostClicked();
		setCount((count) => {
			return count + 1;
		});
	};

	return (
		<Card onClick={onInternalClick}>
			<div className="flex flex-row pb-2 border-b-1 gap-2">
				<img
					className="w-30 h-30 object-cover rounded rounded-20"
					src="public/img/Danwich_Picture.jpg"
				/>
				<div className="text-2xl text-white self-center">{title}</div>
			</div>
			<Card>
				<div className="text-md text-white pt-2">
					<p>{`I was clicked: ${count} times`}</p>
					{lines.map((line) => {
						return <p>{line}</p>;
					})}
				</div>
			</Card>
		</Card>
	);
}