"use strict";var i=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var D=Object.prototype.hasOwnProperty;var M=(r,t)=>{for(var o in t)i(r,o,{get:t[o],enumerable:!0})},d=(r,t,o,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of C(t))!D.call(r,a)&&a!==o&&i(r,a,{get:()=>t[a],enumerable:!(c=A(t,a))||c.enumerable});return r};var I=r=>d(i({},"__esModule",{value:!0}),r);var p=(r,t,o)=>new Promise((c,a)=>{var f=e=>{try{n(o.next(e))}catch(u){a(u)}},l=e=>{try{n(o.throw(e))}catch(u){a(u)}},n=e=>e.done?c(e.value):Promise.resolve(e.value).then(f,l);n((o=o.apply(r,t)).next())});var g={};M(g,{useCompleteCorporateDraftAccount:()=>y});module.exports=I(g);var m=require("@tanstack/react-query"),s=require("graphql-request");var P=s.gql`
  mutation completeCorporateDraftAccount($accountId: ID) {
    completeCorporateDraftAccount(accountId: $accountId) {
      id
    }
  }
`,y=(r,{accountId:t})=>(0,m.useMutation)({mutationFn:()=>p(void 0,null,function*(){let o=yield r();if(!o)return null;let{completeCorporateDraftAccount:c}=yield o.request(P,{accountId:t});return c})});0&&(module.exports={useCompleteCorporateDraftAccount});
