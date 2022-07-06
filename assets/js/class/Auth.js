
class Auth {
    constructor(fakeUser) {

        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify(fakeUser));
        }

        this.users = JSON.parse(localStorage.getItem("users"));
        console.log(this.users);
        this.eventModal();
    }

    createModal(type) {
        const headerLeftModal = document.querySelector(".header-left-modal");
        const formModal = document.createElement("form");
        formModal.classList.add("header-left-modal-form")

        this.removeModalOfDom();

        if (type === "connexion") {
            formModal.innerHTML = `
                <input type="email" name="form-modal-email" id="form-modal-email" placeholder="Email" required>
                <input type="password" name="form-modal-password" id="form-modal-password" placeholder="Mot de passe" required>
                <p id="form-modal-message"></p>
                <button id="form-modal-btn" type="submit">Connexion</button>
            `
        } else if (type === "inscription") {
            formModal.innerHTML = `
                <input type="text" name="form-modal-prenom" id="form-modal-prenom" placeholder="Prénom" required>
                <input type="text" name="form-modal-nom" id="form-modal-nom" placeholder="Nom" required>
                <input type="email" name="form-modal-email" id="form-modal-email" placeholder="Email" required>
                <input type="password" name="form-modal-password" id="form-modal-password" placeholder="Mot de passe" required>
                <p id="form-modal-message"></p>
                <button id="form-modal-btn" type="submit">Inscription</button>
            `
        }

        headerLeftModal.appendChild(formModal);
    }

    toggleModal() {
        const modal = document.querySelector(".header-left-modal");

        modal.classList.toggle("header-left-modal-active");
    }

    eventModal() {
        const btnConnexion = document.querySelector("#header-left-connexion");
        const btnInscription = document.querySelector("#header-left-inscription");
        const closeModal = document.querySelector(".header-left-modal-bg");

        btnConnexion.addEventListener("click", () => {
            this.toggleModal();
            this.createModal("connexion");
            this.sendFormModal("connexion");
        })
        
        btnInscription.addEventListener("click", () => {
            this.toggleModal();
            this.createModal("inscription");
            this.sendFormModal("inscription");
        })

        closeModal.addEventListener("click", () => {
            this.removeModalOfDom();
            this.toggleModal();

        })
    }

    removeModalOfDom() {
        if (document.querySelector(".header-left-modal-form")) {
            document.querySelector(".header-left-modal-form").remove();
        }
    }

    sendFormModal(type) {
        const form = document.querySelector(".header-left-modal-form");
        
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            
            try {
                const formBtn = document.querySelector("#form-modal-btn");
                const email = document.querySelector("#form-modal-email");
                const password = document.querySelector("#form-modal-password");
                let message = document.querySelector("#form-modal-message");

                if (type === "connexion") {
                    let userFind = null;

                    this.users.forEach(user => {
                        if (user.email === email.value) {
                            userFind = user;
                        } 
                    });

                    if (userFind === null) {
                        throw "Email incorrect.";
                    }

                    if (userFind.password !== password.value) {
                        throw "Mot de passe incorrect.";
                    }
    
                    message.innerHTML = "";
                    
                    formBtn.style.background = "#1da81f";
                    formBtn.style.color = "#fff";
                    formBtn.style.border = "none";
    
                    setTimeout(() => {
                        this.toggleModal();
                        this.removeModalOfDom();
                    }, 2000);
                } else if (type === "inscription") {
                    const prenom = document.querySelector("#form-modal-prenom");
                    const nom = document.querySelector("#form-modal-nom");
        
                    this.users.push({
                        email: email.value,
                        password: password.value,
                        firstName: prenom.value,
                        lastName: nom.value
                    })
    
                    const arrayToStorage = JSON.stringify(this.users);
    
                    localStorage.setItem("users", arrayToStorage);
    
                    message.innerHTML = "";

                    formBtn.style.background = "#1da81f";
                    formBtn.style.color = "#fff";
                    formBtn.style.border = "none";
    
                    setTimeout(() => {
                        this.toggleModal();
                        this.removeModalOfDom();
                    }, 2000);
    
                }
            } catch (error) {
                document.querySelector("#form-modal-message").textContent = error;
            }
        })
    }
}

export default Auth;