/**====================================================== 
 * app.js
 * Purpose: Main entry point for the application.
 * Author: Dane Rainbird (me@danerainbird.me)
 ====================================================== */

 /** DEPENDENCIES **/
let express = require('express');

/** EXPRESS CONFIGURATION **/
let app = express();
let port = process.env.PORT || 8080;

/** RENDER ENGINE **/
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

/** STATIC ROUTING CONFIGURATION **/
app.use(express.static(__dirname + '/res'));

/** RUN THE SERVER s**/
app.listen(port, () => console.log("Listening on port " + port))

/** ROUTING **/
app.get('/', (req, res) => {
    res.render("index.html");
})