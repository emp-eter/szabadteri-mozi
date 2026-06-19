import photo1 from './assets/photo1.png'
import photo2 from './assets/photo2.png'
import photo3 from './assets/photo3.png'

// Featured event tag pills (hero clapperboard card)
export const eventTags = ['Kvíz', 'Fotófal', 'Dekoráció', 'Piknik']

// Intro photo gallery (polaroid-style)
export const photos = [
  { src: photo1, cap: 'Belvárosi vetítés', rot: -2.5 },
  { src: photo2, cap: 'Esti kertmozi', rot: 1.5 },
  { src: photo3, cap: 'Vízparti élmény', rot: -1 },
]

// "Mit tartalmaz?" — technical parameters list
export const tech = [
  ['Mozivászon', '6 m-től 17 m-ig (kompresszor, rögzítő elemek)'],
  ['Vetítő berendezés', 'Professzionális lézer és 4K projektorok'],
  ['Aktív Stereo hangrendszer', 'Tiszta, erőteljes hangzás'],
  ['Egyéb kiegészítők', 'Lejátszórendszer, vetítőállvány, 10 m kábeltaposó, anemométer'],
  ['Technikai személyzet', 'Tapasztalt szakemberek a helyszínen'],
  ['Filmjogdíj', 'Több mint tízezer film a kínálatban'],
  ['Plakát minta', 'Egyedi plakát és facebook cover'],
  ['Programkezdés', 'Sötétedéskor, 20 óra körül'],
]

// "Mit tartalmaz?" — decoration list
export const decor = [
  '15 db piknik asztalka',
  '15 db piknik szőnyeg',
  'Zászlófüzér',
  'Fényfüzér',
  'Életnagyságú karton film figurák',
  'Fotófal',
]

// Pricing packages
export const packages = [
  {
    name: 'Hobbi',
    cap: 'Max. 50 fő',
    desc: 'Baráti és családi összejövetelekre, esküvőre, vendéglátó egységeknek.',
    total: '199 900',
    accent: false,
    rows: [
      ['Vászon', '6 m széles (7,6 m átmérő)'],
      ['Hangtechnika', 'JBL Stereo'],
      ['Projektor', '4K Viewsonic'],
      ['Személyzet', '1 fő'],
    ],
  },
  {
    name: 'Professional',
    cap: 'Max. 300 fő',
    desc: 'Professzionális vetítéstechnika, airtight (csendes) vászonkerettel.',
    total: '299 900',
    accent: true,
    rows: [
      ['Vászon', '8 m széles'],
      ['Hangtechnika', 'dB Technologies Stereo'],
      ['Projektor', '8000 ANSI lumen, lézer'],
      ['Személyzet', '2 fő'],
    ],
  },
  {
    name: 'Mega',
    cap: 'Max. 500 fő',
    desc: 'Látványos képvilág, minőségi hangzás airtight vászonkerettel.',
    total: '425 000',
    accent: false,
    rows: [
      ['Vászon', '10 m széles'],
      ['Hangtechnika', 'dB Technologies Stereo'],
      ['Projektor', '15.000 ANSI lumen, lézer'],
      ['Személyzet', '2 fő'],
    ],
  },
  {
    name: 'Giga',
    cap: 'Max. 800 fő',
    desc: 'A legnagyobb élmény airtight, légmegtartó vászonkerettel.',
    total: '495 000',
    accent: false,
    rows: [
      ['Vászon', '12 m széles'],
      ['Hangtechnika', 'dB Technologies + delay'],
      ['Projektor', '15.000 ANSI lumen, lézer'],
      ['Személyzet', '2 fő'],
    ],
  },
]

// Festival premium band specs
export const festivalSpecs = [
  ['Vászon', '17 m széles (kiegészítők, kompresszorok)'],
  ['Hangtechnika', 'Line Array irányított hangrendszer'],
  ['Projektor', 'Nagyteljesítményű digitális mozivetítő'],
  ['Személyzet', '4–5 fő'],
]

// Film catalog categories
export const cats = [
  {
    label: 'Zenés filmek',
    films: [
      'A legnagyobb showman', 'Bohém Rapszódia', 'Chicago', 'Csillag születik',
      'Elvis', 'Flashdance', 'Grease', 'I wanna dance with somebody',
      'Magyar menyegző', 'Mamma Mia 1–2.', 'Michael', 'Tina',
      'Tökéletes hang', 'Wicked',
    ],
  },
  {
    label: 'Családi filmek',
    films: [
      'A Super Mario film', 'Agymanók 2.', 'Az oroszlánkirály', 'Csizmás a kandúr',
      'Garfield', 'Gru 4.', 'Képzeletbeli barátok', 'Kis kedvencek titkos élete',
      'Kung Fu Panda 4.', 'Mancsőrjárat', 'Minyonok', 'Minecraft Film',
      'Mufasa', 'Trollok', 'Wonka', 'Spongyabob', 'Lilo és Stitch', 'Zootropolis 2.',
    ],
  },
  {
    label: 'Blockbuster',
    films: [
      'Avatar', 'Bad Boys 4.', 'Barbie', 'Baywatch', 'Dűne 1–2.', 'Gyűrűk ura',
      'Jurassic World', 'Halálos iramban', 'Harry Potter', 'Marvel filmek',
      'Mission Impossible', 'Star Wars', 'Top Gun: Maverick', 'Transformers',
      'Oppenheimer', 'Uncharted', 'F1', 'Anakonda', 'Legénybúcsú', 'Szenvedélyes nők',
    ],
  },
  {
    label: 'Klasszikusok',
    films: [
      'Cápa', 'Cinema Paradiso', 'Dirty Dancing', 'E.T.', 'Indiana Jones',
      'Ponyvaregény', 'Star Wars', 'Terminátor', 'Vissza a jövőbe',
      'Volt egyszer egy vadnyugat',
    ],
  },
]
