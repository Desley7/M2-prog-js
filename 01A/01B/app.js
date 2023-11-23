class App
{
    runApplication()
    {
        console.log("hello world")
            // Variabelen aanmaken
            let appNaam = "MijnApp";
            let versienummer = 1; // double
            let versiedatum = new Date().toLocaleDateString(); // Datum als string
            let auteur = "Desley puttileihalat";
            let copyright = "leerling";
            let distributeur = "leerling";
            let darkmode = false;
        
            // Console.log statements
            console.log("App Naam:", appNaam);
            console.log("Versie Nummer:", versienummer);
            console.log("Versie Datum:", versiedatum);
            console.log("Auteur:", auteur);
            console.log("Copyright:", copyright);
            console.log("Distributeur:", distributeur);
            console.log("Dark Mode:", darkmode);
    }
}

let app = new App();
app.runApplication();