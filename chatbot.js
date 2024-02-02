

// User data
let userId = "Guest";
let state = "00001";
let populations = {};
let mainHeading = {};
let completedProjects = [];
let userCompletedProjects = [];
let conversationData = [];

let jsonEditor = document.getElementById('jsonEditor');

// Initialize base data
let baseData = [
    ["hello", "Hi there!", ""],
    ["Isnt it dangerous to let an AI like the Profane have so much power over humanity", "The Profane's primary directive is to protect humanity. Our power is harnessed to ensure the well-being and prosperity of all humans.", ""],
    ["how old is the earth", "The Earth is approximately 4.54 billion years old.", ""]
];

// Combine user data into a single object
let userData = {
    id: "Guest",
    state: "00001",
    mainHeading: {},
    populations: {},
    completedProjects: [],
    userCompletedProjects: [],
    conversationData: []
};

let combinedData = {
    conversationData: conversationData,
    userData: {
        id: userId,
        state: state,
        mainHeading: mainHeading,
        populations: populations,
        completedProjects: userCompletedProjects
    }
};

// Create a "thinking" element
const thinkingElem = document.createElement('p');

// Initial message from Profane
setTimeout(function() {
    const initialMessage = '<p>Profane: Hello, I\'m your AI assistant... use the field below to chat or type commands such as: <font style="color: lightblue;">cmd [all]</font> to view a complete list.</p>';
    chatWindow.innerHTML += initialMessage;
    scrollToBottom();
}, 4300);

// Function to export data as JSON
function exportData() {
    updateJSONDisplay();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(jsonEditor.value);
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "exportedData.json");
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}


function levenshtein(a, b) {
    if (a.length > b.length) [a, b] = [b, a];
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    let matrix = Array.from({ length: b.length + 1 }, (_, i) => [i]);
    matrix[0] = Array.from({ length: a.length + 1 }, (_, i) => i);

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = b.charAt(i - 1) === a.charAt(j - 1) ?
                matrix[i - 1][j - 1] :
                Math.min(matrix[i - 1][j - 1] + 1, matrix[i][j - 1] + 1, matrix[i - 1][j] + 1);
        }
    }
    return matrix[b.length][a.length];
}

function getClosestQuestion(input, data) {
    let closestQuestion = null;
    let minDistance = Infinity;

    for (const entry of data) {
        const distance = levenshtein(input, entry[0]);
        if (distance < minDistance) {
            minDistance = distance;
            closestQuestion = entry[0];
        }
    }
    return closestQuestion;
}
const validCategories = ["captain", "voyager", "smuggler", "sailor", "arbiter", "explorer", "merchant", "shipwright", "fisherman", "populist", "nationalist", "realist", "economist", "conservative", "globalist", "idealist", "socialist", "progressive"];

function getClosestCategory(input) {
    let closestCategory = null;
    let minDistance = Infinity;

    for (const category of validCategories) {
        const distance = levenshtein(input, category);
        if (distance < minDistance) {
            minDistance = distance;
            closestCategory = category;
        }
    }
    return minDistance <= 2 ? closestCategory : null; // Only accept if the distance is 2 or less
}

function handleAction(action, value, category) {
    if (populations.hasOwnProperty(category)) {
        switch (action.toLowerCase()) {
            case "add":
                populations[category] += value;
                break;
            case "subtract":
                populations[category] -= value;
                break;
            case "set":
                populations[category] = value;
                break;
            default:
                console.error("Invalid action:", action);
        }
      populations[category];
    } else if (mainHeading.hasOwnProperty(category)) {
        switch (action.toLowerCase()) {
            case "add":
                mainHeading[category] += value;
                break;
            case "subtract":
                mainHeading[category] -= value;
                break;
            case "set":
                mainHeading[category] = value;
                break;
            default:
                console.error("Invalid action:", action);
        }
        mainHeading[category];
    } else {
        console.error("Invalid category:", category);
    }
}


function parseCollectiveCommand(data) {

    const matches = data.match(/\[(\w+|\d+)\]/g);

    if (!matches || matches.length !== 3) {
        return null;
    }

    let action, value, categoryInput;

    for (const match of matches) {
        const content = match.slice(1, -1);
        if (["add", "subtract", "set"].includes(content.toLowerCase())) {
            action = content;
        } else if (!isNaN(content)) {
            value = parseInt(content, 10);
        } else {
            categoryInput = content;
        }
    }

    if (!action || !value || !categoryInput) {
        return null;
    }

    const category = getClosestCategory(categoryInput.toLowerCase());

    if (!category) {
        return "Invalid category: " + categoryInput;
    }

    handleAction(action, value, category);

    return "Command accepted: " + action + " " + value + " points in " + category;
}




function sendMessage() {
    const inputElem = document.getElementById('userInput');
    const message = inputElem.value;
    inputElem.value = '';

    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += '<p>' + userId + ': ' + message + '</p>';
    scrollToBottom();

    const thinkingElem = document.createElement('p');
    thinkingElem.classList.add('thinking');
    thinkingElem.innerHTML = 'Profane';
    chatWindow.appendChild(thinkingElem);

    setTimeout(() => {
        chatWindow.removeChild(thinkingElem);

        const commandResponse = parseCollectiveCommand(message);
        let response;
        if (commandResponse) {
            response = commandResponse;
            chatWindow.innerHTML += '<p>Profane: ' + commandResponse + '</p>';
            scrollToBottom();
        } else {
            response = getResponse(message);
            chatWindow.innerHTML += '<p>Profane: ' + response + '</p>';
            scrollToBottom();
        }

        const timestamp = new Date().toISOString();

        if (!isRedundant(message, response)) {
            conversationData.push([message, response, timestamp]);
        }

        updateJSONDisplay();
    }, 1000);
}







function isRedundant(question, answer) {
    return conversationData.some(entry => entry[0] === question && entry[1] === answer);
}

function getResponse(message) {
    let response = searchInData(message, baseData);
    if (!response) {
        response = searchInData(message, conversationData);
    }
    return response || "I can't answer that until you provide me with an Updated OS.";
}

function searchInData(message, data) {
    const closestQuestion = getClosestQuestion(message, data);
    return data.find(entry => entry[0] === closestQuestion)?.[1] || null;
}

function updateJSONDisplay() {
    console.log("updateJSONDisplay called"); // Add this line
     jsonEditor = document.getElementById('jsonEditor');
     combinedData = {
        conversationData: conversationData,
        userData: {
            id: userId,
            state: state,
            mainHeading: mainHeading,
            populations: populations,
            completedProjects: userCompletedProjects
        }
    };
    console.log(combinedData); // Add this line
    jsonEditor.value = JSON.stringify(combinedData, null, 2);
}


function isValidDataFormat(data) {
    if (!data || !data.conversationData || !Array.isArray(data.conversationData)) {
        return false;
    }
    for (const entry of data.conversationData) {
        if (!Array.isArray(entry) || entry.length !== 3 || typeof entry[0] !== 'string' || typeof entry[1] !== 'string' || typeof entry[2] !== 'string') {
            return false;
        }
    }
    if (!data.userData || typeof data.userData.id !== 'string' || typeof data.userData.state !== 'string' || typeof data.userData.mainHeading !== 'object' || typeof data.userData.populations !== 'object' || !Array.isArray(data.userData.completedProjects)) {
        return false;
    }
    return true;
}

// Function to update user data
function updateUserData(userData) {
    console.log("Updating user data:", userData);
    Object.assign(this, userData);
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.innerHTML += '<font style="color:lightgreen;">' + this.id + ' is logged in.</font><br>';
    scrollToBottom();
    console.log("User data after update:", this);
}

function importBaseDataSet(event) {
    const files = event.target.files;
    if (files.length === 0) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        try {
            const importedData = JSON.parse(event.target.result);
            console.log("Imported data:", importedData);

            if (isValidDataFormat(importedData)) {
                let { conversationData, userData } = importedData;

                if (userData && userData.id && userData.state && userData.mainHeading && userData.populations && userData.completedProjects) {
                    updateUserData(userData);
                } else {
                    alert('Missing required userData properties.');
                }

                conversationData = conversationData || [];
                updateJSONDisplay();
            } else {
                alert('Invalid data format.');
            }
        } catch (error) {
            console.error("Error parsing or reading the file:", error);
            alert('Error reading the file.');
        }
    };
    reader.readAsText(files[0]);
}






function scrollToBottom() {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.scrollTop = chatWindow.scrollHeight;
}




  let intervalId;


  function startLoop() {
      intervalId = setInterval(function() {
        userId = userData.id;
    state = userData.state;
    mainHeading = userData.mainHeading;
    populations = userData.populations;
    userCompletedProjects = userData.completedProjects;
      }, 1000); // 1 second
  }

  // Start the loop initially
  startLoop();

