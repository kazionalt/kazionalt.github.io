fetch('/json')
  .then(response => {
    console.log('response', response)
    return response.json()
  })
  .then(response => {
    document.querySelector('#ip').innerText = response.ip
  })
