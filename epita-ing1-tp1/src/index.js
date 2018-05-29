import list from "./actions/list";
import add from "./actions/add";
import remove from "./actions/remove"

const picturesGridElement = document.getElementById("pictures-grid");
const pictureInputElement = document.getElementById("picture-url-input");
const pictureAddButtonElement = document.getElementById("picture-add-button");
const pictureRemoveButtonElement = document.getElementById("picture-update-button");

const pictureItemTemplate = document.getElementById("picture-item-template");

const getInputContents = () => pictureInputElement.value;
const clearInputContents = () => (pictureInputElement.value = "");

const addPictureHandler = () => {
  const url = getInputContents();

  // FIXME: use your actions functions to add a new picture
  if ( url.length != 0){
    add(url);
  }
  // FIXME: bonus, trim eventual whitespaces and validate content

  clearInputContents();
  refreshGrid();
};

const refreshGrid = () => {
  // FIXME: use your functions to get all the elements
  const items = list();

  const fragment = document.createDocumentFragment();

  items.forEach(i => {
    const clone = document.importNode(pictureItemTemplate.content, true);

    const imgElement = clone.querySelector(".picture-item-image");

    // FIXME: set the URL from your Picture model.
    imgElement.src = i;/*"https://picsum.photos/200/300/?random";*/

    const deleteButtonElement = clone.querySelector(
      ".picture-item-delete-button"
    );
    const updateButtonElement = clone.querySelector(
      ".picture-item-update-button"
    );

    // FIXME: use your functions to delete the selected element
    deleteButtonElement.addEventListener("click", () => {
      remove(i);
      clearInputContents();
      refreshGrid();
    });
    
    updateButtonElement.addEventListener("click", () => {});

    fragment.appendChild(clone);
  });

  picturesGridElement.innerHTML = "";
  picturesGridElement.appendChild(fragment);
};

refreshGrid();

pictureAddButtonElement.addEventListener("click", () => addPictureHandler());
