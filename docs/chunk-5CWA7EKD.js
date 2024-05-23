import{O,a as N,b as p,c as x,d as w,e as L,f as E,g as D,h as I,i as j,j as k,l as P,n as G,o as T,p as B}from"./chunk-Z4FBAKMG.js";import{i as F,j as S,l as g,o as M}from"./chunk-GEKBGMRG.js";import"./chunk-IX6G3U3V.js";import{Ab as n,Bb as r,Cb as a,Jb as C,Jc as b,Tb as s,Ya as v,ba as l,e as q,ga as d,la as f,ma as u,rb as c}from"./chunk-HWBNKHIZ.js";var R=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f({type:t,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(o,i){o&1&&(n(0,"div",0)(1,"div",1),a(2,"router-outlet"),r()())},dependencies:[F]});let e=t;return e})();var y=q(k());var U=(()=>{let t=class t{constructor(){this.fb=d(I),this.authService=d(M),this.router=d(S),this.myForm=this.fb.group({usuario:["",[p.required,p.minLength(3)]],password:["",[p.required,p.minLength(6)]]})}login(){let{usuario:m,password:o}=this.myForm.value;this.authService.login(m,o).subscribe({next:i=>{i===!1&&y.default.fire({icon:"error",title:"Oops...",text:"Contrase\xF1a incorrecta o acceso denegado",footer:""}),i===!0&&this.router.navigateByUrl("/dashboard")},error:i=>{y.default.fire({icon:"error",title:"Oops...",text:i,footer:""})}})}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=f({type:t,selectors:[["app-login-page"]],decls:15,vars:2,consts:[[1,"container",3,"ngSubmit","formGroup"],[1,"mb-3"],["type","text","formControlName","usuario","matInput","","placeholder","Nombre de Usuario"],["type","password","formControlName","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary","type","submit",3,"disabled"]],template:function(o,i){o&1&&(n(0,"form",0),C("ngSubmit",function(){return i.login()}),n(1,"legend"),s(2,"Login"),r(),n(3,"div",1)(4,"mat-form-field")(5,"mat-label"),s(6,"Usuario"),r(),a(7,"input",2),r()(),n(8,"div",1)(9,"mat-form-field")(10,"mat-label"),s(11,"Contrase\xF1a"),r(),a(12,"input",3),r()(),n(13,"button",4),s(14," Ingresar "),r()()),o&2&&(c("formGroup",i.myForm),v(13),c("disabled",i.myForm.invalid))},dependencies:[P,T,G,B,L,N,x,w,E,D]});let e=t;return e})();var z=[{path:"",component:R,children:[{path:"login",component:U},{path:"**",redirectTo:"login"}]}],V=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=l({imports:[g.forChild(z),g]});let e=t;return e})();var ct=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=u({type:t}),t.\u0275inj=l({imports:[b,V,O,j]});let e=t;return e})();export{ct as AuthModule};
