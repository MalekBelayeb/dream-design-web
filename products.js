/**
 * =========================================================
 *  DREAM DESIGN v2 — CATALOGUE PRODUITS
 *  Modifier ce fichier pour ajouter / modifier les produits
 *
 *  Catégories :
 *   meubles      → Meubles (10 sous-cat)
 *   ameublement  → Ameublement (6 sous-cat)
 *   pack-enfant  → Pack Enfant (Bébé + Junior)
 *   siesta       → Super Siesta (Canapés + Fauteuils)
 *   pack-mariage → Pack Mariage (Réception + Décoration)
 * =========================================================
 */
const CATALOG = {

  /* ─────────────────────────────────────────────────────
     CAT 1 : MEUBLES
  ───────────────────────────────────────────────────── */
  meubles: {
    label: "Meubles",
    description: "Mobilier haut de gamme pour chaque pièce de votre maison",
    cover: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&q=80",
    sub: {
      lit: {
        label: "Lit",
        cover: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80",
        products: [
          { id:"lit-1", name:"Lit Versailles",   price:"1 850 DT", colors:["#C4A265","#2C2C2C","#F0ECE4"], colorNames:["Chêne Doré","Wengé","Blanc Ivoire"], width:"160 cm", depth:"200 cm", height:"110 cm", img:"https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&q=80" },
          { id:"lit-2", name:"Lit Saphir",        price:"2 300 DT", colors:["#1A1A2E","#888","#F5F5F5"],     colorNames:["Bleu Nuit","Gris","Blanc"],         width:"180 cm", depth:"200 cm", height:"120 cm", img:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
          { id:"lit-3", name:"Lit Florence",      price:"1 450 DT", colors:["#8B7355","#E8E0D8"],            colorNames:["Noyer","Crème"],                    width:"140 cm", depth:"200 cm", height:"95 cm",  img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" }
        ]
      },
      "tables-nuit": {
        label: "Tables de Nuit",
        cover: "https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80",
        products: [
          { id:"tn-1", name:"Table de Nuit Vega", price:"320 DT", colors:["#2C2C2C","#F0ECE4"], colorNames:["Noir Mat","Blanc Ivoire"], width:"45 cm", depth:"35 cm", height:"55 cm", img:"https://images.unsplash.com/photo-1616137466211-f939a420be84?w=600&q=80" },
          { id:"tn-2", name:"Table de Nuit Luna", price:"280 DT", colors:["#C4A265","#888"],    colorNames:["Chêne","Gris"],           width:"40 cm", depth:"30 cm", height:"50 cm", img:"https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=600&q=80" }
        ]
      },
      dressing: {
        label: "Dressing",
        cover: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80",
        products: [
          { id:"dr-1", name:"Dressing Prestige XL", price:"3 200 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc Cassé","Anthracite"], width:"240 cm", depth:"60 cm", height:"220 cm", img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" },
          { id:"dr-2", name:"Dressing Walk-In",     price:"4 800 DT", colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Chêne Doré"],      width:"300 cm", depth:"60 cm", height:"220 cm", img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80" }
        ]
      },
      chaises: {
        label: "Chaises",
        cover: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80",
        products: [
          { id:"ch-1", name:"Chaise Victoria", price:"185 DT", colors:["#2C2C2C","#888","#F0ECE4","#C4A265"], colorNames:["Noir","Gris","Blanc","Beige"], width:"45 cm", depth:"48 cm", height:"88 cm", img:"https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=600&q=80" },
          { id:"ch-2", name:"Chaise Scandia",  price:"145 DT", colors:["#8B7355","#F0ECE4"],                  colorNames:["Chêne Naturel","Tissu Crème"],  width:"42 cm", depth:"45 cm", height:"82 cm", img:"https://images.unsplash.com/photo-1561677978-583a8c7a4b43?w=600&q=80" },
          { id:"ch-3", name:"Fauteuil Club",   price:"950 DT", colors:["#8B4513","#2C2C2C","#888"],           colorNames:["Cognac","Noir","Gris Perle"],   width:"80 cm", depth:"78 cm", height:"90 cm", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" }
        ]
      },
      "tables-basses": {
        label: "Tables Basses",
        cover: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
        products: [
          { id:"tb-1", name:"Table Basse Marbre",        price:"780 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Marbre Blanc","Noir"],    width:"110 cm", depth:"55 cm", height:"40 cm", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
          { id:"tb-2", name:"Table Basse Bois & Verre",  price:"560 DT", colors:["#8B7355","#888"],    colorNames:["Noyer","Verre Fumé"],     width:"100 cm", depth:"50 cm", height:"38 cm", img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" }
        ]
      },
      "tables-manger": {
        label: "Tables à Manger",
        cover: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80",
        products: [
          { id:"tm-1", name:"Table Diamante",          price:"1 250 DT", colors:["#F0ECE4","#2C2C2C","#C4A265"], colorNames:["Blanc","Noir","Chêne"],  width:"180 cm", depth:"90 cm", height:"75 cm",     img:"https://images.unsplash.com/photo-1581539250439-c96689b516dd?w=600&q=80" },
          { id:"tm-2", name:"Table Extensible Luxor",  price:"1 680 DT", colors:["#8B7355","#2C2C2C"],           colorNames:["Bois Naturel","Noir"],   width:"160–240 cm", depth:"90 cm", height:"75 cm", img:"https://images.unsplash.com/photo-1615971677499-5467cbab01c0?w=600&q=80" }
        ]
      },
      buffet: {
        label: "Buffet",
        cover: "https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&q=80",
        products: [
          { id:"buf-1", name:"Buffet Milano",  price:"1 100 DT", colors:["#F0ECE4","#2C2C2C","#8B7355"], colorNames:["Blanc","Anthracite","Noyer"], width:"160 cm", depth:"45 cm", height:"80 cm", img:"https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?w=600&q=80" },
          { id:"buf-2", name:"Buffet Baroque", price:"1 450 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc","Détails Dorés"],      width:"175 cm", depth:"48 cm", height:"85 cm", img:"https://images.unsplash.com/photo-1616138359977-2f9c45d3dc93?w=600&q=80" }
        ]
      },
      console: {
        label: "Console",
        cover: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80",
        products: [
          { id:"con-1", name:"Console Minerva",   price:"680 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir Laqué","Doré"],        width:"120 cm", depth:"35 cm", height:"82 cm", img:"https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=600&q=80" },
          { id:"con-2", name:"Console Slim Line", price:"490 DT", colors:["#F0ECE4","#888"],    colorNames:["Blanc","Acier Brossé"],     width:"100 cm", depth:"28 cm", height:"78 cm", img:"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80" }
        ]
      },
      "meuble-tv": {
        label: "Meuble TV",
        cover: "https://images.unsplash.com/photo-1593064271271-1daf2d8f3e9a?w=600&q=80",
        products: [
          { id:"tv-1", name:"Meuble TV Horizon",  price:"850 DT", colors:["#F0ECE4","#2C2C2C","#8B7355"], colorNames:["Blanc","Noir","Chêne"], width:"180 cm", depth:"40 cm", height:"45 cm", img:"https://images.unsplash.com/photo-1593064271271-1daf2d8f3e9a?w=600&q=80" },
          { id:"tv-2", name:"Meuble TV Flottant", price:"650 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Mat","Noir Mat"], width:"160 cm", depth:"35 cm", height:"40 cm", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" }
        ]
      },
      bureau: {
        label: "Bureau",
        cover: "https://images.unsplash.com/photo-1551516594-56cb78394645?w=600&q=80",
        products: [
          { id:"bur-1", name:"Bureau Directorial", price:"1 350 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chêne Massif","Noir"],  width:"160 cm", depth:"75 cm", height:"76 cm", img:"https://images.unsplash.com/photo-1551516594-56cb78394645?w=600&q=80" },
          { id:"bur-2", name:"Bureau Compact",     price:"680 DT",   colors:["#F0ECE4","#888"],    colorNames:["Blanc","Pieds Métal"],  width:"120 cm", depth:"60 cm", height:"74 cm", img:"https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&q=80" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 2 : AMEUBLEMENT
  ───────────────────────────────────────────────────── */
  ameublement: {
    label: "Ameublement",
    description: "Textiles, décoration et accessoires pour sublimer votre intérieur",
    cover: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=900&q=80",
    sub: {
      linges: {
        label: "Linges Maison",
        cover: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80",
        products: [
          { id:"lin-1", name:"Parure de Lit Luxe",      price:"185 DT",      colors:["#F0ECE4","#2C2C2C","#C0B8B0","#8B7355"], colorNames:["Blanc Cassé","Graphite","Gris Perle","Taupe"], width:"240×220 cm", depth:"—", height:"—", img:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
          { id:"lin-2", name:"Couverture Plaid Premium", price:"95 DT",       colors:["#888","#F0ECE4","#2C2C2C"],               colorNames:["Gris","Crème","Noir"],                       width:"130×150 cm", depth:"—", height:"—", img:"https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" }
        ]
      },
      rideaux: {
        label: "Rideaux",
        cover: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80",
        products: [
          { id:"rid-1", name:"Rideaux Velours Occultant", price:"220 DT / paire", colors:["#2C2C2C","#888","#C0B8B0","#F0ECE4"], colorNames:["Anthracite","Gris","Beige","Blanc"], width:"140 cm", depth:"—", height:"260 cm", img:"https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=600&q=80" },
          { id:"rid-2", name:"Voilage Lin Naturel",       price:"95 DT / paire",  colors:["#F0ECE4","#C0B8B0"],                  colorNames:["Blanc Naturel","Lin Brut"],         width:"140 cm", depth:"—", height:"240 cm", img:"https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&q=80" }
        ]
      },
      tapis: {
        label: "Tapis",
        cover: "https://images.unsplash.com/photo-1575414003739-1e7ec30d65d5?w=600&q=80",
        products: [
          { id:"tap-1", name:"Tapis Berbère Authentique", price:"380 DT", colors:["#F0ECE4","#2C2C2C","#C4A265"], colorNames:["Ivoire","Noir","Camel"],       width:"200 cm", depth:"300 cm", height:"—", img:"https://images.unsplash.com/photo-1575414003739-1e7ec30d65d5?w=600&q=80" },
          { id:"tap-2", name:"Tapis Shaggy Doux",          price:"280 DT", colors:["#F0ECE4","#888","#2C2C2C"],   colorNames:["Blanc","Gris Clair","Foncé"],  width:"160 cm", depth:"230 cm", height:"—", img:"https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?w=600&q=80" }
        ]
      },
      miroirs: {
        label: "Miroirs",
        cover: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80",
        products: [
          { id:"mir-1", name:"Miroir Arche",        price:"450 DT", colors:["#C4A265","#2C2C2C","#888"], colorNames:["Cadre Doré","Cadre Noir","Argent"], width:"80 cm",  depth:"3 cm", height:"160 cm", img:"https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&q=80" },
          { id:"mir-2", name:"Miroir Rond Laiton",  price:"320 DT", colors:["#C4A265","#2C2C2C"],       colorNames:["Laiton Brossé","Noir"],             width:"90 cm",  depth:"3 cm", height:"90 cm",  img:"https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80" }
        ]
      },
      vases: {
        label: "Vases",
        cover: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80",
        products: [
          { id:"vas-1", name:"Vase Céramique Tall", price:"85 DT",  colors:["#F0ECE4","#2C2C2C","#8B7355"], colorNames:["Blanc Mat","Noir Mat","Terracotta"], width:"18 cm", depth:"18 cm", height:"45 cm", img:"https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80" },
          { id:"vas-2", name:"Set Vases Déco ×3",   price:"120 DT", colors:["#F0ECE4","#888"],              colorNames:["Blanc","Gris"],                     width:"varies", depth:"varies", height:"20–38 cm", img:"https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=600&q=80" }
        ]
      },
      tableaux: {
        label: "Tableaux",
        cover: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80",
        products: [
          { id:"tab-1", name:"Tableau Abstrait XL", price:"350 DT", colors:["#F0ECE4","#2C2C2C","#C4A265"], colorNames:["Blanc & Noir","Gold Edition"], width:"80 cm",      depth:"3 cm", height:"100 cm", img:"https://images.unsplash.com/photo-1549887534-1541e9326642?w=600&q=80" },
          { id:"tab-2", name:"Triptyque Moderne",   price:"480 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc","Noir & Blanc"],        width:"3 × 40 cm",  depth:"3 cm", height:"60 cm",  img:"https://images.unsplash.com/photo-1533158388520-9c4fb5ce9af7?w=600&q=80" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 3 : PACK ENFANT  (renommé depuis "Enfant")
     Photos spécifiques mobilier chambre enfant
  ───────────────────────────────────────────────────── */
  "pack-enfant": {
    label: "Pack Enfant",
    description: "Chambres magiques et complètes pour bébés et enfants — confort, sécurité et magie",
    /* ✦ Photo principale showroom chambre enfant */
    cover: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=900&q=80",
    sub: {
      bebe: {
        label: "Bébé",
        /* ✦ Photo berceau / lit bébé */
        cover: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80",
        products: [
          {
            id:"bb-1", name:"Lit Bébé Nuage",
            price:"580 DT",
            colors:["#F0ECE4","#C0B8B0","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Gris Doux","Bleu Pastel","Rose Poudré"],
            width:"70 cm", depth:"140 cm", height:"85 cm",
            /* ✦ Photo lit bébé */
            img:"https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&q=80"
          },
          {
            id:"bb-2", name:"Berceau à Bascule",
            price:"380 DT",
            colors:["#F0ECE4","#C0B8B0"],
            colorNames:["Blanc","Naturel"],
            width:"55 cm", depth:"90 cm", height:"100 cm",
            /* ✦ Photo berceau */
            img:"https://images.unsplash.com/photo-1578452432665-e0475aa80651?w=600&q=80"
          },
          {
            id:"bb-3", name:"Commode Bébé Étoile",
            price:"420 DT",
            colors:["#F0ECE4","#C0B8B0","#FFD6E0"],
            colorNames:["Blanc","Gris Doux","Rose"],
            width:"80 cm", depth:"50 cm", height:"85 cm",
            /* ✦ Photo commode chambre bébé */
            img:"https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=600&q=80"
          },
          {
            id:"bb-4", name:"Armoire Bébé Nuage",
            price:"720 DT",
            colors:["#F0ECE4","#C0B8B0","#8FD3F4"],
            colorNames:["Blanc","Gris","Bleu"],
            width:"100 cm", depth:"50 cm", height:"180 cm",
            /* ✦ Photo armoire enfant blanche */
            img:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
          }
        ]
      },
      juniors: {
        label: "Enfant / Junior",
        /* ✦ Photo chambre enfant avec lit cabane */
        cover: "https://images.unsplash.com/photo-1558171813-3c2ebe23b475?w=600&q=80",
        products: [
          {
            id:"jr-1", name:"Lit Cabane Junior",
            price:"850 DT",
            colors:["#F0ECE4","#8B7355","#A8D8A8","#8FD3F4"],
            colorNames:["Blanc","Bois","Vert Forêt","Bleu"],
            width:"90 cm", depth:"190 cm", height:"145 cm",
            /* ✦ Photo lit cabane enfant */
            img:"https://images.unsplash.com/photo-1558171813-3c2ebe23b475?w=600&q=80"
          },
          {
            id:"jr-2", name:"Bureau Enfant Étudiant",
            price:"390 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc","Bleu","Rose","Vert"],
            width:"100 cm", depth:"50 cm", height:"75 cm",
            /* ✦ Photo bureau enfant */
            img:"https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&q=80"
          },
          {
            id:"jr-3", name:"Armoire Kids",
            price:"650 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"100 cm", depth:"52 cm", height:"190 cm",
            /* ✦ Photo armoire chambre enfant colorée */
            img:"https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=600&q=80"
          },
          {
            id:"jr-4", name:"Étagère Murale Kids",
            price:"180 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc","Bleu","Rose","Vert"],
            width:"80 cm", depth:"20 cm", height:"25 cm",
            /* ✦ Photo étagère murale chambre enfant */
            img:"https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80"
          }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 4 : SUPER SIESTA
  ───────────────────────────────────────────────────── */
  siesta: {
    label: "Super Siesta",
    description: "Collection exclusive canapés, sofas et espaces de repos signés Dream Design",
    cover: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80",
    sub: {
      canapes: {
        label: "Canapés",
        cover: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80",
        products: [
          { id:"ss-1", name:"Canapé Velours Émeraude",    price:"2 100 DT", colors:["#2D6A4F","#2C2C2C","#888","#C4A265"], colorNames:["Vert Émeraude","Noir","Gris","Beige"],    width:"230 cm",   depth:"88 cm", height:"78 cm", img:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
          { id:"ss-2", name:"Canapé d'Angle Panorama",    price:"3 200 DT", colors:["#888","#F0ECE4","#2C2C2C"],           colorNames:["Gris Cendré","Blanc Cassé","Anthracite"], width:"280×170 cm",depth:"90 cm", height:"76 cm", img:"https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&q=80" },
          { id:"ss-3", name:"Canapé 2 Places Cuir",       price:"1 650 DT", colors:["#8B4513","#2C2C2C","#888"],           colorNames:["Cognac","Noir","Gris"],                   width:"155 cm",   depth:"85 cm", height:"74 cm", img:"https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" }
        ]
      },
      fauteuils: {
        label: "Fauteuils & Poufs",
        cover: "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80",
        products: [
          { id:"ss-f1", name:"Fauteuil Relax Luxe", price:"980 DT", colors:["#888","#F0ECE4","#2C2C2C"], colorNames:["Gris","Crème","Noir"],                    width:"80 cm", depth:"85 cm", height:"95 cm", img:"https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80" },
          { id:"ss-f2", name:"Pouf Géant Arrondi",  price:"320 DT", colors:["#2C2C2C","#888","#F0ECE4","#C4A265"], colorNames:["Noir","Gris","Blanc","Beige"], width:"90 cm", depth:"90 cm", height:"40 cm", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 5 : PACK MARIAGE  ✦ NOUVEAU
  ───────────────────────────────────────────────────── */
  "pack-mariage": {
    label: "Pack Mariage",
    description: "Mobilier de réception et décoration haut de gamme pour votre jour J — élégance et raffinement",
    cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&q=80",
    sub: {
      mobilier: {
        label: "Mobilier de Réception",
        cover: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80",
        products: [
          {
            id:"pm-1", name:"Table Ronde de Réception",
            price:"À partir de 120 DT / unité",
            colors:["#F0ECE4","#2C2C2C","#C4A265"],
            colorNames:["Blanc Nacré","Noir Mat","Doré"],
            width:"120–150 cm", depth:"—", height:"75 cm",
            img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
          },
          {
            id:"pm-2", name:"Chaise Napoléon Cristal",
            price:"25 DT / unité",
            colors:["#F5F5F5","#C4A265","#2C2C2C"],
            colorNames:["Cristal Transparent","Doré","Noir"],
            width:"42 cm", depth:"45 cm", height:"88 cm",
            img:"https://images.unsplash.com/photo-1561677978-583a8c7a4b43?w=600&q=80"
          },
          {
            id:"pm-3", name:"Table Sweetheart Haute",
            price:"380 DT",
            colors:["#F0ECE4","#C4A265"],
            colorNames:["Blanc Ivoire","Doré"],
            width:"200 cm", depth:"60 cm", height:"110 cm",
            img:"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80"
          },
          {
            id:"pm-4", name:"Table Buffet Cocktail",
            price:"220 DT",
            colors:["#F0ECE4","#2C2C2C"],
            colorNames:["Blanc","Noir"],
            width:"180 cm", depth:"50 cm", height:"100 cm",
            img:"https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80"
          }
        ]
      },
      decoration: {
        label: "Décoration Mariage",
        cover: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
        products: [
          {
            id:"pm-d1", name:"Arche Florale de Cérémonie",
            price:"850 DT",
            colors:["#F0ECE4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc Pur","Rose Blush","Vert Eucalyptus"],
            width:"200 cm", depth:"60 cm", height:"220 cm",
            img:"https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80"
          },
          {
            id:"pm-d2", name:"Centre de Table Luxe",
            price:"45–95 DT / pièce",
            colors:["#F0ECE4","#FFD6E0","#C4A265"],
            colorNames:["Blanc","Rose Poudré","Doré"],
            width:"30 cm", depth:"30 cm", height:"40–60 cm",
            img:"https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=600&q=80"
          },
          {
            id:"pm-d3", name:"Lustre de Salle de Réception",
            price:"1 200 DT",
            colors:["#C4A265","#F5F5F5"],
            colorNames:["Doré","Cristal"],
            width:"80 cm", depth:"80 cm", height:"60 cm",
            img:"https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80"
          }
        ]
      },
      linge: {
        label: "Linge de Table & Textile",
        cover: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
        products: [
          {
            id:"pm-l1", name:"Nappe de Table Satin",
            price:"35 DT / unité",
            colors:["#F0ECE4","#FFD6E0","#C4A265","#2C2C2C"],
            colorNames:["Blanc Ivoire","Rose Blush","Champagne","Noir"],
            width:"150×300 cm", depth:"—", height:"—",
            img:"https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&q=80"
          },
          {
            id:"pm-l2", name:"Chemin de Table Dentelle",
            price:"18 DT / unité",
            colors:["#F0ECE4","#C4A265"],
            colorNames:["Blanc","Doré"],
            width:"30×300 cm", depth:"—", height:"—",
            img:"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80"
          },
          {
            id:"pm-l3", name:"Housse de Chaise Élégance",
            price:"12 DT / unité",
            colors:["#F0ECE4","#FFD6E0","#888"],
            colorNames:["Blanc Ivoire","Rose","Gris Perle"],
            width:"—", depth:"—", height:"—",
            img:"https://images.unsplash.com/photo-1481833761820-0509d3217039?w=600&q=80"
          }
        ]
      }
    }
  }

};
