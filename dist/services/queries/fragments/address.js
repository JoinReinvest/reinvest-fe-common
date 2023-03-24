"use strict";var t=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var g=(r,e)=>{for(var d in e)t(r,d,{get:e[d],enumerable:!0})},c=(r,e,d,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of i(e))!m.call(r,s)&&s!==d&&t(r,s,{get:()=>e[s],enumerable:!(n=o(e,s))||n.enumerable});return r};var p=r=>c(t({},"__esModule",{value:!0}),r);var f={};g(f,{AddressFragment:()=>A});module.exports=p(f);var a=require("graphql-request"),A=a.gql`
  fragment AddressFragment on Address {
    addressLine1
    addressLine2
    city
    zip
    country
    state
  }
`;0&&(module.exports={AddressFragment});
