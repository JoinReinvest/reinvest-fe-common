"use strict";var i=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var T=(r,t)=>{for(var o in t)i(r,o,{get:t[o],enumerable:!0})},d=(r,t,o,u)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of D(t))!M.call(r,a)&&a!==o&&i(r,a,{get:()=>t[a],enumerable:!(u=A(t,a))||u.enumerable});return r};var I=r=>d(i({},"__esModule",{value:!0}),r);var s=(r,t,o)=>new Promise((u,a)=>{var f=c=>{try{n(o.next(c))}catch(e){a(e)}},l=c=>{try{n(o.throw(c))}catch(e){a(e)}},n=c=>c.done?u(c.value):Promise.resolve(c.value).then(f,l);n((o=o.apply(r,t)).next())});var g={};T(g,{useCompleteTrustDraftAccount:()=>y});module.exports=I(g);var m=require("@tanstack/react-query"),p=require("graphql-request");var P=p.gql`
  mutation completeTrustDraftAccount($accountId: ID) {
    completeTrustDraftAccount(accountId: $accountId) {
      id
    }
  }
`,y=(r,{accountId:t})=>(0,m.useMutation)({mutationFn:()=>s(void 0,null,function*(){let o=yield r();if(!o)return null;let{completeTrustDraftAccount:u}=yield o.request(P,{accountId:t});return u})});0&&(module.exports={useCompleteTrustDraftAccount});
