const slides = [
  {
    id: 0,
    slide: 1,
    src:
      "https://europeancastlestours.com/tours/bavaria/gallery/neuschwanstein-side-bm0767-800.jpg",
  },
  {
    id: 1,
    slide: 2,
    src:
      "https://i.pinimg.com/originals/aa/96/b1/aa96b10dbd0fb586bcb0f1800688fbd8.jpg",
  },
  {
    id: 2,
    slide: 3,
    src:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f7/54/bavaria.jpg?w=1100&h=600&s=1",
  },
];
slides.forEach((elem) => {
  const div = document.createElement("div");
  div.id = "slide_" + elem.id;
  const img = document.createElement("img");
  img.src = elem.src;
  div.appendChild(img);
  document.querySelector("#slideshowBlock").appendChild(div);
});
const blocks = document.querySelectorAll("#slideshowBlock > div");
for (element of blocks) {
  element.addEventListener("click", (event) => {
    const id = +event.currentTarget.id.split("_")[1];
    const found = slides.filter((elem) => elem.id === id);

    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = found[0].src;
    div.appendChild(img);
    const bigPic = document.querySelector("#bigPic");
    bigPic.innerHTML = "";
    document.querySelector("#bigPic").appendChild(div);
  });
}
// const previous = document.querySelector("#prev");
// previous.addEventListener("click", (event)=>{
//     const id =
// })
