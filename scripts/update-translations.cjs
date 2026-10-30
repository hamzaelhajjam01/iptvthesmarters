const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'data', 'translations.ts');
let code = fs.readFileSync(filePath, 'utf8');

// Update NavTranslations interface
code = code.replace(
  /export interface NavTranslations \{[\s\S]*?\}/,
  `export interface NavTranslations {
  home: string;
  services: string;
  features: string;
  channels: string;
  pricing: string;
  reseller: string;
  guides: string;
  products: string;
  contact: string;
  cta: string;
}`
);

const navTranslations = {
  en: { services: "IPTV Services", reseller: "Reseller", products: "Products" },
  fr: { services: "Services IPTV", reseller: "Revendeur", products: "Produits" },
  de: { services: "IPTV-Dienste", reseller: "Reseller", products: "Produkte" },
  es: { services: "Servicios IPTV", reseller: "Revendedor", products: "Productos" },
  it: { services: "Servizi IPTV", reseller: "Rivenditore", products: "Prodotti" },
  nl: { services: "IPTV-diensten", reseller: "Reseller", products: "Producten" },
  pt: { services: "Serviços IPTV", reseller: "Revendedor", products: "Produtos" },
  "pt-br": { services: "Serviços IPTV", reseller: "Revendedor", products: "Produtos" },
  pl: { services: "Usługi IPTV", reseller: "Reseller", products: "Produkty" },
  ar: { services: "خدمات IPTV", reseller: "موزع IPTV", products: "المنتجات" },
  ko: { services: "IPTV 서비스", reseller: "리셀러", products: "제품" }
};

for (const [lang, trans] of Object.entries(navTranslations)) {
  const regex = new RegExp(`("${lang}":\\s*\\{[\\s\\S]*?"nav":\\s*\\{)([\\s\\S]*?)( "cta":)`);
  code = code.replace(regex, (match, prefix, navBody, ctaPrefix) => {
    let newNav = navBody;
    if (!newNav.includes('"services"')) {
      newNav = newNav.replace('"home":', `"services": "${trans.services}",\n      "home":`);
    }
    if (!newNav.includes('"reseller"')) {
      newNav = newNav.replace('"pricing":', `"reseller": "${trans.reseller}",\n      "pricing":`);
    }
    if (!newNav.includes('"products"')) {
      newNav = newNav.replace('"guides":', `"products": "${trans.products}",\n      "guides":`);
    }
    return `${prefix}${newNav}${ctaPrefix}`;
  });
}

fs.writeFileSync(filePath, code, 'utf8');
console.log('Updated data/translations.ts with services, reseller, and products for all languages.');
