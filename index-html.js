//Made By Bio Shot



window.onload(brower_check())
updated_brower = true
function brower_check(){ //Checkes the browser...
    if(document.addEventListener){
        updated_brower = true
        window.location.assign("home.html")
    }else{
        updated_brower = false
        window.location.assign("invaild.html")
    }
}

function update_(){
    console.log("placeholder")
}