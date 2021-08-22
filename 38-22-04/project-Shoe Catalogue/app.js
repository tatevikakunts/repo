const categories = ["Women", "Men", "Kids"];

class Shoe {
  constructor(title, size, color, category) {
    this.id = Date.now();
    this.title = title;
    this.size = size;
    this.color = color;
    this.category = category;
  }
}
class Shoes {
  constructor() {
    this.shoes = [];
    if (localStorage.shoes) {
      this.shoes = JSON.parse(localStorage.getItem("shoes"));
    }
  }
  addShoe(shoe) {
    this.shoes.push(shoe);
  }
}
const shoes = new Shoes();
// shoes.addShoe(new Shoe("Sneaker2", [36, 37, 38], "White", "Women"));
// shoes.addShoe(new Shoe("Sneaker1", [40, 41, 42], "Black", "Men"));
// shoes.addShoe(new Shoe("Sneaker3", [30, 31, 32], "Yellow", "Kids"));

const main = () => {
  createForm();
  createFilters();
  renderCatalogue(shoes.shoes);
};

const createForm = () => {
  createCategoryOptions("category");
  document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const color = document.querySelector("#color").value;
    const category = document.querySelector("#category").value;
    const sizes = document.querySelectorAll('input[name="size"]');
    const sizeList = checkSizes(sizes);
    shoes.addShoe(new Shoe(title, sizeList, color, category));
    document.querySelector("#title").value = "";
    document.querySelector("#color").value = "";
    for (size of sizes) {
      size.checked = false;
    }
    localStorage.setItem("shoes", JSON.stringify(shoes.shoes));
    renderCatalogue(shoes.shoes);
  });
};
const checkSizes = (sizes) => {
  const result = [];
  for (size of sizes) {
    if (size.checked) {
      result.push(size.value);
    }
  }

  return result;
};
const createCategoryOptions = (select) => {
  categories.forEach((element) => {
    document.querySelector(
      `#${select}`
    ).innerHTML += `<option value="${element}">${element}</option>`;
  });
};
const renderCatalogue = (catalogue) => {
  const cat = document.querySelector("#catalogue");
  cat.innerHTML = "";
  catalogue.forEach((elem) => {
    cat.innerHTML += `<div>
    <h2>${elem.title}</h2>
    <p>${elem.size}</p>
    <p>${elem.color}</p>
    <p>${elem.category}</p>
    </div>`;
  });
};
const createFilters = () => {
  createCategoryFilters();
};

const createCategoryFilters = () => {
  createCategoryOptions("filterCategory");
  document
    .querySelector("#filterCategory")
    .addEventListener("change", (event) => {
      event.preventDefault();
      if (event.target.value === "All") {
        renderCatalogue(shoes.shoes);
        return;
      }
      const filtered = shoes.shoes.filter(
        (element) => element.category === event.target.value
      );

      renderCatalogue(filtered);
    });
};

main();
