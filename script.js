const navLinks = document.querySelector(".nav_links");

function openNav() {
  navLinks.style.display = "block";
}

function closeNav() {
  navLinks.style.display = "none";
}

// App Gallery Sliding Functionality
let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById("backBtn");
let nextBtn = document.getElementById("nextBtn");

scrollContainer.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollContainer.scrollLeft += e.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  if (window.innerWidth >= 1000) {
    scrollContainer.scrollLeft += 1500 / 2;
  } else {
    scrollContainer.scrollLeft += 1500 / 3;
  }
});

backBtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  if (window.innerWidth >= 1000) {
    scrollContainer.scrollLeft -= 1500 / 2;
  } else {
    scrollContainer.scrollLeft -= 1500 / 3;
  }
});

// Reviews Functionality
let reviews = [
  {
    name: "Steve Smith",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tempora dolorum delectus reprehenderit corrupti pariatur laboriosam error magnam omnis.",
  },
  {
    name: "Jessica Pearson",
    review:
      "Magni itaque quibusdam dolorum eius reprehenderit voluptatem quidem, nobis sapiente modi!",
  },
  {
    name: "Alex Joseph",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis tempora dolorum delectus reprehenderit corrupti pariatur laboriosam error magnam omnis.",
  },
  {
    name: "Katey Perry",
    review:
      "Magni itaque quibusdam dolorum eius reprehenderit voluptatem quidem, nobis sapiente modi!",
  },
];

let index = 0;

function reviewDisplay() {
  document.querySelector("#review-content").innerText = reviews[index].review;
  document.getElementById("userName").innerText = reviews[index].name;

  if (index < reviews.length - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout(reviewDisplay, 2000);
}

window.onload = reviewDisplay;
