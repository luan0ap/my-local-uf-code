import Geocoder from 'utils/Geocoder'
import currentLocation from 'utils/getCurrentLocation'
import { get } from 'utils/get'

const regexpCep = /[0-9]{5}-[0-9]{3}/

const getUfCode = () => {
  Geocoder().then((geocoder) => {
    currentLocation.then((coords) => {
      geocoder.geocode(
        { location: coords },
        res => get(`https://viacep.com.br/ws/${res[0].formatted_address.match(regexpCep)[0]}/json/`).then(({ uf }) => console.log(uf))
      )
    })
  })
}

export default getUfCode