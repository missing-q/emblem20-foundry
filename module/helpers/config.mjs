export const EMBLEM20 = {};

/**
 * The set of Ability Scores used within the sytem.
 * @type {Object}
 */
 EMBLEM20.abilities = {
  "str": "EMBLEM20.AbilityStr",
  "dex": "EMBLEM20.AbilityDex",
  "con": "EMBLEM20.AbilityCon",
  "int": "EMBLEM20.AbilityInt",
  "wis": "EMBLEM20.AbilityWis",
  "cha": "EMBLEM20.AbilityCha"
};

EMBLEM20.abilityAbbreviations = {
  "str": "EMBLEM20.AbilityStrAbbr",
  "dex": "EMBLEM20.AbilityDexAbbr",
  "con": "EMBLEM20.AbilityConAbbr",
  "int": "EMBLEM20.AbilityIntAbbr",
  "wis": "EMBLEM20.AbilityWisAbbr",
  "cha": "EMBLEM20.AbilityChaAbbr"
};

EMBLEM20.weaponTypes = {
  "sword": {
    "label":"Sword",
    "altlabel": "Katana",
    "id":0,
    "strength":[2],
    "weak":[1],
  },
  "lance": {
    "label":"Lance",
    "altlabel": "Naginata",
    "id":1,
    "strength":[0],
    "weak":[2]
  },
  "axe": {
    "label":"Axe",
    "altlabel": "Club",
    "id":2,
    "strength":[1],
    "weak":[0]
  },
  "bow": {
    "label":"Bow",
    "altlabel": "Yumi",
    "id":3,
    "strength":[4],
    "weak":[5]
  },
  "dagger": {
    "label":"Dagger",
    "altlabel": "Shuriken",
    "id":4,
    "strength":[5],
    "weak":[3]
  },
  "gun": {
    "label":"Gun",
    "altlabel": "Tanegashima",
    "id":5,
    "strength":[3],
    "weak":[4]
  },
  "anima": {
    "label":"Anima Magic",
    "altlabel": "Anima Magic",
    "id":6,
    "strength":[7],
    "weak":[8]
  },
  "light": {
    "label":"Light Magic",
    "altlabel": "Light Magic",
    "id":7,
    "strength":[8],
    "weak":[6]
  },
  "dark": {
    "label":"Dark Magic",
    "altlabel": "Dark Magic",
    "id":8,
    "strength":[6],
    "weak":[7]
  },
  "stone": {
    "label":"Stone",
    "altlabel": "Claw",
    "id":9,
    "strength":[],
    "weak":[]
  },
  "staff": {
    "label":"Staff",
    "altlabel": "Rod",
    "id":10,
    "strength":[],
    "weak":[]
  }
}