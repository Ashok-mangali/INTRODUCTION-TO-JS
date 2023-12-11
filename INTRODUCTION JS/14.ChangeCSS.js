let isLightMode = true;
let SwitchMode = () => {
    let heading = document.getElementById('name');
    let button = document.getElementById('btn');
    let body = document.body;
    if(isLightMode){
        heading.style.color = "#ffffff";
        button.style.backgroundColor = "#ffffff"
        body.style.backgroundColor = "#000000"
        isLightMode = false;
        heading.innerHTML = "Hi Bhagya";
        button.innerHTML = 'Switch to Light Mode';
    }else{
        heading.style.color = "#000000";
        button.style.backgroundColor = "#EFEFEF"
        body.style.backgroundColor = "#ffffff"
        isLightMode = true;
        heading.innerHTML = "Ashok"
        button.innerHTML = 'Switch to Dark Mode';
    }
}