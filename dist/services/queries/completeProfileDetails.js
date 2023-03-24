"use strict";var s=Object.defineProperty;var M=Object.getOwnPropertyDescriptor;var S=Object.getOwnPropertyNames;var h=Object.prototype.hasOwnProperty;var v=(r,t)=>{for(var e in t)s(r,e,{get:t[e],enumerable:!0})},C=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of S(t))!h.call(r,o)&&o!==e&&s(r,o,{get:()=>t[o],enumerable:!(a=M(t,o))||a.enumerable});return r};var I=r=>C(s({},"__esModule",{value:!0}),r);var l=(r,t,e)=>new Promise((a,o)=>{var x=i=>{try{m(e.next(i))}catch(n){o(n)}},$=i=>{try{m(e.throw(i))}catch(n){o(n)}},m=i=>i.done?a(i.value):Promise.resolve(i.value).then(x,$);m((e=e.apply(r,t)).next())});var b={};v(b,{useCompleteProfileDetails:()=>N});module.exports=I(b);var y=require("@tanstack/react-query"),q=require("graphql-request");var p=require("graphql-request"),c=p.gql`
  fragment AccountsFragment on AccountOverview {
    id
    type
    avatar {
      id
      url
    }
    positionTotal
  }
`;var P=require("graphql-request");var f=require("graphql-request"),g=f.gql`
  fragment AddressFragment on Address {
    addressLine1
    addressLine2
    city
    zip
    country
    state
  }
`;var u=require("graphql-request"),d=u.gql`
  fragment DomicileFragment on Domicile {
    type
    birthCountry
    citizenshipCountry
    visaType
  }
`;var F=require("graphql-request"),D=F.gql`
  fragment StatementFragment on Statement {
    type
    details
  }
`;var A=P.gql`
  ${g}
  ${d}
  ${D}
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
`;var w=q.gql`
  ${A}
  ${c}
  mutation completeProfileDetails($input: ProfileDetailsInput) {
    completeProfileDetails(input: $input) {
      externalId
      label
      isCompleted
      details {
        ...ProfileDetailsFragment
      }
      accounts {
        ...AccountsFragment
      }
    }
  }
`,N=(r,{input:t})=>(0,y.useMutation)({mutationFn:()=>l(void 0,null,function*(){let e=yield r();if(!e)return null;let{completeProfileDetails:a}=yield e.request(w,{input:t});return a})});0&&(module.exports={useCompleteProfileDetails});
