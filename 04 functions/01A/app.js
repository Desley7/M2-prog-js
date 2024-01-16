
function argumentsAreHandy(shoutout) {
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}

function superMooieGlobalFunction() {
    console.log("ik ben globaal");
    console.log("dus je mag mij overal aanroepen");
}

superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();
argumentsAreHandy("");

class App {
    runApplication() {
        console.log("hello world");
        superMooieGlobalFunction();
        argumentsAreHandy("Super shout out");
        argumentsAreHandy("Super shout out");
        argumentsAreHandy("Super shout out");
    }
}

let app = new App();
app.runApplication();




















function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();