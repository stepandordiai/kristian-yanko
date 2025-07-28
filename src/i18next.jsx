import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import cs from "./assets/translations/cs/translation.json";
import uk from "./assets/translations/uk/translation.json";

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		resources: {
			cs: {
				translation: cs,
			},
			uk: {
				translation: uk,
			},
		},

		fallbackLng: "cs",
		supportedLngs: ["cs", "uk"],

		detection: {
			order: ["path", "localStorage", "navigator"],
			lookupFromPathIndex: 0,
			caches: ["localStorage", "cookie"],
		},

		interpolation: {
			escapeValue: false,
		},

		react: {
			useSuspense: false,
		},
	});
