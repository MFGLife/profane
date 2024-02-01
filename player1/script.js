

let userID2;
let state2;
let conversationData2;

window.addEventListener('DOMContentLoaded', (event) => {
  fetch('player1.json')
      .then(response => response.json())
      .then(data => {
          // Use the 'data' variable which contains the JSON content
          console.log(data);
          // You can perform further processing with the JSON data here
      })
      .catch(error => console.error('Error loading the JSON file', error));
});

window.addEventListener('message', function(event) {
        userID2 = event.data.userId;
        state2 = event.data.state;
        conversationData2 = event.data.conversationData;

        document.getElementById('state2').innerText = state2;
        document.getElementById('userID2').innerText = userID2;
}, false);


