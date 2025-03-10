"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[14667],{206708:(e,o,t)=>{t.d(o,{Rq:()=>n,Vf:()=>l,jd:()=>a,oy:()=>s,yR:()=>u});var r=t(191855),i=t(914896);let n=e=>"ios"===e&&(window.devicePixelRatio||1)*window.screen.height==2436,l=28,a=e=>window.innerHeight>=748&&n(e),s=()=>"undefined"!=typeof window&&!!window.navigator&&(/iPad/.test(navigator.platform)||"MacIntel"===navigator.platform&&"ontouchend"in document&&Math.min(window.screen.width,window.screen.height)>=700),d=()=>{i.t8(r.oj,String(!0),(0,i.kZ)(r.oj))},c=()=>!!i.U2(r.oj),u=()=>{let e=s();e!==c()&&(e?d():i.zN(r.oj.name),"undefined"!=typeof window&&window.location.reload())}},333733:(e,o,t)=>{t.d(o,{Z:()=>c});var r=t(667294),i=t(883119),n=t(876594),l=t(793874),a=t(635284),s=t(556712),d=t(785893);function c({children:e,footerConfig:o,headerConfig:t,height:c,hideOnScroll:u,hideOnScrollState:{isHidden:h,updateHiddenState:_},noPadding:p,paddingY:f=s.og,type:g,zIndex:m}){let w,v;let{headerLimitedOverflow:b,ignoreObstructions:S,zIndexForGestaltBug:y}=t||{},{appUpsellFooterConfig:P,footerInLego:x,navFooterConfig:C}=o||{},k=!!P,O="header"===g?"top":"bottom",A=(0,l.vs)(),z=(0,r.useRef)(null),j=(0,r.useRef)(null);(0,r.useEffect)(()=>{try{if(!S){let e=z.current;j.current=b&&e&&Array.isArray(e.children)?e.children[0]:e,j.current instanceof HTMLElement&&a.Z.addObstruction(O,j.current)}}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}return()=>{!S&&j.current instanceof HTMLElement&&a.Z.removeObstruction(O,j.current)}},[S,b,O,A]);let L="top"===O?"relative":"fixed",E=(c??s.R$)+(t?.overrideTop||0),F=u||C?{transition:x?"transform 300ms ease-in-out, opacity 300ms ease-in-out":"transform 200ms linear",...h?{transform:`translateY(${"top"===O?-E:E}px)`,opacity:x?0:1}:Object.freeze({})}:{},Z="relative"!==L||t?.noGutter?0:2,H=Z?-Z:0;A&&("header"===g?w=-1:v=-1);let U=t?.isTransparentBackground&&n.o7L||t?.isTranslucent&&(A?"rgba(0,0,0,.95)":"rgba(255,255,255,.95)")||n.k95;return(0,d.jsx)(i.xu,{ref:z,bottom:"footer"===g,dangerouslySetInlineStyle:{__style:{top:w,bottomStyle:v,...!m||y?{zIndex:y||1}:Object.freeze({}),...b?{background:"transparent",overflow:"hidden",paddingBottom:s.UB,marginBottom:-s.UB,pointerEvents:"none"}:Object.freeze({}),...t?.hasBorder?{borderBottom:s.dS}:Object.freeze({}),...o?.hasTopShadow?{boxShadow:"0 -2px 4px 1px rgba(0, 0, 0, 0.08)"}:Object.freeze({}),...F}},"data-test-id":g,display:k?"flex":void 0,height:c&&!x?c:void 0,left:!0,marginEnd:x?"auto":H,marginStart:x?"auto":H,onTransitionEnd:()=>{(u||C)&&j.current&&(h?a.Z.removeObstruction(O,j.current):a.Z.addObstruction(O,j.current))},position:L,right:!0,top:"header"===g,width:x||"fixed"!==L?void 0:"100%",zIndex:y?void 0:m,children:(0,d.jsx)(i.xu,{alignItems:o?.alignCenter?"center":void 0,dangerouslySetInlineStyle:{__style:{backgroundColor:U,height:x?k?void 0:c??s.R$:"100%",boxShadow:x?s.KJ:void 0,marginBottom:x&&!C?.docked?16:void 0,...b?{pointerEvents:"auto"}:Object.freeze({}),...t?.useRoundedCorners?{zIndex:5,borderTopRightRadius:17,borderTopLeftRadius:17,borderBottomRightRadius:0,borderBottomLeftRadius:0}:Object.freeze({})}},display:x||o?.alignCenter?"flex":void 0,marginEnd:x?"auto":void 0,marginStart:x?"auto":void 0,paddingX:("footer"!==g||p?0:4)+Z,paddingY:p?0:f,position:"relative",rounding:x&&!C?.docked?"pill":void 0,width:C?C.footerWidth:k?void 0:"100%",children:"function"==typeof e?e({updateHiddenState:_}):e})})}},94757:(e,o,t)=>{t.r(o),t.d(o,{default:()=>s});var r=t(883119),i=t(556712),n=t(333733),l=t(727976),a=t(785893);function s({hasBorder:e,headerLimitedOverflow:o,ignoreObstructions:t,isTranslucent:s,isTransparentBackground:d,noGutter:c,overrideTop:u,useRoundedCorners:h,zIndexForGestaltBug:_,...p}){let{noPadding:f,paddingY:g=i.og,zIndex:m}=p;return(0,a.jsx)(r.Le,{height:o?i.LV+8*(f?0:g):void 0,top:u||0,zIndex:m||void 0,children:(0,a.jsx)(l.Z,{hideOnScroll:p.hideOnScroll,children:r=>(0,a.jsx)(n.Z,{...p,headerConfig:{isTranslucent:s,isTransparentBackground:d,headerLimitedOverflow:o,hasBorder:e,ignoreObstructions:t,noGutter:c,overrideTop:u,zIndexForGestaltBug:_,useRoundedCorners:h},hideOnScrollState:r,type:"header"})})})}},727976:(e,o,t)=>{t.d(o,{Z:()=>l});var r=t(667294),i=t(235838);function n(e,o,t){var r;return(o="symbol"==typeof(r=function(e,o){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,o||"default");if("object"!=typeof r)return r;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===o?String:Number)(e)}(o,"string"))?r:r+"")in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}class l extends r.Component{constructor(...e){super(...e),n(this,"state",{isHidden:!!this.props.appUpsellFooterConfig||!!this.props.navFooterConfig?.isDockedNavOnPlp}),n(this,"lastScrollPos",0),n(this,"updateHiddenState",e=>{this.reqAnimationId=window.requestAnimationFrame(()=>{this.setState({isHidden:e})})}),n(this,"handleScroll",(0,i.Z)(()=>{let{appUpsellFooterConfig:e,navFooterConfig:o}=this.props,{isHidden:t}=this.state,r=window.scrollY,i=r-this.lastScrollPos,n="none",{scrollHeight:l,clientHeight:a}=document.documentElement||{};Number.isNaN(l)||Number.isNaN(a)||(n=i<0?r<=Math.abs((window.scrollMinY||0)+Math.max(i,20))?"start":"none":r>=(window.scrollMaxY||l-a)-Math.max(i,20)?"end":"none");let s=o?.isModal?0:55;e?i>20&&t&&r>=500?e.shouldShowAfterScroll()&&(this.updateHiddenState(!1),o?.onScroll(!1)):(i<-20&&!t||r<=s)&&(this.updateHiddenState(!0),o?.onScroll(!0)):this.props.navFooterConfig?.isDockedNavOnPlp?"start"===n&&!t||r<=s?(this.updateHiddenState(!0),o?.onScroll(!0)):(r>s||"end"===n)&&t&&(this.updateHiddenState(!1),o?.onScroll(!1)):(i<-20||"start"===n)&&t||r<=s?(this.updateHiddenState(!1),o?.onScroll(!1)):(i>20||"end"===n)&&!t&&(this.updateHiddenState(!0),o?.onScroll(!0)),this.lastScrollPos=r},30))}componentDidMount(){try{(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.addEventListener("scroll",this.handleScroll)}catch(e){window.console.error(e),window.console.error('Can only register impression obstructions for type "HTMLElement"')}}componentWillUnmount(){(this.props.hideOnScroll||this.props.navFooterConfig?.isDockedNavOnPlp)&&window.removeEventListener("scroll",this.handleScroll),this.reqAnimationId&&(window.cancelAnimationFrame(this.reqAnimationId),this.reqAnimationId=null)}componentDidUpdate(e){!e.hideOnScroll&&this.props.hideOnScroll||!e.navFooterConfig?.isDockedNavOnPlp&&this.props.navFooterConfig?.isDockedNavOnPlp?(this.updateHiddenState(!0),window.addEventListener("scroll",this.handleScroll)):(e.hideOnScroll&&!this.props.hideOnScroll||e.navFooterConfig?.isDockedNavOnPlp&&!this.props.navFooterConfig?.isDockedNavOnPlp)&&(this.updateHiddenState(!1),window.removeEventListener("scroll",this.handleScroll))}render(){let{children:e,navFooterConfig:o}=this.props,{isHidden:t}=this.state;return e({isHidden:!o?.forceShow&&t,updateHiddenState:this.updateHiddenState})}}},775383:(e,o,t)=>{t.r(o),t.d(o,{default:()=>d});var r=t(883119),i=t(679482),n=t(206708),l=t(675625),a=t(730212),s=t(785893);let d=({children:e,dataLayoutShiftBoundaryId:o,hasFixedHeader:t=!1,hasGutter:d=!0,height:c,showKeychainError:u=!1,useViewport:h=!1})=>{let _=(0,a.B)(),p=(0,n.jd)(_.userAgent.platform)?n.Vf:0;return(0,s.jsx)(r.xu,{"data-layout-shift-boundary-id":o||"PageContainer",height:h?`calc(100vh - ${p}px)`:c,paddingX:d?i.D6:void 0,paddingY:t||u?void 0:3,children:(0,s.jsx)(l.C,{value:!!d,children:e})})}},556712:(e,o,t)=>{t.d(o,{KJ:()=>a,LV:()=>l,R$:()=>r,UB:()=>n,dS:()=>s,og:()=>i});let r=64,i=3,n=100,l=44,a="0px 0px 8px rgba(0, 0, 0, 0.1)",s="1px solid #efefef"},675625:(e,o,t)=>{t.d(o,{C:()=>n,V:()=>l});var r=t(667294);let i=(0,r.createContext)(!1),n=i.Provider,l=()=>(0,r.useContext)(i)},343931:(e,o,t)=>{t.d(o,{Z:()=>l});var r=t(883119),i=t(144326),n=t(785893);let l=({isInModal:e})=>{let o=(0,i.ZP)();return(0,n.jsx)(r.xu,{alignItems:"center",dangerouslySetInlineStyle:{__style:{backgroundColor:"rgba(255, 255, 255, .5)"}},display:"flex",height:"100%",justifyContent:"center",left:!0,position:e?"absolute":"fixed",top:!0,width:"100%",zIndex:new r.Ry(1),children:(0,n.jsx)(r.$j,{accessibilityLabel:o.bt("جارٍ التحميل", "Loading", "Full page loading state", undefined, true),show:!0})})}},55463:(e,o,t)=>{t.d(o,{f:()=>a,w:()=>s});var r=t(667294),i=t(498490),n=t(785893);let{Provider:l,useHook:a}=(0,i.Z)("Session");function s({children:e}){let[o,t]=(0,r.useState)(void 0),i=(0,r.useCallback)(()=>t(void 0),[]),a=(0,r.useMemo)(()=>({unauthFollowUserId:o,setUnauthFollowUserId:t,removeUnauthFollowUserId:i}),[o,i]);return(0,n.jsx)(l,{value:a,children:e})}},578406:(e,o,t)=>{t.d(o,{N4:()=>n,Wh:()=>r,hr:()=>i});let r=e=>e.bt("تسجيل الدخول للمتابعة", "Log in to continue", "limitedLogin.modalHeader.default", undefined, true),i=e=>e.bt("لقد أوشكت على الوصول! سجّل الدخول للوصول إلى جميع مزايا Pinterest", "You're almost there! Log in to access all of Pinterest", "loginModal.limitedLogin.subheader", undefined, true),n=({i18n:e,toFollow:o})=>o?e.bt("تسجيل الدخول للمتابعة", "Log in to follow", "limitedLogin.modalHeader.follow", undefined, true):e.bt("تسجيل الدخول لإلغاء المتابعة", "Log in to unfollow", "limitedLogin.modalHeader.unfollow", undefined, true)},96549:(e,o,t)=>{t.d(o,{Z:()=>d});var r=t(883119),i=t(144326),n=t(590338),l=t(240760),a=t(730212),s=t(785893);function d({followerCount:e=0,followingCount:o=0,inline:t=!1,isOwnProfile:d,textSize:c="300",textWeight:u="bold",type:h}){let _=(0,i.ZP)(),{locale:p}=(0,a.B)(),f=(0,n.Z)(),g=f(p,e,{shortform:!0,shortform_maximum_fraction_digits:1}),m=f(p,o,{shortform:!0,shortform_maximum_fraction_digits:1}),w=d?(0,l.nk)(_.nbt(["{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع"], e, "ProfilePage.followerCount.ownProfile", true),{followerCountFormatted:g}):(0,l.nk)(_.nbt(["{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع", "{{ followerCountFormatted }} متابع"], e, "ProfilePage.followerCount.othersProfile", true),{followerCountFormatted:g}),v=d?(0,l.nk)(_.nbt(["{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة"], o, "ProfilePage.followingCount.ownProfile", true),{followingCountFormatted:m}):(0,l.nk)(_.nbt(["{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة", "{{ followingCountFormatted }} قيد المتابعة"], o, "ProfilePage.followingCount.othersProfile", true),{followingCountFormatted:m});return(0,s.jsx)(r.xv,{color:"default",inline:t,size:c,weight:u,children:"followers"===h?w:v})}},533746:(e,o,t)=>{t.d(o,{Z:()=>r});function r(e){return e.length>0?e.replace(/^https?:\/\//,"").replace(/^www\./,"").replace(/\/$/,""):""}},900492:(e,o,t)=>{t.d(o,{Ge:()=>c,JS:()=>l,OF:()=>f,P_:()=>a,Q_:()=>_,b8:()=>p,cg:()=>s,h2:()=>u,h6:()=>h});var r=t(252071),i=t(400416),n=t(235581);function l(e){return{type:"UPDATE_USER_PIN_COUNT",payload:e}}let a=(e,o)=>({type:"USER_FOLLOW",payload:{id:e,value:o}}),s=(e,o)=>({type:"USER_FOLLOWING_COUNT",payload:{id:e,following:o}}),d=(e,o)=>({type:"USER_BLOCK",payload:{id:e,value:o}}),c=({id:e,orbacSubjectId:o,blockSource:t,blockContext:i,logContextEvent:n})=>async l=>{l(d(e,!0));let a=await r.Z.create("UserBlockResource",{blocked_user_id:e,orbac_subject_id:o,block_source:t,block_context:i}).callCreate().catch(()=>l(d(e,!1)));return n({event_type:54,object_id_str:e}),a},u=(e,o)=>async t=>{t(d(e,!1));let i=await r.Z.create("UserBlockResource",{blocked_user_id:e}).callDelete().catch(()=>t(d(e,!0)));return o({event_type:55,object_id_str:e}),i};function h(e){return{type:"UPDATE_USER_SCHEDULED_PIN_COUNT",payload:e}}let _=(e,o)=>()=>r.Z.create("UserStateResource",{state:e,value:o}).callCreate(),p=(e,o,t)=>(r,l)=>{(0,i.Z)({url:"/v3/users/me/",method:"POST"}).then(()=>{t({event_type:48,object_id_str:l().session.userId}),e(),(0,n.Z)()},o)},f=e=>(0,i.Z)({url:"/v3/register/exists/",data:{email:e}})},919122:(e,o,t)=>{t.d(o,{Z:()=>m});var r=t(545007),i=t(616550),n=t(883119),l=t(609326),a=t(488792),s=t(477058),d=t(793874),c=t(144326),u=t(282999),h=t(864723),_=t(1006),p=t(154785),f=t(410150),g=t(785893);function m({alignIconLeft:e,bgColor:o,color:t,disableRedirect:m=!1,fallbackUrl:w,icon:v="arrow-back",onTouch:b,padding:S,placement:y,shouldUseFallbackUrl:P,size:x="lg",viewParameter:C,viewType:k,isVisualSearch:O}){let A=(0,c.ZP)(),z=(0,i.k6)(),j=(0,i.TH)(),L=(0,f.HG)(),E=(0,r.v9)(e=>e.session.isAuthenticated),F=(0,a.Z)(),Z=(0,p.Z)(),H=(0,d.vs)(),{viewType:U,viewParameter:N}=(0,s.SU)(),[D,R]=k?[k,C]:[U,N],T=()=>j.search&&j.search.includes("?nativeShouldDismiss=true"),I=()=>{let e=h.ZP.getItem(l.pm);j.key||"/ideas"!==w?(0,_.My)(`pinner_conversion.back_button.${String(e?.[0].pageType)}`):(0,_.My)("pinner_conversion.back_button.no_history"),(0,_.My)(`web_back_button_click.${String(y)}.is_auth_${String(E)}`),Z({action:"click",item:"back-button"}),D&&F({view_type:D,view_parameter:R,element:34,event_type:102}),b&&b(),m||((!j.key||j.state&&"redirect"===j.state.referrer||P)&&w?z.push(w):j.pathname.includes("/password/reset/")&&T()?z.push("/login/?dismissWebview=true"):z.goBack())},B=H?d.t4:"white",M=(0,u.am)(j)||O||"white"===t;return(0,g.jsx)(n.xu,{"data-test-id":"back-button",children:e?(0,g.jsx)(n.xu,{alignItems:"center",display:"flex",height:48,marginStart:"cancel"===v?-1:-2,width:48,children:(0,g.jsx)(n.hU,{accessibilityLabel:A.bt("رجوع", "Back", "navigation button", undefined, true),bgColor:o,icon:v,iconColor:!t&&(!o||["white","lightGray","transparent"].includes(o))?"gray":t,onClick:I,padding:"auto"!==S?S:2,size:x})}):(0,g.jsx)(n.xu,{dangerouslySetInlineStyle:{__style:{backgroundColor:L||M?"":B,width:H&&!M?"fit-content":""}},rounding:"circle",children:(0,g.jsx)(n.hU,{accessibilityLabel:A.bt("رجوع", "Back", "navigation button", undefined, true),bgColor:o||L?o:"transparent",icon:v,iconColor:!t&&(!o||["white","lightGray","transparent"].includes(o))?"gray":t,onClick:I,padding:"auto"!==S?S:2,size:x})})})}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/14667.ar_SA-4bc678d81aa0ab30.mjs.map