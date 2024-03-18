import Page1 from './Page1';

import { Route, Routes, Link } from 'react-router-dom';

import Pages from './Pages';

import { themeChange } from 'theme-change';

import '@unocss/reset/tailwind.css';
import 'uno.css';
import React from 'react';

const themes: string[] = ['light', 'dark', 'cyberpunk', 'business', 'dracula'];

export function App() {
	React.useEffect(() => {
		themeChange(false);
	}, []);

	const [themeIndex, setThemeIndex] = React.useState(0);

	return (
		<div className="bg-base-200">
			<div className="navbar bg-base-100" role="navigation">
				<ul>
					<button
						data-set-theme="dracula"
						data-act-class="ACTIVECLASS"
						className="btn btn-primary mx-2 font-bold"
					>
						<div className="i-bi-list h-5 w-5" />
                    </button>
                    {/* Links to each route. Routes are in apps/spa/src/app/pages (same folder as where you are now!) */}
					<Link to="/">
						<button className="btn btn-ghost mx-2 font-bold">
                            Page 1
						</button>
					</Link>
					<Link to="/page-2">
						<button className="btn btn-ghost mx-2 font-bold">
							Page 2
						</button>
					</Link>
					<button
						data-set-theme={themes[themeIndex]}
						onClick={() => {
							setThemeIndex((themeIndex + 1) % themes.length);
						}}
						className="btn btn-primary mx-2"
					>
						<div className="i-bi-eyedropper" />
					</button>
				</ul>
			</div>
			<Routes>
				{Pages.map((page, index) => (
					<Route
						key={index}
						path={page.path}
						element={<page.content title={page.title} />}
					/>
				))}
			</Routes>
			{/* END: routes */}
		</div>
	);
}

export default App;
