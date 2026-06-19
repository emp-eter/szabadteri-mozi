# Handoff: Szabadtéri Mozi - Cinema Center landing page

## Overview
Egy egyoldalas (single-page), görgethető marketing landing page a **Cinema Center "Szabadtéri Mozi" (open-air cinema)** szolgáltatás kiajánlásához, 2026 nyári szezonra. A cél: bemutatni a komplett kertmozi-élményt (film + technika + dekoráció + kvíz), kiemelni a következő vetítést, ismertetni a csomagokat/árakat, böngészhető filmkatalógust adni, és kapcsolatfelvételre ösztönözni.

Nyelve: **magyar**. Hangulata: nyári, éjszakai, "csillagok alatt" mozi - sötét éjkék/lila/bordó háttér, meleg arany és cián kiemelések, retró-vidám címbetűk.

## About the Design Files
A csomagban lévő fájl (`Szabadteri Mozi.dc.html`) egy **HTML-ben készült dizájn-referencia** - a kívánt megjelenést és viselkedést bemutató prototípus, **nem** közvetlenül átemelendő production kód. (Technikailag egy "Design Component" formátum: egyedi `<x-dc>` template + `DCLogic` osztály React-alapú futtatókörnyezetben - ezt **ne** próbáld 1:1-ben átvenni.)

A feladat: **rekreáld ezt a dizájnt a célkódbázis saját környezetében** (React, Vue, Astro, sima HTML/CSS, stb.), annak bevett mintáit és könyvtárait használva. Ha még nincs kialakult környezet, válaszd a projekthez legmegfelelőbb keretrendszert (egy statikus marketing landinghez egy sima **React/Vite** vagy **Astro** projekt, vagy akár sima HTML + CSS is tökéletes) és abban valósítsd meg.

Minden vizuális logika (csillagmező, listák, kártyák, katalógus) jelenleg `React.createElement` hívásokban van a `DCLogic` osztályban - ezeket sima komponensekké / map-elt JSX-szé érdemes átírni a célkeretben.

## Fidelity
**High-fidelity (hifi).** A színek, tipográfia, térközök és interakciók véglegesek és pontosak. Az UI-t pixelpontosan érdemes reprodukálni a megadott tokenekkel. A betűtípusok Google Fonts-ról jönnek (lásd Design Tokens).

---

## Page structure (felülről lefelé)
Egyetlen oldal, 6 egymás alatti `<section>`:
1. Hero (cím + CTA-k + kiemelt vetítés "klapni" kártya)
2. Bemutatkozás / pitch + fotógaléria
3. Mit tartalmaz? (technika + dekoráció)
4. Csomagok / árak (4 árkártya + Filmfesztivál prémium sáv) - `id="csomagok"`
5. Filmkatalógus (kategória-tabok + film-chipek)
6. Kapcsolat / footer - `id="kapcsolat"`

Globális oldalszélesség: a tartalom max-width-tel középre zárva (hero/intro/katalógus: `1080-1120px`, csomagok: `1160px`, kapcsolat: `760px`), oldalsó padding `32px`.

---

## Screens / Views

### 1. Hero
- **Purpose:** Azonnali figyelemfelkeltés, fő üzenet, elsődleges CTA-k, következő vetítés kiemelése.
- **Layout:** Teljes szélességű section, középre zárt tartalom (`max-width: 1120px`, padding `56px 32px 90px`). Alatta egy ráúszó "klapni" kártya (`max-width: 920px`, `margin-top: -40px`, `transform: translateY(40px)` - szándékosan átlóg a következő szekció tetejére).
- **Background:** `radial-gradient(120% 90% at 50% 0%, #9d1b3a 0%, #7a1632 28%, #3a2747 62%, #181c30 100%)`. Felül egy abszolút pozícionált **csillagmező** (lásd Interactions), és egy alsó elhalványító overlay: `linear-gradient(180deg, transparent 60%, #181c30 100%)`.
- **Components:**
  - **Badge** ("2026 Nyarán"): inline-flex pill, `padding: 8px 20px`, `border: 1px solid rgba(246,182,46,.5)`, `border-radius: 100px`, `background: rgba(0,0,0,.25)`, `backdrop-filter: blur(4px)`. Bal oldalt 7px arany pötty `box-shadow: 0 0 10px #f6b62e`. Szöveg: 13px, letter-spacing 3px, `#ffe3a8`, uppercase, font-weight 600.
  - **H1** ("Szabadtéri / Mozi", 2 sor `<br>`-rel): font **Luckiest Guy**, `clamp(56px, 11vw, 138px)`, `line-height: .92`, szín `#f6b62e`, `-webkit-text-stroke: 2px #3a1020`, `text-shadow: 5px 7px 0 rgba(0,0,0,.32)`, `transform: rotate(-2.5deg)`.
  - **Alcím** ("Moziélmény a csillagok alatt"): font **Pacifico**, `clamp(22px, 4vw, 40px)`, fehér, `text-shadow: 0 3px 14px rgba(0,0,0,.5)`, `margin-top: 26px`.
  - **Leírás bekezdés:** `max-width: 620px`, `clamp(15px,2.1vw,18px)`, `line-height: 1.6`, `rgba(255,255,255,.85)`, font-weight 300. Szöveg: „Elvisszük Önökhöz is az igazi kertmozi élményt - komplex program minden technikai feltétellel, egyedi dekorációval és izgalmas kvíz játékkal."
  - **CTA-k** (flex, gap 14px, középre):
    - Elsődleges: „Csomagok megtekintése →" - `background: #f6b62e`, szöveg `#2a1020`, font-weight 700, 15px, `padding: 15px 30px`, `border-radius: 100px`, `box-shadow: 0 10px 28px rgba(246,182,46,.35)`. Hover: `transform: translateY(-2px)`. Cél: `#csomagok`.
    - Másodlagos: „Ajánlatkérés" - `background: rgba(255,255,255,.08)`, fehér, font-weight 600, `border: 1px solid rgba(255,255,255,.25)`. Hover: `background: rgba(255,255,255,.16)`. Cél: `#kapcsolat`.
  - **Kiemelt vetítés "klapni" kártya:**
    - Külső doboz: `background: linear-gradient(150deg, #15151a 0%, #0c0c10 100%)`, `border-radius: 18px`, `border: 1px solid rgba(255,255,255,.08)`, `box-shadow: 0 30px 70px rgba(0,0,0,.55)`, `overflow: hidden` (fontos a klapni-csíkok levágásához).
    - **Klapni-csík** (felső sáv): `height: 32px`, `background: repeating-linear-gradient(-58deg, #f4f4f4 0 26px, #111114 26px 52px)`. Ez adja a ferde fekete-fehér csapó-mintát; az `overflow:hidden` vágja le tisztán a lekerekített sarkoknál.
    - Belső tartalom (`padding: 30px 34px 34px`):
      - Felirat „Következő vetítés" (11px, letter-spacing 3px, `#58c5e0`, uppercase, bold) + jobbra futó vékony elválasztó vonal (`height:1px; background: rgba(255,255,255,.12)`).
      - **Film címe** „Avatar: Tűz és Hamu": Luckiest Guy, `clamp(34px, 6vw, 58px)`, `#f6b62e`, `-webkit-text-stroke: 1px #3a1020`.
      - Meta sor (flex, gap `16px 48px`, wrap): „Időpont" blokk (címke 11px uppercase `rgba(255,255,255,.45)`; érték „Szeptember 15. · Szombat" 20px bold fehér; „20:00 óra · sötétedéskor" 14px `rgba(255,255,255,.6)`) és „Belépés" blokk (címke + „Ingyenes!" Luckiest Guy 26px `#58c5e0`).
      - **Tag-sor** felül `1px solid rgba(255,255,255,.08)` elválasztóval, `padding-top: 18px`: pill-ek „Kvíz / Fotófal / Dekoráció / Piknik" - `padding: 6px 12px`, 12px, `rgba(255,255,255,.07)` háttér, `border: 1px solid rgba(255,255,255,.12)`, `border-radius: 100px`.

### 2. Bemutatkozás / pitch
- **Purpose:** Az ajánlat lényegének elmesélése + valódi fotók a hangulatról.
- **Background:** `linear-gradient(180deg, #181c30 0%, #15192c 100%)`, padding `110px 32px 80px`.
- **Components:**
  - Kis felirat „Egy teljesen új program" (12px, letter-spacing 4px, `#f6b62e`, uppercase).
  - Nagy bekezdés (`max-width: 880px`, `clamp(22px,3.6vw,34px)`, `line-height:1.45`, fehér), benne színes kiemelt szavakkal: „szuper filmet" (`#58c5e0`), „kertmozi élményt" (`#e8466a`), „dekorációs elemeket" (`#f6b62e`), „technikai eszközt" (`#e8466a`) - mind font-weight 600. Teljes szöveg: „Egy egész estés eseményt kínálunk Önöknek. Egy **szuper filmet**, amit a katalógusból választhatnak ki, felejthetetlen **kertmozi élményt** a csillagok alatt, egyedi **dekorációs elemeket** és minden ehhez szükséges **technikai eszközt**."
  - Záró sor: „Önnek csak fogadni kell a vendégeket - a többi a mi dolgunk." (17px, `rgba(255,255,255,.55)`, font-weight 300).
  - **Fotógaléria** (`max-width: 1080px`, grid 3 oszlop, gap 20px): 3 polaroid-stílusú kép. Mindegyik: fehér keret `background:#fff; padding: 10px 10px 16px; border-radius: 4px; box-shadow: 0 20px 40px rgba(0,0,0,.45)`, enyhe elforgatás (rendre `-2.5deg`, `1.5deg`, `-1deg`). Kép: `width:100%; height:210px; object-fit: cover`. Felirat alul **Pacifico** 16px `#2a1020`, középre.
    - photo1 → „Belvárosi vetítés", photo2 → „Esti kertmozi", photo3 → „Vízparti élmény" (lásd Assets).

### 3. Mit tartalmaz?
- **Purpose:** A technikai felszerelés és a dekoráció részletes listája.
- **Background:** `linear-gradient(180deg, #15192c 0%, #11152a 100%)`, padding `90px 32px`.
- **Layout:** Címsor középen (H2 Luckiest Guy `clamp(34px,6vw,56px)` fehér + alcím „Minden, ami egy teljes moziélményhez kell" `rgba(255,255,255,.5)` 16px). Alatta grid `1.3fr 1fr`, gap 24px.
- **Bal kártya - „Technikai paraméterek":** `background: linear-gradient(160deg, #1f2540, #171b30)`, `border: 1px solid rgba(255,255,255,.07)`, `border-radius: 18px`, padding 34px. Fejléc 13px letter-spacing 3px `#f6b62e` uppercase. Lista (flex column, gap 18px), minden tétel: arany ◆ ikon (`#f6b62e`, 15px) + cím (15px, font-weight 600, fehér) + leírás (13px, `rgba(255,255,255,.5)`). Tételek:
  - Mozivászon - „6 m-től 17 m-ig (kompresszor, rögzítő elemek)"
  - Vetítő berendezés - „Professzionális lézer és 4K projektorok"
  - Aktív Stereo hangrendszer - „Tiszta, erőteljes hangzás"
  - Egyéb kiegészítők - „Lejátszórendszer, vetítőállvány, 10 m kábeltaposó, anemométer"
  - Technikai személyzet - „Tapasztalt szakemberek a helyszínen"
  - Filmjogdíj - „Több mint tízezer film a kínálatban"
  - Plakát minta - „Egyedi plakát és facebook cover"
  - Programkezdés - „Sötétedéskor, 20 óra körül"
- **Jobb kártya - „Dekoráció":** `background: linear-gradient(160deg, #2a1b30, #1b1422)`, `border: 1px solid rgba(232,70,106,.18)`, `border-radius: 18px`, padding 34px. Fejléc `#e8466a`. Lista, minden tétel: ★ ikon (`#e8466a`, 14px) + szöveg (15px, `rgba(255,255,255,.85)`), tételek közt `1px solid rgba(255,255,255,.07)` elválasztó, sor padding `10px 0`. Tételek: „15 db piknik asztalka", „15 db piknik szőnyeg", „Zászlófüzér", „Fényfüzér", „Életnagyságú karton film figurák", „Fotófal".

### 4. Csomagok / árak (`id="csomagok"`)
- **Purpose:** Az árazás bemutatása, vásárlói döntés segítése.
- **Background:** `linear-gradient(180deg, #11152a 0%, #14182b 50%, #14182b 100%)`, padding `90px 32px`. Tartalom `max-width: 1160px`.
- **Fejléc:** felirat „Árajánlat" (12px letter-spacing 4px `#58c5e0` uppercase) + H2 „Válassza ki a csomagot" (Luckiest Guy `clamp(34px,6vw,56px)` fehér).
- **Árkártyák:** grid 4 oszlop, gap 18px, `align-items: stretch`. Minden kártya flex column:
  - Alap: `background: linear-gradient(165deg, #1c2138, #14182b)`, `border: 1px solid rgba(255,255,255,.08)`, `border-radius: 18px`, padding `26px 22px`.
  - Kiemelt (accent) kártya (Professional): `background: linear-gradient(165deg, #2a2348, #1a1730)`, `border: 1.5px solid #f6b62e`, `box-shadow: 0 20px 50px rgba(246,182,46,.15)`, és felül középen egy „Népszerű" badge (`top: -11px`, arany háttér, `#2a1020` szöveg, 10px uppercase, `border-radius:100px`).
  - Tartalom: név (Luckiest Guy 28px; accentnél arany, egyébként fehér), kapacitás-felirat (12px `#58c5e0` uppercase bold), leírás (13px `rgba(255,255,255,.5)`, `min-height: 56px`), specs lista (felül elválasztóval; minden sor: 10px uppercase címke `rgba(255,255,255,.4)` + 13.5px fehér érték), majd alul (`margin-top:auto`, felül elválasztó) „Összesen" + ár (26px font-weight 800, `white-space: nowrap`, accentnél arany) + „Ft + Áfa" (13px `rgba(255,255,255,.6)`).
  - **Csomag-adatok:**
    | Csomag | Kapacitás | Vászon | Hangtechnika | Projektor | Személyzet | Ár (Ft + Áfa) | Leírás |
    |---|---|---|---|---|---|---|---|
    | Hobbi | Max. 50 fő | 6 m széles (7,6 m átmérő) | JBL Stereo | 4K Viewsonic | 1 fő | 199 900 | Baráti és családi összejövetelekre, esküvőre, vendéglátó egységeknek. |
    | **Professional** (kiemelt) | Max. 300 fő | 8 m széles | dB Technologies Stereo | 8000 ANSI lumen, lézer | 2 fő | 299 900 | Professzionális vetítéstechnika, airtight (csendes) vászonkerettel. |
    | Mega | Max. 500 fő | 10 m széles | dB Technologies Stereo | 15.000 ANSI lumen, lézer | 2 fő | 425 000 | Látványos képvilág, minőségi hangzás airtight vászonkerettel. |
    | Giga | Max. 800 fő | 12 m széles | dB Technologies + delay | 15.000 ANSI lumen, lézer | 2 fő | 495 000 | A legnagyobb élmény airtight, légmegtartó vászonkerettel. |
- **Filmfesztivál prémium sáv** (az árkártyák alatt, gap 18px): `background: radial-gradient(120% 160% at 0% 0%, #3a1020 0%, #1a1426 70%)`, `border: 1px solid rgba(246,182,46,.35)`, `border-radius: 20px`, padding 36px. Grid `1.1fr 1.4fr auto`, gap 30px:
  - Bal: „Prémium" badge (arany pill) + cím „Filmfesztivál" (Luckiest Guy 40px arany) + leírás „Professzionális DCI mozi-vetítéstechnika. Magyarország legnagyobb szabadtéri mozivászna." (14px `rgba(255,255,255,.6)`).
  - Közép: spec-sorok (címke 11px uppercase arany, fix 110px szélesség + érték 14px `rgba(255,255,255,.85)`, közöttük `1px solid rgba(255,255,255,.1)`): Vászon „17 m széles (kiegészítők, kompresszorok)"; Hangtechnika „Line Array irányított hangrendszer"; Projektor „Nagyteljesítményű digitális mozivetítő"; Személyzet „4-5 fő".
  - Jobb: „Egyedi ajánlat alapján" (Pacifico 26px `#58c5e0`, középre).
- **Lábjegyzet** (a sáv alatt, `max-width: 880px`, középre, 13px, `line-height:1.7`, `rgba(255,255,255,.4)`): „Az árak nem tartalmazzák a filmjogdíjat, amit a kiválasztott film alapján tudunk megküldeni. Az ajánlat nem tartalmazza az útiköltséget (120 Ft / km, Egerből oda-vissza). További lehetőségek: dekorációs csomag, kvíz, videóklippek, színpad, székek, sörpadok, popcorn és büfé (foodtruck), Artisjus ügyintézés."

### 5. Filmkatalógus
- **Purpose:** Böngészhető filmlista kategóriák szerint (interaktív tabok).
- **Background:** `linear-gradient(180deg, #14182b 0%, #11152a 100%)`, padding `90px 32px`. Tartalom `max-width: 1080px`.
- **Fejléc:** H2 „Filmkatalógus" (Luckiest Guy) + alcím „Több mint tízezer film a kínálatban - íme néhány kedvenc".
- **Kategória-tabok** (flex, gap 10px, középre, wrap): gomb minden kategóriához. Aktív: `background: #f6b62e`, szöveg `#2a1020`, `border: 1px solid #f6b62e`. Inaktív: átlátszó háttér, `rgba(255,255,255,.7)` szöveg, `border: 1px solid rgba(255,255,255,.15)`. Mind: `padding: 11px 22px`, `border-radius: 100px`, 14px font-weight 600, `transition: all .15s`.
- **Poszteres galéria** (`max-width: 880px`, középen): az aktív kategória egy nagy, kifüggesztett-poszteres tablóként jelenik meg (3×3 poszter, csipeszekkel egy zsinóron lógva - ez az eredeti PDF szignatúra-megjelenése). A panel: `border-radius: 16px`, `overflow: hidden`, `border: 1px solid rgba(255,255,255,.08)`, `box-shadow: 0 24px 60px rgba(0,0,0,.5)`. Jelenleg minden kategória egy-egy előre rendererelt galéria-kép (`assets/cat_*.png`, a PDF-ből kivágva). **Production-ben** érdemes ezt valódi poszter-rácsra cserélni: egyedi filmposzter-képek (a megrendelőtől / hivatalos forrásból), `object-fit: cover`, enyhe random elforgatással és csipesz-grafikával - így a lista dinamikusan bővíthető. A poszterek jogtiszta forrásból szerezendők be.
- **Film-név chipek** (a galéria alatt, `max-width: 880px`, flex wrap, gap 9px, középre): az aktív kategória filmcímei pill-ként: `padding: 8px 16px`, `border-radius: 100px`, 13.5px, `rgba(255,255,255,.8)`, `background: rgba(255,255,255,.05)`, `border: 1px solid rgba(255,255,255,.1)`.
- **Kategóriák és filmek** (a teljes lista a kódban; az aktív tab `activeCat` state-tel váltható, alap = 0):
  - **Zenés filmek:** A legnagyobb showman, Bohém Rapszódia, Chicago, Csillag születik, Elvis, Flashdance, Grease, I wanna dance with somebody, Magyar menyegző, Mamma Mia 1-2., Michael, Tina, Tökéletes hang, Wicked
  - **Családi filmek:** A Super Mario film, Agymanók 2., Az oroszlánkirály, Csizmás a kandúr, Garfield, Gru 4., Képzeletbeli barátok, Kis kedvencek titkos élete, Kung Fu Panda 4., Mancsőrjárat, Minyonok, Minecraft Film, Mufasa, Trollok, Wonka, Spongyabob, Lilo és Stitch, Zootropolis 2.
  - **Blockbuster:** Avatar, Bad Boys 4., Barbie, Baywatch, Dűne 1-2., Gyűrűk ura, Jurassic World, Halálos iramban, Harry Potter, Marvel filmek, Mission Impossible, Star Wars, Top Gun: Maverick, Transformers, Oppenheimer, Uncharted, F1, Anakonda, Legénybúcsú, Szenvedélyes nők
  - **Klasszikusok:** Cápa, Cinema Paradiso, Dirty Dancing, E.T., Indiana Jones, Ponyvaregény, Star Wars, Terminátor, Vissza a jövőbe, Volt egyszer egy vadnyugat
- **Záró sor:** „A teljes filmkínálatot a mellékelt dokumentumban találja." (14px, `rgba(255,255,255,.4)`, dőlt, középre).

### 6. Kapcsolat / footer (`id="kapcsolat"`)
- **Purpose:** Kapcsolatfelvétel + márka lezárás.
- **Background:** `radial-gradient(120% 120% at 50% 100%, #7a1632 0%, #3a2747 45%, #181c30 100%)`, padding `100px 32px`. Tetején egy második **csillagmező** overlay. Tartalom `max-width: 760px`, középre.
- **Components:**
  - „Keressetek bizalommal!" (Pacifico `clamp(26px,5vw,44px)` fehér).
  - „További kérdésekkel és szabad dátumokkal állunk rendelkezésre." (17px `rgba(255,255,255,.7)` font-weight 300).
  - **Kapcsolat-doboz** (inline-flex column, padding `30px 50px`, `background: rgba(0,0,0,.3)`, `border: 1px solid rgba(246,182,46,.35)`, `border-radius: 18px`, `backdrop-filter: blur(6px)`): felirat „Kapcsolattartó" (12px letter-spacing 3px `#f6b62e` uppercase); név „Víg-Kovács Ivett" (24px bold fehér); telefon link „+36 30 463 6324" (`href="tel:+36304636324"`, Luckiest Guy 28px `#58c5e0`).
  - Linkek (flex, gap 24px): „www.cinemacenter.hu" (`https://www.cinemacenter.hu`) és „facebook.com/cinemacenter.hu" (`https://www.facebook.com/cinemacenter.hu`) - `rgba(255,255,255,.85)`, alsó szegély `1px solid rgba(255,255,255,.3)`.
  - **Logo lockup:** „CINEMA" (fehér) / „CENTER" (`#f6b62e`) egymás alatt, Poppins font-weight 800, 22px, letter-spacing 4px. Alatta „© 2026 Cinema Center · Szabadtéri Mozi" (12px `rgba(255,255,255,.4)`).

---

## Interactions & Behavior
- **Filmkatalógus tabok:** kattintásra váltja az aktív kategóriát (`activeCat` state, alapérték 0). Csak az aktív kategória chipjei jelennek meg. `transition: all .15s` a gombokon.
- **Csillagmező (starfield):** a Hero és a Kapcsolat szekció tetején abszolút pozícionált, véletlenszerűen elhelyezett pici körök. ~20% „nagy" csillag (3-6px, `#ffe3a8`, `box-shadow: 0 0 8px #ffd479`), a többi apró (1-2.5px, fehér). Mindegyik `@keyframes twinkle` animáció: `0%,100% { opacity:.25 } 50% { opacity:1 }`, véletlen 2-6s időtartam és 0-4s késleltetés. Determinisztikus pszeudo-random generátor (seed: hero=7, kapcsolat=13), hogy konzisztens legyen - ezt szabadon helyettesítheted bármilyen egyenértékű megoldással.
- **CTA hover-ek:** elsődleges gomb `translateY(-2px)`; másodlagos gomb háttér világosodik.
- **Smooth scroll:** a CTA-k `#csomagok` / `#kapcsolat` ankerre ugranak - érdemes `scroll-behavior: smooth`-t adni (de NE `scrollIntoView` JS-t).
- **Felelős méretezés (responsive):** a fő szövegméretek már `clamp()`-pal skálázódnak. Javasolt töréspontok kisebb kijelzőkre: a csomag-grid 4 → 2 → 1 oszlop, a fotógaléria és a „Mit tartalmaz" grid 1 oszlopra; a Filmfesztivál sáv egymás alá rendezve.

## State Management
- Egyetlen UI állapot: **`activeCat`** (number, 0-3) - az aktív filmkategória indexe. Nincs adatlekérés, minden tartalom statikus, a kódban definiált tömbökből jön.

## Design Tokens

### Colors
| Token | Hex / érték | Használat |
|---|---|---|
| Gold (elsődleges accent) | `#f6b62e` | címek, elsődleges CTA, badge-ek |
| Cyan (másodlagos accent) | `#58c5e0` | feliratok, telefon, „Ingyenes!" |
| Red/Pink (harmadlagos) | `#e8466a` | dekoráció szekció, kiemelt szavak |
| Háttér - legmélyebb | `#11152a` | fő sötét háttér |
| Háttér - köztes | `#14182b`, `#15192c` | átmenetek |
| Háttér - világosabb éjkék | `#181c30` | intro teteje |
| Hero radial stops | `#9d1b3a`, `#7a1632`, `#3a2747` | hero/kapcsolat háttér |
| Sötét bordó (text stroke / badge szöveg) | `#3a1020`, `#2a1020` | címbetű körvonal, gomb-szöveg |
| Klapni világos | `#f4f4f4` | csapó-csíkok |
| Klapni sötét | `#111114`, `#0c0c10`, `#15151a` | klapni háttér |
| Halvány arany | `#ffe3a8`, `#ffd479` | badge szöveg, csillag-fény |
| Fehér szövegek | `#fff`, `rgba(255,255,255,.85/.7/.6/.5/.45/.4)` | fő- és másodlagos szöveg |
| Finom border-ök | `rgba(255,255,255,.07-.15)` | kártya-keretek, elválasztók |

### Typography (Google Fonts)
`https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Pacifico&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400;1,600&display=swap`
- **Luckiest Guy** - display címek (H1, film cím, csomag-nevek, „Ingyenes!", telefon). Gyakran `-webkit-text-stroke` sötét bordóval.
- **Pacifico** - kézírásos kiemelések (alcím, fotó-feliratok, „Keressetek bizalommal!", „Egyedi ajánlat").
- **Poppins** - minden testszöveg és UI; súlyok 300/400/500/600/700/800.
- Méretek: H1 `clamp(56px,11vw,138px)`; section H2 `clamp(34px,6vw,56px)`; nagy pitch `clamp(22px,3.6vw,34px)`; body 13-18px. Feliratok: uppercase, letter-spacing 2-4px.

### Spacing & radius
- Section padding: `90-110px` függőleges, `32px` vízszintes.
- Tartalom max-width: 760 / 1080 / 1120 / 1160 px.
- Border-radius: kártyák `18px`, nagy sáv `20px`, pill-ek/gombok `100px`, fotók `4px`.
- Árnyékok: kártya `0 20-30px 50-70px rgba(0,0,0,.45-.55)`; arany CTA `0 10px 28px rgba(246,182,46,.35)`.

## Assets
- `assets/photo1.png`, `photo2.png`, `photo3.png` - valódi eseményfotók az eredeti PDF kiajánlóból kivágva (belvárosi vetítés, esti kertmozi, vízparti élmény). Production-ben érdemes magasabb felbontású eredetiket bekérni a megrendelőtől. A PDF (`Nyarikiajanlo-compressed (1).pdf`) a forrásdokumentum.
- Nincs ikon-készlet; a ◆ és ★ sima Unicode karakterek - helyettesíthetők a kódbázis ikon-könyvtárával.
- Nincs külön logo-fájl; a „CINEMA CENTER" lockup tisztán tipográfia. Ha van hivatalos Cinema Center logó, azt használd.

## Files
- `Szabadteri Mozi.dc.html` - a teljes dizájn-referencia (template + logika egy fájlban). Minden szöveg, szín, méret és a teljes filmlista innen olvasható ki. **Megjegyzés:** ez egy speciális "Design Component" formátum egyedi futtatókörnyezethez - referenciának használd, ne másold közvetlenül.
