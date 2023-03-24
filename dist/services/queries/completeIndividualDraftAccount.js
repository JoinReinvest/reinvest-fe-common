"use strict";var u=Object.defineProperty;var y=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var $=Object.prototype.hasOwnProperty;var E=(n,t)=>{for(var a in t)u(n,a,{get:t[a],enumerable:!0})},M=(n,t,a,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let e of D(t))!$.call(n,e)&&e!==a&&u(n,e,{get:()=>t[e],enumerable:!(o=y(t,e))||o.enumerable});return n};var N=n=>M(u({},"__esModule",{value:!0}),n);var p=(n,t,a)=>new Promise((o,e)=>{var v=r=>{try{m(a.next(r))}catch(i){e(i)}},F=r=>{try{m(a.throw(r))}catch(i){e(i)}},m=r=>r.done?o(r.value):Promise.resolve(r.value).then(v,F);m((a=a.apply(n,t)).next())});var x={};E(x,{useCompleteIndividualDraftAccount:()=>q});module.exports=N(x);var I=require("@tanstack/react-query"),A=require("graphql-request");var c=require("graphql-request"),l=c.gql`
  fragment AvatarFragment on GetAvatarLink {
    id
    url
  }
`;var g=require("graphql-request"),d=g.gql`
  fragment EmployerFragment on Employer {
    nameOfEmployer
    title
    industry
  }
`;var s=require("graphql-request"),f=s.gql`
  fragment NetRangeFragment on NetRange {
    range
  }
`;var R=A.gql`
  ${d}
  ${f}
  ${l}
  mutation completeIndividualDraftAccount($accountId: ID, $input: IndividualAccountInput) {
    completeIndividualDraftAccount(accountId: $accountId, input: $input) {
      id
      state
      avatar {
        ...AvatarFragment
      }
      isCompleted
      details {
        employer {
          ...EmployerFragment
        }
        netWorth {
          ...NetRangeFragment
        }
        netIncome {
          ...NetRangeFragment
        }
        employmentStatus {
          status
        }
      }
    }
  }
`,q=(n,{accountId:t,input:a})=>(0,I.useMutation)({mutationFn:()=>p(void 0,null,function*(){let o=yield n();if(!o)return null;let{completeIndividualDraftAccount:e}=yield o.request(R,{accountId:t,input:a});return e})});0&&(module.exports={useCompleteIndividualDraftAccount});
