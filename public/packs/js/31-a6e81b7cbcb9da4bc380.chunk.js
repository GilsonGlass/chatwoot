(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{2771:function(t,e,r){"use strict";r.d(e,"b",(function(){return n})),r.d(e,"a",(function(){return a}));r(31);var n=function(t){var e=window.chatwootConfig,r=e.hostURL,n=e.helpCenterURL;return"".concat(n||r||"","/hc/").concat(t)},a=function(t,e,r,a){var o=n(t);return"".concat(o,"/").concat(r,"/").concat(e,"/").concat(a)}},2776:function(t,e,r){},2788:function(t,e,r){"use strict";r(2776)},2795:function(t,e,r){"use strict";r(22);var n=r(14),a=r(165),o=r(61),i=r(164),s=r(2771),u={components:{thumbnail:o.a},props:{portal:{type:Object,default:function(){}},isSubmitting:{type:Boolean,default:!1},submitButtonText:{type:String,default:""}},data:function(){return{name:"",slug:"",domain:"",alertMessage:""}},validations:{name:{required:n.required,minLength:Object(n.minLength)(2)},slug:{required:n.required},domain:{isDomain:a.a}},computed:{nameError:function(){return this.$v.name.$error?this.$t("HELP_CENTER.CATEGORY.ADD.NAME.ERROR"):""},slugError:function(){return this.$v.slug.$error?this.$t("HELP_CENTER.CATEGORY.ADD.SLUG.ERROR"):""},domainError:function(){return this.$v.domain.$error?this.$t("HELP_CENTER.PORTAL.ADD.DOMAIN.ERROR"):""},domainHelpText:function(){return Object(s.b)(this.slug)}},mounted:function(){var t=this.portal||{};this.name=t.name||"",this.slug=t.slug||"",this.domain=t.custom_domain||"",this.alertMessage=""},methods:{onNameChange:function(){this.slug=Object(i.b)(this.name)},onSubmitClick:function(){if(this.$v.$touch(),!this.$v.$invalid){var t={name:this.name,slug:this.slug,custom_domain:this.domain};this.$emit("submit",t)}}}},l=(r(2788),r(1)),c=Object(l.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wizard-body columns content-box small-9"},[r("div",{staticClass:"medium-12 columns"},[r("h3",{staticClass:"block-title"},[t._v("\n      "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.BASIC_SETTINGS_PAGE.TITLE"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"portal-form"},[r("div",{staticClass:"medium-8 columns"},[r("div",{staticClass:"form-item"},[r("label",[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.LOGO.LABEL"))+"\n        ")]),t._v(" "),r("div",{staticClass:"logo-container"},[r("thumbnail",{attrs:{username:t.name,size:"56px",variant:"square"}}),t._v(" "),t._e()],1),t._v(" "),r("p",{staticClass:"logo-help--text"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.LOGO.HELP_TEXT"))+"\n        ")])]),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{class:{error:t.$v.name.$error},attrs:{error:t.nameError,label:t.$t("HELP_CENTER.PORTAL.ADD.NAME.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.NAME.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.PORTAL.ADD.NAME.HELP_TEXT")},on:{blur:t.$v.name.$touch,input:t.onNameChange},model:{value:t.name,callback:function(e){t.name="string"===typeof e?e.trim():e},expression:"name"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{class:{error:t.$v.slug.$error},attrs:{error:t.slugError,label:t.$t("HELP_CENTER.PORTAL.ADD.SLUG.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.SLUG.PLACEHOLDER"),"help-text":t.domainHelpText},on:{blur:t.$v.slug.$touch},model:{value:t.slug,callback:function(e){t.slug="string"===typeof e?e.trim():e},expression:"slug"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{class:{error:t.$v.domain.$error},attrs:{label:t.$t("HELP_CENTER.PORTAL.ADD.DOMAIN.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.DOMAIN.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.PORTAL.ADD.DOMAIN.HELP_TEXT"),error:t.domainError},on:{blur:t.$v.domain.$touch},model:{value:t.domain,callback:function(e){t.domain="string"===typeof e?e.trim():e},expression:"domain"}})],1)])]),t._v(" "),r("div",{staticClass:"flex-end"},[r("woot-button",{attrs:{"is-loading":t.isSubmitting,"is-disabled":t.$v.$invalid},on:{click:t.onSubmitClick}},[t._v("\n      "+t._s(t.submitButtonText)+"\n    ")])],1)])}),[],!1,null,"68521474",null);e.a=c.exports},3036:function(t,e,r){"use strict";r.r(e);r(19),r(47),r(67),r(22),r(7),r(3),r(5),r(9),r(8),r(10),r(6),r(18);var n=r(4),a=r(16);function o(t,e,r,n,a,o,i){try{var s=t[o](i),u=s.value}catch(l){return void r(l)}s.done?e(u):Promise.resolve(u).then(n,a)}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){u(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function u(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var l={components:{PortalSettingsBasicForm:r(2795).a},mixins:[a.a],data:function(){return{lastPortalSlug:void 0,alertMessage:""}},computed:s(s({},Object(n.mapGetters)({uiFlags:"portals/uiFlagsIn"})),{},{currentPortalSlug:function(){return this.$route.params.portalSlug},currentPortal:function(){return this.$store.getters["portals/portalBySlug"](this.currentPortalSlug)}}),mounted:function(){this.lastPortalSlug=this.currentPortalSlug},methods:{updatePortalSettings:function(t){var e,r=this;return(e=regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=r.lastPortalSlug,e.next=4,r.$store.dispatch("portals/update",s(s({},t),{},{portalSlug:n}));case 4:if(r.alertMessage=r.$t("HELP_CENTER.PORTAL.ADD.API.SUCCESS_MESSAGE_FOR_UPDATE"),r.lastPortalSlug===t.slug){e.next=9;break}return e.next=8,r.$store.dispatch("portals/index");case 8:r.$router.replace({name:r.$route.name,params:{portalSlug:t.slug}});case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),r.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||r.$t("HELP_CENTER.PORTAL.ADD.API.ERROR_MESSAGE_FOR_UPDATE");case 14:return e.prev=14,r.showAlert(r.alertMessage),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})),function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(t){o(i,n,a,s,u,"next",t)}function u(t){o(i,n,a,s,u,"throw",t)}s(void 0)}))})()}}},c=l,m=r(1),E=Object(m.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentPortal?r("portal-settings-basic-form",{attrs:{portal:t.currentPortal,"is-submitting":t.uiFlags.isUpdating,"submit-button-text":t.$t("HELP_CENTER.PORTAL.EDIT.EDIT_BASIC_INFO.BUTTON_TEXT")},on:{submit:t.updatePortalSettings}}):t._e()}),[],!1,null,null,null);e.default=E.exports}}]);
//# sourceMappingURL=31-a6e81b7cbcb9da4bc380.chunk.js.map