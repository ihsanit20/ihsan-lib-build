import{r as a,o as u,c as i,a as e,b as x,v as $,C as I,i as S,t as y,p as A,e as J,D as W,g as X,x as F,F as T,q as N,j as Y,d as Z}from"./index-BHCHxuDd.js";import{u as ee}from"./order-CctpXNvX.js";import{u as te}from"./product-zdHCkEep.js";import{u as se}from"./user-DffDG8fR.js";const le={class:"grid gap-2 p-4 bg-gray-100 rounded-md border"},ae={class:"grid md:grid-cols-7 gap-2"},ne={class:"relative"},oe={key:0,class:"fas fa-search"},ue={key:1,class:"fad fa-spinner animate-spin"},ie={class:"md:col-span-2"},re={class:"relative"},de={key:0,class:"fas fa-search"},ce={key:1,class:"fad fa-spinner animate-spin"},ve={class:"md:col-span-4"},me={key:0,class:"text-green-500 text-center text-sm"},pe={key:1,class:"text-red-500 text-center text-sm"},ye={key:2,class:"flex flex-col justify-center items-center gap-2"},fe={key:1,class:"fad fa-spinner animate-spin text-white"},xe={__name:"UserSearch",emits:["user-selected","user-created"],setup(L,{expose:q,emit:M}){const b=se(),v=a(!1),n=a(""),r=a(""),d=a(""),g=a(""),m=a(""),p=a(""),h=a("search"),k=a(null),w=M,D=()=>{d.value="",g.value="",m.value="",p.value="",h.value="create",n.value="",r.value=""},f=async()=>{v.value=!0,n.value="",r.value="";try{const l=await b.searchUser({id:d.value});(l==null?void 0:l.status)==="found"?(P(b.user),n.value="ক্রেতা পাওয়া গেছে!😍",w("user-selected",b.user)):(r.value="ক্রেতা পাওয়া যায়নি!😢 ক্রেতা তৈরী করুন",d.value="",m.value="",p.value="",h.value="create")}catch(l){r.value="ত্রুটি পাওয়া গেছে!😭",console.error("ত্রুটি পাওয়া গেছে!😭",l)}finally{v.value=!1}},U=async()=>{v.value=!0,n.value="",r.value="";try{const l=await b.searchUser({phone:g.value});(l==null?void 0:l.status)==="found"?(P(b.user),n.value="ক্রেতা পাওয়া গেছে!😍",w("user-selected",b.user)):(r.value="ক্রেতা পাওয়া যায়নি!😢 ক্রেতা তৈরী করুন",d.value="",m.value="",p.value="",h.value="create")}catch(l){r.value="ত্রুটি পাওয়া গেছে!😭",console.error("ত্রুটি পাওয়া গেছে!😭",l),h.value="create"}finally{v.value=!1}},V=async()=>{v.value=!0,n.value="",r.value="",k.value=null;try{const l={phone:g.value,name:m.value,address:p.value},c=await b.addUser(l);P(c),k.value=c,n.value="সফলভাবে ক্রেতা তৈরি হয়েছে!🤩",w("user-created",c),h.value="edit"}catch(l){r.value=(l==null?void 0:l.message)||"ক্রেতা তৈরি করা যায়নি!😢",console.error("Error:",l)}finally{v.value=!1}},P=l=>{d.value=l.id||"",g.value=l.phone||"",m.value=l.name||"",p.value=l.address||"",h.value="edit"};return q({resetForm:D}),(l,c)=>(u(),i("div",le,[e("div",ae,[e("div",null,[e("div",ne,[x(e("input",{"onUpdate:modelValue":c[0]||(c[0]=C=>d.value=C),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ID",onKeyup:I(f,["enter"])},null,544),[[$,d.value]]),d.value?(u(),i("button",{key:0,onClick:f,class:"absolute right-3 top-2"},[v.value?(u(),i("i",ue)):(u(),i("i",oe))])):S("",!0)])]),e("div",ie,[e("div",re,[x(e("input",{"onUpdate:modelValue":c[1]||(c[1]=C=>g.value=C),type:"text",class:"input-1 w-full text-black px-3 py-1",placeholder:"ফোন",onKeyup:I(U,["enter"])},null,544),[[$,g.value]]),g.value?(u(),i("button",{key:0,onClick:U,class:"absolute right-3 top-2"},[v.value?(u(),i("i",ce)):(u(),i("i",de))])):S("",!0)])]),e("div",ve,[x(e("input",{"onUpdate:modelValue":c[2]||(c[2]=C=>m.value=C),type:"text",placeholder:"নাম",class:"input-1 w-full text-black px-3 py-1"},null,512),[[$,m.value]])])]),e("div",null,[x(e("input",{"onUpdate:modelValue":c[3]||(c[3]=C=>p.value=C),type:"text",placeholder:"ঠিকানা",class:"input-1 w-full text-black px-3 py-1"},null,512),[[$,p.value]])]),n.value?(u(),i("div",me,y(n.value),1)):S("",!0),r.value?(u(),i("div",pe,y(r.value),1)):S("",!0),h.value==="create"?(u(),i("div",ye,[v.value?(u(),i("i",fe)):(u(),i("button",{key:0,class:"btn-2",onClick:V},"Create User"))])):S("",!0)]))}},be={class:"my-container space-y-4"},ge={key:0,class:"text-red-600 text-center"},_e={class:"bg-white shadow p-4 rounded-lg space-y-4"},he=["value"],ke={key:0,class:"grid gap-2"},we={class:"flex items-center gap-4"},Ue=["src"],Ce={class:"text-lg font-semibold text-gray-800 mb-2"},Pe={class:"text-sm text-gray-600"},$e={class:"flex justify-between items-center"},De={class:"flex flex-col items-center"},Se={class:"flex items-center gap-2"},Ve=["onClick","disabled"],je=["value","onInput"],Ae=["onClick"],qe={class:"flex flex-col items-end"},Me={class:"text-lg font-bold text-gray-800"},Oe=["onClick"],Be={key:1,class:"text-center text-red-500 text-sm bg-gray-50 p-4 rounded-lg border"},Fe={class:"grid md:grid-cols-2 gap-4"},Te={class:""},Ne={class:"divide-y"},Ie={class:"mt-4"},Le=["value"],Ee={class:"flex justify-between items-center"},Ke={class:"text-lg font-semibold text-gray-800"},Re={class:"flex justify-between items-center"},Qe={class:"flex justify-between items-center"},ze={class:"text-lg font-semibold text-blue-600"},Ge={class:"flex justify-between items-center"},He={class:"flex justify-between items-center"},Je={class:"text-lg font-semibold text-red-600"},We={class:"flex justify-between items-center"},Xe={class:"flex justify-between items-center"},Ye={class:"flex flex-col items-center"},Ze=["disabled"],et="offline",nt={__name:"OrderCreate",setup(L){const q=Z(),M=ee(),b=te(),v=a([]),n=a([]),r=a(""),d=a(0),g=a(0),m=a(!1),p=a(null),h=[0,5,10,12,15,20],k=a(0),w=a("Cash"),D=a(""),f=a(0),U=a(0),V=a(null),P=A(()=>d.value*k.value/100),l=A(()=>d.value-P.value-U.value),c=A(()=>{const o=g.value+f.value,t=l.value-o;return t>0?t:0}),C=async()=>{try{m.value=!0,await b.fetchProducts(),v.value=b.products}catch(o){p.value=o.message}finally{m.value=!1}};J(()=>{C(),f.value=l.value}),W([k,U],()=>{f.value=l.value});const O=()=>{d.value=n.value.reduce((o,t)=>o+t.quantity*t.selling_price,0)},E=o=>{n.value.find(t=>t.id===o.id)||(n.value.push({...o,quantity:1}),O())},B=(o,t)=>{const s=n.value.find(_=>_.id===o);s&&(s.quantity=t,O())},K=o=>{n.value=n.value.filter(t=>t.id!==o),O()},R=async()=>{var o,t;try{m.value=!0;const s=await M.createOrder({user_id:r.value,type:et,products:n.value.map(_=>({product_id:_.id,quantity:_.quantity,price:_.selling_price})),discount_percentage:k.value,discount_amount:P.value,adjust_amount:U.value,payable_amount:l.value,payment:{amount:f.value,method:w.value,remarks:D.value}});q.push({name:"OrderDetails",params:{id:s.id}}),Q()}catch(s){p.value=((t=(o=s.response)==null?void 0:o.data)==null?void 0:t.message)||"Failed to create order"}finally{m.value=!1}},Q=()=>{r.value=null,n.value=[],d.value=0,g.value=0,k.value=0,U.value=0,f.value=0,w.value="",D.value="",V.value&&V.value.reset()},z=o=>{r.value=o.id,console.log("Selected User:",o)},j=a(""),G=A(()=>v.value.filter(o=>!n.value.some(t=>t.id===o.id))),H=()=>{j.value&&(E(j.value),j.value=null)};return(o,t)=>(u(),i("div",be,[t[29]||(t[29]=e("h1",{class:"text-2xl font-bold mb-4"},"অর্ডার তৈরী করুন",-1)),p.value?(u(),i("div",ge,y(p.value),1)):S("",!0),e("div",_e,[e("div",null,[t[7]||(t[7]=e("p",{class:"font-bold"},"ক্রেতার তথ্য",-1)),X(xe,{ref_key:"userSearch",ref:V,onUserSelected:z},null,512)]),e("div",null,[t[9]||(t[9]=e("label",{class:"block text-sm font-medium mb-2"},"পণ্য নির্বাচন করুন",-1)),x(e("select",{"onUpdate:modelValue":t[0]||(t[0]=s=>j.value=s),class:"w-full p-2 border rounded",onChange:H},[t[8]||(t[8]=e("option",{value:"",disabled:""},"পণ্য নির্বাচন করুন",-1)),(u(!0),i(T,null,N(G.value,s=>(u(),i("option",{key:s.id,value:s},y(s.name)+" - ৳"+y(s.selling_price),9,he))),128))],544),[[F,j.value]])]),t[28]||(t[28]=e("h3",{class:"text-lg font-medium text-center"},"নির্বাচিত পণ্য",-1)),n.value.length>0?(u(),i("div",ke,[(u(!0),i(T,null,N(n.value,s=>(u(),i("div",{key:s.id,class:"border rounded-lg p-4 bg-gray-50 grid md:grid-cols-2 gap-4"},[e("div",we,[e("img",{src:s.photo,alt:"",class:"w-10"},null,8,Ue),e("div",null,[e("h4",Ce,y(s.name),1),e("p",Pe,[t[10]||(t[10]=e("span",{class:"font-medium"},"বিক্রয় মূল্য:",-1)),Y(" ৳"+y(Number(s.selling_price).toLocaleString("bn-BD")),1)])])]),e("div",$e,[e("div",De,[t[13]||(t[13]=e("p",{class:"text-sm font-medium text-gray-600"},"Quantity:",-1)),e("div",Se,[e("button",{class:"btn-icon",onClick:_=>B(s.id,Math.max(s.quantity-1,1)),disabled:s.quantity<=1},t[11]||(t[11]=[e("i",{class:"fas fa-minus"},null,-1)]),8,Ve),e("input",{type:"number",class:"w-14 text-center py-1 rounded border",value:s.quantity,onInput:_=>B(s.id,Math.max(_.target.value,1))},null,40,je),e("button",{class:"btn-icon",onClick:_=>B(s.id,s.quantity+1)},t[12]||(t[12]=[e("i",{class:"fas fa-plus"},null,-1)]),8,Ae)])]),e("div",qe,[t[14]||(t[14]=e("p",{class:"text-sm font-medium text-gray-600"},"Total:",-1)),e("p",Me," ৳"+y(s.quantity*s.selling_price),1)]),e("button",{class:"btn-icon",onClick:_=>K(s.id)},t[15]||(t[15]=[e("i",{class:"fas fa-trash text-red-500"},null,-1)]),8,Oe)])]))),128))])):(u(),i("div",Be,t[16]||(t[16]=[e("p",null,"কোন পণ্য সিলেক্ট করা নেই",-1)]))),e("div",Fe,[e("div",Te,[t[17]||(t[17]=e("p",{class:"text-sm font-medium text-gray-600 mb-1"},"Remarks",-1)),x(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>D.value=s),placeholder:"Enter remarks",class:"w-full p-2 bg-gray-50 rounded-md border"},null,512),[[$,D.value]])]),e("div",Ne,[e("div",Ie,[t[18]||(t[18]=e("label",{class:"block text-sm font-medium"},"Discount Percentage",-1)),x(e("select",{"onUpdate:modelValue":t[2]||(t[2]=s=>k.value=s),class:"w-full p-2 border rounded"},[(u(),i(T,null,N(h,s=>e("option",{key:s,value:s},y(s)+"% ",9,Le)),64))],512),[[F,k.value]])]),t[27]||(t[27]=e("h3",{class:"text-xl font-semibold mb-4 text-gray-800"},"Payment Details",-1)),e("div",Ee,[t[19]||(t[19]=e("p",{class:"text-sm font-medium text-gray-600 mb-1"},"Total Price",-1)),e("p",Ke,"৳ "+y(d.value),1)]),e("div",Re,[t[20]||(t[20]=e("label",{class:"text-sm font-medium text-gray-600 mb-1"},"Discount",-1)),x(e("input",{type:"number","onUpdate:modelValue":t[3]||(t[3]=s=>P.value=s),class:"text-end bg-gray-50 p-1 w-[100px] border",placeholder:"Discount"},null,512),[[$,P.value]])]),e("div",Qe,[t[21]||(t[21]=e("p",{class:"text-sm font-medium text-gray-600 mb-1"},"Payable Amount",-1)),e("p",ze,"৳ "+y(l.value),1)]),e("div",Ge,[t[22]||(t[22]=e("label",{class:"text-sm font-medium text-gray-600 mb-1"},"Payment Amount",-1)),x(e("input",{type:"number","onUpdate:modelValue":t[4]||(t[4]=s=>f.value=s),class:"text-end bg-gray-50 p-1 w-[100px] border",placeholder:"Amount"},null,512),[[$,f.value]])]),e("div",He,[t[23]||(t[23]=e("p",{class:"text-sm font-medium text-gray-600 mb-1"},"Due Amount",-1)),e("p",Je,"৳ "+y(c.value),1)]),e("div",We,[t[25]||(t[25]=e("label",{class:"text-sm font-medium text-gray-600 mb-1"},"Payment Method",-1)),x(e("select",{"onUpdate:modelValue":t[5]||(t[5]=s=>w.value=s),class:"bg-gray-100 p-1"},t[24]||(t[24]=[e("option",{value:"Cash"},"Cash",-1),e("option",{value:"Card"},"Card",-1),e("option",{value:"Mobile Banking"},"Mobile Banking",-1),e("option",{value:"Other"},"Other",-1)]),512),[[F,w.value]])]),e("div",Xe,[t[26]||(t[26]=e("p",{class:"text-sm font-medium text-gray-600 mb-1"},"Adjustment",-1)),x(e("input",{type:"number","onUpdate:modelValue":t[6]||(t[6]=s=>U.value=s),class:"text-end bg-gray-50 p-1 w-[100px] border",placeholder:"Adjustment"},null,512),[[$,U.value]])])])]),e("div",Ye,[e("button",{onClick:R,class:"btn-2",disabled:!r.value||n.value.length===0||f.value<0||!w.value}," Create Order & Add Payment ",8,Ze)])])]))}};export{nt as default};