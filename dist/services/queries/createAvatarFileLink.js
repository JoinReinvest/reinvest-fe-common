"use strict";var s=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var k=Object.prototype.hasOwnProperty;var v=(a,t)=>{for(var i in t)s(a,i,{get:t[i],enumerable:!0})},L=(a,t,i,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of F(t))!k.call(a,e)&&e!==i&&s(a,e,{get:()=>t[e],enumerable:!(n=p(t,e))||n.enumerable});return a};var f=a=>L(s({},"__esModule",{value:!0}),a);var l=(a,t,i)=>new Promise((n,e)=>{var A=r=>{try{o(i.next(r))}catch(u){e(u)}},M=r=>{try{o(i.throw(r))}catch(u){e(u)}},o=r=>r.done?n(r.value):Promise.resolve(r.value).then(A,M);o((i=i.apply(a,t)).next())});var w={};v(w,{useCreateAvatarFileLink:()=>q});module.exports=f(w);var c=require("@tanstack/react-query"),m=require("graphql-request");var U=m.gql`
  mutation createAvatarFileLink {
    createAvatarFileLink {
      url
      id
    }
  }
`,q=a=>(0,c.useMutation)({mutationFn:()=>l(void 0,null,function*(){let t=yield a();if(!t)return null;let{createAvatarFileLink:i}=yield t.request(U);return i})});0&&(module.exports={useCreateAvatarFileLink});
