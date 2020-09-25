import API from "./api";

export class App {
  constructor() {
    this.repositories = [];

    this.formElement = document.getElementById("repo__form");
    this.inputElement = document.getElementById("repository__input");
    this.listElement = document.getElementById("repo__list");
    this.removeButtonsElements = document.getElementsByName("btn__remove");
    this.clearButtonElement = document.querySelector("button#btn__clear_all");

    this.formSubscribe();
    this.buttonClearSubscribe();
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
   * Subscribe into each "Remove" button of repositories list item.
   */
  buttonRemoveSubscribe() {
    this.removeButtonsElements.forEach((btn) => {
      btn.onclick = (event) => {
        this.removeFromList(event, btn.getAttribute("data-github_id"));
      };
    });
  }

  /**
   * Subscribe to clear all / button
   */
  buttonClearSubscribe() {
    this.clearButtonElement.onclick = (event) => {
      this.clearRepository(event);
    };
  }

  /**
   * Remove all items from repositories list
   * @param {*} event
   */
  clearRepository(event) {
    event.preventDefault();

    this.repositories = [];

    this.render();
  }

  /**
   * Adds a new item to the repository list.
   * @param {HTMLFormEvent} event
   */
  async addToRepository(event) {
    event.preventDefault();

    const repoInput = this.inputElement.value;
    if (repoInput === "") return;

    const response = await this.fetchAPI(repoInput);

    const {
      id,
      name,
      description,
      html_url,
      language,
      owner: { avatar_url },
    } = response.data;

    const item = {
      id,
      name,
      description,
      html_url,
      language,
      avatar_url,
    };

    this.repositories.push(item);
    this.render();
  }

  /**
   * Fetch Github's Repository information API
   * @param {*} githubRepo name of the required repository.
   */
  async fetchAPI(githubRepo = "thiagojacint/es6-review") {
    return await API.get(`/repos/${githubRepo}`);
  }

  /**
   * Clear list of repositories from the UL HTML Element.
   */
  clearListView() {
    this.listElement.innerHTML = "";
  }

  /**
   * Removes repository from repositories list.
   * @param {*} event
   * @param {*} id
   */
  removeFromList(event, id) {
    console.assert(event !== null);
    event !== null && event.preventDefault();
    console.assert(id !== "");
    if (id.trim() === "") return;

    this.repositories = this.repositories.filter(
      (item) => item.id !== parseInt(id)
    );

    this.render();
  }

  /**
   * Renders a new List Item after every repository list item.
   */
  render() {
    this.clearListView();

    this.repositories.forEach(
      ({ avatar_url, name, language = "", description, html_url, id }) => {
        let imgElement = document.createElement("img");
        imgElement.setAttribute("src", avatar_url);
        imgElement.setAttribute("alt", "Repository owner picture");

        let titleElement = document.createElement("strong");
        titleElement.appendChild(document.createTextNode(name));

        let descriptionElement = document.createElement("p");
        language !== null &&
          descriptionElement.appendChild(
            document.createTextNode(`[${language}] `)
          );
        descriptionElement.appendChild(document.createTextNode(description));

        let anchorElement = document.createElement("a");
        anchorElement.setAttribute("href", html_url);
        anchorElement.setAttribute("target", "_blank");
        anchorElement.setAttribute("rel", "noopener noreferrer");

        let accessBtnElement = document.createElement("button");
        accessBtnElement.appendChild(document.createTextNode("Access"));

        anchorElement.appendChild(accessBtnElement);

        let removeBtnElement = document.createElement("button");
        removeBtnElement.setAttribute("data-github_id", id);
        removeBtnElement.setAttribute("name", "btn__remove");
        removeBtnElement.appendChild(document.createTextNode("Remove"));

        let listItemElement = document.createElement("li");
        listItemElement.appendChild(imgElement);
        listItemElement.appendChild(titleElement);
        listItemElement.appendChild(descriptionElement);
        listItemElement.appendChild(anchorElement);
        listItemElement.appendChild(removeBtnElement);

        this.listElement.appendChild(listItemElement);
      }
    );

    this.removeButtonsElements = document.getElementsByName("btn__remove");
    this.buttonRemoveSubscribe();
  }
}
