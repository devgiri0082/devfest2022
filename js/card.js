export function addCard(
  companyName = "Dummy Comp",
  eachTag = ["NEW", "FEATURED"],
  jobTitle = "Software Engineer",
  descriptions = ["1d ago", "Part Time"],
  imageLink = "/asset/icons/man.png"
) {
  const cardTemplateElem = document.getElementById("card");
  const newCardElem = cardTemplateElem.content.cloneNode(true);
  const image = newCardElem.querySelector(".job-logo");
  const companyElem = document.createElement("li");
  const tags = newCardElem.querySelector(".tags");
  companyElem.classList.add("company-name");
  companyElem.innerText = companyName;
  tags.appendChild(companyElem);
  //   const eachTag = ["NEW", "FEATURED"];
  eachTag.forEach((tagName) => {
    const newTag = document.createElement("li");
    newTag.classList.add("tag-name");
    newTag.innerText = tagName;
    tags.appendChild(newTag);
  });
  const jobTitleElem = newCardElem.querySelector(".job-post");
  jobTitleElem.textContent = jobTitle;
  const jobDescElem = newCardElem.querySelector(".mini-description");
  //   const descriptions = ["1d ago", "Part Time"];
  descriptions.forEach((desc) => {
    const newDesc = document.createElement("li");
    newDesc.innerText = desc;
    jobDescElem.appendChild(newDesc);
  });
  image.src = imageLink;
  const cardContainer = document.querySelector(".card-container");
  cardContainer.appendChild(newCardElem);
}
