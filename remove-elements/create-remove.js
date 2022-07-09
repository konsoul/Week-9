/****************************** ADD DOG BUTTON ******************************/
const add = document.getElementById('add')
add.addEventListener('click', async () => {
  try {
    const res = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await res.json()

    // Get the url for a dog picture
    const dogImageUrl = data.message // URL of new dog image
    // Split it up to get the name of the dog
    const urlParts = dogImageUrl.split('/')
    const breedName = urlParts[4]

    //// Create elements ////
    const li = document.createElement('li')
    const figure = document.createElement('figure')
    const img = document.createElement('img')
    const figCaption = document.createElement('figcaption')

    //// inject data ////
    figCaption.innerText = breedName
    img.setAttribute('src', dogImageUrl)

    // set attribute tags ///
    img.setAttribute('id', 'dog-image')
    figure.setAttribute('id', image - figure)

    /// add the created elements to eachother  ///
    figure.appendChild(img)
    figure.appendChild(figCaption)
    li.appendChild(figure)

    const ul = document.querySelector('.gallery > ul')

    /// add all elements to existing <ul> ///
    ul.appendChild(li)
  } catch (e) {
    console.log("Couldn't fetch dog :(")
  }
})

/************************** REMOVE FIRST DOG BUTTON **************************/
const removeFirst = document.getElementById('remove-first')
removeFirst.addEventListener('click', () => {
  /*-------------------- Select the first dog card --------------------- */
  let dogCard = document.querySelector('figure')
  console.log(dogCard)
  /*-------------------- Remove the first dog card --------------------- */
  dogCard.remove()
})

/************************** REMOVE LAST DOG BUTTON ***************************/
const removeLast = document.getElementById('remove-last')
removeLast.addEventListener('click', () => {
  /*-------------------- Select the last dog card ----------------------- */
  let lastDogCard = document.querySelector('#dog-image')
  /*-------------------- Remove the last dog card ----------------------- */
  lastDogCard.remove()
})
