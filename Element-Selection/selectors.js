window.onload = function () {
  /* Write queries for each of the following */

  /* Section 1 */
  // 1. Get all seeded fruit elements
  const bodyChildElements = document.body.children;
  console.log(bodyChildElements);
  const seedFruit = bodyChildElements[1].getElementsByClassName("seed");

  // 2. Get all seedless fruit elements
  const seedlessFruit = bodyChildElements[1].getElementsByClassName("seedless");

  // 3. Get first seedless fruit element
  const peaches = seedlessFruit[0];
  console.log(peaches);
  peaches.style.color = "red";

  /* Section 2 */
  // 4. Get inner span with text "you"
  const bodyNodeElements = document.body.childNodes;
  console.log(bodyNodeElements);
  const youText = bodyNodeElements[5].textContent;
  console.log(youText)


  // 5. Get all children of element "wrapper"
  // Your code here

  // 6. Get all odd number list items in the list
  // Your code here

  // 7. Get all even number list items in the list
  // Your code here

  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  // 9. Get "Amazon" list element
  // Your code here

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
};
