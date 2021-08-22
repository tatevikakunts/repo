// async function main() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// main().then((res) => console.log(res));
// main()

const getPost = (id) => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.json())
    .then((data) => {
      renderPost(data);
      getComments(id);
    });
};
const renderPost = (post) => {
  const art = `<article>
  <h2>${post.title}</h2>
  <p>${post.body}</p>
  <div id="comments">
  <h3>Comments:</h3>
  </div>
  </article>`;
  document.querySelector("#posts").innerHTML = art;
};

const getComments = async (postId) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?postId =${postId}`
  );
  const data = await response.json();
  renderComments(data);
};
const renderComments = (comments) => {
  let output = "";
  comments.forEach((element) => {
    output += `<div>
        <h4>${element.email} <span>left comment:</span></h4>
        <p>${element.body}</p>
        </div> `;
  });
  document.querySelector("#comments").innerHTML += output;
};
getPost(1);
