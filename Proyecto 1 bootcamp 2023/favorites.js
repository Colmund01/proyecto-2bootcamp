// SACAR PERSONAJES FAVORITOS DEL LOCAL STORAGE-----------------------------------------
const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

// RECORRER CADA PERSONAJE FAVORITO-----------------------------------------------------
favorites.forEach(character => {

  // ELEMENTOS HTML PARA LOS DETALLES A MOSTRAR DEL PERSONAJE---------------------------
  const fullName = document.createElement('h2');
  fullName.textContent = character.fullName;

  const title = document.createElement('h3');
  title.textContent = character.title || 'No title';

  const image = document.createElement('img');
  image.src = character.imageUrl;

});

// RECORRER CADA PERSONAJE FAVORITO----------------------------------------------------
favorites.forEach(character => {

  // ELEMENTOS HTML PARA CADA PERSONAJE A MOSTRAR--------------------------------------
  const fullName = document.createElement('h2');
  fullName.textContent = character.fullName;

  const title = document.createElement('h3');
  title.textContent = character.title || 'No title';

  const image = document.createElement('img');
  image.id = "pictures";
  image.src = character.imageUrl;

  const removeButton = document.createElement('button');
  removeButton.id = "addandremove";
  removeButton.textContent = 'Quitar de favoritos';
  removeButton.addEventListener('click', () => {

    // QUITAR PERSONAJE DEL LOCAL STORAGE--------------------------------------------
    const index = favorites.findIndex(favorite => favorite.url === character.url);
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // QUITAR LOS ELEMENTOS HTML DEL DOM---------------------------------------------
    div.remove();
  });

  // AGREGAR LOS ELEMENTOS HTML AL DOM-----------------------------------------------
  const div = document.createElement('div');
  div.id = "information";
  div.appendChild(fullName);
  div.appendChild(title);
  div.appendChild(image);
  div.appendChild(removeButton);
  document.body.appendChild(div);
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
