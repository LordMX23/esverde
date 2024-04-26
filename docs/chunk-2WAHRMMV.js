import{a as x,b as l,c as w,d as L,e as E,f as D,g as I,h as j,i as P,j as k,k as G,m as T,n as B,o as O,y as R}from"./chunk-CWV6KFOH.js";import{b as F,i as S,j as M,l as g,o as N}from"./chunk-QLKL3LQI.js";import"./chunk-WXI33M2S.js";import{$ as f,Gb as p,Ta as v,e as H,ea as a,ja as d,ka as u,lb as c,qb as n,rb as r,sb as s,tc as b,wb as C}from"./chunk-WHAGZX2E.js";var U=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"div",1),s(2,"router-outlet"),r()())},dependencies:[S]});let e=t;return e})();var y=H(k());var V=(()=>{let t=class t{constructor(){this.fb=a(j),this.authService=a(N),this.router=a(M),this.http=a(F),this.myForm=this.fb.group({usuario:["",[l.required,l.minLength(3)]],password:["",[l.required,l.minLength(6)]]})}login(){let{usuario:m,password:o}=this.myForm.value;this.authService.login(m,o).subscribe({next:i=>{i===!1&&y.default.fire({icon:"error",title:"Oops...",text:"Contrase\xF1a incorrecta o acceso denegado",footer:""}),i===!0&&this.router.navigateByUrl("/dashboard")},error:i=>{y.default.fire({icon:"error",title:"Oops...",text:i,footer:""})}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=d({type:t,selectors:[["app-login-page"]],decls:15,vars:2,consts:[[1,"container",3,"ngSubmit","formGroup"],[1,"mb-3"],["type","text","formControlName","usuario","matInput","","placeholder","Nombre de Usuario"],["type","password","formControlName","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(o,i){o&1&&(n(0,"form",0),C("ngSubmit",function(){return i.login()}),n(1,"legend"),p(2,"Login"),r(),n(3,"div",1)(4,"mat-form-field")(5,"mat-label"),p(6,"Usuario"),r(),s(7,"input",2),r()(),n(8,"div",1)(9,"mat-form-field")(10,"mat-label"),p(11,"Contrase\xF1a"),r(),s(12,"input",3),r()(),n(13,"button",4),p(14," Ingresar "),r()()),o&2&&(c("formGroup",i.myForm),v(13),c("disabled",i.myForm.invalid))},dependencies:[G,B,T,O,E,x,w,L,D,I]});let e=t;return e})();var z=[{path:"",component:U,children:[{path:"login",component:V},{path:"**",redirectTo:"login"}]}],q=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=f({imports:[g.forChild(z),g]});let e=t;return e})();var ht=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=f({imports:[b,q,R,P]});let e=t;return e})();export{ht as AuthModule};