var text = document.getElementById("txt");
var gnrtBtn = document.getElementById("gnrt");
var de = document.getElementById("demo");
var show = document.getElementById("show");
var num;

function getRandNumber(min , max){
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
        //var bool=false;
        
        var index=getRandNumber(65,90);
        
        var res = String.fromCharCode(index);
        var ch=[];
        for(var t=0 ; t<num ; t++){
            ch[t]=res;
        }
        console.log(ch);
        console.log(ch.includes("B"))
        if(!ch.includes(res))
        {
            
        }
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
                    var ret = ltrlist[imgIndex];
                    img.setAttribute("src",ret);
                    var current;
                    localStorage.setItem("Event",te);
                    var now = new Date().getTime();
                    var storedItem = localStorage.getItem("Event");
                    console.log(storedItem);
                    setTimeout(function(){
                       localStorage.clear();
                    },5000);
                }
            }
        });
    }
});