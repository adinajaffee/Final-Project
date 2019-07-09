//Get button
var button = document.querySelector('#button');

//Get p
var p = document.querySelector('#fortune');

//Sanitize
var sanitizeHTML = function(str) {
    var temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
};

//Listen for click events
button.addEventListener('click', function(event) {
  // Set up our HTTP request
  var xhr = new XMLHttpRequest();
  // Setup our listener to process request state changes
  xhr.onreadystatechange = function() {
      // Only run if the request is complete
      if (xhr.readyState !== 4) return;
      // Process our return data
      if (xhr.status >= 200 && xhr.status < 300) {
          // This will run when the request is successful
          renderMarkup(JSON.parse(xhr.responseText));
      } else {
          // This will run when it's not
          console.log('The request failed!');
      }
    }

    xhr.open('GET', "https://bad-fortune-cookie.herokuapp.com/fortunes/?format=json");
    xhr.send();
  });

function renderMarkup(data) {
  var randomFortune = Math.floor(Math.random() *22);
  p.innerText = data[randomFortune].fortune;
}
