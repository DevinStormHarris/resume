$.ajax({
    url: "https://8oyjli5ho2.execute-api.us-east-2.amazonaws.com/prod/test",
    method: 'POST',
    contentType: 'application/json',
    success: function(response) {
        $('#count').append(response.count)
    }   
  });