import { fakeDb, fakeUser } from "./service/fakeDb.js";
import Cours from "/assets/js/class/Cours.js";
import Auth from "/assets/js/class/Auth.js";

const cours = new Cours();
cours.createHtmlCours(fakeDb);