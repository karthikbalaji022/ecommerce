
const  express=require("express");
const body=require("body-parser");
const mongoose=require("mongoose");
const _=require("lodash");

const app=express();

app.set('view engine','ejs');

app.use(body.urlencoded({extended: true}));
app.use(express.static("public"));



app.get("/",function(req,res){
  res.render("home");
});

app.listen(3000,function(){
  console.log("the server is running on localhost")
});




// function openNav() {
//     document.getElementById("mySidenav").style.width = "70%";
//     // document.getElementById("flipkart-navbar").style.width = "50%";
//     document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
// }
//
//
// function closeNav() {
//     document.getElementById("mySidenav").style.width = "0";
//     document.body.style.backgroundColor = "rgba(0,0,0,0)";
// }
//
// window.document.getElementsByClassName('.set-bg').each(function () {
//     var bg = $(this).data('setbg');
//     $(this).css('background-image', 'url(' + bg + ')');
// });
