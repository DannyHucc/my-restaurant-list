const autofillBtn = document.querySelector('.btn-autofill')
// add autocomplete input by google map api
const addressText = document.querySelector('#address-text')
const options = {
    componentRestrictions: { country: "tw" },
    field: ["address_components", "name"],
    types: ["establishment"]
}
const autocomplete = new google.maps.places.Autocomplete(addressText, options)

// create a map object to call places service
const map = new google.maps.Map(document.getElementById("map"))
service = new google.maps.places.PlacesService(map)

function autofill(event) {
    event.preventDefault()
    const inputValue = autofillInput.value.toString()
    if (!inputValue.trim()) { return }

    // get place_id by input value
    const request = { query: inputValue }
    service.textSearch(request, results => {
        const requestDetails = {
            placeId: results[0].place_id,
            fields: ['name', 'formatted_address', 'formatted_phone_number', 'rating', 'url', 'website']
        }
        // get place details by place_id
        service.getDetails(requestDetails, results => {
            document.querySelector('#name').value = results.name
            document.querySelector('#location').value = results.formatted_address
            document.querySelector('#phone').value = results.formatted_phone_number
            document.querySelector('#rating').value = results.rating
            document.querySelector('#google_map').value = results.url
            document.querySelector('#description').innerText = results.website
        })
    })

}

autofillBtn.addEventListener('click', autofill)