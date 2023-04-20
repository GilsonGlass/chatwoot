(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{2777:function(t,e,r){},2789:function(t,e,r){"use strict";r(2777)},2796:function(t,e,r){"use strict";var a=r(14),o=r(671),i={components:{},mixins:[r(16).a],props:{portal:{type:Object,default:function(){return{}}},isSubmitting:{type:Boolean,default:!1}},data:function(){return{color:"#000",pageTitle:"",headerText:"",homePageLink:"",alertMessage:""}},validations:{homePageLink:{url:a.url}},mounted:function(){this.color=Object(o.a)(),this.updateDataFromStore()},methods:{updateDataFromStore:function(){var t=this.portal;t&&(this.color=t.color||Object(o.a)(),this.pageTitle=t.page_title||"",this.headerText=t.header_text||"",this.homePageLink=t.homepage_link||"",this.alertMessage="")},onSubmitClick:function(){if(this.$v.$touch(),!this.$v.$invalid){var t={id:this.portal.id,slug:this.portal.slug,color:this.color,page_title:this.pageTitle,header_text:this.headerText,homepage_link:this.homePageLink};this.$emit("submit",t)}}}},n=(r(2789),r(1)),s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wizard-body height-auto small-9 columns"},[r("div",{staticClass:"medium-12 columns"},[r("h3",{staticClass:"block-title"},[t._v("\n      "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.CUSTOMIZATION_PAGE.TITLE"))+"\n    ")])]),t._v(" "),r("div",{staticClass:"portal-form"},[r("div",{staticClass:"medium-8 columns"},[r("div",{staticClass:"form-item"},[r("label",[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.THEME_COLOR.LABEL"))+"\n        ")]),t._v(" "),r("woot-color-picker",{model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),t._v(" "),r("p",{staticClass:"color-help--text"},[t._v("\n          "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.THEME_COLOR.HELP_TEXT"))+"\n        ")])],1),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{attrs:{label:t.$t("HELP_CENTER.PORTAL.ADD.PAGE_TITLE.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.PAGE_TITLE.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.PORTAL.ADD.PAGE_TITLE.HELP_TEXT")},model:{value:t.pageTitle,callback:function(e){t.pageTitle="string"===typeof e?e.trim():e},expression:"pageTitle"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{attrs:{label:t.$t("HELP_CENTER.PORTAL.ADD.HEADER_TEXT.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.HEADER_TEXT.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.PORTAL.ADD.HEADER_TEXT.HELP_TEXT")},model:{value:t.headerText,callback:function(e){t.headerText="string"===typeof e?e.trim():e},expression:"headerText"}})],1),t._v(" "),r("div",{staticClass:"form-item"},[r("woot-input",{class:{error:t.$v.homePageLink.$error},attrs:{label:t.$t("HELP_CENTER.PORTAL.ADD.HOME_PAGE_LINK.LABEL"),placeholder:t.$t("HELP_CENTER.PORTAL.ADD.HOME_PAGE_LINK.PLACEHOLDER"),"help-text":t.$t("HELP_CENTER.PORTAL.ADD.HOME_PAGE_LINK.HELP_TEXT"),error:t.$v.homePageLink.$error?t.$t("HELP_CENTER.PORTAL.ADD.HOME_PAGE_LINK.ERROR"):""},on:{blur:t.$v.homePageLink.$touch},model:{value:t.homePageLink,callback:function(e){t.homePageLink="string"===typeof e?e.trim():e},expression:"homePageLink"}})],1)])]),t._v(" "),r("div",{staticClass:"flex-end"},[r("woot-button",{attrs:{"is-loading":t.isSubmitting,"is-disabled":t.$v.$invalid},on:{click:t.onSubmitClick}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.CUSTOMIZATION_PAGE.UPDATE_PORTAL_BUTTON"))+"\n    ")])],1)])}),[],!1,null,"0abe528b",null);e.a=s.exports},3037:function(t,e,r){"use strict";r.r(e);r(7),r(3),r(5),r(9),r(8),r(10),r(6),r(18),r(19);var a=r(16),o=r(2796),i=r(4);function n(t,e,r,a,o,i,n){try{var s=t[i](n),l=s.value}catch(c){return void r(c)}s.done?e(l):Promise.resolve(l).then(a,o)}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{PortalSettingsCustomizationForm:o.a},mixins:[a.a],data:function(){return{alertMessage:""}},computed:l(l({},Object(i.mapGetters)({uiFlags:"portals/uiFlagsIn"})),{},{currentPortal:function(){var t=this.$route.params.portalSlug;return this.$store.getters["portals/portalBySlug"](t)}}),methods:{updatePortalSettings:function(t){var e,r=this;return(e=regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.$route.params.portalSlug,e.prev=1,e.next=4,r.$store.dispatch("portals/update",l(l({},t),{},{portalSlug:a}));case 4:r.alertMessage=r.$t("HELP_CENTER.PORTAL.ADD.API.SUCCESS_MESSAGE_FOR_UPDATE"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r.alertMessage=(null===e.t0||void 0===e.t0?void 0:e.t0.message)||r.$t("HELP_CENTER.PORTAL.ADD.API.ERROR_MESSAGE_FOR_UPDATE");case 10:return e.prev=10,r.showAlert(r.alertMessage),e.finish(10);case 13:case"end":return e.stop()}}),e,null,[[1,7,10,13]])})),function(){var t=this,r=arguments;return new Promise((function(a,o){var i=e.apply(t,r);function s(t){n(i,a,o,s,l,"next",t)}function l(t){n(i,a,o,s,l,"throw",t)}s(void 0)}))})()}}},E=u,p=r(1),T=Object(p.a)(E,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentPortal?r("portal-settings-customization-form",{attrs:{portal:t.currentPortal,"is-submitting":t.uiFlags.isUpdating,"submit-button-text":t.$t("HELP_CENTER.PORTAL.EDIT.EDIT_BASIC_INFO.BUTTON_TEXT")},on:{submit:t.updatePortalSettings}}):t._e()}),[],!1,null,null,null);e.default=T.exports}}]);
//# sourceMappingURL=34-96833c7d63b7ea6a4c46.chunk.js.map