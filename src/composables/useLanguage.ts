import { ref, computed } from 'vue'
import type { Ref } from 'vue'
import { translations } from '../i18n/translations'
import type { Translations } from '../i18n/translations'

const currentLanguage: Ref<'en' | 'pt'> = ref('en')

export function useLanguage() {
  const t = computed<Translations>(() => translations[currentLanguage.value])
  
  const setLanguage = (lang: 'en' | 'pt') => {
    currentLanguage.value = lang
  }

  const getCurrentLanguage = computed(() => currentLanguage.value)

  return {
    t,
    setLanguage,
    getCurrentLanguage
  }
}