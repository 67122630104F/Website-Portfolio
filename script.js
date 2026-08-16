const menu=document.getElementById('menu'),nav=document.getElementById('nav'),topBtn=document.getElementById('top');
menu.onclick=()=>nav.classList.toggle('active');
document.querySelectorAll('nav a').forEach(a=>a.onclick=()=>nav.classList.remove('active'));
window.addEventListener('scroll',()=>topBtn.classList.toggle('show',scrollY>500));
topBtn.onclick=()=>scrollTo({top:0,behavior:'smooth'});
document.getElementById('year').textContent=new Date().getFullYear();

const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add('active');io.unobserve(e.target)}
}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(e=>io.observe(e));

const modal=document.getElementById('modal'), modalImg=document.getElementById('modalImg'), modalTitle=document.getElementById('modalTitle');
document.querySelectorAll('.cert-image').forEach(btn=>btn.addEventListener('click',()=>{
  modalImg.src=btn.dataset.img; modalImg.alt=btn.dataset.title; modalTitle.textContent=btn.dataset.title;
  modal.classList.add('open'); modal.setAttribute('aria-hidden','false');
}));
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');modalImg.src=''}
document.getElementById('closeModal').onclick=closeModal;
modal.addEventListener('click',e=>{if(e.target===modal)closeModal()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});
