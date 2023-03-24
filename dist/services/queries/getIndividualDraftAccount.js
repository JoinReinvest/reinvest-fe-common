"use strict";var c=Object.defineProperty;var l=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var A=Object.prototype.hasOwnProperty;var g=(u,t)=>{for(var r in t)c(u,r,{get:t[r],enumerable:!0})},p=(u,t,r,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of m(t))!A.call(u,i)&&i!==r&&c(u,i,{get:()=>t[i],enumerable:!(e=l(t,i))||e.enumerable});return u};var D=u=>p(c({},"__esModule",{value:!0}),u);var d=(u,t,r)=>new Promise((e,i)=>{var y=a=>{try{n(r.next(a))}catch(o){i(o)}},I=a=>{try{n(r.throw(a))}catch(o){i(o)}},n=a=>a.done?e(a.value):Promise.resolve(a.value).then(y,I);n((r=r.apply(u,t)).next())});var q={};g(q,{useGetIndividualDraftAccount:()=>Q});module.exports=D(q);var f=require("@tanstack/react-query"),s=require("graphql-request");var v=s.gql`
  query getIndividualDraftAccount($accountId: ID) {
    getIndividualDraftAccount(accountId: $accountId) {
      id
    }
  }
`,Q=(u,{accountId:t})=>(0,f.useQuery)({queryKey:["getIndividualDraftAccount",t],queryFn:()=>d(void 0,null,function*(){let r=yield u();if(!r)return null;let{getIndividualDraftAccount:e}=yield r.request(v,{accountId:t});return e})});0&&(module.exports={useGetIndividualDraftAccount});
