// Dummy AI response function
function getAIResponse(userMessage) {
    const responses = [
        "Halo! Bagaimana saya bisa membantu Anda?",
        "Ceritakan lebih banyak!",
        "Itu menarik!",
        "Maaf, saya tidak mengerti. Bisa ulangi?",
    ];
    // Return a random response
    return responses[Math.floor(Math.random() * responses.length)];
}

function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");
    
    // Get the user's message
    const userMessage = userInput.value.trim();
    
    if (userMessage) {
        // Display user's message in the chat box
        const userMessageElement = document.createElement("div");
        userMessageElement.textContent = "Anda: " + userMessage;
        chatBox.appendChild(userMessageElement);
        
        // Clear the input field
        userInput.value = "";

        // Get AI response
        const aiResponse = getAIResponse(userMessage);

        // Display AI response in the chat box
        const aiMessageElement = document.createElement("div");
        aiMessageElement.textContent = "Bot: " + aiResponse;
        chatBox.appendChild(aiMessageElement);
        
        // Scroll to the bottom of the chat box
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}