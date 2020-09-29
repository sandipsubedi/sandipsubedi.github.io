var userHour =  new Date().getHours();
var greeting = "";

if(userHour < 12){
    greeting = "Good Morning,\n";
}

else if (userHour < 18){
    greeting = "Good Afternoon,\n";
}

else if (userHour < 24 ){
    greeting = "Good Evening,\n"
}

else{
    greeting = "Hi,\n"
}

console.log(greeting);

$('#greeting').html(greeting);

