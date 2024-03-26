let checkLogin = false;
let botName;


function loadPlayerJson() {

    setTimeout(function() {
        const chatWindow = document.getElementById('chatWindow');

        // Initial message from Profane
        var time = new Date().getHours();
        var greeting, joke;

        if (time < 12) {
            greeting = "Good morning";
        } else if (time < 18) {
            greeting = "Good afternoon";
        } else {
            greeting = "Good evening";
        }


        const initialMessage = '<p><span class="gradient-text">Profane</span>: ' + greeting;
        chatWindow.innerHTML += initialMessage;
        botName = "Profane";
        scrollToBottom();
    }, 2300);
}

     
function checkPasscode() {
    const code = document.getElementById("userInput").value;

    if (code === "[tools]") {
      document.getElementById("toolMenu").style.display = "block";
    }
    if (code === "[demo]") {
      window.open('https://mfglife.github.io/demo/index.html', '_blank');
    }
    if (code === "[about]") {
      runAbout();
    }
  }


  function runAbout() {
    window.open('data/whitepaper.pdf', '_blank');
}

function runDemo() {
  window.open('https://mfglife.github.io/demo/index.html', '_blank');
}
