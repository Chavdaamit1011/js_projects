let product = [
  {
    id: 1,
    image: "https://www.justwatches.com/cdn/shop/files/TW2Y09800.jpg?v=1740577654&width=536",
    name: "Q Timex Grey Round Dial Quartz Digital Men Watch",
    price: "₹" + 10995,
    category: "MEN accessories",
  },
  {
    id: 2,
    image: "https://www.justwatches.com/cdn/shop/files/GW0842L2.jpg?v=1739785580&width=536",
    name: "Guess Mini Luna Champagne Round Dial Quartz Analog Women Watch",
    price: "₹" + 13995,
    category: "WOMEN accessories",
  },
  {
    id: 3,
    image: "https://www.justwatches.com/cdn/shop/files/TWEG26000_1.jpg?v=1739784410&width=536",
    name: "Timex Vector Leather Beige Round Dial Quartz Analog Men Watch",
    price: "₹" + 10990,
    category: "MEN accessories",
  },
  {
    id: 4,
    image: "https://www.justwatches.com/cdn/shop/files/GW0265G13.jpg?v=1739786513&width=536",
    name: "Guess Connoisseur Grey Round Dial Quartz Analog Men Watch",
    price: "₹" + 17995,
    category: "MEN accessories",
  },
  {
    id: 5,
    image: "https://www.justwatches.com/cdn/shop/files/TWEG26001_1.jpg?v=1739784807&width=536",
    name: "Timex Vector Leather Black Round Dial Quartz Analog Men Watch",
    price: "₹" + 11495,
    category: "MEN accessories",
  },
  {
    id: 6,
    image: "https://www.justwatches.com/cdn/shop/files/TWEG26003_1.jpg?v=1739784874&width=536",
    name: "Timex Vector Leather Black Round Dial Quartz Analog Men Watch",
    price: "₹" + 11995,
    category: "MEN accessories",
  },
  {
    id: 7,
    image: "https://www.justwatches.com/cdn/shop/files/GW0842L3.jpg?v=1739785718&width=536",
    name: "Guess Mini Luna Rose Gold Round Dial Quartz Analog Women Watch",
    price: "₹" + 14995,
    category: "WOMEN accessories",
  },
  {
    id: 8,
    image: "https://www.justwatches.com/cdn/shop/files/GW0846G1.jpg?v=1739785869&width=536",
    name: "Guess Dex Leather Green Round Dial Quartz Analog Men Watch",
    price: "₹" + 12995,
    category: "MEN accessories",
  },
];

 let fillterbycategory = (product) => {
            let selectfillter = document.getElementById("btn1");
            selectfillter.addEventListener("change", (e) => {
                let v = e.target.value;

                if (v === "ALL") {
                    displayproduct(product);
                } else if(v!=""){

                    let p = product.filter((p) => p.category == v)
                    console.log(p);
                    displayproduct(p)
                }
            });
        };
         fillterbycategory(product)


let displayproduct = (product) => {
  let con = document.querySelector(".productsdata")
  con.innerHTML = ""

  product.map((pro, i) => {
    let card = document.createElement("div")
    card.classList.add("col")
    card.innerHTML = `

    <div class="border border-dark p-3 text-center h-100 ">
          <img src=${pro.image}</img>
          <p>${pro.name}</p>
          <h5>${pro.price}</h5>
        </div>`

    con.appendChild(card)
    console.log(card);

  })

}
displayproduct(product)