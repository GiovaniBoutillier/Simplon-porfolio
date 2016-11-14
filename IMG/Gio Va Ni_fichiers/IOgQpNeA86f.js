if (self.CavalryLogger) { CavalryLogger.start_js(["Zsv9Y"]); }

__d("TimelineAppSectionConstants",[],(function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={collectionTabKeyToAppTabKey:{friends_recent:"friends",friends_all:"friends",friends_mutual:"friends",photos_of:"photos",photos_all:"photos",photos_albums:"photos",likes_recent:null,info_all:"about",music_my_music:"music",music_favs:"music",music_playlists:"music",books_read:"books",books_favorite:"books",books_want:"books",recent_places:null,fitness_overview:"fitness",places_want:null,info_contact:null,fitness_running:"fitness",fitness_cycling:"fitness",friends_followers:"friends",friends_following:"friends",music_radio:"music",info_history:null,recent_games:"games",products_want:null,photos_archive:"photos",notes_my_notes:"notes",notes_drafts:"notes",notes_about_me:"notes",video_movies_watch:"movies",video_tv_shows_watch:"tv",music_saved:"music",video_movies_want:"movies",video_tv_shows_want:"tv",video_movies_favorite:"movies",video_tv_shows_favorite:"tv",friends_high_school:"friends",friends_college:"friends",friends_work:"friends",friends_suggested:"friends",apps_like:"games",upcoming_events:"events",past_events:"events",likes_people:"likes",likes_sports:null,fitness_report:null,groups_member:"groups",music_heavy_rotation:"music",photos_album:"photos",likes_restaurants:"likes",likes_clothing:null,info_insights:null,apps_used:"games",games_play:"games",games_apps_saved:null,video_movies_suggestions:null,video_tv_shows_suggestions:null,books_suggestions:null,saved_books:"saved",saved_movies:"saved",saved_tv_shows:"saved",saved_music:"saved",places_saved:"map",saved_links:"saved",sports_teams:"sports",likes_all:"likes",saved_places:"saved",saved_all:"saved",sports_athletes:"sports",sports_activities:null,saved_events:"saved",saved_archived:"saved",places_recent:"map",places_visited:"map",reviews_written:"reviews",likes_section_movies:"likes",likes_section_tv_shows:"likes",likes_section_books:"likes",likes_section_music:"likes",likes_section_sports_teams:"likes",place_visits_by_place_tag:null,places_cities:"map",place_visits_by_city:null,topic_visit_counts:"map",place_visits_by_topic:null,place_visit_stories:null,places_map:"map",likes_section_apps_and_games:"likes",likes_section_sports_athletes:"likes",places_cities_desktop:"map",saved_videos:"saved",saved_pages:"saved",friends_with_upcoming_birthdays:"friends",friends_current_city:"friends",friends_hometown:"friends",at_work_contact:null,place_reviews_written:"reviews",movie_reviews_written:"reviews",tv_show_reviews_written:"reviews",book_reviews_written:"reviews",photos_all_expanded:"photos",videos_by_user:"videos",videos_user_tagged:"videos",friends_map:"friends",videos_user_all:"videos",saved_posts:"saved",saved_photo_posts:"saved",saved_products:"saved",at_work_hr_info:null,friends_with_unseen_posts:"friends",groups_mutual:"groups",saved_profiles:"saved",all_questions:"personality_questions",same_answers:"personality_questions",different_answers:"personality_questions",new_questions:"personality_questions",work_followers:"friends",work_following:"friends",saved_messages:"saved",saved_lists:"saved",saved_fundraisers:"saved",video_playlists:"videos",saved_jobs:"saved",followers:"friends",following:"friends",media_set:"photos",photos_stream:"photos",photos_synced:"photos",apps:"games",videos_by:"videos",videos_of:"videos"}};}),null);
__d("DoublyLinkedListMap",[],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;}h.prototype.get=function(i){"use strict";return this._nodes[i]?this._nodes[i].data:null;};h.prototype.getIndex=function(i){"use strict";for(var j=this._head,k=0;j;j=j.next,k++)if(j.key===i)return k;return null;};h.prototype._insert=function(i,j,k,l){"use strict";k&&!this._nodes[k]&&(k=null);var m=k&&this._nodes[k]||(l?this._head:this._tail),n={data:j,key:i,next:null,prev:null};if(m){this.remove(i);if(l){n.prev=m.prev;m.prev&&(m.prev.next=n);m.prev=n;n.next=m;}else{n.next=m.next;m.next&&(m.next.prev=n);m.next=n;n.prev=m;}}n.prev===null&&(this._head=n);n.next===null&&(this._tail=n);this._nodes[i]=n;this._nodeCount++;return this;};h.prototype.insertBefore=function(i,j,k){"use strict";return this._insert(i,j,k,true);};h.prototype.insertAfter=function(i,j,k){"use strict";return this._insert(i,j,k,false);};h.prototype.prepend=function(i,j){"use strict";return this.insertBefore(i,j,this._head&&this._head.key);};h.prototype.append=function(i,j){"use strict";return this.insertAfter(i,j,this._tail&&this._tail.key);};h.prototype.remove=function(i){"use strict";var j=this._nodes[i];if(j){var k=j.next,l=j.prev;k&&(k.prev=l);l&&(l.next=k);this._head===j&&(this._head=k);this._tail===j&&(this._tail=l);delete this._nodes[i];this._nodeCount--;}return this;};h.prototype.find=function(i){"use strict";for(var j=this._head;j;j=j.next)if(i(j.data))return j.key;return null;};h.prototype.reduce=function(i,j){"use strict";for(var k=this._head;k;k=k.next)j=i(k.data,j);return j;};h.prototype.exists=function(i){"use strict";return !!this._nodes[i];};h.prototype.isEmpty=function(){"use strict";return !this._head;};h.prototype.reset=function(){"use strict";this._head=null;this._tail=null;this._nodes={};this._nodeCount=0;};h.prototype.map=function(i){"use strict";for(var j=this._head;j;j=j.next)i(j.data);};h.prototype.getCount=function(){"use strict";return this._nodeCount;};h.prototype.getHead=function(){"use strict";return this._head&&this._head.data;};h.prototype.getTail=function(){"use strict";return this._tail&&this._tail.data;};h.prototype.getNext=function(i){"use strict";var j=this._nodes[i];if(j&&j.next)return j.next.data;return null;};h.prototype.getPrev=function(i){"use strict";var j=this._nodes[i];if(j&&j.prev)return j.prev.data;return null;};f.exports=h;}),null);
__d('Optimus',['Event','Parent'],(function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();var h={};function i(k,l){var m=l.getTarget();if(!m)return;var n=h[k];for(var o in n){var p=c('Parent').byAttribute(m,o);if(p)do{var q=n[o][p.getAttribute(o)];if(q&&q.handleOptimus(k,p,l)===false)break;}while(p=c('Parent').byAttribute(p.parentNode,o));}}function j(k,l,m,n){if(!h[k]){h[k]={};c('Event').listen(document.documentElement,k,i.bind(null,k));}if(!h[k][l])h[k][l]={};if(!h[k][l][m])h[k][l][m]=n;}f.exports={addRelClick:function k(l,m){j('click','rel',l,m);},addEventListener:j};}),null);
__d('ProfileActionBarLogger',['FBJSON','MarauderLogger','Optimus'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){c('Optimus').addEventListener('mouseup','data-loggable','ProfileHighQualityLogger',{handleOptimus:function i(j,k,l){c('MarauderLogger').log('profile_high_quality_action',null,c('FBJSON').parse(k.getAttribute('data-store')));return false;}});}g.init=h;}),null);
__d('ProfileOverviewSection',['Arbiter','DOMScroll','DoublyLinkedListMap','Run','TidyArbiterMixin','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=null;function i(){h=null;}function j(k,l,m){'use strict';this.id=k;this.label=m;this.nodeID=l;this._parentSection=null;this.childSections=new (c('DoublyLinkedListMap'))();this._isLoaded=false;setTimeout(function(){return j.inform('sectionInitialized/'+k,{section:this},c('Arbiter').BEHAVIOR_STATE);}.bind(this),0);}j.prototype.appendSection=function(k){'use strict';this.childSections.append(k.id,k);k._parentSection=this;};j.prototype.freeze=function(){'use strict';this.freezeChildren();};j.prototype.freezeChildren=function(){'use strict';var k=this.childSections.getHead();while(k){!k.isActive()&&k.freeze();k=k.getNext();}};j.prototype.getNext=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getNext(this.id);};j.prototype.getPrev=function(){'use strict';return this._parentSection&&this._parentSection.childSections.getPrev(this.id);};j.prototype.isActive=function(){'use strict';var k=this;while(k){if(k.id===h)return true;k=k._parentSection;}return false;};j.prototype.isLoaded=function(){'use strict';return this._isLoaded;};j.prototype.setIsLoaded=function(k){'use strict';this._isLoaded=k;return this;};j.prototype.scrollTo=function(){'use strict';if(!c('ge')(this.nodeID))return;c('DOMScroll').scrollTo(this.getNode(),true,false,false,0,c('DOMScroll').scrollTo.bind(this).bind(null,this.getNode(),0));};j.prototype.thaw=function(){'use strict';this.thawChildren();};j.prototype.thawChildren=function(){'use strict';var k=this.childSections.getHead();while(k){k.thaw();k=k.getNext();}};j.prototype.getNode=function(){'use strict';throw new Error('This function needs to be implemented in children.');};j.callWithSection=function(k,l){'use strict';this.subscribe('sectionInitialized/'+k,function(m,n){l(n.section);});};j.setActiveSectionID=function(k){'use strict';!h&&c('Run').onLeave(i);h=k;};Object.assign(j,c('TidyArbiterMixin'));f.exports=j;}),null);
__d('TimelineURI',['BizSiteIdentifier.brands','BusinessURI.brands','ProfileTabConst','TimelineAppSectionConstants','URI','goURI'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={parseURI:function i(j){j=new (c('URI'))(j);var k=j.getQueryData(),l=j.getPath(),m=l.split('/').slice(1);if(m[0]=='people'||m[0]=='pages')m=m.slice(2);var n=k.sk||m[1]||c('ProfileTabConst').TIMELINE;if(n==c('ProfileTabConst').WALL)n=c('ProfileTabConst').TIMELINE;var o=null,p=null;if(n==c('ProfileTabConst').TIMELINE){p=parseInt(m[2],10)||null;o=parseInt(m[3],10)||null;}return {path:l,id:k.id||m[0],key:n,viewas:k.viewas?k.viewas:0,filter:k.filter?k.filter:null,year:p,month:o,friendship:!!k.and};},goToProfileID:function i(j){if(c('BizSiteIdentifier.brands').isBizSite()){c('goURI')(c('BusinessURI.brands')('/profile.php').addQueryData('id',j),true);}else c('goURI')(new (c('URI'))('/'+j),true);},getTabKeyFromURI:function i(j){var k=h.getSectionKeyFromURI(j);return c('TimelineAppSectionConstants').collectionTabKeyToAppTabKey[k]||k;},getSectionKeyFromURI:function i(j){return j.getQueryData().sk||j.getPath().split('/')[2];},getVanityFromURI:function i(j){if(j.getQueryData().id)return j.getQueryData.id;return j.getPath().split('/')[1];},isVideoPermalink:function i(j){return (h.getTabKeyFromURI(j)===c('ProfileTabConst').VIDEOS&&j.getPath().split('/').filter(function(k){return !!k;}).length>2);}};f.exports=h;}),null);
__d('ProfileNavigation',['Arbiter','CSS','PageTransitions','ProfileDOMID','ProfileOverviewDOMID','ProfileTabConst','ProfileTabUtils','ScriptPath','TimelineComponentKeys','TimelineController','TimelineDOMID','TimelineURI','UIPagelet','URI','$','ge'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=6,i='/profile_book.php',j=null,k=null;function l(w){var x=c('URI').getMostRecentURI(),y=c('TimelineURI').getSectionKeyFromURI(x),z=c('TimelineURI').getTabKeyFromURI(x),aa=c('TimelineURI').getSectionKeyFromURI(w),ba=c('TimelineURI').getTabKeyFromURI(w),ca=w.getQueryData();if(s(x,w)||t(ba)||t(z)||!!ca.and||c('TimelineURI').isVideoPermalink(w))return false;if(ca.hc_location==='profile_browser')return false;if(ca.hasOwnProperty('theater')){c('Arbiter').subscribeOnce('PhotoSnowlift.CLOSE',u);return false;}if(ca.hasOwnProperty('force-refresh'))return false;if(c('ProfileTabUtils').isTimelineTab(z)&&!c('ProfileTabUtils').isTimelineTab(ba)&&r(aa)){j=aa;m(aa,'TimelineMedleyView',c('TimelineDOMID').TAB_CONTENT,c('ProfileOverviewDOMID').MEDLEY_ROOT,ca);return true;}if(!c('ProfileTabUtils').isTimelineTab(z)&&c('ProfileTabUtils').isTimelineTab(ba)){j=y;m(c('ProfileTabConst').TIMELINE,'TimelineWallColumn',c('ProfileOverviewDOMID').MEDLEY_ROOT,c('TimelineDOMID').TAB_CONTENT,ca);return true;}return false;}function m(w,x,y,z,aa){c('CSS').hide(c('$')(y));c('Arbiter').inform('save_facebar_query',true);var ba=c('ge')(z);if(ba){c('CSS').show(ba);q(w);}else n(x,w,aa);c('TimelineController').registerCurrentKey(w);}function n(w,x,y){o();var z=babelHelpers['extends']({},k,{tab_key:x});if(y)z=babelHelpers['extends']({},z,y);var aa=function ca(da){p();da();},ba={append:true,displayCallback:aa,finallyHandler:q.bind(null,x),usePipe:true};c('UIPagelet').loadFromEndpoint(w,c('ProfileDOMID').MAIN_COLUMN_PERSONAL,z,ba);}function o(){c('CSS').show(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}function p(){c('CSS').hide(c('$')(c('ProfileDOMID').TAB_LOAD_INDICATOR));}function q(w){var x=i;if(!c('ProfileTabUtils').isTimelineTab(w))x+=':'+w;c('ScriptPath').set(x);c('PageTransitions').transitionComplete();}function r(w){return j===null||w===j;}function s(w,x){var y=c('TimelineURI').getVanityFromURI(w),z=w.getQueryData().id,aa=c('TimelineURI').getVanityFromURI(x),ba=x.getQueryData().id;if(y&&aa)return y!==aa;if(z&&ba)return z!==ba;return true;}function t(w){return (c('ProfileTabUtils').isActivityLogTab(w)||w===c('ProfileTabConst').MEMORIAL_CONTACT||w===c('ProfileTabConst').POSTS);}function u(){c('PageTransitions').registerHandler(l,h);}var v={init:function w(x){k=x.profileContextData;c('TimelineController').register(c('TimelineComponentKeys').ASYNC_NAV,this);u();},reset:function w(){k=null;j=null;c('PageTransitions').removeHandler(l);}};f.exports=v;}),null);
__d('TimelineDrag',['ArbiterMixin','Event','Locale','Style','Vector','mixin'],(function a(b,c,d,e,f,g){var h,i;if(c.__markCompiled)c.__markCompiled();h=babelHelpers.inherits(j,c('mixin')(c('ArbiterMixin')));i=h&&h.prototype;function j(k,l,m){'use strict';i.constructor.call(this);m=m||{};this._listenOn=m.listenOn;this._offsetInput=l;this._defaultOffset=m.default_offset;this._killClicks=m.killClicks;this._vertical=true;this._RTLXSwitch=false;this.setPicture(k,m);}j.prototype.setPicture=function(k,l){'use strict';if(!k)return false;l=l||{};this._picture=k;this._defaultOffset=l.default_offset;if(l.offsetInput)this._offsetInput=l.offsetInput;if(l.vertical!==undefined)this._vertical=l.vertical;if(l.height)this._containerHeight=l.height;if(l.width)this._containerWidth=l.width;if(this._vertical){this._offsetType='top';this._eventCoord='y';}else{this._RTLXSwitch=c('Locale').isRTL();this._offsetType='left';this._eventCoord='x';}if(this._picture.complete){this._initialLoad();}else this._loadListener=c('Event').listen(this._picture,'load',function(){this._loadListener.remove();this._loadListener=null;this._initialLoad();}.bind(this));};j.prototype.destroy=function(){'use strict';this._stopDrag();this._saveOffset();this._mousedown&&this._mousedown.remove();this._mousedown=null;this._onclick&&this._onclick.remove();this._onclick=null;this._loadListener&&this._loadListener.remove();this._loadListener=null;};j.prototype._initialLoad=function(){'use strict';var k=this._listenOn?this._listenOn:this._picture;this._mousedown&&this._mousedown.remove();this._mousedown=c('Event').listen(k,'mousedown',this._onMouseDown.bind(this));if(this._vertical){this._maxOffset=this._containerHeight-this._picture.offsetHeight;}else this._maxOffset=this._containerWidth-this._picture.offsetWidth;if(this._defaultOffset!==undefined)this._setOffset(this._defaultOffset);this._onclick&&this._onclick.remove();this._onclick=null;if(this._killClicks)this._onclick=c('Event').listen(k,'click',this._onClick.bind(this));this._saveOffset();};j.prototype._onClick=function(event){'use strict';event.kill();};j.prototype._onMouseDown=function(event){'use strict';var k=parseInt(c('Style').get(this._picture,this._offsetType),10)||0;this._pictureStartDragOffset=k-c('Vector').getEventPosition(event)[this._eventCoord];this._startDrag();event.kill();};j.prototype._startDrag=function(){'use strict';if(!this._dragStarted){this.inform('startdrag',this);this._dragTokens=[c('Event').listen(document.documentElement,'mouseup',this._onMouseUp.bind(this)),c('Event').listen(document.documentElement,'mousemove',this._onMouseMove.bind(this))];this._dragStarted=true;}};j.prototype._saveOffset=function(){'use strict';var k=parseInt(c('Style').get(this._picture,this._offsetType),10);if(this._RTLXSwitch){this._offsetInput.value=k+this._containerWidth-this._picture.offsetWidth;}else this._offsetInput.value=k;};j.prototype._stopDrag=function(){'use strict';if(this._dragStarted){this.inform('stopdrag',this);this._dragStarted=false;this._dragTokens.forEach(function(k){k.remove();});this._saveOffset();}};j.prototype._onMouseUp=function(event){'use strict';this._stopDrag();event.kill();};j.prototype._setOffset=function(k){'use strict';if(this._RTLXSwitch){k=Math.max(0,Math.min(k,-this._maxOffset));}else k=Math.min(0,Math.max(k,this._maxOffset));c('Style').set(this._picture,this._offsetType,k+'px');};j.prototype._onMouseMove=function(event){'use strict';this._setOffset(this._pictureStartDragOffset+c('Vector').getEventPosition(event)[this._eventCoord]);event.kill();};f.exports=j;}),null);
__d('TimelineCover',['cx','fbt','Arbiter','Button','CSS','Dialog','DOM','DOMScroll','Event','FileInputUploader','Focus','HTML','PageTransitions','Parent','ReloadPage','Run','Style','TimelineDrag','$','ge','setImmediate','tidyEvent'],(function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k,l,m){'use strict';this.root=c('$')('fbProfileCover');if(typeof l==='object'){this._coverHeight=l.cover_height;this._coverWidth=l.cover_width;this.previewing=l.previewing;this._isLegacy=false;}else{this._isLegacy=true;this._coverHeight=l;this.previewing=m;}this._parentSection=c('Parent').byClass(this.root,'fbTimelineSection');this.cover=c('DOM').find(this.root,'.cover');j.instance=this;this.editing=false;c('Run').onBeforeUnload(this.onBeforeUnload.bind(this));if(!this._parentSection)this._parentSection=c('Parent').byClass(this.root,'fbEventHeader');if(this.previewing)c('setImmediate')(function(){this.editMode();this.updateCoverImage(this.previewing);}.bind(this));}j.prototype.showLoadingIndicator=function(){'use strict';var k=c('ge')('fbCoverImageContainer');if(k)c('CSS').addClass(k,'opaquedLoading');};j.prototype.hideLoadingIndicator=function(){'use strict';var k=c('ge')('fbCoverImageContainer');if(k)c('CSS').removeClass(k,'opaquedLoading');};j.prototype.onBeforeUnload=function(){'use strict';if(this.isInEditMode())return i._("If you leave this page, your cover photo will not be saved. To save, press the \"save\" button below your cover photo.");};j.prototype.isCoverImageVerticalFlow=function(k){'use strict';return !k.style.height;};j.prototype.editMode=function(){'use strict';var k=c('DOM').find(this.root,'button.saveButton');c('Button').setEnabled(c('DOM').find(this.root,'button.cancelButton'),true);c('Button').setEnabled(k,true);this.hideLoadingIndicator();this._coverImage=c('DOM').scry(this.root,'.coverImage')[0];var l=c('DOM').scry(this._coverImage,'.coverWrap')[0];if(l){var m=c('DOM').find(l,'.coverPhotoImg');this._originalIsVertical=this.isCoverImageVerticalFlow(m);this._originalOffset=c('Style').get(m,this._originalIsVertical?'top':'left');}c('CSS').addClass(this._parentSection,'fbEditCover');c('DOMScroll').scrollTo(this.root);if(this.previewing){c('DOM').remove(this._coverImage);c('CSS').show(this._coverImage);}var n=c('DOM').scry(this._coverImage,'.coverPhotoImg')[0];if(n)this._createDragger();this.editing=true;c('Focus').set(k);c('Arbiter').inform('CoverPhotoEdit',{sender:this,state:"open"});};j.prototype._exitEditMode=function(){'use strict';if(this._timelineDrag){this._timelineDrag.destroy();this._timelineDrag=null;}c('DOM').find(this.root,'input.hiddenPhotoID').value=null;c('Button').setEnabled(c('DOM').find(this.root,'button.cancelButton'),false);c('Button').setEnabled(c('DOM').find(this.root,'button.saveButton'),false);c('CSS').removeClass(this._parentSection,'fbEditCover');this.hideLoadingIndicator();this.previewing=false;c('Arbiter').inform('CoverPhotoEdit',{sender:this,state:"closed"});this.editing=false;};j.prototype._createDragger=function(k){'use strict';var l;if(this._isLegacy){l=c('DOM').find(this.root,'input.photoOffsetInput');this._originalIsVertical=true;}else{var m=k===undefined?this._originalIsVertical:k;l=m?c('DOM').find(this.root,'input.photoOffsetYInput'):c('DOM').find(this.root,'input.photoOffsetXInput');}this._timelineDrag=new (c('TimelineDrag'))(c('DOM').find(this.root,'.coverImage .coverPhotoImg'),l,{height:this._coverHeight,width:this._coverWidth,listenOn:this.cover,vertical:m,killClicks:true});};j.prototype.updateCoverImage=function(k,l){'use strict';if(l)this.editMode();c('DOM').find(this.root,'input.hiddenPhotoID').value=k;c('Button').setEnabled(c('DOM').find(this.root,'button.saveButton'),true);if(l)c('DOM').replace(c('DOM').find(this.root,'.coverImage'),typeof l==='string'?c('HTML')(l):l);var m=c('DOM').find(c('DOM').find(this.root,'.coverImage'),'.coverPhotoImg'),n=this.isCoverImageVerticalFlow(m),o;if(this._isLegacy){o=c('DOM').find(this.root,'input.photoOffsetInput');}else o=n?c('DOM').find(this.root,'input.photoOffsetYInput'):c('DOM').find(this.root,'input.photoOffsetXInput');if(this._timelineDrag){this._timelineDrag.setPicture(m,{offsetInput:o,vertical:n});}else this._createDragger(n);this._updateHeader();};j.prototype.cancelUpdate=function(){'use strict';this._reloadAfterNextUpdate=false;c('DOM').remove(c('DOM').scry(this.root,'.coverImage')[0]);c('DOM').prependContent(this.cover,this._coverImage);if(this._originalOffset!==undefined)c('Style').set(c('DOM').find(this._coverImage,'.coverPhotoImg'),this._originalIsVertical?'top':'left',this._originalOffset);this._exitEditMode();this._updateHeader();};j.staticSaveComplete=function(){'use strict';j.getInstance().saveComplete();};j.prototype.saveComplete=function(){'use strict';if(this._reloadAfterNextUpdate)c('ReloadPage').now();this._coverImage=c('DOM').scry(this.root,'.coverImage')[0];var k=c('Parent').byClass(this.root,'fbTimelineTopSectionBase');k&&c('CSS').removeClass(k,"_6_5");this._exitEditMode();this._updateHeader();c('PageTransitions').rewriteCurrentURI(c('PageTransitions').getCurrentURI().getUnqualifiedURI(),c('PageTransitions').getCurrentURI().removeQueryData('preview_cover'));};j.prototype.isInEditMode=function(){'use strict';return this.editing;};j.prototype._updateHeader=function(){'use strict';var k=c('DOM').scry(this.root,'.coverImage')[0];if(!k)return;var l=c('CSS').hasClass(k,'coverNoImage'),m=c('CSS').hasClass(this._parentSection,'noCoverImage');if(l!==m)c('CSS').conditionClass(this._parentSection,'noCoverImage',l);};j.getInstance=function(){'use strict';return j.instance;};j.staticUpdateCoverImage=function(k){'use strict';j.getInstance().updateCoverImage(null,k);};j.prototype.setupFileUpload=function(k,l,m){'use strict';k.subscribe('change',function(){var n=new (c('FileInputUploader'))(k.getInput()).setURI(l).setAllowCrossOrigin(true);n.subscribe('failure',function(){j.showErrorDialog(i._("Cover Upload Failed"),i._("Uploading the new cover picture failed. Please try again."));});n.subscribe(['success','failure'],function(){this.hideLoadingIndicator();k.clear();c('CSS').removeClass(k.getControl(),m);k.getInput().disabled=false;}.bind(this));this.showLoadingIndicator();this._reloadAfterNextUpdate=true;n.send();c('CSS').addClass(k.getControl(),m);k.getInput().disabled=true;}.bind(this));};j.setupFileUpload=function(k,l,m){'use strict';this.getInstance().setupFileUpload(k,l,m);};j.imageUploadDone=function(k,l){'use strict';this.getInstance().updateCoverImage(k,l);};j.showErrorDialog=function(k,l){'use strict';new (c('Dialog'))().setTitle(k).setButtons(c('Dialog').OK).setBody(l).show();this.getInstance().hideLoadingIndicator();};j.initFileUploadMenu=function(k){'use strict';j.showLoadingAfterFileUpload(k.getForm());};j.showLoadingAfterFileUpload=function(k){'use strict';c('tidyEvent')(k.subscribe('submit',function(){j.getInstance().showLoadingIndicator();}));};j.instance=null;f.exports=j;}),null);
__d('TimelineNavLight',['csx','cx','invariant','CSS','DataStore','DOM','DOMQuery','Event','Parent','ProfileOverviewDOMID','ProfileOverviewSection','ProfileTimelineUILogger','TimelineAppSectionConstants','TimelineComponentKeys','TimelineController','destroyOnUnload','queryThenMutateDOM'],(function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k="_6-7",l="_6-6",m="_529n",n="_5215",o="_9rw",p="_70k",q="._6-7",r="._6-6";function s(t){'use strict';!!s.$TimelineNavLight1?j(0):void 0;this.$TimelineNavLight2=t;this.$TimelineNavLight3=c('DOMQuery').scry(t,q)[0];this.$TimelineNavLight4=c('DOMQuery').scry(t,r);this.$TimelineNavLight5();c('ProfileOverviewSection').subscribe('Medley/transitionToSection',function(v,w){this.$TimelineNavLight6(w.slice(c('ProfileOverviewDOMID').PREFIX_MEDLEY.length));}.bind(this));c('TimelineController').register(c('TimelineComponentKeys').COVER_NAV,this);var u=c('Event').listen(this.$TimelineNavLight2,'click',this.$TimelineNavLight7.bind(this));s.$TimelineNavLight1=this;c('destroyOnUnload')(function(){this.$TimelineNavLight2=null;this.$TimelineNavLight3=null;this.$TimelineNavLight4=null;u.remove();if(this.$TimelineNavLight8)this.$TimelineNavLight8.remove();s.$TimelineNavLight1=null;}.bind(this));}s.prototype.handleTabChange=function(t){'use strict';this.$TimelineNavLight6(t);};s.prototype.setMoreMenuInstance=function(t){'use strict';this.$TimelineNavLight8=c('Event').listen(t.getRoot(),'click',this.$TimelineNavLight9.bind(this));};s.setMoreMenuInstance=function(t){'use strict';!!!s.$TimelineNavLight1?j(0):void 0;s.$TimelineNavLight1.setMoreMenuInstance(t);};s.prototype.$TimelineNavLight6=function(t){'use strict';this.$TimelineNavLight3&&c('CSS').removeClass(this.$TimelineNavLight3,k);this.$TimelineNavLight4.some(function(u){var v=c('TimelineAppSectionConstants').collectionTabKeyToAppTabKey[t]||t;if(c('DataStore').get(u,'tab-key')===v){c('CSS').addClass(u,k);this.$TimelineNavLight3=u;return true;}}.bind(this));};s.prototype.$TimelineNavLight5=function(){'use strict';var t=this.$TimelineNavLight4.length-1,u=this.$TimelineNavLight4[t],v,w,x,y=0;c('queryThenMutateDOM')(function(){v=c('Parent').byClass(this.$TimelineNavLight2,p).offsetWidth;w=u.offsetLeft;x=u.offsetWidth;for(var z=t;z>1;z--){var aa=this.$TimelineNavLight4[z];if(aa.offsetLeft+aa.offsetWidth>v){y++;}else break;}}.bind(this),function(){if(w+x>v)c('CSS').addClass(this.$TimelineNavLight2,n);for(var z=t;z>t-y;z--)c('DOM').remove(this.$TimelineNavLight4[z]);c('CSS').removeClass(c('Parent').byClass(this.$TimelineNavLight2,m),m);}.bind(this));};s.prototype.$TimelineNavLight10=function(t,u){'use strict';var v=c('Parent').byClass(t,u);if(v)return c('DataStore').get(v,'tab-key');return null;};s.prototype.$TimelineNavLight7=function(event){'use strict';var t=this.$TimelineNavLight10(event.target,l);if(t)c('ProfileTimelineUILogger').logCoverNavItemClick(t);};s.prototype.$TimelineNavLight9=function(event){'use strict';var t=this.$TimelineNavLight10(event.target,o);if(t)c('ProfileTimelineUILogger').logCoverNavMoreItemClick(t);};f.exports=s;}),null);
__d('TimelineSmartInsert',['Run','UserAgent_DEPRECATED','Vector'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=100;function i(o){if(o==='viewport')return c('Vector').getViewportDimensions().y;return o;}var j=false,k=false;function l(){if(k)return;c('Run').onLeave(m);k=true;}function m(){j=false;k=false;}var n={run:function o(p,q,r){l();if(!j||c('UserAgent_DEPRECATED').ie()<=8){q();return;}var s=p.offsetHeight;q();var t=p.offsetHeight,u=c('Vector').getScrollPosition().y,v=c('Vector').getElementPosition(p).y;if(t!==s&&v<u&&v+s<u+i(r||h))window.scrollBy(0,t-s);},enable:function o(){j=true;}};f.exports=n;}),null);
__d('legacy:TimelineCover',['TimelineCover'],(function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();b.TimelineCover=c('TimelineCover');}),3);