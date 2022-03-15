module.exports = {
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localeDetection: false,
  pages: {
    '*': ['common', 'headerNavLinks', '404'],
    '/projects': ['projects'],
  },
}
