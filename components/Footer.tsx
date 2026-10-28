import React from 'react';
import { getOriginalFooter } from '@/lib/getPageContent';

interface FooterProps {
  currentLang?: string;
}

export default function Footer({ currentLang = 'en' }: FooterProps) {
  const footerHtml = getOriginalFooter(currentLang);
  return <div style={{ display: 'contents' }} dangerouslySetInnerHTML={{ __html: footerHtml }} />;
}
