export function detailPopup(
  logo = "../../Asset/icons/loop-studios.svg",
  name = "Loop Studio",
  detail = "Excellent health benefits for modern indian companies (Y-Combinator W20)",
  hidden = false
) {
  const popupCard = `
  <div class="outer max-h-screen  max-w-screen absolute top-1/2 left-1/2 -translate-x-1/2 z-40 -translate-y-1/2${
    hidden ? "hidden" : ""
  }">
   <div class="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50">
      <div class="popup">
         
         <section class="heading-area">
            
            
            <figure class="company-logo">
               <img src=${logo} alt="LOGO" class="company-logo">
            </figure>
            
            
            <div class="company-info">
               
               <h1 class="company-heading">
                  ${name}
               </h1>
               
               <div class="company-description">
                  ${detail}
               </div>
               
            </div>
            
         </section>
         
         <section class="popup-body">
            <div class="basic-info info-heading">
               <h3 class="heading-for-description">Basic Information</h3>
               <ul class="basic-info-list">
                  <li><span class="job-attribute job-category">Job Category</span><span class="attribute-value job-category">Receptionist / Telephone Operator </span></li>
                  <li><span class="job-attribute job-category">Job Level</span><span class="attribute-value job-category">Entry Level </span></li>
                  <li><span class="job-attribute job-category">No. of vacancies</span><span class="attribute-value job-category">1 </span></li>
                  <li><span class="job-attribute job-category">Offered Salary</span><span class="attribute-value job-category">Rs. 20,000 - Rs. 30,000</span></li>
               </ul>
            </div>
            <div class="job-specification info-heading">
               <h3 class="heading-for-description">Job Specification</h3>
               <ul class="job-specification-list">
                  <li><span class="job-attribute job-category">Education Degree:</span><span class="attribute-value job-category">Bachelor Degree</span></li>
                  <li><span class="job-attribute job-category">Education:</span><span class="attribute-value job-category">BBA, BBS</span></li>
                  <li><span class="job-attribute job-category">Experience:</span><span class="attribute-value job-category">Greater than 2 years </span></li>
               </ul>
            </div>
            <div class="other-specification info-heading">
               <h3 class="heading-for-description">Other Specification</h3>
               
               <ul class="other-specification-list">
                  <li class="other-specifications"> - Only Female candidates can apply</li>
                  <li class="other-specifications"> - Should have completed Intermediate level</li>
                  <li class="other-specifications"> - Should be fluent in English, Nepali and Hindi</li>
                  <li class="other-specifications"> - English typing skills is required</li>
                  <li class="other-specifications"> - Should have basic knowledge of Ms. Office</li>
                  <li class="other-specifications"> - Ability to organize, multi-task and prioritize works</li>
                  <li class="other-specifications"> - Experienced with Accounting candidates will be preferred</li>
               </ul>
            </div>
            <div class="job-description info-heading">
               <h3 class="heading-for-description">Job Specification</h3>
               
               <ul class="other-specification-list">
                  <li class="job-specification"> - Handling phone-calls and managing appointments</li>
                  <li class="job-specification"> - Handling of corporate email communications</li>
                  <li class="job-specification"> - Organizing office documents and files</li>
                  <li class="job-specification"> - Assisting the administration department in their work</li>
                  <li class="job-specification"> - Writing letters to banks and govt. offices</li>
               </ul>
            </div>
         </section>
         <section>
            <div class="button-area">
               <button class="save-job close px-2">Close</button>
               <button class="quick-apply bg-green-700 px-2 text-white">Quick Apply</button>
            </div>
         </section>
         
      </div>
   </div>
</div>`;
  const div = document.createElement("div");
  div.innerHTML = popupCard;
  const close = div.querySelector(".close");
  close.addEventListener("click", () => {
    location.reload();
  });

  document.body.appendChild(div);
}
