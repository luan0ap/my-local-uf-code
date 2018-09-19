import Geocoder from 'utils/Geocoder'
import currentLocation from 'utils/getCurrentLocation'
import { getUfByCep } from 'utils/getUfByCep'

const REGEXP_CEP = /[0-9]{5}-[0-9]{3}/

const getUfCode = () =>
  new Promise((response) => {
    Geocoder().then((geocoder) => {
      currentLocation.then((coords) => {
        geocoder.geocode(
          { location: coords },
          data => getUfByCep(data[0].formatted_address.match(REGEXP_CEP)[0])
            .then(({ uf }) => response(uf))
        )
      })
    })
  })

export default getUfCode