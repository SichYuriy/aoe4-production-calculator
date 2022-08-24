import {createAction} from "@reduxjs/toolkit";
import CivilizationsEnum from "../../data/CivilizationsEnum";

const changeCivilization = createAction<CivilizationsEnum>('civilization/change')

export default changeCivilization;
