export class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById("repo__form");
    this.inputElement = document.getElementById("repository__input");
    this.listElement = document.getElementById("repo-list");

    this.formSubscribe();
  }

  /**
   * Subscribe to form submit event
   */
  formSubscribe() {
    this.formElement.onsubmit = (event) => {
      this.addToRepository(event);
    };
  }

  /**
   * Adds a new item to the repository list.
   * @param {*} HTMLFormEvent
   */
  async addToRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;

    this.renderListItem();
  }

  /**
   * Renders a new List Item after every repository list item.
   */
  renderListItem() {
    let imgElement = document.createElement("img");
    imgElement.setAttribute(
      "src",
      "https://avatars1.githubusercontent.com/u/46906069?s=460&u=ad0bda3350551c1b06f18f9fbfa590b2b5ba1fb0&v=4"
    );
    imgElement.setAttribute("alt", "Repository owner picture");

    let titleElement = document.createElement("strong");
    titleElement.appendChild(
      document.createTextNode("thiagojacinto/es6-review")
    );

    let descriptionElement = document.createElement("p");
    descriptionElement.appendChild(document.createTextNode("Hunger learner."));

    let anchorElement = document.createElement("a");
    anchorElement.setAttribute("href", "http://");
    anchorElement.setAttribute("target", "_blank");
    anchorElement.setAttribute("rel", "noopener noreferrer");
    anchorElement.appendChild(document.createTextNode("Access"));

    let listItemElement = document.createElement("li");
    listItemElement.appendChild(imgElement);
    listItemElement.appendChild(titleElement);
    listItemElement.appendChild(descriptionElement);
    listItemElement.appendChild(anchorElement);

    this.listElement.appendChild(listItemElement);
  }
}
