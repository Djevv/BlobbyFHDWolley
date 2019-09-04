function randomDonk(){
    //plays a random "donk" sound for hitting the ball

    var rn 
    rn = Math.floor(((Math.random() * 10)));

    if(rn>5){
        rn -= 5;
    }

    var manyDonks = ["assets/sounds/donk1.mp3", "assets/sounds/donk2.mp3", "assets/sounds/donk3.mp3", "assets/sounds/donk4.mp3", "assets/sounds/donk5.mp3", "assets/sounds/donk6.mp3"];

    specialDonk.sound.src = manyDonks[rn];
    specialDonk.play();

    console.log(rn);
}