class Food{
    constructor(){
        this.foodStock=0;
        this.lastFeed;

        this.image="images/Milk.png";
        milk=loadImage("images/Milk.png");

        feed=createButton("Feed thr dog");
        feed.position(7000,95);
        feed.mousePressed(feedDog);

        addFood=createButton("Add Food");
        addFood.position(800,95);
        addFood.mousePressed(addFoods);
    }
    updateFoodStock(foodStock){
    this.foodStock=foodStock;
    } 

    getFedTime(lastFed){
    this.lastFed=lastFed;
    } 

    deductFood(){
    if(this.foodStock>0){
    this.foodStock=this.foodStock-1;
    }
    } 

    getFoodStock(){
        return this.foodStock; 
    }
    
    display(){ 
        var x=80,y=100;
         imageMode(CENTER);
          image(this.image,720,220,70,70);
          
          if(this.foodStock!=0){ 
              for(var i=0;i<this.foodStock;i++){
                   if(i%10==0){
                        x=80; y=y+50;
                     } 
                     image(this.image,x,y,50,50);
                      x=x+30;
                     } 
                    } 
                }
}

