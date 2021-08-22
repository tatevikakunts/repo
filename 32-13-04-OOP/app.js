// function name_1(args) {
//     // ....
// }
//
// const name_2 = function(args) {
//     // ....
// }
//
// const name_3 = (args) => {
//     // ...
// }
//
// function sum(a,b) {
//     return a+b;
// }
//
// function sayHello(name) {
//     console.log( `Hello ${name}` );
// }
//
// console.log( sum(2,5) );
//
// sayHello('Dmitry');
//
// const sayHi = (user) => {
//     console.log( `Hi, ${user.name}` );
// }
//
// sayHi({name: 'Peter'});

// const makeArticle = (title, text) => {
//     const art = document.createElement('article');
//     const header = document.createElement('h2');
//     header.textContent = title;
//     art.appendChild(header);
//     const paragraph = document.createElement('p');
//     paragraph.innerText = text;
//     art.appendChild(paragraph);
//     return art;
// }
//
const sect = document.querySelector("section");
// sect.appendChild( makeArticle('Title 1', 'Lorem text 1') );
// sect.appendChild( makeArticle('Title 2', 'Lorem text 2') );
// sect.appendChild( makeArticle('Title 3', 'Lorem text 3') );
// sect.appendChild( makeArticle('Title 4', 'Lorem text 4') );
// sect.appendChild( makeArticle('Title 5', 'Lorem text 5') );

const articles = [
  {
    userId: 1,
    id: 10,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
  {
    userId: 2,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
  },
  {
    userId: 3,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
  },
  {
    userId: 2,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
  },
  {
    userId: 3,
    id: 7,
    title: "magnam facilis autem",
    body:
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
  },
];

const users = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618",
      },
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains",
    },
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
    address: {
      street: "Douglas Extension",
      suite: "Suite 847",
      city: "McKenziehaven",
      zipcode: "59590-4157",
      geo: {
        lat: "-68.6102",
        lng: "-47.0653",
      },
    },
    phone: "1-463-123-4447",
    website: "ramiro.info",
    company: {
      name: "Romaguera-Jacobson",
      catchPhrase: "Face to face bifurcated interface",
      bs: "e-enable strategic applications",
    },
  },
];

const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et",
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione",
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body:
      "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati",
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body:
      "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et",
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body:
      "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in",
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body:
      "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor",
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body:
      "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque",
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body:
      "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus",
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body:
      "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis",
  },
  {
    postId: 3,
    id: 11,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
    body:
      "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea",
  },
  {
    postId: 3,
    id: 12,
    name: "modi ut eos dolores illum nam dolor",
    email: "Oswald.Vandervort@leanne.org",
    body:
      "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit",
  },
  {
    postId: 3,
    id: 13,
    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
    email: "Kariane@jadyn.tv",
    body:
      "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et",
  },
  {
    postId: 3,
    id: 14,
    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    email: "Nathan@solon.io",
    body:
      "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum",
  },
  {
    postId: 3,
    id: 15,
    name: "debitis magnam hic odit aut ullam nostrum tenetur",
    email: "Maynard.Hodkiewicz@roberta.com",
    body:
      "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia",
  },
  {
    postId: 4,
    id: 16,
    name: "perferendis temporibus delectus optio ea eum ratione dolorum",
    email: "Christine@ayana.info",
    body:
      "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis",
  },
  {
    postId: 4,
    id: 17,
    name: "eos est animi quis",
    email: "Preston_Hudson@blaise.tv",
    body:
      "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore",
  },
  {
    postId: 4,
    id: 18,
    name: "aut et tenetur ducimus illum aut nulla ab",
    email: "Vincenza_Klocko@albertha.name",
    body:
      "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias",
  },
  {
    postId: 4,
    id: 19,
    name: "sed impedit rerum quia et et inventore unde officiis",
    email: "Madelynn.Gorczany@darion.biz",
    body:
      "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut",
  },
  {
    postId: 4,
    id: 20,
    name: "molestias expedita iste aliquid voluptates",
    email: "Mariana_Orn@preston.org",
    body:
      "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore",
  },
  {
    postId: 5,
    id: 21,
    name: "aliquid rerum mollitia qui a consectetur eum sed",
    email: "Noemie@marques.me",
    body:
      "deleniti aut sed molestias explicabo\ncommodi odio ratione nesciunt\nvoluptate doloremque est\nnam autem error delectus",
  },
  {
    postId: 5,
    id: 22,
    name: "porro repellendus aut tempore quis hic",
    email: "Khalil@emile.co.uk",
    body:
      "qui ipsa animi nostrum praesentium voluptatibus odit\nqui non impedit cum qui nostrum aliquid fuga explicabo\nvoluptatem fugit earum voluptas exercitationem temporibus dignissimos distinctio\nesse inventore reprehenderit quidem ut incidunt nihil necessitatibus rerum",
  },
  {
    postId: 5,
    id: 23,
    name: "quis tempora quidem nihil iste",
    email: "Sophia@arianna.co.uk",
    body:
      "voluptates provident repellendus iusto perspiciatis ex fugiat ut\nut dolor nam aliquid et expedita voluptate\nsunt vitae illo rerum in quos\nvel eligendi enim quae fugiat est",
  },
  {
    postId: 5,
    id: 24,
    name: "in tempore eos beatae est",
    email: "Jeffery@juwan.us",
    body:
      "repudiandae repellat quia\nsequi est dolore explicabo nihil et\net sit et\net praesentium iste atque asperiores tenetur",
  },
  {
    postId: 5,
    id: 25,
    name: "autem ab ea sit alias hic provident sit",
    email: "Isaias_Kuhic@jarrett.net",
    body:
      "sunt aut quae laboriosam sit ut impedit\nadipisci harum laborum totam deleniti voluptas odit rem ea\nnon iure distinctio ut velit doloribus\net non ex",
  },
  {
    postId: 6,
    id: 26,
    name: "in deleniti sunt provident soluta ratione veniam quam praesentium",
    email: "Russel.Parker@kameron.io",
    body:
      "incidunt sapiente eaque dolor eos\nad est molestias\nquas sit et nihil exercitationem at cumque ullam\nnihil magnam et",
  },
  {
    postId: 6,
    id: 27,
    name: "doloribus quibusdam molestiae amet illum",
    email: "Francesco.Gleason@nella.us",
    body:
      "nisi vel quas ut laborum ratione\nrerum magni eum\nunde et voluptatem saepe\nvoluptas corporis modi amet ipsam eos saepe porro",
  },
  {
    postId: 6,
    id: 28,
    name:
      "quo voluptates voluptas nisi veritatis dignissimos dolores ut officiis",
    email: "Ronny@rosina.org",
    body:
      "voluptatem repellendus quo alias at laudantium\nmollitia quidem esse\ntemporibus consequuntur vitae rerum illum\nid corporis sit id",
  },
  {
    postId: 6,
    id: 29,
    name: "eum distinctio amet dolor",
    email: "Jennings_Pouros@erica.biz",
    body:
      "tempora voluptatem est\nmagnam distinctio autem est dolorem\net ipsa molestiae odit rerum itaque corporis nihil nam\neaque rerum error",
  },
  {
    postId: 6,
    id: 30,
    name: "quasi nulla ducimus facilis non voluptas aut",
    email: "Lurline@marvin.biz",
    body:
      "consequuntur quia voluptate assumenda et\nautem voluptatem reiciendis ipsum animi est provident\nearum aperiam sapiente ad vitae iste\naccusantium aperiam eius qui dolore voluptatem et",
  },
  {
    postId: 7,
    id: 31,
    name: "ex velit ut cum eius odio ad placeat",
    email: "Buford@shaylee.biz",
    body:
      "quia incidunt ut\naliquid est ut rerum deleniti iure est\nipsum quia ea sint et\nvoluptatem quaerat eaque repudiandae eveniet aut",
  },
  {
    postId: 7,
    id: 32,
    name: "dolorem architecto ut pariatur quae qui suscipit",
    email: "Maria@laurel.name",
    body:
      "nihil ea itaque libero illo\nofficiis quo quo dicta inventore consequatur voluptas voluptatem\ncorporis sed necessitatibus velit tempore\nrerum velit et temporibus",
  },
  {
    postId: 7,
    id: 33,
    name: "voluptatum totam vel voluptate omnis",
    email: "Jaeden.Towne@arlene.tv",
    body:
      "fugit harum quae vero\nlibero unde tempore\nsoluta eaque culpa sequi quibusdam nulla id\net et necessitatibus",
  },
  {
    postId: 7,
    id: 34,
    name: "omnis nemo sunt ab autem",
    email: "Ethelyn.Schneider@emelia.co.uk",
    body:
      "omnis temporibus quasi ab omnis\nfacilis et omnis illum quae quasi aut\nminus iure ex rem ut reprehenderit\nin non fugit",
  },
  {
    postId: 7,
    id: 35,
    name:
      "repellendus sapiente omnis praesentium aliquam ipsum id molestiae omnis",
    email: "Georgianna@florence.io",
    body:
      "dolor mollitia quidem facere et\nvel est ut\nut repudiandae est quidem dolorem sed atque\nrem quia aut adipisci sunt",
  },
];

/*

articles = []
    post = {
        "userId": 3,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }


users = []
    author = {
        "id": 3,
        "name": "Clementine Bauch",
        }


comments = []
    comment = {
            "postId": 4,
            "id": 1,
            "name": "id labore ex et quam laborum",
            "email": "Eliseo@gardner.biz",
            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
        }
 */

const makeArticleFromObject = (article) => {
  const art = document.createElement("article");
  const header = document.createElement("h2");
  header.textContent = article.title;
  art.appendChild(header);
  const paragraph = document.createElement("p");
  paragraph.innerText = article.body;
  art.appendChild(paragraph);
  const author = document.createElement("p");
  author.textContent = `Author: ${getUserName(article.userId)}`;
  art.appendChild(author);
  art.appendChild(getComments(article.id));
  return art;
};

const getComments = (articleId) => {
  const div = document.createElement("div");
  const filteredComments = comments.filter(
    (comment) => comment.postId === articleId
  );
  if (!filteredComments.length) {
    div.innerText = "No comments";
    return div;
  }
  filteredComments.forEach((comment) => {
    const block = document.createElement("div");
    const header = document.createElement("h3");
    const text = document.createElement("p");
    header.innerText = comment.email;
    text.innerText = comment.body;
    block.appendChild(header);
    block.appendChild(text);
    div.appendChild(block);
  });
  return div;
};

const getUserName = (someId) => {
  let idx = users.findIndex((author) => author.id === someId);
  return idx === -1 ? "NoNaMe" : users[idx].name;
};

articles.forEach((article) => {
  sect.appendChild(makeArticleFromObject(article));
});
