(function () {
  'use strict';

  // Maps each page filename to its equivalents in other languages.
  // Keys are bare filenames (or paths for fr/es pages relative to root).
  const PAGE_MAP = {
    // English SEO pages → static translations
    'contact-form-marketing.html': {
      fr: '/fr/marketing-formulaire-contact.html',
      es: '/es/marketing-formulario-contacto.html'
    },
    'bulk-contact-form-submission.html': {
      fr: '/fr/soumission-formulaire-contact-en-masse.html',
      es: '/es/envio-masivo-formulario-contacto.html'
    },
    'automated-contact-form-filler.html': {
      fr: '/fr/remplissage-automatique-formulaire-contact.html',
      es: '/es/relleno-automatico-formulario-contacto.html'
    },
    // French SEO pages → reverse mappings
    'marketing-formulaire-contact.html': {
      en: '/contact-form-marketing.html',
      es: '/es/marketing-formulario-contacto.html'
    },
    'soumission-formulaire-contact-en-masse.html': {
      en: '/bulk-contact-form-submission.html',
      es: '/es/envio-masivo-formulario-contacto.html'
    },
    'remplissage-automatique-formulaire-contact.html': {
      en: '/automated-contact-form-filler.html',
      es: '/es/relleno-automatico-formulario-contacto.html'
    },
    // Spanish SEO pages → reverse mappings
    'marketing-formulario-contacto.html': {
      en: '/contact-form-marketing.html',
      fr: '/fr/marketing-formulaire-contact.html'
    },
    'envio-masivo-formulario-contacto.html': {
      en: '/bulk-contact-form-submission.html',
      fr: '/fr/soumission-formulaire-contact-en-masse.html'
    },
    'relleno-automatico-formulario-contacto.html': {
      en: '/automated-contact-form-filler.html',
      fr: '/fr/remplissage-automatique-formulaire-contact.html'
    }
  };

  const LANG_META = {
    en:  { flag: '🇺🇸', label: 'EN',  name: 'English' },
    zh:  { flag: '🇨🇳', label: 'ZH',  name: '中文' },
    hi:  { flag: '🇮🇳', label: 'HI',  name: 'हिन्दी' },
    es:  { flag: '🇪🇸', label: 'ES',  name: 'Español' },
    fr:  { flag: '🇫🇷', label: 'FR',  name: 'Français' },
    ar:  { flag: '🇸🇦', label: 'AR',  name: 'العربية' },
    bn:  { flag: '🇧🇩', label: 'BN',  name: 'বাংলা' },
    pt:  { flag: '🇧🇷', label: 'PT',  name: 'Português' },
    ru:  { flag: '🇷🇺', label: 'RU',  name: 'Русский' },
    ur:  { flag: '🇵🇰', label: 'UR',  name: 'اردو' },
    id:  { flag: '🇮🇩', label: 'ID',  name: 'Indonesia' },
    de:  { flag: '🇩🇪', label: 'DE',  name: 'Deutsch' },
    ja:  { flag: '🇯🇵', label: 'JA',  name: '日本語' },
    tr:  { flag: '🇹🇷', label: 'TR',  name: 'Türkçe' },
    vi:  { flag: '🇻🇳', label: 'VI',  name: 'Tiếng Việt' },
    ko:  { flag: '🇰🇷', label: 'KO',  name: '한국어' },
    it:  { flag: '🇮🇹', label: 'IT',  name: 'Italiano' },
    th:  { flag: '🇹🇭', label: 'TH',  name: 'ภาษาไทย' },
    fa:  { flag: '🇮🇷', label: 'FA',  name: 'فارسی' },
    pl:  { flag: '🇵🇱', label: 'PL',  name: 'Polski' },
    uk:  { flag: '🇺🇦', label: 'UK',  name: 'Українська' },
    nl:  { flag: '🇳🇱', label: 'NL',  name: 'Nederlands' },
    ro:  { flag: '🇷🇴', label: 'RO',  name: 'Română' },
    el:  { flag: '🇬🇷', label: 'EL',  name: 'Ελληνικά' },
    cs:  { flag: '🇨🇿', label: 'CS',  name: 'Čeština' },
    sv:  { flag: '🇸🇪', label: 'SV',  name: 'Svenska' },
    hu:  { flag: '🇭🇺', label: 'HU',  name: 'Magyar' },
    ms:  { flag: '🇲🇾', label: 'MS',  name: 'Melayu' },
    he:  { flag: '🇮🇱', label: 'HE',  name: 'עברית' },
    sw:  { flag: '🇰🇪', label: 'SW',  name: 'Kiswahili' }
  };

  function currentFilename() {
    var parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  // Detect current page language from URL path
  function currentLang() {
    var path = window.location.pathname;
    if (path.indexOf('/fr/') !== -1) return 'fr';
    if (path.indexOf('/es/') !== -1) return 'es';
    // Check Google Translate cookie
    var m = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (m) return m[1];
    return 'en';
  }

  function setGoogTransCookie(lang) {
    var val = lang === 'en' ? '' : '/en/' + lang;
    document.cookie = 'googtrans=' + val + '; path=/; domain=' + window.location.hostname;
    document.cookie = 'googtrans=' + val + '; path=/';
  }

  window.switchLang = function (lang) {
    var file = currentFilename();
    var map = PAGE_MAP[file];
    if (map && map[lang]) {
      window.location.href = map[lang];
      return;
    }
    // For pages not in the map (index, contact, etc.), use Google Translate
    if (lang === 'en') {
      setGoogTransCookie('en');
      // Remove googtrans param and reload
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    } else {
      setGoogTransCookie(lang);
    }
    window.location.reload();
  };

  function autoDetect() {
    // Only auto-detect once per browser session
    if (sessionStorage.getItem('langDetected')) return;
    sessionStorage.setItem('langDetected', '1');

    var nav = navigator.language || navigator.userLanguage || 'en';
    var primary = nav.split('-')[0].toLowerCase();
    var cur = currentLang();

    if (primary === cur) return; // Already correct language
    if (primary !== 'fr' && primary !== 'es') return; // Only support fr/es

    window.switchLang(primary);
  }

  function initUI() {
    var lang = currentLang();
    var meta = LANG_META[lang] || LANG_META.en;

    var flagEl = document.getElementById('langCurrentFlag');
    var labelEl = document.getElementById('langCurrentLabel');
    if (flagEl) flagEl.textContent = meta.flag;
    if (labelEl) labelEl.textContent = meta.label;

    // Toggle dropdown
    var btn = document.getElementById('langDropBtn');
    var menu = document.getElementById('langDropMenu');
    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        menu.classList.toggle('hidden');
      });
      document.addEventListener('click', function () {
        menu.classList.add('hidden');
      });
    }

    // Mobile language select
    var mobileSel = document.getElementById('mobileLangSelect');
    if (mobileSel) mobileSel.value = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initUI();
    autoDetect();
  });
})();
