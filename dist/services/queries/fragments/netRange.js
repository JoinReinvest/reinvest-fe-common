"use strict";var a=Object.defineProperty;var o=Object.getOwnPropertyDescriptor;var N=Object.getOwnPropertyNames;var R=Object.prototype.hasOwnProperty;var f=(n,e)=>{for(var g in e)a(n,g,{get:e[g],enumerable:!0})},p=(n,e,g,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let t of N(e))!R.call(n,t)&&t!==g&&a(n,t,{get:()=>e[t],enumerable:!(r=o(e,t))||r.enumerable});return n};var F=n=>p(a({},"__esModule",{value:!0}),n);var i={};f(i,{NetRangeFragment:()=>c});module.exports=F(i);var m=require("graphql-request"),c=m.gql`
  fragment NetRangeFragment on NetRange {
    range
  }
`;0&&(module.exports={NetRangeFragment});
