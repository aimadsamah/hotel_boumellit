export type Lang = "fr" | "en" | "ar";

export const translations: Record<Lang, Record<string, string>> = {
  fr: {
    "nav.home": "Accueil",
    "nav.about": "À Propos",
    "nav.social": "Réseaux",
    "nav.map": "Carte",
    "nav.guide": "Guide Touristique",
    "hero.title": "L'Art de l'Accueil Méditerranéen",
    "hero.subtitle":
      "Entre mer et montagne, vivez une expérience d'exception à Jijel",
    "hero.cta": "Découvrir",
    "about.title": "Notre Hôtel",
    "about.description":
      "Niché sur la magnifique côte méditerranéenne, notre établissement vous offre un cadre d'une élégance rare. Chaque détail a été pensé pour faire de votre séjour un moment inoubliable, alliant le charme authentique de l'Algérie à un confort contemporain.",
    "about.address": "Jijel, 18000 Jijel, Algérie",
    "about.phone": "+213 (0) 563 05 47 30",
    "about.email": "reception@hotelboumellit.com",
    "social.title": "Suivez-Nous",
    "social.subtitle": "Explorez notre univers à travers nos réseaux sociaux",
    "social.instagram": "Instagram",
    "social.facebook": "Facebook",
    "social.tiktok": "TikTok",
    "social.followers": "Abonnez-vous",
    "map.title": "Nous Trouver",
    "map.subtitle": "Au cœur de la ville jijelienne",
    "guide.title": "Guide Touristique",
    "guide.subtitle": "Explorez les merveilles de la région de Jijel",
    "guide.grottes.name": "Les Grottes Merveilleuses",
    "guide.grottes.desc":
      "Un chef-d'œuvre de la nature taillé par l'érosion marine. Ces grottes aux reflets turquoise offrent un spectacle saisissant de stalactites et de lumière naturelle.",
    "guide.plage.name": "La Plage Rouge",
    "guide.plage.desc":
      "Célèbre pour son sable aux teintes rougeâtres uniques en Méditerranée, bordée par des falaises de grès et une eau d'un azur éclatant.",
    "guide.phare.name": "Le Grand Phare de Ras Afia",
    "guide.phare.desc":
      "Perché sur la pointe nord de Jijel, ce phare historique offre une vue panoramique imprenable sur la mer Méditerranée et la côte sauvage.",
    "guide.corniche.name": "La Corniche Jijelienne",
    "guide.corniche.desc":
      "Une promenade côtière pittoresque longeant des criques isolées et des plages de sable fin, idéale pour des balades au coucher du soleil.",
    "guide.taza.name": "Parc National de Taza",
    "guide.taza.desc":
      "Une réserve de biosphère classée par l'UNESCO, abritant une forêt dense, des cascades et une biodiversité exceptionnelle aux portes de Jijel.",
    "guide.beni-belaid.name": "Les Plages de Béni Belaïd",
    "guide.beni-belaid.desc":
      "Un ensemble de plages vierges et préservées, caractérisées par des criques rocheuses et une eau cristalline. Parfait pour les amateurs de baignade et de plongée.",
    "guide.viewmap": "Voir sur Google Maps",
    "footer.rights": "© 2026 Hôtel Boumellit. Tous droits réservés.",
    "footer.tagline": "L'excellence méditerranéenne",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.social": "Social",
    "nav.map": "Map",
    "nav.guide": "Tour Guide",
    "hero.title": "The Art of Mediterranean Hospitality",
    "hero.subtitle":
      "Between sea and mountain, experience exceptional luxury in Jijel",
    "hero.cta": "Discover",
    "about.title": "Our Hotel",
    "about.description":
      "Nestled on the magnificent Mediterranean coast, our establishment offers a setting of rare elegance. Every detail has been designed to make your stay an unforgettable moment, blending Algeria's authentic charm with contemporary comfort.",
    "about.address": "Jijel, 18000 Jijel, Algeria",
    "about.phone": "+213 (0) 563 05 47 30",
    "about.email": "reception@hotelboumellit.com",
    "social.title": "Follow Us",
    "social.subtitle": "Explore our world through social media",
    "social.instagram": "Instagram",
    "social.facebook": "Facebook",
    "social.tiktok": "TikTok",
    "social.followers": "Follow us",
    "map.title": "Find Us",
    "map.subtitle": "In the heart of the Jijel corniche",
    "guide.title": "Tourist Guide",
    "guide.subtitle": "Explore the wonders of the Jijel region",
    "guide.grottes.name": "The Marvelous Caves",
    "guide.grottes.desc":
      "A masterpiece of nature carved by marine erosion. These caves with turquoise reflections offer a striking spectacle of stalactites and natural light.",
    "guide.plage.name": "Red Beach",
    "guide.plage.desc":
      "Famous for its unique reddish sand in the Mediterranean, bordered by sandstone cliffs and water of brilliant azure.",
    "guide.phare.name": "Ras Afia Lighthouse",
    "guide.phare.desc":
      "Perched on Jijel's northern point, this historic lighthouse offers a breathtaking panoramic view of the Mediterranean Sea and the wild coast.",
    "guide.corniche.name": "Jijel Corniche",
    "guide.corniche.desc":
      "A picturesque coastal promenade along secluded coves and fine sandy beaches, ideal for sunset walks.",
    "guide.taza.name": "Taza National Park",
    "guide.taza.desc":
      "A UNESCO-classified biosphere reserve, sheltering dense forest, waterfalls and exceptional biodiversity at the gates of Jijel.",
    "guide.beni-belaid.name": "Béni Belaïd Beaches",
    "guide.beni-belaid.desc":
      "A set of pristine and preserved beaches, characterized by rocky coves and crystal-clear water. Perfect for swimming and diving enthusiasts.",
    "guide.viewmap": "View on Google Maps",
    "footer.rights": "© 2026 Hôtel Boumellit. All rights reserved.",
    "footer.tagline": "Mediterranean excellence",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "عن الفندق",
    "nav.social": "تواصل",
    "nav.map": "خريطة",
    "nav.guide": "دليل سياحي",
    "hero.title": "فن الضيافة المتوسطية",
    "hero.subtitle": "بين البحر والجبل، عيش تجربة فاخرة استثنائية في جيجل",
    "hero.cta": "اكتشف",
    "about.title": "فندقنا",
    "about.description":
      "يقع فندقنا على الساحل المتوسطي الرائع، ويوفر مكانًا بأناقة نادرة. كل تفصيل صُمم ليجعل إقامتك لحظة لا تُنسى، تمزج بين سحر الجزائر الأصيل والراحة العصرية.",
    "about.address": "جيجل، 18000 جيجل، الجزائر",
    "about.phone": "+213 (0) 563 05 47 30",
    "about.email": "reception@hotelboumellit.com",
    "social.title": "تابعونا",
    "social.subtitle": "استكشفوا عالمنا عبر وسائل التواصل الاجتماعي",
    "social.instagram": "إنستغرام",
    "social.facebook": "فيسبوك",
    "social.tiktok": "تيك توك",
    "social.followers": "اشتركوا",
    "map.title": "موقعنا",
    "map.subtitle": "في قلب كورنيش جيجل",
    "guide.title": "دليل سياحي",
    "guide.subtitle": "استكشف عجائب منطقة جيجل",
    "guide.grottes.name": "الكهوف العجيبة",
    "guide.grottes.desc":
      "تحفة فنية منحوتة بفعل التآكل البحري. كهوف بلمسات فيروزية تقدم مشهدًا خلابًا من الصواعد والضوء الطبيعي.",
    "guide.plage.name": "الشاطئ الأحمر",
    "guide.plage.desc":
      "مشهور برماله الحمراء الفريدة في البحر المتوسط، تحيط به منحدرات رملية ومياه زرقاء صافية.",
    "guide.phare.name": "منارة رأس آفيا",
    "guide.phare.desc":
      "تطفو على النقطة الشمالية لمدينة جيجل، هذه المنارة التاريخية توفر إطلالة بانورامية خلابة على البحر الأبيض المتوسط والساحل البري.",
    "guide.corniche.name": "كورنيش جيجل",
    "guide.corniche.desc":
      "متنزه ساحلي خلاب يمتد على طول الخلجان المنعزلة والشواطئ الرملية الناعمة، مثالي للنزهات عند غروب الشمس.",
    "guide.taza.name": "الحديقة الوطنية تازة",
    "guide.taza.desc":
      "محمية المحيط الحيوي المصنفة من قبل اليونسكو، تضم غابة كثيفة وشلالات وتنوعًا بيولوجيًا استثنائيًا على أبواب جيجل.",
    "guide.beni-belaid.name": "شواطئ بني بلعيد",
    "guide.beni-belaid.desc":
      "مجموعة من الشواطئ البكر والمحفوظة، تتميز بالعرانيس الصخرية والمياه الصافية. مثالية لعشاق السباحة والغوص.",
    "guide.viewmap": "عرض على خرائط غوغل",
    "footer.rights": "© 2026 فندق بومليط. جميع الحقوق محفوظة.",
    "footer.tagline": "التميز المتوسطي",
  },
};

export const langLabels: Record<Lang, string> = {
  fr: "FR",
  en: "EN",
  ar: "AR",
};

export const langDirections: Record<Lang, "ltr" | "rtl"> = {
  fr: "ltr",
  en: "ltr",
  ar: "rtl",
};
