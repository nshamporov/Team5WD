document.addEventListener("DOMContentLoaded", function() {
	const body = document.body;
	// Bubble background system:
	
	const bubbleImage = "/assets/images/bubble.png";

	function createBubble() {
		const bubble = document.createElement("div");
		const size = Math.random() * 100 + 50;
		bubble.className = "bubble";
		bubble.style.width = `${size}px`;
		bubble.style.height = `${size}px`;
		bubble.style.backgroundImage = `url(${bubbleImage})`;
		bubble.style.backgroundSize = "cover";
		bubble.style.left = `${Math.random() * 100}%`;
		bubble.style.top = `${Math.random() * 100}%`;
		bubble.style.animation = `float ${Math.random() * 20 + 10}s linear infinite`;
		body.appendChild(bubble);

		setTimeout(() => {
			bubble.remove();
		}, 30000); // Remove bubble after 30 seconds
	}

	for (let i = 0; i < 20; i++) {
		createBubble();
	}

	setInterval(createBubble, 1000); // Create a new bubble every 2 seconds
	
});