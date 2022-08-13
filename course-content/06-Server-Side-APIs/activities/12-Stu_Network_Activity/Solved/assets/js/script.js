requestUrl = 'https://api.github.com/orgs/nodejs/repos';

fetch(requestUrl)
  .then(function (response) {
    console.log(response);
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
