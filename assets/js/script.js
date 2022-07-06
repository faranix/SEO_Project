import { fakeDb, fakeUser } from "./service/fakeDb.js";
import Cours from "./class/Cours.js";
import Auth from "./class/Auth.js";

const cours = new Cours();
cours.createHtmlCours(fakeDb);