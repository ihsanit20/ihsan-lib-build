import{C as v,r as o,D as i}from"./index-BUlZ0hg7.js";const w=v("publisher",()=>{const u=o([]),c=o(null),t=o(!1),r=o(null);return{publishers:u,publisher:c,loading:t,error:r,fetchPublishers:async()=>{var l,s;t.value=!0,r.value=null;try{const a=await i.get("/publishers");u.value=a.data}catch(a){r.value=((s=(l=a.response)==null?void 0:l.data)==null?void 0:s.message)||"Failed to fetch publishers"}finally{t.value=!1}},fetchPublisher:async l=>{var s,a;t.value=!0,r.value=null;try{const e=await i.get(`/publishers/${l}`);c.value=e.data}catch(e){r.value=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to fetch publisher"}finally{t.value=!1}},createPublisher:async l=>{var s,a;t.value=!0,r.value=null;try{const e=await i.post("/publishers",l);u.value.push(e.data)}catch(e){throw r.value=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to create publisher",e}finally{t.value=!1}},updatePublisher:async(l,s)=>{var a,e;t.value=!0,r.value=null;try{const n=await i.put(`/publishers/${l}`,s),h=u.value.findIndex(p=>p.id===l);h!==-1&&(u.value[h]=n.data)}catch(n){throw r.value=((e=(a=n.response)==null?void 0:a.data)==null?void 0:e.message)||"Failed to update publisher",n}finally{t.value=!1}},deletePublisher:async l=>{var s,a;t.value=!0,r.value=null;try{await i.delete(`/publishers/${l}`),u.value=u.value.filter(e=>e.id!==l)}catch(e){throw r.value=((a=(s=e.response)==null?void 0:s.data)==null?void 0:a.message)||"Failed to delete publisher",e}finally{t.value=!1}}}});export{w as u};