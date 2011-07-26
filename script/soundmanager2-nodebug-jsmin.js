/** @license

 SoundManager 2: JavaScript Sound for the Web
 ----------------------------------------------
 http://schillmania.com/projects/soundmanager2/

 Copyright (c) 2007, Scott Schiller. All rights reserved.
 Code provided under the BSD License:
 http://schillmania.com/projects/soundmanager2/license.txt

 V2.97a.20110706+DEV
*/
(function(Y){function M(M,X){function l(b){return function(a){return!this._t||!this._t._a?null:b.call(this,a)}}this.flashVersion=8;this.debugFlash=this.debugMode=!1;this.useConsole=!0;this.waitForWindowLoad=this.consoleOnly=!1;this.nullURL="about:blank";this.allowPolling=!0;this.useFastPolling=!1;this.useMovieStar=!0;this.bgColor="#ffffff";this.useHighPerformance=!1;this.flashPollingInterval=null;this.flashLoadTimeout=1E3;this.wmode=null;this.allowScriptAccess="always";this.useHTML5Audio=this.useFlashBlock=
!1;this.html5Test=/^(probably|maybe)$/i;this.preferFlash=this.useGlobalHTML5Audio=!0;this.requireFlash=!1;this.audioFormats={mp3:{type:['audio/mpeg; codecs="mp3"',"audio/mpeg","audio/mp3","audio/MPA","audio/mpa-robust"],required:!0},mp4:{related:["aac","m4a"],type:['audio/mp4; codecs="mp4a.40.2"',"audio/aac","audio/x-m4a","audio/MP4A-LATM","audio/mpeg4-generic"],required:!0},ogg:{type:["audio/ogg; codecs=vorbis"],required:!1},wav:{type:['audio/wav; codecs="1"',"audio/wav","audio/wave","audio/x-wav"],
required:!1}};this.defaultOptions={autoLoad:!1,stream:!0,autoPlay:!1,loops:1,onid3:null,onload:null,whileloading:null,onplay:null,onpause:null,onresume:null,whileplaying:null,onstop:null,onfailure:null,onfinish:null,onbeforefinish:null,onbeforefinishtime:5E3,onbeforefinishcomplete:null,onjustbeforefinish:null,onjustbeforefinishtime:200,multiShot:!0,multiShotEvents:!1,position:null,pan:0,type:null,usePolicyFile:!1,volume:100};this.flash9Options={isMovieStar:null,usePeakData:!1,useWaveformData:!1,useEQData:!1,
onbufferchange:null,ondataerror:null};this.movieStarOptions={bufferTime:3,serverURL:null,onconnect:null,duration:null};this.version=null;this.versionNumber="V2.97a.20110706+DEV";this.movieURL=null;this.url=M||null;this.altURL=null;this.enabled=this.swfLoaded=!1;this.o=null;this.movieID="sm2-container";this.id=X||"sm2movie";this.swfCSS={swfBox:"sm2-object-box",swfDefault:"movieContainer",swfError:"swf_error",swfTimedout:"swf_timedout",swfLoaded:"swf_loaded",swfUnblocked:"swf_unblocked",sm2Debug:"sm2_debug",
highPerf:"high_performance",flashDebug:"flash_debug"};this.oMC=null;this.sounds={};this.soundIDs=[];this.muted=!1;this.debugID="soundmanager-debug";this.debugURLParam=/([#?&])debug=1/i;this.didFlashBlock=this.specialWmodeCase=!1;this.filePattern=null;this.filePatterns={flash8:/\.mp3(\?.*)?$/i,flash9:/\.mp3(\?.*)?$/i};this.baseMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamMimeTypes=/^\s*audio\/(?:x-)?(?:mp(?:eg|3))\s*(?:$|;)/i;this.netStreamTypes=["aac","flv","mov","mp4","m4v",
"f4v","m4a","mp4v","3gp","3g2"];this.netStreamPattern=RegExp("\\.("+this.netStreamTypes.join("|")+")(\\?.*)?$","i");this.mimePattern=this.baseMimeTypes;this.features={buffering:!1,peakData:!1,waveformData:!1,eqData:!1,movieStar:!1};this.sandbox={};this.hasHTML5=typeof Audio!=="undefined"&&typeof(new Audio).canPlayType!=="undefined";this.html5={usingFlash:null};this.flash={};this.ignoreFlash=this.html5Only=!1;var pa,b=this,F,o=navigator.userAgent,h=Y,Z=h.location.href.toString(),i=this.flashVersion,
g=document,$,N,r=[],G=!1,H=!1,m=!1,s=!1,qa=!1,I,n,aa,u,y,O,ra,ba,v,P,z,ca,da,Q,A,sa,ea,ta,R,ua,J=null,fa=null,w,ga,B,S,T,ha,j,U=!1,ia=!1,va,wa,x=null,xa,V,K,t,ja,ya,k,Ea=Array.prototype.slice,L=!1,ka,C,za,p,Aa=o.match(/(ipad|iphone|ipod)/i),Fa=o.match(/(mobile|pre\/|xoom)/i)||Aa,q=o.match(/msie/i),Ga=o.match(/webkit/i),D=o.match(/safari/i)&&!o.match(/chrome/i),Ha=o.match(/opera/i),la=!Z.match(/usehtml5audio/i)&&!Z.match(/sm2\-ignorebadua/i)&&D&&o.match(/OS X 10_6_([3-7])/i),ma=typeof g.hasFocus!==
"undefined"?g.hasFocus():null,E=D&&typeof g.hasFocus==="undefined",Ba=!E,Ca=/(mp3|mp4|mpa)/i,na=g.location?g.location.protocol.match(/http/i):null,Da=!na?"http:":"";this.useAltURL=!na;this._global_a=null;if(Fa&&(b.useHTML5Audio=!0,b.preferFlash=!1,Aa))b.ignoreFlash=!0,L=b.useGlobalHTML5Audio=!0;this.supported=this.ok=function(){return x?m&&!s:b.useHTML5Audio&&b.hasHTML5};this.getMovie=function(b){return q?h[b]:D?F(b)||g[b]:F(b)};this.createSound=function(c){function a(){e=S(e);b.sounds[d.id]=new pa(d);
b.soundIDs.push(d.id);return b.sounds[d.id]}var e=null,f=null,d=null;if(!m||!b.ok())return ha("soundManager.createSound(): "+w(!m?"notReady":"notOK")),!1;arguments.length===2&&(c={id:arguments[0],url:arguments[1]});d=e=n(c);if(j(d.id,!0))return b.sounds[d.id];if(V(d))f=a(),f._setup_html5(d);else{if(i>8&&b.useMovieStar){if(d.isMovieStar===null)d.isMovieStar=d.serverURL||d.type&&d.type.match(b.netStreamPattern)||d.url.match(b.netStreamPattern)?!0:!1;if(d.isMovieStar&&d.usePeakData)d.usePeakData=!1}d=
T(d,"soundManager.createSound(): ");f=a();if(i===8)b.o._createSound(d.id,d.onjustbeforefinishtime,d.loops||1,d.usePolicyFile);else if(b.o._createSound(d.id,d.url,d.onjustbeforefinishtime,d.usePeakData,d.useWaveformData,d.useEQData,d.isMovieStar,d.isMovieStar?d.bufferTime:!1,d.loops||1,d.serverURL,d.duration||null,d.autoPlay,!0,d.autoLoad,d.usePolicyFile),!d.serverURL)f.connected=!0,d.onconnect&&d.onconnect.apply(f);!d.serverURL&&(d.autoLoad||d.autoPlay)&&f.load(d)}!d.serverURL&&d.autoPlay&&f.play();
return f};this.destroySound=function(c,a){if(!j(c))return!1;var e=b.sounds[c],f;e._iO={};e.stop();e.unload();for(f=0;f<b.soundIDs.length;f++)if(b.soundIDs[f]===c){b.soundIDs.splice(f,1);break}a||e.destruct(!0);delete b.sounds[c];return!0};this.load=function(c,a){return!j(c)?!1:b.sounds[c].load(a)};this.unload=function(c){return!j(c)?!1:b.sounds[c].unload()};this.start=this.play=function(c,a){return!m||!b.ok()?(ha("soundManager.play(): "+w(!m?"notReady":"notOK")),!1):!j(c)?(a instanceof Object||(a=
{url:a}),a&&a.url?(a.id=c,b.createSound(a).play()):!1):b.sounds[c].play(a)};this.setPosition=function(c,a){return!j(c)?!1:b.sounds[c].setPosition(a)};this.stop=function(c){return!j(c)?!1:b.sounds[c].stop()};this.stopAll=function(){for(var c in b.sounds)b.sounds.hasOwnProperty(c)&&b.sounds[c].stop()};this.pause=function(c){return!j(c)?!1:b.sounds[c].pause()};this.pauseAll=function(){var c;for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].pause()};this.resume=function(c){return!j(c)?!1:b.sounds[c].resume()};
this.resumeAll=function(){var c;for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].resume()};this.togglePause=function(c){return!j(c)?!1:b.sounds[c].togglePause()};this.setPan=function(c,a){return!j(c)?!1:b.sounds[c].setPan(a)};this.setVolume=function(c,a){return!j(c)?!1:b.sounds[c].setVolume(a)};this.mute=function(c){var a=0;typeof c!=="string"&&(c=null);if(c)return!j(c)?!1:b.sounds[c].mute();else{for(a=b.soundIDs.length;a--;)b.sounds[b.soundIDs[a]].mute();b.muted=!0}return!0};this.muteAll=function(){b.mute()};
this.unmute=function(c){typeof c!=="string"&&(c=null);if(c)return!j(c)?!1:b.sounds[c].unmute();else{for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].unmute();b.muted=!1}return!0};this.unmuteAll=function(){b.unmute()};this.toggleMute=function(c){return!j(c)?!1:b.sounds[c].toggleMute()};this.getMemoryUse=function(){var c=0;b.o&&i!==8&&(c=parseInt(b.o._getMemoryUse(),10));return c};this.disable=function(c){var a;typeof c==="undefined"&&(c=!1);if(s)return!1;s=!0;for(a=b.soundIDs.length;a--;)ta(b.sounds[b.soundIDs[a]]);
I(c);k.remove(h,"load",y);return!0};this.canPlayMIME=function(c){var a;b.hasHTML5&&(a=K({type:c}));return!x||a?a:c?c.match(b.mimePattern)?!0:!1:null};this.canPlayURL=function(c){var a;b.hasHTML5&&(a=K({url:c}));return!x||a?a:c?c.match(b.filePattern)?!0:!1:null};this.canPlayLink=function(c){return typeof c.type!=="undefined"&&c.type&&b.canPlayMIME(c.type)?!0:b.canPlayURL(c.href)};this.getSoundById=function(c){if(!c)throw Error("soundManager.getSoundById(): sID is null/undefined");return b.sounds[c]};
this.onready=function(b,a){if(b&&b instanceof Function)return a||(a=h),aa("onready",b,a),u(),!0;else throw w("needFunction","onready");};this.ontimeout=function(b,a){if(b&&b instanceof Function)return a||(a=h),aa("ontimeout",b,a),u({type:"ontimeout"}),!0;else throw w("needFunction","ontimeout");};this._wD=this._writeDebug=function(){return!0};this._debug=function(){};this.reboot=function(){var c,a;for(c=b.soundIDs.length;c--;)b.sounds[b.soundIDs[c]].destruct();try{if(q)fa=b.o.innerHTML;J=b.o.parentNode.removeChild(b.o)}catch(e){}fa=
J=null;b.enabled=m=U=ia=G=H=s=b.swfLoaded=!1;b.soundIDs=b.sounds=[];b.o=null;for(c in r)if(r.hasOwnProperty(c))for(a=r[c].length;a--;)r[c][a].fired=!1;h.setTimeout(function(){b.beginDelayedInit()},20)};this.getMoviePercent=function(){return b.o&&typeof b.o.PercentLoaded!=="undefined"?b.o.PercentLoaded():null};this.beginDelayedInit=function(){qa=!0;z();setTimeout(function(){if(ia)return!1;Q();P();return ia=!0},20);O()};this.destruct=function(){b.disable(!0)};p={abort:l(function(){}),canplay:l(function(){if(this._t._html5_canplay)return!0;
this._t._html5_canplay=!0;this._t._onbufferchange(0);var b=!isNaN(this._t.position)?this._t.position/1E3:null;if(this._t.position&&this.currentTime!==b)try{this.currentTime=b}catch(a){}}),load:l(function(){this._t.loaded||(this._t._onbufferchange(0),this._t._whileloading(this._t.bytesTotal,this._t.bytesTotal,this._t._get_html5_duration()),this._t._onload(!0))}),emptied:l(function(){}),ended:l(function(){this._t._onfinish()}),error:l(function(){this._t._onload(!1)}),loadeddata:l(function(){var b=this._t,
a=b.bytesTotal||1;if(!b._loaded&&!D)b.duration=b._get_html5_duration(),b._whileloading(a,a,b._get_html5_duration()),b._onload(!0)}),loadedmetadata:l(function(){}),loadstart:l(function(){this._t._onbufferchange(1)}),play:l(function(){this._t._onbufferchange(0)}),playing:l(function(){this._t._onbufferchange(0)}),progress:l(function(b){if(this._t.loaded)return!1;var a,e=0,f=b.type==="progress",d=b.target.buffered;a=b.loaded||0;var oa=b.total||1;if(d&&d.length){for(a=d.length;a--;)e=d.end(a)-d.start(a);
a=e/b.target.duration;f&&isNaN(a)}isNaN(a)||(this._t._onbufferchange(0),this._t._whileloading(a,oa,this._t._get_html5_duration()),a&&oa&&a===oa&&p.load.call(this,b))}),ratechange:l(function(){}),suspend:l(function(b){p.progress.call(this,b)}),stalled:l(function(){}),timeupdate:l(function(){this._t._onTimer()}),waiting:l(function(){this._t._onbufferchange(1)})};pa=function(c){var a=this,e,f,d;this.sID=c.id;this.url=c.url;this._iO=this.instanceOptions=this.options=n(c);this.pan=this.options.pan;this.volume=
this.options.volume;this._lastURL=null;this.isHTML5=!1;this._a=null;this.id3={};this._debug=function(){};this.load=function(c){var d=null;if(typeof c!=="undefined")a._iO=n(c,a.options),a.instanceOptions=a._iO;else if(c=a.options,a._iO=c,a.instanceOptions=a._iO,a._lastURL&&a._lastURL!==a.url)a._iO.url=a.url,a.url=null;if(!a._iO.url)a._iO.url=a.url;if(a._iO.url===a.url&&a.readyState!==0&&a.readyState!==2)return a;a._lastURL=a.url;a.loaded=!1;a.readyState=1;a.playState=0;if(V(a._iO)){if(d=a._setup_html5(a._iO),
!d._called_load)a._html5_canplay=!1,d.load(),d._called_load=!0,a._iO.autoPlay&&a.play()}else try{a.isHTML5=!1,a._iO=T(S(a._iO)),i===8?b.o._load(a.sID,a._iO.url,a._iO.stream,a._iO.autoPlay,a._iO.whileloading?1:0,a._iO.loops||1,a._iO.usePolicyFile):b.o._load(a.sID,a._iO.url,a._iO.stream?!0:!1,a._iO.autoPlay?!0:!1,a._iO.loops||1,a._iO.autoLoad?!0:!1,a._iO.usePolicyFile)}catch(e){A({type:"SMSOUND_LOAD_JS_EXCEPTION",fatal:!0})}return a};this.unload=function(){if(a.readyState!==0){if(a.isHTML5){if(f(),
a._a)a._a.pause(),a._a.src=""}else i===8?b.o._unload(a.sID,b.nullURL):b.o._unload(a.sID);e()}return a};this.destruct=function(c){if(a.isHTML5){if(f(),a._a)a._a.pause(),a._a.src="",L||a._remove_html5_events(),a._a._t=null,a._a=null}else a._iO.onfailure=null,b.o._destroySound(a.sID);c||b.destroySound(a.sID,!0)};this.start=this.play=function(c,W){var e,W=W===void 0?!0:W;c||(c={});a._iO=n(c,a._iO);a._iO=n(a._iO,a.options);a.instanceOptions=a._iO;if(a._iO.serverURL&&!a.connected)return a.getAutoPlay()||
a.setAutoPlay(!0),a;V(a._iO)&&(a._setup_html5(a._iO),d());if(a.playState===1&&!a.paused&&(e=a._iO.multiShot,!e))return a;if(!a.loaded)if(a.readyState===0){if(!a.isHTML5)a._iO.autoPlay=!0;a.load(a._iO)}else if(a.readyState===2)return a;if(!a.isHTML5&&i===9&&a.position>0&&a.position===a.duration)a._iO.position=0;if(a.paused&&a.position&&a.position>0)a.resume();else{a.playState=1;a.paused=!1;(!a.instanceCount||a._iO.multiShotEvents||!a.isHTML5&&i>8&&!a.getAutoPlay())&&a.instanceCount++;a.position=typeof a._iO.position!==
"undefined"&&!isNaN(a._iO.position)?a._iO.position:0;if(!a.isHTML5)a._iO=T(S(a._iO));if(a._iO.onplay&&W)a._iO.onplay.apply(a),a._onplay_called=!0;a.setVolume(a._iO.volume,!0);a.setPan(a._iO.pan,!0);a.isHTML5?(d(),e=a._setup_html5(),a.setPosition(a._iO.position),e.play()):b.o._start(a.sID,a._iO.loops||1,i===9?a._iO.position:a._iO.position/1E3)}return a};this.stop=function(c){if(a.playState===1){a._onbufferchange(0);a.resetOnPosition(0);if(!a.isHTML5)a.playState=0;a.paused=!1;a._iO.onstop&&a._iO.onstop.apply(a);
if(a.isHTML5){if(a._a)a.setPosition(0),a._a.pause(),a.playState=0,a._onTimer(),f(),a.unload()}else b.o._stop(a.sID,c),a._iO.serverURL&&a.unload();a.instanceCount=0;a._iO={}}return a};this.setAutoPlay=function(c){a._iO.autoPlay=c;a.isHTML5||(b.o._setAutoPlay(a.sID,c),c&&!a.instanceCount&&a.readyState===1&&a.instanceCount++)};this.getAutoPlay=function(){return a._iO.autoPlay};this.setPosition=function(c){c===void 0&&(c=0);var d=a.isHTML5?Math.max(c,0):Math.min(a.duration||a._iO.duration,Math.max(c,
0));a.position=d;c=a.position/1E3;a.resetOnPosition(a.position);a._iO.position=d;if(a.isHTML5){if(a._a&&a._html5_canplay&&a._a.currentTime!==c)try{a._a.currentTime=c,(a.playState===0||a.paused)&&a._a.pause()}catch(e){}}else c=i===9?a.position:c,a.readyState&&a.readyState!==2&&b.o._setPosition(a.sID,c,a.paused||!a.playState);a.isHTML5&&a.paused&&a._onTimer(!0);return a};this.pause=function(c){if(a.paused||a.playState===0&&a.readyState!==1)return a;a.paused=!0;a.isHTML5?(a._setup_html5().pause(),f()):
(c||c===void 0)&&b.o._pause(a.sID);a._iO.onpause&&a._iO.onpause.apply(a);return a};this.resume=function(){if(!a.paused)return a;a.paused=!1;a.playState=1;a.isHTML5?(a._setup_html5().play(),d()):(a._iO.isMovieStar&&a.setPosition(a.position),b.o._pause(a.sID));!a._onplay_called&&a._iO.onplay?(a._iO.onplay.apply(a),a._onplay_called=!0):a._iO.onresume&&a._iO.onresume.apply(a);return a};this.togglePause=function(){if(a.playState===0)return a.play({position:i===9&&!a.isHTML5?a.position:a.position/1E3}),
a;a.paused?a.resume():a.pause();return a};this.setPan=function(c,d){typeof c==="undefined"&&(c=0);typeof d==="undefined"&&(d=!1);a.isHTML5||b.o._setPan(a.sID,c);a._iO.pan=c;if(!d)a.pan=c,a.options.pan=c;return a};this.setVolume=function(c,d){typeof c==="undefined"&&(c=100);typeof d==="undefined"&&(d=!1);if(a.isHTML5){if(a._a)a._a.volume=Math.max(0,Math.min(1,c/100))}else b.o._setVolume(a.sID,b.muted&&!a.muted||a.muted?0:c);a._iO.volume=c;if(!d)a.volume=c,a.options.volume=c;return a};this.mute=function(){a.muted=
!0;if(a.isHTML5){if(a._a)a._a.muted=!0}else b.o._setVolume(a.sID,0);return a};this.unmute=function(){a.muted=!1;var c=typeof a._iO.volume!=="undefined";if(a.isHTML5){if(a._a)a._a.muted=!1}else b.o._setVolume(a.sID,c?a._iO.volume:a.options.volume);return a};this.toggleMute=function(){return a.muted?a.unmute():a.mute()};this.onposition=function(b,c,d){a._onPositionItems.push({position:b,method:c,scope:typeof d!=="undefined"?d:a,fired:!1});return a};this.processOnPosition=function(){var c,d;c=a._onPositionItems.length;
if(!c||!a.playState||a._onPositionFired>=c)return!1;for(;c--;)if(d=a._onPositionItems[c],!d.fired&&a.position>=d.position)d.method.apply(d.scope,[d.position]),d.fired=!0,b._onPositionFired++;return!0};this.resetOnPosition=function(c){var d,e;d=a._onPositionItems.length;if(!d)return!1;for(;d--;)if(e=a._onPositionItems[d],e.fired&&c<=e.position)e.fired=!1,b._onPositionFired--;return!0};d=function(){a.isHTML5&&va(a)};f=function(){a.isHTML5&&wa(a)};e=function(){a._onPositionItems=[];a._onPositionFired=
0;a._hasTimer=null;a._onplay_called=!1;a._a=null;a._html5_canplay=!1;a.bytesLoaded=null;a.bytesTotal=null;a.position=null;a.duration=a._iO&&a._iO.duration?a._iO.duration:null;a.durationEstimate=null;a.failures=0;a.loaded=!1;a.playState=0;a.paused=!1;a.readyState=0;a.muted=!1;a.didBeforeFinish=!1;a.didJustBeforeFinish=!1;a.isBuffering=!1;a.instanceOptions={};a.instanceCount=0;a.peakData={left:0,right:0};a.waveformData={left:[],right:[]};a.eqData=[];a.eqData.left=[];a.eqData.right=[]};e();this._onTimer=
function(b){var c={};if(a._hasTimer||b)return a._a&&(b||(a.playState>0||a.readyState===1)&&!a.paused)?(a.duration=a._get_html5_duration(),a.durationEstimate=a.duration,b=a._a.currentTime?a._a.currentTime*1E3:0,a._whileplaying(b,c,c,c,c),!0):!1};this._get_html5_duration=function(){var b=a._a?a._a.duration*1E3:a._iO?a._iO.duration:void 0;return b&&!isNaN(b)&&b!==Infinity?b:a._iO?a._iO.duration:null};this._setup_html5=function(c){var c=n(a._iO,c),d=L?b._global_a:a._a;decodeURI(c.url);var f=d&&d._t?d._t.instanceOptions:
null;if(d){if(d._t&&f.url===c.url&&(!a._lastURL||a._lastURL===f.url))return d;L&&d._t&&d._t.playState&&c.url!==f.url&&d._t.stop();e();d.src=c.url;a.url=c.url;a._lastURL=c.url;d._called_load=!1}else if(d=new Audio(c.url),d._called_load=!1,L)b._global_a=d;a.isHTML5=!0;a._a=d;d._t=a;a._add_html5_events();d.loop=c.loops>1?"loop":"";c.autoLoad||c.autoPlay?(d.autobuffer="auto",d.preload="auto",a.load(),d._called_load=!0):(d.autobuffer=!1,d.preload="none");d.loop=c.loops>1?"loop":"";return d};this._add_html5_events=
function(){if(a._a._added_events)return!1;var b;a._a._added_events=!0;for(b in p)p.hasOwnProperty(b)&&a._a&&a._a.addEventListener(b,p[b],!1);return!0};this._remove_html5_events=function(){var b;a._a._added_events=!1;for(b in p)p.hasOwnProperty(b)&&a._a&&a._a.removeEventListener(b,p[b],!1)};this._onload=function(b){b=b?!0:!1;a.loaded=b;a.readyState=b?3:2;a._onbufferchange(0);a._iO.onload&&a._iO.onload.apply(a,[b]);return!0};this._onbufferchange=function(b){if(a.playState===0)return!1;if(b&&a.isBuffering||
!b&&!a.isBuffering)return!1;a.isBuffering=b===1;a._iO.onbufferchange&&a._iO.onbufferchange.apply(a);return!0};this._onfailure=function(b,c,d){a.failures++;if(a._iO.onfailure&&a.failures===1)a._iO.onfailure(a,b,c,d)};this._onbeforefinish=function(){if(!a.didBeforeFinish)a.didBeforeFinish=!0,a._iO.onbeforefinish&&a._iO.onbeforefinish.apply(a)};this._onjustbeforefinish=function(){if(!a.didJustBeforeFinish)a.didJustBeforeFinish=!0,a._iO.onjustbeforefinish&&a._iO.onjustbeforefinish.apply(a)};this._onfinish=
function(){var b=a._iO.onfinish;a._onbufferchange(0);a.resetOnPosition(0);a._iO.onbeforefinishcomplete&&a._iO.onbeforefinishcomplete.apply(a);a.didBeforeFinish=!1;a.didJustBeforeFinish=!1;if(a.instanceCount){a.instanceCount--;if(!a.instanceCount)a.playState=0,a.paused=!1,a.instanceCount=0,a.instanceOptions={},a._iO={},f();(!a.instanceCount||a._iO.multiShotEvents)&&b&&b.apply(a)}};this._whileloading=function(b,c,d,e){a.bytesLoaded=b;a.bytesTotal=c;a.duration=Math.floor(d);a.bufferLength=e;if(a._iO.isMovieStar)a.durationEstimate=
a.duration;else if(a.durationEstimate=a._iO.duration?a.duration>a._iO.duration?a.duration:a._iO.duration:parseInt(a.bytesTotal/a.bytesLoaded*a.duration,10),a.durationEstimate===void 0)a.durationEstimate=a.duration;a.readyState!==3&&a._iO.whileloading&&a._iO.whileloading.apply(a)};this._whileplaying=function(c,d,e,f,g){if(isNaN(c)||c===null)return!1;a.position=c;a.processOnPosition();if(!a.isHTML5&&i>8){if(a._iO.usePeakData&&typeof d!=="undefined"&&d)a.peakData={left:d.leftPeak,right:d.rightPeak};
if(a._iO.useWaveformData&&typeof e!=="undefined"&&e)a.waveformData={left:e.split(","),right:f.split(",")};if(a._iO.useEQData&&typeof g!=="undefined"&&g&&g.leftEQ&&(c=g.leftEQ.split(","),a.eqData=c,a.eqData.left=c,typeof g.rightEQ!=="undefined"&&g.rightEQ))a.eqData.right=g.rightEQ.split(",")}a.playState===1&&(!a.isHTML5&&b.flashVersion===8&&!a.position&&a.isBuffering&&a._onbufferchange(0),a._iO.whileplaying&&a._iO.whileplaying.apply(a),(a.loaded||!a.loaded&&a._iO.isMovieStar)&&a._iO.onbeforefinish&&
a._iO.onbeforefinishtime&&!a.didBeforeFinish&&a.duration-a.position<=a._iO.onbeforefinishtime&&a._onbeforefinish());return!0};this._onid3=function(b,c){var d=[],e,f;e=0;for(f=b.length;e<f;e++)d[b[e]]=c[e];a.id3=n(a.id3,d);a._iO.onid3&&a._iO.onid3.apply(a)};this._onconnect=function(b){b=b===1;if(a.connected=b)a.failures=0,j(a.sID)&&(a.getAutoPlay()?a.play(void 0,a.getAutoPlay()):a._iO.autoLoad&&a.load()),a._iO.onconnect&&a._iO.onconnect.apply(a,[b])};this._ondataerror=function(){a.playState>0&&a._iO.ondataerror&&
a._iO.ondataerror.apply(a)}};da=function(){return g.body||g._docElement||g.getElementsByTagName("div")[0]||9999};F=function(b){return g.getElementById(b)};n=function(c,a){var e={},f,d;for(f in c)c.hasOwnProperty(f)&&(e[f]=c[f]);f=typeof a==="undefined"?b.defaultOptions:a;for(d in f)f.hasOwnProperty(d)&&typeof e[d]==="undefined"&&(e[d]=f[d]);return e};k=function(){function b(a){var a=Ea.call(a),c=a.length;e?(a[1]="on"+a[1],c>3&&a.pop()):c===3&&a.push(!1);return a}function a(a,b){var c=a.shift(),g=
[f[b]];if(e)c[g](a[0],a[1]);else c[g].apply(c,a)}var e=h.attachEvent,f={add:e?"attachEvent":"addEventListener",remove:e?"detachEvent":"removeEventListener"};return{add:function(){a(b(arguments),"add")},remove:function(){a(b(arguments),"remove")}}}();V=function(c){return!c.serverURL&&(c.type?K({type:c.type}):K({url:c.url})||b.html5Only)};K=function(c){function a(a){return b.preferFlash&&C()&&!b.ignoreFlash&&typeof b.flash[a]!=="undefined"&&b.flash[a]}if(!b.useHTML5Audio||!b.hasHTML5)return!1;var e=
c.url||null,c=c.type||null,f=b.audioFormats,d;if(c&&b.html5[c]!=="undefined")return b.html5[c]&&!a(c);if(!t){t=[];for(d in f)f.hasOwnProperty(d)&&(t.push(d),f[d].related&&(t=t.concat(f[d].related)));t=RegExp("\\.("+t.join("|")+")(\\?.*)?$","i")}d=e?e.toLowerCase().match(t):null;if(!d||!d.length)if(c)e=c.indexOf(";"),d=(e!==-1?c.substr(0,e):c).substr(6);else return!1;else d=d[1];return d&&typeof b.html5[d]!=="undefined"?b.html5[d]&&!a(d):(c="audio/"+d,e=b.html5.canPlayType({type:c}),(b.html5[d]=e)&&
b.html5[c]&&!a(c))};ya=function(){function c(c){var d,e,f=!1;if(!a||typeof a.canPlayType!=="function")return!1;if(c instanceof Array){d=0;for(e=c.length;d<e&&!f;d++)if(b.html5[c[d]]||a.canPlayType(c[d]).match(b.html5Test))f=!0,b.html5[c[d]]=!0,b.flash[c[d]]=!(!b.preferFlash||!c[d].match(Ca));return f}else return c=a&&typeof a.canPlayType==="function"?a.canPlayType(c):!1,!(!c||!c.match(b.html5Test))}if(!b.useHTML5Audio||typeof Audio==="undefined")return!1;var a=typeof Audio!=="undefined"?Ha?new Audio(null):
new Audio:null,e,f={},d,g;d=b.audioFormats;for(e in d)if(d.hasOwnProperty(e)&&(f[e]=c(d[e].type),f["audio/"+e]=f[e],b.flash[e]=b.preferFlash&&!b.ignoreFlash&&e.match(Ca)?!0:!1,d[e]&&d[e].related))for(g=d[e].related.length;g--;)f["audio/"+d[e].related[g]]=f[e],b.html5[d[e].related[g]]=f[e],b.flash[d[e].related[g]]=f[e];f.canPlayType=a?c:null;b.html5=n(b.html5,f);return!0};w=function(){};S=function(b){if(i===8&&b.loops>1&&b.stream)b.stream=!1;return b};T=function(b){if(b&&!b.usePolicyFile&&(b.onid3||
b.usePeakData||b.useWaveformData||b.useEQData))b.usePolicyFile=!0;return b};ha=function(b){typeof console!=="undefined"&&typeof console.warn!=="undefined"&&console.warn(b)};$=function(){return!1};ta=function(b){for(var a in b)b.hasOwnProperty(a)&&typeof b[a]==="function"&&(b[a]=$)};R=function(c){typeof c==="undefined"&&(c=!1);(s||c)&&b.disable(c)};ua=function(c){var a=null;if(c)if(c.match(/\.swf(\?.*)?$/i)){if(a=c.substr(c.toLowerCase().lastIndexOf(".swf?")+4))return c}else c.lastIndexOf("/")!==c.length-
1&&(c+="/");return(c&&c.lastIndexOf("/")!==-1?c.substr(0,c.lastIndexOf("/")+1):"./")+b.movieURL};ba=function(){if(i!==8&&i!==9)b.flashVersion=8;var c=b.debugMode||b.debugFlash?"_debug.swf":".swf";if(b.useHTML5Audio&&!b.html5Only&&b.audioFormats.mp4.required&&b.flashVersion<9)b.flashVersion=9;i=b.flashVersion;b.version=b.versionNumber+(b.html5Only?" (HTML5-only mode)":i===9?" (AS3/Flash 9)":" (AS2/Flash 8)");if(i>8)b.defaultOptions=n(b.defaultOptions,b.flash9Options),b.features.buffering=!0;i>8&&b.useMovieStar?
(b.defaultOptions=n(b.defaultOptions,b.movieStarOptions),b.filePatterns.flash9=RegExp("\\.(mp3|"+b.netStreamTypes.join("|")+")(\\?.*)?$","i"),b.mimePattern=b.netStreamMimeTypes,b.features.movieStar=!0):(b.useMovieStar=!1,b.features.movieStar=!1);b.filePattern=b.filePatterns[i!==8?"flash9":"flash8"];b.movieURL=(i===8?"soundmanager2.swf":"soundmanager2_flash9.swf").replace(".swf",c);b.features.peakData=b.features.waveformData=b.features.eqData=i>8};sa=function(c,a){if(!b.o||!b.allowPolling)return!1;
b.o._setPolling(c,a)};ea=function(){if(b.debugURLParam.test(Z))b.debugMode=!0};j=this.getSoundById;B=function(){var c=[];b.debugMode&&c.push(b.swfCSS.sm2Debug);b.debugFlash&&c.push(b.swfCSS.flashDebug);b.useHighPerformance&&c.push(b.swfCSS.highPerf);return c.join(" ")};ga=function(){w("fbHandler");var c=b.getMoviePercent(),a=b.swfCSS,e={type:"FLASHBLOCK"};if(b.ok()){if(b.oMC)b.oMC.className=[B(),a.swfDefault,a.swfLoaded+(b.didFlashBlock?" "+a.swfUnblocked:"")].join(" ")}else{if(x)b.oMC.className=
B()+" "+a.swfDefault+" "+(c===null?a.swfTimedout:a.swfError);b.didFlashBlock=!0;u({type:"ontimeout",ignoreInit:!0,error:e});A(e)}};aa=function(b,a,e){typeof r[b]==="undefined"&&(r[b]=[]);r[b].push({method:a,scope:e||null,fired:!1})};u=function(c){c||(c={type:"onready"});if(!m&&c&&!c.ignoreInit)return!1;if(c.type==="ontimeout"&&b.ok())return!1;var a={success:c&&c.ignoreInit?b.ok():!s},e=c&&c.type?r[c.type]||[]:[],f=[],d,a=[a],g=x&&b.useFlashBlock&&!b.ok();if(c.error)a[0].error=c.error;c=0;for(d=e.length;c<
d;c++)e[c].fired!==!0&&f.push(e[c]);if(f.length){c=0;for(d=f.length;c<d;c++)if(f[c].scope?f[c].method.apply(f[c].scope,a):f[c].method.apply(this,a),!g)f[c].fired=!0}return!0};y=function(){h.setTimeout(function(){b.useFlashBlock&&ga();u();b.onload instanceof Function&&b.onload.apply(h);b.waitForWindowLoad&&k.add(h,"load",y)},1)};C=function(){if(ka!==void 0)return ka;var b=!1,a=navigator,e=a.plugins,f,d=h.ActiveXObject;if(e&&e.length)(a=a.mimeTypes)&&a["application/x-shockwave-flash"]&&a["application/x-shockwave-flash"].enabledPlugin&&
a["application/x-shockwave-flash"].enabledPlugin.description&&(b=!0);else if(typeof d!=="undefined"){try{f=new d("ShockwaveFlash.ShockwaveFlash")}catch(g){}b=!!f}return ka=b};xa=function(){var c,a;if(o.match(/iphone os (1|2|3_0|3_1)/i)){b.hasHTML5=!1;b.html5Only=!0;if(b.oMC)b.oMC.style.display="none";return!1}if(b.useHTML5Audio){if(!b.html5||!b.html5.canPlayType)return b.hasHTML5=!1,!0;else b.hasHTML5=!0;if(la&&C())return!0}else return!0;for(a in b.audioFormats)if(b.audioFormats.hasOwnProperty(a)&&
(b.audioFormats[a].required&&!b.html5.canPlayType(b.audioFormats[a].type)||b.flash[a]||b.flash[b.audioFormats[a].type]))c=!0;b.ignoreFlash&&(c=!1);b.html5Only=b.hasHTML5&&(b.useHTML5Audio&&!c&&!b.requireFlash||!C());return!b.html5Only};va=function(b){if(!b._hasTimer)b._hasTimer=!0};wa=function(b){if(b._hasTimer)b._hasTimer=!1};A=function(c){c=typeof c!=="undefined"?c:{};b.onerror instanceof Function&&b.onerror.apply(h,[{type:typeof c.type!=="undefined"?c.type:null}]);typeof c.fatal!=="undefined"&&
c.fatal&&b.disable()};za=function(){if(!la||!C())return!1;var c=b.audioFormats,a,e;for(e in c)if(c.hasOwnProperty(e)&&(e==="mp3"||e==="mp4"))if(b.html5[e]=!1,c[e]&&c[e].related)for(a=c[e].related.length;a--;)b.html5[c[e].related[a]]=!1};this._setSandboxType=function(){};this._externalInterfaceOK=function(){if(b.swfLoaded)return!1;(new Date).getTime();b.swfLoaded=!0;E=!1;la&&za();q?setTimeout(N,100):N()};Q=function(c,a){function e(a,b){return'<param name="'+a+'" value="'+b+'" />'}if(G&&H)return!1;
if(b.html5Only)return ba(),b.oMC=F(b.movieID),N(),H=G=!0,!1;var f=a||b.url,d=b.altURL||f,h;h=da();var i,l,j=B(),k,m=null,m=(m=g.getElementsByTagName("html")[0])&&m.dir&&m.dir.match(/rtl/i),c=typeof c==="undefined"?b.id:c;ba();b.url=ua(na?f:d);a=b.url;b.wmode=!b.wmode&&b.useHighPerformance&&!b.useMovieStar?"transparent":b.wmode;if(b.wmode!==null&&(o.match(/msie 8/i)||!q&&!b.useHighPerformance)&&navigator.platform.match(/win32|win64/i))b.specialWmodeCase=!0,b.wmode=null;h={name:c,id:c,src:a,width:"auto",
height:"auto",quality:"high",allowScriptAccess:b.allowScriptAccess,bgcolor:b.bgColor,pluginspage:Da+"//www.macromedia.com/go/getflashplayer",type:"application/x-shockwave-flash",wmode:b.wmode,hasPriority:"true"};if(b.debugFlash)h.FlashVars="debug=1";b.wmode||delete h.wmode;if(q)f=g.createElement("div"),l=['<object id="'+c+'" data="'+a+'" type="'+h.type+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="'+Da+'//download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0" width="'+
h.width+'" height="'+h.height+'">',e("movie",a),e("AllowScriptAccess",b.allowScriptAccess),e("quality",h.quality),b.wmode?e("wmode",b.wmode):"",e("bgcolor",b.bgColor),e("hasPriority","true"),b.debugFlash?e("FlashVars",h.FlashVars):"","</object>"].join("");else for(i in f=g.createElement("embed"),h)h.hasOwnProperty(i)&&f.setAttribute(i,h[i]);ea();j=B();if(h=da())if(b.oMC=F(b.movieID)||g.createElement("div"),b.oMC.id){k=b.oMC.className;b.oMC.className=(k?k+" ":b.swfCSS.swfDefault)+(j?" "+j:"");b.oMC.appendChild(f);
if(q)i=b.oMC.appendChild(g.createElement("div")),i.className=b.swfCSS.swfBox,i.innerHTML=l;H=!0}else{b.oMC.id=b.movieID;b.oMC.className=b.swfCSS.swfDefault+" "+j;i=j=null;if(!b.useFlashBlock)if(b.useHighPerformance)j={position:"fixed",width:"8px",height:"8px",bottom:"0px",left:"0px",overflow:"hidden"};else if(j={position:"absolute",width:"6px",height:"6px",top:"-9999px",left:"-9999px"},m)j.left=Math.abs(parseInt(j.left,10))+"px";if(Ga)b.oMC.style.zIndex=1E4;if(!b.debugFlash)for(k in j)j.hasOwnProperty(k)&&
(b.oMC.style[k]=j[k]);try{q||b.oMC.appendChild(f);h.appendChild(b.oMC);if(q)i=b.oMC.appendChild(g.createElement("div")),i.className=b.swfCSS.swfBox,i.innerHTML=l;H=!0}catch(n){throw Error(w("appXHTML"));}}return G=!0};P=function(){if(b.html5Only)return Q(),!1;if(b.o)return!1;b.o=b.getMovie(b.id);if(!b.o)J?(q?b.oMC.innerHTML=fa:b.oMC.appendChild(J),J=null,G=!0):Q(b.id,b.url),b.o=b.getMovie(b.id);b.oninitmovie instanceof Function&&setTimeout(b.oninitmovie,1);return!0};O=function(){setTimeout(ra,1E3)};
ra=function(){if(U)return!1;U=!0;k.remove(h,"load",O);if(E&&!ma)return!1;var c;m||(c=b.getMoviePercent());setTimeout(function(){c=b.getMoviePercent();!m&&Ba&&(c===null?b.useFlashBlock||b.flashLoadTimeout===0?b.useFlashBlock&&ga():R(!0):b.flashLoadTimeout!==0&&R(!0))},b.flashLoadTimeout)};v=function(){function b(){k.remove(h,"focus",v);k.remove(h,"load",v)}if(ma||!E)return b(),!0;ma=Ba=!0;D&&E&&k.remove(h,"mousemove",v);U=!1;b();return!0};I=function(c){if(m)return!1;if(b.html5Only)return m=!0,u(),
y(),!0;var a;if(!b.useFlashBlock||!b.flashLoadTimeout||b.getMoviePercent())m=!0,s&&(a={type:"INIT_TIMEOUT"});if(s||c){if(b.useFlashBlock)b.oMC.className=B()+" "+(b.getMoviePercent()===null?b.swfCSS.swfTimedout:b.swfCSS.swfError);u({type:"ontimeout",error:a});A(a);return!1}k.add(h,"unload",$);if(b.waitForWindowLoad&&!qa)return k.add(h,"load",y),!1;else y();return!0};N=function(){var c,a=[];if(m)return!1;if(b.hasHTML5)for(c in b.audioFormats)b.audioFormats.hasOwnProperty(c)&&a.push(c+": "+b.html5[c]+
(!b.html5[c]&&b.flash[c]?" (using flash)":b.preferFlash&&b.flash[c]?" (preferring flash)":""));if(b.html5Only){if(!m)k.remove(h,"load",b.beginDelayedInit),b.enabled=!0,I();return!0}P();try{b.o._externalInterfaceTest(!1),b.allowPolling&&sa(!0,b.flashPollingInterval||(b.useFastPolling?10:50)),b.debugMode||b.o._disableDebug(),b.enabled=!0}catch(e){return A({type:"JS_TO_FLASH_EXCEPTION",fatal:!0}),R(!0),I(),!1}I();k.remove(h,"load",b.beginDelayedInit);return!0};z=function(){if(ca)return!1;ca=!0;ea();
if(!C()&&b.hasHTML5)b.useHTML5Audio=!0;ya();b.html5.usingFlash=xa();x=b.html5.usingFlash;ca=!0;g.removeEventListener&&g.removeEventListener("DOMContentLoaded",z,!1);P();return!0};ja=function(){g.readyState==="complete"&&(z(),g.detachEvent("onreadystatechange",ja));return!0};if(!b.hasHTML5||x)k.add(h,"focus",v),k.add(h,"load",v),k.add(h,"load",O),D&&E&&k.add(h,"mousemove",v);g.addEventListener?g.addEventListener("DOMContentLoaded",z,!1):g.attachEvent?g.attachEvent("onreadystatechange",ja):A({type:"NO_DOM2_EVENTS",
fatal:!0});g.readyState==="complete"&&setTimeout(z,100)}var X=null;if(typeof SM2_DEFER==="undefined"||!SM2_DEFER)X=new M;Y.SoundManager=M;Y.soundManager=X})(window);