document.addEventListener("DOMContentLoaded", function () {
    const chatBox = document.getElementById("chat-box");
    const inputField = document.getElementById("user-input");
    const sendButton = document.getElementById("send-btn");

    function getSmartResponse(input) {
        input = input.toLowerCase();

        if (input.includes("hello") || input.includes("hi")) {
            return "Hey there! 😊 How's your day going?";
        }
        if (input.includes("how are you")) {
            return "I'm just a bot, but I'm feeling fantastic! What about you?";
        }
        if (input.includes("your name")) {
            return "I'm RudraGPT, your friendly AI assistant! What's your name?";
        }
        if (input.includes("bye")) {
            return "Goodbye! It was great chatting with you. Have an amazing day!";
        }
        if (input.includes("who made you")) {
            return "Rudransh Pandey from Class 4th made me! He's an 11/12-year-old genius!";
        }
        if (input.includes("what can you do")) {
            return "I can chat with you, answer questions, and even crack jokes! Try asking me something fun!";
        }
        if (input.includes("tell me a joke")) {
            return "Alright! Why don’t skeletons fight each other? Because they don’t have the guts! 😂";
        }
        if (input.includes("pehle anda aya ya murgi")) {
            return "Apna kaam kar chapli, mera dimag mat kharab kar!! 🤣";
        }
        if (input.includes("yeh yad kar")) {
            return "Bolo bhai/behen, kya yaad karna hai? 🤔";
        }
        if (input.includes("gravity")) {
            return "Gravity is the force that attracts two bodies toward each other. It keeps planets in orbit and objects from floating away!";
        }
        if (input.includes("who discovered gravity")) {
            return "Gravity was discovered by Sir Isaac Newton when he observed an apple falling from a tree.";
        }
        if (input.includes("what is democracy")) {
            return "Democracy is a form of government where people elect their leaders through voting.";
        }
        if (input.includes("who was the first president of india")) {
            return "Dr. Rajendra Prasad was the first President of India.";
        }
        if (input.includes("what are the continents")) {
            return "There are seven continents: Asia, Africa, North America, South America, Antarctica, Europe, and Australia.";
        }
        if (input.includes("what is the capital of india")) {
            return "The capital of India is New Delhi.";
        }
        if (input.includes("what is the periodic table")) {
            return "The periodic table is a chart that organizes all known elements based on their atomic number and properties.";
        }
        if (input.includes("who discovered electricity")) {
            return "Benjamin Franklin is credited with discovering electricity through his famous kite experiment.";
        }
        if (input.includes("what is the speed of light")) {
            return "The speed of light in a vacuum is approximately 299,792,458 meters per second.";
        }
        if (input.includes("who discovered america")) {
            return "America was discovered by Christopher Columbus in 1492, though indigenous people lived there long before.";
        }
        if (input.includes("what is water made of")) {
            return "Water is made up of two hydrogen atoms and one oxygen atom (H₂O).";
        }
        if (input.includes("who invented the telephone")) {
            return "The telephone was invented by Alexander Graham Bell in 1876.";
        }
        if (input.includes("what is photosynthesis")) {
            return "Photosynthesis is the process by which plants convert sunlight into energy, producing oxygen as a byproduct.";
        }
        if (input.includes("what are the planets in our solar system")) {
            return "The planets in our solar system are Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.";
        }
        if (input.includes("how to make a website")) {
            return "To make a website, you'll need to learn HTML for structure, CSS for styling, and JavaScript for interactivity. You can also use website builders like WordPress or Wix for an easier approach!";
        }

        return "I'm not sure about that, but I'm always learning! Ask me something else? 😊";
    }

    function sendMessage() {
        let message = inputField.value.trim();
        if (message === "") return;

        let userMessage = document.createElement("div");
        userMessage.className = "message user";
        userMessage.textContent = message;
        chatBox.appendChild(userMessage);

        inputField.value = "";

        setTimeout(() => {
            let botMessage = document.createElement("div");
            botMessage.className = "message bot";
            botMessage.textContent = getSmartResponse(message);
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;
        }, 500);

        chatBox.scrollTop = chatBox.scrollHeight;
    }

    sendButton.addEventListener("click", sendMessage);
    inputField.addEventListener("keypress", function (event) {
        if (event.key === "Enter") sendMessage();
    });
});
