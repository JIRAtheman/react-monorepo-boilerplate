import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetDaisy } from 'unocss-preset-daisy';

export default defineConfig({
	safelist: [],
	presets: [
		presetUno(),
		presetIcons({
			collections: {
				bi: () =>
					import('@iconify-json/bi/icons.json').then(
						(i) => i.default
					),
			},
		}),
		presetDaisy({
			themes: ['light', 'dark', 'cyberpunk', 'business', 'dracula'],
		}),
	],
});
