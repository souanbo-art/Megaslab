(()=>{
if(window.__MEGASLAB_MOTION_INITED__)return;
window.__MEGASLAB_MOTION_INITED__=true;
const els=[...document.querySelectorAll('.reveal')];
if(!('IntersectionObserver'in window)){els.forEach(e=>e.classList.add('is-in'));return;}
const io=new IntersectionObserver((entries)=>{
entries.forEach(e=>{
if(e.isIntersecting){
e.target.classList.add('is-in');
io.unobserve(e.target);
}
});
},{threshold:0.15});
els.forEach(el=>io.observe(el));
})();