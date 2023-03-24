"use strict";var a=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var S=Object.prototype.hasOwnProperty;var f=(e,t)=>{for(var n in t)a(e,n,{get:t[n],enumerable:!0})},i=(e,t,n,r)=>{if(t&&typeof t=="object"||typeof t=="function")for(let m of p(t))!S.call(e,m)&&m!==n&&a(e,m,{get:()=>t[m],enumerable:!(r=g(t,m))||r.enumerable});return e};var l=e=>i(a({},"__esModule",{value:!0}),e);var F={};f(F,{StatementFragment:()=>s});module.exports=l(F);var o=require("graphql-request"),s=o.gql`
  fragment StatementFragment on Statement {
    type
    details
  }
`;0&&(module.exports={StatementFragment});
