updateVisitCount();

function updateVisitCount() {
    fetch('https://ub3tedsdw0.execute-api.us-east-2.amazonaws.com/Prod/visitor_count', 
    {
        method: 'POST'
    })
        .then(response => {
        return response.json()
      })
        .then(data => {
            console.log(data)
            document.getElementById('count').innerHTML = data.count;
        })
    }