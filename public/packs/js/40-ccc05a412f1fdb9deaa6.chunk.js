(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{2828:function(t,e,r){},2979:function(t,e,r){"use strict";r(2828)},3035:function(t,e,r){"use strict";r.r(e);r(40),r(22),r(7),r(3),r(5),r(9),r(8),r(10);var n=r(4),a=r(80),o=r(597),i=r(974);function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){c(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var u={components:{SettingsHeader:o.a,SettingIntroBanner:i.a},mixins:[a.a],computed:l(l({},Object(n.mapGetters)({globalConfig:"globalConfig/get"})),{},{currentPortal:function(){var t=this.$route.params.portalSlug;return t?this.$store.getters["portals/portalBySlug"](t):this.$store.getters["portals/allPortals"][0]},tabs:function(){var t=[{key:"edit_portal_information",name:this.$t("HELP_CENTER.PORTAL.EDIT.TABS.BASIC_SETTINGS.TITLE")},{key:"edit_portal_customization",name:this.$t("HELP_CENTER.PORTAL.EDIT.TABS.CUSTOMIZATION_SETTINGS.TITLE")},{key:"list_all_locale_categories",name:this.$t("HELP_CENTER.PORTAL.EDIT.TABS.CATEGORY_SETTINGS.TITLE")},{key:"edit_portal_locales",name:this.$t("HELP_CENTER.PORTAL.EDIT.TABS.LOCALE_SETTINGS.TITLE")}];return t},activeTabIndex:function(){return this.tabs.map((function(t){return t.key})).indexOf(this.$route.name)},portalName:function(){return this.currentPortal?this.currentPortal.name:""},currentPortalLocale:function(){var t,e;return this.currentPortal?null===(t=this.currentPortal)||void 0===t||null===(e=t.meta)||void 0===e?void 0:e.default_locale:""}}),methods:{onTabChange:function(t){var e=this.tabs.map((function(t){return t.key}))[t],r=this.$route.params.portalSlug;this.$router.push({name:e,params:{portalSlug:r,locale:this.currentPortalLocale}})}}},T=(r(2979),r(1)),b=Object(T.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("settings-header",{attrs:{"button-route":"new","header-title":t.$t("HELP_CENTER.PORTAL.EDIT.HEADER_TEXT"),"show-back-button":"","back-button-label":t.$t("HELP_CENTER.PORTAL.ADD.CREATE_FLOW_PAGE.BACK_BUTTON"),"show-new-button":!1}}),t._v(" "),r("div",[r("setting-intro-banner",{attrs:{"header-title":t.portalName}},[r("woot-tabs",{attrs:{index:t.activeTabIndex,border:!1},on:{change:t.onTabChange}},t._l(t.tabs,(function(t){return r("woot-tabs-item",{key:t.key,attrs:{name:t.name,"show-badge":!1}})})),1)],1)],1),t._v(" "),r("div",{staticClass:"row content-box"},[r("router-view")],1)],1)}),[],!1,null,"498b71c9",null);e.default=b.exports}}]);
//# sourceMappingURL=40-ccc05a412f1fdb9deaa6.chunk.js.map