const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning Boss");
    }

    else if(hr == 12) {
        speak("Good noon Boss");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon Boss");
    }

    else {
        speak("Good Evening Boss");
    }
}
function setupAssistant() {
    speak("Activating Inertia");
    speak("Going online");
    wishMe();
}

// Call the setupAssistant function when needed, e.g., after defining all your functions

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase()); 
}

btn.addEventListener('click', ()=>{
    recognition.start();

})

setupAssistant();


 function speakThis(message) {

    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";
    
    if(message.includes('hey') || message.includes('hello')) {
        const finalText = "Hello Boss";
        speech.text = finalText;
  
    }
    else if(message.includes('how are you')) {
        const finalText = "I am fine boss tell me how can i help you";
        speech.text = finalText;
    }
    else if(message.includes('what is your name')) {
        const finalText = "My name is rolex";
        speech.text = finalText;
    }
    else if(message.includes('tell me which task you perform')) {
        const finalText = "Hey, Hello, How are you, What is your name, Where are you from, Open Google,Play song on YouTube, ";
        speech.text = finalText;
    }
    else if(message.includes('where are you from')) {
        const finalText = "I'm an AI language model created by sairaj, so I don't have a physical presence or a place of origin. I exist in the digital realm and am here to assist and provide information. Is there anything else you'd like to know or discuss?";
        speech.text = finalText;
    }
    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening Youtube";
        speech.text = finalText;
    }
    else if(message.includes('open google')) {
        window.open("https://google.com", "_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }
    else if(message.includes('play song on youtube')) {
        window.open("https://youtu.be/SO21BH6vTC4?si=dY4N_kIZqOCdlZBT", "_blank");
        const finalText = "play song on youtube";
        speech.text = finalText;
    }
    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }
    else if(message.includes('what is') || message.includes('who is') || message.includes('what are')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }
    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }
    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }
    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }
    else if (message.includes('calculate')) {
        const calculation = message.replace('calculate', '').trim();
        try {
            const result = eval(calculation);
            const finalText = `The result of ${calculation} is ${result}`;
            speech.text = finalText;
        } catch (error) {
            const finalText = "I'm sorry, I couldn't calculate that";
            speech.text = finalText;
        }
    }
    else if (message.includes('open calendar')) {
        window.open('outlookcal:', '_blank');
        const finalText = "Opening Windows Calendar";
        speech.text = finalText;
    }
    else if (message.includes('open email')) {
        window.open('mailto:', '_blank');
        const finalText = "Opening Email Client";
        speech.text = finalText;
    }
    else if(message.includes('are you there')) {
        const finalText = "yes sir";
        speech.text = finalText;
    }
    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 0.8;

    window.speechSynthesis.speak(speech);
}