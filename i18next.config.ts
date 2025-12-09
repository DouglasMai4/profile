import { defineConfig } from 'i18next-cli';

export default defineConfig({
	locales: ['en', 'pt-BR'],
	extract: {
		input: 'src/**/*.{js,jsx,ts,tsx}',
		output: 'src/utils/i18n/locales/{{language}}/{{namespace}}.json',
	},
});
