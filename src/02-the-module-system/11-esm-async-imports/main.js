'use strict';
Object.defineProperty(exports, '__esModule', { value: true });

const SUPPORTED_LANGUAGES = ['el', 'en', 'es', 'it', 'pl'];
const selectedLanguage = process.argv[2];
console.log(selectedLanguage);

if (!SUPPORTED_LANGUAGES.includes(selectedLanguage)) {
  console.error('The specified language is not supported');
  process.exit(1);
}

const translationModule = `./strings-${selectedLanguage}.js`;
import(translationModule).then(strings => {
  console.log(strings.HELLO);
});
