"use strict";var p=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var g=Object.getOwnPropertyNames;var D=Object.prototype.hasOwnProperty;var C=(o,t)=>{for(var r in t)p(o,r,{get:t[r],enumerable:!0})},Q=(o,t,r,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of g(t))!D.call(o,e)&&e!==r&&p(o,e,{get:()=>t[e],enumerable:!(c=A(t,e))||c.enumerable});return o};var q=o=>Q(p({},"__esModule",{value:!0}),o);var i=(o,t,r)=>new Promise((c,e)=>{var y=a=>{try{u(r.next(a))}catch(n){e(n)}},m=a=>{try{u(r.throw(a))}catch(n){e(n)}},u=a=>a.done?c(a.value):Promise.resolve(a.value).then(y,m);u((r=r.apply(o,t)).next())});var l={};C(l,{useGetCorporateDraftAccount:()=>I});module.exports=q(l);var f=require("@tanstack/react-query"),s=require("graphql-request");var d=s.gql`
  query getCorporateDraftAccount($accountId: ID) {
    getCorporateDraftAccount(accountId: $accountId) {
      id
    }
  }
`,I=(o,{accountId:t})=>(0,f.useQuery)({queryKey:["getCorporateDraftAccount",t],queryFn:()=>i(void 0,null,function*(){let r=yield o();if(!r)return null;let{getCorporateDraftAccount:c}=yield r.request(d,{accountId:t});return c})});0&&(module.exports={useGetCorporateDraftAccount});
