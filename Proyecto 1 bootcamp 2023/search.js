fetch("https://thronesApi.com/api/v2/characters")
    .then(function (response) {
        let res = response.json()
        console.log(res);
        return res
    })
    .then(function (response) {
        console.log(response);
    })

// INFORMACION DE CADA PERSONAJE----------------------------------------------
fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(characters => {

        // RECORRER CADA PERSONAJE--------------------------------------------
        characters.forEach(character => {

            // ELEMENTOS HTML PARA MOSTRAR A CADA PERSONAJE-------------------
            const fullName = document.createElement('h2');
            fullName.textContent = character.fullName;

            const title = document.createElement('h3');
            title.textContent = character.title || 'No title';

            const image = document.createElement('img');
            image.id = "pictures";
            image.src = character.imageUrl;

            const addToFavorites = document.createElement('button');
            addToFavorites.id = "addandremove";
            addToFavorites.textContent = 'Añadir a favoritos';
            addToFavorites.addEventListener('click', () => {

                // AGREGAR PERSONAJE AL LOCAL STORAGE--------------------------
                const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                favorites.push(character);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            });

            const removeButton = document.createElement('button');
            removeButton.id = "addandremove";
            removeButton.textContent = 'Quitar de favoritos';
            removeButton.addEventListener('click', () => {

                // QUITAR PERSONAJE DEL LOCAL STORAGE--------------------------
                const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
                const index = favorites.findIndex(favorite => favorite.url === character.url);
                favorites.splice(index, 1);
                localStorage.setItem('favorites', JSON.stringify(favorites));
            });

            // AGREGAR LA INFO DE UN PERSONAJE SELECCIONADO AL DOM-------------
            const div = document.createElement('div');
            div.id = "information";

            div.appendChild(fullName);
            div.appendChild(title);
            div.appendChild(image);
            div.appendChild(addToFavorites);
            div.appendChild(removeButton);
            document.body.appendChild(div);
        });
    });

// SEÑALA EL FOOTER
const footer = document.querySelector('footer');

// FUNCION DETECTA SI EL USUARIO HIZO SCROLL AL FONDO DE LA PÁGINA
function scrollDown() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

// FUNCIÓN QUE PERMITE VER EL FOOTER
function toggleFooterVisibility() {
    if (scrollDown()) {
        footer.style.display = 'block';
    } else {
        footer.style.display = 'none';
    }
}


window.addEventListener('scroll', toggleFooterVisibility);

let myImage = document.querySelector("img");
myImage.setAttribute("id", "logoGot");

