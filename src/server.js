const app = require("./index");
const connect = require("./configs/db");

app.listen(5000, async function(){
    try{
      await connect();
      console.log("listening port 8000")
    }
    catch(err){
        console.log(err.message);
    }
})