"use strict";var i=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var F=Object.prototype.hasOwnProperty;var D=(e,t)=>{for(var m in t)i(e,m,{get:t[m],enumerable:!0})},y=(e,t,m,n)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of c(t))!F.call(e,r)&&r!==m&&i(e,r,{get:()=>t[r],enumerable:!(n=p(t,r))||n.enumerable});return e};var S=e=>y(i({},"__esModule",{value:!0}),e);var q={};D(q,{ProfileDetailsFragment:()=>A});module.exports=S(q);var f=require("graphql-request");var a=require("graphql-request"),o=a.gql`
  fragment AddressFragment on Address {
    addressLine1
    addressLine2
    city
    zip
    country
    state
  }
`;var s=require("graphql-request"),d=s.gql`
  fragment DomicileFragment on Domicile {
    type
    birthCountry
    citizenshipCountry
    visaType
  }
`;var g=require("graphql-request"),l=g.gql`
  fragment StatementFragment on Statement {
    type
    details
  }
`;var A=f.gql`
  ${o}
  ${d}
  ${l}
  fragment ProfileDetailsFragment on ProfileDetails {
    firstName
    middleName
    lastName
    dateOfBirth
    ssn
    domicile {
      ...DomicileFragment
    }
    address {
      ...AddressFragment
    }
    idScan {
      id
    }
    statements {
      ...StatementFragment
    }
  }
`;0&&(module.exports={ProfileDetailsFragment});
