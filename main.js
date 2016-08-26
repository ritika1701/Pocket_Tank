var tank1;
function myfunction(){
    field.start();
    tank1=new component(100,50,"red",120,300);
}
    var field = {
        canvas : document.createElement("canvas"),
        start : function(){
                 this.canvas.width = 1000;
        this.canvas.height = 500;
        this.context = this.canvas.getContext("2d");         
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
     

    }
       function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    ctx = field.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
}
function play(){

    var ang=parseInt(document.getElementById('angle').value);
    var vel=parseInt(document.getElementById('velocity').value);
       
    var angle=Math.PI*ang/180;
    var a= tank1.x+(tank1.width)/2;
    var b= tank1.y;
    var c=a+ (50* Math.cos(angle));
    var d=b-(50* Math.sin(angle));
    var e=vel*Math.sin(angle);    
    var id=setInterval(draw,34);
     function draw(){
        ctx=field.context;
        ctx.beginPath();
        ctx.arc(c,d,2,0,Math.PI*2);
        ctx.stroke();
        c=c+vel*Math.cos(angle);
        d=d-e;
        e=e-0.5;
            
    }
    
}
 

