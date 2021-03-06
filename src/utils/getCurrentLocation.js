export default new Promise((res, rej) => {
  if (navigator.geolocation) {
    return navigator.geolocation.getCurrentPosition(({ coords }) => res({
      lat: parseFloat(coords.latitude),
      lng: parseFloat(coords.longitude)
    }))
  }

  return rej(new Error('Navigator Geolocation not suported in your browser'))
})
