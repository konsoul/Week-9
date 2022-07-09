window.onload = function () {
  const url = 'https://api.thecatapi.com/v1/images/search'

  const getCatPicturesInjectDom = async () => {
    const response = await fetch(url)
    const data = await response.json()
    let img = document.createElement('img')
    img.setAttribute('class', 'cat-images')
    img.src = data[0].url

    // Create img div and insert image inside
    let imgDiv = document.createElement('div')
    imgDiv.setAttribute('class', 'img-div')
    imgDiv.appendChild(img)

    // create header div and insert imgDiv inside
    let headerDiv = document.createElement('div')
    headerDiv.setAttribute('class', 'header-div')
    headerDiv.appendChild(imgDiv)

    document.body.append(headerDiv)
  }

  getCatPicturesInjectDom()

  ////// Create Header Text //////
  let header = document.createElement('h1')
  header.setAttribute('class', 'header')
  header.innerText = 'Stupid Cats'

  document.body.append(header)
}
