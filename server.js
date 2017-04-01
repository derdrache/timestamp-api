var express = require("express");
var app = express();

var months= ["Januar", "Februar", "March", "Arpil", "May", "June", "July", "August", "September", "October", "November", "December"]

app.get("/:test", function (req,res){
    var unix;
    var natural;
    var eingabe = req.params.test;
    var unixStart ={
        year: 1970,
        month: 1,
        day: 1
        
    }
    
    if (parseInt(eingabe)){
        unix =parseInt(eingabe);
        var date = new Date(unix*1000);
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();
        natural = " "+month+" "+day+", "+year;
        
    } else{
        var dateUnix = new Date(eingabe).getTime()/1000;
        
        var date = new Date(eingabe);
        var year = date.getFullYear();
        var month = months[date.getMonth()];
        var day = date.getDate();
        natural = " "+month+" "+day+", "+year;
        
        if (month == undefined){natural = date;} else{
            natural = natural;}
            unix= dateUnix;
    }
   
   
   res.json({unix: unix, natural: natural});
    
})

app.listen(8080,function(){
    console.log("roger, we are online...")
})