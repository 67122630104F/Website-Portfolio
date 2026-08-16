const menu=document.getElementById('menu'),nav=document.getElementById('nav'),topBtn=document.getElementById('top');
menu.onclick=()=>nav.classList.toggle('active');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('active'));
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.getElementById('year').textContent=new Date().getFullYear();
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('active');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
