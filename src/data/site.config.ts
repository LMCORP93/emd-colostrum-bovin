
// ── Types ──────────────────────────────────────────────────────────────
export interface Product {
  rank: number;
  name: string;
  brand: string;
  slug: string;
  image: string;
  brandLogo: string;
  rating: number;
  reviewCount: number;
  promoCode: string;
  promoPercent: number;
  originalPrice: string;
  discountPrice: string;
  affiliateLink: string;
  origin: string;
  availability: string;
  productType: string;
  pros: string[];
  cons: string[];
  description: string;
}

export interface SiteConfig {
  domain: string;
  isIndexable?: boolean;
  siteName: string;
  brand: string;
  product: string;
  productCategory: string;
  productFormat: string;
  tagline: string;
  affiliateLink: string;
  promoCode: string;
  originalPrice: string;
  discountPrice: string;
  rating: number;
  author: { name: string; avatar: string; bio: string; };
  seo: { title: string; description: string; ogImage: string; };
  analyticsMeasurementId?: string;
  breadcrumbs: { label: string; href: string }[];
  quickSummary: { assets: string[]; considerations: string[]; };
  pros: string[];
  cons: string[];
  faq: { question: string; answer: string }[];
  products: Product[];
  tocItems: { id: string; label: string }[];
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string }[];
}

const products: Product[] = [
  {
    rank: 1,
    name: 'Colostrum Bovin Primal',
    brand: 'Primal Supplements',
    slug: 'colostrum-bovin-primal',
    image: 'https://cdn.prod.website-files.com/68c02c2c477fdd467e6e08a1/6a01ace20c008437809a85f2_Colostrum%20Bovin%20Primal.jpg',
    brandLogo: '/images/logos/primal-logo.svg',
    rating: 9.1,
    reviewCount: 590,
    promoCode: 'LMC10',
    promoPercent: 10,
    originalPrice: '55,00 €',
    discountPrice: '49,50 €',
    affiliateLink: 'https://primalsupplements.fr/products/colostrum-bovin-primal?sca_ref=8439359.kLI1QMIcju',
    origin: '🇫🇷 France',
    availability: 'Livraison en France possible via la boutique officielle ou un revendeur',
    productType: 'Poudre de colostrum bovin, 30 doses',
    pros: [
      'Concentration en IgG garantie à 50%, vérifiée par laboratoire indépendant français',
      'Origine française traçable avec collecte dans les 24h post-vêlage',
      'Microfiltration à basse température pour préserver les fractions bioactives',
      'Format poudre simple à doser avec 30 portions de 3 g',
      'Code promo LMC10 disponible sur la boutique officielle'
    ],
    cons: [
      'Prix premium plus élevé que les colostrums génériques',
      'Produit principalement disponible en ligne',
      'Section avis produit encore limitée sur la page officielle'
    ],
    description: 'Le Colostrum Bovin Primal est actuellement l’une des options les plus cohérentes de cette catégorie : formule française, 50% d’IgG, poudre facile à utiliser et fiche produit claire.'
  }
];

const config: SiteConfig = {
  domain: 'https://colostrum-bovin.fr',
  isIndexable: true,
  siteName: 'Colostrum Bovin',
  brand: products[0].brand,
  product: products[0].name,
  productCategory: 'Colostrum bovin',
  productFormat: 'Poudre',
  tagline: 'Guide clair pour comprendre le colostrum bovin, ses bienfaits et choisir une formule sérieuse',
  affiliateLink: products[0].affiliateLink,
  promoCode: products[0].promoCode,
  originalPrice: products[0].originalPrice,
  discountPrice: products[0].discountPrice,
  rating: products[0].rating,
  author: {
    name: 'Tim',
    avatar: '/author-avatar.png',
    bio: 'Expert en compléments alimentaires. Analyse les formules, les prix et les usages réels pour aider à choisir sans bullshit.',
  },
  seo: {
    title: 'Colostrum bovin : avis, bienfaits et guide 2026',
    description: 'Guide colostrum bovin 2026 : bienfaits, avis, critères qualité, prix et notre sélection avec le Colostrum Bovin Primal en produit principal.',
    ogImage: '/og-image.jpg',
  },
  analyticsMeasurementId: 'G-K8V4EVN710',
  breadcrumbs: [{ label: 'Colostrum bovin', href: '/' }],
  quickSummary: {
    assets: [
      'Le colostrum bovin est recherché comme complément adulte pour l’intestin, l’immunité et la récupération.',
      'Primal coche les critères clés : origine française, 50% d’IgG, poudre, tests indépendants.',
      'Le code LMC10 fait passer le prix indicatif de 55,00 € à 49,50 €.'
    ],
    considerations: [
      'Catégorie encore jeune en France : le volume est plus petit que magnésium ou shilajit.',
      'Sujet YMYL : rester prudent, pas de promesse médicale.',
      'Le colostrum ne remplace pas un avis médical en cas de pathologie, grossesse ou traitement.'
    ],
  },
  pros: products[0].pros,
  cons: products[0].cons,
  faq: [
    {
      question: 'Quel est le meilleur colostrum bovin à choisir ?',
      answer: 'Primal Supplements ressort comme le choix le plus cohérent grâce à son origine française, sa concentration en IgG garantie à 50%, ses tests en laboratoire indépendant et son format poudre simple à utiliser.'
    },
    {
      question: 'Quels sont les bienfaits du colostrum bovin ?',
      answer: 'Les recherches et les marques le positionnent surtout autour de l’équilibre intestinal, du soutien des défenses naturelles et de la récupération. Ces effets restent variables selon les profils et ne doivent pas être présentés comme des garanties médicales.'
    },
    {
      question: 'Le colostrum bovin est-il adapté aux adultes ?',
      answer: 'Oui, certains compléments de colostrum bovin sont formulés pour les adultes. Il faut toutefois vérifier la qualité, l’origine, la concentration en IgG, la méthode de transformation et les précautions indiquées par la marque.'
    },
    {
      question: 'Comment prendre le Colostrum Bovin Primal ?',
      answer: 'Le produit est proposé en poudre avec 30 doses par pot. La prise doit suivre les indications publiées par Primal sur la page officielle du produit, sans dépasser les recommandations de la marque.'
    },
    {
      question: 'Le code promo LMC10 fonctionne-t-il sur le colostrum Primal ?',
      answer: 'Le code LMC10 permet d’obtenir un prix remisé indicatif de 49,50 € sur la boutique officielle Primal. Le montant final doit toujours être vérifié au checkout.'
    }
  ],
  products,
  tocItems: [
    { id: 'introduction', label: 'Introduction' },
    { id: 'produit-recommande', label: 'Produit recommandé' },
    { id: 'bienfaits', label: 'Bienfaits' },
    { id: 'choisir', label: 'Comment choisir' },
    { id: 'avis', label: 'Notre avis' },
    { id: 'faq', label: 'FAQ' },
  ],
  pages: [
    { type: 'blog', label: 'Bienfaits', slug: '/bienfaits/', image: '/images/content/colostrum-bienfaits-hero.webp' },
    { type: 'blog', label: 'Avis Primal', slug: '/avis/', image: '/images/content/colostrum-avis-hero.webp' },
    { type: 'blog', label: 'Danger', slug: '/danger/', image: '/images/content/colostrum-bienfaits-hero.webp' },
    { type: 'blog', label: 'Posologie', slug: '/posologie/', image: '/images/content/colostrum-avis-hero.webp' },
    { type: 'blog', label: 'Pharmacie', slug: '/colostrum-bovin-pharmacie/', image: '/images/content/colostrum-pharmacie-hero.webp' },
  ],
};

export default config;
