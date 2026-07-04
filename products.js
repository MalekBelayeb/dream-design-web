/**
 * =========================================================
 *  DREAM DESIGN v2 — CATALOGUE PRODUITS
 *  Toutes les images pointent sur assets/ (photos locales)
 *
 *  Catégories :
 *   architecture      → Architecture & Design        (assets/archi/)
 *   meubles           → Meubles 11 sous-cat          (assets/Lit/ etc.)
 *   ameublement       → Ameublement 6 sous-cat       (assets/miroir/)
 *   pack-enfant       → Pack Bébé / Enfant           (assets/bebe enfant/)
 *   siesta            → Super Siesta                 (assets/feuteuil/)
 *   pack-mariage      → Pack Mariage                 (photos web)
 * =========================================================
 */
const CATALOG = {

  /* ─────────────────────────────────────────────────────
     CAT 0 : ARCHITECTURE & DESIGN
  ───────────────────────────────────────────────────── */
  architecture: {
    label: "Architecture & Design",
    description: "Réalisations architecturales, design d'intérieur et habillage sur mesure — signés Rawya Habbesi",
    cover: "assets/archi/1422ac596cf02d726d7bab28b5aaf569.jpg",
    sub: {
      "projets-residentiels": {
        label: "Projets Résidentiels",
        cover: "assets/archi/2674849eecd8a5cc9097124f34ecd7d6.jpg",
        products: [
          { id:"arch-1",  name:"Salon Contemporain Épuré",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/1422ac596cf02d726d7bab28b5aaf569.jpg" },
          { id:"arch-2",  name:"Appartement Moderne — Séjour",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/2674849eecd8a5cc9097124f34ecd7d6.jpg" },
          { id:"arch-3",  name:"Penthouse Luxe — Living Room",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/4511fbe8b485cf4c3157f102b4c87723.jpg" },
          { id:"arch-4",  name:"Villa Résidentielle — Salle à Manger", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/463856345c341284411fdf8f8f2d3768.jpg" },
          { id:"arch-5",  name:"Maison Contemporaine — Hall d'Entrée", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/474b676f74d7aeeb9092563e1ea27d0d.jpg" },
          { id:"arch-6",  name:"Duplex Design — Cuisine Ouverte",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/4e4781b088fd40b27041137af21b3486.jpg" },
          { id:"arch-7",  name:"Villa Moderne — Espace de Vie",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/4ea12a142d9de622222254c69299631b.jpg" }
        ]
      },
      "design-interieur": {
        label: "Design d'Intérieur",
        cover: "assets/archi/5182183d014c67d2e312dd5869bc3781.jpg",
        products: [
          { id:"arch-8",  name:"Chambre Parentale Prestige",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/5182183d014c67d2e312dd5869bc3781.jpg" },
          { id:"arch-9",  name:"Suite Principale — Style Hôtelier",   price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/5189d56fbd960d387f921aefec306c04.jpg" },
          { id:"arch-10", name:"Chambre Enfant Créative",              price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/704c4ec6753b4c02306a35062cd8e85d.jpg" },
          { id:"arch-11", name:"Bureau Exécutif Sur Mesure",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/7b1eb5758e9339cd8ba0a07910e4a407.jpg" },
          { id:"arch-12", name:"Cuisine Moderne Équipée",              price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/84eb3bf255c28d60010ccb17d1f96f3f.jpg" },
          { id:"arch-13", name:"Salle de Bain Marbre & Luxe",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/85bfbe935384d6dadcbbfcfd3d364e59.jpg" },
          { id:"arch-14", name:"Habillage Salon — Boiserie Chêne",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/Habillage%20Salon.jpg" }
        ]
      },
      "habillage-finitions": {
        label: "Habillage & Finitions",
        cover: "assets/archi/a0e8c52577c4868aa7d9e3fec93b827b.jpg",
        products: [
          { id:"arch-15", name:"TV Wall — Revêtement Mural Moderne",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/a0e8c52577c4868aa7d9e3fec93b827b.jpg" },
          { id:"arch-17", name:"Niches & Étagères Murales",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/b50705be3edf742ca1afacba39e38261.jpg" },
          { id:"arch-18", name:"Faux Plafond Lumineux LED",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/b8c3c152987bf015f67b595b00e54420.jpg" },
          { id:"arch-19", name:"Finitions Haute Gamme — Détails",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/bf67f4be553bf2c005128ff6179f3f5a.jpg" },
          { id:"arch-20", name:"Entrée Design — Revêtement Sol",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/d7c16f0d9f7e3fa14ab9fe525bfe5d6e.jpg" },
          { id:"arch-21", name:"Salon TV — Habillage Complet",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/archi/e1f43d67fb82411a64785526fc529d19.jpg" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 1 : MEUBLES  (photos locales assets/)
  ───────────────────────────────────────────────────── */
  meubles: {
    label: "Meubles",
    description: "Mobilier haut de gamme pour chaque pièce de votre maison",
    cover: "assets/Lit/04d195af57717372883f65a040ff355a.jpg",
    sub: {


      /* â”€â”€ LIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ assets/Lit/ */
      lit: {
        label: "Lit",
        cover: "assets/Lit/04d195af57717372883f65a040ff355a.jpg",
        products: [
          { id:"lit-1",  name:"Lit Versailles",  price:"1 850 DT", colors:["#C4A265","#2C2C2C","#F0ECE4"], colorNames:["Chêne Doré","Wengé","Blanc Ivoire"],  width:"160 cm", depth:"200 cm", height:"110 cm", img:"assets/Lit/04d195af57717372883f65a040ff355a.jpg" },
          { id:"lit-2",  name:"Lit Saphir",      price:"2 300 DT", colors:["#1A1A2E","#888","#F5F5F5"],    colorNames:["Bleu Nuit","Gris","Blanc"],           width:"180 cm", depth:"200 cm", height:"120 cm", img:"assets/Lit/103efed5423f22544334a45f7fcc7539.jpg" },
          { id:"lit-3",  name:"Lit Florence",    price:"1 450 DT", colors:["#8B7355","#E8E0D8"],           colorNames:["Noyer","Crème"],                      width:"140 cm", depth:"200 cm", height:"95 cm",  img:"assets/Lit/13db5ad140c8ebf66e41e035fe59378e.jpg" },
          { id:"lit-4",  name:"Lit Prestige",    price:"2 700 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Doré","Blanc Cassé"],                 width:"180 cm", depth:"200 cm", height:"130 cm", img:"assets/Lit/1788481be86255161e4f70a29a28a0c6.jpg" },
          { id:"lit-5",  name:"Lit Royale",      price:"3 100 DT", colors:["#2C2C2C","#C4A265"],           colorNames:["Noir Laqué","Détails Dorés"],         width:"180 cm", depth:"200 cm", height:"140 cm", img:"assets/Lit/1b3435d3c3195e4687234637013347bd.jpg" },
          { id:"lit-6",  name:"Lit Sultan",      price:"1 200 DT", colors:["#8B7355","#2C2C2C","#F0ECE4"], colorNames:["Chêne","Wengé","Blanc"],              width:"140 cm", depth:"200 cm", height:"100 cm", img:"assets/Lit/1b42eb064186e26529070892770e37a0.jpg" },
          { id:"lit-7",  name:"Lit Lumina",      price:"1 650 DT", colors:["#F0ECE4","#888"],              colorNames:["Blanc","Gris Perle"],                 width:"160 cm", depth:"200 cm", height:"115 cm", img:"assets/Lit/2cd269ecb39d32128772acfbacc79ed1.jpg" },
          { id:"lit-8",  name:"Lit Aurora",      price:"1 980 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc Nacré","Doré"],                 width:"180 cm", depth:"200 cm", height:"125 cm", img:"assets/Lit/3695d736ab745db48b08bd2ff0f4637e.jpg" },
          { id:"lit-9",  name:"Lit Élégance",    price:"2 100 DT", colors:["#8B7355","#F0ECE4"],           colorNames:["Noyer Naturel","Blanc"],              width:"160 cm", depth:"200 cm", height:"120 cm", img:"assets/Lit/416d124745fe9d08aae6a6a5228f430b.jpg" },
          { id:"lit-10", name:"Lit Olympe",      price:"2 500 DT", colors:["#2C2C2C","#F0ECE4","#C4A265"],colorNames:["Noir Laqué","Blanc","Doré"],          width:"180 cm", depth:"200 cm", height:"135 cm", img:"assets/Lit/44ea213c96c7997fb3b36c0b6aae55ec.jpg" },
          { id:"lit-11", name:"Lit Séréna",      price:"1 750 DT", colors:["#C4A265","#8B7355"],           colorNames:["Chêne Doré","Noyer"],                 width:"160 cm", depth:"200 cm", height:"118 cm", img:"assets/Lit/59b210da9c7ac1782a46afd8ea1cd24e.jpg" },
          { id:"lit-12", name:"Lit Aria",        price:"1 380 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Mat","Anthracite"],             width:"140 cm", depth:"200 cm", height:"105 cm", img:"assets/Lit/59bead3b-ea37-454c-b3e4-6b99a29d5a30.jpg" },
          { id:"lit-13", name:"Lit Classica",    price:"1 500 DT", colors:["#8B7355","#2C2C2C"],           colorNames:["Chêne","Wengé"],                      width:"160 cm", depth:"200 cm", height:"112 cm", img:"assets/Lit/5bfe9b1a4db9f0b5a1561fab6ae8f14b.jpg" },
          { id:"lit-14", name:"Lit Magnolia",    price:"1 620 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc Cassé","Doré"],                 width:"160 cm", depth:"200 cm", height:"116 cm", img:"assets/Lit/6a642d042939ff1539210a48d57cc3b9.jpg" },
          { id:"lit-15", name:"Lit Toscane",     price:"1 850 DT", colors:["#8B7355","#C4A265"],           colorNames:["Noyer","Laiton Doré"],                width:"180 cm", depth:"200 cm", height:"120 cm", img:"assets/Lit/6b1f073ea58603af4e1806f96c1ae7fc.jpg" },
          { id:"lit-16", name:"Lit Vénise",      price:"2 200 DT", colors:["#2C2C2C","#C4A265"],           colorNames:["Noir","Doré"],                        width:"180 cm", depth:"200 cm", height:"132 cm", img:"assets/Lit/6f9765d6b52a8e0465b3cc671262b3d4.jpg" },
          { id:"lit-17", name:"Lit Riviera",     price:"1 720 DT", colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc","Chêne Clair"],                width:"160 cm", depth:"200 cm", height:"108 cm", img:"assets/Lit/a18d28147e268d2784668e5535935870.jpg" },
          { id:"lit-18", name:"Lit Diamant",     price:"2 800 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Doré","Noir Laqué"],                  width:"180 cm", depth:"200 cm", height:"140 cm", img:"assets/Lit/ab9b9567a32d21472ac9c67a78c10e7f.jpg" },
          { id:"lit-19", name:"Lit Horizon",     price:"1 460 DT", colors:["#888","#F0ECE4"],              colorNames:["Gris Perle","Blanc"],                 width:"160 cm", depth:"200 cm", height:"100 cm", img:"assets/Lit/afe8f966c4a2319a61b45556e67b3b3c.jpg" },
          { id:"lit-20", name:"Lit Jasmin",      price:"1 680 DT", colors:["#F0ECE4","#888"],              colorNames:["Blanc Nacré","Gris"],                 width:"160 cm", depth:"200 cm", height:"113 cm", img:"assets/Lit/c026438f92eca77cc89aa0bc9f37dd49.jpg" },
          { id:"lit-21", name:"Lit Pégase",      price:"2 400 DT", colors:["#2C2C2C","#F0ECE4"],           colorNames:["Noir Mat","Blanc"],                   width:"180 cm", depth:"200 cm", height:"128 cm", img:"assets/Lit/cb3c0fbb6d079c8ec7509cfb5dcc6398.jpg" },
          { id:"lit-22", name:"Lit Palomino",    price:"1 900 DT", colors:["#8B7355","#F0ECE4"],           colorNames:["Bois Naturel","Blanc"],               width:"160 cm", depth:"200 cm", height:"118 cm", img:"assets/Lit/cd08169db03103fe8f53ae986defd23b.jpg" },
          { id:"lit-23", name:"Lit Soleil",      price:"1 780 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Chêne Doré","Blanc Ivoire"],          width:"180 cm", depth:"200 cm", height:"124 cm", img:"assets/Lit/de394d851f88184a4954317cc1b5e57f.jpg" },
          { id:"lit-24", name:"Lit Cosmo",       price:"2 050 DT", colors:["#2C2C2C","#8B7355"],           colorNames:["Anthracite","Noyer"],                 width:"180 cm", depth:"200 cm", height:"130 cm", img:"assets/Lit/e06fd04bb5bc267b02fa011cdbd4550d (1).jpg" },
          { id:"lit-25", name:"Lit Vérone",      price:"1 950 DT", colors:["#8B7355","#2C2C2C"],           colorNames:["Chêne Massif","Anthracite"],          width:"160 cm", depth:"200 cm", height:"122 cm", img:"assets/Lit/e936759e5cafc3e3371aeb7ae35d0eb5.jpg" },
          { id:"lit-26", name:"Lit Céladon",     price:"1 550 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Cassé","Noir"],                 width:"140 cm", depth:"200 cm", height:"107 cm", img:"assets/Lit/f0d05c8b1aae39cef723dc768d47acf9.jpg" },
          { id:"lit-27", name:"Lit Fusion",      price:"2 150 DT", colors:["#2C2C2C","#C4A265","#F0ECE4"],colorNames:["Noir","Doré","Blanc"],                width:"180 cm", depth:"200 cm", height:"134 cm", img:"assets/Lit/fdd017436fd167ccc95ad87972436cfa.jpg" },
          { id:"lit-28", name:"Lit Zenith",      price:"2 600 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Laiton","Wengé"],                     width:"180 cm", depth:"200 cm", height:"138 cm", img:"assets/Lit/ff2adcb0d380b770329c8724e8155dde.jpg" }
        ]
      },

      /* â”€â”€ TABLES DE NUIT â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ assets/table de nuit/ T1â€“T13 */
      "tables-nuit": {
        label: "Tables de Nuit",
        cover: "assets/table de nuit/T1.jpg",
        products: [
          { id:"tn-1",  name:"Table de Nuit Vega",      price:"320 DT", colors:["#2C2C2C","#F0ECE4"],            colorNames:["Noir Mat","Blanc Ivoire"],   width:"45 cm", depth:"35 cm", height:"55 cm", img:"assets/table de nuit/T1.jpg"  },
          { id:"tn-2",  name:"Table de Nuit Luna",      price:"280 DT", colors:["#C4A265","#888"],               colorNames:["Chêne","Gris"],              width:"40 cm", depth:"30 cm", height:"50 cm", img:"assets/table de nuit/T2.jpg"  },
          { id:"tn-3",  name:"Table de Nuit Élite",     price:"390 DT", colors:["#F0ECE4","#2C2C2C"],            colorNames:["Blanc Laqué","Noir"],        width:"50 cm", depth:"38 cm", height:"58 cm", img:"assets/table de nuit/T3.jpg"  },
          { id:"tn-4",  name:"Table de Nuit Slim",      price:"220 DT", colors:["#8B7355","#F0ECE4"],            colorNames:["Noyer Naturel","Blanc"],     width:"38 cm", depth:"28 cm", height:"48 cm", img:"assets/table de nuit/T4.jpg"  },
          { id:"tn-5",  name:"Table de Nuit Classique", price:"260 DT", colors:["#8B7355","#2C2C2C"],            colorNames:["Chêne","Wengé"],             width:"42 cm", depth:"32 cm", height:"52 cm", img:"assets/table de nuit/T5.jpg"  },
          { id:"tn-6",  name:"Table de Nuit Design",    price:"350 DT", colors:["#2C2C2C","#C4A265"],            colorNames:["Noir","Doré"],               width:"45 cm", depth:"35 cm", height:"55 cm", img:"assets/table de nuit/T6.jpg"  },
          { id:"tn-7",  name:"Table de Nuit Moderne",   price:"300 DT", colors:["#F0ECE4","#888"],               colorNames:["Blanc","Gris"],              width:"40 cm", depth:"32 cm", height:"50 cm", img:"assets/table de nuit/T7.jpg"  },
          { id:"tn-8",  name:"Table de Nuit Luxe",      price:"420 DT", colors:["#C4A265","#2C2C2C"],            colorNames:["Doré","Noir"],               width:"48 cm", depth:"36 cm", height:"57 cm", img:"assets/table de nuit/T8.jpg"  },
          { id:"tn-9",  name:"Table de Nuit Compact",   price:"190 DT", colors:["#F0ECE4","#8B7355"],            colorNames:["Blanc","Noyer"],             width:"35 cm", depth:"25 cm", height:"45 cm", img:"assets/table de nuit/T9.jpg"  },
          { id:"tn-10", name:"Table de Nuit Premium",   price:"450 DT", colors:["#2C2C2C","#F0ECE4","#C4A265"], colorNames:["Noir","Blanc","Doré"],       width:"50 cm", depth:"38 cm", height:"60 cm", img:"assets/table de nuit/T10.jpg" },
          { id:"tn-11", name:"Table de Nuit Naturelle", price:"240 DT", colors:["#8B7355"],                     colorNames:["Bois Naturel"],              width:"42 cm", depth:"30 cm", height:"52 cm", img:"assets/table de nuit/T11.jpg" },
          { id:"tn-12", name:"Table de Nuit Chic",      price:"310 DT", colors:["#888","#F0ECE4"],               colorNames:["Gris Perle","Blanc"],        width:"44 cm", depth:"34 cm", height:"54 cm", img:"assets/table de nuit/T12.jpg" },
          { id:"tn-13", name:"Table de Nuit Crystal",   price:"480 DT", colors:["#F0ECE4","#C4A265","#2C2C2C"], colorNames:["Blanc Nacré","Doré","Noir"], width:"46 cm", depth:"36 cm", height:"56 cm", img:"assets/table de nuit/T13.jpg" }
        ]
      },

      /* â”€â”€ DRESSING â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ assets/dressing/ */
      dressing: {
        label: "Dressing",
        cover: "assets/dressing/0ff0cd673f756d57df808897ffd128af.jpg",
        products: [
          { id:"dr-1", name:"Dressing Prestige XL", price:"3 200 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc Cassé","Anthracite"], width:"240 cm", depth:"60 cm", height:"220 cm", img:"assets/dressing/0ff0cd673f756d57df808897ffd128af.jpg" },
          { id:"dr-2", name:"Dressing Walk-In",      price:"4 800 DT", colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Chêne Doré"],      width:"300 cm", depth:"60 cm", height:"220 cm", img:"assets/dressing/18efe79170d0de1bc92c6900f7d6601d.jpg" },
          { id:"dr-3", name:"Dressing Compact",      price:"1 900 DT", colors:["#2C2C2C","#888"],    colorNames:["Anthracite","Gris"],       width:"180 cm", depth:"55 cm", height:"210 cm", img:"assets/dressing/2c8d4395d79e3e7f9698e42453b3e5e0.jpg" },
          { id:"dr-4", name:"Dressing Coulissant",   price:"2 400 DT", colors:["#F0ECE4","#8B7355"], colorNames:["Blanc Mat","Noyer"],       width:"200 cm", depth:"60 cm", height:"215 cm", img:"assets/dressing/91a7571fd16a7079ddcc71b860b4e6f0.jpg" },
          { id:"dr-5", name:"Dressing Modulable",    price:"2 800 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir"],            width:"220 cm", depth:"58 cm", height:"218 cm", img:"assets/dressing/9a33e9304caaa5d27cef43a494eabf7e.jpg" },
          { id:"dr-6", name:"Dressing Miroir",       price:"2 100 DT", colors:["#888","#F0ECE4"],    colorNames:["Miroir","Blanc"],          width:"190 cm", depth:"60 cm", height:"215 cm", img:"assets/dressing/bddf1d3502353b55e655d7742a4f251c.jpg" },
          { id:"dr-7", name:"Dressing Luxe",         price:"3 600 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Chêne Doré","Blanc"],      width:"250 cm", depth:"62 cm", height:"222 cm", img:"assets/dressing/cddd2197b5edbf68e2dc97cb1061869e.jpg" },
          { id:"dr-8", name:"Dressing Classique",    price:"2 200 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc Cassé"],     width:"210 cm", depth:"60 cm", height:"218 cm", img:"assets/dressing/e286b4df87853bb3b1e3b98953921103.jpg" },
          { id:"dr-9", name:"Dressing Design",       price:"2 650 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Anthracite","Doré"],       width:"230 cm", depth:"60 cm", height:"220 cm", img:"assets/dressing/f3603e342122e265b72d01369c176079.jpg" },
          { id:"dr-10",name:"Dressing Élégance",     price:"3 000 DT", colors:["#F0ECE4","#C4A265"], colorNames:["Blanc Nacré","Doré"],      width:"240 cm", depth:"62 cm", height:"222 cm", img:"assets/dressing/f3b672dcc9fb001fb5d081476eae091f.jpg" }
        ]
      },

      /* â”€â”€ CHAISES & FAUTEUILS â”€â”€â”€â”€â”€â”€â”€ assets/feuteuil/ */
      chaises: {
        label: "Chaises & Fauteuils",
        cover: "assets/feuteuil/1.jpg",
        products: [
          { id:"ch-1",  name:"Canapé Salon",              price:"1 850 DT", colors:["#C4A265","#8B7355","#F0ECE4"], colorNames:["Beige","Miel","Crème"],           width:"220 cm", depth:"90 cm",  height:"85 cm",  img:"assets/feuteuil/1.jpg"  },
          { id:"ch-2",  name:"Canapé Luxe",               price:"2 100 DT", colors:["#888","#F0ECE4"],              colorNames:["Gris Perle","Blanc Cassé"],       width:"240 cm", depth:"95 cm",  height:"88 cm",  img:"assets/feuteuil/2.jpg"  },
          { id:"ch-3",  name:"Canapé Design",             price:"2 400 DT", colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc Crème","Noyer"],            width:"200 cm", depth:"100 cm", height:"80 cm",  img:"assets/feuteuil/3.jpg"  },
          { id:"ch-4",  name:"Fauteuil Lounge",           price:"680 DT",   colors:["#C4A265","#2C2C2C"],           colorNames:["Caramel","Noir"],                 width:"80 cm",  depth:"75 cm",  height:"90 cm",  img:"assets/feuteuil/4.jpg"  },
          { id:"ch-5",  name:"Fauteuil Relax",            price:"720 DT",   colors:["#8B7355","#F0ECE4"],           colorNames:["Taupe","Crème"],                  width:"85 cm",  depth:"80 cm",  height:"92 cm",  img:"assets/feuteuil/5.jpg"  },
          { id:"ch-6",  name:"Fauteuil Design",           price:"590 DT",   colors:["#2C2C2C","#C4A265"],           colorNames:["Velours Noir","Doré"],            width:"75 cm",  depth:"72 cm",  height:"88 cm",  img:"assets/feuteuil/6.jpg"  },
          { id:"ch-7",  name:"Fauteuil Club",             price:"850 DT",   colors:["#8B7355","#2C2C2C"],           colorNames:["Cuir Naturel","Noir"],            width:"90 cm",  depth:"85 cm",  height:"95 cm",  img:"assets/feuteuil/7.jpg"  },
          { id:"ch-8",  name:"Chaise Salle à Manger",     price:"280 DT",   colors:["#F0ECE4","#2C2C2C","#8B7355"],colorNames:["Blanc","Noir","Chêne"],           width:"45 cm",  depth:"50 cm",  height:"95 cm",  img:"assets/feuteuil/8.jpg"  },
          { id:"ch-9",  name:"Chaise Scandinave",         price:"240 DT",   colors:["#8B7355","#F0ECE4"],           colorNames:["Chêne Naturel","Blanc"],          width:"42 cm",  depth:"48 cm",  height:"92 cm",  img:"assets/feuteuil/9.jpg"  },
          { id:"ch-10", name:"Canapé d'Angle",            price:"2 800 DT", colors:["#888","#2C2C2C"],              colorNames:["Gris Anthracite","Noir"],         width:"280 cm", depth:"200 cm", height:"82 cm",  img:"assets/feuteuil/10.jpg" },
          { id:"ch-11", name:"Fauteuil Velours",          price:"620 DT",   colors:["#1A1A2E","#C4A265"],           colorNames:["Bleu Nuit","Doré"],               width:"78 cm",  depth:"75 cm",  height:"88 cm",  img:"assets/feuteuil/11.jpg" },
          { id:"ch-12", name:"Chaise Velours",            price:"320 DT",   colors:["#888","#2C2C2C","#F0ECE4"],    colorNames:["Gris","Noir","Blanc"],            width:"45 cm",  depth:"50 cm",  height:"96 cm",  img:"assets/feuteuil/12.jpg" },
          { id:"ch-13", name:"Canapé 3 Places Moderne",   price:"1 650 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Cassé","Pieds Noirs"],      width:"210 cm", depth:"90 cm",  height:"82 cm",  img:"assets/feuteuil/13.jpg" },
          { id:"ch-14", name:"Fauteuil Accent",           price:"540 DT",   colors:["#C4A265","#8B7355"],           colorNames:["Ocre","Noyer"],                   width:"74 cm",  depth:"70 cm",  height:"86 cm",  img:"assets/feuteuil/14.jpg" },
          { id:"ch-15", name:"Canapé Méridienne",         price:"1 980 DT", colors:["#F0ECE4","#8B7355"],           colorNames:["Lin Naturel","Bois"],             width:"230 cm", depth:"95 cm",  height:"83 cm",  img:"assets/feuteuil/15.jpg" },
          { id:"ch-16", name:"Chaise Design Pieds Or",    price:"380 DT",   colors:["#2C2C2C","#C4A265"],           colorNames:["Velours Charbon","Pieds Dorés"],  width:"46 cm",  depth:"52 cm",  height:"97 cm",  img:"assets/feuteuil/16.jpg" },
          { id:"ch-17", name:"Fauteuil Barrel",           price:"780 DT",   colors:["#8B7355","#F0ECE4"],           colorNames:["Cognac","Crème"],                 width:"82 cm",  depth:"78 cm",  height:"90 cm",  img:"assets/feuteuil/17.jpg" },
          { id:"ch-18", name:"Canapé Convertible",        price:"2 200 DT", colors:["#888","#F0ECE4"],              colorNames:["Gris Perle","Blanc"],             width:"220 cm", depth:"95 cm",  height:"85 cm",  img:"assets/feuteuil/18.jpg" },
          { id:"ch-19", name:"Chaise Bistro",             price:"190 DT",   colors:["#2C2C2C","#8B7355","#F0ECE4"],colorNames:["Noir","Bois","Blanc"],            width:"40 cm",  depth:"44 cm",  height:"90 cm",  img:"assets/feuteuil/19.jpg" },
          { id:"ch-20", name:"Fauteuil Pivotant",         price:"690 DT",   colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc","Noir"],                   width:"76 cm",  depth:"74 cm",  height:"110 cm", img:"assets/feuteuil/20.jpg" },
          { id:"ch-21", name:"Canapé Chesterfield",       price:"3 200 DT", colors:["#8B7355","#2C2C2C"],           colorNames:["Cuir Cognac","Cuir Noir"],        width:"210 cm", depth:"92 cm",  height:"78 cm",  img:"assets/feuteuil/21.jpg" },
          { id:"ch-22", name:"Chaise Transparente",       price:"260 DT",   colors:["#888","#C4A265"],              colorNames:["Cristal Fumé","Doré"],            width:"42 cm",  depth:"46 cm",  height:"88 cm",  img:"assets/feuteuil/22.jpg" },
          { id:"ch-23", name:"Fauteuil Papasan",          price:"480 DT",   colors:["#C4A265","#8B7355"],           colorNames:["Rotin Naturel","Coton"],          width:"95 cm",  depth:"95 cm",  height:"80 cm",  img:"assets/feuteuil/23.jpg" },
          { id:"ch-24", name:"Canapé 2 Places Luxe",      price:"1 450 DT", colors:["#2C2C2C","#C4A265"],           colorNames:["Velours Noir","Doré"],            width:"170 cm", depth:"88 cm",  height:"84 cm",  img:"assets/feuteuil/24.jpg" },
          { id:"ch-25", name:"Chaise Tulipe",             price:"310 DT",   colors:["#F0ECE4","#888","#2C2C2C"],    colorNames:["Blanc","Gris","Noir"],            width:"44 cm",  depth:"48 cm",  height:"93 cm",  img:"assets/feuteuil/25.jpg" },
          { id:"ch-26", name:"Fauteuil Oreilles",         price:"820 DT",   colors:["#8B7355","#C4A265","#F0ECE4"],colorNames:["Cognac","Doré","Crème"],          width:"88 cm",  depth:"82 cm",  height:"105 cm", img:"assets/feuteuil/26.jpg" },
          { id:"ch-27", name:"Canapé Modulable",          price:"2 650 DT", colors:["#888","#F0ECE4"],              colorNames:["Gris Clair","Blanc"],             width:"260 cm", depth:"95 cm",  height:"82 cm",  img:"assets/feuteuil/27.jpg" },
          { id:"ch-28", name:"Chaise Industrielle",       price:"220 DT",   colors:["#2C2C2C","#8B7355"],           colorNames:["Métal Noir","Bois Brut"],         width:"42 cm",  depth:"46 cm",  height:"94 cm",  img:"assets/feuteuil/28.jpg" },
          { id:"ch-29", name:"Fauteuil Rond",             price:"560 DT",   colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc Bouclette","Bois"],         width:"80 cm",  depth:"80 cm",  height:"72 cm",  img:"assets/feuteuil/29.jpg" },
          { id:"ch-30", name:"Canapé Velours Luxe",       price:"2 900 DT", colors:["#1A1A2E","#C4A265"],           colorNames:["Bleu Royal","Doré"],              width:"230 cm", depth:"90 cm",  height:"86 cm",  img:"assets/feuteuil/30.jpg" },
          { id:"ch-31", name:"Chaise Coque",              price:"175 DT",   colors:["#F0ECE4","#2C2C2C","#888"],    colorNames:["Blanc","Noir","Gris"],            width:"43 cm",  depth:"47 cm",  height:"90 cm",  img:"assets/feuteuil/31.jpg" },
          { id:"ch-32", name:"Fauteuil Bergère",          price:"750 DT",   colors:["#C4A265","#8B7355"],           colorNames:["Lin Doré","Chêne"],               width:"85 cm",  depth:"80 cm",  height:"100 cm", img:"assets/feuteuil/32.jpg" },
          { id:"ch-33", name:"Canapé Panoramique",        price:"3 500 DT", colors:["#888","#2C2C2C"],              colorNames:["Gris Anthracite","Pieds Noirs"],  width:"320 cm", depth:"220 cm", height:"82 cm",  img:"assets/feuteuil/33.jpg" },
          { id:"ch-34", name:"Chaise Capitonnée",         price:"340 DT",   colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc","Pieds Dorés"],            width:"47 cm",  depth:"52 cm",  height:"98 cm",  img:"assets/feuteuil/34.jpg" },
          { id:"ch-35", name:"Fauteuil Lecture",          price:"680 DT",   colors:["#8B7355","#2C2C2C"],           colorNames:["Tweed Naturel","Noir"],           width:"82 cm",  depth:"85 cm",  height:"95 cm",  img:"assets/feuteuil/35.jpg" },
          { id:"ch-36", name:"Canapé Rétro",              price:"2 350 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Moutarde","Crème"],               width:"200 cm", depth:"88 cm",  height:"84 cm",  img:"assets/feuteuil/36.jpg" },
          { id:"ch-37", name:"Chaise Bar Haute",          price:"290 DT",   colors:["#2C2C2C","#8B7355","#F0ECE4"],colorNames:["Noir","Chêne","Blanc"],           width:"40 cm",  depth:"42 cm",  height:"115 cm", img:"assets/feuteuil/37.jpg" },
          { id:"ch-38", name:"Fauteuil Poire",            price:"450 DT",   colors:["#888","#F0ECE4","#2C2C2C"],    colorNames:["Gris","Blanc","Noir"],            width:"85 cm",  depth:"85 cm",  height:"78 cm",  img:"assets/feuteuil/38.jpg" },
          { id:"ch-39", name:"Canapé Cuir Premium",       price:"3 800 DT", colors:["#2C2C2C","#8B7355"],           colorNames:["Cuir Noir","Cuir Brun"],          width:"240 cm", depth:"95 cm",  height:"88 cm",  img:"assets/feuteuil/39.jpg" },
          { id:"ch-40", name:"Chaise Rotin",              price:"210 DT",   colors:["#C4A265","#F0ECE4"],           colorNames:["Rotin Naturel","Coussin Blanc"],  width:"55 cm",  depth:"55 cm",  height:"88 cm",  img:"assets/feuteuil/40.jpg" },
          { id:"ch-41", name:"Fauteuil Contemporain",     price:"710 DT",   colors:["#F0ECE4","#888"],              colorNames:["Blanc Cassé","Gris Perle"],       width:"80 cm",  depth:"76 cm",  height:"90 cm",  img:"assets/feuteuil/41.jpg" },
          { id:"ch-42", name:"Canapé Bohème",             price:"2 050 DT", colors:["#8B7355","#C4A265"],           colorNames:["Macramé","Doré"],                 width:"210 cm", depth:"90 cm",  height:"80 cm",  img:"assets/feuteuil/42.jpg" },
          { id:"ch-43", name:"Fauteuil Pivotant Luxe",    price:"920 DT",   colors:["#2C2C2C","#C4A265"],           colorNames:["Cuir Noir","Pieds Dorés"],        width:"84 cm",  depth:"80 cm",  height:"115 cm", img:"assets/feuteuil/43.jpg" },
          { id:"ch-44", name:"Fauteuil Exclusif",         price:"1 100 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Velours Doré","Blanc Nacré"],     width:"88 cm",  depth:"82 cm",  height:"98 cm",  img:"assets/feuteuil/44.png" }
        ]
      },

      /* â”€â”€ COMMODE & COIFFEUSE â”€â”€â”€â”€ assets/commode coiffeuse/ */
      "commode-coiffeuse": {
        label: "Commode & Coiffeuse",
        cover: "assets/commode coiffeuse/coif1.jpg",
        products: [
          { id:"cc-1",  name:"Commode Classique",      price:"680 DT",   colors:["#F0ECE4","#2C2C2C"],  colorNames:["Blanc","Noir"],           width:"80 cm",  depth:"42 cm", height:"90 cm",  img:"assets/commode coiffeuse/coif1.jpg"  },
          { id:"cc-2",  name:"Commode Baroque",        price:"850 DT",   colors:["#F0ECE4","#C4A265"],  colorNames:["Blanc","Doré"],           width:"90 cm",  depth:"45 cm", height:"95 cm",  img:"assets/commode coiffeuse/coif2.jpg"  },
          { id:"cc-3",  name:"Commode Moderne",        price:"580 DT",   colors:["#2C2C2C","#F0ECE4"],  colorNames:["Anthracite","Blanc"],     width:"80 cm",  depth:"42 cm", height:"88 cm",  img:"assets/commode coiffeuse/coif3.jpg"  },
          { id:"cc-4",  name:"Coiffeuse Prestige",     price:"920 DT",   colors:["#F0ECE4","#C4A265"],  colorNames:["Blanc Nacré","Doré"],     width:"100 cm", depth:"45 cm", height:"75 cm",  img:"assets/commode coiffeuse/coif4.jpg"  },
          { id:"cc-5",  name:"Coiffeuse Design",       price:"760 DT",   colors:["#888","#F0ECE4"],     colorNames:["Gris Perle","Blanc"],     width:"90 cm",  depth:"42 cm", height:"72 cm",  img:"assets/commode coiffeuse/coif5.jpg"  },
          { id:"cc-6",  name:"Commode 6 Tiroirs",      price:"750 DT",   colors:["#F0ECE4","#8B7355"],  colorNames:["Blanc","Chêne"],          width:"85 cm",  depth:"45 cm", height:"110 cm", img:"assets/commode coiffeuse/coif6.jpg"  },
          { id:"cc-7",  name:"Coiffeuse Hollywood",    price:"1 100 DT", colors:["#F0ECE4","#C4A265"],  colorNames:["Blanc","Laiton Doré"],    width:"95 cm",  depth:"45 cm", height:"160 cm", img:"assets/commode coiffeuse/coif7.jpg"  },
          { id:"cc-8",  name:"Commode Style Baroque",  price:"980 DT",   colors:["#F0ECE4","#C4A265"],  colorNames:["Blanc","Détails Dorés"],  width:"90 cm",  depth:"48 cm", height:"98 cm",  img:"assets/commode coiffeuse/coif8.jpg"  },
          { id:"cc-9",  name:"Commode Contemporaine",  price:"630 DT",   colors:["#2C2C2C","#888"],     colorNames:["Noir Mat","Gris"],        width:"80 cm",  depth:"42 cm", height:"90 cm",  img:"assets/commode coiffeuse/coif9.jpg"  },
          { id:"cc-10", name:"Coiffeuse Miroir",       price:"840 DT",   colors:["#888","#C4A265"],     colorNames:["Miroir","Doré"],          width:"85 cm",  depth:"40 cm", height:"155 cm", img:"assets/commode coiffeuse/coif10.jpg" },
          { id:"cc-11", name:"Commode Luxe 4 Tiroirs", price:"720 DT",   colors:["#8B7355","#F0ECE4"],  colorNames:["Noyer","Blanc"],          width:"88 cm",  depth:"45 cm", height:"92 cm",  img:"assets/commode coiffeuse/coif11.jpg" },
          { id:"cc-12", name:"Coiffeuse Élégante",     price:"870 DT",   colors:["#F0ECE4","#888"],     colorNames:["Blanc Nacré","Gris"],     width:"90 cm",  depth:"42 cm", height:"150 cm", img:"assets/commode coiffeuse/coif12.jpg" },
          { id:"cc-13", name:"Commode Design Slim",    price:"560 DT",   colors:["#F0ECE4","#2C2C2C"],  colorNames:["Blanc","Noir"],           width:"75 cm",  depth:"38 cm", height:"85 cm",  img:"assets/commode coiffeuse/coif13.jpg" },
          { id:"cc-14", name:"Coiffeuse Premium",      price:"1 250 DT", colors:["#C4A265","#F0ECE4"],  colorNames:["Chêne Doré","Blanc"],     width:"100 cm", depth:"48 cm", height:"165 cm", img:"assets/commode coiffeuse/coif14.jpg" }
        ]
      },
      /* -- TABLES BASSES -------------- assets/table basse/ (50 photos) */
      "tables-basses": {
        label: "Tables Basses",
        cover: "assets/table basse/TBS.jpg",
        products: [
          { id:"tb-1",  name:"Table Basse Salon", price:"480 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS.jpg" },
          { id:"tb-2",  name:"Table Basse Marbre", price:"560 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Marbre Blanc","Noir"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS1.jpg" },
          { id:"tb-3",  name:"Table Basse Bois & Verre", price:"640 DT", colors:["#8B7355","#888"], colorNames:["Noyer","Verre Fume"], width:"100 cm", depth:"50 cm", height:"38 cm", img:"assets/table basse/TBS2.jpg" },
          { id:"tb-4",  name:"Table Basse Design", price:"700 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir Laque","Dore"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS3.jpg" },
          { id:"tb-5",  name:"Table Salon Contemporain", price:"720 DT", colors:["#F0ECE4","#8B7355"], colorNames:["Blanc","Chene Massif"], width:"120 cm", depth:"60 cm", height:"42 cm", img:"assets/table basse/TBS4.jpg" },
          { id:"tb-6",  name:"Table Basse Ronde", price:"480 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc"], width:"80 cm", depth:"80 cm", height:"40 cm", img:"assets/table basse/TBS5.jpg" },
          { id:"tb-7",  name:"Table Basse Laquee", price:"550 DT", colors:["#F0ECE4","#2C2C2C","#C4A265"], colorNames:["Blanc","Noir","Dore"], width:"100 cm", depth:"50 cm", height:"38 cm", img:"assets/table basse/TBS6.jpg" },
          { id:"tb-8",  name:"Table Basse Scandinave", price:"430 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Chene Naturel","Blanc"], width:"90 cm", depth:"45 cm", height:"36 cm", img:"assets/table basse/TBS7.jpg" },
          { id:"tb-9",  name:"Table Basse Plateau Verre", price:"590 DT", colors:["#888","#C4A265"], colorNames:["Verre Clair","Dore"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS8.jpg" },
          { id:"tb-10",  name:"Table Basse Luxe", price:"850 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir","Dore"], width:"115 cm", depth:"60 cm", height:"42 cm", img:"assets/table basse/TBS9.jpg" },
          { id:"tb-11",  name:"Table Basse Moderne", price:"520 DT", colors:["#F0ECE4","#888"], colorNames:["Blanc","Gris"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS10.jpg" },
          { id:"tb-12",  name:"Table Basse Elegante", price:"610 DT", colors:["#C4A265","#8B7355"], colorNames:["Dore","Noyer"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS11.jpg" },
          { id:"tb-13",  name:"Table Basse Carree", price:"490 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir"], width:"90 cm", depth:"45 cm", height:"38 cm", img:"assets/table basse/TBS12.jpg" },
          { id:"tb-14",  name:"Table Basse Doree", price:"750 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Dore","Blanc"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS13.jpg" },
        
          { id:"tb-16",  name:"Table Basse Tendance", price:"460 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chene","Noir"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS16.jpg" },
          { id:"tb-17",  name:"Table Basse Classic", price:"670 DT", colors:["#F0ECE4","#8B7355"], colorNames:["Blanc","Chene"], width:"115 cm", depth:"58 cm", height:"42 cm", img:"assets/table basse/TBS17.jpg" },
          { id:"tb-18",  name:"Table Basse Prestige", price:"800 DT", colors:["#C4A265","#2C2C2C"], colorNames:["Dore","Noir"], width:"120 cm", depth:"60 cm", height:"42 cm", img:"assets/table basse/TBS18.jpg" },
          { id:"tb-19",  name:"Table Basse Chic", price:"540 DT", colors:["#F0ECE4","#888"], colorNames:["Blanc","Gris"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS19.jpg" },
          { id:"tb-20",  name:"Table Basse Cosy", price:"420 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc"], width:"85 cm", depth:"45 cm", height:"36 cm", img:"assets/table basse/TBS20.jpg" },
          { id:"tb-21",  name:"Table Basse Minimaliste", price:"500 DT", colors:["#2C2C2C","#F0ECE4"], colorNames:["Noir Mat","Blanc"], width:"95 cm", depth:"48 cm", height:"38 cm", img:"assets/table basse/TBS21.jpg" },
          { id:"tb-22",  name:"Table Basse Industrielle", price:"470 DT", colors:["#2C2C2C","#8B7355"], colorNames:["Noir","Bois"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS22.jpg" },
          { id:"tb-23",  name:"Table Basse Vintage", price:"610 DT", colors:["#8B7355","#C4A265"], colorNames:["Bois","Dore"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS23.jpg" },
          { id:"tb-24",  name:"Table Basse Art Deco", price:"680 DT", colors:["#C4A265","#2C2C2C"], colorNames:["Dore","Noir"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS24.jpg" },
          { id:"tb-25",  name:"Table Basse Oriental", price:"730 DT", colors:["#8B7355","#888"], colorNames:["Bois","Gris"], width:"90 cm", depth:"45 cm", height:"38 cm", img:"assets/table basse/TBS25.jpg" },
          { id:"tb-26",  name:"Table Basse Cristal", price:"590 DT", colors:["#888","#F0ECE4"], colorNames:["Gris","Blanc"], width:"95 cm", depth:"48 cm", height:"38 cm", img:"assets/table basse/TBS26.jpg" },
          { id:"tb-27",  name:"Table Basse Perle", price:"440 DT", colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Dore"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS27.jpg" },
          { id:"tb-28",  name:"Table Basse Cobalt", price:"560 DT", colors:["#2C2C2C","#888"], colorNames:["Noir","Gris"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS28.jpg" },
          { id:"tb-29",  name:"Table Basse Galaxy", price:"620 DT", colors:["#888","#2C2C2C"], colorNames:["Gris","Noir"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS29.jpg" },
          { id:"tb-30",  name:"Table Basse Loft", price:"490 DT", colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir"], width:"95 cm", depth:"48 cm", height:"38 cm", img:"assets/table basse/TBS30.jpg" },
          { id:"tb-31",  name:"Table Basse Urban", price:"510 DT", colors:["#2C2C2C","#F0ECE4"], colorNames:["Noir Mat","Blanc"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS31.jpg" },
          { id:"tb-32",  name:"Table Basse Colonial", price:"630 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chene","Noir"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS32.jpg" },
          { id:"tb-33",  name:"Table Basse Mediterranee", price:"580 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Dore","Blanc"], width:"115 cm", depth:"58 cm", height:"42 cm", img:"assets/table basse/TBS33.jpg" },
          { id:"tb-34",  name:"Table Basse Fusion", price:"650 DT", colors:["#F0ECE4","#8B7355"], colorNames:["Blanc","Chene"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS34.jpg" },
          { id:"tb-35",  name:"Table Basse Bambou", price:"420 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Chene","Blanc"], width:"90 cm", depth:"45 cm", height:"36 cm", img:"assets/table basse/TBS35.jpg" },
          { id:"tb-36",  name:"Table Basse Onyx", price:"680 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir","Dore"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS36.jpg" },
          { id:"tb-37",  name:"Table Basse Saphir", price:"720 DT", colors:["#888","#C4A265"], colorNames:["Gris","Dore"], width:"110 cm", depth:"55 cm", height:"40 cm", img:"assets/table basse/TBS37.jpg" },
          { id:"tb-38",  name:"Table Basse Aurora", price:"760 DT", colors:["#F0ECE4","#888"], colorNames:["Blanc","Gris"], width:"120 cm", depth:"60 cm", height:"42 cm", img:"assets/table basse/TBS38.jpg" },
          { id:"tb-39",  name:"Table Basse Cosmos", price:"530 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Chene","Blanc"], width:"95 cm", depth:"48 cm", height:"38 cm", img:"assets/table basse/TBS40.jpg" },
          { id:"tb-40",  name:"Table Basse Studio", price:"590 DT", colors:["#2C2C2C","#F0ECE4"], colorNames:["Noir Mat","Blanc"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS41.jpg" },
          { id:"tb-41",  name:"Table Basse Galerie", price:"640 DT", colors:["#C4A265","#888"], colorNames:["Dore","Gris"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS42.jpg" },
          { id:"tb-42",  name:"Table Basse Celeste", price:"700 DT", colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Dore"], width:"110 cm", depth:"55 cm", height:"42 cm", img:"assets/table basse/TBS43.jpg" },
          { id:"tb-43",  name:"Table Basse Zephyr", price:"480 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chene","Noir"], width:"90 cm", depth:"45 cm", height:"36 cm", img:"assets/table basse/TBS44.jpg" },
          { id:"tb-44",  name:"Table Basse Opale", price:"550 DT", colors:["#888","#F0ECE4"], colorNames:["Gris","Blanc"], width:"95 cm", depth:"48 cm", height:"38 cm", img:"assets/table basse/TBS45.jpg" },
          { id:"tb-45",  name:"Table Basse Topaze", price:"490 DT", colors:["#C4A265","#2C2C2C"], colorNames:["Dore","Noir"], width:"100 cm", depth:"50 cm", height:"40 cm", img:"assets/table basse/TBS46.jpg" },
          { id:"tb-46",  name:"Table Basse Rubis", price:"580 DT", colors:["#F0ECE4","#888"], colorNames:["Blanc","Gris"], width:"105 cm", depth:"52 cm", height:"40 cm", img:"assets/table basse/TBS47.jpg" },
          { id:"tb-47",  name:"Table Basse Emeraude", price:"660 DT", colors:["#2C2C2C","#8B7355"], colorNames:["Noir","Chene"], width:"110 cm", depth:"55 cm", height:"42 cm", img:"assets/table basse/TBS48.jpg" },
          { id:"tb-48",  name:"Table Basse Crystal", price:"740 DT", colors:["#F0ECE4","#C4A265","#2C2C2C"], colorNames:["Blanc","Dore","Noir"], width:"115 cm", depth:"58 cm", height:"42 cm", img:"assets/table basse/TBS49.jpg" },
          { id:"tb-49",  name:"Table Basse Premium", price:"820 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Dore","Blanc"], width:"120 cm", depth:"60 cm", height:"44 cm", img:"assets/table basse/TBS50.jpg" },
          { id:"tb-50",  name:"Table Basse Exclusive", price:"900 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir","Dore"], width:"125 cm", depth:"62 cm", height:"44 cm", img:"assets/table basse/TB42.jpg" }
        ]
      },

      /* ── TABLES À MANGER ──────── assets/tabe a manger/ */
      "tables-manger": {
        label: "Tables à Manger",
        cover: "assets/tabe a manger/table1.jpg",
        products: [
          { id:"tm-1",  name:"Table Diamante",           price:"1 250 DT", colors:["#F0ECE4","#2C2C2C","#C4A265"], colorNames:["Blanc","Noir","Chêne"],  width:"180 cm",     depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table1.jpg"  },
          { id:"tm-2",  name:"Table Extensible Luxor",   price:"1 680 DT", colors:["#8B7355","#2C2C2C"],           colorNames:["Bois Naturel","Noir"],   width:"160–240 cm", depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table2.jpg"  },
          { id:"tm-3",  name:"Table Ronde Prestige",     price:"1 100 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc Nacré","Doré"],    width:"Ø 130 cm",   depth:"—",      height:"75 cm", img:"assets/tabe a manger/table3.jpg"  },
          { id:"tm-4",  name:"Table Famille Grand Mod.", price:"1 450 DT", colors:["#8B7355","#F0ECE4"],           colorNames:["Chêne Massif","Blanc"],  width:"200 cm",     depth:"100 cm", height:"76 cm", img:"assets/tabe a manger/table4.jpg"  },
          { id:"tm-5",  name:"Table Moderne Élégante",   price:"980 DT",   colors:["#2C2C2C","#F0ECE4"],           colorNames:["Noir Mat","Blanc"],      width:"160 cm",     depth:"85 cm",  height:"75 cm", img:"assets/tabe a manger/table5.jpg"  },
          { id:"tm-6",  name:"Table Chêne Massif",       price:"1 350 DT", colors:["#8B7355"],                     colorNames:["Chêne Naturel"],         width:"180 cm",     depth:"90 cm",  height:"76 cm", img:"assets/tabe a manger/table6.jpg"  },
          { id:"tm-7",  name:"Table Laquée Design",      price:"1 150 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Laqué","Noir"],    width:"170 cm",     depth:"88 cm",  height:"75 cm", img:"assets/tabe a manger/table7.jpg"  },
          { id:"tm-8",  name:"Table Rectangulaire Luxe", price:"1 550 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Doré","Noir"],           width:"200 cm",     depth:"100 cm", height:"76 cm", img:"assets/tabe a manger/table8.jpg"  },
          { id:"tm-9",  name:"Table Bois & Métal",       price:"890 DT",   colors:["#8B7355","#2C2C2C"],           colorNames:["Bois","Acier Noir"],     width:"160 cm",     depth:"80 cm",  height:"75 cm", img:"assets/tabe a manger/table9.jpg"  },
          { id:"tm-10", name:"Table Extensible Premium",    price:"1 780 DT", colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc","Noyer"],         width:"140–200 cm", depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table10.jpg" },
          { id:"tm-11", name:"Table à Manger Classique",    price:"1 050 DT", colors:["#8B7355","#F0ECE4","#2C2C2C"],colorNames:["Chêne","Blanc","Noir"],  width:"160 cm",     depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table11.jpg" },
          { id:"tm-12", name:"Table Contemporaine",         price:"1 200 DT", colors:["#F0ECE4","#888"],              colorNames:["Blanc","Gris"],          width:"180 cm",     depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table12.jpg" },
          { id:"tm-13", name:"Table Industrielle",          price:"1 380 DT", colors:["#2C2C2C","#8B7355"],           colorNames:["Noir","Bois Brut"],      width:"175 cm",     depth:"90 cm",  height:"76 cm", img:"assets/tabe a manger/table13.jpg" },
          { id:"tm-14", name:"Table Scandinave",            price:"1 120 DT", colors:["#8B7355","#F0ECE4"],           colorNames:["Chêne Clair","Blanc"],   width:"160 cm",     depth:"85 cm",  height:"75 cm", img:"assets/tabe a manger/table14.jpg" },
          { id:"tm-15", name:"Table Baroque",               price:"1 650 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Doré","Blanc Ivoire"],   width:"185 cm",     depth:"95 cm",  height:"76 cm", img:"assets/tabe a manger/table15.jpg" },
          { id:"tm-16", name:"Table Art Déco",              price:"1 300 DT", colors:["#2C2C2C","#C4A265"],           colorNames:["Noir","Doré"],           width:"170 cm",     depth:"88 cm",  height:"75 cm", img:"assets/tabe a manger/table16.jpg" },
          { id:"tm-17", name:"Table Moderne XL",            price:"1 480 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc","Noir Mat"],      width:"200 cm",     depth:"100 cm", height:"75 cm", img:"assets/tabe a manger/table17.jpg" },
          { id:"tm-18", name:"Table Prestige Grand Format", price:"1 750 DT", colors:["#C4A265","#8B7355"],           colorNames:["Doré","Chêne"],          width:"190 cm",     depth:"95 cm",  height:"76 cm", img:"assets/tabe a manger/table18.jpg" },
          { id:"tm-19", name:"Table Ronde Luxe",            price:"1 400 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc Nacré","Doré"],    width:"Ø 140 cm",   depth:"—",      height:"75 cm", img:"assets/tabe a manger/table19.jpg" },
          { id:"tm-20", name:"Table Ovale Élégance",        price:"1 600 DT", colors:["#8B7355","#C4A265"],           colorNames:["Noyer","Laiton"],        width:"180 cm",     depth:"105 cm", height:"76 cm", img:"assets/tabe a manger/table20.jpg" },
          { id:"tm-21", name:"Table Noyer Premium",         price:"1 950 DT", colors:["#8B7355"],                     colorNames:["Noyer Massif"],          width:"160 cm",     depth:"90 cm",  height:"76 cm", img:"assets/tabe a manger/table21.jpg" },
          { id:"tm-22", name:"Table Exclusive",             price:"2 100 DT", colors:["#2C2C2C","#C4A265"],           colorNames:["Noir","Doré"],           width:"180 cm",     depth:"90 cm",  height:"75 cm", img:"assets/tabe a manger/table22.png" }
        ]
      },

      /* ── BUFFET / BAHUT ────────────── assets/bahu/ */
      buffet: {
        label: "Buffet & Bahut",
        cover: "assets/bahu/06c0a2b080670bae40504968e564c122.jpg",
        products: [
          { id:"buf-1", name:"Bahut Milano",        price:"1 100 DT", colors:["#F0ECE4","#2C2C2C","#8B7355"], colorNames:["Blanc","Anthracite","Noyer"], width:"160 cm", depth:"45 cm", height:"80 cm", img:"assets/bahu/06c0a2b080670bae40504968e564c122.jpg" },
          { id:"buf-2", name:"Bahut Baroque",       price:"1 450 DT", colors:["#F0ECE4","#C4A265"],           colorNames:["Blanc","Détails Dorés"],      width:"175 cm", depth:"48 cm", height:"85 cm", img:"assets/bahu/082ef931e2c26473027b59cf9268374b.jpg" },
          { id:"buf-3", name:"Buffet Contemporain", price:"980 DT",   colors:["#2C2C2C","#888"],             colorNames:["Noir Mat","Gris Béton"],      width:"150 cm", depth:"42 cm", height:"78 cm", img:"assets/bahu/bahu 02.jpg" }
        ]
      },

      /* ── MEUBLE D'ENTRÉE ──────── assets/meuble d entrée/ */
      console: {
        label: "Meuble d'Entrée",
        cover: "assets/meuble d entrée/1.jpg",
        products: [
          { id:"con-1",  name:"Étagère Murale Demi-Lune Noir",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/1.jpg" },
          { id:"con-2",  name:"Console Arrondie Noir & Tableau Abstrait",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/2.jpg" },
          { id:"con-3",  name:"Étagère Séparatrice Métal & Bois LED",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/3.jpg" },
          { id:"con-4",  name:"Meuble Suspendu Taupe avec Niches",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/4.jpg" },
          { id:"con-5",  name:"Hall Minimaliste — Console & Miroir Ondulé", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/5.jpg" },
          { id:"con-6",  name:"Bibliothèque Bois & Marbre Éclairage LED",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/6.jpg" },
          { id:"con-7",  name:"Console Chêne Massif Pieds Bloc",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/7.jpg" },
          { id:"con-8",  name:"Étagère Chêne Foncé Séparateurs Ovales",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/8.jpg" },
          { id:"con-9",  name:"Console Noyer & Miroirs Organiques Noirs",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/9.jpg" },
          { id:"con-10", name:"Console Rouge Laquée Pieds Arqués",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/10.jpg" },
          { id:"con-11", name:"Meuble Bas Blanc Façade Pétales",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/11.jpg" },
          { id:"con-12", name:"Banc d'Entrée Bouclé Blanc & Bois",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/12.jpg" },
          { id:"con-13", name:"Console Bleue Pieds Arqués & Miroirs",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/13.jpg" },
          { id:"con-14", name:"Console Rouge Laquée Pieds Organiques",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/14.jpg" },
          { id:"con-15", name:"Hall Luxe — Miroir Organique Rétroéclairé", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/15.jpg" },
          { id:"con-16", name:"Étagère Arbre Bois Foncé Style Bohème",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/16.jpg" },
          { id:"con-17", name:"Console Murale Noyer & Miroir Rond Doré",   price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/17.jpg" },
          { id:"con-18", name:"Console Blanche Minimaliste Pieds Piliers", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/18.jpg" },
          { id:"con-19", name:"Bibliothèque Bleue Niches & Arches",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/19.jpg" },
          { id:"con-20", name:"Meuble Bas Blanc Niches Voûtées",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/20.jpg" },
          { id:"con-21", name:"Bibliothèque Murale Noyer Déco Minimaliste",price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/21.jpg" },
          { id:"con-22", name:"Bibliothèque Chêne Foncé Niches Luxe",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/22.jpg" },
          { id:"con-23", name:"Grande Bibliothèque Noyer Compartiments",   price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/23.jpg" },
          { id:"con-24", name:"Meuble d'Entrée Vert Sauge & Porte-Manteau",price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/24.jpg" },
          { id:"con-25", name:"Console Blanche Pieds Multi-Arches",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/25.jpg" },
          { id:"con-26", name:"Console Stuc Blanc Pieds Bulles",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/26.jpg" },
          { id:"con-27", name:"Hall Moderne — Console Marbre & Boiseries", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/27.jpg" },
          { id:"con-28", name:"Étagère Bouclée Blanche Niches Arrondies",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/28.jpg" },
          { id:"con-29", name:"Meuble d'Entrée Boiseries & Placards Crème",price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/meuble d entrée/29.jpg" }
        ]
      },

      /* ── MEUBLE TV ──────────────── assets/meuble tv/ tv1–tv26 */
      "meuble-tv": {
        label: "Meuble TV",
        cover: "assets/meuble tv/tv1.jpg",
        products: [
          { id:"tv-1",  name:"Meuble TV Horizon",      price:"850 DT",   colors:["#F0ECE4","#2C2C2C","#8B7355"], colorNames:["Blanc","Noir","Chêne"],   width:"180 cm", depth:"40 cm", height:"45 cm", img:"assets/meuble tv/tv1.jpg"  },
          { id:"tv-2",  name:"Meuble TV Flottant",     price:"650 DT",   colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc Mat","Noir Mat"],   width:"160 cm", depth:"35 cm", height:"40 cm", img:"assets/meuble tv/tv2.jpg"  },
          { id:"tv-3",  name:"Meuble TV Panorama",     price:"990 DT",   colors:["#2C2C2C","#8B7355"],           colorNames:["Anthracite","Chêne"],     width:"200 cm", depth:"42 cm", height:"50 cm", img:"assets/meuble tv/tv3.jpg"  },
          { id:"tv-4",  name:"Meuble TV Design LED",   price:"780 DT",   colors:["#2C2C2C","#F0ECE4"],           colorNames:["Noir Brillant","Blanc"],  width:"175 cm", depth:"38 cm", height:"44 cm", img:"assets/meuble tv/tv4.jpg"  },
          { id:"tv-5",  name:"Meuble TV Scandinave",   price:"720 DT",   colors:["#8B7355","#F0ECE4"],           colorNames:["Chêne Naturel","Blanc"],  width:"170 cm", depth:"38 cm", height:"42 cm", img:"assets/meuble tv/tv5.jpg"  },
          { id:"tv-6",  name:"Meuble TV Luxe Doré",    price:"1 100 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Doré","Noir"],            width:"185 cm", depth:"42 cm", height:"48 cm", img:"assets/meuble tv/tv6.jpg"  },
          { id:"tv-7",  name:"Meuble TV Laqué",        price:"860 DT",   colors:["#F0ECE4","#888"],              colorNames:["Blanc Laqué","Gris"],     width:"180 cm", depth:"40 cm", height:"46 cm", img:"assets/meuble tv/tv7.jpg"  },
          { id:"tv-8",  name:"Meuble TV Industriel",   price:"690 DT",   colors:["#2C2C2C","#8B7355"],           colorNames:["Métal Noir","Bois Brut"], width:"160 cm", depth:"38 cm", height:"50 cm", img:"assets/meuble tv/tv8.jpg"  },
          { id:"tv-9",  name:"Meuble TV Contemporain", price:"750 DT",   colors:["#888","#F0ECE4"],              colorNames:["Gris Perle","Blanc"],     width:"165 cm", depth:"38 cm", height:"44 cm", img:"assets/meuble tv/tv9.jpg"  },
          { id:"tv-10", name:"Meuble TV Bas Design",   price:"580 DT",   colors:["#8B7355","#2C2C2C"],           colorNames:["Noyer","Noir"],           width:"150 cm", depth:"35 cm", height:"38 cm", img:"assets/meuble tv/tv10.jpg" },
          { id:"tv-11", name:"Meuble TV Prestige",     price:"1 250 DT", colors:["#C4A265","#F0ECE4"],           colorNames:["Chêne Doré","Blanc"],     width:"200 cm", depth:"45 cm", height:"55 cm", img:"assets/meuble tv/tv11.jpg" },
          { id:"tv-12", name:"Meuble TV Classique",    price:"680 DT",   colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc","Chêne"],          width:"170 cm", depth:"40 cm", height:"45 cm", img:"assets/meuble tv/tv12.jpg" },
          { id:"tv-13", name:"Meuble TV Compact",      price:"490 DT",   colors:["#2C2C2C","#F0ECE4"],           colorNames:["Noir Mat","Blanc"],       width:"140 cm", depth:"35 cm", height:"40 cm", img:"assets/meuble tv/tv13.jpg" },
          { id:"tv-14", name:"Meuble TV Corner",       price:"820 DT",   colors:["#8B7355","#F0ECE4"],           colorNames:["Noyer","Blanc"],          width:"120 cm", depth:"120 cm",height:"45 cm", img:"assets/meuble tv/tv14.jpg" },
          { id:"tv-15", name:"Meuble TV Bois Massif",  price:"950 DT",   colors:["#8B7355"],                     colorNames:["Bois Naturel"],           width:"180 cm", depth:"42 cm", height:"48 cm", img:"assets/meuble tv/tv15.jpg" },
          { id:"tv-16", name:"Meuble TV Moderne XL",   price:"1 050 DT", colors:["#F0ECE4","#2C2C2C"],           colorNames:["Blanc","Anthracite"],     width:"210 cm", depth:"42 cm", height:"50 cm", img:"assets/meuble tv/tv16.jpg" },
          { id:"tv-17", name:"Meuble TV Velours Noir", price:"880 DT",   colors:["#2C2C2C","#C4A265"],           colorNames:["Noir","Doré"],            width:"175 cm", depth:"40 cm", height:"46 cm", img:"assets/meuble tv/tv17.jpg" },
          { id:"tv-18", name:"Meuble TV Étagères",     price:"760 DT",   colors:["#F0ECE4","#8B7355"],           colorNames:["Blanc","Bois"],           width:"180 cm", depth:"35 cm", height:"180 cm",img:"assets/meuble tv/tv18.jpg" },
          { id:"tv-19", name:"Meuble TV Art Déco",     price:"1 150 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Laiton","Noir"],          width:"185 cm", depth:"42 cm", height:"50 cm", img:"assets/meuble tv/tv19.jpg" },
          { id:"tv-20", name:"Meuble TV Symétrique",   price:"890 DT",   colors:["#888","#2C2C2C"],              colorNames:["Gris","Noir"],            width:"190 cm", depth:"40 cm", height:"48 cm", img:"assets/meuble tv/tv20.jpg" },
          { id:"tv-21", name:"Meuble TV Chêne Clair",  price:"720 DT",   colors:["#C4A265","#F0ECE4"],           colorNames:["Chêne Clair","Blanc"],    width:"165 cm", depth:"38 cm", height:"44 cm", img:"assets/meuble tv/tv21.jpg" },
          { id:"tv-22", name:"Meuble TV Suspendu",     price:"640 DT",   colors:["#2C2C2C","#F0ECE4"],           colorNames:["Noir Mat","Blanc"],       width:"160 cm", depth:"30 cm", height:"35 cm", img:"assets/meuble tv/tv22.jpg" },
          { id:"tv-23", name:"Meuble TV Wengé",        price:"810 DT",   colors:["#2C2C2C","#8B7355"],           colorNames:["Wengé","Acier"],          width:"175 cm", depth:"40 cm", height:"46 cm", img:"assets/meuble tv/tv23.jpg" },
          { id:"tv-24", name:"Meuble TV Premium",      price:"1 300 DT", colors:["#C4A265","#2C2C2C"],           colorNames:["Doré","Noir Laqué"],      width:"200 cm", depth:"45 cm", height:"52 cm", img:"assets/meuble tv/tv24.jpg" },
          { id:"tv-25", name:"Meuble TV Modulable",    price:"970 DT",   colors:["#F0ECE4","#888"],              colorNames:["Blanc","Gris Perle"],     width:"195 cm", depth:"42 cm", height:"48 cm", img:"assets/meuble tv/tv25.jpg" },
          { id:"tv-26", name:"Meuble TV Exclusif",     price:"1 450 DT", colors:["#C4A265","#F0ECE4","#2C2C2C"],colorNames:["Doré","Blanc","Noir"],    width:"210 cm", depth:"45 cm", height:"55 cm", img:"assets/meuble tv/tv26.jpg" }
        ]
      },

      /* ── BUREAU ──────────────────── assets/bureau/ */
      bureau: {
        label: "Bureau",
        cover: "assets/bureau/00461b78dad43aab2743715f21095132.jpg",
        products: [
          { id:"bur-1",  name:"Bureau Directorial",     price:"1 350 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chêne Massif","Noir"],   width:"160 cm", depth:"75 cm", height:"76 cm", img:"assets/bureau/00461b78dad43aab2743715f21095132.jpg" },
          { id:"bur-2",  name:"Bureau Compact",         price:"680 DT",   colors:["#F0ECE4","#888"],    colorNames:["Blanc","Pieds Métal"],   width:"120 cm", depth:"60 cm", height:"74 cm", img:"assets/bureau/047a3c037904ee10d2bef3547974b3a1.jpg" },
          { id:"bur-3",  name:"Bureau Exécutif",        price:"1 800 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir Laqué","Doré"],     width:"180 cm", depth:"80 cm", height:"76 cm", img:"assets/bureau/04c124118e56884eeaac6a79f8826dea.jpg" },
          { id:"bur-4",  name:"Bureau avec Caisson",    price:"950 DT",   colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc"],         width:"140 cm", depth:"65 cm", height:"74 cm", img:"assets/bureau/052ea727f1dabc95835a31e59fd0f4a5.jpg" },
          { id:"bur-5",  name:"Bureau Scandinave",      price:"720 DT",   colors:["#8B7355","#F0ECE4"], colorNames:["Chêne Naturel","Blanc"], width:"130 cm", depth:"60 cm", height:"75 cm", img:"assets/bureau/068b56176ab420835364f0e5050e4859.jpg" },
          { id:"bur-6",  name:"Bureau Design Épuré",    price:"840 DT",   colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc Mat","Noir"],      width:"150 cm", depth:"65 cm", height:"75 cm", img:"assets/bureau/06cee3f055724ba7588e28457c070f92.jpg" },
          { id:"bur-7",  name:"Bureau en L",            price:"1 100 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Chêne","Anthracite"],    width:"200 cm", depth:"160 cm",height:"75 cm", img:"assets/bureau/12aff2d048f0a4d1962777511bbaad97.jpg" },
          { id:"bur-8",  name:"Bureau Moderne Luxe",    price:"1 450 DT", colors:["#C4A265","#2C2C2C"], colorNames:["Doré","Noir Laqué"],     width:"175 cm", depth:"80 cm", height:"76 cm", img:"assets/bureau/13ebe72b3f1ba2702108b3cf44093fa2.jpg" },
          { id:"bur-9",  name:"Bureau Loft",            price:"780 DT",   colors:["#2C2C2C","#8B7355"], colorNames:["Métal Noir","Bois"],     width:"140 cm", depth:"65 cm", height:"75 cm", img:"assets/bureau/3bf088c2b314bbc40974f7b668944c2f.jpg" },
          { id:"bur-10", name:"Bureau Bibliothèque",    price:"1 650 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc"],         width:"200 cm", depth:"45 cm", height:"210 cm",img:"assets/bureau/438878fa6d1227941ee14ec51db50f2b.jpg" },
          { id:"bur-11", name:"Bureau Contemporain",    price:"870 DT",   colors:["#F0ECE4","#888"],    colorNames:["Blanc","Gris Perle"],   width:"145 cm", depth:"65 cm", height:"75 cm", img:"assets/bureau/4a86d93954b49a5fd8567ac1b194c188.jpg" },
          { id:"bur-12", name:"Bureau Art Déco",        price:"1 250 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Chêne Doré","Blanc"],   width:"160 cm", depth:"72 cm", height:"76 cm", img:"assets/bureau/5ab0c7b6517c8b049bb8c780a4bb8ed0.jpg" },
          { id:"bur-13", name:"Bureau Petit Format",    price:"520 DT",   colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir"],         width:"100 cm", depth:"55 cm", height:"74 cm", img:"assets/bureau/5e6d61a2f5be64785ad5546eaec3404e.jpg" },
          { id:"bur-14", name:"Bureau Présidentiel",    price:"2 200 DT", colors:["#8B7355","#C4A265"], colorNames:["Bois Massif","Doré"],   width:"200 cm", depth:"90 cm", height:"78 cm", img:"assets/bureau/5fd50a103d60a7f0c7fc5fd4bd782640.jpg" },
          { id:"bur-15", name:"Bureau Angle Compact",   price:"890 DT",   colors:["#F0ECE4","#888"],    colorNames:["Blanc","Acier"],        width:"160 cm", depth:"130 cm",height:"75 cm", img:"assets/bureau/64a244547b62726fb5c037a6ced474e6.jpg" },
          { id:"bur-16", name:"Bureau Home Office",     price:"660 DT",   colors:["#8B7355","#F0ECE4"], colorNames:["Chêne Clair","Blanc"],  width:"120 cm", depth:"58 cm", height:"74 cm", img:"assets/bureau/66e57681b5a573cd1889ff8aa782bcbd.jpg" },
          { id:"bur-17", name:"Bureau Élégance",        price:"1 050 DT", colors:["#2C2C2C","#F0ECE4"], colorNames:["Noir Laqué","Blanc"],   width:"155 cm", depth:"70 cm", height:"76 cm", img:"assets/bureau/6f738f87c7b255320596ac87caaedd96.jpg" },
          { id:"bur-18", name:"Bureau Noyer Premium",   price:"1 380 DT", colors:["#8B7355","#2C2C2C"], colorNames:["Noyer Massif","Noir"],  width:"170 cm", depth:"78 cm", height:"76 cm", img:"assets/bureau/714a8bfc248a8dfd50d375a5763d3c1a.jpg" },
          { id:"bur-19", name:"Bureau Ouvert Design",   price:"980 DT",   colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Laiton"],       width:"165 cm", depth:"68 cm", height:"75 cm", img:"assets/bureau/739353ade2796728b1b6f57a9923c5f9.jpg" },
          { id:"bur-20", name:"Bureau Wengé Luxe",      price:"1 600 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Wengé","Doré"],         width:"180 cm", depth:"82 cm", height:"77 cm", img:"assets/bureau/7b0a16aa0cffe1e216d70bde796573d7.jpg" },
          { id:"bur-21", name:"Bureau Flottant Mural",  price:"580 DT",   colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc Mat","Noir"],     width:"120 cm", depth:"40 cm", height:"30 cm", img:"assets/bureau/7c283324c60003065978c5bb01f40653.jpg" },
          { id:"bur-22", name:"Bureau Industriel",      price:"740 DT",   colors:["#2C2C2C","#8B7355"], colorNames:["Métal","Bois Brut"],    width:"140 cm", depth:"65 cm", height:"75 cm", img:"assets/bureau/7d31b5df6ee85c566b877d0832b355c5.jpg" },
          { id:"bur-23", name:"Bureau Classique",       price:"820 DT",   colors:["#8B7355","#C4A265"], colorNames:["Chêne Doré","Laiton"],  width:"150 cm", depth:"70 cm", height:"76 cm", img:"assets/bureau/83c88696a7514755e2c80a806cf9f06c.jpg" },
          { id:"bur-24", name:"Bureau Minimaliste",     price:"610 DT",   colors:["#F0ECE4","#888"],    colorNames:["Blanc","Gris"],         width:"130 cm", depth:"60 cm", height:"74 cm", img:"assets/bureau/86cfe5ea0160664e2af0b2b3c95aa468.jpg" },
          { id:"bur-25", name:"Bureau Secrétaire",      price:"1 100 DT", colors:["#C4A265","#F0ECE4"], colorNames:["Chêne","Blanc Ivoire"], width:"100 cm", depth:"45 cm", height:"150 cm",img:"assets/bureau/88044d6864f4d30d40f69b4d1eda4a47.jpg" },
          { id:"bur-26", name:"Bureau avec Rangement",  price:"1 180 DT", colors:["#F0ECE4","#8B7355"], colorNames:["Blanc","Noyer"],        width:"180 cm", depth:"55 cm", height:"185 cm",img:"assets/bureau/8d709dacf9dca6b39cb9fbc3fcd53d46.jpg" },
          { id:"bur-27", name:"Bureau Directions",      price:"1 920 DT", colors:["#2C2C2C","#C4A265"], colorNames:["Noir Laqué","Doré"],    width:"190 cm", depth:"85 cm", height:"78 cm", img:"assets/bureau/94b5502571f3feff80190584cecb9bde.jpg" },
          { id:"bur-28", name:"Bureau Opéra",           price:"1 750 DT", colors:["#C4A265","#2C2C2C"], colorNames:["Doré","Anthracite"],    width:"185 cm", depth:"82 cm", height:"77 cm", img:"assets/bureau/97a2f2d45a52884c7f3e45a6df145470.jpg" },
          { id:"bur-29", name:"Bureau Student",         price:"450 DT",   colors:["#F0ECE4","#8B7355"], colorNames:["Blanc","Chêne"],        width:"110 cm", depth:"55 cm", height:"74 cm", img:"assets/bureau/9b129c5a846faa7328c8601a03a7800c.jpg" },
          { id:"bur-30", name:"Bureau Stand-Up",        price:"1 300 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Bois Naturel","Blanc"], width:"140 cm", depth:"65 cm", height:"110 cm",img:"assets/bureau/9d77e6d3f08d528d4102e7b9842f49ef.jpg" },
          { id:"bur-31", name:"Bureau Chêne Massif",    price:"1 550 DT", colors:["#8B7355"],           colorNames:["Chêne Massif"],         width:"160 cm", depth:"75 cm", height:"76 cm", img:"assets/bureau/cc62eb03798bf677a43a54acb929bab7.jpg" },
          { id:"bur-32", name:"Bureau Design Light",    price:"690 DT",   colors:["#F0ECE4","#2C2C2C"], colorNames:["Blanc","Noir Mat"],     width:"135 cm", depth:"62 cm", height:"75 cm", img:"assets/bureau/d8532cb8ea40907d47d97809e86eeaf8.jpg" },
          { id:"bur-33", name:"Bureau Senior",          price:"1 080 DT", colors:["#8B7355","#888"],    colorNames:["Bois","Gris Perle"],    width:"155 cm", depth:"70 cm", height:"76 cm", img:"assets/bureau/e56881093c346044a3e178313b37e589.jpg" },
          { id:"bur-34", name:"Bureau avec Tiroirs",    price:"860 DT",   colors:["#F0ECE4","#C4A265"], colorNames:["Blanc","Doré"],         width:"150 cm", depth:"68 cm", height:"75 cm", img:"assets/bureau/e68f3d163123632e5d3553feaabf11d0.jpg" },
          { id:"bur-35", name:"Bureau Blanc Brillant",  price:"780 DT",   colors:["#F0ECE4"],           colorNames:["Blanc Brillant"],       width:"145 cm", depth:"65 cm", height:"75 cm", img:"assets/bureau/f0a01dc6e6eb8a2b65b61111bc6421d8.jpg" },
          { id:"bur-36", name:"Bureau Duo",             price:"1 200 DT", colors:["#8B7355","#F0ECE4"], colorNames:["Noyer","Blanc"],        width:"190 cm", depth:"75 cm", height:"76 cm", img:"assets/bureau/f37780f342c9e36a61c620594539dd34.jpg" },
          { id:"bur-37", name:"Bureau Angle Premium",   price:"1 400 DT", colors:["#2C2C2C","#8B7355"], colorNames:["Noir","Chêne"],         width:"200 cm", depth:"170 cm",height:"76 cm", img:"assets/bureau/f3e6f2b2dd63ae3938f1bcfe9b847a01.jpg" },
          { id:"bur-38", name:"Bureau Vintage",         price:"920 DT",   colors:["#8B7355","#C4A265"], colorNames:["Bois Vieilli","Cuivre"],width:"155 cm", depth:"70 cm", height:"76 cm", img:"assets/bureau/fe7d50a4c75c94e124ae80d009c40b79.jpg" },
  
        ]
      }

    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 2 : AMEUBLEMENT
     Linge de Lit → assets/linge de lit/
     Luminaires   → assets/luminaires/
     Rideaux      → assets/rideaux/
     Tableaux     → assets/Tableau/
  ───────────────────────────────────────────────────── */
  ameublement: {
    label: "Ameublement",
    description: "Textiles, décoration et accessoires pour sublimer votre intérieur",
    cover: "assets/linge de lit/linge-de-lit-1.jfif",
    sub: {

      /* ── LINGE DE LIT ──────── assets/linge de lit/ */
      "linge-de-lit": {
        label: "Linge de Lit",
        cover: "assets/linge de lit/linge-de-lit-1.jfif",
        products: [
          { id:"ldl-1",  name:"Parure de Lit Blanc Luxe",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-1.jfif" },
          { id:"ldl-2",  name:"Parure de Lit Gris Perle",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-2.jfif" },
          { id:"ldl-3",  name:"Housse de Couette Premium",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-3.jfif" },
          { id:"ldl-4",  name:"Parure de Lit Satin",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-4.jfif" },
          { id:"ldl-5",  name:"Linge de Lit Élégance",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-5.jfif" },
          { id:"ldl-6",  name:"Parure de Lit Prestige",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-6.jfif" },
          { id:"ldl-7",  name:"Housse de Couette Design",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-7.jfif" },
          { id:"ldl-8",  name:"Parure de Lit Romantique",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-8.jfif" },
          { id:"ldl-9",  name:"Linge de Lit Moderne",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-9.jfif" },
          { id:"ldl-10", name:"Parure de Lit Classique",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-10.jfif" },
          { id:"ldl-11", name:"Housse de Couette Brodée",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-11.jfif" },
          { id:"ldl-12", name:"Parure de Lit Coton Égyptien",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-12.jfif" },
          { id:"ldl-13", name:"Linge de Lit Douceur",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-13.jfif" },
          { id:"ldl-14", name:"Parure de Lit Beige",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-14.jfif" },
          { id:"ldl-15", name:"Housse de Couette Velours",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-15.jfif" },
          { id:"ldl-16", name:"Parure de Lit Luxury",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-16.jfif" },
          { id:"ldl-17", name:"Linge de Lit Naturel",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-17.jfif" },
          { id:"ldl-18", name:"Parure de Lit Champagne",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-18.jfif" },
          { id:"ldl-19", name:"Housse de Couette Taupe",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-19.jfif" },
          { id:"ldl-20", name:"Parure de Lit Ivoire",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-20.jfif" },
          { id:"ldl-21", name:"Linge de Lit Sophistiqué",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-21.jfif" },
          { id:"ldl-22", name:"Parure de Lit Graphite",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-22.jfif" },
          { id:"ldl-23", name:"Housse de Couette Cosy",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-23.jfif" },
          { id:"ldl-24", name:"Parure de Lit Soft",              price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-24.jfif" },
          { id:"ldl-25", name:"Linge de Lit Premium",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-25.jfif" },
          { id:"ldl-26", name:"Parure de Lit Pastel",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-26.jfif" },
          { id:"ldl-27", name:"Housse de Couette Douce",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-27.jfif" },
          { id:"ldl-28", name:"Parure de Lit Raffinée",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-28.jfif" },
          { id:"ldl-29", name:"Linge de Lit Bohème",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-29.jfif" },
          { id:"ldl-30", name:"Parure de Lit Scandinave",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-30.jfif" },
          { id:"ldl-31", name:"Housse de Couette Exclusive",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-31.jfif" },
          { id:"ldl-32", name:"Parure de Lit Hôtelier",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-32.jfif" },
          { id:"ldl-33", name:"Linge de Lit Prestige",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/linge de lit/linge-de-lit-33.jfif" }
        ]
      },

      /* ── LUMINAIRES ──────────── assets/luminaires/ */
      luminaires: {
        label: "Luminaires",
        cover: "assets/luminaires/luminaires-1.jfif",
        products: [
          { id:"lum-1",  name:"Lustre Cristal Contemporain", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-1.jfif" },
          { id:"lum-2",  name:"Suspension Design LED",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-2.jfif" },
          { id:"lum-3",  name:"Applique Murale Moderne",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-3.jfif" },
          { id:"lum-4",  name:"Lampe de Table Luxe",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-4.jfif" },
          { id:"lum-5",  name:"Plafonnier Élégant",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-5.jfif" },
          { id:"lum-6",  name:"Lustre Baroque Doré",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-6.jfif" },
          { id:"lum-7",  name:"Suspension Géométrique",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-7.jfif" },
          { id:"lum-8",  name:"Applique Bois & Métal",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-8.jfif" },
          { id:"lum-9",  name:"Lampe Architecte Design",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-9.jfif" },
          { id:"lum-10", name:"Lustre Champagne",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-10.jfif" },
          { id:"lum-11", name:"Suspension Velours Noir",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-11.jfif" },
          { id:"lum-12", name:"Plafonnier LED Rond",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-12.jfif" },
          { id:"lum-13", name:"Lustre Naturel Design",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-13.jfif" },
          { id:"lum-14", name:"Applique Murale Art Déco",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-14.jfif" },
          { id:"lum-15", name:"Suspension Industrielle",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-15.jfif" },
          { id:"lum-16", name:"Lampe de Table Bois",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-16.jfif" },
          { id:"lum-17", name:"Plafonnier Design Fleuri",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-17.jfif" },
          { id:"lum-18", name:"Lustre Fils Dorés",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-18.jfif" },
          { id:"lum-19", name:"Suspension Boule Blanche",    price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-19.jfif" },
          { id:"lum-20", name:"Applique Marbre & Or",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-20.jfif" },
          { id:"lum-21", name:"Lampe Bougeoir Moderne",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-21.jfif" },
          { id:"lum-22", name:"Lustre Prestige Exclusive",   price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/luminaires/luminaires-22.jfif" }
        ]
      },

      /* ── RIDEAUX ──────────────── assets/rideaux/ (rideaux-46 à rideaux-75) */
      rideaux: {
        label: "Rideaux",
        cover: "assets/rideaux/rideaux-46.jfif",
        products: [
          { id:"rid-46", name:"Rideau Damassé Blanc",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-46.jfif" },
          { id:"rid-47", name:"Voilage Brodé Délicat",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-47.jfif" },
          { id:"rid-48", name:"Rideau Occultant Kaki",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-48.jfif" },
          { id:"rid-49", name:"Rideau Texture Lisse",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-49.jfif" },
          { id:"rid-50", name:"Rideau Doux Prestige",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-50.jfif" },
          { id:"rid-51", name:"Rideau Velours Bordeaux",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-51.jfif" },
          { id:"rid-52", name:"Rideau Bambou & Lin",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-52.jfif" },
          { id:"rid-53", name:"Voilage Organza Blanc",        price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-53.jfif" },
          { id:"rid-54", name:"Rideau Jacquard Or",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-54.jfif" },
          { id:"rid-55", name:"Rideau Texturé Miel",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-55.jfif" },
          { id:"rid-56", name:"Rideau Occultant Premium",     price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-56.jfif" },
          { id:"rid-57", name:"Rideau Moderne Minimaliste",   price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-57.jfif" },
          { id:"rid-58", name:"Voilage Romantique",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-58.jfif" },
          { id:"rid-59", name:"Rideau Crêpe Doux",            price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-59.jfif" },
          { id:"rid-60", name:"Rideau Satiné Blanc",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-60.jfif" },
          { id:"rid-61", name:"Rideau Velours Moka",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-61.jfif" },
          { id:"rid-62", name:"Rideau Élégance Absolue",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-62.jfif" },
          { id:"rid-63", name:"Voilage Fin Délicat",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-63.jfif" },
          { id:"rid-64", name:"Rideau Épais Hiver",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-64.jfif" },
          { id:"rid-65", name:"Rideau Léger Été",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-65.jfif" },
          { id:"rid-66", name:"Rideau Design Bohème",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-66.jfif" },
          { id:"rid-67", name:"Voilage Émeraude",             price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-67.jfif" },
          { id:"rid-68", name:"Rideau Occultant Pro",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-68.jfif" },
          { id:"rid-69", name:"Rideau Rayures Fines",         price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-69.jfif" },
          { id:"rid-70", name:"Rideau Double Face",           price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-70.jfif" },
          { id:"rid-71", name:"Voilage Grande Hauteur",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-71.jfif" },
          { id:"rid-72", name:"Rideau Velours Charbon",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-72.jfif" },
          { id:"rid-73", name:"Rideau Dentelle Blanche",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-73.jfif" },
          { id:"rid-74", name:"Rideau Prestige Unique",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-74.jfif" },
          { id:"rid-75", name:"Rideau Exclusif Dream Design", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/rideaux/rideaux-75.jfif" }
        ]
      },

      /* ── TABLEAUX ──────────────── assets/Tableau/ (6 originaux + 43 déplacés) */
      tableaux: {
        label: "Tableaux",
        cover: "assets/Tableau/1.jpg",
        products: [
          { id:"tab-1",  name:"Tableau Relief Vert Forêt & Blanc",          price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/1.jpg" },
          { id:"tab-2",  name:"Tableau Relief Terres Brunes & Blanc",       price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/2.jpg" },
          { id:"tab-3",  name:"Tableau Relief Arches & Courbes Beige",      price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/3.jpg" },
          { id:"tab-4",  name:"Tableau Relief Palette Neutre Beige & Noir", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/4.jpg" },
          { id:"tab-5",  name:"Tableau Relief Vagues & Stries Gris & Blanc",price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/5.jpg" },
          { id:"tab-6",  name:"Tableau Décoration Murale",                  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/6.jfif" },
          { id:"tab-r1",  name:"Tableau Décoratif Collection 1",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-1.jfif" },
          { id:"tab-r2",  name:"Tableau Décoratif Collection 2",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-2.jfif" },
          { id:"tab-r3",  name:"Tableau Décoratif Collection 3",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-3.jfif" },
          { id:"tab-r4",  name:"Tableau Décoratif Collection 4",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-4.jfif" },
          { id:"tab-r5",  name:"Tableau Décoratif Collection 5",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-5.jfif" },
          { id:"tab-r6",  name:"Tableau Décoratif Collection 6",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-6.jfif" },
          { id:"tab-r7",  name:"Tableau Décoratif Collection 7",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-7.jfif" },
          { id:"tab-r8",  name:"Tableau Décoratif Collection 8",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-8.jfif" },
          { id:"tab-r9",  name:"Tableau Décoratif Collection 9",  price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-9.jfif" },
          { id:"tab-r10", name:"Tableau Décoratif Collection 10", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-10.jfif" },
          { id:"tab-r11", name:"Tableau Décoratif Collection 11", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-11.jfif" },
          { id:"tab-r12", name:"Tableau Décoratif Collection 12", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-12.jfif" },
          { id:"tab-r13", name:"Tableau Décoratif Collection 13", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-13.jfif" },
          { id:"tab-r15", name:"Tableau Décoratif Collection 15", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-15.jfif" },
          { id:"tab-r16", name:"Tableau Décoratif Collection 16", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-16.jfif" },
          { id:"tab-r17", name:"Tableau Décoratif Collection 17", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-17.jfif" },
          { id:"tab-r18", name:"Tableau Décoratif Collection 18", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-18.jfif" },
          { id:"tab-r19", name:"Tableau Décoratif Collection 19", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-19.jfif" },
          { id:"tab-r20", name:"Tableau Décoratif Collection 20", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-20.jfif" },
          { id:"tab-r21", name:"Tableau Décoratif Collection 21", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-21.jfif" },
          { id:"tab-r22", name:"Tableau Décoratif Collection 22", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-22.jfif" },
          { id:"tab-r23", name:"Tableau Décoratif Collection 23", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-23.jfif" },
          { id:"tab-r24", name:"Tableau Décoratif Collection 24", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-24.jfif" },
          { id:"tab-r25", name:"Tableau Décoratif Collection 25", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-25.jfif" },
          { id:"tab-r26", name:"Tableau Décoratif Collection 26", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-26.jfif" },
          { id:"tab-r27", name:"Tableau Décoratif Collection 27", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-27.jfif" },
          { id:"tab-r28", name:"Tableau Décoratif Collection 28", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-28.jfif" },
          { id:"tab-r29", name:"Tableau Décoratif Collection 29", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-29.jfif" },
          { id:"tab-r30", name:"Tableau Décoratif Collection 30", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-30.jfif" },
          { id:"tab-r31", name:"Tableau Décoratif Collection 31", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-31.jfif" },
          { id:"tab-r32", name:"Tableau Décoratif Collection 32", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-32.jfif" },
          { id:"tab-r33", name:"Tableau Décoratif Collection 33", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-33.jfif" },
          { id:"tab-r34", name:"Tableau Décoratif Collection 34", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-34.jfif" },
          { id:"tab-r36", name:"Tableau Décoratif Collection 36", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-36.jfif" },
          { id:"tab-r37", name:"Tableau Décoratif Collection 37", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-37.jfif" },
          { id:"tab-r38", name:"Tableau Décoratif Collection 38", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-38.jfif" },
          { id:"tab-r39", name:"Tableau Décoratif Collection 39", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-39.jfif" },
          { id:"tab-r40", name:"Tableau Décoratif Collection 40", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-40.jfif" },
          { id:"tab-r41", name:"Tableau Décoratif Collection 41", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-41.jfif" },
          { id:"tab-r42", name:"Tableau Décoratif Collection 42", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-42.jfif" },
          { id:"tab-r43", name:"Tableau Décoratif Collection 43", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-43.jfif" },
          { id:"tab-r44", name:"Tableau Décoratif Collection 44", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-44.jfif" },
          { id:"tab-r45", name:"Tableau Décoratif Collection 45", price:"Sur Devis", colors:[], colorNames:[], width:"—", depth:"—", height:"—", img:"assets/Tableau/rideaux-45.jfif" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 3 : PACK BÉBÉ / ENFANT
     Photos → assets/bebe enfant/
  ───────────────────────────────────────────────────── */
  "pack-enfant": {
    label: "Pack Bébé / Enfant",
    description: "Chambres magiques et complètes pour bébés et enfants — confort, sécurité et magie",
    cover: "assets/bebe enfant/pack bebe/bebe1.jpg",
    sub: {

      /* ── BÉBÉ ────── assets/bebe enfant/pack bebe/ */
      bebe: {
        label: "Bébé",
        cover: "assets/bebe enfant/pack bebe/bebe1.jpg",
        products: [
          {
            id:"bb-1", name:"Lit Bébé Nuage",
            price:"580 DT",
            colors:["#F0ECE4","#C0B8B0","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Gris Doux","Bleu Pastel","Rose Poudré"],
            width:"70 cm", depth:"140 cm", height:"85 cm",
            img:"assets/bebe enfant/pack bebe/bebe1.jpg"
          },
          {
            id:"bb-2", name:"Berceau à Bascule",
            price:"380 DT",
            colors:["#F0ECE4","#C0B8B0"],
            colorNames:["Blanc","Naturel"],
            width:"55 cm", depth:"90 cm", height:"100 cm",
            img:"assets/bebe enfant/pack bebe/bebe2.jpg"
          },
          {
            id:"bb-3", name:"Commode Bébé Étoile",
            price:"420 DT",
            colors:["#F0ECE4","#C0B8B0","#FFD6E0"],
            colorNames:["Blanc","Gris Doux","Rose"],
            width:"80 cm", depth:"50 cm", height:"85 cm",
            img:"assets/bebe enfant/pack bebe/bebe3.jpg"
          },
          {
            id:"bb-4", name:"Armoire Bébé Nuage",
            price:"720 DT",
            colors:["#F0ECE4","#C0B8B0","#8FD3F4"],
            colorNames:["Blanc","Gris","Bleu"],
            width:"100 cm", depth:"50 cm", height:"180 cm",
            img:"assets/bebe enfant/pack bebe/bebe4.jpg"
          },
          {
            id:"bb-5", name:"Table à Langer Pratique",
            price:"350 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"75 cm", depth:"50 cm", height:"90 cm",
            img:"assets/bebe enfant/pack bebe/bebe5.jpg"
          },
          {
            id:"bb-6", name:"Chaise Haute Bébé",
            price:"280 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"45 cm", depth:"55 cm", height:"95 cm",
            img:"assets/bebe enfant/pack bebe/bebe6.jpg"
          },
          {
            id:"bb-7", name:"Parc Bébé Pliable",
            price:"320 DT",
            colors:["#F0ECE4","#8FD3F4"],
            colorNames:["Blanc","Bleu"],
            width:"100 cm", depth:"100 cm", height:"75 cm",
            img:"assets/bebe enfant/pack bebe/bebe7.jpg"
          },
          {
            id:"bb-8", name:"Coffre à Jouets Bébé",
            price:"190 DT",
            colors:["#F0ECE4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc","Rose","Vert"],
            width:"80 cm", depth:"40 cm", height:"45 cm",
            img:"assets/bebe enfant/pack bebe/bebe8.jpg"
          }
        ]
      },

      /* ── ENFANT / JUNIOR ────── assets/bebe enfant/ */
      juniors: {
        label: "Enfant / Junior",
        cover: "assets/bebe enfant/1.jpg",
        products: [
          {
            id:"jr-1",  name:"Lit Cabane Junior",
            price:"850 DT",
            colors:["#F0ECE4","#8B7355","#A8D8A8","#8FD3F4"],
            colorNames:["Blanc","Bois","Vert Forêt","Bleu"],
            width:"90 cm", depth:"190 cm", height:"145 cm",
            img:"assets/bebe enfant/1.jpg"
          },
          {
            id:"jr-2",  name:"Lit Mezzanine Junior",
            price:"1 100 DT",
            colors:["#F0ECE4","#8B7355"],
            colorNames:["Blanc","Bois Naturel"],
            width:"90 cm", depth:"200 cm", height:"160 cm",
            img:"assets/bebe enfant/2.jpg"
          },
          {
            id:"jr-3",  name:"Lit Superposé Kids",
            price:"1 350 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"90 cm", depth:"200 cm", height:"170 cm",
            img:"assets/bebe enfant/3.jpg"
          },
          {
            id:"jr-4",  name:"Bureau Enfant Étudiant",
            price:"390 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc","Bleu","Rose","Vert"],
            width:"100 cm", depth:"50 cm", height:"75 cm",
            img:"assets/bebe enfant/4.png"
          },
          {
            id:"jr-5",  name:"Armoire Kids 2 Portes",
            price:"650 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"100 cm", depth:"52 cm", height:"190 cm",
            img:"assets/bebe enfant/5.jpg"
          },
          {
            id:"jr-6",  name:"Commode Junior 4 Tir.",
            price:"480 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"80 cm", depth:"42 cm", height:"90 cm",
            img:"assets/bebe enfant/6.jpg"
          },
          {
            id:"jr-7",  name:"Bureau avec Étagère",
            price:"520 DT",
            colors:["#F0ECE4","#8B7355"],
            colorNames:["Blanc","Bois"],
            width:"120 cm", depth:"55 cm", height:"75 cm",
            img:"assets/bebe enfant/7.jpg"
          },
          {
            id:"jr-8",  name:"Étagère Murale Kids",
            price:"180 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0","#A8D8A8"],
            colorNames:["Blanc","Bleu","Rose","Vert"],
            width:"80 cm", depth:"20 cm", height:"25 cm",
            img:"assets/bebe enfant/8.jpg"
          },
          {
            id:"jr-9",  name:"Chaise Bureau Enfant",
            price:"220 DT",
            colors:["#8FD3F4","#FFD6E0","#A8D8A8","#F0ECE4"],
            colorNames:["Bleu","Rose","Vert","Blanc"],
            width:"45 cm", depth:"45 cm", height:"82 cm",
            img:"assets/bebe enfant/9.png"
          },
          {
            id:"jr-10", name:"Table & Chaises Enfant",
            price:"310 DT",
            colors:["#8FD3F4","#FFD6E0","#A8D8A8"],
            colorNames:["Bleu","Rose","Vert"],
            width:"80 cm", depth:"60 cm", height:"50 cm",
            img:"assets/bebe enfant/10.jpg"
          },
          {
            id:"jr-11", name:"Coffre à Jouets Junior",
            price:"240 DT",
            colors:["#F0ECE4","#8FD3F4","#FFD6E0"],
            colorNames:["Blanc","Bleu","Rose"],
            width:"90 cm", depth:"45 cm", height:"50 cm",
            img:"assets/bebe enfant/11.jpg"
          },
          {
            id:"jr-12", name:"Bibliothèque Kids",
            price:"380 DT",
            colors:["#F0ECE4","#8B7355","#8FD3F4"],
            colorNames:["Blanc","Bois","Bleu"],
            width:"80 cm", depth:"30 cm", height:"150 cm",
            img:"assets/bebe enfant/12.jpg"
          }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 4 : SUPER SIESTA
     Photos → assets/feuteuil/
  ───────────────────────────────────────────────────── */
  siesta: {
    label: "Super Siesta",
    description: "Collection exclusive canapés, sofas et espaces de repos signés Dream Design",
    cover: "assets/feuteuil/sejour.jpg",
    sub: {
      canapes: {
        label: "Canapés & Sofas",
        cover: "assets/feuteuil/sejour.jpg",
        products: [
          { id:"ss-1", name:"Canapé Velours Séjour",    price:"2 100 DT", colors:["#2D6A4F","#2C2C2C","#888","#C4A265"], colorNames:["Vert Émeraude","Noir","Gris","Beige"],    width:"230 cm",    depth:"88 cm", height:"78 cm", img:"assets/feuteuil/sejour.jpg" },
          { id:"ss-2", name:"Canapé d'Angle Panorama",  price:"3 200 DT", colors:["#888","#F0ECE4","#2C2C2C"],           colorNames:["Gris Cendré","Blanc Cassé","Anthracite"], width:"280×170 cm", depth:"90 cm", height:"76 cm", img:"assets/feuteuil/sejour1.jpg" },
          { id:"ss-3", name:"Salon Buble Prestige",      price:"2 800 DT", colors:["#888","#F0ECE4"],                    colorNames:["Gris Perle","Blanc"],                     width:"260 cm",    depth:"92 cm", height:"80 cm", img:"assets/feuteuil/sejour buble.jpg" },
          { id:"ss-4", name:"Canapé 2 Places Cuir",     price:"1 650 DT", colors:["#8B4513","#2C2C2C","#888"],           colorNames:["Cognac","Noir","Gris"],                   width:"155 cm",    depth:"85 cm", height:"74 cm", img:"assets/feuteuil/1505a669cbbf713cc8686047ac204a2e.jpg" }
        ]
      },
      fauteuils: {
        label: "Fauteuils & Poufs",
        cover: "assets/feuteuil/25c13185ac91e9e7e8601535a8342281.jpg",
        products: [
          { id:"ss-f1", name:"Fauteuil Relax Luxe",  price:"980 DT",  colors:["#888","#F0ECE4","#2C2C2C"], colorNames:["Gris","Crème","Noir"],                    width:"80 cm", depth:"85 cm", height:"95 cm", img:"assets/feuteuil/25c13185ac91e9e7e8601535a8342281.jpg" },
          { id:"ss-f2", name:"Pouf Géant Arrondi",   price:"320 DT",  colors:["#2C2C2C","#888","#F0ECE4","#C4A265"], colorNames:["Noir","Gris","Blanc","Beige"], width:"90 cm", depth:"90 cm", height:"40 cm", img:"assets/feuteuil/28d2a84d8ca6ddb0c92c573dafadebc4.jpg" },
          { id:"ss-f3", name:"Fauteuil Design Cocon", price:"1 200 DT",colors:["#F0ECE4","#C4A265","#8B7355"],        colorNames:["Blanc","Or","Noyer"],          width:"85 cm", depth:"82 cm", height:"100 cm",img:"assets/feuteuil/3c83c5cfba636f423df76266f3346e4a.jpg" }
        ]
      }
    }
  },

  /* ─────────────────────────────────────────────────────
     CAT 5 : PACK MARIAGE
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
