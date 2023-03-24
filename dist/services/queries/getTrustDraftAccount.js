"use strict";var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var g=(u,t)=>{for(var r in t)s(u,r,{get:t[r],enumerable:!0})},d=(u,t,r,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of D(t))!T.call(u,e)&&e!==r&&s(u,e,{get:()=>t[e],enumerable:!(o=p(t,e))||o.enumerable});return u};var Q=u=>d(s({},"__esModule",{value:!0}),u);var f=(u,t,r)=>new Promise((o,e)=>{var m=c=>{try{a(r.next(c))}catch(n){e(n)}},A=c=>{try{a(r.throw(c))}catch(n){e(n)}},a=c=>c.done?o(c.value):Promise.resolve(c.value).then(m,A);a((r=r.apply(u,t)).next())});var P={};g(P,{useGetTrustDraftAccount:()=>I});module.exports=Q(P);var i=require("@tanstack/react-query"),y=require("graphql-request");var q=y.gql`
  query getTrustDraftAccount($accountId: ID) {
    getTrustDraftAccount(accountId: $accountId) {
      id
    }
  }
`,I=(u,{accountId:t})=>(0,i.useQuery)({queryKey:["getTrustDraftAccount",t],queryFn:()=>f(void 0,null,function*(){let r=yield u();if(!r)return null;let{getTrustDraftAccount:o}=yield r.request(q,{accountId:t});return o})});0&&(module.exports={useGetTrustDraftAccount});
