togglemode = function() {
  const html = document.documentElement
  const image = document.getElementById('image')

  if( html.classList.contains('light') ) {
    html.classList.remove('light')
    image.setAttribute('src', 'Media/avatar.png')
  } else {
    html.classList.add('light')
    image.setAttribute('src', 'Media/avatar-light.png')
  }
}