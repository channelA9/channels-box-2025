import type { Language } from "./i18n";

let currentLanguage: Language = "en";

export function setCurrentLanguage(lang: Language) {
  currentLanguage = lang;
}

export function getCurrentLanguage(): Language {
  return currentLanguage;
}

// For server-side rendering, we can extract language from URL path
export function getLanguageFromContext(pageContext?: any): Language {
  // Check URL path for /jp prefix
  if (pageContext?.urlPathname) {
    const path = pageContext.urlPathname as string;
    if (path.startsWith("/jp")) {
      setCurrentLanguage("jp");
      return "jp";
    }
  }
  
  // Check URL parameters for language preference (fallback)
  if (pageContext?.urlParsed?.search) {
    const searchParams = new URLSearchParams(pageContext.urlParsed.search);
    const lang = searchParams.get("lang");
    if (lang === "jp" || lang === "en") {
      setCurrentLanguage(lang);
      return lang;
    }
  }

  // Default to English for non-/jp paths
  setCurrentLanguage("en");
  return "en";
}
