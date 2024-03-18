let calculator = alert("Hello Everyone ! ThankYou For Using Our Calculator ")
let string = " ";
let buttons = document.querySelectorAll('#First');
Array.from(buttons).forEach((First)=>{
    First.addEventListener('click',(e)=>{
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value=string;
        }
        else if (e.target.innerHTML == 'C') {
            string = " ";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})