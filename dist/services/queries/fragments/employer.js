"use strict";var t=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var y=Object.getOwnPropertyNames;var a=Object.prototype.hasOwnProperty;var g=(e,r)=>{for(var o in r)t(e,o,{get:r[o],enumerable:!0})},E=(e,r,o,n)=>{if(r&&typeof r=="object"||typeof r=="function")for(let m of y(r))!a.call(e,m)&&m!==o&&t(e,m,{get:()=>r[m],enumerable:!(n=p(r,m))||n.enumerable});return e};var f=e=>E(t({},"__esModule",{value:!0}),e);var s={};g(s,{EmployerFragment:()=>i});module.exports=f(s);var l=require("graphql-request"),i=l.gql`
  fragment EmployerFragment on Employer {
    nameOfEmployer
    title
    industry
  }
`;0&&(module.exports={EmployerFragment});
