const clocks = document.querySelector('.clock');


setInterval(() => {
    let dt = new Date()
    //console.log(dt.toLocaleTimeString());

    clocks.innerHTML=dt.toLocaleTimeString();
}, 1000);
