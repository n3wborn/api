// API


// Basic Constants
const apiKey = ""
const apiUrl = "https://api.shodan.io/shodan/"


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


// fetchTest is born to inverstigate why url with params other than apiKey return errors
const fetchTest = async function(url) {
  try {
    let response = await fetch(url, {
    method: "GET",
    mode: "cors",
    cache: 'no-cache',
    Headers: {
      'Accept': '*/*',
      'Accept-Encoding': 'gzip, deflate, br',
      'Accept-Language': 'fr,fr-FR;q=0.8,en-US;q=0.5,en;q=0.3',
      'Cache-Control': 'no-cache',
      'Connection' : 'keep-alive',
      'Host': 'api.shodan.io',
      'Origin': 'http://127.0.0.1:8080',
      'Pragma': 'no-cache',
      'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:82.0) Gecko/20100101 Firefox/82.0',
    },
    redirect: 'follow',
    Referer: 'http://127.0.0.1:8080/'
    })

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

//fetchTest('https://api.shodan.io/shodan/ports?key=' + apiKey)



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
const fetchTestLink = document.getElementById('api-fetch-test-link')


// trigger testShodan()
fetchLink.addEventListener('click', function(e){
  e.preventDefault();
  let results = testShodan()
  console.log(results)
});


// trigger querySearch()
fetchTestLink.addEventListener('click', function(e){
  e.preventDefault();
  let results = fetchTest('https://api.shodan.io/shodan/ports?key=' + apiKey)
  console.log(results)
});