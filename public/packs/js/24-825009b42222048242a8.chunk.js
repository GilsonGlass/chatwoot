(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{2833:function(t,e,a){},2834:function(t,e,a){},2835:function(t,e,a){},2836:function(t,e,a){},2984:function(t,e,a){"use strict";a(2833)},2985:function(t,e,a){"use strict";a(2834)},2986:function(t,e,a){"use strict";a(2835)},2987:function(t,e,a){"use strict";a(2836)},3026:function(t,e,a){"use strict";a.r(e);a(106),a(47),a(230),a(22),a(7),a(3),a(5),a(9),a(8),a(10);var r=a(4),s=a(65),o=(a(30),a(58)),n=a(181),i=a(182),c={components:{FluentIcon:a(601).a,WootDropdownItem:n.a,WootDropdownMenu:i.a},mixins:[o.mixin],props:{headerTitle:{type:String,default:""},count:{type:Number,default:0},selectedValue:{type:String,default:""},shouldShowSettings:{type:Boolean,default:!1}},data:function(){return{showSortByDropdown:!1}},methods:{openFilterModal:function(){this.$emit("openModal")},openDropdown:function(){this.$emit("open"),this.showSortByDropdown=!0},closeDropdown:function(){this.$emit("close"),this.showSortByDropdown=!1},onClickNewArticlePage:function(){this.$emit("newArticlePage")}}},l=(a(2984),a(1)),u=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header--wrap"},[a("div",{staticClass:"header-left--wrap"},[a("woot-sidemenu-icon"),t._v(" "),a("div",{staticClass:"header-title"},[a("h3",{staticClass:"page-title"},[t._v(t._s(t.headerTitle))]),t._v(" "),a("span",{staticClass:"text-block-title count-view"},[t._v(t._s("("+t.count+")"))])])],1),t._v(" "),a("div",{staticClass:"header-right--wrap"},[t.shouldShowSettings?a("woot-button",{attrs:{"class-names":"article--buttons",icon:"filter","color-scheme":"secondary",variant:"hollow",size:"small"},on:{click:t.openFilterModal}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.HEADER.FILTER"))+"\n    ")]):t._e(),t._v(" "),t.shouldShowSettings?a("woot-button",{attrs:{"class-names":"article--buttons",icon:"arrow-sort","color-scheme":"secondary",size:"small",variant:"hollow"},on:{click:t.openDropdown}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.HEADER.SORT"))+"\n      "),a("span",{staticClass:"selected-value"},[t._v("\n        "+t._s(t.selectedValue)+"\n        "),a("Fluent-icon",{staticClass:"dropdown-arrow",attrs:{icon:"chevron-down",size:"14"}})],1)]):t._e(),t._v(" "),t.showSortByDropdown?a("div",{directives:[{name:"on-clickaway",rawName:"v-on-clickaway",value:t.closeDropdown,expression:"closeDropdown"}],staticClass:"dropdown-pane dropdown-pane--open"},[a("woot-dropdown-menu",[a("woot-dropdown-item",[a("woot-button",{attrs:{variant:"clear","color-scheme":"secondary",size:"small",icon:"send-clock"}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.HEADER.DROPDOWN_OPTIONS.PUBLISHED"))+"\n          ")])],1),t._v(" "),a("woot-dropdown-item",[a("woot-button",{attrs:{variant:"clear","color-scheme":"secondary",size:"small",icon:"dual-screen-clock"}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.HEADER.DROPDOWN_OPTIONS.DRAFT"))+"\n          ")])],1),t._v(" "),a("woot-dropdown-item",[a("woot-button",{attrs:{variant:"clear","color-scheme":"secondary",size:"small",icon:"calendar-clock"}},[t._v("\n            "+t._s(t.$t("HELP_CENTER.HEADER.DROPDOWN_OPTIONS.ARCHIVED"))+"\n          ")])],1)],1)],1):t._e(),t._v(" "),t.shouldShowSettings?a("woot-button",{directives:[{name:"tooltip",rawName:"v-tooltip.top-end",value:t.$t("HELP_CENTER.HEADER.SETTINGS_BUTTON"),expression:"$t('HELP_CENTER.HEADER.SETTINGS_BUTTON')",modifiers:{"top-end":!0}}],attrs:{icon:"settings","class-names":"article--buttons",variant:"hollow",size:"small","color-scheme":"secondary"}}):t._e(),t._v(" "),a("woot-button",{attrs:{"class-names":"article--buttons",size:"small",icon:"add","color-scheme":"primary"},on:{click:t.onClickNewArticlePage}},[t._v("\n      "+t._s(t.$t("HELP_CENTER.HEADER.NEW_BUTTON"))+"\n    ")])],1)])}),[],!1,null,"a87e9a7e",null).exports,d=a(180),h=(a(31),a(100)),p=a(572),E=a(17),_={mixins:[h.a,p.a],props:{id:{type:Number,required:!0},title:{type:String,default:"",required:!0},author:{type:Object,default:function(){}},category:{type:Object,default:function(){}},views:{type:Number,default:0},status:{type:String,default:"draft",values:["archived","draft","published"]},updatedAt:{type:Number,default:0}},computed:{lastUpdatedAt:function(){return this.dynamicTime(this.updatedAt)},formattedViewCount:function(){return Number(this.views||0).toLocaleString("en")},readableViewCount:function(){return new Intl.NumberFormat("en-US",{notation:"compact",compactDisplay:"short"}).format(this.views||0)},articleAuthorName:function(){return this.author.name},labelColor:function(){switch(this.status){case"archived":return"secondary";case"draft":return"warning";default:return"success"}}},methods:{getCategoryRoute:function(t){var e=this.$route.params,a=e.portalSlug,r=e.locale;return Object(E.c)("accounts/".concat(this.accountId,"/portals/").concat(a,"/").concat(r,"/categories/").concat(t))}}},m=(a(2985),{components:{ArticleItem:Object(l.a)(_,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",{staticClass:"row--article-block"},[a("td",[a("div",{staticClass:"article-content-wrap"},[a("div",{staticClass:"article-block"},[a("router-link",{attrs:{to:t.articleUrl(t.id)}},[a("h6",{staticClass:"sub-block-title text-truncate",attrs:{title:t.title}},[t._v("\n            "+t._s(t.title)+"\n          ")])]),t._v(" "),a("div",{staticClass:"author"},[a("span",{staticClass:"by"},[t._v(t._s(t.$t("HELP_CENTER.TABLE.COLUMNS.BY")))]),t._v(" "),a("span",{staticClass:"name"},[t._v(t._s(t.articleAuthorName))])])],1)])]),t._v(" "),a("td",[a("router-link",{staticClass:"fs-small button clear link secondary",attrs:{to:t.getCategoryRoute(t.category.slug)}},[a("span",{staticClass:"category-link-content text-ellipsis",attrs:{title:t.category.name}},[t._v("\n        "+t._s(t.category.name)+"\n      ")])])],1),t._v(" "),a("td",[a("span",{staticClass:"fs-small",attrs:{title:t.formattedViewCount}},[t._v("\n      "+t._s(t.readableViewCount)+"\n    ")])]),t._v(" "),a("td",[a("div",[a("woot-label",{attrs:{title:t.status,size:"small",variant:"smooth","color-scheme":t.labelColor}})],1)]),t._v(" "),a("td",[a("span",{staticClass:"fs-small"},[t._v("\n      "+t._s(t.lastUpdatedAt)+"\n    ")])])])}),[],!1,null,"405642e0",null).exports,TableFooter:a(602).a},props:{articles:{type:Array,default:function(){}},totalCount:{type:Number,default:0},currentPage:{type:Number,default:1},pageSize:{type:Number,default:25}},methods:{onPageChange:function(t){this.$emit("page-change",t)}}});a(2986);function g(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function f(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?g(Object(a),!0).forEach((function(e){v(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):g(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function v(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}var w={components:{ArticleHeader:u,ArticleTable:Object(l.a)(m,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-container"},[a("table",[a("thead",[a("tr",[a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("HELP_CENTER.TABLE.HEADERS.TITLE")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("HELP_CENTER.TABLE.HEADERS.CATEGORY")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("HELP_CENTER.TABLE.HEADERS.READ_COUNT")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("HELP_CENTER.TABLE.HEADERS.STATUS")))]),t._v(" "),a("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("HELP_CENTER.TABLE.HEADERS.LAST_EDITED")))])])]),t._v(" "),t._m(0),t._v(" "),a("tbody",t._l(t.articles,(function(t){return a("ArticleItem",{key:t.id,attrs:{id:t.id,title:t.title,author:t.author,category:t.category,views:t.views,status:t.status,"updated-at":t.updated_at}})})),1)]),t._v(" "),t.articles.length?a("table-footer",{attrs:{"current-page":t.currentPage,"total-count":t.totalCount,"page-size":t.pageSize},on:{"page-change":t.onPageChange}}):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",{staticClass:"horizontal-line",attrs:{colspan:"100%"}})])}],!1,null,"07380709",null).exports,EmptyState:d.a,Spinner:s.a},data:function(){return{pageNumber:1}},computed:f(f({},Object(r.mapGetters)({articles:"articles/allArticles",categories:"categories/allCategories",uiFlags:"articles/uiFlags",meta:"articles/getMeta",isFetching:"articles/isFetching",currentUserId:"getCurrentUserID"})),{},{selectedCategory:function(){var t=this;return this.categories.find((function(e){return e.slug===t.selectedCategorySlug}))},shouldShowEmptyState:function(){return!this.isFetching&&!this.articles.length},shouldShowLoader:function(){return this.isFetching&&!this.articles.length},selectedPortalSlug:function(){return this.$route.params.portalSlug},selectedCategorySlug:function(){return this.$route.params.categorySlug},articleType:function(){return this.$route.path.split("/").pop()},headerTitle:function(){switch(this.articleType){case"mine":return this.$t("HELP_CENTER.HEADER.TITLES.MINE");case"draft":return this.$t("HELP_CENTER.HEADER.TITLES.DRAFT");case"archived":return this.$t("HELP_CENTER.HEADER.TITLES.ARCHIVED");default:return"show_category"===this.$route.name?this.headerTitleInCategoryView:this.$t("HELP_CENTER.HEADER.TITLES.ALL_ARTICLES")}},status:function(){switch(this.articleType){case"draft":return 0;case"published":return 1;case"archived":return 2;default:return}},author:function(){return"mine"===this.articleType?this.currentUserId:null},headerTitleInCategoryView:function(){return this.categories&&this.categories.length?this.selectedCategory.name:""}}),watch:{$route:function(){this.pageNumber=1,this.fetchArticles()}},mounted:function(){this.fetchArticles()},methods:{newArticlePage:function(){this.$router.push({name:"new_article"})},fetchArticles:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.pageNumber;this.$store.dispatch("articles/index",{pageNumber:e||this.pageNumber,portalSlug:this.$route.params.portalSlug,locale:this.$route.params.locale,status:this.status,author_id:this.author,category_slug:this.selectedCategorySlug})},onPageChange:function(t){this.fetchArticles({pageNumber:t})}}},b=w,C=(a(2987),Object(l.a)(b,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container overflow-auto"},[a("article-header",{attrs:{"header-title":t.headerTitle,count:t.meta.count,"selected-value":"Published"},on:{newArticlePage:t.newArticlePage}}),t._v(" "),a("article-table",{attrs:{articles:t.articles,"current-page":Number(t.meta.currentPage),"total-count":Number(t.meta.count)},on:{"page-change":t.onPageChange}}),t._v(" "),t.shouldShowLoader?a("div",{staticClass:"articles--loader"},[a("spinner"),t._v(" "),a("span",[t._v(t._s(t.$t("HELP_CENTER.TABLE.LOADING_MESSAGE")))])],1):t.shouldShowEmptyState?a("empty-state",{attrs:{title:t.$t("HELP_CENTER.TABLE.NO_ARTICLES")}}):t._e()],1)}),[],!1,null,"64cda496",null));e.default=C.exports}}]);
//# sourceMappingURL=24-825009b42222048242a8.chunk.js.map