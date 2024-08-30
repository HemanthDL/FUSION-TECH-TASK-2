let input = document.getElementById('input-area');
let spann = document.querySelectorAll('span');

let a = Array.from(spann);
let s = "";
a.forEach((span)=>{
    span.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            try {
                if(s.includes("^")){
                    let arr = s.split("^");
                    if(arr.length > 2){
                        throw Error("Error");
                    }
                    let a = parseInt(arr[0]);
                    let b = parseInt(arr[1]);
                    let ans = Math.pow(a,b);
                    if(isNaN(ans)){
                        throw Error("Invalid!!");
                    }
                    s = ans.toString();
                    input.value=s;
                }
                else{
                    s = eval(s);
                    input.value=s;
                }
            } catch (ep) {
                input.value="ERROR";
                s="";
            }
            
        }
        else if(e.target.innerHTML == 'AC'){
            s="";
            input.value=s;
        }
        else if(e.target.innerHTML == "backspace"){
            s=s.substring(0,s.length-1);
            input.value=s;
        }
        else{
            s=s+e.target.innerHTML;
            input.value=s;
        }
    })
})     