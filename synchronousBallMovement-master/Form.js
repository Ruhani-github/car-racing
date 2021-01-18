class Form {
    constructor (){
       this.input= createInput("name");
       this.button = createButton("play");
       this.greeting = createElement("h2");
    }
    hide (){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }
    display (){
        var title = createElement ("h2");
        title.html("Car racing game");
        title.position(130,0);
        this.input.position(130,160);
        this.button.position(250,200);
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            playerobj.name=this.input.value
            playerCount = playerCount + 1;
            playerobj.index = playerCount;
            playerobj.update();
            playerobj.updateCount(playerCount);
            this.greeting.html("hello"+playerobj.name);
            this.greeting.position(130,100);
        })
    }

}