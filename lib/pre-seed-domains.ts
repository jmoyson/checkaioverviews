// Pre-seed domain configuration
// Budget: $5 @ $0.015/keyword
// Strategy: 55 domains × 6 top keywords = 330 keywords ≈ $4.95

export interface PreSeedDomain {
  domain: string;
  category: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
}

export const preSeedDomains: PreSeedDomain[] = [
  // === SEO Tools & Platforms (25 domains) ===
  { domain: 'ahrefs.com', category: 'SEO Tools', description: 'Leading SEO platform', priority: 'high' },
  { domain: 'semrush.com', category: 'SEO Tools', description: 'All-in-one marketing toolkit', priority: 'high' },
  { domain: 'moz.com', category: 'SEO Tools', description: 'SEO software & data', priority: 'high' },
  { domain: 'backlinko.com', category: 'SEO Content', description: 'Brian Dean\'s SEO blog', priority: 'high' },
  { domain: 'neilpatel.com', category: 'SEO Content', description: 'Digital marketing blog', priority: 'high' },
  { domain: 'searchenginejournal.com', category: 'SEO Content', description: 'SEO news & guides', priority: 'high' },
  { domain: 'searchengineland.com', category: 'SEO Content', description: 'Search marketing news', priority: 'high' },
  { domain: 'seobythesea.com', category: 'SEO Content', description: 'Technical SEO insights', priority: 'medium' },
  { domain: 'seroundtable.com', category: 'SEO Content', description: 'Search news roundup', priority: 'medium' },
  { domain: 'screamingfrog.co.uk', category: 'SEO Tools', description: 'SEO Spider tool', priority: 'medium' },
  { domain: 'yoast.com', category: 'SEO Tools', description: 'WordPress SEO plugin', priority: 'medium' },
  { domain: 'mangools.com', category: 'SEO Tools', description: 'SEO tools suite', priority: 'low' },
  { domain: 'spyfu.com', category: 'SEO Tools', description: 'Competitor analysis', priority: 'low' },
  { domain: 'majestic.com', category: 'SEO Tools', description: 'Link intelligence', priority: 'low' },
  { domain: 'seranking.com', category: 'SEO Tools', description: 'All-in-one SEO platform', priority: 'low' },
  { domain: 'ubersuggest.com', category: 'SEO Tools', description: 'Keyword research tool', priority: 'medium' },
  { domain: 'serpstat.com', category: 'SEO Tools', description: 'SEO platform', priority: 'low' },
  { domain: 'gtmetrix.com', category: 'SEO Tools', description: 'Site speed analysis', priority: 'low' },
  { domain: 'pingdom.com', category: 'SEO Tools', description: 'Website monitoring', priority: 'low' },
  { domain: 'sitebulb.com', category: 'SEO Tools', description: 'Website auditing', priority: 'low' },
  { domain: 'deepcrawl.com', category: 'SEO Tools', description: 'Technical SEO platform', priority: 'low' },
  { domain: 'brightlocal.com', category: 'SEO Tools', description: 'Local SEO tools', priority: 'low' },
  { domain: 'whitespark.ca', category: 'SEO Tools', description: 'Local SEO services', priority: 'low' },
  { domain: 'rankmath.com', category: 'SEO Tools', description: 'WordPress SEO plugin', priority: 'low' },
  { domain: 'answerthepublic.com', category: 'SEO Tools', description: 'Question research tool', priority: 'medium' },

  // === Indie Hackers & Makers (15 domains) ===
  { domain: 'indiehackers.com', category: 'Indie Makers', description: 'Indie hacker community', priority: 'high' },
  { domain: 'levels.io', category: 'Indie Makers', description: 'Pieter Levels\' projects', priority: 'high' },
  { domain: 'marc.io', category: 'Indie Makers', description: 'Marc Lou\'s site', priority: 'high' },
  { domain: 'dannypostma.com', category: 'Indie Makers', description: 'Danny Postma portfolio', priority: 'medium' },
  { domain: 'tibo.io', category: 'Indie Makers', description: 'Tibo\'s projects', priority: 'medium' },
  { domain: 'jonbeller.com', category: 'Indie Makers', description: 'Jon Beller\'s site', priority: 'low' },
  { domain: 'anthonyhobday.com', category: 'Indie Makers', description: 'Design maker', priority: 'low' },
  { domain: 'chasemccoy.net', category: 'Indie Makers', description: 'Design engineer', priority: 'low' },
  { domain: 'patio11.com', category: 'Indie Makers', description: 'Patrick McKenzie\'s blog', priority: 'medium' },
  { domain: 'simonpan.com', category: 'Indie Makers', description: 'Simon Pan portfolio', priority: 'low' },
  { domain: 'anthilemoon.com', category: 'Indie Makers', description: 'Anne-Laure Le Cunff\'s site', priority: 'medium' },
  { domain: 'kevinyien.com', category: 'Indie Makers', description: 'Kevin Yien portfolio', priority: 'low' },
  { domain: 'microacquire.com', category: 'Indie Makers', description: 'Startup acquisition marketplace', priority: 'low' },
  { domain: 'makerlog.com', category: 'Indie Makers', description: 'Maker community platform', priority: 'low' },
  { domain: 'makermag.com', category: 'Indie Makers', description: 'Maker magazine', priority: 'low' },

  // === SaaS & Tech News (20 domains) ===
  { domain: 'techcrunch.com', category: 'Tech News', description: 'Tech industry news', priority: 'high' },
  { domain: 'producthunt.com', category: 'Tech News', description: 'Product discovery', priority: 'high' },
  { domain: 'theverge.com', category: 'Tech News', description: 'Technology news', priority: 'medium' },
  { domain: 'venturebeat.com', category: 'Tech News', description: 'Tech journalism', priority: 'medium' },
  { domain: 'thenextweb.com', category: 'Tech News', description: 'Tech & culture', priority: 'low' },
  { domain: 'wired.com', category: 'Tech News', description: 'Technology magazine', priority: 'medium' },
  { domain: 'arstechnica.com', category: 'Tech News', description: 'Tech news & analysis', priority: 'low' },
  { domain: 'engadget.com', category: 'Tech News', description: 'Consumer electronics news', priority: 'medium' },
  { domain: 'gizmodo.com', category: 'Tech News', description: 'Technology & science news', priority: 'low' },
  { domain: 'mashable.com', category: 'Tech News', description: 'Digital culture & tech', priority: 'medium' },
  { domain: 'recode.net', category: 'Tech News', description: 'Tech business news', priority: 'low' },
  { domain: 'protocol.com', category: 'Tech News', description: 'Tech industry news', priority: 'low' },
  { domain: 'techradar.com', category: 'Tech News', description: 'Tech news & reviews', priority: 'low' },
  { domain: 'zdnet.com', category: 'Tech News', description: 'Business technology news', priority: 'medium' },
  { domain: 'toms hardware.com', category: 'Tech News', description: 'Hardware news & reviews', priority: 'low' },
  { domain: 'anandtech.com', category: 'Tech News', description: 'Hardware analysis', priority: 'low' },
  { domain: 'slashdot.org', category: 'Tech News', description: 'Tech news aggregator', priority: 'low' },
  { domain: 'hackernews.com', category: 'Tech News', description: 'Tech news community', priority: 'medium' },
  { domain: 'techmeme.com', category: 'Tech News', description: 'Tech news aggregator', priority: 'low' },
  { domain: 'reddit.com/r/technology', category: 'Tech News', description: 'Technology subreddit', priority: 'low' },

  // === Marketing & Growth (20 domains) ===
  { domain: 'hubspot.com', category: 'Marketing', description: 'Inbound marketing platform', priority: 'high' },
  { domain: 'buffer.com', category: 'Marketing', description: 'Social media management', priority: 'medium' },
  { domain: 'mailchimp.com', category: 'Marketing', description: 'Email marketing platform', priority: 'medium' },
  { domain: 'contentmarketinginstitute.com', category: 'Marketing', description: 'Content marketing education', priority: 'medium' },
  { domain: 'copyblogger.com', category: 'Marketing', description: 'Content marketing advice', priority: 'low' },
  { domain: 'growthhackers.com', category: 'Marketing', description: 'Growth marketing community', priority: 'low' },
  { domain: 'marketingprofs.com', category: 'Marketing', description: 'Marketing training', priority: 'low' },
  { domain: 'socialmediaexaminer.com', category: 'Marketing', description: 'Social media marketing', priority: 'medium' },
  { domain: 'sproutsocial.com', category: 'Marketing', description: 'Social media management', priority: 'medium' },
  { domain: 'hootsuite.com', category: 'Marketing', description: 'Social media platform', priority: 'medium' },
  { domain: 'later.com', category: 'Marketing', description: 'Social media scheduler', priority: 'low' },
  { domain: 'canva.com', category: 'Marketing', description: 'Design platform', priority: 'high' },
  { domain: 'convertkit.com', category: 'Marketing', description: 'Email marketing for creators', priority: 'low' },
  { domain: 'activecampaign.com', category: 'Marketing', description: 'Marketing automation', priority: 'low' },
  { domain: 'drip.com', category: 'Marketing', description: 'E-commerce marketing automation', priority: 'low' },
  { domain: 'customerio.com', category: 'Marketing', description: 'Marketing automation platform', priority: 'low' },
  { domain: 'optimizely.com', category: 'Marketing', description: 'A/B testing platform', priority: 'low' },
  { domain: 'unbounce.com', category: 'Marketing', description: 'Landing page builder', priority: 'low' },
  { domain: 'instapage.com', category: 'Marketing', description: 'Landing page platform', priority: 'low' },
  { domain: 'wordstream.com', category: 'Marketing', description: 'PPC & marketing advice', priority: 'medium' },

  // === Health & Fitness (30 domains) ===
  { domain: 'healthline.com', category: 'Health', description: 'Health information site', priority: 'high' },
  { domain: 'webmd.com', category: 'Health', description: 'Medical information', priority: 'high' },
  { domain: 'mayoclinic.org', category: 'Health', description: 'Medical clinic & research', priority: 'high' },
  { domain: 'medicalnewstoday.com', category: 'Health', description: 'Medical news', priority: 'medium' },
  { domain: 'verywellhealth.com', category: 'Health', description: 'Health & wellness', priority: 'medium' },
  { domain: 'everydayhealth.com', category: 'Health', description: 'Health advice', priority: 'low' },
  { domain: 'health.com', category: 'Health', description: 'Health & wellness magazine', priority: 'low' },
  { domain: 'clevelandclinic.org', category: 'Health', description: 'Medical center & health info', priority: 'high' },
  { domain: 'nih.gov', category: 'Health', description: 'National Institutes of Health', priority: 'high' },
  { domain: 'cdc.gov', category: 'Health', description: 'Centers for Disease Control', priority: 'high' },
  { domain: 'drugs.com', category: 'Health', description: 'Drug information database', priority: 'medium' },
  { domain: 'rxlist.com', category: 'Health', description: 'Medication information', priority: 'medium' },
  { domain: 'medlineplus.gov', category: 'Health', description: 'Health information from NIH', priority: 'medium' },
  { domain: 'verywellfit.com', category: 'Health', description: 'Fitness & nutrition', priority: 'medium' },
  { domain: 'verywellmind.com', category: 'Health', description: 'Mental health info', priority: 'medium' },
  { domain: 'psychologytoday.com', category: 'Health', description: 'Psychology & mental health', priority: 'high' },
  { domain: 'prevention.com', category: 'Health', description: 'Health & prevention tips', priority: 'low' },
  { domain: 'menshealth.com', category: 'Health', description: 'Men\'s health magazine', priority: 'low' },
  { domain: 'womenshealthmag.com', category: 'Health', description: 'Women\'s health magazine', priority: 'low' },
  { domain: 'shape.com', category: 'Health', description: 'Fitness & health', priority: 'low' },
  { domain: 'self.com', category: 'Health', description: 'Wellness & fitness', priority: 'low' },
  { domain: 'myfitnesspal.com', category: 'Health', description: 'Fitness & nutrition tracking', priority: 'medium' },
  { domain: 'fitbit.com', category: 'Health', description: 'Fitness tracking platform', priority: 'low' },
  { domain: 'livestrong.com', category: 'Health', description: 'Health & fitness advice', priority: 'low' },
  { domain: 'healthgrades.com', category: 'Health', description: 'Doctor & hospital reviews', priority: 'medium' },
  { domain: 'zocdoc.com', category: 'Health', description: 'Find & book doctors', priority: 'low' },
  { domain: 'goodrx.com', category: 'Health', description: 'Prescription price comparison', priority: 'medium' },
  { domain: 'nutritiondata.self.com', category: 'Health', description: 'Nutrition information', priority: 'low' },
  { domain: 'eatthis.com', category: 'Health', description: 'Nutrition & diet tips', priority: 'low' },
  { domain: 'draxe.com', category: 'Health', description: 'Natural health & wellness', priority: 'low' },

  // === Personal Finance (25 domains) ===
  { domain: 'nerdwallet.com', category: 'Finance', description: 'Personal finance advice', priority: 'high' },
  { domain: 'investopedia.com', category: 'Finance', description: 'Financial education', priority: 'high' },
  { domain: 'bankrate.com', category: 'Finance', description: 'Financial rates & advice', priority: 'medium' },
  { domain: 'fool.com', category: 'Finance', description: 'Investment advice (Motley Fool)', priority: 'medium' },
  { domain: 'creditkarma.com', category: 'Finance', description: 'Credit & finance tools', priority: 'low' },
  { domain: 'mint.com', category: 'Finance', description: 'Personal finance app', priority: 'low' },
  { domain: 'thebalancemoney.com', category: 'Finance', description: 'Personal finance advice', priority: 'high' },
  { domain: 'creditcards.com', category: 'Finance', description: 'Credit card comparison', priority: 'medium' },
  { domain: 'forbes.com/advisor', category: 'Finance', description: 'Financial product reviews', priority: 'high' },
  { domain: 'moneyunder30.com', category: 'Finance', description: 'Finance for young adults', priority: 'low' },
  { domain: 'daveramsey.com', category: 'Finance', description: 'Debt-free living advice', priority: 'medium' },
  { domain: 'mrmoneymustache.com', category: 'Finance', description: 'Financial independence blog', priority: 'low' },
  { domain: 'financialsamurai.com', category: 'Finance', description: 'Personal finance blog', priority: 'low' },
  { domain: 'budgetsaresexy.com', category: 'Finance', description: 'Budget & finance blog', priority: 'low' },
  { domain: 'choosetosave.org', category: 'Finance', description: 'Financial literacy', priority: 'low' },
  { domain: 'smartaboutmoney.org', category: 'Finance', description: 'Financial education', priority: 'low' },
  { domain: 'lendingtree.com', category: 'Finance', description: 'Loan comparison marketplace', priority: 'medium' },
  { domain: 'sofi.com', category: 'Finance', description: 'Personal finance company', priority: 'low' },
  { domain: 'betterment.com', category: 'Finance', description: 'Automated investing', priority: 'low' },
  { domain: 'wealthfront.com', category: 'Finance', description: 'Automated investing platform', priority: 'low' },
  { domain: 'personalcapital.com', category: 'Finance', description: 'Wealth management tools', priority: 'low' },
  { domain: 'morningstar.com', category: 'Finance', description: 'Investment research', priority: 'medium' },
  { domain: 'seeking alpha.com', category: 'Finance', description: 'Investment analysis', priority: 'medium' },
  { domain: 'yahoo.com/finance', category: 'Finance', description: 'Financial news & data', priority: 'medium' },
  { domain: 'marketwatch.com', category: 'Finance', description: 'Financial news', priority: 'medium' },

  // === E-commerce & Reviews (20 domains) ===
  { domain: 'wirecutter.com', category: 'Reviews', description: 'Product reviews (NYT)', priority: 'high' },
  { domain: 'consumerreports.org', category: 'Reviews', description: 'Product testing', priority: 'medium' },
  { domain: 'pcmag.com', category: 'Reviews', description: 'Tech product reviews', priority: 'medium' },
  { domain: 'cnet.com', category: 'Reviews', description: 'Tech news & reviews', priority: 'medium' },
  { domain: 'tomsguide.com', category: 'Reviews', description: 'Product guides & reviews', priority: 'low' },
  { domain: 'rtings.com', category: 'Reviews', description: 'In-depth product testing', priority: 'medium' },
  { domain: 'thespruce.com', category: 'Reviews', description: 'Home & lifestyle advice', priority: 'low' },
  { domain: 'goodhousekeeping.com', category: 'Reviews', description: 'Product testing & reviews', priority: 'low' },
  { domain: 'nytimes.com/wirecutter', category: 'Reviews', description: 'NYT product recommendations', priority: 'high' },
  { domain: 'businessinsider.com/reviews', category: 'Reviews', description: 'Product reviews & deals', priority: 'medium' },
  { domain: 'techgearlab.com', category: 'Reviews', description: 'Gear testing & reviews', priority: 'low' },
  { domain: 'outdoorgearlab.com', category: 'Reviews', description: 'Outdoor gear reviews', priority: 'low' },
  { domain: 'laptopmag.com', category: 'Reviews', description: 'Laptop reviews & news', priority: 'low' },
  { domain: 'notebookcheck.net', category: 'Reviews', description: 'Laptop & mobile reviews', priority: 'low' },
  { domain: 'headphonesty.com', category: 'Reviews', description: 'Headphone reviews', priority: 'low' },
  { domain: 'soundguys.com', category: 'Reviews', description: 'Audio product reviews', priority: 'low' },
  { domain: 'dpreview.com', category: 'Reviews', description: 'Camera reviews', priority: 'low' },
  { domain: 'camerajabber.com', category: 'Reviews', description: 'Camera reviews & news', priority: 'low' },
  { domain: 'reviewed.com', category: 'Reviews', description: 'Appliance & product reviews', priority: 'medium' },
  { domain: 'bestproducts.com', category: 'Reviews', description: 'Product recommendations', priority: 'low' },

  // === Education & How-To (25 domains) ===
  { domain: 'wikihow.com', category: 'How-To', description: 'How-to guides', priority: 'high' },
  { domain: 'instructables.com', category: 'How-To', description: 'DIY projects', priority: 'medium' },
  { domain: 'lifehacker.com', category: 'How-To', description: 'Life tips & hacks', priority: 'medium' },
  { domain: 'makeuseof.com', category: 'How-To', description: 'Tech tutorials', priority: 'low' },
  { domain: 'digitaltrends.com', category: 'How-To', description: 'Tech guides & news', priority: 'low' },
  { domain: 'howtogeek.com', category: 'How-To', description: 'Tech how-to guides', priority: 'high' },
  { domain: 'techadvisor.com', category: 'How-To', description: 'Tech advice & tutorials', priority: 'low' },
  { domain: 'pcworld.com', category: 'How-To', description: 'PC guides & reviews', priority: 'medium' },
  { domain: 'macworld.com', category: 'How-To', description: 'Mac tips & tutorials', priority: 'medium' },
  { domain: 'ifixit.com', category: 'How-To', description: 'Repair guides & teardowns', priority: 'medium' },
  { domain: 'dummies.com', category: 'How-To', description: 'For Dummies tutorials', priority: 'medium' },
  { domain: 'familyhandyman.com', category: 'How-To', description: 'Home improvement DIY', priority: 'medium' },
  { domain: 'thisoldhouse.com', category: 'How-To', description: 'Home renovation guides', priority: 'medium' },
  { domain: 'finegardening.com', category: 'How-To', description: 'Gardening how-to', priority: 'low' },
  { domain: 'gardenersworld.com', category: 'How-To', description: 'Gardening advice', priority: 'low' },
  { domain: 'apartmenttherapy.com', category: 'How-To', description: 'Home decor & DIY', priority: 'low' },
  { domain: 'bobvila.com', category: 'How-To', description: 'Home improvement guides', priority: 'low' },
  { domain: 'lowes.com/how-to', category: 'How-To', description: 'DIY home improvement', priority: 'low' },
  { domain: 'homedepot.com/how-to', category: 'How-To', description: 'Home improvement tutorials', priority: 'low' },
  { domain: 'diynetwork.com', category: 'How-To', description: 'DIY home projects', priority: 'low' },
  { domain: 'todayshomeowner.com', category: 'How-To', description: 'Home maintenance guides', priority: 'low' },
  { domain: 'popularmechanics.com', category: 'How-To', description: 'DIY & mechanics', priority: 'medium' },
  { domain: 'populardiy.com', category: 'How-To', description: 'DIY projects & guides', priority: 'low' },
  { domain: 'doityourself.com', category: 'How-To', description: 'DIY community & guides', priority: 'low' },
  { domain: 'thesprucecrafts.com', category: 'How-To', description: 'Crafts & DIY tutorials', priority: 'low' },

  // === Food & Recipe Sites (15 domains) ===
  { domain: 'allrecipes.com', category: 'Food', description: 'Recipe database', priority: 'high' },
  { domain: 'foodnetwork.com', category: 'Food', description: 'Recipes & cooking shows', priority: 'high' },
  { domain: 'seriouseats.com', category: 'Food', description: 'Food science & recipes', priority: 'high' },
  { domain: 'bonappetit.com', category: 'Food', description: 'Food magazine & recipes', priority: 'medium' },
  { domain: 'epicurious.com', category: 'Food', description: 'Recipe collection', priority: 'medium' },
  { domain: 'tasty.co', category: 'Food', description: 'Quick recipe videos', priority: 'high' },
  { domain: 'delish.com', category: 'Food', description: 'Recipes & cooking tips', priority: 'medium' },
  { domain: 'thekitchn.com', category: 'Food', description: 'Cooking tips & recipes', priority: 'medium' },
  { domain: 'simplyrecipes.com', category: 'Food', description: 'Family recipes', priority: 'medium' },
  { domain: 'budgetbytes.com', category: 'Food', description: 'Budget-friendly recipes', priority: 'low' },
  { domain: 'minimalistbaker.com', category: 'Food', description: 'Simple recipes', priority: 'low' },
  { domain: 'cookinglight.com', category: 'Food', description: 'Healthy recipes', priority: 'low' },
  { domain: 'eatingwell.com', category: 'Food', description: 'Healthy eating recipes', priority: 'medium' },
  { domain: 'tastingtable.com', category: 'Food', description: 'Food culture & recipes', priority: 'low' },
  { domain: 'food52.com', category: 'Food', description: 'Community recipes', priority: 'low' },

  // === Travel (15 domains) ===
  { domain: 'lonelyplanet.com', category: 'Travel', description: 'Travel guides', priority: 'high' },
  { domain: 'tripadvisor.com', category: 'Travel', description: 'Travel reviews & booking', priority: 'high' },
  { domain: 'nomadicmatt.com', category: 'Travel', description: 'Budget travel blog', priority: 'medium' },
  { domain: 'travelocity.com', category: 'Travel', description: 'Travel booking site', priority: 'low' },
  { domain: 'kayak.com', category: 'Travel', description: 'Travel search engine', priority: 'medium' },
  { domain: 'expedia.com', category: 'Travel', description: 'Travel booking platform', priority: 'medium' },
  { domain: 'skyscanner.com', category: 'Travel', description: 'Flight comparison', priority: 'medium' },
  { domain: 'airfarewatchdog.com', category: 'Travel', description: 'Flight deal alerts', priority: 'low' },
  { domain: 'thepointsguy.com', category: 'Travel', description: 'Travel rewards & tips', priority: 'high' },
  { domain: 'afar.com', category: 'Travel', description: 'Travel inspiration', priority: 'low' },
  { domain: 'cntraveler.com', category: 'Travel', description: 'Luxury travel magazine', priority: 'medium' },
  { domain: 'travelandleisure.com', category: 'Travel', description: 'Travel magazine', priority: 'medium' },
  { domain: 'fodors.com', category: 'Travel', description: 'Travel guides & tips', priority: 'low' },
  { domain: 'frommers.com', category: 'Travel', description: 'Travel guides', priority: 'low' },
  { domain: 'ricksteves.com', category: 'Travel', description: 'European travel guides', priority: 'low' },

  // === Technology & Gadgets (15 domains) ===
  { domain: 'macrumors.com', category: 'Technology', description: 'Apple news & rumors', priority: 'medium' },
  { domain: '9to5mac.com', category: 'Technology', description: 'Apple news site', priority: 'medium' },
  { domain: 'android authority.com', category: 'Technology', description: 'Android news & reviews', priority: 'medium' },
  { domain: 'androidcentral.com', category: 'Technology', description: 'Android news & guides', priority: 'low' },
  { domain: 'xda-developers.com', category: 'Technology', description: 'Mobile development & news', priority: 'low' },
  { domain: 'gsmarena.com', category: 'Technology', description: 'Phone specifications', priority: 'medium' },
  { domain: 'phonearena.com', category: 'Technology', description: 'Phone news & reviews', priority: 'low' },
  { domain: 'laptopmag.com', category: 'Technology', description: 'Laptop reviews', priority: 'low' },
  { domain: 'digitalcameraworld.com', category: 'Technology', description: 'Camera news & reviews', priority: 'low' },
  { domain: 'petapixel.com', category: 'Technology', description: 'Photography news', priority: 'low' },
  { domain: 'imore.com', category: 'Technology', description: 'iPhone & iPad news', priority: 'low' },
  { domain: 'windowscentral.com', category: 'Technology', description: 'Windows news & guides', priority: 'low' },
  { domain: 'howtogeek.com/reviews', category: 'Technology', description: 'Tech product reviews', priority: 'medium' },
  { domain: 'theverge.com/reviews', category: 'Technology', description: 'Tech product reviews', priority: 'high' },
  { domain: 'techhive.com', category: 'Technology', description: 'Smart home tech', priority: 'low' },

  // === Software & Apps (10 domains) ===
  { domain: 'capterra.com', category: 'Software', description: 'Software reviews', priority: 'high' },
  { domain: 'g2.com', category: 'Software', description: 'Software reviews platform', priority: 'high' },
  { domain: 'getapp.com', category: 'Software', description: 'Software discovery', priority: 'medium' },
  { domain: 'softwareadvice.com', category: 'Software', description: 'Software recommendations', priority: 'medium' },
  { domain: 'trustradius.com', category: 'Software', description: 'B2B software reviews', priority: 'low' },
  { domain: 'appsumo.com', category: 'Software', description: 'Software deals', priority: 'low' },
  { domain: 'alternativeto.net', category: 'Software', description: 'Software alternatives', priority: 'medium' },
  { domain: 'slant.co', category: 'Software', description: 'Software recommendations', priority: 'low' },
  { domain: 'sourceforge.net', category: 'Software', description: 'Open source software', priority: 'low' },
  { domain: 'softonic.com', category: 'Software', description: 'Software downloads', priority: 'low' },
];

// Category configuration
export interface CategoryConfig {
  name: string;
  description: string;
  expectedImpact: 'high' | 'medium' | 'low';
}

export const categories: Record<string, CategoryConfig> = {
  'Health': {
    name: 'Health & Fitness',
    description: 'Medical information and health advice sites',
    expectedImpact: 'high',
  },
  'Finance': {
    name: 'Personal Finance',
    description: 'Financial advice and investment information',
    expectedImpact: 'high',
  },
  'How-To': {
    name: 'How-To Content',
    description: 'Instructional guides and tutorials',
    expectedImpact: 'high',
  },
  'SEO Tools': {
    name: 'SEO Tools & Software',
    description: 'SEO platforms and analysis tools',
    expectedImpact: 'medium',
  },
  'SEO Content': {
    name: 'SEO Content & Blogs',
    description: 'SEO news, guides, and educational content',
    expectedImpact: 'medium',
  },
  'Marketing': {
    name: 'Marketing & Growth',
    description: 'Marketing platforms and educational content',
    expectedImpact: 'medium',
  },
  'Tech News': {
    name: 'Tech News & Media',
    description: 'Technology journalism and news sites',
    expectedImpact: 'low',
  },
  'Indie Makers': {
    name: 'Indie Hackers & Makers',
    description: 'Independent creator and maker portfolios',
    expectedImpact: 'low',
  },
  'Reviews': {
    name: 'Product Reviews',
    description: 'Product comparison and review sites',
    expectedImpact: 'medium',
  },
  'Food': {
    name: 'Food & Recipes',
    description: 'Recipe sites and cooking guides',
    expectedImpact: 'high',
  },
  'Travel': {
    name: 'Travel & Tourism',
    description: 'Travel guides and booking platforms',
    expectedImpact: 'medium',
  },
  'Technology': {
    name: 'Technology & Gadgets',
    description: 'Consumer technology news and reviews',
    expectedImpact: 'medium',
  },
  'Software': {
    name: 'Software & Apps',
    description: 'Software reviews and discovery platforms',
    expectedImpact: 'medium',
  },
};

// Budget configuration
export const budgetConfig = {
  maxBudget: 5.00,
  costPerDomain: 0.015, // Per domain, includes ~50 keywords!
  maxDomains: 333, // $5 / $0.015
  domainsToScan: 200, // Let's scan 200 domains
  keywordsPerDomain: 50, // DataForSEO returns top 50 keywords per domain
  totalKeywords: 10000, // 200 × 50
  estimatedCost: 3.00, // 200 × $0.015 (leaving $2 buffer)
};

// Get domains by priority
export function getDomainsByPriority(priority: 'high' | 'medium' | 'low'): PreSeedDomain[] {
  return preSeedDomains.filter(d => d.priority === priority);
}

// Get domains by category
export function getDomainsByCategory(category: string): PreSeedDomain[] {
  return preSeedDomains.filter(d => d.category === category);
}

// Get all unique categories
export function getAllCategories(): string[] {
  return Array.from(new Set(preSeedDomains.map(d => d.category)));
}

// Get scan list (respecting budget)
export function getDomainsToScan(limit: number = budgetConfig.domainsToScan): PreSeedDomain[] {
  // Prioritize: all high, then medium, then low until limit
  const high = getDomainsByPriority('high');
  const medium = getDomainsByPriority('medium');
  const low = getDomainsByPriority('low');

  return [...high, ...medium, ...low].slice(0, limit);
}
