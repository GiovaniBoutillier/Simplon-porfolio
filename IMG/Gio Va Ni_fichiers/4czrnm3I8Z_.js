if (self.CavalryLogger) { CavalryLogger.start_js(["tcCfw"]); }

__d('AppRequestReminders',['AsyncRequest','CSS','DOM','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=0,i={},j=1,k=c('ge')('OtherAppReqReminder'),l=function r(s,t,u){i[t]={node:s,seq:j++,reqCount:u};},m=function r(s){h=s;},n=function r(s){return s.id.split('_')[1];},o=function r(s){var t=c('ge')(s),u=t.nextSibling;if(u!==k){c('CSS').show(u);h-=i[n(u)].reqCount;}p(h);},p=function r(s){new (c('AsyncRequest'))().setURI('/ajax/reminders/update_count.php').setData({new_count:s}).setMethod('POST').send();},q=function r(s,t){if(k&&t&&s>0){c('DOM').setContent(c('ge')('OtherAppReqLabel'),t);}else if(k){c('CSS').hide(k);}else c('CSS').hide(c('ge')('OtherAppReqReminder'));};g.initNode=l;g.handleRemove=o;g.updateCount=q;g.setTotalOtherCount=m;}),null);
__d('legacy:popup-resizer',['PopupWindow'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.PopupResizer=c('PopupWindow');}),3);