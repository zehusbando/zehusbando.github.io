
console.log("adsidjasidja")
    const swiper = new Swiper('.swiper', {
        autoplay: {
            delay: 3000,
            diableOnInteraction: false,
        },
     
        loop: true,
    
        pagination: {
        el: '.swiper-pagination',
        clickable: true,
        },
    
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
    
   
   
});

let keywords = ['necklaces', 'ring', 'ring', 'bracelets', 'gold bracelet', 'silver ring'];

const resultbox = document.querySelector(".result");
const inputbox = document.getElementById("inputbar");

inputbar.onkeyup = function () {
  let result = [];
  let input = inputbar.value;

  if (input.trim().length > 0) {
    // Check for matching keywords
    result = keywords.filter((keyword) => keyword.toLowerCase().includes(input.toLowerCase()));

    if (result.length === 0) {
      resultUl.style.backgroundColor = "transparent"; // No match
    } else {
      resultUl.style.backgroundColor = "white"; // Matching keyword
    }
  } else {
    resultUl.style.backgroundColor = "transparent"; // No text input
  }

  display(result);
};

function display(result) {
  const content = result.map((list) => `<li onclick="selectInput(this)">${list}</li>`);
  resultbox.innerHTML = `<ul>${content}</ul>`;
}

function selectInput(list) {
  inputbox.value = list.innerHTML;
}

const inputBar = document.getElementById("inputbar");
const resultUl = document.querySelector(".result");

inputBar.addEventListener("keyup", updateBackground);


updateBackground();

let shop =document.getElementById("shop");

let shopitemdata =[{
  id:"ihatemylife",
  name:"casual shirt",
  price: 45,
  desc: "comment",
  img: "gems/21046110386-1__78849.webp"
},
{
  id:"ihatemylife2",
  name:"casual shirt",
  price: 45,
  desc: "comment",
  img: "gems/21046110386-1__78849.webp"
},
{id:"ihatemylife3",
name:"casual shirt",
price: 45,
desc: "comment",
img: "gems/21046110386-1__78849.webp"
},
{
  id:"ihatemylife4",
  name:"casual shirt",
  price: 45,
  desc: "comment",
  img: "gems/21046110386-1__78849.webp"
}
];


let generateshop =() => {
  return (shop.innerHTML = shopitemsdata.map((x)=>{
    return `
  <div class="item">
  <img width="220" src="gems/21046110386-1__78849.webp" alt="">
  <div class="details">
      <h3>Bracelet</h3>
      <p>among us</p>
      <div class="price-quantity">
          <h2>$ 45</h2>
          <div class="buttons">
              <i class="bi bi-plus-lg"></i> 
              <div class="quantity">0</div>
              <i class="bi bi-dash-lg"></i>
          </div>
      </div>
  </div>
</div>
`;
  }));
};


generateshop();

    


