import{g as m,s as p,u as y,p as S}from"./showToast-6Kw9S7HN.js";m();const q=(l,r,u)=>{let c=m();const n=document.querySelector(`#card${r}`);console.log(n);let t=n.querySelector(".productQuantity").innerText,o=n.querySelector(".productPrice").innerText;o=o.replace("₹","");let d=c.find(a=>a.id===r);if(d&&t>1){t=Number(d.quantity)+Number(t),o=Number(o*t);let a={id:r,quantity:t,price:o};a=c.map(i=>i.id===r?a:i),console.log(a),localStorage.setItem("cartProductsLS",JSON.stringify(a)),p("add",r)}if(d)return!1;t=Number(t),o=o*t,c.push({id:r,quantity:t,price:o}),localStorage.setItem("cartProductsLS",JSON.stringify(c)),y(c),p("add",r)},g=(l,r,u)=>{const n=document.querySelector(`#card${r}`).querySelector(".productQuantity");let t=parseInt(n.getAttribute("data-quantity"))||1;return l.target.className==="cartIncrement"&&(t<u?t+=1:t===u&&(t=u)),l.target.className==="cartDecrement"&&t>1&&(t-=1),n.innerText=t,n.setAttribute("data-quantity",t),t},C=document.querySelector("#productContainer"),f=document.querySelector("#productTemplete"),x=l=>{if(!l)return!1;l.forEach(r=>{const{id:u,name:c,category:n,description:t,image:o,price:d,stock:a,brand:i}=r,e=document.importNode(f.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${u}`),e.querySelector(".productName").textContent=c,e.querySelector(".category").textContent=n,e.querySelector(".productStock").textContent=a,e.querySelector(".productImage").src=o,e.querySelector(".productImage").alt=c,e.querySelector(".productDescription").textContent=t,e.querySelector(".productPrice").textContent=`₹${d}`,e.querySelector(".productActualPrice").textContent=`₹${d*4}`,e.querySelector(".stockElement").addEventListener("click",s=>{g(s,u,a)}),e.querySelector(".add-to-cart-button").addEventListener("click",s=>{q(s,u)}),C.append(e)})};x(S);