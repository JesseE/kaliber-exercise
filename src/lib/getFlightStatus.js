export default function getFlightStatus () {
  let startRange = new Date().toISOString().split('.')[0]+"Z"
  let endRange = new Date()
  endRange.setHours(endRange.getHours() + 24)
  endRange = endRange.toISOString().split('.')[0]+"Z"

  let pageSize = 10
  let pageNumber = 0

  const url = `https://api.airfranceklm.com/opendata/flightstatus/?origin=AMS&destination=&departureCity=&arrivalCity=&startRange=${startRange}&endRange=${endRange}&movementType=D&pageSize=${pageSize}&pageNumber=${pageNumber}&carrierCode=&flightNumber=&operationalSuffix=&aircraftRegistration=&aircraftType=&timeType=&timeOriginType=`

  const customHeaders = new Headers({
    'Api-Key': '82axe9cv9cxr8mu9a77vkrh3',
    'accept-language':'en-GB'
  })

  const apiResponse = fetch(url, { headers : customHeaders }).then(res => res.json().then(data => {
    return {
      data: data
    }
  }))

  return apiResponse
}
