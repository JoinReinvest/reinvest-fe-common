"use strict";var s=Object.defineProperty;var Q=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var $=Object.prototype.hasOwnProperty;var h=(t,e)=>{for(var r in e)s(t,r,{get:e[r],enumerable:!0})},C=(t,e,r,m)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of S(e))!$.call(t,o)&&o!==r&&s(t,o,{get:()=>e[o],enumerable:!(m=Q(e,o))||m.enumerable});return t};var N=t=>C(s({},"__esModule",{value:!0}),t);var l=(t,e,r)=>new Promise((m,o)=>{var x=i=>{try{n(r.next(i))}catch(a){o(a)}},A=i=>{try{n(r.throw(i))}catch(a){o(a)}},n=i=>i.done?m(i.value):Promise.resolve(i.value).then(x,A);n((r=r.apply(t,e)).next())});var b={};h(b,{getProfileQuery:()=>q,useGetUserProfile:()=>U});module.exports=N(b);var P=require("@tanstack/react-query"),D=require("graphql-request");var y=require("graphql-request");var f=require("graphql-request"),g=f.gql`
  fragment AddressFragment on Address {
    addressLine1
    addressLine2
    city
    zip
    country
    state
  }
`;var p=require("graphql-request"),d=p.gql`
  fragment DomicileFragment on Domicile {
    type
    birthCountry
    citizenshipCountry
    visaType
  }
`;var c=require("graphql-request"),u=c.gql`
  fragment StatementFragment on Statement {
    type
    details
  }
`;var F=y.gql`
  ${g}
  ${d}
  ${u}
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
`;var q=D.gql`
  ${F}
  query getProfile {
    getProfile {
      externalId
      label
      isCompleted
      details {
        ...ProfileDetailsFragment
      }
      accounts {
        id
      }
    }
  }
`,U=t=>(0,P.useQuery)({queryKey:["getProfile"],queryFn:()=>l(void 0,null,function*(){let e=yield t();if(!e)return null;let{getProfile:r}=yield e.request(q);return r})});0&&(module.exports={getProfileQuery,useGetUserProfile});
