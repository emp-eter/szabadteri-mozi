import catZenes from './assets/cat_zenes.png'
import catCsaladi from './assets/cat_csaladi.png'
import catBlockbuster from './assets/cat_blockbuster.png'
import catKlasszikus from './assets/cat_klasszikus.png'
import venue1 from './assets/venue1.png'
import venue2 from './assets/venue2.png'
import venue3 from './assets/venue3.png'
import venue4 from './assets/venue4.png'
import venue5 from './assets/venue5.png'
import venue6 from './assets/venue6.png'

// Hero clapperboard — featured next screening
export const featured = {
  eyebrow: 'Következő vetítés',
  title: ['Avatar:', 'Tűz és Hamu'],
  date: 'Szeptember 15. · Szombat',
  time: '20.00 óra · sötétedéskor',
  free: ['A rendezvény', 'ingyenes!'],
  tags: 'Kvíz · Fotófal · Dekoráció · Piknik',
}

// References gallery — "Hol jártunk már"
export const venues = [
  { src: venue1, cap: 'STRAND Fesztivál – Zamárdi', rot: -2 },
  { src: venue2, cap: 'Gyulai Várfürdő', rot: 1.5 },
  { src: venue3, cap: 'Bolyki Pincészet és Szőlőbirtok – Eger', rot: -1.2 },
  { src: venue4, cap: 'Települési eseményeken garantált a teltház', rot: 1.8 },
  { src: venue5, cap: 'Belvárosi környezetben is népszerű program', rot: -1.5 },
  { src: venue6, cap: 'Eszterházy kastély – Fertőd', rot: 1.2 },
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
    accent: false,
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

// Film catalog categories (each has a pre-rendered poster gallery image)
export const cats = [
  {
    label: 'Zenés filmek',
    img: catZenes,
    films: [
      'A legnagyobb showman', 'Bohém Rapszódia', 'Chicago', 'Csillag születik',
      'Elvis', 'Flashdance', 'Grease', 'I wanna dance with somebody',
      'Magyar menyegző', 'Mamma Mia 1–2.', 'Michael', 'Tina',
      'Tökéletes hang', 'Wicked',
    ],
  },
  {
    label: 'Családi filmek',
    img: catCsaladi,
    films: [
      'A Super Mario film', 'Agymanók 2.', 'Az oroszlánkirály', 'Csizmás a kandúr',
      'Garfield', 'Gru 4.', 'Képzeletbeli barátok', 'Kis kedvencek titkos élete',
      'Kung Fu Panda 4.', 'Mancsőrjárat', 'Minyonok', 'Minecraft Film',
      'Mufasa', 'Trollok', 'Wonka', 'Spongyabob', 'Lilo és Stitch', 'Zootropolis 2.',
    ],
  },
  {
    label: 'Blockbuster',
    img: catBlockbuster,
    films: [
      'Avatar', 'Bad Boys 4.', 'Barbie', 'Baywatch', 'Dűne 1–2.', 'Gyűrűk ura',
      'Jurassic World', 'Halálos iramban', 'Harry Potter', 'Marvel filmek',
      'Mission Impossible', 'Star Wars', 'Top Gun: Maverick', 'Transformers',
      'Oppenheimer', 'Uncharted', 'F1', 'Anakonda', 'Legénybúcsú', 'Szenvedélyes nők',
    ],
  },
  {
    label: 'Klasszikusok',
    img: catKlasszikus,
    films: [
      'Cápa', 'Cinema Paradiso', 'Dirty Dancing', 'E.T.', 'Indiana Jones',
      'Ponyvaregény', 'Star Wars', 'Terminátor', 'Vissza a jövőbe',
      'Volt egyszer egy vadnyugat',
    ],
  },
]
