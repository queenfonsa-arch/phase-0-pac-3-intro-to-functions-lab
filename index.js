// Returns the string in all uppercase letters
function shout(string) {
  return string.toUpperCase();
}

// Returns the string in all lowercase letters
function whisper(string) {
  return string.toLowerCase();
}

// Logs the string in all uppercase letters
function logShout(string) {
  console.log(string.toUpperCase());
}

// Logs the string in all lowercase letters
function logWhisper(string) {
  console.log(string.toLowerCase());
}

// Returns different responses depending on the string input
function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}
