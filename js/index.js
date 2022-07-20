import { addCard } from "./card.js";
import { detailPopup } from "./detailPopup.js";

function main() {
  const selectedJob = undefined;
  const cards = getCard();
  addAllCard(cards);
  addDummy(10);
  selectCards(cards);
}
main();

function selectCards(cards) {
  cards.forEach((cardObj) => {
    const cardArr = Object.entries(cardObj);
    const newCard = document.querySelector(`.${cardArr[0][0]}`);
    newCard.addEventListener("click", () => {
      detailPopup(
        "../../Asset/icons/loop-studios.svg",
        "Loop Studio",
        "Excellent health benefits for modern indian companies (Y-Combinator W20)",
        true
      );
    });
  });
}
function getCard() {
  const jobs = [
    {
      card1: {
        companyName: "Zoom",
        eachTag: ["NEW", "FEATURED"],
        jobTitle: "Software Engineer",
        descriptions: ["2d ago", "Full Time"],
        imageLink: "/asset/icons/zoom.png",
      },
    },
    {
      card2: {
        companyName: "Loop",
        eachTag: ["NEW", "FEATURED"],
        jobTitle: "Software Engineer",
        descriptions: ["1d ago", "Part Time"],
        imageLink: "/asset/icons/loop-studios.svg",
      },
    },
    {
      card3: {
        companyName: "Google",
        eachTag: ["NEW", "FEATURED", "TOP"],
        jobTitle: "Software Engineer",
        descriptions: ["10d ago", "Full Time"],
        imageLink: "/asset/icons/google.png",
      },
    },
  ];
  return jobs;
}

function addAllCard(cards) {
  cards.forEach((cardObj) => {
    const cardArr = Object.entries(cardObj);
    addCard(
      cardArr[0][1]["companyName"],
      cardArr[0][1]["eachTag"],
      cardArr[0][1]["jobTitle"],
      cardArr[0][1]["descriptions"],
      cardArr[0][1]["imageLink"],
      cardArr[0][0]
    );
  });
}

function addDummy(count) {
  new Array(count).fill(0).forEach(() => {
    addCard();
  });
}
