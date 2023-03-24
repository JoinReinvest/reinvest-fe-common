"use strict";var a=Object.defineProperty;var L=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var l=Object.prototype.hasOwnProperty;var c=(i,t)=>{for(var n in t)a(i,n,{get:t[n],enumerable:!0})},f=(i,t,n,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of Q(t))!l.call(i,r)&&r!==n&&a(i,r,{get:()=>t[r],enumerable:!(o=L(t,r))||o.enumerable});return i};var q=i=>f(a({},"__esModule",{value:!0}),i);var y=(i,t,n)=>new Promise((o,r)=>{var v=e=>{try{u(n.next(e))}catch(s){r(s)}},I=e=>{try{u(n.throw(e))}catch(s){r(s)}},u=e=>e.done?o(e.value):Promise.resolve(e.value).then(v,I);u((n=n.apply(i,t)).next())});var w={};c(w,{getInvitationQuery:()=>m,useGetInvitationLink:()=>g});module.exports=q(w);var p=require("@tanstack/react-query"),k=require("graphql-request");var m=k.gql`
  query getInvitationLink {
    userInvitationLink {
      url
    }
  }
`,g=i=>(0,p.useQuery)({queryKey:["userInvitationLink"],queryFn:()=>y(void 0,null,function*(){let t=yield i();if(!t)return null;let{userInvitationLink:n}=yield t.request(m);return n})});0&&(module.exports={getInvitationQuery,useGetInvitationLink});
