"use strict";var u=Object.defineProperty;var I=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames;var q=Object.prototype.hasOwnProperty;var E=(r,t)=>{for(var e in t)u(r,e,{get:t[e],enumerable:!0})},N=(r,t,e,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Q(t))!q.call(r,n)&&n!==e&&u(r,n,{get:()=>t[n],enumerable:!(a=I(t,n))||a.enumerable});return r};var R=r=>N(u({},"__esModule",{value:!0}),r);var g=(r,t,e)=>new Promise((a,n)=>{var F=o=>{try{m(e.next(o))}catch(i){n(i)}},v=o=>{try{m(e.throw(o))}catch(i){n(i)}},m=o=>o.done?a(o.value):Promise.resolve(o.value).then(F,v);m((e=e.apply(r,t)).next())});var G={};E(G,{useGetAccount:()=>x});module.exports=R(G);var A=require("@tanstack/react-query"),f=require("graphql-request");var c=require("graphql-request"),p=c.gql`
  fragment AvatarFragment on GetAvatarLink {
    id
    url
  }
`;var l=require("graphql-request"),y=l.gql`
  fragment EmployerFragment on Employer {
    nameOfEmployer
    title
    industry
  }
`;var s=require("graphql-request"),d=s.gql`
  fragment NetRangeFragment on NetRange {
    range
  }
`;var $=f.gql`
  ${p}
  ${y}
  ${d}
  query getIndividualAccount($accountId: String) {
    getIndividualAccount(accountId: $accountId) {
      id
      avatar {
        ...AvatarFragment
      }
      positionTotal
      details {
        employmentStatus {
          status
        }
        employer {
          ...EmployerFragment
        }
        netWorth {
          ...NetRangeFragment
        }
        netIncome {
          ...NetRangeFragment
        }
      }
    }
  }
`,x=(r,{accountId:t})=>(0,A.useQuery)({queryKey:["getAccount",t],queryFn:()=>g(void 0,null,function*(){let e=yield r();if(!e)return null;let{getIndividualAccount:a}=yield e.request($,{accountId:t});return a})});0&&(module.exports={useGetAccount});
