class Cours {
    createHtmlCours(data) {
        const allCours = document.querySelector(".accueil-cours-right");

        data.forEach(element => {
            const cour = document.createElement("a");
            cour.classList.add("accueil-cours-right-cour");
            cour.href = element.href;
            
            cour.innerHTML = `
                <figure class="accueil-cours-right-cour-img">
                    <img src="./assets/images/${element.image.src}" alt="${element.image.alt}">
                    <figcaption>${element.title}</figcaption>
                </figure>

                <div class="accueil-cours-right-cour-text">
                    <p class="accueil-cours-right-cour-text-title">${element.title}</p>
                    <p class="accueil-cours-right-cour-text-description">${element.description}</p>
                </div>
            `

            allCours.appendChild(cour);
        });
    }
}

export default Cours;