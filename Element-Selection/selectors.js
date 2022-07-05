window.onload = function () {
  /* Write queries for each of the following */
  const bodyChildElements = document.body.children;
  const bodyNodeElements = document.body.childNodes;
  console.log("node elements", bodyNodeElements);
  console.log("body elements", bodyChildElements);
  /* Section 1 */
  // 1. Get all seeded fruit elements
  const seedFruit = bodyChildElements[1].getElementsByClassName("seed");

  // 2. Get all seedless fruit elements
  const seedlessFruit = bodyChildElements[1].getElementsByClassName("seedless");

  // 3. Get first seedless fruit element
  const peaches = seedlessFruit[0];
  peaches.style.color = "red";

  /* Section 2 */
  // 4. Get inner span with text "you"
  const you = document.getElementById("wrapper");
  console.log(you);

  // 5. Get all children of element "wrapper"
  const wrapper = document.getElementById("wrapper");

  // 6. Get all odd number list items in the list
  const oddNumbers = bodyChildElements[2].getElementsByClassName("odd");
  console.log(oddNumbers);
  // 7. Get all even number list items in the list
  // Your code here
  const evenNumbers = bodyChildElements[2].getElementsByTagName("li")[1];
  console.log(evenNumbers);
  /* Section 3 */
  // 8. Get all tech companies without a class name
  // Your code here

  // 9. Get "Amazon" list element
  // Your code here

  // 10. Get all unicorn list elements (not the image element)
  // Your code here
};
