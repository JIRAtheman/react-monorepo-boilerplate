import Home from './Page1';
import Page2 from './Page2';
export type PageConfiguration<T> = {
	path: '/';
	content: React.FC<T>;
};

export default [
	{
		path: '/',
		title: 'Home',
		content: Home,
	},
	{
		path: '/page-2',
		title: 'Page 2',
		content: Page2,
	},
];
