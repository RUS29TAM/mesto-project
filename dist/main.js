(()=>{"use strict";var e=document.querySelector(".popup_edit-profile"),t=document.querySelector(".form_edit-profile"),o=document.querySelector(".form__input_type_firstname"),n=document.querySelector(".form__input_type_profession"),r=document.querySelector(".profile__title-firstname"),u=document.querySelector(".profile__subtitle-profession"),i=document.querySelector(".button_type_edit"),c=document.querySelector(".popup_add-elements"),l=document.querySelector(".form__input_type_town"),a=document.querySelector(".form__input_type_townlink"),f=(document.querySelector(".elements__foto"),document.querySelector(".elements__title"),document.querySelector(".button_type_add")),s=document.querySelector(".form_add-elements"),p=document.querySelector(".popup_overview"),d=document.querySelector(".overview__image"),m=document.querySelector(".overview__caption"),_=document.querySelector("template"),y=document.querySelector(".elements");function x(e){e.classList.add("popup_opened")}function b(e){e.classList.remove("popup_opened")}function q(e){e.target.classList.toggle("button_type_like_on")}function v(e){e.target.closest(".elements__element").remove()}function S(e,t){var o=_.content.cloneNode(!0),n=o.querySelector(".elements__foto");return n.setAttribute("alt",e),n.setAttribute("src",t),n.addEventListener("click",w),o.querySelector(".elements__title").textContent=e,o.querySelector(".button_type_like").addEventListener("click",q),o.querySelector(".button_type_delete-element").addEventListener("click",v),o}function w(e){var t=e.target;d.setAttribute("src",t.src),d.setAttribute("alt",t.alt),m.textContent=t.alt,x(p)}document.querySelectorAll(".button_type_close").forEach((function(e){var t=e.closest(".popup");e.addEventListener("click",(function(){return b(t)}))})),i.addEventListener("click",(function(){o.value=r.textContent,n.value=u.textContent,x(e)})),t.addEventListener("submit",(function(t){t.preventDefault(),r.textContent=o.value,u.textContent=n.value,b(e)})),f.addEventListener("click",(function(){return x(c)})),s.addEventListener("submit",(function(e){e.preventDefault(),y.prepend(S(l.value,a.value)),s.reset(),b(c)})),[{name:"Собакен",link:"https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Человекен",link:"https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{name:"Джо",link:"https://c.tenor.com/psoPTJCAoJYAAAAC/joey-tribbiani-brain.gif"},{name:"Байкер",link:"https://images.unsplash.com/photo-1658064273986-844330ff8870?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80"},{name:"Яндекс беспилотники",link:"https://images.unsplash.com/photo-1625924305476-d8f96c560c21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"},{name:"LFCSFS:FVCS:NCSN:VCENsv;rb",link:"https://images.unsplash.com/photo-1553531384-411a247ccd73?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"}].forEach((function(e){return y.append(S(e.name,e.link))}))})();