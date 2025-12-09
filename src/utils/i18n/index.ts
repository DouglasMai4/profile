import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import enLang from './locales/en/translation.json';

import ptbrLang from './locales/pt-BR/translation.json';

export const resources = {
	en: {
		translation: enLang,
	},
	'pt-BR': {
		translation: ptbrLang,
	},
} as const;

export const availableLangs = [
	{
		lang: 'en',
		title: 'English',
		flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg',
	},
	{
		lang: 'pt-BR',
		title: 'Português (Brasil)',
		flag: 'https://purecatamphetamine.github.io/country-flag-icons/3x2/BR.svg',
	},
] as const;

i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		supportedLngs: availableLangs.map((language) => language.lang),
		interpolation: {
			escapeValue: false,
		},
		detection: {
			order: ['localStorage', 'navigator'],
			caches: ['localStorage'],
		},
	});

i18n.on('languageChanged', (lng) => {
	document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
