"use strict";var n=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var D=Object.prototype.hasOwnProperty;var Q=(r,t)=>{for(var o in t)n(r,o,{get:t[o],enumerable:!0})},q=(r,t,o,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of m(t))!D.call(r,e)&&e!==o&&n(r,e,{get:()=>t[e],enumerable:!(s=l(t,e))||s.enumerable});return r};var g=r=>q(n({},"__esModule",{value:!0}),r);var a=(r,t,o)=>new Promise((s,e)=>{var p=u=>{try{c(o.next(u))}catch(i){e(i)}},A=u=>{try{c(o.throw(u))}catch(i){e(i)}},c=u=>u.done?s(u.value):Promise.resolve(u.value).then(p,A);c((o=o.apply(r,t)).next())});var H={};Q(H,{useGetListAccount:()=>w});module.exports=g(H);var y=require("@tanstack/react-query"),f=require("graphql-request");var k=f.gql`
  query listAccountDrafts {
    listAccountDrafts {
      id
      type
    }
  }
`,w=r=>(0,y.useQuery)({queryKey:["getAccountDrafts"],queryFn:()=>a(void 0,null,function*(){let t=yield r();if(!t)return null;let{listAccountDrafts:o}=yield t.request(k);return o})});0&&(module.exports={useGetListAccount});
