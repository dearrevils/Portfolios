document.addEventListener("DOMContentLoaded", function() {
    let messageDiv = document.createElement("div");
    messageDiv.textContent = "🚧 Under Development 🚧";
    messageDiv.style.cssText = "position: fixed; top: 10px; left: 50%; transform: translateX(-50%); background: #ffcc00; padding: 10px; font-size: 18px; font-weight: bold; border-radius: 5px;";
    
    document.body.appendChild(messageDiv);
});
