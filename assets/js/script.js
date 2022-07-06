import { fakeDb, fakeUser } from "./service/fakeDb.js";
import Cours from "./class/Cours.js";
import Auth from "./class/Auth.js";



const location = window.location.pathname;

switch (location) {
    case "/index.html":
        const cours = new Cours();
        cours.createHtmlCours(fakeDb);
        break;
    default: 
        console.log("Page non trouvée");
        break;
}
console.log(location);