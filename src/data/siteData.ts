export const siteConfig = {
  name: 'Patrick Henigan',
  business: 'Valor Insurance Group',
  agency: 'Direct Insurance Services',
  phone: '303-994-7814',
  phoneHref: 'tel:+13039947814',
  email: 'patrick@valorinsurancegrp.com',
  emailHref: 'mailto:patrick@valorinsurancegrp.com',
  site: 'https://patrickhenigan.com',
  tagline: 'Veteran Owned & Operated',
  statesCount: 27,
};

export const socialLinks = {
  facebook: 'https://www.facebook.com/patrick.henigan',
  instagram: 'https://www.instagram.com/patrickhenigan/',
  youtube1: 'https://www.youtube.com/@InsuranceinColorado',
  youtube2: 'https://www.youtube.com/@insurancewithpatrick',
  tiktok: 'https://www.tiktok.com/@insurance.in.colorado',
};

export const quoteLinks = {
  personal: 'https://quoteforms.app/direct-insurance-services-llc/forms/a0d430a0-8944-4589-9552-349e78539d7c/respond',
  commercial: 'https://directinsservices.com/business-insurance-quote/?choose_agent=phenigan@directinsservices.com',
  life: '#', // TBD
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about/' },
  { label: 'Personal Insurance', href: '/personal-insurance/' },
  { label: 'Commercial Insurance', href: '/commercial-insurance/' },
  { label: 'Life Insurance', href: '/life-insurance/' },
  { label: 'Service Areas', href: '/locations/' },
  { label: 'Media', href: '/media/' },
  { label: 'Contact', href: '/contact/' },
];

export const testimonials = [
  {
    name: 'Flo Evans',
    stars: 5,
    text: 'I had the pleasure of working with Patrick Henigan. He was so knowledgeable, kind, and speedy with any request. The whole experience was outstanding. We teamed up with Patrick just for homeowners insurance and now have all our coverage with him.',
  },
  {
    name: 'Celina Phillips',
    stars: 5,
    text: "I have been working with Patrick Henigan and Mike Spence for years and will never leave! When an insurance company is giving me the runaround, they always step up and step in to help! They really are the good guys.",
  },
  {
    name: 'Jamie Hodges',
    stars: 5,
    text: "Patrick is amazing. He was able to get us better coverage and save us money. Whether you're in the market for insurance or not, I'd reach out to Patrick to see how he can help. You won't be disappointed.",
  },
  {
    name: 'Joy Brinegar',
    stars: 5,
    text: "I worked with Patrick for both my home and auto insurance. He found substantially lower rates than what I was already paying and even 'beefed' up the policies a little. He responds very quickly to phone calls and emails.",
  },
  {
    name: 'Scott Meine',
    stars: 5,
    text: "Patrick was great. He really took the time to assess my family's needs and create some options that made sense for us. Awesome experience!",
  },
  {
    name: 'David Garcia',
    stars: 5,
    text: "Patrick was great to work with. He did some good digging and found us a great offer. He was thorough and very responsive to any questions we had. Highly recommended.",
  },
];

export const coveredStates = [
  'WA', 'OR', 'ID', 'MT', 'WY', 'UT', 'NV', 'AZ', 'CO',
  'SD', 'MN', 'IA', 'MO', 'OK', 'TX', 'WI', 'IL',
  'MI', 'OH', 'TN', 'GA', 'SC', 'NC', 'VA', 'PA', 'NJ', 'MD',
];

export const personalInsuranceTypes = [
  { name: 'Homeowners', icon: 'home', description: 'Protect your biggest investment with coverage tailored to your home and belongings.' },
  { name: 'Auto', icon: 'car', description: 'Get the right coverage for your vehicles without overpaying.' },
  { name: 'Condo', icon: 'building', description: 'Coverage designed specifically for condo owners and their unique needs.' },
  { name: 'Renters', icon: 'key', description: "Protect your personal property even if you don't own the building." },
  { name: 'Motorcycle', icon: 'motorcycle', description: 'Specialized coverage for your bike, whether it\'s your daily ride or weekend escape.' },
  { name: 'Boat & Watercraft', icon: 'anchor', description: 'Coverage for your boat, jet ski, or other watercraft.' },
  { name: 'Recreational Vehicle', icon: 'rv', description: 'Hit the road with confidence knowing your RV is properly covered.' },
  { name: 'Flood', icon: 'water', description: "Standard policies don't cover floods. We'll make sure you're protected." },
  { name: 'High Net Worth', icon: 'shield', description: 'Specialized coverage for high-value homes, collections, and assets.' },
  { name: 'Umbrella / Excess', icon: 'umbrella', description: 'Extra liability protection that goes beyond your other policies.' },
  { name: 'Course of Construction', icon: 'construction', description: 'Coverage for your property while it\'s being built or renovated.' },
];

export const commercialInsuranceTypes = [
  { name: 'Commercial Auto', icon: 'truck', description: 'Coverage for your business vehicles and fleet.' },
  { name: 'General Liability', icon: 'shield', description: 'Protect your business from third-party claims of injury or damage.' },
  { name: 'Workers Compensation', icon: 'users', description: "Take care of your employees if they're injured on the job." },
  { name: 'Commercial Property', icon: 'building', description: 'Protect your business property, equipment, and inventory.' },
  { name: 'Professional Liability', icon: 'briefcase', description: 'Coverage for errors, omissions, and professional mistakes.' },
  { name: 'Commercial Umbrella', icon: 'umbrella', description: 'Extra liability coverage that extends beyond your other business policies.' },
];
