import{r as c,e as M,q as N,c as l,a as t,g as m,h as O,F as S,s as B,t as a,i as y,j as b,b as F,v as P,l as R,o as n}from"./index-CtKSWgzn.js";import{u as T}from"./order-blR5qvCf.js";import{u as q}from"./payment-Bj_ln8DI.js";import{L as A}from"./LoaderView-w_dlYhoU.js";const E={class:"my-container space-y-4"},I={class:"flex items-center justify-between gap-2"},U={class:"overflow-x-auto bg-white shadow rounded-lg"},$={class:"table-auto w-full border-collapse border border-gray-200"},z={key:0},G={colspan:"11",class:"text-center py-6"},H={key:1},J={class:"px-4 py-3 border border-gray-200"},K={class:"px-4 py-3 border border-gray-200"},Q={class:"px-4 py-3 border border-gray-200"},W={class:"px-4 py-3 border border-gray-200"},X={class:"px-4 py-3 border border-gray-200"},Y={class:"min-w-max"},Z={class:"px-4 py-3 border border-gray-200"},tt={class:"px-4 py-3 border border-gray-200"},et={class:"px-4 py-3 border border-gray-200 text-center"},st=["onClick"],at={class:"px-4 py-3 border border-gray-200"},ot={class:"px-4 py-3 border border-gray-200"},rt={class:"min-w-max"},lt={class:"px-4 py-3 border border-gray-200 text-center"},nt={class:"flex justify-center gap-4"},dt={key:0,class:"mt-4 text-red-600 text-sm text-center"},ct={key:0,class:"modal-bg"},ut={class:"modal-card"},it={class:"mt-4"},pt=["max"],gt={__name:"OrderList",setup(mt){const u=T(),x=q(),i=c(null),_=c(!0),p=c(!1),o=c(null),d=c(0);M(async()=>{try{await u.fetchOrders()}catch(r){i.value=r.message}finally{_.value=!1}});const v=N(()=>[...u.orders].sort((r,e)=>new Date(e.order_date)-new Date(r.order_date))),V=r=>{o.value=r,d.value=r.due_amount,p.value=!0},g=()=>{o.value=null,d.value=0,p.value=!1},j=async()=>{try{if(!o.value||d.value<=0){alert("Invalid payment amount");return}await x.collectDue({order_id:o.value.id,amount:d.value,payment_method:"Cash",remarks:"Collected via modal"}),alert("Payment collected successfully"),g(),await u.fetchOrders()}catch{alert(x.error||"Failed to collect due payment")}};return(r,e)=>{var h,w,k,C,D;const f=R("RouterLink");return n(),l(S,null,[t("div",E,[t("div",I,[e[2]||(e[2]=t("h1",{class:"title-md md:title-lg flex-wrap text-center"},"অর্ডার তালিকা",-1)),m(f,{to:{name:"OrderCreate"},class:"btn-2"},{default:O(()=>e[1]||(e[1]=[t("span",{class:"hidden md:flex"},"অর্ডার তৈরী",-1),t("i",{class:"far fa-plus"},null,-1)])),_:1})]),t("div",U,[t("table",$,[e[5]||(e[5]=t("thead",null,[t("tr",{class:"bg-gray-200 text-left text-gray-700 text-sm tracking-wider"},[t("th",{class:"px-4 py-3 border border-gray-200"},"#"),t("th",{class:"px-4 py-3 border border-gray-200"},"কাস্টমার"),t("th",{class:"px-4 py-3 border text-center"},"ধরন"),t("th",{class:"px-4 py-3 border text-center"},"মোট"),t("th",{class:"px-4 py-3 border text-center"},"ছাড়"),t("th",{class:"px-4 py-3 border text-center"},"বাট্টা"),t("th",{class:"px-4 py-3 border text-center"},"পরিশোধ"),t("th",{class:"px-4 py-3 border text-center"},"বাকী"),t("th",{class:"px-4 py-3 border text-center"},"অবস্থা"),t("th",{class:"px-4 py-3 border text-center"},"তারিখ"),t("th",{class:"px-4 py-3 border text-center"},"একশন")])],-1)),t("tbody",null,[_.value?(n(),l("tr",z,[t("td",G,[m(A,{class:"shadow-none"})])])):v.value.length===0?(n(),l("tr",H,e[3]||(e[3]=[t("td",{colspan:"11",class:"text-center py-6 text-gray-500"},"No orders found",-1)]))):(n(!0),l(S,{key:2},B(v.value,s=>{var L;return n(),l("tr",{key:s.id,class:"hover:bg-gray-50 transition ease-in-out"},[t("td",J,a(s.id),1),t("td",K,a((L=s==null?void 0:s.user)==null?void 0:L.name),1),t("td",Q,a(s.type),1),t("td",W,a(s.total_price),1),t("td",X,[t("p",Y," ("+a(s.discount_percentage)+"%) "+a(s.discount_amount),1)]),t("td",Z,a(s.adjust_amount),1),t("td",tt,a(s.paid_amount),1),t("td",et,[t("p",null,a(s.due_amount),1),s.due_amount>0?(n(),l("button",{key:0,class:"btn-link text-red-600 text-sm",onClick:yt=>V(s)}," বাকী আদায় ",8,st)):y("",!0)]),t("td",at,a(s.status),1),t("td",ot,[t("p",rt,a(new Date(s.created_at).toLocaleString("bn-BD")),1)]),t("td",lt,[t("div",nt,[m(f,{to:{name:"OrderDetails",params:{id:s.id}},class:"btn-icon"},{default:O(()=>e[4]||(e[4]=[t("i",{class:"fas fa-eye"},null,-1)])),_:2},1032,["to"])])])])}),128))])])]),i.value?(n(),l("div",dt,a(i.value),1)):y("",!0)]),p.value?(n(),l("div",ct,[t("div",ut,[e[10]||(e[10]=t("h2",{class:"text-lg font-bold mb-4"},"Collect Payment",-1)),t("p",null,[e[6]||(e[6]=t("strong",null,"অর্ডার নং:",-1)),b(" "+a((h=o.value)==null?void 0:h.id),1)]),t("p",null,[e[7]||(e[7]=t("strong",null,"ক্রেতা:",-1)),b(" "+a((k=(w=o.value)==null?void 0:w.user)==null?void 0:k.name),1)]),t("p",null,[e[8]||(e[8]=t("strong",null,"বাকী:",-1)),b(" ৳"+a((C=o.value)==null?void 0:C.due_amount),1)]),t("div",it,[e[9]||(e[9]=t("label",{for:"payment-amount",class:"block text-sm font-medium"},"পরিশোধ যোগ্য",-1)),F(t("input",{id:"payment-amount",type:"number",class:"w-full p-2 border rounded mt-1","onUpdate:modelValue":e[0]||(e[0]=s=>d.value=s),min:1,max:(D=o.value)==null?void 0:D.due_amount},null,8,pt),[[P,d.value]])]),t("div",{class:"flex justify-center mt-6 space-x-2"},[t("button",{class:"btn-3",onClick:g},"Cancel"),t("button",{class:"btn-2",onClick:j},"Submit")])])])):y("",!0)],64)}}};export{gt as default};