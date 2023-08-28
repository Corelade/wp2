document.addEventListener('DOMContentLoaded', ()=>{
    let menu = document.querySelector('.dropbtn');
    let content = document.querySelector('.dropdown-content');
    menu.onclick = ()=>{
        if(content.style.display === 'block'){
            content.style.display ='none';
        }
        else{
            content.style.display ='block';
        }
        
    }
})