function changeMap(imgName) {
  // ganti gambar
  let img = document.querySelector('#map-picture')
  img.setAttribute('src', imgName)

  // ganti warna background
  let locations = document.querySelectorAll('.map-text')
  locations.forEach((location) => {
    document.querySelector('.special')?.classList.remove('special')
    location.addEventListener('click', () => {
      location.classList.add('special')
    })
  })
}
