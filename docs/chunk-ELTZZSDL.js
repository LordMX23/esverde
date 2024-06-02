import{b as J,c as z}from"./chunk-AGQVWMTK.js";import{N as O,a as D,b as p,c as P,d as j,e as T,f as V,g as G,h as B,i as R,k as q,m as U,n as k,o as A}from"./chunk-ZQYQSPPZ.js";import{i as L,j as w,l as F,o as I}from"./chunk-UKU6F7RT.js";import"./chunk-IX6G3U3V.js";import{Bb as r,Cb as t,Db as a,Kb as b,Oc as N,Pc as x,Ub as n,Vb as h,Za as s,ba as u,cc as E,dc as M,ga as d,la as c,ma as f,sb as g}from"./chunk-OMYJSE3U.js";var H=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-layout-page"]],decls:3,vars:0,consts:[[1,"grid","p-3"],[1,"col-12","mt-5","md:col-6","md:col-offset-3","md:mt-8"]],template:function(i,m){i&1&&(r(0,"div",0)(1,"div",1),a(2,"router-outlet"),t()())},dependencies:[L]});let o=e;return o})();var K=(()=>{let e=class e{constructor(){this.fb=d(B),this.authService=d(I),this.router=d(w),this.myForm=this.fb.nonNullable.group({usuario:["",[p.required,p.minLength(3)]],password:["",[p.required,p.minLength(6)]]})}login(){let{usuario:l,password:i}=this.myForm.value;if(this.myForm.invalid){this.myForm.markAllAsTouched();return}this.myForm.reset()}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=c({type:e,selectors:[["app-login-page"]],decls:32,vars:10,consts:[[1,"container",3,"ngSubmit","formGroup"],[1,"mb-3"],["type","text","formControlName","usuario","matInput","","placeholder","Nombre de Usuario"],["appCustomValidatorLabel","",3,"errors","touched"],["type","password","formControlName","password","matInput","","placeholder","Contrase\xF1a"],["mat-button","","mat-flat-button","","color","primary","type","submit"]],template:function(i,m){if(i&1&&(r(0,"form",0),b("ngSubmit",function(){return m.login()}),r(1,"legend"),n(2,"Login"),t(),r(3,"div",1)(4,"mat-form-field")(5,"mat-label"),n(6,"Usuario"),t(),a(7,"input",2),t(),a(8,"span",3),t(),r(9,"div",1)(10,"mat-form-field")(11,"mat-label"),n(12,"Contrase\xF1a"),t(),a(13,"input",4),t(),a(14,"span",3),t(),r(15,"button",5),n(16," Ingresar "),t(),a(17,"br")(18,"br"),r(19,"span"),n(20,"Pristine:"),t(),r(21,"pre"),n(22),t(),r(23,"span"),n(24,"Touched:"),t(),r(25,"pre"),n(26),t(),r(27,"span"),n(28,"Errors:"),t(),r(29,"pre"),n(30),E(31,"json"),t()()),i&2){let y,C,S;g("formGroup",m.myForm),s(8),g("errors",(y=m.myForm.get("usuario"))==null?null:y.errors)("touched",m.myForm.get("usuario").touched),s(6),g("errors",(C=m.myForm.get("password"))==null?null:C.errors)("touched",m.myForm.get("password").touched),s(8),h(m.myForm.controls.usuario.pristine),s(4),h(m.myForm.controls.usuario.touched),s(4),h(M(31,8,(S=m.myForm.get("usuario"))==null?null:S.errors))}},dependencies:[q,k,U,A,T,D,P,j,V,G,J,N]});let o=e;return o})();var W=[{path:"",component:H,children:[{path:"login",component:K},{path:"**",redirectTo:"login"}]}],Q=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[F.forChild(W),F]});let o=e;return o})();var be=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=u({imports:[x,Q,O,R,z]});let o=e;return o})();export{be as AuthModule};
