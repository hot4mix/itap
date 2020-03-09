const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const cssDeclarationSorter = require('css-declaration-sorter')({order: 'smacss'});
const purgeCss = require('@fullhuman/postcss-purgecss')({
	content: [
		'./public/index.html',
		'./resources/**/*.vue',
	],
	whitelistPatternsChildren: [/hooper$/],
	defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
});

mix.js('resources/js/main.js', 'public/js/main.js')
	.sass('resources/sass/main.scss', 'public/css/main.css')
	.setPublicPath('public')
	.options({
		processCssUrls: false,
		postCss: [
			tailwindcss('./tailwind.config.js'),
			...process.env.NODE_ENV === 'production'
				? [purgeCss, cssDeclarationSorter]
				: []
		],
	});