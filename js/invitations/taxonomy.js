/**
 * Bubbli Invitation Studio 2.0 - Event Taxonomy
 * Curated cultural & international event classification.
 * Organized around 10 distinct, popular occasions matching user intent.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliTaxonomy = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 10 Popular Event Categories (Mobile-First Intent)
  const CATEGORIES = [
    {
      id: 'wedding',
      name: 'Weddings & Pre-Wedding',
      shortName: 'Wedding',
      icon: '💍',
      tagline: 'Sacred ceremonies, receptions, and pre-wedding celebrations',
      color: '#c2410c'
    },
    {
      id: 'birthday',
      name: 'Birthdays & Milestones',
      shortName: 'Birthday',
      icon: '🎂',
      tagline: 'First birthdays, kids theme parties, and milestone celebrations',
      color: '#7c3aed'
    },
    {
      id: 'anniversary',
      name: 'Anniversaries & Vows',
      shortName: 'Anniversary',
      icon: '🥂',
      tagline: 'Silver, golden, and romantic milestone wedding anniversaries',
      color: '#e11d48'
    },
    {
      id: 'housewarming',
      name: 'Housewarming & Home Blessings',
      shortName: 'Housewarming',
      icon: '🏡',
      tagline: 'Griha Pravesh, Vastu pooja, and new home celebrations',
      color: '#059669'
    },
    {
      id: 'baby-shower',
      name: 'Baby Showers & Maternity',
      shortName: 'Baby Shower',
      icon: '🍼',
      tagline: 'Godh Bharai, Valaikappu, and sweet maternity celebrations',
      color: '#db2777'
    },
    {
      id: 'naming-ceremony',
      name: 'Naming & Cradle Ceremonies',
      shortName: 'Naming Ceremony',
      icon: '👶',
      tagline: 'Vedic Namakaran, Thottil cradle, and newborn blessings',
      color: '#0284c7'
    },
    {
      id: 'engagement',
      name: 'Engagement & Roka',
      shortName: 'Engagement',
      icon: '💎',
      tagline: 'Ring ceremonies, Roka, and formal family betrothals',
      color: '#4f46e5'
    },
    {
      id: 'festivals',
      name: 'Festivals & Holy Celebrations',
      shortName: 'Festivals',
      icon: '🪔',
      tagline: 'Diwali, Christmas, Eid, Navratri, Ganesh Chaturthi, and festive feasts',
      color: '#d97706'
    },
    {
      id: 'corporate',
      name: 'Corporate & Business Events',
      shortName: 'Corporate',
      icon: '💼',
      tagline: 'Product launches, grand store openings, gala dinners, and keynotes',
      color: '#0369a1'
    },
    {
      id: 'other-occasions',
      name: 'Parties & Social Occasions',
      shortName: 'Other Occasions',
      icon: '✨',
      tagline: 'Cocktail soirées, dinner parties, summer pool parties, and custom events',
      color: '#9333ea'
    }
  ];

  // Legacy Category ID Aliases for backward compatibility
  const CATEGORY_ALIASES = {
    'wedding-indian': 'wedding',
    'birthday-milestone': 'birthday',
    'family-home': 'housewarming',
    'religious-cultural': 'festivals',
    'corporate-social': 'corporate',
    'parties-gatherings': 'other-occasions'
  };

  const EVENT_TYPES = [
    // ----------------------------------------------------
    // 1. WEDDING
    // ----------------------------------------------------
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      category: 'wedding',
      icon: '💍',
      tagline: 'Celebrate the union of two souls and families',
      defaultTitle: 'Wedding Invitation',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Rohit Sharma & Ananya Iyer',
        secondaryNamesLabel: 'Parents / Family Lineage (Optional)',
        secondaryNamesPlaceholder: 'S/o Mr. Suresh Sharma | D/o Mr. Ramesh Iyer',
        ceremonyLabel: 'Ceremony Details / Muhurtham'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'ceremonyDetails', 'rsvp', 'message'],
      isPriority: true,
      culturalVariants: ['South Indian', 'North Indian', 'Punjabi', 'Bengali', 'Gujarati', 'Telugu', 'Tamil', 'Malayalam', 'Christian', 'Muslim Nikah', 'Sikh Anand Karaj']
    },
    {
      id: 'tamil-wedding',
      name: 'Tamil Thirumanam',
      category: 'wedding',
      icon: '🪔',
      defaultTitle: 'Thirumana Aahvaanam',
      inputLabels: {
        namesLabel: 'Bride & Groom Names',
        namesPlaceholder: 'Karthik & Deepa',
        secondaryNamesLabel: 'Parents / Kudumbam',
        ceremonyLabel: 'Muhurtham Timings'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'ceremonyDetails', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'telugu-wedding',
      name: 'Telugu Pelli',
      category: 'wedding',
      icon: '🌼',
      defaultTitle: 'Pelli Shubhalekha',
      inputLabels: {
        namesLabel: 'Vadhuvu & Varudu Names',
        namesPlaceholder: 'Vijay & Sneha',
        secondaryNamesLabel: 'Parents & Grandparents',
        ceremonyLabel: 'Muhurtham Timings'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'ceremonyDetails', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'kannada-wedding',
      name: 'Kannada Maduve',
      category: 'wedding',
      icon: '🌸',
      defaultTitle: 'Lagna Pathrike',
      inputLabels: {
        namesLabel: 'Dampatigalu Names',
        namesPlaceholder: 'Arjun & Pooja',
        secondaryNamesLabel: 'Parents Lineage',
        ceremonyLabel: 'Muhurtha'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'ceremonyDetails', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'punjabi-wedding',
      name: 'Punjabi Anand Karaj',
      category: 'wedding',
      icon: '🥁',
      defaultTitle: 'Anand Karaj & Wedding',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Gurpreet Singh & Harleen Kaur',
        secondaryNamesLabel: 'Parents / Khandan',
        ceremonyLabel: 'Anand Karaj & Lavaan'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'ceremonyDetails', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'reception',
      name: 'Wedding Reception',
      category: 'wedding',
      icon: '✨',
      defaultTitle: 'Wedding Reception',
      inputLabels: {
        namesLabel: 'Newlywed Couple Names',
        namesPlaceholder: 'Rohit & Ananya',
        secondaryNamesLabel: 'Hosted By',
        ceremonyLabel: 'Dress Code & Timings'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      category: 'wedding',
      icon: '🌼',
      defaultTitle: 'Haldi Celebration',
      inputLabels: {
        namesLabel: 'Celebrant / Couple Name',
        namesPlaceholder: 'Ananya Iyer',
        secondaryNamesLabel: 'Hosted by Sharma / Iyer Family',
        ceremonyLabel: 'Dress Code (Shades of Yellow)'
      },
      fields: ['celebrantNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'dressCode', 'message'],
      isPriority: true
    },
    {
      id: 'mehendi',
      name: 'Mehendi Ceremony',
      category: 'wedding',
      icon: '🌿',
      defaultTitle: 'Mehendi Ki Raat',
      inputLabels: {
        namesLabel: 'Bride / Couple Name',
        namesPlaceholder: 'Ananya Iyer',
        secondaryNamesLabel: 'Hosted By',
        ceremonyLabel: 'Dress Code (Green & Festive)'
      },
      fields: ['celebrantNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'dressCode', 'message'],
      isPriority: true
    },
    {
      id: 'sangeet',
      name: 'Sangeet Night',
      category: 'wedding',
      icon: '💃',
      defaultTitle: 'Sangeet & Dance Night',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Rohit & Ananya',
        secondaryNamesLabel: 'Hosted by Both Families',
        ceremonyLabel: 'Music, Cocktails & Dhol'
      },
      fields: ['coupleNames', 'date', 'time', 'venue', 'city', 'dressCode', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'save-the-date',
      name: 'Save the Date',
      category: 'wedding',
      icon: '📅',
      defaultTitle: 'Save the Date!',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Rohit & Ananya',
        secondaryNamesLabel: 'Wedding Destination',
        ceremonyLabel: 'Formal Invitation to Follow'
      },
      fields: ['coupleNames', 'date', 'city', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 2. BIRTHDAY
    // ----------------------------------------------------
    {
      id: 'first-birthday',
      name: '1st Birthday Celebration',
      category: 'birthday',
      icon: '👶',
      defaultTitle: "Baby's 1st Birthday",
      inputLabels: {
        namesLabel: "Baby's Name",
        namesPlaceholder: 'Aarav (Turning One!)',
        secondaryNamesLabel: 'Proud Parents',
        secondaryNamesPlaceholder: 'Pooja & Karthik Sharma',
        ceremonyLabel: 'Party Theme & Cake Cutting'
      },
      fields: ['celebrantName', 'parentsNames', 'age', 'date', 'time', 'venue', 'theme', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'kids-birthday',
      name: "Kids Themed Birthday",
      category: 'birthday',
      icon: '🎈',
      defaultTitle: 'Birthday Adventure Party',
      inputLabels: {
        namesLabel: "Birthday Star's Name",
        namesPlaceholder: 'Riya (Turning 6)',
        secondaryNamesLabel: 'Parents / Hosts',
        secondaryNamesPlaceholder: 'Vikram & Priya',
        ceremonyLabel: 'Theme (Superhero / Dino / Magic)'
      },
      fields: ['celebrantName', 'parentsNames', 'age', 'date', 'time', 'venue', 'theme', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'milestone-birthday',
      name: 'Milestone Birthday (30, 40, 50, 60)',
      category: 'birthday',
      icon: '🎂',
      defaultTitle: 'Cheers to 40 Years!',
      inputLabels: {
        namesLabel: 'Celebrant Name',
        namesPlaceholder: 'Sanjay Kapoor',
        secondaryNamesLabel: 'Hosted By (Family & Friends)',
        ceremonyLabel: 'Dress Code / Cocktail Toast'
      },
      fields: ['celebrantName', 'age', 'date', 'time', 'venue', 'rsvp', 'dressCode', 'message'],
      isPriority: true
    },
    {
      id: 'adult-birthday',
      name: 'Adult Birthday Dinner',
      category: 'birthday',
      icon: '🥂',
      defaultTitle: 'Birthday Celebrations & Dinner',
      inputLabels: {
        namesLabel: 'Celebrant Name',
        namesPlaceholder: 'Natasha Roy',
        secondaryNamesLabel: 'Hosted By',
        ceremonyLabel: 'Drinks & Dinner'
      },
      fields: ['celebrantName', 'date', 'time', 'venue', 'rsvp', 'dressCode', 'message'],
      isPriority: false
    },
    {
      id: 'surprise-birthday',
      name: 'Surprise Birthday Party',
      category: 'birthday',
      icon: '🤫',
      defaultTitle: 'Shh... Surprise Birthday Party!',
      inputLabels: {
        namesLabel: "Honorary Guest (Shh!)",
        namesPlaceholder: 'Arun Mehra',
        secondaryNamesLabel: 'Secret Co-conspirators',
        ceremonyLabel: 'Arrive By (Strictly Before Celebrant)'
      },
      fields: ['celebrantName', 'hosts', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 3. ANNIVERSARY
    // ----------------------------------------------------
    {
      id: 'anniversary',
      name: 'Wedding Anniversary',
      category: 'anniversary',
      icon: '🥂',
      defaultTitle: 'Celebrating Years of Love',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Rajesh & Shobha Rao',
        secondaryNamesLabel: 'Celebrating 25 Years of Togetherness',
        ceremonyLabel: 'Dinner & Toasts'
      },
      fields: ['coupleNames', 'yearsOfMarriage', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'silver-jubilee',
      name: '25th Silver Jubilee',
      category: 'anniversary',
      icon: '🥈',
      defaultTitle: '25th Silver Jubilee Anniversary',
      inputLabels: {
        namesLabel: 'Silver Couple Names',
        namesPlaceholder: 'Sunil & Madhuri',
        secondaryNamesLabel: 'Together Since 2001',
        ceremonyLabel: 'Gala Dinner & Vow Renewal'
      },
      fields: ['coupleNames', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'golden-jubilee',
      name: '50th Golden Jubilee',
      category: 'anniversary',
      icon: '🥇',
      defaultTitle: '50th Golden Jubilee Celebration',
      inputLabels: {
        namesLabel: 'Golden Couple Names',
        namesPlaceholder: 'Col. K.S. Verma & Sarita Verma',
        secondaryNamesLabel: 'Children & Grandchildren',
        ceremonyLabel: 'Family Blessings & Feast'
      },
      fields: ['coupleNames', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 4. HOUSEWARMING
    // ----------------------------------------------------
    {
      id: 'housewarming',
      name: 'Griha Pravesh & Housewarming',
      category: 'housewarming',
      icon: '🏡',
      defaultTitle: 'Griha Pravesh Invitation',
      inputLabels: {
        namesLabel: 'Host Name(s)',
        namesPlaceholder: 'Suresh & Meena Sharma',
        secondaryNamesLabel: 'New Home / Residence Name',
        secondaryNamesPlaceholder: 'Villa 104, Prestige Palm Meadows',
        ceremonyLabel: 'Vastu Pooja & Lunch Timings'
      },
      fields: ['hostNames', 'date', 'time', 'poojaTimings', 'address', 'city', 'mapLink', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'bhoomi-pooja',
      name: 'Bhoomi Pooja & Foundation',
      category: 'housewarming',
      icon: '🧱',
      defaultTitle: 'Auspicious Bhoomi Pooja',
      inputLabels: {
        namesLabel: 'Family / Host Name(s)',
        namesPlaceholder: 'The Kulkarni Family',
        secondaryNamesLabel: 'Project / Site Name',
        ceremonyLabel: 'Sankalpam Timings'
      },
      fields: ['hostNames', 'date', 'time', 'poojaTimings', 'address', 'city', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 5. BABY SHOWER
    // ----------------------------------------------------
    {
      id: 'baby-shower',
      name: 'Baby Shower / Maternity',
      category: 'baby-shower',
      icon: '🍼',
      defaultTitle: 'Baby Shower Celebration',
      inputLabels: {
        namesLabel: 'Mother-to-Be / Parents',
        namesPlaceholder: 'Pooja Hegde (or Pooja & Karthik)',
        secondaryNamesLabel: 'Awaiting Our Sweet Little Miracle',
        ceremonyLabel: 'Games, High Tea & Blessings'
      },
      fields: ['motherName', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'valaikappu',
      name: 'Valaikappu & Seemantham',
      category: 'baby-shower',
      icon: '🪷',
      defaultTitle: 'Valaikappu & Seemantham',
      inputLabels: {
        namesLabel: 'Mother-to-Be Name',
        namesPlaceholder: 'Anitha Karthik',
        secondaryNamesLabel: 'Parents & In-Laws',
        ceremonyLabel: 'Traditional Bangle Ceremony & Feast'
      },
      fields: ['motherName', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: true
    },

    // ----------------------------------------------------
    // 6. NAMING CEREMONY
    // ----------------------------------------------------
    {
      id: 'naming-ceremony',
      name: 'Namakaran / Naming Ceremony',
      category: 'naming-ceremony',
      icon: '👶',
      defaultTitle: 'Namakaran Ceremony',
      inputLabels: {
        namesLabel: "Baby's Name / Little Star",
        namesPlaceholder: 'Baby Advait',
        secondaryNamesLabel: 'Blessed Parents',
        secondaryNamesPlaceholder: 'Rohit & Sneha Iyer',
        ceremonyLabel: 'Cradle Blessings & Lunch'
      },
      fields: ['babyName', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'cradle-ceremony',
      name: 'Thottil / Cradle Ceremony',
      category: 'naming-ceremony',
      icon: '🛏️',
      defaultTitle: 'Cradle Ceremony',
      inputLabels: {
        namesLabel: "Baby's Name",
        namesPlaceholder: 'Baby Diya',
        secondaryNamesLabel: 'Family Lineage',
        ceremonyLabel: 'Jasmine Cradle Ritual'
      },
      fields: ['babyName', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 7. ENGAGEMENT
    // ----------------------------------------------------
    {
      id: 'engagement',
      name: 'Ring Ceremony & Engagement',
      category: 'engagement',
      icon: '💎',
      defaultTitle: 'Engagement Ceremony',
      inputLabels: {
        namesLabel: 'Fiancé & Fiancée Names',
        namesPlaceholder: 'Aditya & Tanvi',
        secondaryNamesLabel: 'Together with their families',
        ceremonyLabel: 'Ring Exchange & Cocktails'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'roka',
      name: 'Roka Ceremony',
      category: 'engagement',
      icon: '🌸',
      defaultTitle: 'Roka Ceremony',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Harsh & Mehak',
        secondaryNamesLabel: 'Sharma & Kapoor Families',
        ceremonyLabel: 'Shagun & Celebrations'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'nischayathartham',
      name: 'Nischayathartham (Betrothal)',
      category: 'engagement',
      icon: '🪷',
      defaultTitle: 'Nischayathartham',
      inputLabels: {
        namesLabel: 'Couple Names',
        namesPlaceholder: 'Siddharth & Keerthi',
        secondaryNamesLabel: 'Families Lineage',
        ceremonyLabel: 'Lagna Patrika Vachanam'
      },
      fields: ['coupleNames', 'parentsNames', 'date', 'time', 'venue', 'city', 'rsvp', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 8. FESTIVALS & RELIGIOUS
    // ----------------------------------------------------
    {
      id: 'diwali-gathering',
      name: 'Diwali & Deepavali Celebration',
      category: 'festivals',
      icon: '🪔',
      defaultTitle: 'Shubh Deepavali Gathering',
      inputLabels: {
        namesLabel: 'Host Family / Company',
        namesPlaceholder: 'The Singhania Family',
        secondaryNamesLabel: 'Festival of Lights Celebration',
        ceremonyLabel: 'Lakshmi Pooja, Sweets & Sparklers'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'christmas-party',
      name: 'Christmas & Holiday Dinner',
      category: 'festivals',
      icon: '🎄',
      defaultTitle: 'Merry Christmas & Joyous Dinner',
      inputLabels: {
        namesLabel: 'Host Name(s)',
        namesPlaceholder: 'David & Jennifer D’Souza',
        secondaryNamesLabel: 'Holiday Gathering & Cheer',
        ceremonyLabel: 'Carols, Dinner & Eggnog'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'eid-gathering',
      name: 'Eid Ul-Fitr & Festive Dawat',
      category: 'festivals',
      icon: '🌙',
      defaultTitle: 'Eid Mubarak Dawat',
      inputLabels: {
        namesLabel: 'Host Family',
        namesPlaceholder: 'The Farooqi Family',
        secondaryNamesLabel: 'Festive Feast & Blessings',
        ceremonyLabel: 'Biryani Dawat & Sweet Sheer Khurma'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'ganesh-chaturthi',
      name: 'Ganesh Chaturthi Pooja',
      category: 'festivals',
      icon: '🐘',
      defaultTitle: 'Ganesh Utsav & Darshan',
      inputLabels: {
        namesLabel: 'Host Family',
        namesPlaceholder: 'Gokhale Family',
        secondaryNamesLabel: 'Ganpati Bappa Morya',
        ceremonyLabel: 'Maha Aarti & Prasad'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'navratri-garba',
      name: 'Navratri Dandiya & Garba Night',
      category: 'festivals',
      icon: '✨',
      defaultTitle: 'Dandiya Raas & Garba Night',
      inputLabels: {
        namesLabel: 'Organised by',
        namesPlaceholder: 'Gujarati Samaj & Friends',
        secondaryNamesLabel: 'Navratri Mahotsav',
        ceremonyLabel: 'Live Raas Garba & Chaniya Choli'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'pongal-sankranti',
      name: 'Pongal / Makar Sankranti',
      category: 'festivals',
      icon: '🌾',
      defaultTitle: 'Iniya Pongal Nalvazhthukkal',
      inputLabels: {
        namesLabel: 'Host Family',
        namesPlaceholder: 'Sundar & Revathi Family',
        secondaryNamesLabel: 'Harvest Festival Blessings',
        ceremonyLabel: 'Pongal Cooking & Sweet Feast'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 9. CORPORATE EVENTS
    // ----------------------------------------------------
    {
      id: 'corporate-launch',
      name: 'Product Launch & Keynote',
      category: 'corporate',
      icon: '🚀',
      defaultTitle: 'Product Unveiling & Keynote',
      inputLabels: {
        namesLabel: 'Organization / Company Name',
        namesPlaceholder: 'Acme Cloud Technologies',
        secondaryNamesLabel: 'Keynote Speaker & Host',
        secondaryNamesPlaceholder: 'Hosted by Dr. Alan Vance, CEO',
        ceremonyLabel: 'Agenda & Live Demo'
      },
      fields: ['orgName', 'date', 'time', 'venue', 'agenda', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'business-opening',
      name: 'Grand Store Opening',
      category: 'corporate',
      icon: '🏪',
      defaultTitle: 'Grand Opening & Ribbon Cutting',
      inputLabels: {
        namesLabel: 'Store / Brand Name',
        namesPlaceholder: 'The Artisan Bakery & Café',
        secondaryNamesLabel: 'Inauguration Ribbon Cutting',
        ceremonyLabel: 'Inauguration: 11 AM | Refreshments'
      },
      fields: ['orgName', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'awards-ceremony',
      name: 'Annual Gala & Awards Dinner',
      category: 'corporate',
      icon: '🏆',
      defaultTitle: 'Annual Excellence Awards & Gala',
      inputLabels: {
        namesLabel: 'Company / Foundation Name',
        namesPlaceholder: 'Nexus Global Ventures',
        secondaryNamesLabel: 'Celebrating Excellence & Leadership',
        ceremonyLabel: 'Black Tie / Formal Evening'
      },
      fields: ['orgName', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'networking-event',
      name: 'Conference & Mixer',
      category: 'corporate',
      icon: '🤝',
      defaultTitle: 'Innovators Executive Mixer',
      inputLabels: {
        namesLabel: 'Event / Forum Name',
        namesPlaceholder: 'Fintech Leaders Roundtable',
        secondaryNamesLabel: 'Co-hosted by TechSpark',
        ceremonyLabel: 'Panel Discussion & Networking Cocktails'
      },
      fields: ['orgName', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },

    // ----------------------------------------------------
    // 10. OTHER OCCASIONS / PARTIES
    // ----------------------------------------------------
    {
      id: 'cocktail-party',
      name: 'Cocktail & Evening Soirée',
      category: 'other-occasions',
      icon: '🍸',
      defaultTitle: 'Cocktails & High Spirits',
      inputLabels: {
        namesLabel: 'Host(s) Name',
        namesPlaceholder: 'Varun & Natasha',
        secondaryNamesLabel: 'An Evening of Great Music & Libations',
        ceremonyLabel: 'Dress to Impress • Signature Drinks'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: true
    },
    {
      id: 'dinner-party',
      name: 'Dinner Party Gathering',
      category: 'other-occasions',
      icon: '🍽️',
      defaultTitle: 'Intimate Dinner & Conversation',
      inputLabels: {
        namesLabel: 'Host(s) Name',
        namesPlaceholder: 'The Bannerjee Family',
        secondaryNamesLabel: 'Good Food, Warm Friends',
        ceremonyLabel: 'Cocktails at 7:30 • Dinner at 8:30'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'pool-party',
      name: 'Pool Party & Barbecue',
      category: 'other-occasions',
      icon: '🏊',
      defaultTitle: 'Splash Pool Party & BBQ',
      inputLabels: {
        namesLabel: 'Host(s) Name',
        namesPlaceholder: 'Rohan & Friends',
        secondaryNamesLabel: 'Sun, Beats & Burgers',
        ceremonyLabel: 'Bring Swimwear & Towels'
      },
      fields: ['hostNames', 'date', 'time', 'venue', 'dressCode', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'farewell-party',
      name: 'Farewell & Bon Voyage',
      category: 'other-occasions',
      icon: '🛫',
      defaultTitle: 'Bon Voyage & Farewell Party',
      inputLabels: {
        namesLabel: 'Honorary Guest(s)',
        namesPlaceholder: 'Pooja & Dev (Moving to London)',
        secondaryNamesLabel: 'Until We Meet Again!',
        ceremonyLabel: 'Dinner, Drinks & Good Memories'
      },
      fields: ['celebrantName', 'hosts', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    },
    {
      id: 'custom-event',
      name: 'Custom Celebration',
      category: 'other-occasions',
      icon: '✨',
      defaultTitle: 'Special Celebration',
      inputLabels: {
        namesLabel: 'Host / Celebrant Name',
        namesPlaceholder: 'Friends & Family',
        secondaryNamesLabel: 'Special Occasion Note',
        ceremonyLabel: 'Event Details'
      },
      fields: ['hostNames', 'eventTitle', 'date', 'time', 'venue', 'rsvp', 'message'],
      isPriority: false
    }
  ];

  return {
    CATEGORIES: CATEGORIES,
    EVENT_TYPES: EVENT_TYPES,

    getCategoryById: function (id) {
      if (!id) return null;
      const normalizedId = CATEGORY_ALIASES[id] || id;
      return CATEGORIES.find(c => c.id === normalizedId) || null;
    },

    getEventById: function (id) {
      return EVENT_TYPES.find(e => e.id === id) || null;
    },

    getEventsByCategory: function (catId) {
      if (!catId) return EVENT_TYPES;
      const normalizedId = CATEGORY_ALIASES[catId] || catId;
      return EVENT_TYPES.filter(e => e.category === normalizedId);
    },

    getPriorityEvents: function () {
      return EVENT_TYPES.filter(e => e.isPriority);
    },

    searchEvents: function (query) {
      if (!query || !query.trim()) return EVENT_TYPES;
      const q = query.toLowerCase().trim();
      return EVENT_TYPES.filter(e =>
        e.name.toLowerCase().includes(q) ||
        (e.tagline && e.tagline.toLowerCase().includes(q)) ||
        (e.defaultTitle && e.defaultTitle.toLowerCase().includes(q)) ||
        (e.culturalVariants && e.culturalVariants.some(v => v.toLowerCase().includes(q)))
      );
    }
  };
}));
