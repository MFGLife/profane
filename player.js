let checkLogin = false;
  
    document.addEventListener('DOMContentLoaded', function() {
        // Automatically load player1.json on page load
        loadPlayerJson();
    });

    function loadPlayerJson() {
        fetch('players/player1.json') // Replace with the actual path to player1.json on your server
            .then(response => response.json())
            .then(playerData => {
                // Handle the loaded player data as needed
                handlePlayerData(playerData);
            checkLogin = true;
            if (checkLogin === true){
                const chatWindow = document.getElementById('chatWindow');
                chatWindow.innerHTML += '<font style="color:lightgreen;">' + userId + ' is logged in.</font><br>';
                scrollToBottom();
            }
            })
            .catch(error => {
                console.error('Error loading player1.json:', error);
            });
    }

    function handlePlayerData(playerData) {
        // Implement your logic to handle the player data here
        console.log('Loaded Player Data:', playerData);
        // For example, update the userData and display
        updateUserData(playerData.userData);
        updateJSONDisplay();
    }


