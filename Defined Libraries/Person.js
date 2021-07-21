class Man{

    constructor(){
    
        this.x = random(windowWidth*1/3 + 32, windowWidth*2/3 - 32);
        this.y = random(-windowHeight);
        this.speed = random(3, 5);
        this.health = true;
        this.walk = loadAnimation("Images/Walk/Walk0.png","Images/Walk/Walk5.png");
        this.sick = loadAnimation("Images/Sick/Sick0.png","Images/Sick/Sick5.png");

    }

    fall(){

        this.y = this.y + this.speed;
        this.x = this.x + random(1, -1);
        
        if(this.y > height){
           this.y = random(-10, -100);
           this.x = random(width*1/3 + 32, width*2/3 - 32);

           if((random (1,10) > 8) && gameState !== "over"){
               this.health = true;
           }
        }

        if(dist(this.x, this.y, bug.x, bug.y) < 64 && this.health === true){
            this.health = false;
            pingSound.play();
        }

        if(this.health === true){
            animation(this.walk, this.x, this.y)
        }
        else if(this.health === false){
            animation(this.sick, this.x, this.y)
        }

    }

}