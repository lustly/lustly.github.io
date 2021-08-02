var i=0;
setInterval(function(){
    var titles=[
"|l|",
"|lu|",
"|lus|",
"|lust|",
"|lusta|",
"|lustar|",
"|lusta|",
" |lust|",
"  |lus|",
"   |lu|",
"    |l|",

]

    if(i===titles.length) {
        i=0;
    }
    document.title = titles[i];
    i++;
}, 500);
