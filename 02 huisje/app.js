class App {
        runApplication() {
        console.log("hello world")                     
        let canvas = document.getElementById("canvasId");
        console.log(canvas);
    
        let g = canvas.getContext("2d");
        g.fillStyle = "#ff0000";
        g.fillRect(0,0,canvas.width,canvas.height);
        
        g.fillStyle = "#000000";
        g.fillRect(0,0,10,10);
    }
}
let app = new App()
app.runApplication();



 
