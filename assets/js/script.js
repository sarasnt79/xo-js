const cellIndex=document.querySelectorAll(".cell");
let counter="";
let counter2="";
let counter3="";
const emt=document.querySelector(".game--status");
const emt2=document.querySelector("#test");
var interval;
let keepCells=[];


emt.innerHTML="It's X's turn";
document.querySelector(".game--restart").addEventListener('click' , reStart);


for (let value of cellIndex) {
 value.setAttribute('name', true);
 }


 for (let value of cellIndex) {
    value.addEventListener('click' ,function (){
        
       if(value.getAttribute('name')==='true'){
        counter++;

        if(counter%2 != 0 ){
            counter2++;
            value.setAttribute('name',false);
            keepCells[value.getAttribute('data-cell-index')]="X";
            value.innerHTML="X";
            if(counter2>2){
                checkCells(counter);
            }
           
         else{
                emt.innerHTML="It's O's turn";
         }
            
        }

        else{
            counter2++;
            value.setAttribute('name', false);
            
            keepCells[value.getAttribute('data-cell-index')]="O";
            value.innerHTML="O";
            if(counter2>2){
                checkCells(counter);
            }
            else{
                emt.innerHTML="It's X's turn";
            }
            
          
        }
    
    }
    
    } );
 }

function reStart(){
    for (let value of cellIndex) {
       value.innerHTML="";
       emt.innerHTML="It's X's turn";
       value.setAttribute('name', true);
        counter="";

     }
   for (let i = 0; i < keepCells.length; i++) {
    keepCells[i]="";
    
   }
}


function checkCells(item2){

    if(item2<9){
        if(keepCells[0] ==="X" &&  keepCells[1] ==="X" &&keepCells[2] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[0] ==="O" &&  keepCells[1] ==="O" &&keepCells[2] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }

   

        else if(keepCells[3] ==="X" &&  keepCells[4] ==="X" &&keepCells[5] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[3] ==="O" &&  keepCells[4] ==="O" &&keepCells[5] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
    
    
        else if(keepCells[6] ==="X" && keepCells[7] ==="X" && keepCells[8] ==="X"  ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[6] ==="O" && keepCells[7] ==="O" && keepCells[8] ==="O" ){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }

   
        else if(keepCells[0] ==="X" && keepCells[3]==="X" && keepCells[6]==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[0] ==="O" && keepCells[3]==="O" && keepCells[6]==="O" ){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                value.setAttribute('name',false);
                }
        }

    
        else if(keepCells[1] ==="X" && keepCells[4] ==="X" && keepCells[7] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[1] ==="O" && keepCells[4] ==="O" && keepCells[7] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }

        else if(keepCells[2]  ==="X" && keepCells[5]  ==="X" && keepCells[8] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[2]  ==="O" && keepCells[5]  ==="O" && keepCells[8] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        

        else if(keepCells[0]  ==="X" && keepCells[4]  ==="X" && keepCells[8] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[0]  ==="O" && keepCells[4]  ==="O" && keepCells[8] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }

        else if(keepCells[2]  ==="X" && keepCells[4]  ==="X" && keepCells[6] ==="X" ){
            emt.innerHTML="Player X has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }
        else if(keepCells[2]  ==="O" && keepCells[4]  ==="O" && keepCells[6] ==="O"){
            emt.innerHTML="Player O has won";
            for (let value of cellIndex) {
                 value.setAttribute('name',false);
                }
        }

    else{
        if(item2%2 != 0 ){
            emt.innerHTML="It's O's turn";
        }
        else{
            emt.innerHTML="It's X's turn";
        }
}

    }
    else if(item2==9){
        emt.innerHTML="Game ended in a draw";
    }

}