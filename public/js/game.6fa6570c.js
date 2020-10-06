(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["game"],{"37dd":function(e,t,a){},a0b5:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"game-details"},[a("the-title",{attrs:{title:"Teams",icon:"account-group",props:{gameId:e.gameId},component:"team-add-dialog"}}),e.winRate?a("div",{staticClass:"win-rate"},[a("v-icon",{staticClass:"mr-3",attrs:{dark:""}},[e._v("mdi-brightness-percent")]),a("span",[e._v("Your win rate is: "+e._s(e.winRate))])],1):e._e(),e.gameTeams?a("cards-list",{attrs:{items:e.gameTeams,route:e.teamRoute},on:{favorite:e.toggleFavorite},scopedSlots:e._u([{key:"action",fn:function(e){var t=e.item;return[a("team-edit-dialog",{attrs:{team:t}})]}}],null,!1,3846198980)}):e._e()],1)},i=[],m=(a("b0c0"),a("f3f3")),n=a("882a"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("the-dialog",{attrs:{"activator-icon":"pencil",color:"#fff",header:"Edit team info",simple:"","submit-logic":e.onSubmit}},[a("v-text-field",{attrs:{clearable:"",rules:e.nameRules,label:"Name"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-switch",{attrs:{label:"Delete team",color:"error","hide-details":""},model:{value:e.toDelete,callback:function(t){e.toDelete=t},expression:"toDelete"}})],1)},c=[],l=a("5f37"),d=a("2f62"),r={name:"TeamEditDialog",props:{team:{type:Object,required:!0}},data:function(){return{name:this.team.name,toDelete:!1,nameRules:l["e"]}},methods:Object(m["a"])(Object(m["a"])({},Object(d["b"])("teams",["updateTeam","deleteTeam"])),{},{onSubmit:function(){this.toDelete&&this.deleteTeam(this.team._id),this.updateTheTeam()},updateTheTeam:function(){var e={_id:this.team._id,gameId:this.team.gameId,name:this.name};this.updateTeam(e)}})},u=r,h=a("2877"),b=a("6544"),g=a.n(b),f=a("b73d"),p=a("8654"),T=Object(h["a"])(u,o,c,!1,null,null,null),j=T.exports;g()(T,{VSwitch:f["a"],VTextField:p["a"]});var O=a("1b9f"),v={name:"GameDetails",components:{TheTitle:n["a"],TeamEditDialog:j,CardsList:O["a"]},props:{gameId:{type:String,required:!0}},computed:Object(m["a"])(Object(m["a"])(Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(d["d"])("teams",["teams"])),Object(d["d"])("games",["games","winRate"])),Object(d["c"])("teams",["getGameTeams"])),Object(d["c"])("games",["getGame"])),{},{gameTeams:function(){return this.teams?this.getGameTeams(this.gameId):null},game:function(){return this.games?this.getGame(this.gameId):null},teamRoute:function(){return{name:"team",params:{teamId:""},query:{gameId:this.gameId}}}}),created:function(){this.loadData()},beforeDestroy:function(){this.setBackTitle()},methods:Object(m["a"])(Object(m["a"])(Object(m["a"])(Object(m["a"])({},Object(d["b"])(["setBackTitle"])),Object(d["b"])("games",["loadGames","loadWinRate"])),Object(d["b"])("teams",["updateTeam","loadTeams","loadGameTeams"])),{},{toggleFavorite:function(e){var t=Object(m["a"])(Object(m["a"])({},e),{},{gameId:this.gameId});this.updateTeam(t)},loadData:function(){var e=this;this.games||this.loadGames().then((function(){e.setBackTitle(e.getGame(e.gameId).name)})),this.teams||this.loadTeams(),this.loadWinRate(this.gameId),null!=this.games&&this.setBackTitle(this.getGame(this.gameId).name)}})},I=v,w=(a("abf5"),a("132d")),_=Object(h["a"])(I,s,i,!1,null,null,null);t["default"]=_.exports;g()(_,{VIcon:w["a"]})},abf5:function(e,t,a){"use strict";var s=a("37dd"),i=a.n(s);i.a}}]);
//# sourceMappingURL=game.6fa6570c.js.map