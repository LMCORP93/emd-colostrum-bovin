
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
  pages: { type: 'comparatif' | 'blog'; label: string; slug: string; image?: string; title?: string; description?: string; excerpt?: string }[];
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
    },
    {
      question: 'Qu’est-ce que le Colostrum Primal de Primal Supplements ?',
      answer: 'Le Colostrum Bovin Primal est la formule de colostrum bovin proposée par Primal Supplements. C’est notre sélection principale sur ce site : origine française, 50 % d’IgG garantis, microfiltration à basse température et 30 doses par pot.'
    },
    {
      question: 'Le colostrum bovin Primal est-il adapté aux adultes ?',
      answer: 'Oui, le Colostrum Bovin Primal est formulé pour les adultes. Comme tout complément, il ne remplace pas un avis médical en cas de traitement, allergie aux protéines de lait, grossesse ou pathologie spécifique.'
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
    { type: 'comparatif', label: 'Colostrum Primal', slug: '/', image: '/images/content/colostrum-bovin-hero.webp' },
    { type: 'blog', label: 'Bienfaits du colostrum', slug: '/bienfaits/', image: '/images/content/colostrum-bienfaits-hero.webp', title: 'Colostrum bovin bienfaits', description: 'Les bénéfices potentiels, limites et précautions du colostrum bovin adulte.' },
    { type: 'blog', label: 'Avis Primal', slug: '/avis/', image: '/images/content/colostrum-avis-hero.webp', title: 'Colostrum Bovin Primal avis', description: 'Avis détaillé sur le Colostrum Bovin Primal : formule, IgG, origine, prix et limites.' },
    { type: 'blog', label: 'Colostrum adulte', slug: '/colostrum-pour-adulte/', image: '/images/content/colostrum-pour-adulte-hero.webp', title: 'Colostrum pour adulte', description: 'Guide adulte : qualité, bénéfices, précautions et choix du Colostrum Bovin Primal.' },
    { type: 'blog', label: 'Colostrum en poudre', slug: '/colostrum-en-poudre/', image: '/images/content/colostrum-en-poudre-hero.webp', title: 'Colostrum en poudre', description: 'Avantages du format poudre, dosage, boisson, prix et critères qualité.' },
    { type: 'blog', label: 'Colostrum pour humain', slug: '/colostrum-bovin-pour-humain/', image: '/images/content/colostrum-bovin-humain-hero.webp', title: 'Colostrum bovin pour humain', description: 'Comprendre l’usage humain du colostrum bovin, les critères qualité et les précautions.' },
    { type: 'blog', label: 'Colostrum : danger ?', slug: '/danger/', image: '/images/content/colostrum-bienfaits-hero.webp', title: 'Colostrum bovin danger', description: 'Effets secondaires possibles, allergie au lait, profils sensibles et prudence.' },
    { type: 'blog', label: 'Posologie colostrum', slug: '/posologie/', image: '/images/content/colostrum-avis-hero.webp', title: 'Colostrum bovin posologie', description: 'Dosage, moment de prise, durée de cure, boisson froide ou tiède.' },
    { type: 'blog', label: 'Colostrum en pharmacie', slug: '/colostrum-bovin-pharmacie/', image: '/images/content/colostrum-pharmacie-hero.webp', title: 'Colostrum bovin pharmacie', description: 'Où acheter, pharmacie ou boutique officielle, prix et critères de confiance.' },
  ],
};

export default config;
