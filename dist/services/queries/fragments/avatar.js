"use strict";var e=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var v=Object.prototype.hasOwnProperty;var A=(t,r)=>{for(var n in r)e(t,n,{get:r[n],enumerable:!0})},f=(t,r,n,m)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of i(r))!v.call(t,a)&&a!==n&&e(t,a,{get:()=>r[a],enumerable:!(m=g(r,a))||m.enumerable});return t};var l=t=>f(e({},"__esModule",{value:!0}),t);var F={};A(F,{AvatarFragment:()=>p});module.exports=l(F);var o=require("graphql-request"),p=o.gql`
  fragment AvatarFragment on GetAvatarLink {
    id
    url
  }
`;0&&(module.exports={AvatarFragment});
