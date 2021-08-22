const categories = [
  {
    id: 0,
    name: "Fruits",
  },
  {
    id: 1,
    name: "Vegetables",
  },
];

const goods = [
  {
    id: 0,
    cat: 0,
    name: "Grapes",
    price: 10,
  },
  {
    id: 1,
    cat: 0,
    name: "Bananas",
    price: 5,
  },
  {
    id: 2,
    cat: 1,
    name: "Carrots",
    price: 2,
  },
  {
    id: 3,
    cat: 1,
    name: "Tomatoes",
    price: 4,
  },
];

const cart = {
  sum: 0,
  quantity: 0,
  goods: [],
};

const main = () => {
  categories.forEach((cat) => {
    document
      .querySelector(".categories")
      .appendChild(generateTag(cat.name, "div", cat.id + "", "cat_"));
  });

  generateCatListeners();
};
const generateTag = (text, tagName, id = null, idText = null) => {
  const block = document.createElement(tagName);
  if (id) {
    block.id = idText + id;
  }
  block.innerText = text;
  return block;
};

const generateCatListeners = () => {
  const blocks = document.querySelectorAll(".categories > div");
  for (block of blocks) {
    block.addEventListener("click", showCategory);
  }
};

const showCategory = (event) => {
  let id = +event.target.id.split("_")[1];
  const categoryGoods = goods.filter((good) => good.cat === id);
  if (!categoryGoods.length) {
    return;
  }
  document.querySelector(".list").innerHTML = "";
  categoryGoods.forEach((product) => {
    document
      .querySelector(".list")
      .appendChild(
        generateTag(`${product.name} ${product.price}`),
        "div",
        product.id + "",
        "product_"
      );
  });
  generateProductListener();
};

const generateProductListener = () => {
  const blocks = document.querySelectorAll(".list > div");
  for (block of blocks) {
    block.addEventListener("click", showProduct);
  }
};
const showProduct = (event) => {
  let id = +event.target.id.split("_")[1];
  let product = goods.filter((item) => item.id === id);
  if (!product.length) {
    return;
  }
  product = product[0];
  const block = document.createElement("div");
  const header = document.createElement("h3");
  header.innerText = product.name;
  block.appendChild(header);
  const price = document.createElement("p");
  price.innerText = product.price;
  block.appendChild(price);
  const button = document.createElement("button");
  button.type = "button";
  button.id = "btn_" + product.id;
  button.innerText = "Add to Cart";
  const productWrapper = document.querySelector(".item");
  productWrapper.innerHTML = "";
  productWrapper.appendChild(block);
  button.addEventListener("click", addToCart);
};

const addToCart = (event) => {
  let id = +event.target.id.split("_")[1];
  let product = goods.filter((item) => item.id === id);
  if (!product.length) {
    return;
  }
  product = product[0];
  const idx = cart.goods.findIndex((item) => item.id === id);
  if (idx !== -1) {
    cart.goods[idx].quantity++;
  } else {
    cart.goods.push({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
    });
  }

  cart.sum += product.price;
  cart.quantity++;
  generateCart();
};

const generateCart = () => {
  const cartWrapper = document.querySelector(".cart");
  cartWrapper.innerHTML = "";
  const title = document.createElement("h2");
  title.innerText = `Total ${cart.quantity} products of sum ${cart.sum}`;
  cartWrapper.appendChild(title);
  const ul = document.createElement("ul");
  cart.goods.forEach((product, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = `${product.name} - ${product.price} * ${
      product.quantity
    } = ${product.price * product.quantity}`;
    const btnPlus = document.createElement("button");
    btnPlus.id = "plus_" + index;
    btn.innerText = "+";
    const btnMinus = document.createElement("button");
    btnMinus.id = "minus_" + index;
    btn.innerText = "-";
    li.appendChild(span);
    li.appendChild(btnMinus);
    li.appendChild(btnPlus);
    btnMinus.addEventListener("click", decreaseQuantity);
    btnPlus.addEventListener("click", increaseQuantity);
    ul.appendChild(li);
  });
  cartWrapper.appendChild(ul);
};

const decreaseQuantity = (event) => {
  const idx = +event.target.id.split("_")[1];
  cart.goods[idx].quantity--;
  cart.quantity--;
  cart.sum -= cart.goods[idx].price;
  if (cart.goods[idx].quantity === 0) {
    cart.goods.splice(idx, 1);
  }
  generateCart();
};

const increaseQuantity = (event) => {
  const idx = +event.target.id.split("_")[1];
  cart.goods[idx].quantity++;
  cart.quantity++;
  cart.sum += cart.goods[idx].price;
  generateCart();
};

main();
