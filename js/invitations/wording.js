/**
 * Bubbli Invitation Studio 2.0 - Curated Event Wording & Tone Presets
 * Culturally appropriate, natural wording presets for Indian and global events.
 */

(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.BubbliWording = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  const WORDING_PRESETS = {
    wedding: {
      traditional: {
        id: 'traditional',
        name: 'Vedic / Traditional Auspicious',
        headline: 'शुभ विवाह • Wedding Invitation',
        prefix: 'With the divine blessings of our ancestors and almighty God, we solicit your gracious presence at the wedding of',
        message: 'Kindly grace this auspicious occasion with your family and bless the newlywed couple as they begin their sacred journey together.',
        rsvpPrefix: 'R.S.V.P: With best compliments from Family & Friends'
      },
      southIndian: {
        id: 'southIndian',
        name: 'South Indian Temple Classical',
        headline: '|| Om Sri Ganeshay Namaha ||',
        prefix: 'Together with our families, we cordially invite you and your family to the auspicious wedding ceremony of',
        message: 'Muhurtham is followed by traditional South Indian feast. Your blessings and presence are our greatest treasure.',
        rsvpPrefix: 'Warm regards from relatives and well-wishers'
      },
      royalRajputana: {
        id: 'royalRajputana',
        name: 'Royal Heritage / North Indian',
        headline: 'Royal Wedding Celebrations',
        prefix: 'Two royal hearts, two heritage families, one lifetime of devotion. You are cordially invited to celebrate the union of',
        message: 'Join us for a grand evening of traditional rituals, folk music, royal feast, and eternal celebration.',
        rsvpPrefix: 'Best compliments from near and dear ones'
      },
      nikah: {
        id: 'nikah',
        name: 'Islamic Nikah & Walima',
        headline: 'In the name of Allah, the Most Gracious, the Most Merciful',
        prefix: 'Request the honour of your benign presence and heartfelt prayers at the Nikah ceremony uniting',
        message: 'Followed by reception dinner (Walima). May Allah bless their union with lifelong joy and peace.',
        rsvpPrefix: 'R.S.V.P: Family & Relatives'
      },
      christian: {
        id: 'christian',
        name: 'Sacred Holy Matrimony',
        headline: 'By the Grace of God',
        prefix: 'We request the honor of your presence as we exchange sacred marriage vows and celebrate the Holy Matrimony of',
        message: 'Reception to follow immediately after the church ceremony. Let us toast to endless love and blessings.',
        rsvpPrefix: 'Kindly RSVP by 10 days prior'
      },
      modern: {
        id: 'modern',
        name: 'Contemporary & Joyful',
        headline: "We're Getting Married!",
        prefix: 'Together with their families, invite you to share in the joy and love as they tie the knot',
        message: 'Pack your dancing shoes and join us for an unforgettable evening of love, laughter, drinks and dinner!',
        rsvpPrefix: 'Please let us know if you can make it!'
      }
    },

    haldi: {
      festive: {
        id: 'festive',
        name: 'Yellow Bloom / Festive',
        headline: 'Pithi & Haldi Ceremony',
        prefix: 'Get ready to splash some turmeric love! You are warmly invited to the Haldi ceremony of',
        message: 'Dress code: Shades of sunshine yellow & marigold orange! Come prepared to smear turmeric and dance.',
        rsvpPrefix: 'R.S.V.P with joy'
      },
      traditional: {
        id: 'traditional',
        name: 'Auspicious Ritual',
        headline: 'Auspicious Haldi Celebrations',
        prefix: 'With love and blessings, join us to celebrate the auspicious Haldi ceremony of',
        message: 'Your loving presence and blessings will add radiance to this holy pre-wedding ritual.',
        rsvpPrefix: 'Best wishes from the family'
      }
    },

    mehendi: {
      festive: {
        id: 'festive',
        name: 'Henna & Beats',
        headline: 'Mehendi Ki Raat',
        prefix: 'Henna in the hands, love in the heart! We invite you to an evening filled with green hues, music & Mehendi for',
        message: 'Enjoy authentic live dhol, fragrant henna artistry, and delicious street delicacies.',
        rsvpPrefix: 'See you on the dance floor!'
      }
    },

    sangeet: {
      energetic: {
        id: 'energetic',
        name: 'Bollywood & Dhol Night',
        headline: 'Sangeet & Cocktail Night',
        prefix: 'Turn up the music, turn on the lights! Join us for a high-energy Sangeet night celebrating',
        message: 'An electrifying evening of family performances, Bollywood beats, signature cocktails, and nonstop dancing.',
        rsvpPrefix: 'RSVP: Let us know your favorite song request!'
      }
    },

    housewarming: {
      traditional: {
        id: 'traditional',
        name: 'Griha Pravesh Auspicious',
        headline: '|| Sri Ganesha Prasanna ||',
        prefix: 'With the divine grace of the Almighty, we have stepped into our sweet new home and request your presence at the Griha Pravesh of',
        message: 'Ganapathi Homam & Pooja followed by traditional lunch. Your presence and blessings will bring warmth and prosperity to our hearth.',
        rsvpPrefix: 'Warm regards from our family'
      },
      modern: {
        id: 'modern',
        name: 'New Home Celebration',
        headline: 'Home Sweet Home!',
        prefix: 'The boxes are unpacked, the kettle is warm! We would love for you to celebrate our new beginning with us at the new home of',
        message: 'Join us for house tours, chilled drinks, rooftop appetizers, and hearty laughter.',
        rsvpPrefix: 'Kindly let us know if you can make it!'
      }
    },

    babyShower: {
      gentle: {
        id: 'gentle',
        name: 'Seemantham / Godh Bharai Blessing',
        headline: 'Godh Bharai & Seemantham',
        prefix: 'A precious little miracle is on the way! Join us as we shower blessings, love, and protection upon the expectant mother',
        message: 'Traditional rituals and blessing ceremony followed by a special celebratory feast.',
        rsvpPrefix: 'Blessings from both families'
      },
      modern: {
        id: 'modern',
        name: 'Sweet Baby Shower',
        headline: 'A Little Star is on the Way!',
        prefix: 'Ten little fingers, ten little toes, boy or girl nobody knows! You are joyfully invited to a Baby Shower honoring',
        message: 'Join us for fun baby games, cake cutting, sweet treats, and celebratory laughter.',
        rsvpPrefix: 'RSVP to hosts'
      }
    },

    firstBirthday: {
      playful: {
        id: 'playful',
        name: "Wild One / Baby's 1st Milestone",
        headline: 'Twinkle Twinkle Little Star!',
        prefix: 'Our sweetest bundle of joy is turning ONE! Come celebrate the first milestone birthday of',
        message: 'Join us for cake smashing, playtime, magic shows, balloon twisting, and delicious party snacks.',
        rsvpPrefix: 'Please RSVP by this weekend'
      }
    },

    milestoneBirthday: {
      celebratory: {
        id: 'celebratory',
        name: 'Cheers to Another Fabulous Decade',
        headline: 'Cheers to Another Milestone Year!',
        prefix: 'Age is merely the number of years the world has been enjoying you! Please join us as we toast to the birthday of',
        message: 'An evening of great wine, gourmet food, live music, and timeless memories.',
        rsvpPrefix: 'Dress code: Smart Chic / Black Tie'
      }
    },

    corporateLaunch: {
      formal: {
        id: 'formal',
        name: 'Executive & Elegant',
        headline: 'Grand Inauguration & Product Launch',
        prefix: 'Cordially invites you to the exclusive unveiling and official launch ceremony of',
        message: 'Keynote address by industry leaders, product demo stations, networking reception, and cocktail dinner.',
        rsvpPrefix: 'Formal Business Attire • RSVP Mandatory'
      }
    },

    christmasParty: {
      festive: {
        id: 'festive',
        name: 'Traditional Christmas Dinner',
        headline: 'Merry Christmas & Joyous Dinner',
        prefix: "'Tis the season to celebrate love, friendship, and peace! You are warmly invited to our annual Christmas gathering hosted by",
        message: 'Join us for Christmas carols by the fireside, roasted feast, mulled wine, and merry times.',
        rsvpPrefix: 'Kindly RSVP by 20th December'
      },
      cocktail: {
        id: 'cocktail',
        name: 'Holiday Cheer & Cocktails',
        headline: 'Holiday Cocktails & Mistletoe Soirée',
        prefix: 'Eat, drink, and be merry! Please join us for holiday cheer, seasonal sips, and festive celebrations with',
        message: 'Festive attire encouraged! Cocktails, hors d’oeuvres, and dancing under the mistletoe.',
        rsvpPrefix: 'Cheers & Warm RSVP'
      }
    },

    eidGathering: {
      festive: {
        id: 'festive',
        name: 'Eid Ul-Fitr Dawat & Feast',
        headline: 'Eid Mubarak Celebrations',
        prefix: 'May the divine blessings of Allah bring joy, peace, and prosperity to your home! You are cordially invited to celebrate Eid with',
        message: 'Join our family for delicious biryani, sweet sheer khurma, laughter, and heartfelt blessings.',
        rsvpPrefix: 'Warm wishes from the family'
      }
    },

    namingCeremony: {
      traditional: {
        id: 'traditional',
        name: 'Vedic Namakaran & Blessing',
        headline: 'Auspicious Namakaran Ceremony',
        prefix: 'With hearts full of gratitude and love, we invite you to bless our newborn baby at the sacred Naming Ceremony of',
        message: 'Traditional cradle ceremony followed by feast. Your blessings are the greatest gift for our little one.',
        rsvpPrefix: 'Warm regards from proud parents & grandparents'
      }
    },

    anniversary: {
      milestone: {
        id: 'milestone',
        name: 'Celebrating Years of Togetherness',
        headline: 'Celebrating Years of Love & Devotion',
        prefix: 'One love, one journey, countless beautiful memories! Please join us in celebrating the wedding anniversary of',
        message: 'An intimate evening of dinner, champagne toasts, and sharing fond memories with dearest friends.',
        rsvpPrefix: 'RSVP to hosts'
      }
    },

    cocktailParty: {
      chic: {
        id: 'chic',
        name: 'Cocktails, Beats & Bites',
        headline: 'Cocktails & High Spirits',
        prefix: 'Good vibes, great company, and signature drinks! You are warmly invited to an evening soirée with',
        message: 'Dress to impress. Cocktails and appetizers will be served from 7:30 PM onwards.',
        rsvpPrefix: 'RSVP: Let us know you are coming!'
      }
    }
  };

  return {
    getPresetsForEvent: function (eventType) {
      if (!eventType) return WORDING_PRESETS.wedding;
      if (WORDING_PRESETS[eventType]) {
        return WORDING_PRESETS[eventType];
      }
      // Fallback matching
      if (eventType.includes('christmas')) {
        return WORDING_PRESETS.christmasParty;
      }
      if (eventType.includes('eid')) {
        return WORDING_PRESETS.eidGathering;
      }
      if (eventType.includes('anniversary') || eventType.includes('jubilee')) {
        return WORDING_PRESETS.anniversary;
      }
      if (eventType.includes('naming') || eventType.includes('cradle') || eventType.includes('namakaran')) {
        return WORDING_PRESETS.namingCeremony;
      }
      if (eventType.includes('baby') || eventType.includes('valaikappu') || eventType.includes('godh')) {
        return WORDING_PRESETS.babyShower;
      }
      if (eventType.includes('first') || eventType.includes('kids')) {
        return WORDING_PRESETS.firstBirthday;
      }
      if (eventType.includes('birthday') || eventType.includes('milestone')) {
        return WORDING_PRESETS.milestoneBirthday;
      }
      if (eventType.includes('housewarming') || eventType.includes('bhoomi') || eventType.includes('griha')) {
        return WORDING_PRESETS.housewarming;
      }
      if (eventType.includes('corporate') || eventType.includes('opening') || eventType.includes('launch')) {
        return WORDING_PRESETS.corporateLaunch;
      }
      if (eventType.includes('cocktail') || eventType.includes('dinner') || eventType.includes('party')) {
        return WORDING_PRESETS.cocktailParty;
      }
      if (eventType.includes('haldi')) {
        return WORDING_PRESETS.haldi;
      }
      if (eventType.includes('mehendi')) {
        return WORDING_PRESETS.mehendi;
      }
      if (eventType.includes('sangeet')) {
        return WORDING_PRESETS.sangeet;
      }
      return WORDING_PRESETS.wedding;
    },

    getDefaultWording: function (eventType, presetKey = null) {
      const presets = this.getPresetsForEvent(eventType);
      const keys = Object.keys(presets);
      if (!keys.length) return null;
      const selectedKey = (presetKey && presets[presetKey]) ? presetKey : keys[0];
      return presets[selectedKey];
    },

    getSampleDataForEvent: function (eventType) {
      const et = (eventType || 'wedding').toLowerCase();

      if (et.includes('birthday') || et.includes('kids') || et.includes('first')) {
        const isFirst = et.includes('1st') || et.includes('first') || et.includes('safari') || et.includes('star');
        return {
          eventType: et,
          headline: isFirst ? 'Twinkle Twinkle Little Star!' : 'Cheers to Another Milestone Year!',
          coupleNames: isFirst ? 'Aarav Sharma' : 'Vikramaditya Roy',
          parentsNames: isFirst ? 'Turning ONE! • Wild One Safari Party' : 'Celebrating the 50th Milestone Jubilee',
          hostPrefix: isFirst ? 'Our sweetest bundle of joy is turning ONE! Come celebrate the first milestone birthday of' : 'Please join us as we toast to the birthday of',
          date: 'Sunday, 15th December 2026',
          time: isFirst ? '5:00 PM onwards' : '7:30 PM onwards',
          venue: isFirst ? 'Orchid Sky Rooftop & Lawn' : 'The Oberoi Sky Garden',
          address: isFirst ? 'Indiranagar 100ft Road, Bengaluru' : 'MG Road, Bengaluru',
          ceremonyDetails: isFirst ? 'Magic Show & Games: 5:00 PM • Cake Cutting: 6:30 PM' : 'Toasts & Live Jazz: 7:30 PM • Dinner: 9:00 PM',
          message: isFirst ? 'Put on your party hats! Join us for cake, magic shows, balloon twisting, and fun.' : 'An evening of great wine, gourmet food, live music, and timeless memories.',
          rsvp: isFirst ? 'RSVP: Priya & Suresh (+91 98765 43210)' : 'RSVP: (+91 98765 43210)',
          photos: {}
        };
      }

      if (et.includes('housewarming') || et.includes('griha') || et.includes('bhoomi')) {
        return {
          eventType: et,
          headline: '|| Sri Ganesha Prasanna ||',
          coupleNames: 'Rajesh & Priya Menon',
          parentsNames: "Cordially invite you to the Griha Pravesh of 'Ananda Nilayam'",
          hostPrefix: 'With the divine grace of the Almighty, we have stepped into our sweet new home and request your presence at the Griha Pravesh of',
          date: 'Sunday, 15th December 2026',
          time: '8:30 AM onwards',
          venue: 'Villa 42, Palm Meadows',
          address: 'Whitefield Main Road, Bengaluru',
          ceremonyDetails: 'Ganapathi Homam: 8:30 AM • Traditional Feast: 12:30 PM',
          message: 'Your loving presence and blessings will bring warmth and prosperity to our new hearth.',
          rsvp: 'RSVP: Menon Family (+91 98765 43210)',
          photos: {}
        };
      }

      if (et.includes('baby') || et.includes('seemantham') || et.includes('godh') || et.includes('valaikappu')) {
        return {
          eventType: et,
          headline: 'Godh Bharai & Seemantham',
          coupleNames: 'Priya Menon',
          parentsNames: 'A Precious Little Miracle is on the Way!',
          hostPrefix: 'Join us as we shower love, blessings, and protection upon the expectant mother',
          date: 'Sunday, 15th December 2026',
          time: '10:00 AM onwards',
          venue: 'Green Glen Banquet Pavilion',
          address: 'HSR Layout Sector 2, Bengaluru',
          ceremonyDetails: 'Seemantham Pooja: 10:00 AM • Lunch: 1:00 PM',
          message: 'Ten little fingers, ten little toes! Let us shower the mom-to-be with love and blessings.',
          rsvp: 'Blessings & RSVP: (+91 98765 43210)',
          photos: {}
        };
      }

      if (et.includes('naming') || et.includes('cradle') || et.includes('namakaran')) {
        return {
          eventType: et,
          headline: 'Auspicious Namakaran Ceremony',
          coupleNames: 'Baby Reyansh',
          parentsNames: 'With proud parents Karthik & Deepa',
          hostPrefix: 'With hearts full of gratitude, we invite you to bless our newborn baby at the sacred Naming Ceremony of',
          date: 'Sunday, 15th December 2026',
          time: '9:30 AM onwards',
          venue: 'Sri Shankara Kalyana Mantapa',
          address: 'Jayanagar 4th Block, Bengaluru',
          ceremonyDetails: 'Namakaran Pooja: 9:30 AM • Traditional Feast: 12:30 PM',
          message: 'Traditional cradle ceremony followed by feast. Your blessings are the greatest gift for our little one.',
          rsvp: 'Warm regards from proud parents & grandparents',
          photos: {}
        };
      }

      if (et.includes('corporate') || et.includes('launch') || et.includes('keynote') || et.includes('summit')) {
        return {
          eventType: et,
          headline: 'Grand Inauguration & Product Launch',
          coupleNames: 'Apex Tech Summit 2026',
          parentsNames: 'Annual Innovation Keynote & Product Unveiling',
          hostPrefix: 'Cordially invites you to the exclusive unveiling and official launch ceremony of',
          date: 'Sunday, 15th December 2026',
          time: '10:00 AM onwards',
          venue: 'The Ritz-Carlton Grand Ballroom',
          address: '99 Residency Road, Bengaluru',
          ceremonyDetails: 'Keynote Address: 10:00 AM • Networking Lunch: 1:00 PM',
          message: 'Keynote address by industry leaders, interactive demo stations, and executive reception.',
          rsvp: 'Formal Business Attire • RSVP Mandatory: events@fixmates.com',
          photos: {}
        };
      }

      if (et.includes('anniversary') || et.includes('jubilee')) {
        return {
          eventType: et,
          headline: 'Celebrating Years of Love & Devotion',
          coupleNames: 'Suresh & Malathi Sharma',
          parentsNames: 'Celebrating 25 Years of Togetherness (Silver Jubilee)',
          hostPrefix: 'One love, one journey, countless beautiful memories! Please join us in celebrating the wedding anniversary of',
          date: 'Sunday, 15th December 2026',
          time: '7:00 PM onwards',
          venue: 'The Windsor Manor Lawn',
          address: 'Sankey Road, Bengaluru',
          ceremonyDetails: 'Champagne Toast: 7:30 PM • Gala Dinner: 8:30 PM',
          message: '25 years of cherished moments and boundless love. Please join us for an evening of celebration.',
          rsvp: 'RSVP: Rohit & Ananya (+91 98765 43210)',
          photos: {}
        };
      }

      if (et.includes('christmas')) {
        return {
          eventType: et,
          headline: 'Merry Christmas & Joyous Dinner',
          coupleNames: 'Annual Christmas Gala & Feast',
          parentsNames: 'Hosted by Arthur & Evelyn Fernandes',
          hostPrefix: "'Tis the season to celebrate love, friendship, and peace! You are warmly invited to our annual Christmas gathering hosted by",
          date: 'Friday, 25th December 2026',
          time: '6:30 PM onwards',
          venue: 'The Ferns Heritage Clubhouse',
          address: 'Richmond Town, Bengaluru',
          ceremonyDetails: 'Carol Singing: 6:30 PM • Feast & Mulled Wine: 8:00 PM',
          message: 'Join us for fireside carols, roasted feast, mulled wine, and cheerful holiday festivities.',
          rsvp: 'Kindly RSVP by 20th December (+91 98765 43210)',
          photos: {}
        };
      }

      if (et.includes('eid')) {
        return {
          eventType: et,
          headline: 'Eid Mubarak Celebrations',
          coupleNames: 'Eid Ul-Fitr Grand Dawat',
          parentsNames: 'Hosted by Tariq & Fatima Khan',
          hostPrefix: 'May the divine blessings of Allah bring joy, peace, and prosperity to your home! You are cordially invited to celebrate Eid with',
          date: 'Sunday, 15th December 2026',
          time: '7:00 PM onwards',
          venue: 'The Noor Banquet Pavilion',
          address: 'Frazer Town, Bengaluru',
          ceremonyDetails: 'Evening Dawat & Reception: 7:00 PM onwards',
          message: 'Join our family for fragrant biryani, sweet sheer khurma, laughter, and heartfelt blessings.',
          rsvp: 'Warm wishes from the Khan Family',
          photos: {}
        };
      }

      if (et.includes('haldi')) {
        return {
          eventType: et,
          headline: 'Pithi & Haldi Ceremony',
          coupleNames: 'Ananya Iyer',
          parentsNames: 'Join the Iyer family for a splash of sunshine',
          hostPrefix: 'Get ready to splash some turmeric love! You are warmly invited to the Haldi ceremony of',
          date: 'Saturday, 14th December 2026',
          time: '10:00 AM onwards',
          venue: 'The Palm Courtyard, Bengaluru',
          address: 'Indiranagar, Bengaluru',
          ceremonyDetails: 'Haldi Ritual: 10:00 AM | Dress code: Sunshine Yellow',
          message: 'Come prepared to smear turmeric, sing traditional folk songs, and dance with joy!',
          rsvp: 'RSVP: Iyer Family',
          photos: {}
        };
      }

      if (et.includes('mehendi')) {
        return {
          eventType: et,
          headline: 'Mehendi Ki Raat',
          coupleNames: 'Ananya Iyer',
          parentsNames: 'With joyous compliments from friends & cousins',
          hostPrefix: 'Henna in the hands, love in the heart! We invite you to an evening filled with green hues, music & Mehendi for',
          date: 'Friday, 13th December 2026',
          time: '4:00 PM onwards',
          venue: 'The Rose Garden Terrace',
          address: 'Koramangala, Bengaluru',
          ceremonyDetails: 'Henna Application: 4:00 PM • Live Dhol: 6:30 PM',
          message: 'Enjoy authentic live dhol, fragrant henna artistry, and delicious street food delicacies.',
          rsvp: 'See you on the dance floor!',
          photos: {}
        };
      }

      if (et.includes('sangeet')) {
        return {
          eventType: et,
          headline: 'Sangeet & Cocktail Night',
          coupleNames: 'Rohit & Ananya',
          parentsNames: 'Hosted by the Sharma & Iyer Families',
          hostPrefix: 'Turn up the music, turn on the lights! Join us for a high-energy Sangeet night celebrating',
          date: 'Saturday, 14th December 2026',
          time: '7:30 PM onwards',
          venue: 'Taj West End Grand Ballroom',
          address: 'Race Course Road, Bengaluru',
          ceremonyDetails: 'Performances: 7:30 PM • DJ & Cocktails: 9:00 PM',
          message: 'An electrifying evening of family dance battles, Bollywood beats, and signature drinks.',
          rsvp: 'RSVP: Let us know your favorite song request!',
          photos: {}
        };
      }

      // Default wedding
      return {
        eventType: 'wedding',
        headline: 'शुभ विवाह • Wedding Invitation',
        coupleNames: 'Rohit Sharma & Ananya Iyer',
        parentsNames: 'S/o Mr. Suresh Sharma | D/o Mr. Ramesh Iyer',
        hostPrefix: 'With the divine blessings of our ancestors and almighty God, we solicit your gracious presence at the wedding of',
        date: 'Sunday, 15th December 2026',
        time: '10:30 AM onwards',
        venue: 'The Leela Palace Ballroom',
        address: 'Old Airport Road, Bengaluru, Karnataka',
        ceremonyDetails: 'Muhurtham: 10:45 AM | Traditional Attire',
        message: 'Kindly grace this auspicious occasion with your family and bless the newlywed couple as they begin their sacred journey together.',
        rsvp: 'R.S.V.P: With best compliments from Family & Friends',
        photos: {}
      };
    }
  };
}));
