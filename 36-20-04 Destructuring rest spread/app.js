class Element {
  constructor(tagName) {
    this.tagName = tagName;
    this.classList = [];
    this.id = "";
    this.content = "";
  }
  addId(id) {
    this.id = id;
  }
  addClass(className) {
    this.classList.push(className);
  }

  addContent(content) {
    this.content = content;
  }
  //   render() {
  //     let output = `<${this.tagName} id ="${
  //       this.id
  //     }" class = "${this.classList.join(" ")}">${this.content}</${this.tagName}>`;
  //     document.querySelector("#app").innerHTML = output;
  //   }
  renderFromDOM() {
    const element = document.createElement(this.tagName);
    element.id = this.id;
    element.innerText = this.content;
    this.classList.forEach((className) => element.classList.add(className));
    document.querySelector("#app").appendChild(element);
  }
}

const elem = new Element("div");
elem.addId("ourId");
elem.addClass("myClass");
elem.addClass("group");
elem.addContent("Hello World!");
// elem.render();
elem.renderFromDOM();

const newEle = new Element("h1");
newEle.addContent("Hi All!");
newEle.renderFromDOM();

const para = new Element("p");
para.addId("p_1");
para.addClass("p_c_1");
para.addClass("p_c_2");
para.addClass("p_c_3");
para.addContent("The best students");
para.renderFromDOM();

