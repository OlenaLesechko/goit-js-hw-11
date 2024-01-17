import{S as u,i as d}from"./assets/vendor-46aac873.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const l=document.querySelector(".loader"),m=document.querySelector(".form-search"),f=document.querySelector(".form-input");document.querySelector(".loading-container");function p(){l.style.display="block"}function h(){l.remove}let c={key:"41575459-699006cd61f4fecce9ea2d52d",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};function y(a){c.q=a;const n=new URLSearchParams(c);p(),fetch(`https://pixabay.com/api/?${n}`).then(r=>{if(h(),!r.ok)throw new Error("Sorry, there are no images matching your search query. Please try again!");return r.json()}).then(({hits:r})=>{const i=document.querySelector(".gallery"),e=new u(".gallery a",{captionType:"attr",captionsData:"alt",captionDelay:250,captionPosition:"bottom",close:!0,enableKeyboard:!0,docClose:!0}),t=r.reduce((s,o)=>s+`<li class="gallery-item">
              <a class="image-link" href="${o.largeImageURL}">
              <img class="images" data-source="${o.largeImageURL}" alt="${o.tags}" src="${o.webformatURL}" width="360" height="200">
              </a>
              <div class="information">
              <p>Likes: ${o.likes}</p>
              <p>Views: ${o.views}</p>
              <p>Comments: ${o.comments}</p>
              <p>Downloads: ${o.downloads}</p>
        </div>
      </li>`,"");i.innerHTML=t,e.refresh()}).catch(r=>{d.error({title:"Error",message:r.message,position:"topRight"})}).finally(()=>l.remove)}m.addEventListener("submit",a=>{a.preventDefault(),y(f.value)});
//# sourceMappingURL=commonHelpers.js.map
