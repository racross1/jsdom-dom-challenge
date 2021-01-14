let interval = timer()
const pause = document.getElementById('pause')
let timerGoing = true

const counter = document.getElementById('counter')
const minus = document.getElementById('minus')
const plus = document.getElementById('plus')

const likeBtn = document.getElementById('heart')
const hearts = {}
const likes = document.querySelector('ul')

const commentForm = document.getElementById('comment-form')
const commentBtn = document.getElementById('submit')
const allComments = []
const commentField = document.getElementById('list')
const commentList = commentField.appendChild(document.createElement('ul'))

const allBtns = document.getElementsByTagName('button')

//Timer
function timer() {
    return setInterval(timerField, 1000)
}

function timerField() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text + 1
}
 
function pauseResume() {
    if (timerGoing) {
        timerGoing = false
        clearInterval(interval)
        pause.innerText= 'resume' 
        disableOtherBtns()
    } else {
        timerGoing = true
        interval = timer()
        pause.innerText = 'pause'
        disableOtherBtns()
    }
}

function disableOtherBtns () {
    const btns_arr = Array.from(document.getElementsByTagName('button'))
    btns_arr.forEach(function(b) {
        if (b.id == 'pause') {
            skip
        }
        else if (!timerGoing) {
            b.disabled = true
        } else {
            b.disabled = false
        }
    })
}

//plus and minus counter
function minusCounter() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text - 1
}

function plusCounter() {
    let counter_text = parseInt(counter.innerText)
    return counter.innerText = counter_text + 1
}

//Add likes
function addLike() {
    let counter_text = parseInt(counter.innerText)
    if (hearts[counter_text]) {
        hearts[counter_text]++
    } else {
    hearts[counter_text] = 1
    }
    sortLike()
}

function sortLike() {
    let sortedKeys = Object.keys(hearts).sort()
    let sortedLikeObject = {}
    
    sortedKeys.forEach(function(i) {
        sortedLikeObject[i] = hearts[i]
    })
    renderLike(sortedLikeObject)
}

function renderLike(sortedLikeObject){
    likes.innerHTML = ''
    
    for (key in sortedLikeObject) {
        let li = document.createElement('li')
        li.textContent = `Likes for ${key}: ${sortedLikeObject[key]}`
        likes.appendChild(li)
    }
}

function submitComment(e) {
    e.preventDefault()
    let comment = e.target.comment.value
    allComments.push(comment)
    renderComments()
}

function renderComments() {
    commentList.innerHTML = ''
    allComments.forEach(function(c) {
        let li = document.createElement('li')
        li.textContent = c 
        commentList.appendChild(li)
    })
}
 
        
// Event Listeners
pause.addEventListener('click', pauseResume)
minus.addEventListener('click', minusCounter)
plus.addEventListener('click', plusCounter)
likeBtn.addEventListener('click', addLike)
commentForm.addEventListener('submit', submitComment)


