"use strict";var s=Object.defineProperty;var d=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var f=Object.prototype.hasOwnProperty;var T=(e,t)=>{for(var i in t)s(e,i,{get:t[i],enumerable:!0})},M=(e,t,i,m)=>{if(t&&typeof t=="object"||typeof t=="function")for(let a of F(t))!f.call(e,a)&&a!==i&&s(e,a,{get:()=>t[a],enumerable:!(m=d(t,a))||m.enumerable});return e};var D=e=>M(s({},"__esModule",{value:!0}),e);var l=(e,t,i)=>new Promise((m,a)=>{var o=n=>{try{r(i.next(n))}catch(u){a(u)}},g=n=>{try{r(i.throw(n))}catch(u){a(u)}},r=n=>n.done?m(n.value):Promise.resolve(n.value).then(o,g);r((i=i.apply(e,t)).next())});var P={};T(P,{useSignDocumentFromTemplate:()=>$});module.exports=D(P);var p=require("@tanstack/react-query"),c=require("graphql-request");var I=c.gql`
  mutation signDocumentFromTemplate($templateId: TemplateName, $fields: [GenericFieldInput], signature: String) {
    signDocumentFromTemplate(templateId: $templateId, fields: $fields, signature: $signature) {
      url
      id
    }
  }
`,$=(e,{templateId:t,fields:i,signature:m})=>(0,p.useMutation)({mutationFn:()=>l(void 0,null,function*(){let a=yield e();if(!a)return null;let{signDocumentFromTemplate:o}=yield a.request(I,{templateId:t,fields:i,signature:m});return o})});0&&(module.exports={useSignDocumentFromTemplate});
