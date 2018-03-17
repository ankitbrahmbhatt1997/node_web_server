
var colorDisplay= document.querySelector(".colorDisplay");
var box=document.querySelectorAll(".box");
var outputText=document.querySelector(".outputtext");
var header=document.querySelector("header");
var reset=document.querySelector("#btn");
var Easy = document.querySelector(".btn2");
var Hard  = document.querySelector(".btn3");
var numsquares=6;


Easy.addEventListener("click",Easybtn);

Hard.addEventListener("click",Hardbtn);

var colors=randomColors(numsquares);
var colorResult=pickColor();
colorDisplay.textContent=colorResult;
reset.addEventListener("click",Reset);



for(var i = 0;i<box.length;i++)
{
    box[i].style.background=colors[i];


    box[i].addEventListener("click",function(){
    // alert(this.style.backgroundColor);
        if(this.style.background===colorResult)
        {
            outputText.textContent="Correct";
            changecolor();
            header.style.background=colorResult;
            reset.textContent="Play Again!";
            
        }
    else{
        outputText.textContent="Try Again";
        this.style.background="#111111";
        reset.textContent="NEW COLORS";
    }
    });
}

function pickColor()
{
    var random=Math.floor(Math.random()*colors.length);
   return colors[random];
}


function randomColors(num) 
{
    var arr=[];
    for(i=0;i<num;i++)
    {
        
        var R=Math.floor(Math.random()*256);
        var G=Math.floor(Math.random()*256);
        var B=Math.floor(Math.random()*256);

        var S = "rgb("+R+", "+G+", "+B+")";
        arr.push(S);


    }

return arr;

}

function changecolor()
{
    for(i=0;i<box.length;i++)
    {
        box[i].style.background=colorResult;
    }

}

    // function Reset() 
    //     {
               
           
    //         colors=randomColors(6);
    //         colorResult=pickColor();
        
    //         colorDisplay.textContent=colorResult;
    //    for(var i = 0;i<=box.length;i++)
    //    {
    //        box[i].style.background=colors[i];
    //    }
    //    this.textContent="NEW COLORS";
    //    header.style.background="Red";
    //    header.style.border="2px solid red";
    // }
    
    function Easybtn(){
        this.classList.add("selected");
        Hard.classList.remove("selected");
        numsquares=3;
        colors=randomColors(numsquares);
        colorResult=pickColor();
        colorDisplay.textContent=colorResult;
        

        for(i=0;i<box.length;i++)
        {
            if(colors[i])
            {
                box[i].style.background=colors[i];
            }
            else{
                box[i].style.display="none";
            }
        
        }}

        function Hardbtn(){
            this.classList.add("selected");
            Easy.classList.remove("selected")
            numsquares=6;
            colors=randomColors(numsquares);
            colorResult=pickColor();
            colorDisplay.textContent=colorResult;
            for(i=0;i<box.length;i++)
            {
                
                
                    box[i].style.background=colors[i];
                    box[i].style.display="block";
                
                    
                
            
            }
           
        
        }


        function Reset() 
        {
          
            
            colors=randomColors(numsquares);
            colorResult=pickColor();
        
            colorDisplay.textContent=colorResult;
            
            
        for(var i = 0;i<box.length;i++)
        {
           box[i].style.background=colors[i];
           
        }
    
        header.style.background="steelblue";
            reset.textContent="NEW COLORS";
        
        }