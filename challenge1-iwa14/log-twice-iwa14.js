let firstName = "John";
let age = 35;
let hobby = "Coding";

const logTwice = (message) => {
	console.log(message);
	console.log(message);
};

const logMessage = `Hello, ${firstName} (${age}). I love ${hobby}!`;

logTwice(logMessage);
