"use strict";

const hero = {
  name: "William",
  class: "mage",
  level: 99,
  isAlive: true,
  "heal-multiple hp": 210,
  "heal-multiple mana": 610,
};

console.log(
  "name of hero " + hero.name,
  ", hero class " + hero.class,
  ", hero level " + hero.level,
  "and he is alive? " + hero.isAlive,
);

hero.stats = {
  hp: 3000,
  mana: 142365,
  strength: 142,
  agility: 163,
  intelligence: 589,
};

console.log(hero.stats);

console.log("strength " + hero.stats.strength);
console.log("cast is double with intelligence " + hero.stats.intelligence * 2);

hero.inventory = [
  "sword",
  "potion",
  "magic staff",
  "Magic amulet",
  "spell scroll",
];

console.log(hero.inventory);

console.log(
  "first inventory item is " + hero.inventory[0],
  "and last inventory item is " + hero.inventory[hero.inventory.length - 1],
);

const enemy = {
  name: "Orc",
  "critical hit chance": 0.15,
  "attack-speed": 2.5,
  ["damage-" + hero.class]: 50,
};

console.log(enemy);

console.log(enemy.name);
console.log(enemy["critical hit chance"]);
console.log(enemy["damage-" + hero.class]);

// Через крапку не можна звертатися до властивостей,
// якщо ключ містить пробіли, дефіси або формується динамічно.
// У таких випадках потрібно використовувати квадратні дужки [].

hero.abilities = {
  attack: function () {
    return `${hero.name} attacking!`;
  },
  heal: () => {
    return `${hero.class}-${hero.name} is healling with one little bottle by ${50 * hero["heal-multiple hp"]} hp points and ${50 * hero["heal-multiple mana"]} mana points`; //one little botle wil heal hero for 50hp points and 50mana points
  },
  levelUp: () =>
    `for level up, you need collect ${100 + hero.level * hero.level * 25} exp points !!!`,
};

console.log(hero.abilities.attack());
console.log(hero.abilities.heal());
console.log(hero.abilities.levelUp());

hero.location = {
  region: "Forbidden castle of magic",
  city: "The second wall of the Serdigan throne",
  coordinates: {
    x: 150,
    y: 80,
    z: 25,
  },
};

console.log("Region: " + hero.location.region);
console.log("Z coordinate: " + hero.location.coordinates.z);

const villain = {
  name: "Mordred",
  class: "warlock",
  level: 94,
  isAlive: true,

  "heal-multiple hp": 180,
  "heal-multiple mana": 540,

  stats: {
    hp: 4500,
    mana: 160000,
    strength: 210,
    agility: 110,
    intelligence: 650,
  },

  inventory: [
    "Dark Staff",
    "Poison",
    "Black Crystal",
    "Cursed Ring",
    "Dark Spell Book",
  ],

  abilities: {
    attack() {
      return `${villain.name} attacks with dark magic!`;
    },

    heal() {
      return `${villain.name} restored ${
        50 * villain["heal-multiple hp"]
      } HP and ${50 * villain["heal-multiple mana"]} Mana`;
    },

    levelUp() {
      return `For next level ${villain.name} needs ${
        100 + villain.level * villain.level * 25
      } EXP`;
    },
  },

  location: {
    region: "Shadow Kingdom",
    city: "Black Fortress",
    coordinates: {
      x: -240,
      y: 40,
      z: 120,
    },
  },
};

console.log(villain.abilities.heal());

console.log("Hero:", hero.name);
console.log("Villain:", villain.name);

if (hero.stats.hp > villain.stats.hp) {
  console.log(`${hero.name} has more HP.`);
} else if (hero.stats.hp < villain.stats.hp) {
  console.log(`${villain.name} has more HP.`);
} else {
  console.log("Both characters have the same HP.");
}

console.log(
  `Participants of the duel: ${hero.name} (${hero.inventory.join(
    ", ",
  )}) vs ${villain.name} (${villain.inventory.join(", ")})`,
);
