window.onload=function(){
    let btn=document.getElementById('cta-btn');
    let btoverlay=document.getElementById('overlay');

    btn.addEventListener('click',()=>{
        overlay.style.display = 'grid';
        overlay.classList.add('animate-overlay')
    })
}
