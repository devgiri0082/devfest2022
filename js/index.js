import { addCard } from "./card.js";

function main() {
  const cards = getCard();
  addAllCard(cards);
  addDummy(10);
}
main();

function getCard() {
  const jobs = [
    {
      companyName: "Zoom",
      eachTag: ["NEW", "FEATURED"],
      jobTitle: "Software Engineer",
      descriptions: ["2d ago", "Full Time"],
      imageLink: "/asset/icons/zoom.png",
    },
    {
      companyName: "Loop",
      eachTag: ["NEW", "FEATURED"],
      jobTitle: "Software Engineer",
      descriptions: ["1d ago", "Part Time"],
      imageLink: "/asset/icons/loop-studios.svg",
    },
    {
      companyName: "Google",
      eachTag: ["NEW", "FEATURED", "TOP"],
      jobTitle: "Software Engineer",
      descriptions: ["10d ago", "Full Time"],
      imageLink: "/asset/icons/google.png",
    },
  ];
  return jobs;
}

function addAllCard(cards) {
  cards.forEach(
    ({ companyName, eachTag, jobTitle, descriptions, imageLink }) => {
      addCard(companyName, eachTag, jobTitle, descriptions, imageLink);
    }
  );
}

function addDummy(count) {
  new Array(count).fill(0).forEach(() => {
    addCard();
  });
}

const search = document.querySelector(".search");

search.addEventListener("onkeypress", filterJobs);

function filterJobs(e) {
  console.log(e.target.value);
}
