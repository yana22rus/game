import React from "react";
import Input from "./Input";
import {Class_card} from "./Select_my";
import {Type_card} from "./Select_my";
import {Type_creature} from "./Select_my";
import {Rare_card} from "./Select_my";
import {Mana_card} from "./Select_my";
import {Attac_card} from "./Select_my";
import {Life_card} from "./Select_my";
import {Keyword_card} from "./Select_my";
import {Mechanics_card} from "./Select_my";



const Submit = () => {
    return (
      <form method="POST">
      <Input placeholder="Название карты" name="title_card" />
      <Input placeholder="Описание карты" name="description_card" />
      <Class_card />
      <Type_card />
      <Type_creature />
      <Rare_card />
      <Mana_card />
      <Attac_card />
      <Life_card />
      <Keyword_card />
      <Mechanics_card />
      <input type="submit" value={'Сохранить'}/>
      </form>
    )
  }

export default Submit;