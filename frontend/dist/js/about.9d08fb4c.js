"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[443],{57:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"about"},[s("compte")],1)},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"cont_compt"},[s("h2",[e._v("Mon compte")]),s("div",{staticClass:"spot_display"},[s("span",{staticClass:"sous_titre"},[e._v(" Où suis-je garé? ")]),s("div",{staticClass:"spot_box"},[0!=e.maplace?s("span",{staticClass:"sous_titre_font"},[e._v(e._s(e.place))]):s("span",{staticClass:"sous_titre_font"},[e._v("Vous n'êtes pas garé")])]),s("br"),s("div",{staticClass:"Etage"},[e._v("Etage : "+e._s(e.etage))])]),s("h3",[e._v("Mes informations")]),s("div",{staticClass:"my_infos"},[s("div",[e._v("Nom : "+e._s(e.nom))]),s("br"),s("div",[e._v("Prenom : "+e._s(e.prenom))]),s("br"),s("div",[e._v("Email : "+e._s(e.email))]),s("br")]),s("router-link",{staticClass:"se_garer",attrs:{to:"/home"}},[e._v("Se garer")]),s("div",{staticClass:"free_the_spot",on:{click:function(t){return e.freeTheSpot()}}},[s("p",[e._v("Libérer la place et payer")])])],1)},n=[],i=s(669),l=s.n(i),c=s(629),u={async mounted(){if(localStorage.getItem("othersecret")){const e=await l().post("api/auth/myAccount",{userId:localStorage.getItem("othersecret")});this.nom=e.data[0].nom,this.prenom=e.data[0].prenom,this.email=e.data[0].mail}else alert("je ne vous reconnaît pas ! reconnectez vous"),this.$router.push("/")},async beforeMount(){const e=await l().post("api/auth/myPlace",{userId:localStorage.getItem("othersecret")});void 0==e.data[0]?(this.$store.dispatch("decmaplace"),document.querySelector(".se_garer").style.display="flex",document.querySelector(".free_the_spot").style.display="none",document.querySelector(".Etage").style.display="none"):(this.$store.dispatch("getmaplace"),document.querySelector(".se_garer").style.display="none",document.querySelector(".free_the_spot").style.display="flex",document.querySelector(".Etage").style.display="block",console.log(e.data[0]),this.place=e.data[0].nom_de_place,this.etage=e.data[0].etage)},data(){return{place:null,etage:null,nom:null,prenom:null,email:null}},computed:{...(0,c.rn)(["maplace"])},methods:{async freeTheSpot(){const e=await l().put("api/test/freespot",{userId:localStorage.getItem("othersecret")});console.log(e.data),location.reload()}}},p=u,m=s(1),d=(0,m.Z)(p,r,n,!1,null,"515fba0d",null),v=d.exports,g={name:"compteview",components:{compte:v}},h=g,_=(0,m.Z)(h,a,o,!1,null,null,null),f=_.exports},681:function(e,t,s){s.r(t),s.d(t,{default:function(){return _}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("login",{attrs:{hell:"NOPE"}})},o=[],r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[s("h1",[e._v("Parkfast")]),s("figure",[e._m(0),s("figcaption",{attrs:{id:"caption"},on:{click:function(t){return e.connectDisplay()}}},[e._v(" Cliquez ici pour nous rejoindre ")])]),s("form",{staticClass:"connecter",on:{submit:function(e){e.preventDefault()}}},[s("p",[e._v("Se connecter")]),s("hr"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.mail1,expression:"mail1"}],attrs:{type:"text",id:"email",placeholder:"Mail"},domProps:{value:e.mail1},on:{input:function(t){t.target.composing||(e.mail1=t.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password1,expression:"password1"}],attrs:{type:"text",id:"password",placeholder:"Mot de passe"},domProps:{value:e.password1},on:{input:function(t){t.target.composing||(e.password1=t.target.value)}}}),s("br"),s("input",{staticClass:"btn",attrs:{type:"submit"},on:{click:function(t){return e.login()}}})]),s("form",{staticClass:"inscrire",on:{submit:function(e){e.preventDefault()}}},[s("p",[e._v("S'inscrire")]),s("hr"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.nom,expression:"nom"}],attrs:{type:"text",id:"name_ins",placeholder:"Nom"},domProps:{value:e.nom},on:{input:function(t){t.target.composing||(e.nom=t.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.prenom,expression:"prenom"}],attrs:{type:"text",id:"firstname_ins",placeholder:"Prenom"},domProps:{value:e.prenom},on:{input:function(t){t.target.composing||(e.prenom=t.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.mail2,expression:"mail2"}],attrs:{type:"text",id:"email_ins",placeholder:"Mail"},domProps:{value:e.mail2},on:{input:function(t){t.target.composing||(e.mail2=t.target.value)}}}),s("br"),s("input",{directives:[{name:"model",rawName:"v-model",value:e.password2,expression:"password2"}],attrs:{type:"text",id:"password_ins",placeholder:"Mot de passe"},domProps:{value:e.password2},on:{input:function(t){t.target.composing||(e.password2=t.target.value)}}}),s("br"),s("input",{attrs:{type:"submit",value:"C'est partie !"},on:{click:function(t){return e.signup()}}})]),s("footer",[e._v("© Copyright 2022 Jm.Lator. All rights reserved.")])])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{attrs:{src:s(155),alt:"image"}})])}],i=s(669),l=s.n(i),c={name:"login",props:{hell:String},computed:{isconnectedX(){return this.$store.state.isconnected},incremented(){this.$store.getters.incremented}},data(){return{mail1:"",password1:"",nom:"",prenom:"",mail2:"",password2:""}},methods:{async signup(){const e=await l().post("api/auth/signup",{nom:this.nom,prenom:this.prenom,email:this.mail2,password:this.password2});console.log(e.data);const t=e.data.token,s=e.data.userId;localStorage.setItem("secret",t),localStorage.setItem("othersecret",s),localStorage.getItem("secret")===t?(this.$store.dispatch("incstate"),this.$router.push("/transition")):alert("mauvaises données"),console.log("la requête de création de compte et de token")},async login(){const e=await l().post("api/auth/login",{email:this.mail1,password:this.password1});localStorage.setItem("secret",e.data.token),localStorage.setItem("othersecret",e.data.userId),localStorage.getItem("secret")==e.data.token&&localStorage.getItem("othersecret")==e.data.userId?(this.$store.dispatch("incstate"),this.$router.push("/transition")):alert("mauvaises données"),console.log(e.data)},connectDisplay(){document.querySelector(".connecter").classList.toggle("connecter_2"),document.querySelector(".inscrire").classList.toggle("inscrire_2")}}},u=c,p=s(1),m=(0,p.Z)(u,r,n,!1,null,"68447058",null),d=m.exports,v={name:"log",components:{login:d}},g=v,h=(0,p.Z)(g,a,o,!1,null,null,null),_=h.exports},498:function(e,t,s){s.r(t),s.d(t,{default:function(){return p}});var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container_transit"},[a("div",{staticClass:"cont_child"},[a("div",{staticClass:"loader"},[a("span",[e._v("Vérifications en cours...")]),a("img",{attrs:{src:s(547),alt:""}})]),a("p",[a("span",{staticClass:"mot1"},[e._v("Veuillez")]),a("span",{staticClass:"mot2"},[e._v(" patienter ")]),a("span",{staticClass:"mot3"},[e._v("quelques ")]),a("span",{staticClass:"mot4"},[e._v("instants... ")])])])])}],r=s(669),n=s.n(r),i={async created(){const e=await n().post("/api/test/verifs",{userId:localStorage.getItem("othersecret")});setTimeout((()=>{"no"==e.data?this.$router.push("/home"):"yes"==e.data?this.$router.push("compte"):this.$router.push("/")}),4e3)}},l=i,c=s(1),u=(0,c.Z)(l,a,o,!1,null,"289d0ff8",null),p=u.exports},155:function(e,t,s){e.exports=s.p+"img/parked.5255c3aa.svg"},547:function(e,t,s){e.exports=s.p+"img/car_run.03b4bdd7.gif"}}]);
//# sourceMappingURL=about.9d08fb4c.js.map