/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */

import React from 'react';
import { BlogPost } from './components/BlogPost';

const POSTS = [
	{
		title: 'My First Post',
		lines: ["Hi, I'm Dan", 'This is line 2'],
	},
	{
		title: 'My Second Post',
		lines: ["Hi, I'm Dan", 'This is my second post'],
	},
];

export function Home({ title }: { title: string }) {
	const [bigCount, setBigCount] = React.useState(0);

	React.useEffect(() => {
		setBigCount(Number(localStorage.myStoredCount) ?? 0);
	}, [])

	const countLogic = (count: number) => {
		count = count + 1;
		localStorage.myStoredCount = count;
		return count;
	};

	const onPostClick = (index: number) => {
		setBigCount(countLogic);
	};

	return (
		<div className="w-full h-full flex flex-col gap-5 p-10 items-center justify-center bg-base-100 text-white">
			<div>{`Big Count: ${bigCount}`}</div>
			{POSTS.map((post, index) => {
				return (
					<BlogPost
						title={post.title}
						lines={post.lines}
						onPostClicked={() => onPostClick(index)}
					/>
				);
			})}
		</div>
	);
}

export default Home;
