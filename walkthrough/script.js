

let userID2;
let state2;
let conversationData2;

window.addEventListener('message', function(event) {
    if (event.data.userId && event.data.state) {
        userID2 = event.data.userId;
        state2 = event.data.state;
        conversationData2 = event.data.conversationData;


           let formattedData = '';

           for (const entry of conversationData2) {
             formattedData += entry.join('\u000A\u0020\u0020\u0020\u00B7\u0020\u0020\u0020\u000A') + '\u000A';
           }

        // Update the iframe content
        document.getElementById('state2').innerText = state2;
        document.getElementById('userID2').innerText = userID2;
        document.getElementById('conversationData2').innerText = formattedData;
    }
}, false);

