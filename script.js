function updateVisitCount() {
    fetch('https://6fy80wkqb6.execute-api.us-east-2.amazonaws.com/prod/getCount')
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
//            document.getElementById('count').innerHTML = data;
        })
    }