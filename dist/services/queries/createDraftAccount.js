"use strict";var i=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var P=(e,t)=>{for(var a in t)i(e,a,{get:t[a],enumerable:!0})},l=(e,t,a,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of D(t))!M.call(e,r)&&r!==a&&i(e,r,{get:()=>t[r],enumerable:!(c=A(t,r))||c.enumerable});return e};var T=e=>l(i({},"__esModule",{value:!0}),e);var p=(e,t,a)=>new Promise((c,r)=>{var s=o=>{try{n(a.next(o))}catch(u){r(u)}},y=o=>{try{n(a.throw(o))}catch(u){r(u)}},n=o=>o.done?c(o.value):Promise.resolve(o.value).then(s,y);n((a=a.apply(e,t)).next())});var q={};P(q,{useCreateDraftAccount:()=>k});module.exports=T(q);var f=require("@tanstack/react-query"),m=require("graphql-request");var h=m.gql`
  mutation createDraftAccount($type: DraftAccountType) {
    createDraftAccount(type: $type) {
      id
      type
    }
  }
`,k=(e,{type:t})=>(0,f.useMutation)({mutationFn:()=>p(void 0,null,function*(){let a=yield e();if(!a)return null;let{createDraftAccount:c}=yield a.request(h,{type:t});return c})});0&&(module.exports={useCreateDraftAccount});
