export interface LocationContent {
  slug: string;
  intro: string[];
  localContext: string;
  commonMaterials: string;
  faqs: { q: string; a: string }[];
}

export const locationContent: LocationContent[] = [
  {
    slug: "vanderbijlpark",
    intro: [
      "Vanderbijlpark is our home base — All Recycling Leaders operates directly from 74 Fairbanks Street, right in the heart of the city. If you live or work in Vanderbijlpark, you're already minutes from our yard.",
      "Built around the steel industry that shaped the Vaal Triangle, Vanderbijlpark has always been a metal-rich city. The legacy of ArcelorMittal and the wider industrial corridor means there is a constant supply of ferrous and non-ferrous scrap across the area — from commercial off-cuts to residential copper and aluminium.",
    ],
    localContext:
      "Vanderbijlpark's industrial backbone — from the Duncanville and Unitas manufacturing zones to the Vanderbijlpark CBD and surrounding residential areas — generates consistent scrap across all grades. We serve walk-in sellers, engineering workshops, panel beaters, and commercial clients from across the city.",
    commonMaterials:
      "Steel and iron are the dominant materials in Vanderbijlpark due to the city's industrial heritage. Copper cabling, aluminium window frames and extrusions, and brass fittings are also commonly sold by residents and contractors. Our yard handles all volumes — from a bakkie-load to a full truck.",
    faqs: [
      {
        q: "Where exactly is ARL's yard in Vanderbijlpark?",
        a: "We are at 74 Fairbanks Street, Vanderbijlpark, Gauteng, 1911. Open Monday to Friday 08:00–17:00 and Saturday 08:00–13:00. No appointment needed.",
      },
      {
        q: "Do you buy scrap from Vanderbijlpark industrial areas?",
        a: "Yes. We buy from private sellers, engineering workshops, contractors, and businesses across Vanderbijlpark and the wider Vaal Triangle. Large commercial loads are welcome — WhatsApp us in advance for large volumes.",
      },
      {
        q: "Can I get same-day payment in Vanderbijlpark?",
        a: "Yes. Walk in, weigh up, get paid the same day. We pay by EFT or cash depending on the amount.",
      },
    ],
  },
  {
    slug: "vereeniging",
    intro: [
      "Vereeniging is one of the oldest industrial towns in Gauteng and sits at the centre of the Vaal Triangle. ARL's yard in Vanderbijlpark is approximately 15 minutes from Vereeniging's CBD, making it one of the most convenient scrap buying options for the area.",
      "The Vereeniging area spans a wide range of communities — from the established industrial zones around the R59 and the Vaal River corridor to residential neighbourhoods across Three Rivers, Duncanville, and Bedworth Park. Scrap metal flows steadily from all of these areas.",
    ],
    localContext:
      "Vereeniging's mix of light industry, construction, and dense residential areas produces a consistent supply of ferrous and non-ferrous scrap. Engineering and fabrication businesses along the main industrial strips regularly need a reliable scrap buyer — ARL services these commercial accounts alongside walk-in residential sellers.",
    commonMaterials:
      "Copper piping and cabling, aluminium window frames, mild steel, cast iron and brass fittings are the most commonly sold materials by Vereeniging sellers. Scrap from building renovations and old infrastructure is particularly common in the area.",
    faqs: [
      {
        q: "How far is ARL from Vereeniging?",
        a: "Our yard is approximately 15 minutes from Vereeniging CBD. Head towards Vanderbijlpark on the R59 — we are at 74 Fairbanks Street, Vanderbijlpark.",
      },
      {
        q: "Do you service commercial accounts in Vereeniging?",
        a: "Yes. We work with engineering firms, contractors, and businesses in Vereeniging on bin collection contracts and bulk scrap buying. Contact us to discuss your volume.",
      },
      {
        q: "What's the fastest way to get a scrap price from Vereeniging?",
        a: "WhatsApp us a photo of your material on 072 080 0327 and we'll give you a same-day quote. You can also drive straight in during operating hours.",
      },
    ],
  },
  {
    slug: "sebokeng",
    intro: [
      "Sebokeng is one of the largest townships in the Vaal and Sedibeng region, and ARL's yard is just 8 minutes away in Vanderbijlpark. We buy scrap from individual sellers, spaza operators, and community-based recyclers across Sebokeng and the surrounding areas.",
      "Informal recycling is an important part of the local economy in Sebokeng. ARL provides a trusted, transparent buying point where every seller — regardless of the size of their load — is treated fairly, weighed accurately, and paid on the same day.",
    ],
    localContext:
      "Sebokeng's residential density and active informal economy produce a consistent flow of copper, aluminium, and mixed non-ferrous scrap. Sellers range from individuals bringing in small loads to established scrap collectors serving multiple streets. All are welcome at our yard.",
    commonMaterials:
      "Copper wire and stripped cabling, aluminium cans and extrusions, and mixed non-ferrous materials are the most commonly sold items from Sebokeng. We also buy steel and iron from residents undertaking home renovations or clearing out yards.",
    faqs: [
      {
        q: "Do you buy small loads from Sebokeng?",
        a: "Yes. There is no strict minimum. Even small quantities of copper or aluminium are welcome. For very low-value materials in tiny amounts, WhatsApp us first to confirm it's worth the trip.",
      },
      {
        q: "How do I get from Sebokeng to ARL's yard?",
        a: "Our yard is approximately 8 minutes from Sebokeng. Head towards Vanderbijlpark — we're at 74 Fairbanks Street. WhatsApp us on 072 080 0327 if you need directions.",
      },
      {
        q: "Is the weighing process fair for informal sellers from Sebokeng?",
        a: "Absolutely. Every load is weighed on a calibrated, certified weighbridge. The reading is visible to you. We do not round down or estimate — you are paid for every kilogram.",
      },
    ],
  },
  {
    slug: "evaton",
    intro: [
      "Evaton sits in the heart of the Sedibeng region and is one of the most established communities in the Vaal area. ARL's Vanderbijlpark yard is approximately 10 minutes away, giving Evaton residents and businesses a fast, reliable scrap buying option.",
      "Evaton's dense residential areas and active local economy generate a regular flow of scrap metal. Whether you're clearing out a property, doing home improvements, or running a small recycling operation, ARL provides a trustworthy, community-oriented buying point.",
    ],
    localContext:
      "Evaton's proximity to Sebokeng, Boipatong, and the wider Vanderbijlpark industrial zone means scrap sellers from the area have access to a wide range of materials. ARL is one of the closest formal scrap buyers to Evaton, with competitive pricing and same-day payment.",
    commonMaterials:
      "Copper wiring, aluminium, mixed non-ferrous metals, and light steel are the most frequently sold materials by Evaton sellers. Building materials from home renovations — including copper piping and aluminium window frames — are also commonly traded.",
    faqs: [
      {
        q: "Where is the closest scrap metal buyer to Evaton?",
        a: "All Recycling Leaders at 74 Fairbanks Street, Vanderbijlpark is approximately 10 minutes from Evaton. We are one of the closest formal scrap buyers in the Vaal region.",
      },
      {
        q: "Do you buy scrap from Evaton residents?",
        a: "Yes — walk-in sellers from Evaton are welcome any time during operating hours. Monday to Friday 08:00–17:00, Saturday 08:00–13:00.",
      },
      {
        q: "Can I check prices before driving from Evaton?",
        a: "Yes. WhatsApp us on 072 080 0327 with a photo of your scrap and we will give you a price estimate before you make the trip.",
      },
    ],
  },
  {
    slug: "boipatong",
    intro: [
      "Boipatong is a township close to Vanderbijlpark, and ARL's yard is just 10 minutes away on the doorstep of the community. We serve scrap sellers from Boipatong regularly and are well known in the area as a fair, reliable buyer.",
      "Like many communities in the Vaal Triangle, Boipatong has a strong informal recycling network. ARL supports this by offering a formal, transparent buying process — calibrated scales, visible readings, and same-day cash or EFT payment.",
    ],
    localContext:
      "Boipatong's residential areas produce steady volumes of copper, aluminium, and steel scrap. The community's proximity to Vanderbijlpark's industrial zones also means some sellers bring in commercial-grade materials alongside household scrap.",
    commonMaterials:
      "Copper cable, aluminium, lead from old batteries, and mixed steel are the most common materials brought in by Boipatong sellers. We accept all grades and are happy to assess and grade your material when you arrive.",
    faqs: [
      {
        q: "How far is ARL from Boipatong?",
        a: "Approximately 10 minutes. We are at 74 Fairbanks Street, Vanderbijlpark. Open Monday–Friday 08:00–17:00 and Saturday 08:00–13:00.",
      },
      {
        q: "Do you pay cash for scrap from Boipatong?",
        a: "Yes. Same-day payment by cash or EFT. For larger amounts we typically pay by EFT for security, but smaller transactions can be settled in cash.",
      },
      {
        q: "Do I need to sort my scrap before arriving?",
        a: "It helps but isn't required. We grade and sort on arrival. Better-sorted, cleaner scrap does attract better prices — mixed loads are priced at the lowest grade in the mix.",
      },
    ],
  },
  {
    slug: "sharpeville",
    intro: [
      "Sharpeville is a township in the Sedibeng region with deep historical significance in South Africa. ARL is proud to serve the Sharpeville community, with our Vanderbijlpark yard approximately 12 minutes away.",
      "Residents and small recyclers from Sharpeville regularly use ARL as their scrap buying point of choice. We offer a fair, respectful service — the same standard of weighing, pricing, and payment for every customer, regardless of the size of their load.",
    ],
    localContext:
      "Sharpeville's residential community generates consistent volumes of copper, aluminium, and steel scrap. Local contractors and property developers in the area also bring in renovation and construction scrap on a regular basis.",
    commonMaterials:
      "Copper piping and wiring, aluminium cans and profiles, and light steel are the predominant materials sold by Sharpeville residents. We also buy e-waste — computers, cables, and electronic components — from the area.",
    faqs: [
      {
        q: "Is ARL close to Sharpeville?",
        a: "Yes — approximately 12 minutes. Our yard is at 74 Fairbanks Street, Vanderbijlpark. We are open 6 days a week and no appointment is needed.",
      },
      {
        q: "Do you buy e-waste from Sharpeville?",
        a: "Yes. We buy e-waste including computers, cables, transformers, and electronic components. WhatsApp us a photo if you are unsure whether we accept a specific item.",
      },
      {
        q: "What ID do I need to sell scrap?",
        a: "A valid South African ID or passport. South African law requires scrap buyers to record the seller's ID number for all transactions.",
      },
    ],
  },
  {
    slug: "bophelong",
    intro: [
      "Bophelong is a township situated between Vanderbijlpark and Vereeniging, and one of the communities closest to ARL's yard — approximately 8 minutes away. Our strong ties with Bophelong go back years, and we are a known and trusted buying point in the area.",
      "The township generates a consistent flow of scrap metal from residential clearances, home renovations, and the informal recycling economy. ARL provides a reliable, same-day-payment outlet for this material.",
    ],
    localContext:
      "Bophelong's proximity to Vanderbijlpark's industrial areas means that some sellers bring in commercial-grade ferrous scrap alongside residential non-ferrous materials. We buy both, and our certified weighbridge handles all load sizes accurately.",
    commonMaterials:
      "Copper wiring and pipe, aluminium, mixed steel and iron are the most frequently sold materials from Bophelong. Lead from old plumbing and scrap batteries is also commonly brought in.",
    faqs: [
      {
        q: "How close is ARL to Bophelong?",
        a: "Very close — approximately 8 minutes. We are at 74 Fairbanks Street, Vanderbijlpark. Walk-ins welcome Monday–Friday 08:00–17:00 and Saturday 08:00–13:00.",
      },
      {
        q: "Can I bring a mixed load from Bophelong?",
        a: "Yes. Mixed loads are accepted and graded on arrival. Separating your materials before you come in will generally result in a better price, but it is not required.",
      },
      {
        q: "Do you offer bin collection to businesses in Bophelong?",
        a: "Yes. If your business generates regular scrap metal, we can place a bin on your premises and collect on schedule. Contact us to discuss a contract.",
      },
    ],
  },
  {
    slug: "three-rivers",
    intro: [
      "Three Rivers is a suburb of Vereeniging, situated where the Vaal, Klip, and Suikerbos rivers meet. It is a mixed residential and light industrial area, and ARL's Vanderbijlpark yard is approximately 10 minutes away.",
      "Three Rivers has a strong community of homeowners, light industrial businesses, and contractors who regularly generate scrap. ARL provides a nearby, professional buying point that pays market-related prices and settles on the same day.",
    ],
    localContext:
      "Three Rivers' mix of residential estates and commercial strips produces a consistent range of scrap material — from copper and aluminium in home renovations to steel and iron from light engineering. Sellers from Three Rivers East and West are equally welcome.",
    commonMaterials:
      "Copper piping, aluminium window frames and gutters, brass fittings, and light steel are the most commonly traded materials from Three Rivers. We also buy stainless steel appliances and e-waste from the area.",
    faqs: [
      {
        q: "Is there a scrap metal buyer near Three Rivers?",
        a: "All Recycling Leaders in Vanderbijlpark is approximately 10 minutes from Three Rivers. We buy all grades of ferrous and non-ferrous scrap — walk-ins welcome.",
      },
      {
        q: "Do you buy scrap from building renovations in Three Rivers?",
        a: "Yes. Renovation scrap — copper piping, aluminium frames, brass fittings, old steel — is some of the most common material we buy. Bring it in or WhatsApp us for a price estimate.",
      },
      {
        q: "How do I get the best price for my scrap from Three Rivers?",
        a: "Clean, separated material fetches the best price. Strip and separate your copper, aluminium, brass, and steel before coming in. WhatsApp us a photo and we'll give you an estimate first.",
      },
    ],
  },
  {
    slug: "roshnee",
    intro: [
      "Roshnee is a predominantly residential community on the western bank of the Vaal near Vanderbijlpark. It is one of the more established neighbourhoods in the area, with a strong mix of homeowners and small businesses. ARL's yard is approximately 12 minutes away.",
      "Property improvements and renovations in Roshnee regularly generate valuable scrap — copper piping, aluminium frames, old geysers, and mixed metals. ARL is the closest professional scrap buyer for most Roshnee residents.",
    ],
    localContext:
      "Roshnee's residential character means the majority of scrap brought in by local sellers relates to home renovations, garden clearances, and appliance disposal. ARL handles all of this — from a few kilograms to a bakkie-load.",
    commonMaterials:
      "Copper piping and wiring, aluminium window and door frames, stainless steel kitchen equipment, and brass plumbing fittings are the most common materials from Roshnee. Old water heaters and geysers — sold for aluminium and copper content — are also frequently traded.",
    faqs: [
      {
        q: "Can I sell my old geyser and plumbing fittings in Roshnee?",
        a: "Yes. Old geysers, copper piping, brass fittings, and aluminium components from plumbing and renovations are all accepted. Bring them in to 74 Fairbanks Street, Vanderbijlpark.",
      },
      {
        q: "How far is ARL from Roshnee?",
        a: "Approximately 12 minutes from Roshnee. We are open Monday–Friday 08:00–17:00 and Saturday 08:00–13:00. No appointment needed.",
      },
      {
        q: "Do you collect from Roshnee?",
        a: "Our primary service is yard-based — you bring your scrap to us. For large commercial volumes, contact us to discuss collection options. Bin collection contracts are available for businesses.",
      },
    ],
  },
  {
    slug: "tshepiso",
    intro: [
      "Tshepiso is a township south of Meyerton in the Midvaal local municipality. ARL's Vanderbijlpark yard is approximately 15 minutes away and serves Tshepiso residents as their nearest formal scrap buying point.",
      "Scrap metal recycling is an important income source for many residents in Tshepiso. ARL provides a consistent, trustworthy outlet — a certified weighbridge, transparent pricing, and same-day payment that makes every trip worthwhile.",
    ],
    localContext:
      "Tshepiso sits within the agricultural and light industrial stretch between Meyerton and the wider Sedibeng area. Scrap from old farm equipment, construction, and residential sources is common in the area.",
    commonMaterials:
      "Copper wiring, aluminium, steel, and mixed non-ferrous scrap are the most common materials brought in by Tshepiso sellers. Cast iron from agricultural and construction equipment is also frequently traded.",
    faqs: [
      {
        q: "Is ARL the closest scrap buyer to Tshepiso?",
        a: "Yes — All Recycling Leaders in Vanderbijlpark is one of the closest formal scrap buyers to Tshepiso, approximately 15 minutes away at 74 Fairbanks Street.",
      },
      {
        q: "Do you buy cast iron and agricultural scrap from the Tshepiso area?",
        a: "Yes. We buy cast iron — engine blocks, agricultural equipment, brake drums — as well as all other grades of ferrous and non-ferrous metals.",
      },
      {
        q: "What are your opening hours for Tshepiso sellers?",
        a: "Monday to Friday 08:00–17:00 and Saturday 08:00–13:00. No appointment needed for walk-in sellers. For large loads, WhatsApp us in advance.",
      },
    ],
  },
  {
    slug: "meyerton",
    intro: [
      "Meyerton is the administrative hub of the Midvaal Local Municipality, situated approximately 20 minutes south of ARL's Vanderbijlpark yard. The town has a mix of agricultural, residential, and light industrial activity that generates a diverse range of scrap metal.",
      "ARL serves Meyerton's scrap sellers, businesses, and light industry as their nearest certified scrap buying point in the Vaal and Sedibeng corridor. Sellers from Meyerton and the surrounding Midvaal area make the trip regularly for our fair prices and same-day payment.",
    ],
    localContext:
      "Meyerton's agricultural hinterland produces cast iron and steel scrap from farm equipment, while the town's light industry and construction activity generates mixed ferrous and non-ferrous material. Residential sellers bring in copper, aluminium, and brass from home improvements.",
    commonMaterials:
      "Cast iron from agricultural equipment, mild steel, copper piping, aluminium, and brass plumbing fittings are the most common materials from the Meyerton area. Old farm implements and equipment are also regularly processed at our yard.",
    faqs: [
      {
        q: "How far is ARL from Meyerton?",
        a: "Approximately 20 minutes from Meyerton town centre. Head north on the R59 towards Vanderbijlpark — we are at 74 Fairbanks Street.",
      },
      {
        q: "Do you buy agricultural scrap from the Meyerton area?",
        a: "Yes. Cast iron, steel from old farming equipment, and mixed agricultural scrap are all accepted. For large loads, WhatsApp us in advance so we can prepare.",
      },
      {
        q: "Is it worth driving from Meyerton to sell scrap?",
        a: "For most materials, yes. Copper, aluminium, and brass in particular carry good value that makes the trip worthwhile. WhatsApp us for a price estimate before you come in.",
      },
    ],
  },
  {
    slug: "walkerville",
    intro: [
      "Walkerville is a small agricultural and residential community between Johannesburg and the Vaal, approximately 25 minutes from ARL's Vanderbijlpark yard. The area has a mix of smallholdings, light industry, and established residential estates.",
      "Sellers from Walkerville and the surrounding Midvaal agricultural belt use ARL as their trusted scrap outlet. We are one of the few certified, community-oriented scrap buyers within reasonable driving distance for this part of Gauteng South.",
    ],
    localContext:
      "Walkerville's smallholding character means scrap often includes old farm equipment, copper irrigation systems, aluminium roofing, and mixed steel from outbuildings. The area's proximity to Gauteng's southern development corridor also generates construction-related scrap.",
    commonMaterials:
      "Copper irrigation piping, aluminium roofing sheets, mild steel from outbuildings and fencing, and cast iron from agricultural equipment are the most common materials from the Walkerville area.",
    faqs: [
      {
        q: "How far is ARL from Walkerville?",
        a: "Approximately 25 minutes from Walkerville. Head south on the R59 towards Vanderbijlpark — we are at 74 Fairbanks Street.",
      },
      {
        q: "Do you buy copper irrigation pipe and aluminium roofing from Walkerville smallholdings?",
        a: "Yes. Copper irrigation systems, aluminium roofing sheets, and agricultural equipment scrap are all accepted. WhatsApp us a photo for a price estimate.",
      },
      {
        q: "Is there a minimum load size for sellers from Walkerville?",
        a: "No strict minimum. However, given the drive from Walkerville, it's worth accumulating a meaningful load before making the trip. WhatsApp us to gauge whether the value justifies the distance.",
      },
    ],
  },
  {
    slug: "zamdela",
    intro: [
      "Zamdela is a township across the Vaal River in Sasolburg, Free State — one of the furthest communities ARL serves, approximately 20 minutes from our Vanderbijlpark yard. Sellers from Zamdela cross into Gauteng regularly to use our yard.",
      "Zamdela sits in the shadow of Sasol's massive industrial complex, and the area generates significant industrial and residential scrap. ARL provides a formal, fair buying point for Zamdela sellers who want a certified weighbridge and same-day payment.",
    ],
    localContext:
      "Zamdela's proximity to Sasolburg's heavy industrial zone means some sellers bring in industrial-grade ferrous scrap alongside residential non-ferrous materials. The community also has an active informal recycling sector.",
    commonMaterials:
      "Steel and iron from industrial sources, copper wiring and cabling, aluminium, and mixed non-ferrous metals are the most common materials sold by Zamdela sellers. Industrial-grade materials are priced at the appropriate commercial grade.",
    faqs: [
      {
        q: "Do you accept sellers from Zamdela and Sasolburg?",
        a: "Yes. We are approximately 20 minutes from Zamdela across the Vaal River. Many Zamdela and Sasolburg sellers use ARL regularly — all are welcome.",
      },
      {
        q: "Can I bring industrial scrap from the Sasolburg area?",
        a: "Yes. Industrial-grade ferrous and non-ferrous scrap is accepted. For large commercial volumes, WhatsApp us in advance so we can prepare the weighbridge.",
      },
      {
        q: "Is ARL open on Saturday for Zamdela sellers?",
        a: "Yes. We are open Saturday 08:00–13:00. Monday to Friday 08:00–17:00. No appointment needed.",
      },
    ],
  },
  {
    slug: "heidelberg",
    intro: [
      "Heidelberg is a town in Gauteng South, approximately 30 minutes east of ARL's Vanderbijlpark yard. It serves as the main commercial centre for the Lesedi Local Municipality and has a mix of light industry, agriculture, and growing residential estates.",
      "Scrap sellers from Heidelberg and the surrounding Lesedi area regularly make the trip to ARL's yard in Vanderbijlpark. The competitive prices, certified weighbridge, and same-day payment make it worthwhile — particularly for copper, aluminium, and brass.",
    ],
    localContext:
      "Heidelberg's light industrial base and agricultural surroundings produce a diverse range of scrap — from engineering off-cuts and copper cabling to farm equipment and construction steel. The town's residential growth also brings renovation-related scrap.",
    commonMaterials:
      "Copper cabling and piping, aluminium, light steel, cast iron, and brass are the primary materials brought in from the Heidelberg area. Agricultural equipment scrap and construction steel from Heidelberg's development corridor are also common.",
    faqs: [
      {
        q: "Is it worth driving from Heidelberg to sell scrap at ARL?",
        a: "For copper, aluminium, and brass — almost certainly yes. These materials carry sufficient value to make the 30-minute drive worthwhile, especially with a decent load. WhatsApp us for a price estimate first.",
      },
      {
        q: "How far is Heidelberg from ARL's Vanderbijlpark yard?",
        a: "Approximately 30 minutes on the N3/R59 route. We are at 74 Fairbanks Street, Vanderbijlpark, Gauteng.",
      },
      {
        q: "Do you buy agricultural and construction scrap from the Heidelberg area?",
        a: "Yes. Cast iron, mild steel, construction scrap, and agricultural equipment are all accepted. For large loads, contact us in advance.",
      },
    ],
  },
  {
    slug: "ratanda",
    intro: [
      "Ratanda is a township adjacent to Heidelberg in the Lesedi Local Municipality. ARL's Vanderbijlpark yard is approximately 30 minutes from Ratanda, and we regularly buy scrap from sellers making the trip along the N3/R59 corridor.",
      "Like many townships in Gauteng South, Ratanda has an active informal recycling network. ARL provides a formal, fair outlet — transparent weighing, market-related prices, and same-day payment — for scrap collected across the community.",
    ],
    localContext:
      "Ratanda is a predominantly residential township with a local recycling economy. Sellers typically bring in copper wiring, aluminium, and mixed non-ferrous materials accumulated over days or weeks before making the trip to Vanderbijlpark.",
    commonMaterials:
      "Copper wire and stripped cable, aluminium cans and profiles, and mixed non-ferrous metals are the most commonly sold materials by Ratanda sellers. Light steel from construction and home improvements is also traded.",
    faqs: [
      {
        q: "How far is Ratanda from ARL's yard?",
        a: "Approximately 30 minutes via Heidelberg and the R59. We are at 74 Fairbanks Street, Vanderbijlpark. Open Monday–Friday 08:00–17:00 and Saturday 08:00–13:00.",
      },
      {
        q: "What's the minimum load worth bringing from Ratanda?",
        a: "Given the drive, we recommend accumulating at least a reasonable load of copper or aluminium before coming in. WhatsApp us on 072 080 0327 for a price estimate to help you decide.",
      },
      {
        q: "Do you weigh accurately for informal sellers from Ratanda?",
        a: "Yes. Our weighbridge is calibrated and certified. Every reading is visible to you — we do not round down or estimate. You are paid for every kilogram.",
      },
    ],
  },
  {
    slug: "orange-farm",
    intro: [
      "Orange Farm is one of Gauteng's largest townships, located south of Johannesburg along the N1. ARL's Vanderbijlpark yard is approximately 35 minutes away, and we are a well-used scrap buying point for sellers making the trip from Orange Farm and the surrounding areas.",
      "The sheer scale of Orange Farm — with hundreds of thousands of residents and an active informal economy — generates significant volumes of scrap metal. ARL provides a certified, community-friendly buying point that makes the trip from Orange Farm worthwhile.",
    ],
    localContext:
      "Orange Farm's informal and residential economy produces a consistent flow of copper wiring, aluminium, and mixed non-ferrous scrap. The area also sits close to several light industrial and logistics facilities that generate commercial scrap.",
    commonMaterials:
      "Copper wiring and stripped cable, aluminium, mixed non-ferrous metals, and light steel are the primary materials from Orange Farm. Scrap from electrical rewiring, aluminium roofing, and household appliances is commonly traded.",
    faqs: [
      {
        q: "Is ARL worth the drive from Orange Farm?",
        a: "For copper and aluminium — yes, particularly with a good load. Our prices are competitive and we pay same-day. WhatsApp us on 072 080 0327 for a price estimate before you come.",
      },
      {
        q: "How do I get from Orange Farm to ARL's yard?",
        a: "Take the N1 south towards Vereeniging, then follow signs to Vanderbijlpark. We're at 74 Fairbanks Street, approximately 35 minutes from Orange Farm.",
      },
      {
        q: "Can I sell copper wiring at ARL from Orange Farm?",
        a: "Yes. We buy all grades of copper — bare bright, #1, #2, and stripped cable. WhatsApp us a photo for a quote before you make the trip.",
      },
    ],
  },
  {
    slug: "ennerdale",
    intro: [
      "Ennerdale is a diverse residential area south of Johannesburg, approximately 40 minutes from ARL's Vanderbijlpark yard. Sellers from Ennerdale and the surrounding south Johannesburg suburbs regularly use our yard as their primary scrap buying point.",
      "Ennerdale's mix of residential estates, smallholdings, and light commercial activity generates a steady flow of non-ferrous and ferrous scrap. ARL is one of the few formal, certified scrap buyers accessible within a reasonable drive for Ennerdale residents.",
    ],
    localContext:
      "Ennerdale's established residential character means that renovation scrap — copper piping, aluminium window frames, brass fittings, and old geysers — is among the most common material sold by local residents. Contractors operating in the area also use ARL for their off-cuts.",
    commonMaterials:
      "Copper piping and wiring, aluminium window frames and gutters, brass plumbing fittings, and light steel are the most commonly sold materials from Ennerdale. Old water heaters and HVAC components are also frequently processed.",
    faqs: [
      {
        q: "How far is ARL from Ennerdale?",
        a: "Approximately 40 minutes via the N1 south. We are at 74 Fairbanks Street, Vanderbijlpark, Gauteng. Open Monday–Friday 08:00–17:00 and Saturday 08:00–13:00.",
      },
      {
        q: "Is it worth driving from Ennerdale to sell copper or aluminium?",
        a: "For a reasonable load of copper — yes, absolutely. Copper is one of the highest-value scrap metals. WhatsApp us for a price estimate so you can calculate whether the load is worth the trip.",
      },
      {
        q: "Do you buy renovation scrap from Ennerdale contractors?",
        a: "Yes. Contractor loads — copper, aluminium, brass, and mixed steel from renovation sites — are welcome. For regular commercial volumes, ask about our bin collection service.",
      },
    ],
  },
  {
    slug: "alrode",
    intro: [
      "Alrode is a major industrial area in Alberton, on the southern edge of Johannesburg's East Rand. It is home to a concentration of manufacturing, engineering, and logistics businesses, approximately 25 minutes from ARL's Vanderbijlpark yard.",
      "Alrode's industrial density makes it one of the most scrap-rich areas in Gauteng South. ARL serves both the commercial operations in Alrode's industrial parks and individual sellers from the surrounding Alberton residential areas.",
    ],
    localContext:
      "Alrode's manufacturing and engineering base produces high-grade ferrous and non-ferrous scrap — steel off-cuts, copper bus-bars, aluminium extrusions, and brass castings are all common. ARL handles commercial volumes with competitive pricing and bulk processing capability.",
    commonMaterials:
      "High-grade steel off-cuts, copper cabling and bus-bars, aluminium extrusions, brass castings, and stainless steel are the primary commercial materials from Alrode's industrial zone. Individual sellers from Alberton typically bring in non-ferrous residential scrap.",
    faqs: [
      {
        q: "Do you buy commercial industrial scrap from Alrode?",
        a: "Yes. We handle high-grade ferrous and non-ferrous commercial scrap from Alrode's industrial businesses. WhatsApp or call us to discuss volumes and pricing for commercial accounts.",
      },
      {
        q: "How far is ARL from Alrode?",
        a: "Approximately 25 minutes from Alrode via the N1/R59 south. We are at 74 Fairbanks Street, Vanderbijlpark.",
      },
      {
        q: "Can Alrode businesses get a bin collection contract with ARL?",
        a: "Yes. If your Alrode business generates regular scrap metal, we can arrange a bin placement and collection contract. Contact us to discuss your volume and schedule.",
      },
    ],
  },
  {
    slug: "nigel",
    intro: [
      "Nigel is an East Rand town with deep roots in South Africa's mining and engineering history. It is the furthest area ARL serves — approximately 45 minutes from our Vanderbijlpark yard — but sellers from Nigel make the trip regularly for our competitive prices and same-day payment.",
      "Nigel's mining heritage and active light industrial base generate a diverse mix of scrap — from heavy engineering steel to non-ferrous metals from the area's manufacturing businesses. For higher-value materials like copper and brass, the drive from Nigel to Vanderbijlpark is well worth it.",
    ],
    localContext:
      "Nigel's economy combines mining-related engineering, agriculture, and light industry. The area produces cast iron, heavy steel, copper cabling, and mixed non-ferrous scrap. Residential sellers from Nigel bring in renovation and household scrap alongside the industrial material.",
    commonMaterials:
      "Cast iron, heavy steel, copper wiring and cabling, aluminium, and brass are the primary materials from the Nigel area. Mining and engineering-related scrap — including heavy-gauge steel and copper bus-bars — is common from the town's industrial operations.",
    faqs: [
      {
        q: "Is it worth driving from Nigel to ARL in Vanderbijlpark?",
        a: "For copper, brass, and aluminium — yes. These high-value materials make the 45-minute drive worthwhile with even a modest load. WhatsApp us for a price estimate first.",
      },
      {
        q: "How far is ARL from Nigel?",
        a: "Approximately 45 minutes via the R29 west and then south on the N1/R59. We are at 74 Fairbanks Street, Vanderbijlpark, Gauteng.",
      },
      {
        q: "Do you buy mining and engineering scrap from the Nigel area?",
        a: "Yes. Cast iron, heavy steel, copper bus-bars, and industrial non-ferrous scrap are all accepted. For large commercial loads, contact us in advance.",
      },
    ],
  },
];
