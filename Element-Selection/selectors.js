window.onload = function () {
  const bodyChildElements = document.body.children
  const bodyNodeElements = document.body.childNodes
  console.log('node elements', bodyNodeElements)
  console.log('body elements', bodyChildElements)

  // 1. Get all seeded fruit elements
  const seeded = document.querySelectorAll('li.seed')
  const seedFruit = bodyChildElements[1].getElementsByClassName('seed')

  // 2. Get all seedless fruit elements
  const seedless = document.querySelectorAll('li.seedless')
  const seedlessFruit = bodyChildElements[1].getElementsByClassName('seedless')

  // 3. Get first seedless fruit element
  const peaches = seedlessFruit[0]

  // 4. Get inner span with text "you"
  const youSpan = document
    .getElementById('wrapper')
    .children[0].querySelector('span')

  // 5. Get all children of element "wrapper"
  const wrapper = document.getElementById('wrapper')
  const allChildren = document.getElementById('wrapper').children

  // 6. Get all odd number list items in the list
  const oddNumbers = bodyChildElements[2].getElementsByClassName('odd')
  const oddList = document.querySelectorAll('li.odd')

  // 7. Get all even number list items in the list
  const evenList = document.querySelectorAll('li.even')

  // 8. Get all tech companies without a class name
  const noName = document.querySelector('a')

  // 9. Get "Amazon" list element
  const amazon = document.getElementsByClassName('shoppping')

  // 10. Get all unicorn list elements (not the image element)
  const unicorns = document.querySelectorAll('#three > ul')[0].children
}
