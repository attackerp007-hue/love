const canvas=document.getElementById('stars'),ctx=canvas.getContext('2d');let stars=[];
function resize(){canvas.width=innerWidth;canvas.height=innerHeight;stars=Array.from({length:Math.min(110,Math.floor(innerWidth/9))},()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*1.5+.3,a:Math.random()}))}
function draw(){ctx.clearRect(0,0,canvas.width,canvas.height);for(const s of stars){s.a+=(Math.random()-.5)*.035;s.a=Math.max(.15,Math.min(1,s.a));ctx.fillStyle=`rgba(255,220,239,${s.a})`;ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fill()}requestAnimationFrame(draw)}
addEventListener('resize',resize);resize();draw();
const letter=document.getElementById('letter'),openBtn=document.getElementById('openLetter'),reply=document.getElementById('reply');
openBtn.onclick=()=>{letter.classList.toggle('show');openBtn.textContent=letter.classList.contains('show')?'Chithita abar lukiye rakho':'Amar moner chithita poro 💌';if(letter.classList.contains('show'))letter.scrollIntoView({behavior:'smooth',block:'nearest'})};
function floatHeart(){const el=document.createElement('span');el.className='spark';el.textContent=['♥','♡','✦','💗','💖'][Math.floor(Math.random()*5)];el.style.left=Math.random()*100+'vw';el.style.fontSize=(15+Math.random()*25)+'px';el.style.animationDuration=(4+Math.random()*4)+'s';document.body.appendChild(el);setTimeout(()=>el.remove(),8500)}
function shower(n=20){for(let i=0;i<n;i++)setTimeout(floatHeart,i*65)}
document.getElementById('hug').onclick=()=>{reply.textContent='Onek onek valobasha ar ekta tight virtual hug tomar jonno! 🤗💗';shower(25)};
document.getElementById('bigHug').onclick=()=>{reply.textContent='Hug ta pouchhe geche! Ebar ektu hasho, please. 🫂❤️';shower(35)};
setInterval(()=>{if(Math.random()>.35)floatHeart()},1300);
const thoughts=[
"Tomar sathe kotha na hole din ta kemon jeno osthir lage.",
"Tumi busy thakleo ami chai tumi valo thako. Shudhu majhe majhe amake ektu mone rekho.",
"Tomar ekta 'ki koro?' message amar mukhe hashi ene dite pare.",
"Ami perfect na, kintu tomar jonno nijeke aro valo korte chai.",
"Tomar sathe rag kore thaka amar pokkhe beshikkhon shombhob na. Mon abar tomar kachei fire jay. amr aktai toh tumi",
"Tomake shudhu amar valo shomoyer manush na, amar shob shomoyer shongi hisebe chai.",
"Amar obhimaner mane dure jawa na; mane tomar kach theke ektu ador pete iccha kora."
];let idx=-1;
document.getElementById('nextReason').onclick=()=>{idx=(idx+1)%thoughts.length;document.getElementById('reasonText').textContent=thoughts[idx];shower(7)};
document.getElementById('copy').onclick=async()=>{const text=letter.innerText;try{await navigator.clipboard.writeText(text);reply.textContent='Chithita copy hoye geche. Ebar mon chaile oke pathiye dio. 💌'}catch(e){reply.textContent='Copy korte na parle chithir lekha select kore copy kore nio.'}};
