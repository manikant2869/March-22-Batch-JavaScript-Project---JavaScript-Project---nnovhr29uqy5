(function(){
    let buttons = document.querySelectorAll('.btn');
    let screen = document.querySelector('.screen')
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector('.btn-equal')

   buttons.forEach((button)=>{
       button.addEventListener('click',(event)=>{
           let val = event.target.dataset.num;
           screen.value+= val;
       })
   })
   equal.addEventListener('click',(event)=>{
       if(screen.value === ""){
           screen.value = "";
       }else{
           let answer = eval(screen.value);
           screen.value = answer;
       }
   })
   clear.addEventListener('click',()=>{
       screen.value = "";
   })

})();
