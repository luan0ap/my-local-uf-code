import Google from 'google-maps'
import currentLocation from 'utils/getCurrentLocation'

// Set version script
Google.VERSION = 'weekly'

const regexpCep = /[0-9]{5}-[0-9]{3}/

const getUfCode = () => {
  Google.load((google) => {

    const Geocoder = new google.maps.Geocoder()

    currentLocation
      .then(
        coords => Geocoder.geocode({ location: coords },
        res => fetch(`https://viacep.com.br/ws/${res[0].formatted_address.match(regexpCep)[0]}/json/`)
          .then(o => o.json())
          .then(({ uf }) => uf)
      ))
      .catch(err => err)
  })
}

export default getUfCode