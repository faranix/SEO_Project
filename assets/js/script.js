import { fakeDb, fakeUser } from "./service/fakeDb.js";
import Cours from "./class/Cours.js";
import Auth from "./class/Auth.js";



const location = window.location;


const cours = new Cours();
cours.createHtmlCours(fakeDb);
