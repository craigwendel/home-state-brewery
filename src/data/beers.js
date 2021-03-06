import hattrick from '../images/hattrick.jpg';
import hoptopuss from '../images/hoptopuss.jpg';
import bucklebunny from '../images/bucklebunny.jpg';
import glorioso from '../images/glorioso.jpg';
import pickenchickle from '../images/pickenchickle.jpg';
import blueCan from '../images/blue-beer-can.png';
import orangeCan from '../images/orange-beer-can.png';
import redCan from '../images/red-beer-can.png';
import greenCan from '../images/green-beer-can.png';

export const beers = [
  {
    id: 'hatTrick',
    name: 'Hat Trick',
    img: hattrick,
    type: 'Indian Pale Ale',
    color: 'light',
    availability: 'Fall Seasonal',
    description:
      'Hat Trick IPA - Gulf Coast IPA with tropical notes of grapefruit, pineapple, mango and melon. Easy drinking, quite refreshing, quenches your throat kind of IPA!',
    abv: '7.2%',
    ibu: 70,
    slug: 'hat-trick',
    canImg: blueCan,
    selection: 'current',
  },
  {
    id: 'pickenchickle',
    name: 'Picken Chickle',
    img: pickenchickle,
    type: 'Foamy Fried Goodness',
    color: 'medium',
    availability: 'Limited Edition',
    description:
      "Think about the goodness of the Chick-fil-A chicken sandwich in beer form...that's the Picken Chickle. Absolute. Perfection.",
    abv: '10.6%',
    ibu: 1,
    slug: 'pickenchickle',
    canImg: greenCan,
    selection: 'current',
  },
  {
    id: 'hoptopuss',
    name: 'Hoptopuss',
    img: hoptopuss,
    type: 'Vienna Pale',
    color: 'light',
    availability: 'Year Round',
    description:
      'A vienna pale. Malts - vienna, malted oats, malted wheat, carapils & golden naked oats.',
    abv: '5.6%',
    ibu: 10,
    slug: 'hoptopuss',
    canImg: redCan,
    selection: 'current',
  },
  {
    id: 'buckleBunny',
    name: 'Buckle Bunny',
    img: bucklebunny,
    type: 'Cream Ale',
    color: 'light',
    availability: 'Year Round',
    description:
      'This little Cream Ale is pretty much for everyone. Great for a hot summer’s day or a hot winter’s night. Light, refreshing and crisp.',
    abv: '4.5%',
    ibu: 15,
    slug: 'buckle-bunny',
    canImg: orangeCan,
    selection: 'current',
  },
  {
    id: 'glorioso',
    name: 'Glorioso',
    img: glorioso,
    type: 'Italian Pilsner',
    color: 'light',
    availability: 'Summer Seasonal',
    description: 'CRISP ∙ REFRESHING ∙ DRY ∙ FLORAL',
    abv: '5.5%',
    ibu: 29,
    slug: 'glorioso',
    canImg: blueCan,
    selection: 'current',
  },
];
