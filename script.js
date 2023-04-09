let sting="";
let button=document.querySelectorAll("button");
Array.from(button).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML == "ba"){
            sting=sting.slice(0,sting.length-1);
            document.getElementById("area").value=sting;
            console.log(sting)
        }
        else if(e.target.innerHTML == "En"){
            sting=sting+"\n";
            document.getElementById("area").value=sting;
        }
        else if(e.target.innerHTML == "_"){
            sting=sting+" ";
            document.getElementById("area").value=sting;
            
        }
        
        else{
        sting=sting+e.target.innerHTML;
        document.getElementById("area").value=sting;
        }
    })
})