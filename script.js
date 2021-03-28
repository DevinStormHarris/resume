$.ajax({
    url: "https://6fy80wkqb6.execute-api.us-east-2.amazonaws.com/prod",
    method: 'POST',
    contentType: 'application/json',
    success: function(response) {
        $('#count').append(response.count)
    }   
  });