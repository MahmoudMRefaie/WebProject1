var text = document.getElementById("txt");
var gnrtBtn = document.getElementById("gnrt");
var de = document.getElementById("demo");
var show = document.getElementById("show");
var num;

function getRandNumber(min , max){    
    //return Math.floor(Math.random() * (max-min+1) * min);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var ltrlist=["images/ant.png","images/bear.jpg","images/cat.jpg","images/dog.jpg","images/elephant.jpg","images/fish.jpg","images/Girraffe.jpg","images/Horse.jpg","images/Iguana.jpg","images/Jellyfish.jpg","images/Kangaro.png","images/Lion.jpg","images/Monkey.jpg","images/Nightingale.jpg","images/Owl.jpg","images/Panda.jpg","images/quail.jpg","images/rabbit.png","images/snake.png","images/Tiger.jpg","images/urial.jpg","images/vulture.png","images/whale.jpg","images/xiphias.png","images/yak.jpg","images/zebra.jpg"];

//console.log(ltrlist[0]);
var button;
gnrtBtn.addEventListener("click",function(){
    de.innerHTML="";
    var getText = text.value;
    num = parseInt(getText);
    console.log(num);
    for(var i = 0 ; i<num ; i++){
        var bool=false;
        
        var index=getRandNumber(65,90);
        
        var res = String.fromCharCode(index);
        //console.log(index);
        
        button = document.createElement("button");
        de.appendChild(button);
        button.innerHTML=res;
        
        
        
        
        
        button.style.fontSize="20px";
        button.style.marginRight="20px";
        button.style.marginTop="10px";
        button.style.width="50px";
        button.style.borderRadius="15px";
        button.style.background="linear-gradient(to bottom, #79bbff 5%, #378de5 100%);";
        button.style.backgroundColor="#79bbff";
        button.style.border="#border:1px solid #337bc4;";
        button.style.display="inline-block";
        button.style.cursor="pointer";
        button.style.color="#ffffff";
        button.style.fontFamily="Arial";
        button.style.fontWeight="bold";
        button.style.textDecoration="bold";
        button.style.textShadow="0px 1px 0px #528ecc";
        button.addEventListener("mouseover",function(){
            button.setAttribute("background","linear-gradient(to bottom, #378de5 5%, #79bbff 100%)");
            button.setAttribute("background-color","#378de5");
        });
        button.addEventListener("click",function(){
            show.innerHTML="";
            var img = document.createElement("img");
            show.appendChild(img);
            img.setAttribute("width","500px");
            img.setAttribute("height","500px");
            img.style.border="10px outset darkorange";
            img.style.borderRadius="20px";
            
            for(var k=65 ; k <= 90 ; k++){
                var te = String.fromCharCode(k);
                if(this.innerHTML == te){
                    var imgIndex =k-65;
                    //console.log(imgIndex);
                    var ret = ltrlist[imgIndex];
                    //console.log(ret);
                    img.setAttribute("src",ret);
                }
            }
            
           /*
           if(this.innerHTML == "A"){
                img.setAttribute("src","images/ant.png");
           }
           else if(this.innerHTML == "B"){
               img.setAttribute("src","images/bear.jpg");
           }
           else if(this.innerHTML == "C"){
               img.setAttribute("src","images/cat.jpg");
           }
           else if(this.innerHTML == "D"){
               img.setAttribute("src","images/dog.jpg");
           }
           else if(this.innerHTML == "E"){
               img.setAttribute("src","images/elephant.jpg");
           }
           else if(this.innerHTML == "F"){
               img.setAttribute("src","images/fish.jpg");
           }
           else if(this.innerHTML == "G"){
               img.setAttribute("src","images/Girraffe.jpg");
           }
           else if(this.innerHTML == "H"){
               img.setAttribute("src","images/Horse.jpg");
           }
           else if(this.innerHTML == "I"){
               img.setAttribute("src","images/Iguana.jpg");
           }
           else if(this.innerHTML == "J"){
               img.setAttribute("src","images/Jellyfish.jpg");
           }
           else if(this.innerHTML == "K"){
               img.setAttribute("src","images/Kangaro.png");
           }
           else if(this.innerHTML == "L"){
               img.setAttribute("src","images/Lion.jpg");
           }
           else if(this.innerHTML == "M"){
               img.setAttribute("src","images/Monkey.jpg");
           }
           else if(this.innerHTML == "N"){
               img.setAttribute("src","images/Nightingale.jpg");
           } 
           else if(this.innerHTML == "O"){
               img.setAttribute("src","images/Owl.jpg");
           }
           else if(this.innerHTML == "P"){
               img.setAttribute("src","images/Panda.jpg");
           }
           else if(this.innerHTML == "Q"){
               img.setAttribute("src","images/quail.jpg");
           }
           else if(this.innerHTML == "R"){
               img.setAttribute("src","images/rabbit.png");
           }
           else if(this.innerHTML == "S"){
               img.setAttribute("src","images/snake.png");
           }
            else if(this.innerHTML == "T"){
               img.setAttribute("src","images/Tiger.jpg");
           }
            else if(this.innerHTML == "U"){
               img.setAttribute("src","images/urial.jpg");
          }
            else if(this.innerHTML == "V"){
               img.setAttribute("src","images/vulture.png");
          }
            else if(this.innerHTML == "W"){
               img.setAttribute("src","images/whale.jpg");
          }
            else if(this.innerHTML == "X"){
               img.setAttribute("src","images/xiphias.png");
          }
            else if(this.innerHTML == "Y"){
               img.setAttribute("src","images/yak.jpg");
          }
            else if(this.innerHTML == "Z"){
               img.setAttribute("src","images/zebra.jpg");
          }
          */
        });
    }
});