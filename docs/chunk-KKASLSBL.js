import{j as L,k as tt,o as C,p as I,q as et,r as it,s as nt,t as ot,u as rt,v as at,w as mt}from"./chunk-IOLI6QNW.js";import{a as D,b as W,h as B,i as X,j as E,k as y,l as A,m as Y,o as Z}from"./chunk-G3GCOTDE.js";import"./chunk-WXI33M2S.js";import{D as V,Db as N,Eb as n,Fb as U,Gb as l,Jb as J,Kb as j,Ra as m,Sa as q,T as P,Z as H,_ as R,da as p,hb as S,ia as u,ja as O,jb as d,mc as x,o as T,ob as e,oc as K,pb as i,qa as _,qb as f,qc as Q,ra as w,rb as $,ub as F,wb as G}from"./chunk-2NYR5WOO.js";var St=()=>({width:"250px"});function xt(o,t){if(o&1){let s=$();e(0,"mat-list-item",9),F("click",function(){_(s),G();let r=N(2);return w(r.toggle())}),e(1,"mat-icon",10),n(2),i(),n(3),i()}if(o&2){let s=t.$implicit;d("routerLink",s.url),m(2),U(s.icon),m(),l(" ",s.label," ")}}var pt=(()=>{let t=class t{constructor(a){this.router=a,this.authService=p(Z),this.sidebarItems=[{label:"Listado",icon:"label",url:"./clist"},{label:"Buscar",icon:"search",url:"./rlist"}]}get user(){return localStorage.getItem("nombre")}onLogout(){this.authService.logout()}};t.\u0275fac=function(r){return new(r||t)(q(E))},t.\u0275cmp=u({type:t,selectors:[["app-layout-page"]],decls:23,vars:4,consts:[["sidenav",""],["fullscreen",""],["mode","push",3,"ngStyle"],["color","primary"],[1,"spacer"],["mat-icon-button","",3,"click"],[3,"routerLink","click",4,"ngFor","ngForOf"],["mat-button","",3,"click"],[1,"container"],[3,"click","routerLink"],["matListItemIcon",""]],template:function(r,c){if(r&1){let h=$();e(0,"mat-sidenav-container",1)(1,"mat-sidenav",2,0)(3,"mat-toolbar",3)(4,"span"),n(5,"Menu"),i(),f(6,"span",4),e(7,"button",5),F("click",function(){_(h);let v=N(2);return w(v.toggle())}),e(8,"mat-icon"),n(9,"menu"),i()()(),e(10,"mat-nav-list"),S(11,xt,4,3,"mat-list-item",6),i()(),e(12,"mat-toolbar",3)(13,"button",5),F("click",function(){_(h);let v=N(2);return w(v.toggle())}),e(14,"mat-icon"),n(15,"menu"),i()(),f(16,"span",4),e(17,"span"),n(18),i(),e(19,"button",7),F("click",function(){return _(h),w(c.onLogout())}),n(20," Cerrar Sesion "),i()(),e(21,"div",8),f(22,"router-outlet"),i()()}r&2&&(m(),d("ngStyle",J(3,St)),m(10),d("ngForOf",c.sidebarItems),m(7),U(c.user))},dependencies:[x,K,X,y,L,tt,C,nt,it,et,ot,rt,at]});let o=t;return o})();var M=(()=>{let t=class t{constructor(){this.baseUrl=Y.baseUrl,this.http=p(W)}getCoordinador(a,r,c){let h=`${this.baseUrl}/Registros/Top`,g=localStorage.getItem("token"),v=new D().set("Authorization",`Bearer ${g}`),k={id:a,id_perfil:r,id_p:c};return this.http.post(h,k,{headers:v}).pipe(V(()=>T()))}getLider(a,r,c){let h=`${this.baseUrl}/Registros/Top`,g=localStorage.getItem("token"),v=new D().set("Authorization",`Bearer ${g}`),k={id:a,id_perfil:r,id_p:c};return this.http.post(h,k,{headers:v}).pipe(V(()=>T()))}getVotante(a,r,c){let h=`${this.baseUrl}/Registros/Top`,g=localStorage.getItem("token"),v=new D().set("Authorization",`Bearer ${g}`),k={id:a,id_perfil:r,id_p:c};return this.http.post(h,k,{headers:v}).pipe(V(()=>T()))}};t.\u0275fac=function(r){return new(r||t)},t.\u0275prov=H({token:t,factory:t.\u0275fac,providedIn:"root"});let o=t;return o})();var bt=o=>["/dashboard/llist",o];function Et(o,t){if(o&1&&(e(0,"tr")(1,"th",4),n(2),i(),e(3,"td"),n(4),i(),e(5,"td"),n(6),i(),e(7,"td"),n(8),i(),e(9,"td")(10,"button",5)(11,"mat-icon"),n(12,"search"),i(),n(13," Ver "),i()()()),o&2){let s=t.$implicit;m(2),l(" ",s.nombre," "),m(2),l(" ",s.telefono," "),m(2),l(" ",s.seccion," "),m(2),l(" ",s.id," "),m(2),d("routerLink",j(5,bt,s.id))}}var ut=(()=>{let t=class t{constructor(){this.structureService=p(M),this.coordinadores=[]}ngOnInit(){this.structureService.getCoordinador("1","1","1").subscribe(a=>this.coordinadores=a)}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-coordinador-list-page"]],decls:21,vars:1,consts:[[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["mat-button","","mat-raised","","color","primary",3,"routerLink"]],template:function(r,c){r&1&&(e(0,"h1"),n(1,"Listado de Coordinadores"),i(),f(2,"mat-divider")(3,"br")(4,"br"),e(5,"div",0)(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),n(10,"Nombre"),i(),e(11,"th",2),n(12,"Telefono"),i(),e(13,"th",2),n(14,"Seccion"),i(),e(15,"th",2),n(16,"Editar"),i(),e(17,"th",2),n(18,"Lideres"),i()()(),e(19,"tbody"),S(20,Et,14,7,"tr",3),i()()()),r&2&&(m(20),d("ngForOf",c.coordinadores))},dependencies:[x,y,L,C,I]});let o=t;return o})();var yt=o=>["/dashboard/vlist",o];function Lt(o,t){if(o&1&&(e(0,"tr")(1,"th",4),n(2),i(),e(3,"td"),n(4),i(),e(5,"td"),n(6),i(),e(7,"td"),n(8),i(),e(9,"td")(10,"button",5)(11,"mat-icon"),n(12,"search"),i(),n(13," Ver "),i()()()),o&2){let s=t.$implicit;m(2),l(" ",s.nombre," "),m(2),l(" ",s.telefono," "),m(2),l(" ",s.seccion," "),m(2),l(" ",s.id," "),m(2),d("routerLink",j(5,yt,s.id))}}var ft=(()=>{let t=class t{constructor(){this.structureService=p(M),this.lideres=[],this.activatedRoute=p(B),this.router=p(E)}ngOnInit(){this.activatedRoute.params.pipe(P(({id:a})=>this.structureService.getLider("1","11",a))).subscribe(a=>{if(!a)return this.router.navigateByUrl("/");this.lideres=a})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-lider-list-page"]],decls:21,vars:1,consts:[[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["mat-button","","mat-raised","","color","primary",3,"routerLink"]],template:function(r,c){r&1&&(e(0,"h1"),n(1,"Listado de Lideres"),i(),f(2,"mat-divider")(3,"br")(4,"br"),e(5,"div",0)(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),n(10,"Nombre"),i(),e(11,"th",2),n(12,"Telefono"),i(),e(13,"th",2),n(14,"Seccion"),i(),e(15,"th",2),n(16,"Editar"),i(),e(17,"th",2),n(18,"Votantes"),i()()(),e(19,"tbody"),S(20,Lt,14,7,"tr",3),i()()()),r&2&&(m(20),d("ngForOf",c.lideres))},dependencies:[x,y,L,C,I]});let o=t;return o})();function Ct(o,t){if(o&1&&(e(0,"tr")(1,"th",4),n(2),i(),e(3,"td"),n(4),i(),e(5,"td"),n(6),i(),e(7,"td"),n(8),i(),e(9,"td"),n(10),i()()),o&2){let s=t.$implicit;m(2),l(" ",s.nombre," "),m(2),l(" ",s.telefono," "),m(2),l(" ",s.seccion," "),m(2),l(" ",s.domilio," "),m(2),l(" ",s.id," ")}}var ht=(()=>{let t=class t{constructor(){this.structureService=p(M),this.votantes=[],this.activatedRoute=p(B),this.router=p(E)}ngOnInit(){this.activatedRoute.params.pipe(P(({id:a})=>this.structureService.getVotante("1","12",a))).subscribe(a=>{if(!a)return this.router.navigateByUrl("/");this.votantes=a})}};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-votante-list-page"]],decls:21,vars:1,consts:[[1,"table-responsive"],[1,"table"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"]],template:function(r,c){r&1&&(e(0,"h1"),n(1,"Listado de Votantes"),i(),f(2,"mat-divider")(3,"br")(4,"br"),e(5,"div",0)(6,"table",1)(7,"thead")(8,"tr")(9,"th",2),n(10,"Nombre"),i(),e(11,"th",2),n(12,"Telefono"),i(),e(13,"th",2),n(14,"Seccion"),i(),e(15,"th",2),n(16,"Domicilio"),i(),e(17,"th",2),n(18,"Editar"),i()()(),e(19,"tbody"),S(20,Ct,11,5,"tr",3),i()()()),r&2&&(m(20),d("ngForOf",c.votantes))},dependencies:[x,I]});let o=t;return o})();var vt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=u({type:t,selectors:[["app-report-list-page"]],decls:2,vars:0,template:function(r,c){r&1&&(e(0,"p"),n(1,"report-list-page works!"),i())}});let o=t;return o})();var It=[{path:"",component:pt,children:[{path:"clist",component:ut},{path:"llist/:id",component:ft},{path:"vlist/:id",component:ht},{path:"rlist",component:vt},{path:"**",redirectTo:"clist"}]}],gt=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=O({type:t}),t.\u0275inj=R({imports:[A.forChild(It),A]});let o=t;return o})();var ye=(()=>{let t=class t{};t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=O({type:t}),t.\u0275inj=R({imports:[Q,gt,mt]});let o=t;return o})();export{ye as DashboardModule};