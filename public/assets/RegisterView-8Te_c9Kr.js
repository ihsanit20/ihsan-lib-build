import{r as d,u as _,e as g,c as l,a as t,w as b,b as p,v,m as o,t as c,i as m,k,o as n,d as V}from"./index-CtKSWgzn.js";const E={class:"max-w-md mx-auto my-10 px-2"},S={class:"card-bg p-8"},B={key:0,class:"text-red-500 text-sm"},M={key:0,class:"text-red-500 text-sm"},R={key:0,class:"text-red-500 text-sm"},N={__name:"RegisterView",setup(U){const u=d(""),a=d(""),i=d(""),h=V(),x=k(),s=_();g(()=>{x.query.phone&&(a.value=x.query.phone)});const w=async()=>{await s.register(u.value,a.value,i.value),s.error||h.push("/")};return(q,e)=>{var y,f;return n(),l("div",E,[t("div",S,[e[4]||(e[4]=t("h1",{class:"title-lg text-center"},"রেজিস্টার করুন",-1)),t("form",{class:"flex flex-col gap-4",onSubmit:b(w,["prevent"])},[p(t("input",{"onUpdate:modelValue":e[0]||(e[0]=r=>u.value=r),class:"input-1",type:"text",placeholder:"পুরো নাম"},null,512),[[v,u.value]]),t("div",null,[p(t("input",{"onUpdate:modelValue":e[1]||(e[1]=r=>a.value=r),class:"input-1",type:"text",placeholder:"ফোন নাম্বার"},null,512),[[v,a.value]]),(y=o(s).validationErrors)!=null&&y.phone?(n(),l("div",B,c(o(s).validationErrors.phone[0]),1)):m("",!0)]),t("div",null,[p(t("input",{"onUpdate:modelValue":e[2]||(e[2]=r=>i.value=r),class:"input-1",type:"password",placeholder:"পাসওয়ার্ড"},null,512),[[v,i.value]]),(f=o(s).validationErrors)!=null&&f.password?(n(),l("div",M,c(o(s).validationErrors.password[0]),1)):m("",!0)]),o(s).error?(n(),l("div",R,c(o(s).error),1)):m("",!0),e[3]||(e[3]=t("button",{class:"btn-2",type:"submit"},"রেজিস্টার",-1))],32)])])}}};export{N as default};