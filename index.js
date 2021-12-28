console.log("js file");
let color = ['red','green','blue','yellow','black','pink','purple','orange','cyan','white'];
const uppercased = color.map(name => name.toUpperCase());
let ran = Math.floor(Math.random() * 8);
let ran1 = Math.floor(Math.random() * 8);
let div = document.getElementById('div');
if(ran1 != ran) {
div.innerText = uppercased[ran];
div.style.color = uppercased[ran1];
let p =document.createElement('p')
p.innerText = "Click any one :";
p.style.color ="black";
p.style.fontSize = "30px";
div.append(p);
let ot1 =document.createElement('div');

let r1 = Math.floor(Math.random() *8)
let r2 = Math.floor(Math.random() *8)
let r3 = Math.floor(Math.random() *8)
let r4 = Math.floor(Math.random() *8)

while(r1==r2 || r1==r3 || r1==r4 || r2==r1 || r2==r3 || r2==r4 || r3==r1 || r3==r2 || r3==r4 || r4==r1 || r4==r2 || r4==r3)
{
    r1 = Math.floor(Math.random() *8)
    r2 = Math.floor(Math.random() *8)
    r3 = Math.floor(Math.random() *8)
    r4 = Math.floor(Math.random() *8)
}
if(r1!=ran1 && r2!=ran1 && r3!=ran1 && r4!=ran1)
{ 
    location.reload()
}
let option1 =document.createElement('p');
option1.innerText = uppercased[r1];
let option2 =document.createElement('p');
option2.innerText = uppercased[r2];
let option3 =document.createElement('p');
option3.innerText = uppercased[r3];
let option4 =document.createElement('p');
option4.innerText = uppercased[r4];
var score =10;
function result1()
{ let q = document.createElement('p');
q.innerText =localStorage.getItem("score");
if(uppercased[ran1] == option1.innerText )
{ localStorage.setItem("score",score);
    div.append(q);
   
    score+=10;
    setInterval(function()
    { 
        location.reload();
    },1000);
    
}
}
function result2()
{ let q = document.createElement('p');
q.innerText =localStorage.getItem("score");
if(uppercased[ran1] == option2.innerText )
{  localStorage.setItem("score",score);
    div.append(q);
  
    score+=10;
    setInterval(function()
    { 
        location.reload();
    },1000);
}
}
function result3()
{ let q = document.createElement('p');
q.innerText =localStorage.getItem("score");
if(uppercased[ran1] == option3.innerText )
{ localStorage.setItem("score",score);
    div.append(q);
   
    score+=10;
    setInterval(function()
    {   
        location.reload();
    },1000);
}
}
function result4()
{ let q = document.createElement('p');
q.innerText =localStorage.getItem("score");
if(uppercased[ran1] == option4.innerText )
{ localStorage.setItem("score",score);
    div.append(q);
   
    score+=10;
    setInterval(function()
    { 
        location.reload();
    },1000);
}
}
option1.addEventListener('click', result1)
option2.addEventListener('click', result2)
option3.addEventListener('click', result3)
option4.addEventListener('click', result4)

div.append(ot1);
ot1.append(option1);
ot1.append(option2);
ot1.append(option3);
ot1.append(option4);

}
else {
    location.reload();
}
document.body.appendChild(div);