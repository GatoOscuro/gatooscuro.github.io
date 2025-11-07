async function loadIndex(){ const res=await fetch('./index.json'); return res.json(); }
function el(q, ctx=document){return ctx.querySelector(q)}
function renderPosts(posts, container){
  container.innerHTML='';
  if(!posts.length){container.innerHTML='<div class="card">No hay artículos.</div>';return;}
  posts.forEach(p=>{
    const d=document.createElement('article');
    d.className='card';
    d.innerHTML = `<h2 class="post-title"><a href="./posts/${p.slug}.html">${p.title}</a></h2><div class="meta">${p.date}</div><p class="post-excerpt">${p.excerpt||''}</p><div style="margin-top:10px">${(p.tags||[]).map(t=>'<span class="tag">'+t.name+'</span>').join('')}</div>`;
    container.appendChild(d);
  })
}
(async function(){
  const data = await loadIndex();
  const postsList = el('#posts-list');
  const categoriesList = el('#categories-list');
  const tagsList = el('#tags-list');
  Object.entries(data.categories||{}).forEach(([slug,name])=>{
    const a=document.createElement('a'); a.href='#'; a.textContent=name; a.dataset.slug=slug;
    a.addEventListener('click', (ev)=>{
      ev.preventDefault();
      const filtered = data.posts.filter(p=> (p.categories||[]).some(c=>c.slug===slug));
      renderPosts(filtered, postsList);
    });
    categoriesList.appendChild(a);
  });
  Object.entries(data.tags||{}).forEach(([slug,name])=>{
    const s = document.createElement('button'); s.className='tag'; s.textContent = name;
    s.addEventListener('click', ()=>{
      const filtered = data.posts.filter(p=> (p.tags||[]).some(t=>t.slug===slug));
      renderPosts(filtered, postsList);
    });
    tagsList.appendChild(s);
  });
  renderPosts(data.posts, postsList);
  el('#search-input').addEventListener('input', function(){
    const q=this.value.trim().toLowerCase();
    if(!q) return renderPosts(data.posts, postsList);
    const filtered = data.posts.filter(p=> (p.title+p.excerpt+(p.content||'')+(p.tags||[]).map(t=>t.name).join('')+(p.categories||[]).map(c=>c.name).join('')).toLowerCase().includes(q));
    renderPosts(filtered, postsList);
  });
  if('serviceWorker' in navigator){ navigator.serviceWorker.register('./sw.js').catch(()=>{}); }
})();
