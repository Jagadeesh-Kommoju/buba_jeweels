/**
 * BuBa Fashions - Authentic Boutique Catalog & Brand Data
 * Atelier & Showroom: Shop F2, Akhanda Complex, Walkers Park Road, PM Palem, Visakhapatnam – 530041
 * Direct Consultation: +91 90002 39237
 */

const BUBA_DATA = {
  store: {
    name: "BuBa Fashions",
    tagline: "Bridal Jewellery Rentals & 1-Gram Micro-Gold Boutique",
    location: "PM Palem, Visakhapatnam",
    address: "Shop F2, Akhanda Complex, Walkers Park Road (Wakers Park Road), Ratnagiri Housing Board Colony, PM Palem, Visakhapatnam, Andhra Pradesh – 530041",
    landmark: "Behind Vijetha Supermarket lane, Walkers Park Road",
    phone: "+91 90002 39237",
    whatsappClean: "919000239237",
    instagram: "@bubafashions",
    instagramUrl: "https://www.instagram.com/bubafashions/",
    youtube: "@shopbuba",
    youtubeUrl: "https://www.youtube.com/@shopbuba",
    timings: {
      weekdays: "Monday – Saturday: 10:00 AM – 9:00 PM",
      sunday: "Sunday: 2:00 PM – 9:00 PM"
    },
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15194.275558117781!2d83.3534272!3d17.8117188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395b28d6c7b94d%3A0xb15c468903c72210!2sPothinamallayya%20Palem%2C%20Visakhapatnam%2C%20Andhra%20Pradesh%20530041!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    routeVideoId: "NRVBwFnaUWQ"
  },

  // Curated boutique collections
  categories: [
    {
      id: "bridal-rental",
      title: "Bridal Rental Trousseau",
      subtitle: "Complete matching 8-piece suites for Telugu weddings & receptions",
      badge: "3-Day Wedding Rental",
      image: "assets/images/products/buba-bridal-suite.jpg",
      description: "Full head-to-toe sets: Choker, Long Haram, Vaddanam, Jada Billalu, Maang Tikka, and Jhumkas."
    },
    {
      id: "one-gram-gold",
      title: "1-Gram Gold & Temple Harams",
      subtitle: "Micro-plated 24K antique finish with timeless Telugu motifs",
      badge: "Long-Lasting Polish",
      image: "assets/images/products/buba-kasu-mala.jpg",
      description: "Kasu Malas, Gutapusalu, and Mango Harams handcrafted to match the weight and luster of pure 24K gold."
    },
    {
      id: "pearls",
      title: "Pearls for Every Occasion",
      subtitle: "Hand-strung seed pearl chandraharams with heirloom pendants",
      badge: "Signature Collection",
      image: "assets/images/products/buba-pearl-chandraharam.jpg",
      description: "7-line and 9-line Hyderabad cultured seed pearls centered with antique emerald and ruby cabochons."
    },
    {
      id: "kundan-bangles",
      title: "Kundan Bangles & Clutches",
      subtitle: "Saree-matching side bangles, screw-lock kadas & bridal potlis",
      badge: "Wristwear & Bags",
      image: "assets/images/products/buba-kundan-bangles.jpg",
      description: "Handcrafted stone kadas, openable side bangles, and embroidered velvet clutches matching any silk saree."
    },
    {
      id: "anti-tarnish",
      title: "Daily Anti-Tarnish & Mangalsutras",
      subtitle: "Waterproof stainless steel essentials & lightweight black beads",
      badge: "Everyday Wear",
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      description: "316L stainless steel jewelry with PVD gold coating that withstands daily showers, workouts, and sweat."
    }
  ],

  // 12 Handpicked Products with Human Craftsmanship Details
  products: [
    {
      id: "bb-101",
      sku: "BUBA-BRL-101",
      title: "Maharani Royal Kundan 8-Piece Bridal Rental Suite",
      category: "bridal-rental",
      badge: "Bridal Rental Suite",
      badgeType: "rental",
      retailPrice: 32000,
      salePrice: 28500,
      rentalPrice3Days: 4999,
      rentalDeposit: 2500,
      image: "assets/images/products/buba-bridal-suite.jpg",
      shortDesc: "Complete bridal set featuring a grand Kundan choker, long mango haram, carved Gaja-Lakshmi vaddanam, 9-piece jada billalu, maang tikka, and chandelier jhumkas.",
      fabricPairing: "Ideal with crimson, deep maroons, and bottle-green Kanjeevaram silk wedding sarees.",
      craftsmanship: [
        "24K micro-dipped matte antique gold finish",
        "Hand-set uncut Kundan and Kemp stones with foil backing",
        "Adjustable woven silk cord (dori) and expandable waist latches",
        "Delivered in a velvet padded presentation trunk"
      ],
      inclusions: "Choker, Long Haram, Vaddanam (Waist belt), Jada Billalu (9 pcs), Maang Tikka, Jhumkas, Hathphool pair",
      youtubeShortId: "DyCLIeE7CHk"
    },
    {
      id: "bb-102",
      sku: "BUBA-HRM-102",
      title: "Heritage 1-Gram Gold Lakshmi Kasu Mala with Bell Jhumkas",
      category: "one-gram-gold",
      badge: "1-Gram Gold",
      badgeType: "sale",
      retailPrice: 5800,
      salePrice: 3899,
      rentalPrice3Days: 1299,
      rentalDeposit: 1000,
      image: "assets/images/products/buba-kasu-mala.jpg",
      shortDesc: "Traditional Coastal Andhra Kasu Mala embossed with Goddess Lakshmi coins, finished with a heavy pendant and matched with traditional bell jhumkas.",
      fabricPairing: "Pairs effortlessly with gold-zari pattu sarees for Muhurtham, Seemantham, and temple pujas.",
      craftsmanship: [
        "1-Gram pure gold micron dip electroplating",
        "Coin diameter: 18mm with crisp die-struck Lakshmi embossing",
        "Total length: 26 inches with 4-inch extension chain",
        "Includes matching 2.2-inch hanging Lakshmi jhumkas"
      ],
      inclusions: "Long Kasu Haram, 1 Pair of matching Jhumkas",
      youtubeShortId: "DyCLIeE7CHk"
    },
    {
      id: "bb-103",
      sku: "BUBA-PRL-103",
      title: "Royal 7-Line Seed Pearl Chandraharam with Emerald Medallion",
      category: "pearls",
      badge: "Signature Pearls",
      badgeType: "sale",
      retailPrice: 4500,
      salePrice: 2799,
      rentalPrice3Days: 999,
      rentalDeposit: 800,
      image: "assets/images/products/buba-pearl-chandraharam.jpg",
      shortDesc: "Seven graduated tiers of authentic Hyderabad seed pearls centered with an antique medallion pendant encrusted with Russian emeralds and cubic zirconia.",
      fabricPairing: "Complements pastel pink, off-white, and lilac sarees for wedding receptions and sangeet evenings.",
      craftsmanship: [
        "Grade-A cultured seed pearls with natural pearlescent luster",
        "Antique gold micro-plated side separators to keep lines tangle-free",
        "Silk thread knotting between each line",
        "Includes matching teardrop pearl stud earrings"
      ],
      inclusions: "7-Line Pearl Chandraharam, 1 Pair of Studs",
      youtubeShortId: "63pn_aHj-vc"
    },
    {
      id: "bb-104",
      sku: "BUBA-BNG-104",
      title: "Handcrafted Kundan Bridal Bangle Stacking Set (Set of 6)",
      category: "kundan-bangles",
      badge: "Bridal Wristwear",
      badgeType: "sale",
      retailPrice: 3200,
      salePrice: 1899,
      rentalPrice3Days: 699,
      rentalDeposit: 500,
      image: "assets/images/products/buba-kundan-bangles.jpg",
      shortDesc: "Complete bridal wrist set including 2 statement openable peacock kadas and 4 matching ruby-green Kundan side bangles.",
      fabricPairing: "Matches both traditional silk sarees and modern wedding lehengas.",
      craftsmanship: [
        "Concealed screw-lock closure on primary statement kadas",
        "Available in standard bangle sizes: 2.4, 2.6, and 2.8",
        "Smooth inner rim designed to prevent snagging on fine silk threads",
        "Delivered with velvet bangle organizer roll"
      ],
      inclusions: "2 Carved Kadas + 4 Kundan Bangles",
      youtubeShortId: "_r0QtuobQPc"
    },
    {
      id: "bb-105",
      sku: "BUBA-MGS-105",
      title: "Double-Chain Crystal Heart Mangalsutra (18K Gold Plated)",
      category: "anti-tarnish",
      badge: "Everyday Essential",
      badgeType: "sale",
      retailPrice: 1299,
      salePrice: 649,
      rentalPrice3Days: null,
      rentalDeposit: null,
      image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
      shortDesc: "Delicate double-row black beads chain anchored with a minimalist micro-pave crystal heart locket. Designed for daily office and home comfort.",
      fabricPairing: "Subtle and elegant with office linens, kurtas, and casual sarees.",
      craftsmanship: [
        "18K gold micron plating with anti-tarnish protective lacquer",
        "Nickel-free and hypoallergenic for sensitive skin",
        "Length: 18 inches with a 2-inch extension chain",
        "Sturdy lobster clasp"
      ],
      inclusions: "Mangalsutra chain with crystal locket",
      youtubeShortId: "za0JUk_hVa8"
    },
    {
      id: "bb-106",
      sku: "BUBA-CZ-106",
      title: "Prong-Set 5A American Diamond (CZ) Choker & Drops",
      category: "one-gram-gold",
      badge: "Evening Glamour",
      badgeType: "sale",
      retailPrice: 6500,
      salePrice: 3499,
      rentalPrice3Days: 1499,
      rentalDeposit: 1000,
      image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop&q=80",
      shortDesc: "Brilliant diamond-cut American Diamond collar choker with teardrop emerald dangles and matching chandelier earrings.",
      fabricPairing: "Magnificent for cocktail evenings, reception gowns, and organza sarees.",
      craftsmanship: [
        "Rhodium and platinum-touch micro plating",
        "5A Grade diamond-replica stones with maximum light refraction",
        "Articulated flexible links for seamless collar contouring",
        "Includes matching statement drop earrings"
      ],
      inclusions: "Choker, 1 Pair of Chandelier Earrings",
      youtubeShortId: "F8fN-HThM58"
    },
    {
      id: "bb-107",
      sku: "BUBA-KRN-107",
      title: "Korean Anti-Tarnish Waterproof Stackable Rings & Snake Chain",
      category: "anti-tarnish",
      badge: "Waterproof / Daily",
      badgeType: "sale",
      retailPrice: 1499,
      salePrice: 799,
      rentalPrice3Days: null,
      rentalDeposit: null,
      image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=800&auto=format&fit=crop&q=80",
      shortDesc: "Titanium stainless steel rings and a flat herringbone snake chain with 18K vacuum PVD gold coating. Safe for showers, gym, and swimming.",
      fabricPairing: "Modern daily styling for Western outfits, college, and work wear.",
      craftsmanship: [
        "316L Medical-grade surgical steel base",
        "Real 18K PVD vacuum deposition (zero color fading)",
        "Waterproof, perfume-safe, and sweat-proof",
        "Rings are slightly adjustable to fit sizes 5 through 9"
      ],
      inclusions: "3 Stackable Rings + 1 Herringbone Chain",
      youtubeShortId: "7D_cg63Pmic"
    },
    {
      id: "bb-108",
      sku: "BUBA-VDM-108",
      title: "Gaja-Lakshmi Carved Temple Vaddanam (Waist Belt)",
      category: "bridal-rental",
      badge: "Bridal Rental",
      badgeType: "rental",
      retailPrice: 18000,
      salePrice: 15500,
      rentalPrice3Days: 1999,
      rentalDeposit: 1500,
      image: "assets/images/products/buba-temple-vaddanam.jpg",
      shortDesc: "Authentic Coastal Andhra Gaja-Lakshmi carved waist belt with dancing peacock side panels and hanging pearl bunches.",
      fabricPairing: "The defining crown of any traditional Telugu wedding silk saree.",
      craftsmanship: [
        "Lightweight hollow-core casting for comfortable 6-8 hour wedding wear",
        "Adjustable back link chain fits waist sizes from 26 to 42 inches",
        "Matte antique gold finish with ruby-red cabochons",
        "Concealed center clasp"
      ],
      inclusions: "Temple Vaddanam in velvet rental case",
      youtubeShortId: "DyCLIeE7CHk"
    },
    {
      id: "bb-109",
      sku: "BUBA-JDA-109",
      title: "Traditional South Indian Bridal Jada Billalu (9-Piece Set)",
      category: "bridal-rental",
      badge: "Bridal Rental",
      badgeType: "rental",
      retailPrice: 8500,
      salePrice: 6999,
      rentalPrice3Days: 999,
      rentalDeposit: 800,
      image: "assets/images/products/buba-jada-billalu.jpg",
      shortDesc: "Nine graduated floral and Lakshmi discs for hair braiding, along with Surya-Chandra clips and the upper Rakodi brooch.",
      fabricPairing: "Designed for jasmine flower braided hair on Pellikuthuru and Muhurtham days.",
      craftsmanship: [
        "Graduated diameters from 1.8 inches down to 0.8 inches",
        "Integrated rear hairpin loops for quick hairstylist pinning",
        "Ultrasonic cleaned and sanitized between every rental",
        "Numbered velvet pouch for orderly hairstyling"
      ],
      inclusions: "9 Graduated Braid Billalu + Surya-Chandra Clips",
      youtubeShortId: "DyCLIeE7CHk"
    },
    {
      id: "bb-110",
      sku: "BUBA-CLT-110",
      title: "Royal Emerald Velvet Handcrafted Kundan Bridal Clutch",
      category: "kundan-bangles",
      badge: "Accessories",
      badgeType: "sale",
      retailPrice: 2499,
      salePrice: 1299,
      rentalPrice3Days: 499,
      rentalDeposit: 500,
      image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&auto=format&fit=crop&q=80",
      shortDesc: "Rich bottle-green velvet clutch hand-embroidered with uncut Kundan stone work and fitted with an optional metallic gold sling chain.",
      fabricPairing: "Complements bridal lehengas, silk sarees, and evening gowns.",
      craftsmanship: [
        "Sturdy metal frame with crystal push-knob clasp",
        "Satin interior lining with slip pocket",
        "Detachable 42-inch brass sling chain",
        "Roomy interior fits all modern smartphones and bridal touch-up essentials"
      ],
      inclusions: "Velvet Clutch + Detachable Sling Chain",
      youtubeShortId: "_r0QtuobQPc"
    },
    {
      id: "bb-111",
      sku: "BUBA-TMP-111",
      title: "Heritage Gutapusalu Choker with Natural Cluster Pearls",
      category: "one-gram-gold",
      badge: "Heritage Classic",
      badgeType: "sale",
      retailPrice: 5200,
      salePrice: 3299,
      rentalPrice3Days: 1199,
      rentalDeposit: 900,
      image: "assets/images/products/buba-gutapusalu-choker.jpg",
      shortDesc: "Classic Telugu coastal heritage design featuring lush bunches of cluster seed pearls fringed with pota rubies and emeralds along an articulated collar.",
      fabricPairing: "Magnificent with yellow, mango, and mustard wedding silks.",
      craftsmanship: [
        "Micro 1-gram gold electroplated antique polish",
        "Dense hand-strung pearl bunches (Gutta Pusalu tradition)",
        "Adjustable hand-woven golden back cord",
        "Includes matching drop jhumkas"
      ],
      inclusions: "Gutapusalu Choker, 1 Pair of Jhumkas",
      youtubeShortId: "DyCLIeE7CHk"
    },
    {
      id: "bb-112",
      sku: "BUBA-CHOK-112",
      title: "Polki Jadau Collar Choker with Pastel Mint Enamel",
      category: "bridal-rental",
      badge: "Bridal Rental",
      badgeType: "rental",
      retailPrice: 22000,
      salePrice: 17500,
      rentalPrice3Days: 2499,
      rentalDeposit: 1500,
      image: "assets/images/products/buba-polki-choker.jpg",
      shortDesc: "Contemporary Polki open-setting choker with pastel mint meenakari enamel on the reverse and natural green tourmaline bead drops.",
      fabricPairing: "Loved by contemporary brides for Mehendi ceremonies and pastel reception lehengas.",
      craftsmanship: [
        "Hand-painted Meenakari enamel art on the reverse side",
        "Foil-backed Polki uncut stones with warm champagne glow",
        "Soft velvet neck backing for all-day comfort",
        "Includes matching oversized stud earrings"
      ],
      inclusions: "Polki Collar Choker, 1 Pair of Studs",
      youtubeShortId: "DyCLIeE7CHk"
    }
  ],

  // Frequently Asked Questions (Real bridal queries in Vizag)
  faqs: [
    {
      q: "How does the 3-day bridal jewellery rental work?",
      a: "Our rental window is structured around real Telugu wedding schedules: Day 1 is your pickup and trial day (usually 1-2 days before the wedding), Day 2 is your main wedding/reception ceremony, and Day 3 is your return day. If your wedding is outstation (e.g. Hyderabad, Tirupati, or Bangalore), we offer flexible 5-day and 7-day extended rental slots."
    },
    {
      q: "Can I bring my wedding saree to try the jewellery at your PM Palem store?",
      a: "Yes, absolutely! We strongly recommend bringing your saree or blouse fabric to our Walkers Park Road boutique. We have private trial mirrors where you can test necklines, drape the haram with your pallu, and check how the antique gold luster matches your saree's zari work before booking."
    },
    {
      q: "What is the caution deposit and how quickly is it refunded?",
      a: "A nominal refundable caution deposit is collected upon collection of the jewellery. When you return the set on Day 3 in its original condition, your security deposit is refunded instantly via UPI (Google Pay / PhonePe) or cash right at our billing desk."
    },
    {
      q: "Are the bridal rental sets sanitized before each wedding?",
      a: "Every rental set undergoes a thorough ultrasonic bath, non-abrasive disinfection, and soft polishing before it is handed over to the next bride. It is delivered in a pristine, velvet-padded presentation box."
    },
    {
      q: "Does 1-gram gold jewellery fade or look different from 22K gold?",
      a: "Our 1-gram gold pieces use pure 24K gold micron dip electroplating over high-grade brass. The color tone, texture, and weight match real gold so closely that it is indistinguishable in high-resolution wedding photography. With standard care (avoiding direct perfumes and storing dry), the finish lasts for years."
    },
    {
      q: "Do you ship jewellery across Andhra Pradesh and Pan-India?",
      a: "Yes! While bridal rental trials are centered around our PM Palem, Visakhapatnam boutique, all our retail 1-gram gold harams, pearl chandraharams, Kundan bangles, and Korean anti-tarnish items ship securely with express door delivery across Andhra Pradesh, Telangana, and pan-India."
    }
  ],

  // Authentic Bride Feedback from Visakhapatnam
  stories: [
    {
      bride: "Sneha Reddy",
      neighborhood: "Madhurawada, Visakhapatnam",
      occasion: "Wedding Muhurtham at Sai Priya Resort",
      quote: "Renting the Maharani 8-piece set was the best financial decision we made for our wedding. Everyone in our family thought it was pure gold from our ancestral locker! The in-store trial in PM Palem was quiet, private, and gave us total confidence.",
      sku: "BUBA-BRL-101"
    },
    {
      bride: "Prasanna & Divya",
      neighborhood: "Midhilapuri VUDA Colony, PM Palem",
      occasion: "Half-Saree (Langa Voni) Ceremony",
      quote: "We walked down Walkers Park Road after seeing their route video. The 1-gram gold Kasu Mala and Gutapusalu matched Divya's pink Kanjeevaram pattu perfectly. The owner is warm, patient, and helped us try three different haram lengths.",
      sku: "BUBA-HRM-102"
    },
    {
      bride: "Sireesha V.",
      neighborhood: "Carshed Junction, Vizag",
      occasion: "Sister's Reception",
      quote: "I sent a photo of my reception saree on WhatsApp using their matchmaker. Within 15 minutes, they suggested the 7-line pearl Chandraharam. It looked so regal under banquet hall lighting!",
      sku: "BUBA-PRL-103"
    }
  ]
};

// Global Attach for browser & CommonJS export for Node/testing
if (typeof window !== 'undefined') {
  window.BUBA_DATA = BUBA_DATA;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = BUBA_DATA;
}
