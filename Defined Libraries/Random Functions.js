function startdialogue() {

    textSize(12);
    fill("#EEEEEE");
    text("Hello V-BR3286 to planet R-32.", 20, 240);
    text("The Inhabitants of this planet are ravaged by the deadly blue strain.", 20, 280);
    text("Their ony hope is in you, to take them back.", 20, 320);
    text("You have to cure them with your own strain.", 20, 360);
    text("They may resist by changing back. You have to get 100% of the population.", 20, 400);
    text("Good luck. Press any key to start.", 20, 440);
  
  }
  
  function gameplay() {
  
    move();
  
    for(let i = 0; i < 16; i++){
      person[i].fall();
  
      if(person[i].health === false){
        n++;
      }
    }
  
    score = n/16*100;
    n = 0
    fill("#EEEEEE");
    textSize(20);
    text("Current infected population: " + score + "%", 20, 30);
  
    if(score === 100){
      gameState = "over";
    }
  
  }
  
  function endgame() {
  
    for(let i = 0; i < 16; i++){
      person[i].fall();
    }
  
    fill("#EEEEEE");
    text("Congradulations V-BR3286 on freeing the planet from the deathly blue plague.", 1070, 240);
    text("You have now finished your mandatory service.", 1070, 280);
    text("You can now watch the inhabitants go upon their lifes peacefully.", 1070, 320);
    
  }