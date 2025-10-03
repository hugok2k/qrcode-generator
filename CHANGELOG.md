# Changelog

## [1.1.0] - 2025-10-03

### Added
- Internationalization (i18n) support using i18next + react-i18next
	- New files: `src/i18n.js`, `src/locales/en.json`, `src/locales/es.json`
- Language switcher (EN/ES) in the app header
- Disclaimer text under the input explaining that URLs must include `https://`

### Changed
- Wired translations into `App.jsx` and `components/Footer.jsx`
- Footer text now uses translations; external links use `rel="noopener noreferrer"`

### Dependencies
- Added `i18next` and `react-i18next`

## [0.5.0] - 08-05-2025

### Added
- Loading spinner while generating QR code
- Disable download button during QR code generation

### Changed
- Replaced html2canvas with html2canvas-pro for improved performance