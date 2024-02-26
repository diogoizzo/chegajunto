"use strict";(()=>{var e={};e.id=3748,e.ids=[3748],e.modules={3524:e=>{e.exports=require("@prisma/client")},7096:e=>{e.exports=require("bcrypt")},145:e=>{e.exports=require("next/dist/compiled/next-server/pages-api.runtime.prod.js")},7654:(e,a,r)=>{r.r(a),r.d(a,{config:()=>w,default:()=>x,routeModule:()=>v});var t={};r.r(t),r.d(t,{default:()=>g});var i=r(1802),n=r(7153),s=r(6249);let l=require("next-auth");var u=r.n(l);let d=require("@next-auth/prisma-adapter");var o=r(5066);let p=require("next-auth/providers/credentials");var c=r.n(p),m=r(7096),h=r.n(m);let g=u()({adapter:(0,d.PrismaAdapter)(o.Z),providers:[c()({id:"credentials",name:"credentials",credentials:{email:{label:"Email",type:"email",placeholder:"john@example.com"},password:{label:"Senha",type:"password"}},authorize:async e=>{try{let a=await o.Z.user.findFirst({where:{email:e?.email}});if(null===a)return null;if(await h().compare(e.password,a.password))return a;return console.log("Hash not matched logging in"),null}catch(e){return console.log("Authorize error:",e),null}}})],callbacks:{jwt:async({token:e,user:a})=>(a&&(e.id=a.id,e.type=a.type),e),session:({session:e,token:a})=>(a&&(e.id=a.id,e.type=a.type),e)},pages:{signIn:"/auth/signin",signOut:"/auth/signout"},secret:process.env.SECRET,session:{strategy:"jwt"}}),x=(0,s.l)(t,"default"),w=(0,s.l)(t,"config"),v=new i.PagesAPIRouteModule({definition:{kind:n.x.PAGES_API,page:"/api/auth/[...nextauth]",pathname:"/api/auth/[...nextauth]",bundlePath:"",filename:""},userland:t})},5066:(e,a,r)=>{let t;r.d(a,{Z:()=>i}),t=new(r(3524)).PrismaClient;let i=t}};var a=require("../../../webpack-api-runtime.js");a.C(e);var __webpack_exec__=e=>a(a.s=e),r=a.X(0,[4222],()=>__webpack_exec__(7654));module.exports=r})();