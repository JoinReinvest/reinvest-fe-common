"use strict";var l=Object.defineProperty;var T=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var c=Object.prototype.hasOwnProperty;var f=(t,e)=>{for(var r in e)l(t,r,{get:e[r],enumerable:!0})},q=(t,e,r,p)=>{if(e&&typeof e=="object"||typeof e=="function")for(let m of Q(e))!c.call(t,m)&&m!==r&&l(t,m,{get:()=>e[m],enumerable:!(p=T(e,m))||p.enumerable});return t};var k=t=>q(l({},"__esModule",{value:!0}),t);var y=(t,e,r)=>new Promise((p,m)=>{var s=o=>{try{a(r.next(o))}catch(u){m(u)}},g=o=>{try{a(r.throw(o))}catch(u){m(u)}},a=o=>o.done?p(o.value):Promise.resolve(o.value).then(s,g);a((r=r.apply(t,e)).next())});var H={};f(H,{useGetTemplate:()=>A});module.exports=k(H);var i=require("@tanstack/react-query"),n=require("graphql-request");var w=n.gql`
  query getTemplate() {
    getTemplate {
      templateName
      content
      fields
    }
  }
`,A=t=>(0,i.useQuery)({queryKey:["getTemplate"],queryFn:()=>y(void 0,null,function*(){let e=yield t();if(!e)return null;let{getTemplate:r}=yield e.request(w);return r})});0&&(module.exports={useGetTemplate});
