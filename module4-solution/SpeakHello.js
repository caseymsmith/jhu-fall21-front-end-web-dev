// STEP 2: Wrap the entire contents of SpeakHello.js inside of an IIFE
// See Lecture 52, part 2


// STEP 3: Create an object, called 'helloSpeaker' to which you will attach
// the "speak" method and which you will expose to the global context
// See Lecture 52, part 1

// DO NOT attach the speakWord variable to the 'helloSpeaker' object.
(function(window){
	var helloSpeaker = {};
	helloSpeaker.speakWord = "Hello";
	
// STEP 4: Rewrite the 'speak' function such that it is attached to the
// helloSpeaker object instead of being a standalone function.
// See Lecture 52, part 2
helloSpeaker.speak = function(name) {
	console.log(helloSpeaker.speakWord + " " + name);
}

// 2. In addition to the regular requirements, 
// research how Array.prototype.map function works.
// a. Add another method called speakSimple into the SpeakGoodBye.js 
// and SpeakHello.js that is externally exposed just like the speak 
// method is. The speakSimple method should not use console.log, but 
// instead should simply return the greeting concatenated to the passed 
// in name argument.
helloSpeaker.speakSimple = function(name) {
	return helloSpeaker.speakWord + " " + name;
}

//Stop from redefining "speak"
  Object.freeze(helloSpeaker);

window.helloSpeaker = helloSpeaker;
})(window);

// STEP 5: Expose the 'helloSpeaker' object to the global scope. Name it
// 'helloSpeaker' on the global scope as well.
// See Lecture 52, part 2
// (Note, Step 6 will be done in the SpeakGoodBye.js file.)
