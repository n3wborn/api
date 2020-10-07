// API


// Basic Constants
const apiKey = ""
const apiUrl = "https://api.shodan.io/shodan/"


// Fetch -- Headers
const fetchHeaders = new Headers({
  'Accept': 'text/html',
  'Accept-Encoding': 'gzip, deflate, br',
  'connection': 'keep-alive',
  'DNT': '1',
  'Host': 'api.shodan.io',
  'Upgrade-Insecure-Requests': '1',
  'credentials': 'include'
});


// Fetch -- Init
const fetchInit = {
  method: 'GET',
  headers: fetchHeaders,
  mode: 'cors',
  cache: 'default'
};



// API Functions


// testShodan only test api serching for google dns server (8.8.8.8) infos
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


// Search query as if searching through shodan website
const querySearch = async function(queryString) {
  try {

    // build url and parameters
    let url = new URL('https://api.shodan.io/shodan/host/search'),
    params = {
      key:apiKey,
      query:queryString
    }

    // append each parameters to searchParams
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))

    // keep fetched url in response
    let response = await fetch(url, fetchInit)
    // check our headers
    console.log
    if (response.ok) {
      let data = await response.json()
      console.log(data)
    } else {
      console.error('[search]', response.status)
    }
  } catch(e) {
    console.error('[search]', e)
  }
}


// Ask shodan about http headers we send them
let clientHttpHeaders = async function() {
  try {
    let url = apiBaseUrl + 'tools/httpheaders?key=' + apiKey
    let response = await fetch(url)
    if (response.ok) {
      let data = await response.json()
      console.log(data)
    } else {
      console.error('[clientHttpHeaders]', response.status)
    }
  } catch(e) {
    console.error('[clientHttpHeaders]', e)
  }
}



// EVENT LISTENERS


// links targeted to trigger api call
const fetchLink = document.getElementById('api-fetch-link')
const querySearchLink = document.getElementById('api-query-search-link')


// trigger testShodan()
fetchLink.addEventListener('click', function(e){
  e.preventDefault();
  let results = testShodan()
  console.log(results)
});


// trigger querySearch()
querySearchLink.addEventListener('click', function(e){
  e.preventDefault();
  let results = querySearch('webcam')
  console.log(results)
});