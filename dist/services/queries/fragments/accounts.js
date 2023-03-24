"use strict";var a=Object.defineProperty;var i=Object.getOwnPropertyDescriptor;var m=Object.getOwnPropertyNames;var g=Object.prototype.hasOwnProperty;var p=(o,t)=>{for(var r in t)a(o,r,{get:t[r],enumerable:!0})},s=(o,t,r,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of m(t))!g.call(o,n)&&n!==r&&a(o,n,{get:()=>t[n],enumerable:!(c=i(t,n))||c.enumerable});return o};var u=o=>s(a({},"__esModule",{value:!0}),o);var v={};p(v,{AccountsFragment:()=>l});module.exports=u(v);var e=require("graphql-request"),l=e.gql`
  fragment AccountsFragment on AccountOverview {
    id
    type
    avatar {
      id
      url
    }
    positionTotal
  }
`;0&&(module.exports={AccountsFragment});
