// local reviews data
const reviews = [
  {
    id: 1,
    name: "jenny mint",
    job: "software developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "Built purse maids cease her ham new seven among and. Pulled coming wooded tended it answer remain me be. So landlord by we unlocked sensible it.",
  },
  {
    id: 2,
    name: "megan morales",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Difficulty on insensible reasonable in. From as went he they. Preference themselves me as thoroughly partiality considered on in estimating. They took among videos.",
  },
  {
    id: 3,
    name: "bob jones",
    job: "ceo",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Compliment interested discretion estimating on stimulated apartments oh. Dear so sing when in find read of call. He called mothers now with horned.",
  },
  {
    id: 4,
    name: "jarrad anderson",
    job: "public relations",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Perceived end knowledge certainly day sweetness why cordially. Ask quick six seven offer see among. Handsome met debating sir dwelling age material.",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener("DOMContentLoaded", function() {
  showPerson(currentItem);
});

// show person based on item

function showPerson(person){
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// show next person

nextBtn.addEventListener("click", function() {
  currentItem++;
  if(currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

// show prev person

prevBtn.addEventListener("click", function() {
  currentItem--;
  if(currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
})

// show random person

function getRandomNumber(){
  return Math.floor(Math.random() * reviews.length);
}

randomBtn.addEventListener("click", function() {
  const randomNumber = getRandomNumber();
  currentItem = randomNumber;
  
  showPerson(randomNumber);
})