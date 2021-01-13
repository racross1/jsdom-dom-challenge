let interval = timer()
let pause = document.getElementById('pause')
let timer_going = true
let counter = document.getElementById('counter')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')


//functions 
function timer() {
    return setInterval(timer_field, 1000)
}

function timer_field() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text + 1
}

//Event Handlers 
function click_function() {
    if (timer_going) {
        timer_going = false
        clearInterval(interval)
        pause.innerText= 'resume' 
    } else {
        timer_going = true
        interval = timer()
        pause.innerText = 'pause'
    }
}

function minus_function() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text - 1
}

function plus_function() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text + 1
}
        
// Event Listeners
pause.addEventListener('click', click_function)
minus.addEventListener('click', minus_function)
plus.addEventListener('click', plus_function)



// time = setInterval(timer, 1000)
// let counter = getElementById('counter')
// let counter_btn = getElementById('pause')

// function timer() {
// }


// function handleClick(e) {


// }

// counter_btn.addEventListener('click', handleClick) 

// timer=function(){
//     return setInterval(function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1
// },1e3)
// }

// interval=timer()
// minus=document.getElementById("minus")
// plus=document.getElementById("plus")
// heart=document.getElementById("heart")
// pause=document.getElementById("pause")
// commentForm=document.getElementsByTagName("form")[0]

// minus.addEventListener("click",function(){
//     var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b-1
// })
// plus.addEventListener("click",function(){
//     var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1
// })
// heart.addEventListener("click",function(){
//     var a=document.getElementById("counter")
//     b=parseInt(a.innerText)
//     c=document.querySelector(".likes")
//     d=void 0
//     if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)){
//         d=document.querySelector('[data-num="'+b+'"]');var e=parseInt(d.children[0].innerText);d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
//     }else
//     (d=document.createElement("li")).setAttribute("data-num",b),d.innerHTML=b+" has been liked <span>1</span> time",c.appendChild(d)
// })

// pause.addEventListener("click",function(){
//     playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}) 
    
    
//     commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});


        // [].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}) 
