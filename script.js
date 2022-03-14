let mainDiv = document.getElementById('main');

function showMenu (event){
    event.preventDefault();
    // if (mainDiv.style.display === 'none') {
        mainDiv.style.left=event.pageX+'px';
        mainDiv.style.top=event.pageY+'px';
        mainDiv.style.display='block';
        console.log(event)
//     } else {
//         mainDiv.style.left=event.pageX+'px';
//         mainDiv.style.top=event.pageY+'px';
//     }
}

function clickHideMenu (){
    mainDiv.style.display='none';
}

function escHideMenu (event){
    if (event.code === 'Escape') {
        mainDiv.style.display='none';
    }
}

document.body.addEventListener('contextmenu',showMenu)
document.body.addEventListener('click',clickHideMenu)
document.body.addEventListener('keydown',escHideMenu)