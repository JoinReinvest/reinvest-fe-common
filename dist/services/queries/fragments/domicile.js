"use strict";var r=Object.defineProperty;var c=Object.getOwnPropertyDescriptor;var p=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var g=(t,i)=>{for(var o in i)r(t,o,{get:i[o],enumerable:!0})},l=(t,i,o,m)=>{if(i&&typeof i=="object"||typeof i=="function")for(let e of p(i))!a.call(t,e)&&e!==o&&r(t,e,{get:()=>i[e],enumerable:!(m=c(i,e))||m.enumerable});return t};var y=t=>l(r({},"__esModule",{value:!0}),t);var D={};g(D,{DomicileFragment:()=>s});module.exports=y(D);var n=require("graphql-request"),s=n.gql`
  fragment DomicileFragment on Domicile {
    type
    birthCountry
    citizenshipCountry
    visaType
  }
`;0&&(module.exports={DomicileFragment});
