(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{2766:function(r,a,e){"use strict";function s(r,a){return Object.keys(a).reduce((function(e,s){s.startsWith(r)&&(e[s.substr(r.length)]=a[s]);return e}),{})}function t(r,a){var e=document.createElement("a");e.href=a;var t=e.search.slice(1).split("&").reduce((function(r,a){var e=a.split("="),s=e[0],t=e[1];return r[s]=decodeURI(t).replace("+"," "),r}),{}),i=[],n=t.ajs_uid,u=t.ajs_event,c=t.ajs_aid;if(n){var d=Array.isArray(t.ajs_uid)?t.ajs_uid[0]:t.ajs_uid,o=s("ajs_trait_",t);i.push(r.identify(d,o))}if(u){var _=Array.isArray(t.ajs_event)?t.ajs_event[0]:t.ajs_event,j=s("ajs_prop_",t);i.push(r.track(_,j))}if(c){var p=Array.isArray(t.ajs_aid)?t.ajs_aid[0]:t.ajs_aid;r.setAnonymousId(p)}return Promise.all(i)}e.r(a),e.d(a,"queryString",(function(){return t}))}}]);
//# sourceMappingURL=queryString-c741bb5c8d5fe78bae18.chunk.js.map