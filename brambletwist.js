function jHawthorne (){

    function loadPlayerJson() {
        fetch('players/player2.json') // Replace with the actual path to player1.json on your server
            .then(response => response.json())
            .then(playerData => {
                // Handle the loaded player data as needed
                handlePlayerData(playerData);
            })
            .catch(error => {
                console.error('Error loading player2.json:', error);
            });
    }

    function handlePlayerData(playerData) {
        // Implement your logic to handle the player data here
        console.log('Loaded Player Data:', playerData);
        // For example, update the userData and display
        updateUserData(playerData.userData);
        updateJSONDisplay();
    }


    document.getElementById('state2').innerText = state;
        document.getElementById('userID2').innerText = userID;
        document.getElementById('conversationData2').innerText = formattedData;
        loadPlayerJson();


}