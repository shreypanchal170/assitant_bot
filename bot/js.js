document.getElementById('user-input').focus();

const academicData = {
    "john doe": {
        "math": 90,
        "science": 85,
        "history": 88,
        "english": 92
    },
    "jane smith": {
        "math": 95,
        "science": 89,
        "history": 94,
        "english": 90
    }
};

function sendMessage() {
    let userInput = document.getElementById('user-input').value.trim();
    if (userInput === "") return;

    addMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        addMessage(botResponse, 'bot-message');
    }, 500);
}

function addMessage(message, className) {
    let chatBox = document.getElementById('chat-box');
    let messageDiv = document.createElement('div');
    messageDiv.className = `message ${className}`;
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function checkSubmit(event) {
    if (event.keyCode === 13) {
        sendMessage();
    }
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("performance of")) {
        const studentName = input.split("performance of")[1].trim();
        if (academicData[studentName]) {
            const performance = academicData[studentName];
            let response = `Performance of ${studentName}:\n`;
            for (let subject in performance) {
                response += `${subject}: ${performance[subject]}\n`;
            }
            return response;
        } else {
            return `I don't have data for ${studentName}.`;
        }
    } else if (input.includes("help")) {
        return "You can ask me about the performance of a student by typing 'performance of [student name]'.";
    } else {
        return "I'm sorry, I don't understand that question. You can ask me about the performance of a student by typing 'performance of [student name]'.";
    }
}
