(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{2827:function(t,e,n){},2978:function(t,e,n){"use strict";n(2827)},3034:function(t,e,n){"use strict";n.r(e);n(40),n(22),n(7),n(3),n(5),n(9),n(8),n(10);var r=n(4),o=n(80);function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c={components:{SettingsHeader:n(597).a},mixins:[o.a],computed:a(a({},Object(r.mapGetters)({globalConfig:"globalConfig/get"})),{},{items:function(){var t=this;return this.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW").map((function(e){return a(a({},e),{},{body:t.useInstallationName(e.body,t.globalConfig.installationName)})}))},portalHeaderText:function(){return"new_portal_information"===this.$route.name?this.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.BASIC_SETTINGS_PAGE.HEADER"):"portal_customization"===this.$route.name?this.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.CUSTOMIZATION_PAGE.HEADER"):""}})},l=(n(2978),n(1)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("settings-header",{attrs:{"button-route":"new","header-title":t.portalHeaderText,"show-back-button":"","back-button-label":t.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.BACK_BUTTON"),"show-new-button":!1}}),t._v(" "),n("div",{staticClass:"row content-box full-height"},[n("woot-wizard",{staticClass:"hide-for-small-only medium-3 columns",attrs:{"global-config":t.globalConfig,items:t.items}}),t._v(" "),n("router-view")],1)],1)}),[],!1,null,"4c0468cc",null);e.default=u.exports}}]);
//# sourceMappingURL=41-6af21147fd93fb431ccd.chunk.js.map