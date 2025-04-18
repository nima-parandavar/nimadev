export const useLanguageDir = () => {
  const { getLocale } = useI18n()
  return getLocale() === 'fa' ? 'rtl' : 'ltr'
}
