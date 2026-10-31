import React from 'react';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LOCALES } from '@/data/locales';
import { getOriginalMain, getOriginalJsonLd } from '@/lib/getPageContent';

interface PageProps {
  params: {
    lang: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(LOCALES)
    .filter(lang => lang !== 'en')
    .map(lang => ({ lang }));
}

const RESELLER_METADATA: Record<string, { title: string; description: string }> = {
  fr: {
    title: 'Panel Revendeur IPTV — Lancez Votre Business IPTV | IPTV Smarters Pro',
    description: 'Devenez revendeur IPTV avec Smarters Pro. Crédits sans expiration, panel marque blanche Xtream, marge nette 60-70%. Packs dès 99$. Test 24h gratuit inclus.',
  },
  de: {
    title: 'IPTV Reseller Panel — Starten Sie Ihr IPTV-Business | IPTV Smarters Pro',
    description: 'Werden Sie autorisierter IPTV-Reseller. Großhandel-Guthaben ohne Ablauf, Xtream-White-Label-Panel und 60-70% Nettomarge. 24h-Testzugänge inklusive.',
  },
  es: {
    title: 'Panel Reseller IPTV — Inicia tu Negocio IPTV | IPTV Smarters Pro',
    description: 'Conviértete en distribuidor IPTV autorizado. Créditos sin vencimiento, panel marca blanca Xtream y 60-70% de margen neto. Activación inmediata.',
  },
  ar: {
    title: 'لوحة موزع IPTV — ابدأ مشروع IPTV المربح | IPTV Smarters Pro',
    description: 'ابدأ مشروع توزيع اشتراكات IPTV. رصيد بدون انتهاء صلاحية، لوحة تحكم بعلامتك التجارية، وهامش ربح 60-70%. تجارب مجانية 24 ساعة ودعم واتساب فوري.',
  },
  it: {
    title: 'Pannello Rivenditore IPTV — Avvia il Tuo Business IPTV | IPTV Smarters Pro',
    description: 'Diventa rivenditore autorizzato IPTV con Smarters Pro. Crediti senza scadenza, pannello white label Xtream e margini netti del 60-70%.',
  },
  nl: {
    title: 'IPTV Reseller Panel — Start Uw IPTV Business | IPTV Smarters Pro',
    description: 'Word geautoriseerde IPTV reseller. Kredieten zonder verloopdatum, Xtream white-label panel en 60-70% winstmarge. Directe WhatsApp activatie.',
  },
  pt: {
    title: 'Painel Revendedor IPTV — Comece Seu Negócio IPTV | IPTV Smarters Pro',
    description: 'Torne-se revendedor IPTV oficial. Créditos vitalícios sem validade, painel marca branca Xtream e margem de 60-70%. Suporte WhatsApp 24/7.',
  },
  'pt-br': {
    title: 'Painel Revenda IPTV — Comece Seu Negócio IPTV | IPTV Smarters Pro',
    description: 'Comece seu negócio de revenda IPTV lucrativo. Painel próprio marca branca, créditos sem expiração e 60-70% de lucro líquido. Ativação imediata.',
  },
  pl: {
    title: 'Panel Reseller IPTV — Rozpocznij Swój Biznes IPTV | IPTV Smarters Pro',
    description: 'Zacznij własny biznes IPTV. Kredyty bez daty ważności, panel Xtream white-label i marża 60-70%. Natychmiastowa aktywacja i wsparcie 24/7.',
  },
  ko: {
    title: 'IPTV 리셀러 패널 — 나만의 IPTV 비즈니스 시작 | IPTV Smarters Pro',
    description: 'IPTV Smarters Pro 리셀러 프로그램으로 고수익 비즈니스를 시작하세요. 무제한 유효기간 크레딧, 화이트라벨 패널, 60-70% 순마진. 24시간 테스트 라인 제공.',
  },
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const currentLocale = LOCALES[params.lang] || LOCALES.en;
  const meta = RESELLER_METADATA[params.lang] || {
    title: `IPTV Reseller Panel (${currentLocale.name}) — IPTV Smarters Pro`,
    description: `Start your profitable IPTV business. Buy wholesale credits, activate lines instantly, keep 60-70% profit with our premium IPTV panel.`,
  };

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `https://thesmartersiptv.com/${params.lang}/reseller/`,
      languages: {
        en: 'https://thesmartersiptv.com/reseller/',
        fr: 'https://thesmartersiptv.com/fr/reseller/',
        de: 'https://thesmartersiptv.com/de/reseller/',
        it: 'https://thesmartersiptv.com/it/reseller/',
        es: 'https://thesmartersiptv.com/es/reseller/',
        pt: 'https://thesmartersiptv.com/pt/reseller/',
        'pt-BR': 'https://thesmartersiptv.com/pt-br/reseller/',
        nl: 'https://thesmartersiptv.com/nl/reseller/',
        pl: 'https://thesmartersiptv.com/pl/reseller/',
        ar: 'https://thesmartersiptv.com/ar/reseller/',
        ko: 'https://thesmartersiptv.com/ko/reseller/',
        'x-default': 'https://thesmartersiptv.com/reseller/',
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://thesmartersiptv.com/${params.lang}/reseller/`,
      type: 'website',
      images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: ['/og-image.jpg'],
    },
  };
}

export default function LocalizedResellerPage({ params }: PageProps) {
  const currentLocale = LOCALES[params.lang] || LOCALES.en;
  const mainHtml = getOriginalMain(`${params.lang}/reseller/index.html`);
  const jsonLd = getOriginalJsonLd(`${params.lang}/reseller/index.html`);
  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <Header currentLang={params.lang} />
      <main
        className="flex-1"
        dir={currentLocale.dir}
        dangerouslySetInnerHTML={{ __html: mainHtml }}
      />
      <Footer currentLang={params.lang} />
    </>
  );
}
