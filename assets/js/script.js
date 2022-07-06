import { fakeDb, fakeUser } from "./service/fakeDb.js";
import Cours from "./class/Cours.js";
import Auth from "./class/Auth.js";

const loc_array = window.location.pathname.split("/");

switch(loc_array[loc_array.length - 1]) {
    case "": case "index.html": case "/":
        const auth = new Auth(fakeUser);
        const cours = new Cours();
        cours.createHtmlCours(fakeDb);
        break;
    default:
        break;
}
