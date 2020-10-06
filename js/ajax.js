// Constants
const apiKey = ""
const apiUrl = "https://api.shodan.io/shodan/"
const fetchLink = document.getElementById('api-fetch-link')  // link clicked to fetch api


// FETCH API TEST
// testShodan will try to fetch shodan api and return default password protected cams
const testShodan = async function() {
  try {
    let query = apiUrl + 'host/8.8.8.8?key=' + apiKey
    let response = await fetch(query)
    if (response.ok) {
      let data = await response.json()
      console.log(data)
    } else {
      console.error('[testShodan]', response.status)
    }
  } catch(e) {
    console.error('[testShodan]', e)
  }
}


// trigger function when fetchLink is clicked
fetchLink.addEventListener('click', function(e){
  e.preventDefault();
  let results = testShodan()
  console.log(results)
});
