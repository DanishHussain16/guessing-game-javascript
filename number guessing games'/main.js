let min=1,
    max=10,
    winningNum=3;

 var   maxNum=document.getElementById('max-num'),
    minNum=document.getElementById('min-num'),
    inputValue=document.getElementById('input-field'),
    submitBtn=document.getElementById('submit-btn'),
    validation=document.getElementById('valid');


    maxNum.textContent=max;
    minNum.textContent=min;

    submitBtn.addEventListener('click',function(e){
       let guess=parseInt(inputValue.value);
     
     if(isNaN(guess)||guess>max||guess<min){
            validation.textContent=guess+' is invalid input !';
            validation.style.color='brown';
          
        
   }     
     else{
        if(guess===winningNum){
         validation.textContent=guess+' is Correct !';
         validation.style.color='green';
        }
        else{
         validation.textContent=guess+' is Inorrect !';
         validation.style.color='red';
        }
        
     
     }
     inputValue.value='';
     
    });