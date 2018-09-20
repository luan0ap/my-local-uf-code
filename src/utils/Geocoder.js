import Google from 'google-maps'

Google.VERSION = 'weekly'

const Geocoder = () =>
  new Promise((res) => {
    Google.load((google) => {
      const Geocoder = new google.maps.Geocoder()
      res(Geocoder)
    })
  })

export default Geocoder