const sharp = require('sharp');
const path = require('path');
const _ = require('lodash');


const pkmnTileList = [
  null,
  "56-pikachu",null,
  "57-raichu",null,
  "200-clefairy",
  "201-clefable",
  "168-vulpix",null, 
  "169-ninetales",null,
  "34-zubat",null,
  "35-golbat", null,
  "53-paras",
  "54-parasect",
  "68-psyduck",
  "69-golduck",
  "150-growlithe",
  "151-arcanine",null,
  "58-abra",
  "59-kadabra", null,
  "60-alakazam", null,
  "154-machop",
  "155-machoke",
  "156-machamp",
  "170-tentacool",
  "171-tentacruel",
  "46-geodude",
  "47-graveler",
  "48-golem",
  "23-ponyta",
  "24-rapidash",
  "177-magnemite",
  "178-magneton",
  "136-gastly",
  "137-haunter",
  "138-gengar",
  "118-onix",
  "192-voltorb",
  "193-electrode",null,
  "125-lickitung",
  "120-rhyhorn",  null,
  "121-rhydon",  null,
  "87-chansey",
  "95-tangela",
  "77-mr-mime",
  "72-scyther",  null,
  "183-electabuzz",
  "175-magmar",
  "80-magikarp",  null,
  "81-gyarados",  null,
  "25-eevee",  null,
  "26-vaporeon",
  "27-jolteon",
  "28-flareon",
  "133-porygon",
  "52-snorlax",
  "4-cyndaquil",
  "5-quilava",
  "6-typhlosion",
  "36-crobat",
  "55-pichu",
  "199-cleffa",
  "127-togepi",
  "128-togetic",
  "124-sudowoodo",  null,
  "78-aipom",  null,
  "105-yanma",
  "29-espeon",
  "30-umbreon",
  "140-murkrow",null,
  "197-misdreavus",
  "142-unown",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
  "185-gligar",  null,
  "119-steelix",  null,
  "84-qwilfish",
  "74-scizor",  null,
  "75-heracross",  null,
  "202-sneasel",  null,  null,  null,
  "112-teddiursa",
  "113-ursaring",  null,
  "212-swinub",
  "213-piloswine",  null,
  "146-remoraid",
  "147-octillery",  null,
  "165-mantine",
  "134-porygon-2",
  "49-stantler",
  "182-elekid",
  "174-magby",
  "88-blissey",
  "18-wurmple",
  "19-silcoon",
  "20-beautifly",  null,
  "21-cascoon",
  "22-dustox",  null,
  "101-ralts",
  "102-kirlia",
  "103-gardevoir",
  "190-nosepass",
  "90-roselia",  null,
  "97-barboach",
  "98-whiscash",
  "158-duskull",
  "159-dusclops",
  "196-chimecho",
  "205-snorunt",
  "206-glalie",
  "143-spheal",
  "144-sealeo",
  "145-walrein",
  "130-turtwig",
  "131-grotle",
  "132-torterra",
  "61-chimchar",
  "62-monferno",
  "63-infernape",
  "161-piplup",
  "162-prinplup",
  "163-empoleon",
  "12-starly",  null,
  "13-staravia",  null,
  "14-staraptor",  null,
  "10-bidoof",  null,
  "11-bibarel",  null,
  "39-kricketot",  null,
  "40-kricketune",  null,
  "15-shinx",  null,
  "16-luxio",  null,
  "17-luxray",  null,
  "89-budew",
  "91-roserade",  null,
  "208-cranidos",
  "209-rampardos",
  "210-shieldon",
  "211-bastiodon",
  "43-burmy",  null,  null,
  "44-wormadam",  null,  null,
  "45-mothim",
  "70-combee",  null,
  "71-vespiquen",
  "109-pachirisu",  null,
  "41-buizel",  null,
  "42-floatzel",  null,
  "66-cherubi",
  "67-cherrim",  null,
  "82-shellos",  null,
  "83-gastrodon",  null,
  "79-ambipom",  null,
  "37-drifloon",
  "38-drifblim",
  "64-buneary",
  "65-lopunny",
  "198-mismagius",
  "141-honchkrow",
  "152-glameow",
  "153-purugly",
  "195-chingling",
  "110-stunky",
  "111-skuntank",
  "180-bronzor",
  "181-bronzong",
  "123-bonsly",
  "76-mime-jr",
  "86-happiny",
  "157-chatot",
  "139-spiritomb",
  "187-gible",  null,
  "188-gabite",  null,
  "189-garchomp",  null,
  "51-munchlax",
  "223-riolu",
  "224-lucario",
  "107-hippopotas",  null,
  "108-hippowdon",  null,
  "148-skorupi",
  "149-drapion",
  "99-croagunk",  null,
  "100-toxicroak",  null,
  "92-carnivine",
  "172-finneon",  null,
  "173-lumineon",  null,
  "164-mantyke",
  "217-snover",  null,
  "218-abomasnow",  null,
  "204-weavile",  null,
  "179-magnezone",
  "126-lickilicky",
  "122-rhyperior",  null,
  "96-tangrowth",  null,
  "184-electivire",
  "176-magmortar",
  "129-togekiss",
  "106-yanmega",
  "31-leafeon",
  "32-glaceon",
  "186-gliscor",
  "214-mamoswine",  null,
  "135-porygon-z",
  "104-gallade",
  "191-probopass",
  "160-dusknoir",
  "207-froslass",
  "194-rotom",  null,  null,  null,  null,  null,
  "225-uxie",
  "226-mesprit",
  "227-azelf",
  "235-dialga",  null,
  "236-palkia",  null,
  "228-heatran",
  "229-regigigas",
  "237-giratina",  null,
  "230-cresselia",
  "239-phione",
  "240-manaphy",
  "242-darkrai",
  "241-shaymin",  null,
  "238-arceus",null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,
  "7-oshawott",
  "8-dewott",
  "9-samurott",
  "93-petilil",
  "94-lilligant",  null,
  "166-basculin",
  "219-zorua",
  "220-zoroark",
  "221-rufflet",
  "222-braviary",
  "231-tornadus",  null,
  "232-thundurus",  null,
  "233-landorus",  null,
  "215-bergmite",
  "216-avalugg",null,
  "115-goomy",
  "116-sliggoo",
  "117-goodra",
  "33-sylveon",
  "1-rowlet",
  "2-dartrix",
  "3-decidueye",
  "50-wyrdeer",
  "73-kleavor",  null,
  "203-sneasler",
  "234-enamorus",  null,
  "85-overqwil",
  "167-basculegion",  null,
  "114-ursaluna",
];

async function cropImage(tileNumber) {
  if (!pkmnTileList[tileNumber]) {
    console.log(`Nothing found for tileNumber ${tileNumber}`);
    return;
  }
  const tile = _.padStart(`${tileNumber}`, 3, '0');
  const img = path.resolve(__dirname, `../../apps/pla-dex/src/assets/normal-raw/tile${tile}.png`);

  const [dex, ...rest] = pkmnTileList[tileNumber].split('-');
  const newName = rest.join('-');
  const newImg = path.resolve(__dirname, `../../apps/pla-dex/src/assets/normal/${newName}.png`);

  try {
    const distance = 18;
    const metaData = await sharp(img).metadata();
    await sharp(img)
      .extract({ width: metaData.width - distance, height: metaData.height - distance, left: distance / 2, top: distance / 2  })
      .toFile(newImg);
  } catch (error) {
    console.log(error);
  }
}
  
let i = 0;
for(i; i <= 377; i++) {
    cropImage(i);
}

