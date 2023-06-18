import React from "react";
import Select from "react-select";

const class_card = [
  {
    label: "Одноцветные",
    options: [
      { label: "Strength", value: "Strength" },
      { label: "Intelligence", value: "Intelligence" },
      { label: "Willpower", value: "Willpower" },
      { label: "Agility", value: "Agility" },
      { label: "Netural", value: "Netural" },
      { label: "Archer", value: "Archer" },
    ],
  },
  {
    label: "Двухцветные",
    options: [
      { label: "Assassin", value: "Assassin" },
      { label: "Battlemage", value: "Battlemage" },
      { label: "Mage", value: "Mage" },
      { label: "Monk", value: "Monk" },
      { label: "Scout", value: "Scout" },
      { label: "Sorcerer", value: "Sorcerer" },
      { label: "Spellsword", value: "Spellsword" },
      { label: "Warrior", value: "Warrior" },
    ],
  },
];

const type_card = [
  { label: "Creature", value: "Creature" },
  { label: "Action", value: "Action" },
  { label: "Item", value: "Item" },
  { label: "Support", value: "Support" },
];

const type_creature = [
  { label: "People", value: "People" },
  { label: "Orcs", value: "Orcs" },
  { label: "Elves", value: "Elves" },
  { label: "Undead", value: "Undead" },
  { label: "Demons", value: "Demons" },
  { label: "Water races", value: "Water races" },
  { label: "Animals", value: "Animals" },
];
const rare_card = [
  { label: "Legendary", value: "Legendary" },
  { label: "Epic", value: "Epic" },
  { label: "Rare", value: "Rare" },
  { label: "Common", value: "Common" },
  { label: "Demons", value: "Demons" },
  { label: "Water races", value: "Water races" },
  { label: "Animals", value: "Animals" },
];

const mana_card = set_data_select(20);

const attac_card = set_data_select(15);

const life_card = set_data_select(15);

const keyword_card = [
  { label: "Guard", value: "Guard" },
  { label: "Ward", value: "Ward" },
  { label: "Drain", value: "Drain" },
  { label: "Lethal", value: "Lethal" },
  { label: "Breakthrough", value: "Breakthrough" },
  { label: "Charge races", value: "Charge races" },
];

function set_data_select(n) {
  let lst = [];

  for (let i = 0; i <= n; i++) {
    lst.push({ label: i, value: i });
  }
  return lst;
}

const Class_card = (props) => {
  return (
    <div>
      <Select options={class_card} placeholder={<div>Класс карты</div>} />
    </div>
  );
};

const Type_card = (props) => {
  return (
    <div>
      <Select options={type_card} placeholder={<div>Тип карты</div>} />
    </div>
  );
};

const Type_creature = (props) => {
  return (
    <div>
      <Select
        isMulti={true}
        options={type_creature}
        placeholder={<div>Вид существа</div>}
      />
    </div>
  );
};

const Rare_card = (props) => {
  return (
    <div>
      <Select options={rare_card} placeholder={<div>Редкость карты</div>} />
    </div>
  );
};

const Mana_card = (props) => {
  return (
    <div>
      <Select options={mana_card} placeholder={<div>Манакост</div>} />
    </div>
  );
};

const Attac_card = (props) => {
  return (
    <div>
      <Select options={attac_card} placeholder={<div>Атака</div>} />
    </div>
  );
};

const Life_card = (props) => {
  return (
    <div>
      <Select options={life_card} placeholder={<div>Жизнь</div>} />
    </div>
  );
};
const Keyword_card = (props) => {
  return (
    <div>
      <Select
        isMulti={true}
        options={keyword_card}
        placeholder={<div>Ключевые слова</div>}
      />
    </div>
  );
};

const mechanics_card = [
  { label: "Pilfer", value: "Pilfer" },
  { label: "Last Gaps", value: "Last Gaps" },
  { label: "Summon", value: "Summon" },
];
const Mechanics_card = (props) => {
  return (
    <div>
      <Select
        isMulti={true}
        options={mechanics_card}
        placeholder={<div>Механики карты</div>}
      />
    </div>
  );
};

export {
  Class_card,
  Type_card,
  Type_creature,
  Rare_card,
  Mana_card,
  Attac_card,
  Life_card,
  Keyword_card,
  Mechanics_card,
};
