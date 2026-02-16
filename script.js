// Use digits only for WhatsApp (country code + number, no +, spaces, or symbols).
const WHATSAPP_NUMBER = "917034738973";
const CALL_NUMBER = "+917034738973";

// Central cake catalog used by the cakes grid, order form dropdown, and price logic.
const cakesData = [
  {
    id: "black-forest",
    name: "Black Forest",
    pricePerKg: 600,
    description: "Classic chocolate sponge layered with whipped cream and cherries.",
    occasions: ["birthday", "anniversary", "engagement"],
    image: "https://images.unsplash.com/photo-1517427294546-5aa121f68e8a?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "white-forest",
    name: "White Forest",
    pricePerKg: 600,
    description: "Soft vanilla sponge with white chocolate shavings and light cream.",
    occasions: ["birthday", "engagement"],
    image: "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chocolate",
    name: "Chocolate",
    pricePerKg: 800,
    description: "Moist chocolate sponge finished with smooth chocolate cream.",
    occasions: ["birthday", "graduation"],
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "chocolate-truffle",
    name: "Chocolate Truffle",
    pricePerKg: 850,
    description: "Rich dark chocolate truffle layers with silky ganache finish.",
    occasions: ["birthday", "anniversary"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "butter-scotch",
    name: "Butterscotch",
    pricePerKg: 850,
    description: "Classic butterscotch sponge with caramel crunch and cream.",
    occasions: ["birthday", "graduation"],
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "vancho",
    name: "Vancho",
    pricePerKg: 850,
    description: "Vanilla and chocolate layers blended in a smooth cream finish.",
    occasions: ["birthday", "engagement"],
    image: "https://images.unsplash.com/photo-1464306076886-da185f6a9d05?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "nutty-bubble",
    name: "Nutty Bubble",
    pricePerKg: 900,
    description: "Nut-filled sponge with creamy layers and crunchy nut topping.",
    occasions: ["wedding", "anniversary"],
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "strawberry",
    name: "Strawberry",
    pricePerKg: 750,
    description: "Fruit-forward sponge layered with strawberry cream and glaze.",
    occasions: ["birthday", "baby shower"],
    image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "pistachio",
    name: "Pistachio",
    pricePerKg: 750,
    description: "Pistachio-flavored sponge with creamy nutty frosting.",
    occasions: ["wedding", "engagement"],
    image: "https://images.unsplash.com/photo-1562777717-dc6984f65a63?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "blueberry",
    name: "Blueberry",
    pricePerKg: 850,
    description: "Blueberry compote layered with light vanilla cream sponge.",
    occasions: ["anniversary", "baby shower"],
    image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "red-velvet",
    name: "Red Velvet",
    pricePerKg: 850,
    description: "Classic red velvet sponge with smooth cream cheese frosting.",
    occasions: ["anniversary", "engagement"],
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "dream-cake",
    name: "Dream Cake",
    pricePerKg: 800,
    description: "Soft sponge and cream layers finished with chocolate drizzle.",
    occasions: ["birthday", "anniversary"],
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: "vanilla",
    name: "Vanilla",
    pricePerKg: 750,
    description: "Classic vanilla sponge with fresh cream and light sweetness.",
    occasions: ["birthday", "baby shower"],
    image: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?auto=format&fit=crop&w=900&q=80"
  }
];

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex='-1'])";
const RECENTLY_VIEWED_KEY = "sweetpans_recently_viewed";
const MAX_RECENTLY_VIEWED = 6;
const MAX_COMPARE_CAKES = 3;
const LANG_STORAGE_KEY = "sweetpans_language";
const DELIVERY_CUTOFF_HOUR = 16;
const DELIVERY_SLOT_BUFFER_HOURS = 2;
const DELIVERY_SLOT_DEFINITIONS = [
  { value: "09:00-11:00", startHour: 9, labelKey: "slot.morning" },
  { value: "11:30-13:30", startHour: 11.5, labelKey: "slot.noon" },
  { value: "14:00-16:00", startHour: 14, labelKey: "slot.afternoon" },
  { value: "17:00-19:00", startHour: 17, labelKey: "slot.evening" },
  { value: "19:30-21:00", startHour: 19.5, labelKey: "slot.night" }
];

const OCCASION_TRANSLATION_KEYS = {
  birthday: "option.birthday",
  anniversary: "option.anniversary",
  wedding: "option.wedding",
  engagement: "option.engagement",
  "baby shower": "option.babyShower",
  graduation: "option.graduation",
  other: "option.other"
};

const TRANSLATIONS = {
  en: {
    "nav.home": "Home",
    "nav.cakes": "Cakes",
    "nav.order": "Order",
    "nav.about": "About",
    "nav.contact": "Contact",
    "lang.en": "EN",
    "lang.ml": "മ",
    "lang.switch": "Language switch",
    "lang.changed": "Language switched.",
    "home.eyebrow": "Premium Homemade Bakery",
    "home.title": "Beautiful cakes that feel as special as your celebration.",
    "home.desc": "From elegant birthdays to dreamy anniversaries, every Sweet Pan's cake is baked fresh, styled with care, and delivered on time.",
    "home.badgeFresh": "Freshly Baked",
    "home.badgeCustom": "Custom Messages",
    "home.badgeDelivery": "On-Time Delivery",
    "home.bestSellers": "Best Sellers",
    "home.howWorks": "How It Works",
    "home.loved": "Loved by Customers",
    "home.step1Title": "Choose Cake",
    "home.step1Desc": "Browse flavors and pick the design that matches your vibe.",
    "home.step2Title": "Customize",
    "home.step2Desc": "Select weight, tiers, occasion, and your cake message.",
    "home.step3Title": "Order on WhatsApp",
    "home.step3Desc": "Send your details instantly and confirm your delivery slot.",
    "cakes.eyebrow": "Sweet Pan's Collection",
    "cakes.title": "Choose your cake, then customize your order.",
    "cakes.desc": "Search by cake name or browse by occasion suggestions before ordering.",
    "cakes.searchLabel": "Search by cake name",
    "cakes.searchPlaceholder": "Try: Black Forest, Chocolate, Vanilla...",
    "cakes.occasionLabel": "Occasion suggestion",
    "cakes.compareTitle": "Compare Cakes",
    "cakes.compareDesc": "Select up to 3 cakes to compare flavor, pricing, and fit.",
    "cakes.compareEmpty": "No cakes selected yet. Tap \"Compare\" on any cake card.",
    "cakes.recentTitle": "Recently Viewed",
    "cakes.recentDesc": "Quickly revisit cakes you opened recently.",
    "cakes.recentEmpty": "Your recently viewed cakes will appear here.",
    "cakes.noResults": "No cakes found. Try a different search or filter.",
    "cakes.modalTitle": "Place Your Order",
    "cakes.modalDesc": "Complete the details below and continue on WhatsApp.",
    "order.eyebrow": "Place Your Order",
    "order.title": "Customize every detail, then confirm on WhatsApp.",
    "order.desc": "Live price updates include weight, quantity, and optional extra tier charges.",
    "order.compactTitle": "Compact & Fast Ordering",
    "order.compactDesc": "Fill only what matters, review in the live snapshot, and send instantly on WhatsApp.",
    "order.progressAria": "Order form progress",
    "order.sectionContact": "Contact Details",
    "order.sectionCake": "Cake Details",
    "order.sectionDelivery": "Delivery Details",
    "order.sectionNotes": "Message & Notes",
    "order.snapshotTitle": "Order Snapshot",
    "order.snapshotDesc": "Live preview of your selected options.",
    "order.summaryCake": "Cake",
    "order.summaryPrice": "Price",
    "order.summaryWeight": "Weight",
    "order.summaryQuantity": "Quantity",
    "order.summaryTiers": "Tiers",
    "order.summaryOccasion": "Occasion",
    "order.summaryDate": "Date",
    "order.summarySlot": "Slot",
    "order.summaryTotal": "Estimated Total",
    "about.eyebrow": "Our Story",
    "about.title": "Homemade cakes crafted with heart, hygiene, and premium ingredients.",
    "contact.eyebrow": "Get in Touch",
    "contact.title": "We are one tap away for your next celebration.",
    "contact.desc": "Reach Sweet Pan's instantly on WhatsApp or call for quick order support.",
    "btn.viewCakes": "View Cakes",
    "btn.orderWhatsapp": "Order on WhatsApp",
    "btn.callOrder": "Call for Order",
    "btn.compare": "Compare",
    "btn.addedCompare": "Added to Compare",
    "btn.clear": "Clear",
    "btn.orderNow": "Order Now",
    "btn.orderThis": "Order This Cake",
    "btn.orderAgain": "Order Again",
    "btn.compareCta": "Compare ({count}/3)",
    "btn.call": "Call",
    "btn.whatsapp": "WhatsApp",
    "btn.callNow": "Call Now",
    "btn.chatWhatsapp": "Chat on WhatsApp",
    "btn.oneTapCall": "One-Tap Call",
    "btn.openMaps": "Open in Google Maps",
    "btn.resetForm": "Reset Form",
    "btn.needWhatsapp": "WhatsApp Support",
    "form.customerName": "Customer name *",
    "form.phone": "Phone number *",
    "form.selectedCake": "Selected cake *",
    "form.selectCake": "Select cake *",
    "form.weight": "Weight *",
    "form.quantity": "Quantity *",
    "form.tiers": "Tiers",
    "form.occasion": "Occasion *",
    "form.deliveryDate": "Delivery date *",
    "form.deliverySlot": "Delivery slot *",
    "form.messageOnCake": "Message on cake",
    "form.address": "Address *",
    "form.extraDetails": "Extra details",
    "form.totalPrice": "Total Price",
    "form.pricePerKg": "Price per KG:",
    "form.selectCakeFirst": "Select cake first",
    "form.chooseCake": "Choose your cake",
    "form.selectOccasion": "Select occasion",
    "form.selectSlot": "Select a delivery slot",
    "form.slotUnavailable": "No slots available for selected date",
    "form.slotHint": "Same-day slots depend on time and availability.",
    "form.requiredHint": "Please fill all required details first.",
    "option.allOccasions": "All occasions",
    "option.birthday": "Birthday",
    "option.anniversary": "Anniversary",
    "option.wedding": "Wedding",
    "option.engagement": "Engagement",
    "option.babyShower": "Baby Shower",
    "option.graduation": "Graduation",
    "option.other": "Other",
    "tier.1": "1 tier (+₹0)",
    "tier.2": "2 tier (+₹200)",
    "tier.3": "3 tier (+₹400)",
    "slot.morning": "09:00 AM - 11:00 AM",
    "slot.noon": "11:30 AM - 01:30 PM",
    "slot.afternoon": "02:00 PM - 04:00 PM",
    "slot.evening": "05:00 PM - 07:00 PM",
    "slot.night": "07:30 PM - 09:00 PM",
    "label.bestFor": "Best for",
    "compare.selectedCount": "{count}/3 selected",
    "toast.addedCompare": "Added to compare.",
    "toast.removedCompare": "Removed from compare.",
    "toast.maxCompare": "You can compare up to {count} cakes.",
    "toast.openingWhatsApp": "Opening WhatsApp with your order…",
    "toast.updateNumber": "Update WHATSAPP_NUMBER in script.js with digits only.",
    "validation.selectCake": "Please select a cake before placing your order.",
    "validation.name": "Please enter your name.",
    "validation.phoneRequired": "Please enter your phone number.",
    "validation.phoneInvalid": "Please enter a valid phone number.",
    "validation.weight": "Please select a cake weight.",
    "validation.quantity": "Quantity should be at least 1.",
    "validation.occasion": "Please choose an occasion.",
    "validation.deliveryDate": "Please select a delivery date.",
    "validation.deliveryDatePast": "Delivery date cannot be in the past.",
    "validation.deliveryDateLead": "Earliest delivery date is {date}.",
    "validation.deliverySlot": "Please choose a delivery slot.",
    "validation.address": "Please enter your delivery address."
  },
  ml: {
    "nav.home": "ഹോം",
    "nav.cakes": "കേക്കുകള്‍",
    "nav.order": "ഓർഡർ",
    "nav.about": "ഞങ്ങളെക്കുറിച്ച്",
    "nav.contact": "ബന്ധപ്പെടുക",
    "lang.en": "EN",
    "lang.ml": "മ",
    "lang.switch": "ഭാഷ തിരഞ്ഞെടുക്കൽ",
    "lang.changed": "ഭാഷ മാറ്റി.",
    "home.eyebrow": "പ്രീമിയം ഹോംമെയ്ഡ് ബേക്കറി",
    "home.title": "നിങ്ങളുടെ ആഘോഷത്തിന് പ്രത്യേകത നല്‍കുന്ന മനോഹര കേക്കുകള്‍.",
    "home.desc": "ജന്മദിനം മുതല്‍ ആനിവേഴ്സറി വരെ, ഓരോ Sweet Pan's കേക്കും പുതിയതായി തയ്യാറാക്കി സ്റ്റൈലായി സമയത്ത് എത്തിക്കുന്നു.",
    "home.badgeFresh": "പുതുതായി ബേക്ക് ചെയ്തത്",
    "home.badgeCustom": "കസ്റ്റം സന്ദേശങ്ങള്‍",
    "home.badgeDelivery": "സമയബന്ധിത ഡെലിവറി",
    "home.bestSellers": "മികച്ച വില്‍പന",
    "home.howWorks": "എങ്ങനെ ഓർഡർ ചെയ്യാം",
    "home.loved": "കസ്റ്റമർമാർ ഇഷ്ടപ്പെട്ടത്",
    "home.step1Title": "കേക്ക് തിരഞ്ഞെടുക്കുക",
    "home.step1Desc": "നിങ്ങള്‍ക്ക് ഇഷ്ടമായ ഫ്ലേവറും ഡിസൈനും തിരഞ്ഞെടുക്കൂ.",
    "home.step2Title": "കസ്റ്റമൈസ് ചെയ്യുക",
    "home.step2Desc": "ഭാരം, ടിയർ, അവസരം, കേക്ക് സന്ദേശം എന്നിവ സജ്ജമാക്കുക.",
    "home.step3Title": "WhatsApp വഴി ഓർഡർ ചെയ്യുക",
    "home.step3Desc": "വിശദാംശങ്ങൾ അയച്ച് ഡെലിവറി സ്ലോട്ട് ഉറപ്പാക്കൂ.",
    "cakes.eyebrow": "Sweet Pan's കളക്ഷൻ",
    "cakes.title": "കേക്ക് തിരഞ്ഞെടുക്കൂ, പിന്നെ ഓർഡർ കസ്റ്റമൈസ് ചെയ്യൂ.",
    "cakes.desc": "കേക്കിന്റെ പേര് തിരയാം അല്ലെങ്കിൽ അവസരം അടിസ്ഥാനമാക്കി ബ്രൗസ് ചെയ്യാം.",
    "cakes.searchLabel": "കേക്കിന്റെ പേര് തിരയുക",
    "cakes.searchPlaceholder": "ഉദാ: Black Forest, Chocolate, Vanilla...",
    "cakes.occasionLabel": "അവസരം",
    "cakes.compareTitle": "കേക്കുകൾ താരതമ്യം ചെയ്യുക",
    "cakes.compareDesc": "പരമാവധി 3 കേക്കുകൾ താരതമ്യം ചെയ്യാം.",
    "cakes.compareEmpty": "ഇനിയും കേക്ക് തെരഞ്ഞെടുത്തിട്ടില്ല. കാർഡിൽ \"Compare\" അമർത്തൂ.",
    "cakes.recentTitle": "ഇടയ്ക്കെ കണ്ടവ",
    "cakes.recentDesc": "ഇപ്പോൾ തുറന്ന കേക്കുകൾ വീണ്ടും കാണാം.",
    "cakes.recentEmpty": "ഇവിടെ നിങ്ങൾ കണ്ട കേക്കുകൾ കാണിക്കും.",
    "cakes.noResults": "കേക്ക് കണ്ടെത്താനായില്ല. മറ്റൊരു തിരച്ചിൽ ശ്രമിക്കൂ.",
    "cakes.modalTitle": "ഓർഡർ നൽകുക",
    "cakes.modalDesc": "വിവരങ്ങൾ പൂരിപ്പിച്ച് WhatsApp-ൽ തുടരുക.",
    "order.eyebrow": "ഓർഡർ ചെയ്യുക",
    "order.title": "എല്ലാം കസ്റ്റമൈസ് ചെയ്ത് WhatsApp വഴി സ്ഥിരീകരിക്കുക.",
    "order.desc": "ഭാരം, എണ്ണം, ടിയർ എന്നിവയുടെ അടിസ്ഥാനത്തിൽ വില തൽക്ഷണം അപ്ഡേറ്റ് ചെയ്യും.",
    "order.compactTitle": "വേഗത്തിൽ ഓർഡർ ചെയ്യാം",
    "order.compactDesc": "ആവശ്യമായ വിവരങ്ങൾ മാത്രം പൂരിപ്പിച്ച് ലൈവ് സ്നാപ്ഷോട്ടിൽ പരിശോധിച്ച് ഉടൻ WhatsApp-ൽ അയക്കൂ.",
    "order.progressAria": "ഓർഡർ ഫോമിന്റെ പുരോഗതി",
    "order.sectionContact": "ബന്ധപ്പെടേണ്ട വിവരങ്ങൾ",
    "order.sectionCake": "കേക്ക് വിവരങ്ങൾ",
    "order.sectionDelivery": "ഡെലിവറി വിവരങ്ങൾ",
    "order.sectionNotes": "സന്ദേശം & കുറിപ്പുകൾ",
    "order.snapshotTitle": "ഓർഡർ സ്നാപ്ഷോട്ട്",
    "order.snapshotDesc": "നിങ്ങൾ തെരഞ്ഞെടുത്ത വിവരങ്ങളുടെ ലൈവ് പ്രിവ്യൂ.",
    "order.summaryCake": "കേക്ക്",
    "order.summaryPrice": "വില",
    "order.summaryWeight": "ഭാരം",
    "order.summaryQuantity": "എണ്ണം",
    "order.summaryTiers": "ടിയർ",
    "order.summaryOccasion": "അവസരം",
    "order.summaryDate": "തീയതി",
    "order.summarySlot": "സ്ലോട്ട്",
    "order.summaryTotal": "അനുമാനിച്ച ആകെ വില",
    "about.eyebrow": "ഞങ്ങളുടെ കഥ",
    "about.title": "സ്നേഹത്തോടെ, ശുചിത്വത്തോടെ, മികച്ച ചേരുവകളോടെ തയ്യാറാക്കുന്ന കേക്കുകൾ.",
    "contact.eyebrow": "ബന്ധപ്പെടാം",
    "contact.title": "നിങ്ങളുടെ ആഘോഷത്തിന് ഞങ്ങൾ ഒരു ടാപ്പ് അകലം മാത്രം.",
    "contact.desc": "ഓർഡറിന് WhatsApp അല്ലെങ്കിൽ Call വഴി ഉടൻ ബന്ധപ്പെടാം.",
    "btn.viewCakes": "കേക്കുകൾ കാണുക",
    "btn.orderWhatsapp": "WhatsApp വഴി ഓർഡർ",
    "btn.callOrder": "Call ചെയ്ത് ഓർഡർ",
    "btn.compare": "താരതമ്യം",
    "btn.addedCompare": "താരതമ്യത്തിൽ ചേർത്തു",
    "btn.clear": "Clear",
    "btn.orderNow": "ഇപ്പോൾ ഓർഡർ",
    "btn.orderThis": "ഈ കേക്ക് ഓർഡർ ചെയ്യുക",
    "btn.orderAgain": "വീണ്ടും ഓർഡർ",
    "btn.compareCta": "Compare ({count}/3)",
    "btn.call": "Call",
    "btn.whatsapp": "WhatsApp",
    "btn.callNow": "ഇപ്പോൾ Call",
    "btn.chatWhatsapp": "WhatsApp ചാറ്റ്",
    "btn.oneTapCall": "ഒരു ടാപ്പ് Call",
    "btn.openMaps": "Google Maps തുറക്കുക",
    "btn.resetForm": "ഫോം റീസെറ്റ്",
    "btn.needWhatsapp": "WhatsApp സപ്പോർട്ട്",
    "form.customerName": "പേര് *",
    "form.phone": "ഫോൺ നമ്പർ *",
    "form.selectedCake": "തിരഞ്ഞെടുത്ത കേക്ക് *",
    "form.selectCake": "കേക്ക് തിരഞ്ഞെടുക്കുക *",
    "form.weight": "ഭാരം *",
    "form.quantity": "എണ്ണം *",
    "form.tiers": "ടിയർ",
    "form.occasion": "അവസരം *",
    "form.deliveryDate": "ഡെലിവറി തീയതി *",
    "form.deliverySlot": "ഡെലിവറി സ്ലോട്ട് *",
    "form.messageOnCake": "കേക്ക് സന്ദേശം",
    "form.address": "വിലാസം *",
    "form.extraDetails": "അധിക വിവരങ്ങൾ",
    "form.totalPrice": "ആകെ വില",
    "form.pricePerKg": "ഒരു KG വില:",
    "form.selectCakeFirst": "ആദ്യം കേക്ക് തിരഞ്ഞെടുക്കുക",
    "form.chooseCake": "നിങ്ങളുടെ കേക്ക് തിരഞ്ഞെടുക്കൂ",
    "form.selectOccasion": "അവസരം തിരഞ്ഞെടുക്കുക",
    "form.selectSlot": "ഡെലിവറി സ്ലോട്ട് തിരഞ്ഞെടുക്കുക",
    "form.slotUnavailable": "തിരഞ്ഞെടുത്ത തീയതിയിൽ സ്ലോട്ട് ലഭ്യമല്ല",
    "form.slotHint": "Same-day സ്ലോട്ട് സമയംയും ലഭ്യതയും ആശ്രയിച്ചിരിക്കും.",
    "form.requiredHint": "ദയവായി ആവശ്യമായ വിവരങ്ങൾ പൂരിപ്പിക്കുക.",
    "option.allOccasions": "എല്ലാ അവസരങ്ങളും",
    "option.birthday": "ജന്മദിനം",
    "option.anniversary": "ആനിവേഴ്സറി",
    "option.wedding": "വിവാഹം",
    "option.engagement": "നിശ്ചയം",
    "option.babyShower": "ബേബി ഷവർ",
    "option.graduation": "ഗ്രാജുവേഷൻ",
    "option.other": "മറ്റുള്ളവ",
    "tier.1": "1 ടിയർ (+₹0)",
    "tier.2": "2 ടിയർ (+₹200)",
    "tier.3": "3 ടിയർ (+₹400)",
    "slot.morning": "09:00 AM - 11:00 AM",
    "slot.noon": "11:30 AM - 01:30 PM",
    "slot.afternoon": "02:00 PM - 04:00 PM",
    "slot.evening": "05:00 PM - 07:00 PM",
    "slot.night": "07:30 PM - 09:00 PM",
    "label.bestFor": "മികച്ചത്",
    "compare.selectedCount": "{count}/3 തിരഞ്ഞെടുക്കപ്പെട്ടു",
    "toast.addedCompare": "താരതമ്യത്തിൽ ചേർത്തു.",
    "toast.removedCompare": "താരതമ്യത്തിൽ നിന്ന് നീക്കി.",
    "toast.maxCompare": "പരമാവധി {count} കേക്ക് മാത്രം താരതമ്യം ചെയ്യാം.",
    "toast.openingWhatsApp": "WhatsApp ഓർഡർ തുറക്കുന്നു…",
    "toast.updateNumber": "script.js-ൽ WHATSAPP_NUMBER ശരിയാക്കുക.",
    "validation.selectCake": "ഓർഡറിന് മുമ്പ് ഒരു കേക്ക് തിരഞ്ഞെടുക്കുക.",
    "validation.name": "ദയവായി പേര് നൽകുക.",
    "validation.phoneRequired": "ഫോൺ നമ്പർ നൽകുക.",
    "validation.phoneInvalid": "സാധുവായ ഫോൺ നമ്പർ നൽകുക.",
    "validation.weight": "കേക്കിന്റെ ഭാരം തിരഞ്ഞെടുക്കുക.",
    "validation.quantity": "എണ്ണം കുറഞ്ഞത് 1 ആയിരിക്കണം.",
    "validation.occasion": "ഒരു അവസരം തിരഞ്ഞെടുക്കുക.",
    "validation.deliveryDate": "ഡെലിവറി തീയതി തിരഞ്ഞെടുക്കുക.",
    "validation.deliveryDatePast": "കഴിഞ്ഞ തീയതി തിരഞ്ഞെടുക്കാനാവില്ല.",
    "validation.deliveryDateLead": "ഏറ്റവും അടുത്ത ഡെലിവറി തീയതി {date} ആണ്.",
    "validation.deliverySlot": "ഒരു ഡെലിവറി സ്ലോട്ട് തിരഞ്ഞെടുക്കുക.",
    "validation.address": "ഡെലിവറി വിലാസം നൽകുക."
  }
};

let toastTimer = null;
let activeModal = null;
let previousFocus = null;
let currentLanguage = "en";

document.addEventListener("DOMContentLoaded", () => {
  setupLanguageToggle();
  setupContactLinks();
  setupNavigation();
  setCurrentYear();
  setupHomeHeroRotator();
  setupOrderForms();
  setupCakesPage();
});

function setupContactLinks() {
  const defaultMessage = "Hi Sweet Pan's. I'd like to place a premium cake order.";

  document.querySelectorAll("[data-call-link]").forEach((link) => {
    link.setAttribute("href", `tel:${CALL_NUMBER}`);
  });

  document.querySelectorAll("[data-wa-link]").forEach((link) => {
    const customMessage = link.dataset.waMessage || defaultMessage;
    const waURL = buildWhatsAppUrl(customMessage);

    if (waURL) {
      link.setAttribute("href", waURL);
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener");
      return;
    }

    link.setAttribute("href", "#");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(t("toast.updateNumber"));
    });
  });
}

function setupNavigation() {
  const navToggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");

  if (!navToggle || !nav) {
    return;
  }

  const setNavState = (isOpen) => {
    nav.classList.toggle("open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("nav-open", isOpen);
  };

  const closeNav = () => {
    setNavState(false);
  };

  navToggle.addEventListener("click", () => {
    setNavState(!nav.classList.contains("open"));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeNav);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeNav();
    }
  });

  document.addEventListener("click", (event) => {
    if (window.innerWidth > 900) {
      return;
    }

    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      closeNav();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeNav();
    }
  });
}

function setCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = String(new Date().getFullYear());
  });
}

function setupHomeHeroRotator() {
  const heroImage = document.querySelector("[data-hero-rotating]");
  if (!heroImage) {
    return;
  }

  const prevButton = document.querySelector("[data-hero-prev]");
  const nextButton = document.querySelector("[data-hero-next]");
  const dotsContainer = document.querySelector("[data-hero-dots]");

  const slides = cakesData.slice(0, 8).map((cake) => ({
    name: cake.name,
    src: toHeroImageSize(cake.image)
  }));

  if (slides.length < 2) {
    return;
  }

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const intervalMs = prefersReducedMotion ? 5000 : 2600;
  const fadeDurationMs = prefersReducedMotion ? 0 : 220;

  let index = 0;
  let intervalId = null;
  let fadeTimeoutId = null;

  const preloadSlide = (slide) => {
    const preload = new Image();
    preload.src = slide.src;
  };

  const updateActiveDot = () => {
    if (!dotsContainer) {
      return;
    }

    dotsContainer.querySelectorAll("[data-hero-dot]").forEach((dot, dotIndex) => {
      const isActive = dotIndex === index;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", String(isActive));
    });
  };

  const renderDots = () => {
    if (!dotsContainer) {
      return;
    }

    dotsContainer.innerHTML = slides.map((slide, slideIndex) => `
      <button
        type="button"
        class="hero-dot${slideIndex === 0 ? " is-active" : ""}"
        data-hero-dot="${slideIndex}"
        aria-label="Show ${slide.name}"
        aria-current="${slideIndex === 0 ? "true" : "false"}"
      ></button>
    `).join("");
  };

  const goToSlide = (targetIndex, options = {}) => {
    const shouldAnimate = options.animate !== false;
    index = (targetIndex + slides.length) % slides.length;
    const nextSlide = slides[index];
    preloadSlide(nextSlide);

    const applySlide = () => {
      heroImage.src = nextSlide.src;
      heroImage.alt = `${nextSlide.name} cake`;
      updateActiveDot();
      preloadSlide(slides[(index + 1) % slides.length]);
    };

    if (!shouldAnimate || prefersReducedMotion) {
      heroImage.classList.remove("is-fading");
      applySlide();
      return;
    }

    heroImage.classList.add("is-fading");
    if (fadeTimeoutId !== null) {
      window.clearTimeout(fadeTimeoutId);
    }

    fadeTimeoutId = window.setTimeout(() => {
      applySlide();
      heroImage.classList.remove("is-fading");
      fadeTimeoutId = null;
    }, fadeDurationMs);
  };

  const goToNextSlide = () => {
    goToSlide(index + 1);
  };

  const goToPreviousSlide = () => {
    goToSlide(index - 1);
  };

  const startRotator = () => {
    if (intervalId !== null) {
      return;
    }
    intervalId = window.setInterval(goToNextSlide, intervalMs);
  };

  const stopRotator = () => {
    if (intervalId === null) {
      return;
    }
    window.clearInterval(intervalId);
    intervalId = null;
  };

  const restartRotator = () => {
    stopRotator();
    startRotator();
  };

  prevButton?.addEventListener("click", () => {
    goToPreviousSlide();
    restartRotator();
  });

  nextButton?.addEventListener("click", () => {
    goToNextSlide();
    restartRotator();
  });

  dotsContainer?.addEventListener("click", (event) => {
    const dotButton = event.target.closest("[data-hero-dot]");
    if (!dotButton) {
      return;
    }

    const targetIndex = Number.parseInt(dotButton.dataset.heroDot, 10);
    if (Number.isNaN(targetIndex)) {
      return;
    }

    goToSlide(targetIndex);
    restartRotator();
  });

  renderDots();
  updateActiveDot();
  preloadSlide(slides[(index + 1) % slides.length]);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopRotator();
    } else {
      startRotator();
    }
  });

  window.addEventListener("beforeunload", () => {
    stopRotator();
    if (fadeTimeoutId !== null) {
      window.clearTimeout(fadeTimeoutId);
    }
  });

  startRotator();
}

function toHeroImageSize(url) {
  if (!url) {
    return "";
  }
  return url.replace(/([?&]w=)\d+/, "$11200");
}

function setupCakesPage() {
  const cakesGrid = document.getElementById("cakesGrid");
  if (!cakesGrid) {
    return;
  }

  const searchInput = document.getElementById("cakeSearch");
  const occasionFilter = document.getElementById("occasionFilter");
  const emptyState = document.getElementById("cakesEmpty");
  const comparePanel = document.querySelector(".compare-panel");
  const openCompareButton = document.querySelector("[data-open-compare]");
  const compareGrid = document.getElementById("compareGrid");
  const compareEmpty = document.getElementById("compareEmpty");
  const compareCount = document.getElementById("compareCount");
  const clearCompareButton = document.querySelector("[data-clear-compare]");
  const recentlyViewedGrid = document.getElementById("recentlyViewedGrid");
  const recentlyViewedEmpty = document.getElementById("recentlyViewedEmpty");
  const modal = document.getElementById("orderModal");
  const lightbox = document.getElementById("galleryLightbox");
  const lightboxImage = document.getElementById("galleryLightboxImage");
  const lightboxCaption = document.getElementById("galleryLightboxCaption");
  const lightboxCloseButton = lightbox?.querySelector("[data-lightbox-close]");
  const lightboxPrevButton = lightbox?.querySelector("[data-lightbox-prev]");
  const lightboxNextButton = lightbox?.querySelector("[data-lightbox-next]");
  const comparedCakeIds = new Set();
  let filteredCakes = [...cakesData];
  let lightboxIndex = 0;
  let lightboxPreviousFocus = null;

  const isLightboxOpen = () => Boolean(lightbox?.classList.contains("is-open"));

  const renderLightbox = () => {
    if (!lightbox || !lightboxImage || !lightboxCaption || filteredCakes.length === 0) {
      return;
    }

    const safeIndex = ((lightboxIndex % filteredCakes.length) + filteredCakes.length) % filteredCakes.length;
    lightboxIndex = safeIndex;
    const cake = filteredCakes[safeIndex];

    lightboxImage.src = toHeroImageSize(cake.image);
    lightboxImage.alt = cake.name;
    lightboxCaption.textContent = `${cake.name} • ₹${cake.pricePerKg}/kg`;
  };

  const openLightboxByCakeId = (cakeId, triggerElement) => {
    if (!lightbox) {
      return;
    }

    const indexInFiltered = filteredCakes.findIndex((cake) => cake.id === cakeId);
    if (indexInFiltered === -1) {
      return;
    }

    lightboxIndex = indexInFiltered;
    lightboxPreviousFocus = triggerElement || document.activeElement;
    renderLightbox();
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
    lightboxCloseButton?.focus();
  };

  const closeLightbox = () => {
    if (!lightbox || !isLightboxOpen()) {
      return;
    }

    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    if (lightboxPreviousFocus instanceof HTMLElement) {
      lightboxPreviousFocus.focus();
    }
    lightboxPreviousFocus = null;
  };

  const moveLightbox = (step) => {
    if (!isLightboxOpen() || filteredCakes.length === 0) {
      return;
    }

    lightboxIndex += step;
    renderLightbox();
  };

  const renderCompare = () => {
    if (!compareGrid) {
      return;
    }

    const compareList = Array.from(comparedCakeIds)
      .map((cakeId) => getCakeById(cakeId))
      .filter(Boolean);

    compareGrid.innerHTML = compareList.map((cake) => createCompareCard(cake)).join("");

    if (compareEmpty) {
      compareEmpty.hidden = compareList.length !== 0;
    }

    if (compareCount) {
      compareCount.textContent = t("compare.selectedCount", { count: compareList.length });
    }

    if (clearCompareButton) {
      clearCompareButton.disabled = compareList.length === 0;
    }

    if (openCompareButton) {
      openCompareButton.disabled = compareList.length === 0;
      openCompareButton.textContent = t("btn.compareCta", { count: compareList.length });
    }
  };

  const renderRecentlyViewed = () => {
    if (!recentlyViewedGrid) {
      return;
    }

    const recentList = getRecentlyViewedCakeIds()
      .map((cakeId) => getCakeById(cakeId))
      .filter(Boolean);

    recentlyViewedGrid.innerHTML = recentList.map((cake) => createRecentlyViewedCard(cake)).join("");

    if (recentlyViewedEmpty) {
      recentlyViewedEmpty.hidden = recentList.length !== 0;
    }
  };

  const openCakeOrderModal = (cakeId, triggerElement) => {
    if (!modal) {
      return;
    }

    const selectedCake = getCakeById(cakeId);
    if (!selectedCake) {
      return;
    }

    previousFocus = triggerElement || null;
    saveRecentlyViewedCake(cakeId);
    renderRecentlyViewed();
    prefillModalForm(modal, selectedCake);
    openModal(modal);
  };

  const renderCakes = () => {
    const query = (searchInput?.value || "").trim().toLowerCase();
    const selectedOccasion = occasionFilter?.value || "all";

    filteredCakes = cakesData.filter((cake) => {
      const matchesSearch = cake.name.toLowerCase().includes(query);
      const matchesOccasion = selectedOccasion === "all" || cake.occasions.includes(selectedOccasion);
      return matchesSearch && matchesOccasion;
    });

    cakesGrid.innerHTML = filteredCakes.map((cake) => createCakeCard(cake)).join("");
    if (emptyState) {
      emptyState.hidden = filteredCakes.length !== 0;
    }
  };

  const toggleCompareCake = (cakeId) => {
    if (!cakeId || !getCakeById(cakeId)) {
      return;
    }

    if (comparedCakeIds.has(cakeId)) {
      comparedCakeIds.delete(cakeId);
      showToast(t("toast.removedCompare"));
    } else if (comparedCakeIds.size >= MAX_COMPARE_CAKES) {
      showToast(t("toast.maxCompare", { count: MAX_COMPARE_CAKES }));
      return;
    } else {
      comparedCakeIds.add(cakeId);
      showToast(t("toast.addedCompare"));
    }

    renderCompare();
    renderCakes();
  };

  renderCakes();
  renderCompare();
  renderRecentlyViewed();

  searchInput?.addEventListener("input", renderCakes);
  occasionFilter?.addEventListener("change", renderCakes);

  cakesGrid.addEventListener("click", (event) => {
    const imageButton = event.target.closest("[data-gallery-cake]");
    if (imageButton) {
      openLightboxByCakeId(imageButton.dataset.galleryCake, imageButton);
      return;
    }

    const compareButton = event.target.closest("[data-compare-cake]");
    if (compareButton) {
      toggleCompareCake(compareButton.dataset.compareCake);
      return;
    }

    const orderButton = event.target.closest("[data-order-cake]");
    if (!orderButton) {
      return;
    }

    openCakeOrderModal(orderButton.dataset.orderCake, orderButton);
  });

  compareGrid?.addEventListener("click", (event) => {
    const removeButton = event.target.closest("[data-remove-compare]");
    if (removeButton) {
      comparedCakeIds.delete(removeButton.dataset.removeCompare);
      renderCompare();
      renderCakes();
      return;
    }

    const orderButton = event.target.closest("[data-order-cake]");
    if (!orderButton) {
      return;
    }

    openCakeOrderModal(orderButton.dataset.orderCake, orderButton);
  });

  recentlyViewedGrid?.addEventListener("click", (event) => {
    const orderButton = event.target.closest("[data-order-cake]");
    if (!orderButton) {
      return;
    }

    openCakeOrderModal(orderButton.dataset.orderCake, orderButton);
  });

  clearCompareButton?.addEventListener("click", () => {
    comparedCakeIds.clear();
    renderCompare();
    renderCakes();
  });

  openCompareButton?.addEventListener("click", () => {
    if (!comparePanel || comparedCakeIds.size === 0) {
      return;
    }

    comparePanel.scrollIntoView({ behavior: "smooth", block: "start" });
    comparePanel.classList.add("is-highlighted");
    window.setTimeout(() => {
      comparePanel.classList.remove("is-highlighted");
    }, 700);
  });

  lightboxCloseButton?.addEventListener("click", closeLightbox);
  lightboxPrevButton?.addEventListener("click", () => moveLightbox(-1));
  lightboxNextButton?.addEventListener("click", () => moveLightbox(1));

  lightbox?.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("languagechange", () => {
    renderCakes();
    renderCompare();
    renderRecentlyViewed();
    if (isLightboxOpen()) {
      renderLightbox();
    }
  });

  const closeButton = modal?.querySelector("[data-modal-close]");
  closeButton?.addEventListener("click", () => closeModal(modal));

  modal?.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (isLightboxOpen()) {
      if (event.key === "Escape") {
        closeLightbox();
      }
      if (event.key === "ArrowLeft") {
        moveLightbox(-1);
      }
      if (event.key === "ArrowRight") {
        moveLightbox(1);
      }
      return;
    }

    if (!activeModal) {
      return;
    }

    if (event.key === "Escape") {
      closeModal(activeModal);
    }

    if (event.key === "Tab") {
      trapFocusInModal(event, activeModal);
    }
  });
}

function createCakeCard(cake) {
  const occasionText = cake.occasions.map(formatOccasion).join(", ");

  return `
    <article class="card">
      <button type="button" class="card-image-btn" data-gallery-cake="${cake.id}" aria-label="${cake.name}">
        <img src="${cake.image}" alt="${cake.name}">
      </button>
      <div class="card-body">
        <h3>${cake.name}</h3>
        <p class="price">₹${cake.pricePerKg}/kg</p>
        <p class="muted small">${cake.description}</p>
        <p class="suggestion">${t("label.bestFor")}: ${occasionText}</p>
        <div class="card-actions">
          <button type="button" class="btn btn-primary btn-block" data-order-cake="${cake.id}">${t("btn.orderNow")}</button>
        </div>
      </div>
    </article>
  `;
}

function createCompareCard(cake) {
  const occasionText = cake.occasions.map(formatOccasion).join(", ");

  return `
    <article class="compare-card">
      <button type="button" class="compare-remove" data-remove-compare="${cake.id}" aria-label="Remove ${cake.name} from compare">&times;</button>
      <h3>${cake.name}</h3>
      <p class="price">₹${cake.pricePerKg}/kg</p>
      <p class="muted small">${cake.description}</p>
      <p class="suggestion">${t("label.bestFor")}: ${occasionText}</p>
      <button type="button" class="btn btn-primary btn-block" data-order-cake="${cake.id}">${t("btn.orderThis")}</button>
    </article>
  `;
}

function createRecentlyViewedCard(cake) {
  return `
    <article class="recent-card">
      <img src="${cake.image}" alt="${cake.name}">
      <div class="recent-card-body">
        <h3>${cake.name}</h3>
        <p class="price">₹${cake.pricePerKg}/kg</p>
        <p class="muted small">${cake.description}</p>
        <button type="button" class="btn btn-outline btn-block" data-order-cake="${cake.id}">${t("btn.orderAgain")}</button>
      </div>
    </article>
  `;
}

// Shared order behavior for both the cakes modal and the standalone order page.
function setupOrderForms() {
  const forms = document.querySelectorAll("[data-order-form]");

  forms.forEach((form) => {
    const cakeSelect = form.querySelector("[data-cake-select]");
    if (cakeSelect) {
      populateCakeSelect(cakeSelect);
      const urlCakeId = new URLSearchParams(window.location.search).get("cake");
      if (urlCakeId && getCakeById(urlCakeId)) {
        cakeSelect.value = urlCakeId;
      }
    }

    form.addEventListener("input", (event) => {
      if (event.target.matches("input, select, textarea")) {
        clearFieldError(form, event.target.name);
        updateTotalPrice(form);
      }
    });

    form.addEventListener("change", (event) => {
      if (event.target.matches("input, select, textarea")) {
        clearFieldError(form, event.target.name);
        updateTotalPrice(form);
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      submitOrder(form);
    });

    const submitButton = form.querySelector("[data-submit-order]");
    submitButton?.addEventListener("click", () => submitOrder(form));

    const quantityField = form.querySelector("[name='quantity']");
    form.querySelectorAll("[data-qty-step]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!quantityField) {
          return;
        }

        const delta = Number(button.dataset.qtyStep) || 0;
        const current = Number.parseInt(quantityField.value, 10);
        const base = Number.isInteger(current) ? current : 1;
        const next = Math.max(1, base + delta);
        quantityField.value = String(next);
        quantityField.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });

    setupOrderSectionLayout(form);

    form.addEventListener("reset", () => {
      window.setTimeout(() => {
        clearFormErrors(form);
        applyDeliveryDateRules(form, true);
        updateTotalPrice(form);
      }, 0);
    });

    applyDeliveryDateRules(form, true);
    const deliveryDateField = form.querySelector("[name='deliveryDate']");
    deliveryDateField?.addEventListener("change", () => {
      applyDeliveryDateRules(form, false);
    });

    document.addEventListener("languagechange", () => {
      const selectedCakeId = cakeSelect?.value || "";
      if (cakeSelect) {
        populateCakeSelect(cakeSelect);
        if (selectedCakeId && getCakeById(selectedCakeId)) {
          cakeSelect.value = selectedCakeId;
        }
      }
      applyDeliveryDateRules(form, false);
      updateTotalPrice(form);
    });

    updateTotalPrice(form);
  });
}

function populateCakeSelect(selectElement) {
  const selectedValue = selectElement.value;
  const options = cakesData
    .map((cake) => `<option value="${cake.id}">${cake.name} (₹${cake.pricePerKg}/kg)</option>`)
    .join("");

  selectElement.innerHTML = `<option value="">${t("form.chooseCake")}</option>${options}`;
  if (selectedValue && getCakeById(selectedValue)) {
    selectElement.value = selectedValue;
  }
}

function prefillModalForm(modal, cake) {
  const form = modal.querySelector("[data-order-form]");
  if (!form) {
    return;
  }

  form.reset();

  const cakeIdField = form.querySelector("[name='cakeId']");
  const cakeDisplayField = form.querySelector("[name='cakeDisplay']");

  if (cakeIdField) {
    cakeIdField.value = cake.id;
  }

  if (cakeDisplayField) {
    cakeDisplayField.value = cake.name;
  }

  const quantityField = form.querySelector("[name='quantity']");
  const weightField = form.querySelector("[name='weight']");
  const tierField = form.querySelector("[name='tiers']");

  if (quantityField) {
    quantityField.value = "1";
  }

  if (weightField) {
    weightField.value = "1";
  }

  if (tierField) {
    tierField.value = "1";
  }

  applyDeliveryDateRules(form, true);
  clearFormErrors(form);
  updateTotalPrice(form);
}

function submitOrder(form) {
  const validation = validateOrderForm(form);
  if (!validation.valid || !validation.cake) {
    showToast(t("form.requiredHint"));
    focusFirstInvalidField(form);
    return;
  }

  const totals = calculateTotals(form, validation.cake);
  const message = buildWhatsAppMessage(form, validation.cake, totals);
  const waURL = buildWhatsAppUrl(message);

  if (!waURL) {
    showToast(t("toast.updateNumber"));
    return;
  }

  showToast(t("toast.openingWhatsApp"));
  window.open(waURL, "_blank", "noopener");
}

function buildWhatsAppUrl(message) {
  const cleanedNumber = String(WHATSAPP_NUMBER || "").replace(/\D/g, "");
  const isValidLength = cleanedNumber.length >= 10 && cleanedNumber.length <= 15;

  if (!isValidLength) {
    return null;
  }

  return `https://wa.me/${cleanedNumber}?text=${encodeURIComponent(message)}`;
}

function validateOrderForm(form) {
  clearFormErrors(form);

  let valid = true;
  const cake = getSelectedCake(form);

  if (!cake) {
    setFieldError(form, "cakeId", t("validation.selectCake"));
    valid = false;
  }

  const customerName = getFieldValue(form, "customerName");
  if (!customerName) {
    setFieldError(form, "customerName", t("validation.name"));
    valid = false;
  }

  const phone = getFieldValue(form, "phone");
  if (!phone) {
    setFieldError(form, "phone", t("validation.phoneRequired"));
    valid = false;
  } else if (!/^\+?[0-9\s-]{7,15}$/.test(phone)) {
    setFieldError(form, "phone", t("validation.phoneInvalid"));
    valid = false;
  }

  const weight = Number.parseFloat(getFieldValue(form, "weight"));
  if (!Number.isFinite(weight) || weight <= 0) {
    setFieldError(form, "weight", t("validation.weight"));
    valid = false;
  }

  const quantity = Number(getFieldValue(form, "quantity"));
  if (!Number.isInteger(quantity) || quantity <= 0) {
    setFieldError(form, "quantity", t("validation.quantity"));
    valid = false;
  }

  const occasion = getFieldValue(form, "occasion");
  if (!occasion) {
    setFieldError(form, "occasion", t("validation.occasion"));
    valid = false;
  }

  const deliveryDate = getFieldValue(form, "deliveryDate");
  const minimumDate = getMinimumDeliveryDateValue(new Date());
  if (!deliveryDate) {
    setFieldError(form, "deliveryDate", t("validation.deliveryDate"));
    valid = false;
  } else if (deliveryDate < minimumDate) {
    setFieldError(form, "deliveryDate", t("validation.deliveryDateLead", { date: formatDate(minimumDate) }));
    valid = false;
  }

  const deliverySlot = getFieldValue(form, "deliverySlot");
  if (!deliverySlot) {
    setFieldError(form, "deliverySlot", t("validation.deliverySlot"));
    valid = false;
  }

  const address = getFieldValue(form, "address");
  if (!address) {
    setFieldError(form, "address", t("validation.address"));
    valid = false;
  }

  return { valid, cake };
}

function calculateTotals(form, cake) {
  const selectedKg = Number.parseFloat(getFieldValue(form, "weight")) || 0;
  const quantityValue = Number(getFieldValue(form, "quantity"));
  const quantity = Number.isInteger(quantityValue) && quantityValue > 0 ? quantityValue : 0;
  const tiers = Number.parseInt(getFieldValue(form, "tiers"), 10) || 1;
  const tierExtra = Math.max(tiers - 1, 0) * 200;
  const total = cake ? (cake.pricePerKg * selectedKg * quantity) + tierExtra : 0;

  return {
    selectedKg,
    quantity,
    tiers,
    tierExtra,
    total
  };
}

function updateTotalPrice(form) {
  const cake = getSelectedCake(form);
  const totals = calculateTotals(form, cake);

  const totalElement = form.querySelector("[data-total-price]");
  if (totalElement) {
    totalElement.textContent = `₹${totals.total.toLocaleString("en-IN")}`;
  }

  const pricePerKgElement = form.querySelector("[data-price-display]");
  if (pricePerKgElement) {
    pricePerKgElement.textContent = cake ? `₹${cake.pricePerKg}/kg` : t("form.selectCakeFirst");
  }

  updateOrderSummary(form, cake, totals);
  updateOrderSectionStates(form);
}

function updateOrderSummary(form, cake, totals) {
  const layout = form.closest(".order-layout");
  if (!layout) {
    return;
  }

  const setText = (selector, value) => {
    const element = layout.querySelector(selector);
    if (element) {
      element.textContent = value;
    }
  };

  const occasionValue = getFieldValue(form, "occasion");
  const deliveryDateValue = getFieldValue(form, "deliveryDate");
  const deliverySlotValue = getFieldValue(form, "deliverySlot");
  const fallback = "-";

  setText("[data-summary-cake]", cake ? cake.name : fallback);
  setText("[data-summary-price]", cake ? `₹${cake.pricePerKg}/kg` : fallback);
  setText("[data-summary-weight]", totals.selectedKg > 0 ? `${totals.selectedKg}kg` : fallback);
  setText("[data-summary-quantity]", totals.quantity > 0 ? String(totals.quantity) : fallback);
  setText("[data-summary-tiers]", `${totals.tiers}`);
  setText("[data-summary-occasion]", occasionValue ? formatOccasion(occasionValue) : fallback);
  setText("[data-summary-date]", deliveryDateValue ? formatDate(deliveryDateValue) : fallback);
  setText("[data-summary-slot]", deliverySlotValue ? formatDeliverySlot(deliverySlotValue) : fallback);
  setText("[data-summary-total]", `₹${totals.total.toLocaleString("en-IN")}`);
}

function setupOrderSectionLayout(form) {
  const layout = form.closest(".order-layout");
  if (!layout) {
    return;
  }

  const sections = Array.from(form.querySelectorAll("[data-order-section]"));
  const progressButtons = Array.from(layout.querySelectorAll("[data-progress-step]"));
  if (sections.length === 0 || progressButtons.length === 0) {
    return;
  }

  if (window.matchMedia("(max-width: 768px)").matches) {
    sections.forEach((section, index) => {
      if (section instanceof HTMLDetailsElement) {
        section.open = index === 0;
      }
    });
  }

  progressButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetStep = button.dataset.progressStep;
      if (!targetStep) {
        return;
      }

      const targetSection = sections.find((section) => section.dataset.orderSection === targetStep);
      if (!targetSection) {
        return;
      }

      if (window.matchMedia("(max-width: 768px)").matches) {
        sections.forEach((section) => {
          if (section !== targetSection && section instanceof HTMLDetailsElement) {
            section.open = false;
          }
        });
      }

      if (targetSection instanceof HTMLDetailsElement) {
        targetSection.open = true;
      }

      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = targetSection.querySelector("input, select, textarea");
      firstField?.focus({ preventScroll: true });
      updateOrderSectionStates(form);
    });
  });

  sections.forEach((section) => {
    if (!(section instanceof HTMLDetailsElement)) {
      return;
    }

    section.addEventListener("toggle", () => {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;
      if (!isMobile) {
        updateOrderSectionStates(form);
        return;
      }

      if (!section.open) {
        const hasOpenSection = sections.some((item) => item instanceof HTMLDetailsElement && item.open);
        if (!hasOpenSection) {
          section.open = true;
          return;
        }

        updateOrderSectionStates(form);
        return;
      }

      sections.forEach((otherSection) => {
        if (otherSection !== section && otherSection instanceof HTMLDetailsElement) {
          otherSection.open = false;
        }
      });

      updateOrderSectionStates(form);
    });
  });

  updateOrderSectionStates(form);
}

function updateOrderSectionStates(form) {
  const layout = form.closest(".order-layout");
  if (!layout) {
    return;
  }

  const sections = Array.from(form.querySelectorAll("[data-order-section]"));
  if (sections.length === 0) {
    return;
  }

  sections.forEach((section) => {
    const sectionId = section.dataset.orderSection;
    const progressButton = sectionId
      ? layout.querySelector(`[data-progress-step='${sectionId}']`)
      : null;
    const requiredFields = Array.from(section.querySelectorAll("[required]"));
    const isComplete = requiredFields.length > 0 && requiredFields.every(isRequiredFieldSatisfied);
    const hasInvalid = requiredFields.some((field) => field.classList.contains("is-invalid"));
    const isActive = section instanceof HTMLDetailsElement ? section.open : false;

    section.classList.toggle("is-complete", isComplete);
    section.classList.toggle("has-invalid", hasInvalid);

    if (progressButton) {
      progressButton.classList.toggle("is-complete", isComplete);
      progressButton.classList.toggle("has-invalid", hasInvalid);
      progressButton.classList.toggle("is-active", isActive);
      progressButton.setAttribute("aria-pressed", String(isActive));
    }
  });
}

function isRequiredFieldSatisfied(field) {
  if (!field || field.disabled) {
    return true;
  }

  const value = field.value.trim();
  if (!value) {
    return false;
  }

  if (field.name === "quantity") {
    const quantity = Number(value);
    return Number.isInteger(quantity) && quantity > 0;
  }

  return true;
}

function applyDeliveryDateRules(form, forceMinDate = false) {
  const deliveryDateField = form.querySelector("[name='deliveryDate']");
  const deliverySlotField = form.querySelector("[name='deliverySlot']");

  if (!deliveryDateField || !deliverySlotField) {
    return;
  }

  const minimumDateValue = getMinimumDeliveryDateValue(new Date());
  deliveryDateField.min = minimumDateValue;

  if (forceMinDate || !deliveryDateField.value || deliveryDateField.value < minimumDateValue) {
    deliveryDateField.value = minimumDateValue;
  }

  populateDeliverySlots(deliverySlotField, deliveryDateField.value);
}

function populateDeliverySlots(slotSelect, selectedDateValue) {
  const previousValue = slotSelect.value;
  const now = new Date();
  const todayValue = formatDateInputValue(now);
  const effectiveDate = selectedDateValue || getMinimumDeliveryDateValue(now);
  const currentHour = now.getHours() + (now.getMinutes() / 60);
  const minimumStartHour = currentHour + DELIVERY_SLOT_BUFFER_HOURS;
  const isToday = effectiveDate === todayValue;

  const optionMarkup = DELIVERY_SLOT_DEFINITIONS.map((slot) => {
    const isAvailable = !isToday || slot.startHour >= minimumStartHour;
    return `
      <option value="${slot.value}"${isAvailable ? "" : " disabled"}>${t(slot.labelKey)}</option>
    `;
  }).join("");

  const hasAvailableSlot = DELIVERY_SLOT_DEFINITIONS.some((slot) => !isToday || slot.startHour >= minimumStartHour);
  const placeholderText = hasAvailableSlot ? t("form.selectSlot") : t("form.slotUnavailable");

  slotSelect.innerHTML = `<option value="">${placeholderText}</option>${optionMarkup}`;
  const selectedOption = Array.from(slotSelect.options).find((option) => option.value === previousValue && !option.disabled);
  if (selectedOption) {
    slotSelect.value = previousValue;
  } else {
    slotSelect.value = "";
  }
}

function getMinimumDeliveryDateValue(now) {
  const minDate = new Date(now);
  minDate.setHours(0, 0, 0, 0);
  if (now.getHours() >= DELIVERY_CUTOFF_HOUR) {
    minDate.setDate(minDate.getDate() + 1);
  }
  return formatDateInputValue(minDate);
}

function formatDateInputValue(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getSelectedCake(form) {
  const cakeField = form.querySelector("[name='cakeId']");
  if (!cakeField) {
    return null;
  }

  return getCakeById(cakeField.value);
}

function getCakeById(cakeId) {
  return cakesData.find((cake) => cake.id === cakeId) || null;
}

function getRecentlyViewedCakeIds() {
  return getStoredStringArray(RECENTLY_VIEWED_KEY)
    .filter((cakeId) => Boolean(getCakeById(cakeId)));
}

function saveRecentlyViewedCake(cakeId) {
  if (!cakeId || !getCakeById(cakeId)) {
    return;
  }

  const deduped = getRecentlyViewedCakeIds()
    .filter((id) => id !== cakeId);
  const nextValue = [cakeId, ...deduped].slice(0, MAX_RECENTLY_VIEWED);
  setStoredStringArray(RECENTLY_VIEWED_KEY, nextValue);
}

function getStoredStringArray(key) {
  const storage = getSafeLocalStorage();
  if (!key || !storage) {
    return [];
  }

  try {
    const raw = storage.getItem(key);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((item) => typeof item === "string");
  } catch (_) {
    return [];
  }
}

function setStoredStringArray(key, values) {
  const storage = getSafeLocalStorage();
  if (!key || !storage || !Array.isArray(values)) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(values));
  } catch (_) {
    // Ignore quota/security errors and continue without persistence.
  }
}

function getSafeLocalStorage() {
  try {
    return window.localStorage;
  } catch (_) {
    return null;
  }
}

function getFieldValue(form, fieldName) {
  const field = form.querySelector(`[name='${fieldName}']`);
  return field ? field.value.trim() : "";
}

function clearFormErrors(form) {
  form.querySelectorAll(".field-error").forEach((element) => {
    element.textContent = "";
  });

  form.querySelectorAll(".is-invalid").forEach((element) => {
    element.classList.remove("is-invalid");
  });

  updateOrderSectionStates(form);
}

function clearFieldError(form, fieldName) {
  if (!fieldName) {
    return;
  }

  const field = form.querySelector(`[name='${fieldName}']`);
  if (field) {
    field.classList.remove("is-invalid");
  }

  const error = form.querySelector(`[data-error-for='${fieldName}']`);
  if (error) {
    error.textContent = "";
  }

  updateOrderSectionStates(form);
}

function setFieldError(form, fieldName, message) {
  const field = form.querySelector(`[name='${fieldName}']`);
  if (field) {
    field.classList.add("is-invalid");
    openOrderSectionForField(field);
  }

  const error = form.querySelector(`[data-error-for='${fieldName}']`);
  if (error) {
    error.textContent = message;
  }

  updateOrderSectionStates(form);
}

function openOrderSectionForField(field) {
  if (!field) {
    return;
  }

  const section = field.closest("[data-order-section]");
  if (section instanceof HTMLDetailsElement) {
    section.open = true;
  }
}

function focusFirstInvalidField(form) {
  const firstInvalidField = form.querySelector(".is-invalid");
  if (!firstInvalidField) {
    return;
  }

  openOrderSectionForField(firstInvalidField);
  firstInvalidField.focus({ preventScroll: true });
  firstInvalidField.scrollIntoView({ behavior: "smooth", block: "center" });
}

function buildWhatsAppMessage(form, cake, totals) {
  const customerName = getFieldValue(form, "customerName");
  const phone = getFieldValue(form, "phone");
  const occasionLabel = formatOccasion(getFieldValue(form, "occasion"));
  const deliveryDate = formatDate(getFieldValue(form, "deliveryDate"));
  const deliverySlot = formatDeliverySlot(getFieldValue(form, "deliverySlot"));
  const address = getFieldValue(form, "address");
  const cakeMessage = getFieldValue(form, "cakeMessage") || "No message";
  const extraDetails = getFieldValue(form, "extraDetails") || "No extra notes";
  const tierLabel = `${totals.tiers} tier${totals.tiers > 1 ? "s" : ""}`;
  const baseAmount = cake.pricePerKg * totals.selectedKg * totals.quantity;
  const tierExtraLabel = totals.tierExtra > 0 ? `₹${totals.tierExtra}` : "₹0";

  return [
    "SWEET PAN'S | PREMIUM CAKE ORDER",
    "================================",
    "CLIENT DETAILS",
    `Name          : ${customerName}`,
    `Phone         : ${phone}`,
    `Occasion      : ${occasionLabel}`,
    `Delivery Date : ${deliveryDate}`,
    `Delivery Slot : ${deliverySlot}`,
    `Address       : ${address}`,
    "--------------------------------",
    "CAKE DETAILS",
    `Cake          : ${cake.name}`,
    `Price per KG  : ₹${cake.pricePerKg}/kg`,
    `Weight        : ${totals.selectedKg}kg`,
    `Quantity      : ${totals.quantity}`,
    `Tiers         : ${tierLabel} (Extra: ${tierExtraLabel})`,
    `Cake Message  : ${cakeMessage}`,
    `Extra Notes   : ${extraDetails}`,
    "--------------------------------",
    "PRICE SUMMARY",
    `Base Amount   : ₹${baseAmount.toLocaleString("en-IN")}`,
    `Tier Extra    : ₹${totals.tierExtra.toLocaleString("en-IN")}`,
    `Total Amount  : ₹${totals.total.toLocaleString("en-IN")}`,
    "================================",
    "Please confirm availability, delivery slot, and payment details.",
    "Thank you."
  ].join("\n");
}

function formatOccasion(value) {
  if (!value) {
    return "-";
  }

  const translationKey = OCCASION_TRANSLATION_KEYS[value];
  if (translationKey) {
    return t(translationKey);
  }

  return value
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function formatDeliverySlot(slotValue) {
  if (!slotValue) {
    return "-";
  }

  const slot = DELIVERY_SLOT_DEFINITIONS.find((item) => item.value === slotValue);
  if (!slot) {
    return slotValue;
  }

  return t(slot.labelKey);
}

function formatDate(dateValue) {
  if (!dateValue) {
    return "-";
  }

  const parsedDate = new Date(`${dateValue}T00:00:00`);
  return parsedDate.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });
}

function openModal(modal) {
  activeModal = modal;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");

  const firstFocusable = modal.querySelector(FOCUSABLE_SELECTOR);
  firstFocusable?.focus();
}

function closeModal(modal) {
  const targetModal = modal || activeModal;
  if (!targetModal) {
    return;
  }

  targetModal.classList.remove("is-open");
  targetModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeModal = null;

  if (previousFocus) {
    previousFocus.focus();
    previousFocus = null;
  }
}

function trapFocusInModal(event, modal) {
  const focusableElements = Array.from(modal.querySelectorAll(FOCUSABLE_SELECTOR));
  if (focusableElements.length === 0) {
    return;
  }

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  if (event.shiftKey && document.activeElement === firstElement) {
    event.preventDefault();
    lastElement.focus();
  } else if (!event.shiftKey && document.activeElement === lastElement) {
    event.preventDefault();
    firstElement.focus();
  }
}

function setupLanguageToggle() {
  const storage = getSafeLocalStorage();
  const storedLanguage = storage?.getItem(LANG_STORAGE_KEY);
  const initialLanguage = storedLanguage === "ml" ? "ml" : "en";

  setLanguage(initialLanguage, { persist: false, announce: false });

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.setLang, { persist: true, announce: true });
    });
  });
}

function setLanguage(languageCode, options = {}) {
  const { persist = true, announce = false } = options;
  const nextLanguage = languageCode === "ml" ? "ml" : "en";
  const hasChanged = nextLanguage !== currentLanguage;

  currentLanguage = nextLanguage;
  document.documentElement.lang = nextLanguage;

  applyTranslations();
  updateLanguageButtons();

  if (persist) {
    const storage = getSafeLocalStorage();
    try {
      storage?.setItem(LANG_STORAGE_KEY, nextLanguage);
    } catch (_) {
      // Ignore storage write errors.
    }
  }

  if (hasChanged) {
    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: nextLanguage } }));
  }

  if (announce && hasChanged) {
    showToast(t("lang.changed"));
  }
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) {
      return;
    }

    const params = (key === "btn.compareCta" || key === "compare.selectedCount")
      ? { count: 0 }
      : {};

    element.textContent = t(key, params);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (!key) {
      return;
    }
    element.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    const key = element.dataset.i18nAria;
    if (!key) {
      return;
    }
    element.setAttribute("aria-label", t(key));
  });
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const isActive = button.dataset.setLang === currentLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
}

function t(key, params = {}) {
  const currentPack = TRANSLATIONS[currentLanguage] || TRANSLATIONS.en;
  const fallbackPack = TRANSLATIONS.en;
  const raw = currentPack[key] || fallbackPack[key] || key;

  return raw.replace(/\{(\w+)\}/g, (_, token) => {
    return Object.prototype.hasOwnProperty.call(params, token) ? String(params[token]) : `{${token}}`;
  });
}

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) {
    return;
  }

  toast.textContent = message;
  toast.classList.add("show");

  if (toastTimer) {
    window.clearTimeout(toastTimer);
  }

  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}
