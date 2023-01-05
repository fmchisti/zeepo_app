const createTabLink = (name, id, forTab) => {
  const li = document.createElement("li");
  li.classList.add("nav-item");
  li.innerHTML = `
  <a id="${id}" data-toggle="tab" href="${id}" role="tab" aria-controls="${forTab}" aria-selected="false" class="nav-link">${name}</a>
  `;

  return li;
};

export default createTabLink;
