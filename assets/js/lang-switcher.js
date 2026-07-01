(function () {
  'use strict';

  const PAGE_MAP = {
    'contact-form-marketing.html': {
      fr: '/fr/marketing-formulaire-contact.html', es: '/es/marketing-formulario-contacto.html',
      zh: '/zh/lianxi-biaoge-yingxiao.html', hi: '/hi/sampark-form-marketing.html',
      ar: '/ar/tasweq-namodhaj-ittisal.html', bn: '/bn/contact-form-marketing-bn.html',
      pt: '/pt/marketing-formulario-contato.html', ru: '/ru/marketing-kontaktnoy-formy.html',
      ur: '/ur/rabta-form-marketing.html', id: '/id/marketing-formulir-kontak.html',
      de: '/de/kontaktformular-marketing.html', ja: '/ja/renraku-form-marketing.html',
      tr: '/tr/iletisim-formu-pazarlama.html', vi: '/vi/marketing-form-lien-he.html',
      ko: '/ko/yeonrak-form-marketing.html', it: '/it/marketing-modulo-contatto.html',
      th: '/th/marketing-baeb-fom-tit-to.html', fa: '/fa/bazaryabi-faram-tamase.html',
      pl: '/pl/marketing-formularz-kontaktowy.html', uk: '/uk/marketing-kontaktnoi-formy.html',
      nl: '/nl/marketing-contactformulier.html', ro: '/ro/marketing-formular-contact.html',
      el: '/el/marketing-morfis-epikoinonias.html', cs: '/cs/marketing-kontaktni-formular.html',
      sv: '/sv/kontaktformular-marknadsforing.html', hu: '/hu/kapcsolatfelvetel-urlap-marketing.html',
      ms: '/ms/pemasaran-borang-hubungi.html', he: '/he/shiur-tipul-shinuim-shivuk.html',
      sw: '/sw/masoko-fomu-mawasiliano.html'
    },
    'bulk-contact-form-submission.html': {
      fr: '/fr/soumission-formulaire-contact-en-masse.html', es: '/es/envio-masivo-formulario-contacto.html',
      zh: '/zh/piliang-lianxi-biaoge-tijiao.html', hi: '/hi/bulk-sampark-form-submission.html',
      ar: '/ar/irsaal-jumali-namodhaj-ittisal.html', bn: '/bn/bulk-contact-form-joma-bn.html',
      pt: '/pt/envio-massa-formulario-contato.html', ru: '/ru/massovaya-otpravka-kontaktnoy-formy.html',
      ur: '/ur/bulk-rabta-form-jama.html', id: '/id/pengiriman-massal-formulir-kontak.html',
      de: '/de/massenversand-kontaktformular.html', ja: '/ja/ikkatsu-renraku-form-soushin.html',
      tr: '/tr/toplu-iletisim-formu-gonderi.html', vi: '/vi/gui-hang-loat-form-lien-he.html',
      ko: '/ko/daeryang-yeonrak-form-jeongsong.html', it: '/it/invio-massa-modulo-contatto.html',
      th: '/th/song-pum-baeb-fom-tit-to.html', fa: '/fa/esal-anjoman-faram-tamase.html',
      pl: '/pl/masowa-wysylka-formularz-kontaktowy.html', uk: '/uk/masove-nadsilannia-kontaktnoi-formy.html',
      nl: '/nl/bulk-verzenden-contactformulier.html', ro: '/ro/trimitere-masa-formular-contact.html',
      el: '/el/omadiki-apostoli-morfis-epikoinonias.html', cs: '/cs/hromadne-odesilani-kontaktni-formular.html',
      sv: '/sv/massutskick-kontaktformular.html', hu: '/hu/tomeg-bekuldese-kontakt-urlap.html',
      ms: '/ms/hantar-pukal-borang-hubungi.html', he: '/he/shlihat-kama-shinuim-tipul.html',
      sw: '/sw/utumaji-wingi-fomu-mawasiliano.html'
    },
    'automated-contact-form-filler.html': {
      fr: '/fr/remplissage-automatique-formulaire-contact.html', es: '/es/relleno-automatico-formulario-contacto.html',
      zh: '/zh/zidong-tian-lianxi-biaoge.html', hi: '/hi/swachalit-sampark-form-bharai.html',
      ar: '/ar/aml-talaqi-namodhaj-ittisal.html', bn: '/bn/swachalit-contact-form-poran-bn.html',
      pt: '/pt/preenchimento-automatico-formulario-contato.html', ru: '/ru/avtomaticheskoe-zapolnenie-kontaktnoy-formy.html',
      ur: '/ur/khudkar-rabta-form-par.html', id: '/id/pengisi-otomatis-formulir-kontak.html',
      de: '/de/automatisches-ausfuellen-kontaktformular.html', ja: '/ja/jidou-nyuryoku-renraku-form.html',
      tr: '/tr/otomatik-iletisim-formu-doldurma.html', vi: '/vi/tu-dong-dien-form-lien-he.html',
      ko: '/ko/jadong-yeonrak-form-jakseong.html', it: '/it/compilazione-automatica-modulo-contatto.html',
      th: '/th/krok-baeb-fom-tit-to-ottomat.html', fa: '/fa/por-kardan-khodkar-faram-tamase.html',
      pl: '/pl/automatyczne-wypelnianie-formularz-kontaktowy.html', uk: '/uk/avtomatychne-zapovnennia-kontaktnoi-formy.html',
      nl: '/nl/automatisch-invullen-contactformulier.html', ro: '/ro/completare-automata-formular-contact.html',
      el: '/el/aftomath-symplirosi-morfis-epikoinonias.html', cs: '/cs/automaticke-vyplneni-kontaktni-formular.html',
      sv: '/sv/automatisk-ifyllning-kontaktformular.html', hu: '/hu/automatikus-kitoltes-kontakt-urlap.html',
      ms: '/ms/pengisi-automatik-borang-hubungi.html', he: '/he/miluy-otomati-shinuim-tipul.html',
      sw: '/sw/kujaza-kiotomatiki-fomu-mawasiliano.html'
    },
    // French pages
    'marketing-formulaire-contact.html': {
      en: '/contact-form-marketing.html', es: '/es/marketing-formulario-contacto.html',
      zh: '/zh/lianxi-biaoge-yingxiao.html', hi: '/hi/sampark-form-marketing.html',
      ar: '/ar/tasweq-namodhaj-ittisal.html', bn: '/bn/contact-form-marketing-bn.html',
      pt: '/pt/marketing-formulario-contato.html', ru: '/ru/marketing-kontaktnoy-formy.html',
      ur: '/ur/rabta-form-marketing.html', id: '/id/marketing-formulir-kontak.html',
      de: '/de/kontaktformular-marketing.html', ja: '/ja/renraku-form-marketing.html',
      tr: '/tr/iletisim-formu-pazarlama.html', vi: '/vi/marketing-form-lien-he.html',
      ko: '/ko/yeonrak-form-marketing.html', it: '/it/marketing-modulo-contatto.html',
      th: '/th/marketing-baeb-fom-tit-to.html', fa: '/fa/bazaryabi-faram-tamase.html',
      pl: '/pl/marketing-formularz-kontaktowy.html', uk: '/uk/marketing-kontaktnoi-formy.html',
      nl: '/nl/marketing-contactformulier.html', ro: '/ro/marketing-formular-contact.html',
      el: '/el/marketing-morfis-epikoinonias.html', cs: '/cs/marketing-kontaktni-formular.html',
      sv: '/sv/kontaktformular-marknadsforing.html', hu: '/hu/kapcsolatfelvetel-urlap-marketing.html',
      ms: '/ms/pemasaran-borang-hubungi.html', he: '/he/shiur-tipul-shinuim-shivuk.html',
      sw: '/sw/masoko-fomu-mawasiliano.html'
    },
    'soumission-formulaire-contact-en-masse.html': {
      en: '/bulk-contact-form-submission.html', es: '/es/envio-masivo-formulario-contacto.html',
      zh: '/zh/piliang-lianxi-biaoge-tijiao.html', hi: '/hi/bulk-sampark-form-submission.html',
      ar: '/ar/irsaal-jumali-namodhaj-ittisal.html', bn: '/bn/bulk-contact-form-joma-bn.html',
      pt: '/pt/envio-massa-formulario-contato.html', ru: '/ru/massovaya-otpravka-kontaktnoy-formy.html',
      ur: '/ur/bulk-rabta-form-jama.html', id: '/id/pengiriman-massal-formulir-kontak.html',
      de: '/de/massenversand-kontaktformular.html', ja: '/ja/ikkatsu-renraku-form-soushin.html',
      tr: '/tr/toplu-iletisim-formu-gonderi.html', vi: '/vi/gui-hang-loat-form-lien-he.html',
      ko: '/ko/daeryang-yeonrak-form-jeongsong.html', it: '/it/invio-massa-modulo-contatto.html',
      th: '/th/song-pum-baeb-fom-tit-to.html', fa: '/fa/esal-anjoman-faram-tamase.html',
      pl: '/pl/masowa-wysylka-formularz-kontaktowy.html', uk: '/uk/masove-nadsilannia-kontaktnoi-formy.html',
      nl: '/nl/bulk-verzenden-contactformulier.html', ro: '/ro/trimitere-masa-formular-contact.html',
      el: '/el/omadiki-apostoli-morfis-epikoinonias.html', cs: '/cs/hromadne-odesilani-kontaktni-formular.html',
      sv: '/sv/massutskick-kontaktformular.html', hu: '/hu/tomeg-bekuldese-kontakt-urlap.html',
      ms: '/ms/hantar-pukal-borang-hubungi.html', he: '/he/shlihat-kama-shinuim-tipul.html',
      sw: '/sw/utumaji-wingi-fomu-mawasiliano.html'
    },
    'remplissage-automatique-formulaire-contact.html': {
      en: '/automated-contact-form-filler.html', es: '/es/relleno-automatico-formulario-contacto.html',
      zh: '/zh/zidong-tian-lianxi-biaoge.html', hi: '/hi/swachalit-sampark-form-bharai.html',
      ar: '/ar/aml-talaqi-namodhaj-ittisal.html', bn: '/bn/swachalit-contact-form-poran-bn.html',
      pt: '/pt/preenchimento-automatico-formulario-contato.html', ru: '/ru/avtomaticheskoe-zapolnenie-kontaktnoy-formy.html',
      ur: '/ur/khudkar-rabta-form-par.html', id: '/id/pengisi-otomatis-formulir-kontak.html',
      de: '/de/automatisches-ausfuellen-kontaktformular.html', ja: '/ja/jidou-nyuryoku-renraku-form.html',
      tr: '/tr/otomatik-iletisim-formu-doldurma.html', vi: '/vi/tu-dong-dien-form-lien-he.html',
      ko: '/ko/jadong-yeonrak-form-jakseong.html', it: '/it/compilazione-automatica-modulo-contatto.html',
      th: '/th/krok-baeb-fom-tit-to-ottomat.html', fa: '/fa/por-kardan-khodkar-faram-tamase.html',
      pl: '/pl/automatyczne-wypelnianie-formularz-kontaktowy.html', uk: '/uk/avtomatychne-zapovnennia-kontaktnoi-formy.html',
      nl: '/nl/automatisch-invullen-contactformulier.html', ro: '/ro/completare-automata-formular-contact.html',
      el: '/el/aftomath-symplirosi-morfis-epikoinonias.html', cs: '/cs/automaticke-vyplneni-kontaktni-formular.html',
      sv: '/sv/automatisk-ifyllning-kontaktformular.html', hu: '/hu/automatikus-kitoltes-kontakt-urlap.html',
      ms: '/ms/pengisi-automatik-borang-hubungi.html', he: '/he/miluy-otomati-shinuim-tipul.html',
      sw: '/sw/kujaza-kiotomatiki-fomu-mawasiliano.html'
    },
    // Spanish pages
    'marketing-formulario-contacto.html': {
      en: '/contact-form-marketing.html', fr: '/fr/marketing-formulaire-contact.html',
      zh: '/zh/lianxi-biaoge-yingxiao.html', hi: '/hi/sampark-form-marketing.html',
      ar: '/ar/tasweq-namodhaj-ittisal.html', bn: '/bn/contact-form-marketing-bn.html',
      pt: '/pt/marketing-formulario-contato.html', ru: '/ru/marketing-kontaktnoy-formy.html',
      ur: '/ur/rabta-form-marketing.html', id: '/id/marketing-formulir-kontak.html',
      de: '/de/kontaktformular-marketing.html', ja: '/ja/renraku-form-marketing.html',
      tr: '/tr/iletisim-formu-pazarlama.html', vi: '/vi/marketing-form-lien-he.html',
      ko: '/ko/yeonrak-form-marketing.html', it: '/it/marketing-modulo-contatto.html',
      th: '/th/marketing-baeb-fom-tit-to.html', fa: '/fa/bazaryabi-faram-tamase.html',
      pl: '/pl/marketing-formularz-kontaktowy.html', uk: '/uk/marketing-kontaktnoi-formy.html',
      nl: '/nl/marketing-contactformulier.html', ro: '/ro/marketing-formular-contact.html',
      el: '/el/marketing-morfis-epikoinonias.html', cs: '/cs/marketing-kontaktni-formular.html',
      sv: '/sv/kontaktformular-marknadsforing.html', hu: '/hu/kapcsolatfelvetel-urlap-marketing.html',
      ms: '/ms/pemasaran-borang-hubungi.html', he: '/he/shiur-tipul-shinuim-shivuk.html',
      sw: '/sw/masoko-fomu-mawasiliano.html'
    },
    'envio-masivo-formulario-contacto.html': {
      en: '/bulk-contact-form-submission.html', fr: '/fr/soumission-formulaire-contact-en-masse.html',
      zh: '/zh/piliang-lianxi-biaoge-tijiao.html', hi: '/hi/bulk-sampark-form-submission.html',
      ar: '/ar/irsaal-jumali-namodhaj-ittisal.html', bn: '/bn/bulk-contact-form-joma-bn.html',
      pt: '/pt/envio-massa-formulario-contato.html', ru: '/ru/massovaya-otpravka-kontaktnoy-formy.html',
      ur: '/ur/bulk-rabta-form-jama.html', id: '/id/pengiriman-massal-formulir-kontak.html',
      de: '/de/massenversand-kontaktformular.html', ja: '/ja/ikkatsu-renraku-form-soushin.html',
      tr: '/tr/toplu-iletisim-formu-gonderi.html', vi: '/vi/gui-hang-loat-form-lien-he.html',
      ko: '/ko/daeryang-yeonrak-form-jeongsong.html', it: '/it/invio-massa-modulo-contatto.html',
      th: '/th/song-pum-baeb-fom-tit-to.html', fa: '/fa/esal-anjoman-faram-tamase.html',
      pl: '/pl/masowa-wysylka-formularz-kontaktowy.html', uk: '/uk/masove-nadsilannia-kontaktnoi-formy.html',
      nl: '/nl/bulk-verzenden-contactformulier.html', ro: '/ro/trimitere-masa-formular-contact.html',
      el: '/el/omadiki-apostoli-morfis-epikoinonias.html', cs: '/cs/hromadne-odesilani-kontaktni-formular.html',
      sv: '/sv/massutskick-kontaktformular.html', hu: '/hu/tomeg-bekuldese-kontakt-urlap.html',
      ms: '/ms/hantar-pukal-borang-hubungi.html', he: '/he/shlihat-kama-shinuim-tipul.html',
      sw: '/sw/utumaji-wingi-fomu-mawasiliano.html'
    },
    'relleno-automatico-formulario-contacto.html': {
      en: '/automated-contact-form-filler.html', fr: '/fr/remplissage-automatique-formulaire-contact.html',
      zh: '/zh/zidong-tian-lianxi-biaoge.html', hi: '/hi/swachalit-sampark-form-bharai.html',
      ar: '/ar/aml-talaqi-namodhaj-ittisal.html', bn: '/bn/swachalit-contact-form-poran-bn.html',
      pt: '/pt/preenchimento-automatico-formulario-contato.html', ru: '/ru/avtomaticheskoe-zapolnenie-kontaktnoy-formy.html',
      ur: '/ur/khudkar-rabta-form-par.html', id: '/id/pengisi-otomatis-formulir-kontak.html',
      de: '/de/automatisches-ausfuellen-kontaktformular.html', ja: '/ja/jidou-nyuryoku-renraku-form.html',
      tr: '/tr/otomatik-iletisim-formu-doldurma.html', vi: '/vi/tu-dong-dien-form-lien-he.html',
      ko: '/ko/jadong-yeonrak-form-jakseong.html', it: '/it/compilazione-automatica-modulo-contatto.html',
      th: '/th/krok-baeb-fom-tit-to-ottomat.html', fa: '/fa/por-kardan-khodkar-faram-tamase.html',
      pl: '/pl/automatyczne-wypelnianie-formularz-kontaktowy.html', uk: '/uk/avtomatychne-zapovnennia-kontaktnoi-formy.html',
      nl: '/nl/automatisch-invullen-contactformulier.html', ro: '/ro/completare-automata-formular-contact.html',
      el: '/el/aftomath-symplirosi-morfis-epikoinonias.html', cs: '/cs/automaticke-vyplneni-kontaktni-formular.html',
      sv: '/sv/automatisk-ifyllning-kontaktformular.html', hu: '/hu/automatikus-kitoltes-kontakt-urlap.html',
      ms: '/ms/pengisi-automatik-borang-hubungi.html', he: '/he/miluy-otomati-shinuim-tipul.html',
      sw: '/sw/kujaza-kiotomatiki-fomu-mawasiliano.html'
    }
  };

  // Build reverse mappings for all 27 new language pages dynamically
  const LANG_SLUGS = {
    zh: ['lianxi-biaoge-yingxiao.html', 'piliang-lianxi-biaoge-tijiao.html', 'zidong-tian-lianxi-biaoge.html'],
    hi: ['sampark-form-marketing.html', 'bulk-sampark-form-submission.html', 'swachalit-sampark-form-bharai.html'],
    ar: ['tasweq-namodhaj-ittisal.html', 'irsaal-jumali-namodhaj-ittisal.html', 'aml-talaqi-namodhaj-ittisal.html'],
    bn: ['contact-form-marketing-bn.html', 'bulk-contact-form-joma-bn.html', 'swachalit-contact-form-poran-bn.html'],
    pt: ['marketing-formulario-contato.html', 'envio-massa-formulario-contato.html', 'preenchimento-automatico-formulario-contato.html'],
    ru: ['marketing-kontaktnoy-formy.html', 'massovaya-otpravka-kontaktnoy-formy.html', 'avtomaticheskoe-zapolnenie-kontaktnoy-formy.html'],
    ur: ['rabta-form-marketing.html', 'bulk-rabta-form-jama.html', 'khudkar-rabta-form-par.html'],
    id: ['marketing-formulir-kontak.html', 'pengiriman-massal-formulir-kontak.html', 'pengisi-otomatis-formulir-kontak.html'],
    de: ['kontaktformular-marketing.html', 'massenversand-kontaktformular.html', 'automatisches-ausfuellen-kontaktformular.html'],
    ja: ['renraku-form-marketing.html', 'ikkatsu-renraku-form-soushin.html', 'jidou-nyuryoku-renraku-form.html'],
    tr: ['iletisim-formu-pazarlama.html', 'toplu-iletisim-formu-gonderi.html', 'otomatik-iletisim-formu-doldurma.html'],
    vi: ['marketing-form-lien-he.html', 'gui-hang-loat-form-lien-he.html', 'tu-dong-dien-form-lien-he.html'],
    ko: ['yeonrak-form-marketing.html', 'daeryang-yeonrak-form-jeongsong.html', 'jadong-yeonrak-form-jakseong.html'],
    it: ['marketing-modulo-contatto.html', 'invio-massa-modulo-contatto.html', 'compilazione-automatica-modulo-contatto.html'],
    th: ['marketing-baeb-fom-tit-to.html', 'song-pum-baeb-fom-tit-to.html', 'krok-baeb-fom-tit-to-ottomat.html'],
    fa: ['bazaryabi-faram-tamase.html', 'esal-anjoman-faram-tamase.html', 'por-kardan-khodkar-faram-tamase.html'],
    pl: ['marketing-formularz-kontaktowy.html', 'masowa-wysylka-formularz-kontaktowy.html', 'automatyczne-wypelnianie-formularz-kontaktowy.html'],
    uk: ['marketing-kontaktnoi-formy.html', 'masove-nadsilannia-kontaktnoi-formy.html', 'avtomatychne-zapovnennia-kontaktnoi-formy.html'],
    nl: ['marketing-contactformulier.html', 'bulk-verzenden-contactformulier.html', 'automatisch-invullen-contactformulier.html'],
    ro: ['marketing-formular-contact.html', 'trimitere-masa-formular-contact.html', 'completare-automata-formular-contact.html'],
    el: ['marketing-morfis-epikoinonias.html', 'omadiki-apostoli-morfis-epikoinonias.html', 'aftomath-symplirosi-morfis-epikoinonias.html'],
    cs: ['marketing-kontaktni-formular.html', 'hromadne-odesilani-kontaktni-formular.html', 'automaticke-vyplneni-kontaktni-formular.html'],
    sv: ['kontaktformular-marknadsforing.html', 'massutskick-kontaktformular.html', 'automatisk-ifyllning-kontaktformular.html'],
    hu: ['kapcsolatfelvetel-urlap-marketing.html', 'tomeg-bekuldese-kontakt-urlap.html', 'automatikus-kitoltes-kontakt-urlap.html'],
    ms: ['pemasaran-borang-hubungi.html', 'hantar-pukal-borang-hubungi.html', 'pengisi-automatik-borang-hubungi.html'],
    he: ['shiur-tipul-shinuim-shivuk.html', 'shlihat-kama-shinuim-tipul.html', 'miluy-otomati-shinuim-tipul.html'],
    sw: ['masoko-fomu-mawasiliano.html', 'utumaji-wingi-fomu-mawasiliano.html', 'kujaza-kiotomatiki-fomu-mawasiliano.html'],
    mr:  ['sampark-form-marketing.html', 'bulk-sampark-form-submission.html', 'swayam-sampark-form-bharai.html'],
    te:  ['sampark-form-marketing.html', 'bulk-sampark-form-submission.html', 'automatic-sampark-form-fill.html'],
    ta:  ['contact-form-marketing.html', 'bulk-contact-form-submission.html', 'automatic-contact-form-fill.html'],
    ha:  ['tallace-fom-sadarwa.html', 'aika-fom-sadarwa-yawa.html', 'cike-fom-sadarwa-atomatik.html'],
    yue: ['lianxi-biaoge-yingxiao.html', 'piliang-lianxi-biaoge-tijiao.html', 'zidong-tian-lianxi-biaoge.html'],
    gu:  ['sampark-form-marketing.html', 'bulk-sampark-form-submission.html', 'svachalit-sampark-form-bharai.html'],
    pa:  ['sampark-form-marketing.html', 'bulk-sampark-form-submission.html', 'automatic-sampark-form-fill.html'],
    am:  ['masawaqiya-fom-timokir.html', 'bulk-fom-mestemar.html', 'automatic-fom-mela.html'],
    yo:  ['ipolowo-fomuu-olubasoro.html', 'fifiranso-opo-fomuu.html', 'kikun-aifowole-fomuu.html'],
    my:  ['contact-form-marketing.html', 'bulk-contact-form-submission.html', 'automatic-contact-form-fill.html'],
    tl:  ['marketing-contact-form.html', 'bulk-contact-form.html', 'automatic-contact-form.html'],
    mg:  ['contact-form-marketing.html', 'bulk-contact-form-submission.html', 'automatic-contact-form-fill.html'],
    si:  ['contact-form-marketing.html', 'bulk-contact-form-submission.html', 'automatic-contact-form-fill.html']
  };

  const EN_PAGES = ['contact-form-marketing.html', 'bulk-contact-form-submission.html', 'automated-contact-form-filler.html'];
  const FR_SLUGS = ['marketing-formulaire-contact.html', 'soumission-formulaire-contact-en-masse.html', 'remplissage-automatique-formulaire-contact.html'];
  const ES_SLUGS = ['marketing-formulario-contacto.html', 'envio-masivo-formulario-contacto.html', 'relleno-automatico-formulario-contacto.html'];

  Object.keys(LANG_SLUGS).forEach(function(lang) {
    LANG_SLUGS[lang].forEach(function(slug, i) {
      var map = { en: '/' + EN_PAGES[i], fr: '/fr/' + FR_SLUGS[i], es: '/es/' + ES_SLUGS[i] };
      Object.keys(LANG_SLUGS).forEach(function(other) {
        if (other !== lang) map[other] = '/' + other + '/' + LANG_SLUGS[other][i];
      });
      PAGE_MAP[slug] = map;
    });
  });

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
    sw:  { flag: '🇰🇪', label: 'SW',  name: 'Kiswahili' },
    mr:  { flag: '🇮🇳', label: 'MR',  name: 'मराठी' },
    te:  { flag: '🇮🇳', label: 'TE',  name: 'తెలుగు' },
    ta:  { flag: '🇱🇰', label: 'TA',  name: 'தமிழ்' },
    ha:  { flag: '🇳🇬', label: 'HA',  name: 'Hausa' },
    yue: { flag: '🇭🇰', label: 'YUE', name: '粵語' },
    gu:  { flag: '🇮🇳', label: 'GU',  name: 'ગુજરાતી' },
    pa:  { flag: '🇮🇳', label: 'PA',  name: 'ਪੰਜਾਬੀ' },
    am:  { flag: '🇪🇹', label: 'AM',  name: 'አማርኛ' },
    yo:  { flag: '🇳🇬', label: 'YO',  name: 'Yorùbá' },
    my:  { flag: '🇲🇲', label: 'MY',  name: 'မြန်မာ' },
    tl:  { flag: '🇵🇭', label: 'TL',  name: 'Filipino' },
    mg:  { flag: '🇲🇬', label: 'MG',  name: 'Malagasy' },
    si:  { flag: '🇱🇰', label: 'SI',  name: 'සිංහල' }
  };

  function currentFilename() {
    var parts = window.location.pathname.split('/');
    return parts[parts.length - 1] || 'index.html';
  }

  function currentLang() {
    var path = window.location.pathname;
    var m = path.match(/^\/([a-z]{2,3})\//);
    if (m && LANG_META[m[1]]) return m[1];
    var cm = document.cookie.match(/googtrans=\/en\/(\w+)/);
    if (cm) return cm[1];
    return 'en';
  }

  function setGoogTransCookie(lang) {
    var val = lang === 'en' ? '' : '/en/' + lang;
    document.cookie = 'googtrans=' + val + '; path=/; domain=' + window.location.hostname;
    document.cookie = 'googtrans=' + val + '; path=/';
  }

  function applyLang(lang) {
    if (lang === 'en') {
      document.cookie = 'googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC';
      document.cookie = 'googtrans=; path=/; domain=' + window.location.hostname + '; expires=Thu, 01 Jan 1970 00:00:00 UTC';
    } else {
      setGoogTransCookie(lang);
    }
    window.location.reload();
  }

  window.switchLang = function (lang) {
    // Manual selection — remember it for the session, overriding browser detection
    sessionStorage.setItem('sessionLang', lang);
    sessionStorage.setItem('langManual', '1');
    var file = currentFilename();
    var map = PAGE_MAP[file];
    if (map && map[lang]) {
      window.location.href = map[lang];
      return;
    }
    applyLang(lang);
  };

  function autoDetect() {
    // Determine target language: manual choice wins, else browser language
    var target = sessionStorage.getItem('sessionLang');
    if (!target) {
      var nav = navigator.language || navigator.userLanguage || 'en';
      target = nav.split('-')[0].toLowerCase();
      if (!LANG_META[target]) target = 'en';
      sessionStorage.setItem('sessionLang', target);
    }
    // Already on a translated subpage — don't interfere
    var cur = currentLang();
    if (target === cur) return;
    // Only translate in place on main site pages (not SEO subfolders)
    var path = window.location.pathname;
    if (path.match(/^\/[a-z]{2,3}\//)) return;
    applyLang(target);
  }

  function initUI() {
    var lang = currentLang();
    var meta = LANG_META[lang] || LANG_META.en;
    var flagEl = document.getElementById('langCurrentFlag');
    var labelEl = document.getElementById('langCurrentLabel');
    if (flagEl) flagEl.textContent = meta.flag;
    if (labelEl) labelEl.textContent = meta.label;

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

    var mobileSel = document.getElementById('mobileLangSelect');
    if (mobileSel) mobileSel.value = lang;
  }

  document.addEventListener('DOMContentLoaded', function () {
    initUI();
    autoDetect();
  });
})();
