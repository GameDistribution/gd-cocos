window.__require=function e(n,t,d){function o(i,u){if(!t[i]){if(!n[i]){var c=i.split("/");if(c=c[c.length-1],!n[c]){var s="function"==typeof __require&&__require;if(!u&&s)return s(c,!0);if(r)return r(c,!0);throw new Error("Cannot find module '"+i+"'")}}var l=t[i]={exports:{}};n[i][0].call(l.exports,function(e){return o(n[i][1][e]||e)},l,l.exports,e,n,t,d)}return t[i].exports}for(var r="function"==typeof __require&&__require,i=0;i<d.length;i++)o(d[i]);return o}({HelloWorld:[function(e,n,t){"use strict";cc._RF.push(n,"280c3rsZJJKnZ9RqbALVwtK","HelloWorld"),cc.Class({extends:cc.Component,properties:{label:{default:null,type:cc.Label},text:"Hello, World!"},onLoad:function(){window.GD_OPTIONS={gameId:"75c8d40f998d4099832a973d533105cc",loader:{enabled:!0},onEvent:function(e){e.name}},function(e,n,t){var d,o=e.getElementsByTagName(n)[0];e.getElementById(t)||((d=e.createElement(n)).id=t,d.src="https://html5.api.gamedistribution.com/main.min.js",o.parentNode.insertBefore(d,o))}(document,"script","gamedistribution-jssdk")},GDShowAd:function(){"undefined"!=typeof gdsdk&&"undefined"!==gdsdk.showAd&&gdsdk.showAd()},GDShowRewardedAd:function(){"undefined"!=typeof gdsdk&&"undefined"!==gdsdk.showAd&&gdsdk.showAd("rewarded")},update:function(e){}}),cc._RF.pop()},{}]},{},["HelloWorld"]);