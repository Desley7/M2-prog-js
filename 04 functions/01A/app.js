function superMooieGlobalFunction()
{
    console.log("ik ben globaal");
    console.log("dus je mag mij overal aanropen");

}
superMooieGlobalFunction();
superMooieGlobalFunction();
superMooieGlobalFunction();

class App
{
    runApplication()
    {
        console.log("hello world")
        superMooieGlobalFunction();        
    }
}
let app = new App();
app.runApplication();



















function aanroepVoorbeeld()
{

}

aanroepVoorbeeld();