var e=["POTR Pots are constructed using recycled polypropylene which can be fully recycled. ","POTR pots are flat pack, origami planters designed to self-water your plants, made from recycled materials.","Once assembled the cotton cord doubles as the watering system, allowing your plants to self-regulate their water intake using tried and tested wicking technology.","Shipped flat packed so they can be slipped through your letterbox, POTR Pots have the smallest carbon footprint possible during transit. ","We have chosen Bobbiny recycled cotton cord to use as our draw string and wicking cord. Not only is it 100% recycled, it looks great and works really well at wicking water. "],t=Array.from({length:5},function(e,t){return t+1}),s=document.getElementById("materials__dialogue"),a=document.getElementById("materials__dialogue-text");function n(){var n=this.id.charAt(this.id.length-1);this.classList.contains("materials__button-hide")?(this.classList.remove("materials__button-hide"),s.className="materials__dialogue"):(t.forEach(function(e){document.getElementById("materials__button-".concat(e)).classList.remove("materials__button-hide")}),s.className="materials__dialogue",this.classList.add("materials__button-hide"),a.textContent=e[+n-1],s.classList.add("materials__dialogue-active","materials__dialogue-".concat(n)))}t.forEach(function(e){document.getElementById("materials__button-".concat(e)).addEventListener("click",n)}),document.getElementById("contactForm").addEventListener("submit",function(e){e.preventDefault();var t,s=document.getElementById("name"),a=document.getElementById("email"),n=document.getElementById("message"),o=!0;""===s.value.trim()?(s.classList.add("questions__form-item-error"),o=!1,s.setAttribute("placeholder","Enter your name")):(s.classList.remove("questions__form-item-error"),s.classList.add("questions__form-item-success")),(t=a.value,/^\S+@\S+\.\S+$/.test(t))?(a.classList.remove("questions__form-item-error"),a.classList.add("questions__form-item-success")):(a.classList.add("questions__form-item-error"),o=!1,a.setAttribute("placeholder","Enter your name")),""===n.value.trim()?(n.classList.add("questions__form-item-error"),o=!1,n.setAttribute("placeholder","Enter your name")):(n.classList.remove("questions__form-item-error"),n.classList.add("questions__form-item-success")),o&&(document.getElementById("successMessage").style.display="block",setTimeout(function(){document.getElementById("successMessage").style.display="none"},3e3),s.value="",a.value="",n.value="")}),document.addEventListener("DOMContentLoaded",function(){var e=document.querySelector(".slider"),t=document.querySelectorAll(".slide"),s=document.querySelector(".dots-container"),a=0;function n(){e.style.transform="translateX(-".concat(100*a,"%)")}function o(){s.innerHTML="",t.forEach(function(e,t){var r=document.createElement("span");r.classList.add("dot"),t===a&&r.classList.add("active"),r.addEventListener("click",function(){a=t,n(),o()}),s.appendChild(r)})}o(),setInterval(function(){a=(a+1)%t.length,n(),o()},3e3)});
//# sourceMappingURL=index.b23c5466.js.map