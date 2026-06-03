window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if(window.scrollY > 100){
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
function toggleTopic(id){

    let topic = document.getElementById(id);

    let arrow = topic.parentElement.querySelector(".arrow");

    if(topic.style.display === "block"){
        topic.style.display = "none";
        arrow.innerHTML = "▶";
    }

    else{
        topic.style.display = "block";
        arrow.innerHTML = "▼";
    }
}

function randomTopic(){

    let topics = [
        "Personality vs Academic Excellence",
        "Discipline Through Fear or Freedom",
        "Democratic vs Authoritarian Leadership",
        "Character Building vs Academic Excellence"
    ];

    let random = Math.floor(Math.random() * topics.length);

    document.getElementById("random-result").innerHTML =
        "Today's Topic: <strong>" + topics[random] + "</strong>";
}


let questionGenerated = false;
function randomQuestion(){

    questionGenerated = true;

    let questions = [

        "A fight breaks out between two students during recess. How would you handle it?",

        "Some students feel their opinions are not being heard. What would you do?",

        "A school event is poorly organized and students are unhappy. How would you respond?",

        "You notice a group of students littering despite repeated warnings. What action would you take?",

        "A teacher asks you to help maintain discipline during an event. How would you approach the task?"

    ];

    let random = Math.floor(Math.random() * questions.length);

    document.getElementById("question-box").innerHTML =
        questions[random];
}




function submitAnswer(){

    if(!questionGenerated){

        document.getElementById("feedback-box").innerHTML =
        "⚠️ Please generate a question first.";

        return;
    }

    let answer =
    document.getElementById("answer-box").value;

    if(answer.trim() === ""){

        document.getElementById("feedback-box").innerHTML =
        "⚠️ Please write an answer.";

        return;
    }

    if(answer.length < 50){

        document.getElementById("feedback-box").innerHTML =
        "⚠️ Try giving a more detailed answer.";

        return;
    }

    let keywords = [
        "student",
        "teacher",
        "help",
        "solution",
        "problem",
        "school",
        "team",
        "lead",
        "listen"
    ];

    let valid = false;

    for(let word of keywords){

        if(answer.toLowerCase().includes(word)){
            valid = true;
            break;
        }
    }

    if(valid){

        document.getElementById("feedback-box").innerHTML =
        "✅ Good response! You explained your approach clearly.";

    }

    else{

        document.getElementById("feedback-box").innerHTML =
        "⚠️ Your answer does not seem related to leadership or the question.";
    }
}










function toggleArticle(id){

    let article = document.getElementById(id);

    if(article.style.display === "block"){
        article.style.display = "none";
    }

    else{
        article.style.display = "block";
    }
}






function generateChallenge(){

    let challenges = [

        "Help a classmate who is struggling with a subject.",

        "Thank a teacher who has helped you recently.",

        "Start a conversation with someone new today.",

        "Resolve a small disagreement peacefully.",

        "Volunteer to help organize a classroom activity.",

        "Compliment three people genuinely today.",

        "Lead a small group discussion respectfully.",

        "Keep your classroom clean and encourage others to do the same.",

        "Listen carefully to someone without interrupting.",

        "Identify one problem in school and think of a solution."

    ];

    let random = Math.floor(Math.random() * challenges.length);

    document.getElementById("challenge-box").innerHTML =
        challenges[random];
}



function generateQuote(){

    let quotes = [

        "Leadership is action, not position.",

        "A leader creates more leaders, not followers.",

        "The best way to lead is by example.",

        "Great leaders listen before they speak.",

        "Success is not about power; it is about responsibility.",

        "Confidence comes from preparation and practice.",

        "True leadership is serving others.",

        "Every challenge is an opportunity to grow.",

        "Character is the foundation of leadership.",

        "Small actions create big impact."

    ];

    let random = Math.floor(Math.random() * quotes.length);

    let quoteBox = document.getElementById("quote-box");

    quoteBox.style.opacity = "0";

    setTimeout(() => {

          quoteBox.innerHTML =
         "💡 \"" + quotes[random] + "\"";

         quoteBox.style.opacity = "1";

    }, 300);
}








document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".contact-form");

    if(form){

        form.addEventListener("submit", function(e){

            e.preventDefault();

            alert("✅ Thank you! Your message has been received.");

            form.reset();
        });
    }
});