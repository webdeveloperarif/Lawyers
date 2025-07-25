/*!
 * jQuery Transit - CSS3 transitions and transformations
 * (c) 2011-2012 Rico Sta. Cruz <rico@ricostacruz.com>
 * MIT Licensed.
 *
 * http://ricostacruz.com/jquery.transit
 * http://github.com/rstacruz/jquery.transit
 */

/*!
 * modified for LayerSlider
 */

eval(
  (function (p, a, c, k, e, d) {
    e = function (c) {
      return (
        (c < a ? "" : e(parseInt(c / a))) +
        ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
      );
    };
    while (c--) {
      if (k[c]) {
        p = p.replace(new RegExp("\\b" + e(c) + "\\b", "g"), k[c]);
      }
    }
    return p;
  })(
    '(j(e){j r(e){7(e K t.F)q e;k n=["2o","3n","O","29"];k r=e.37(0).33()+e.35(1);7(e K t.F){q e}1c(k i=0;i<n.3l;++i){k s=n[i]+r;7(s K t.F){q s}}}j i(){t.F[n.C]="";t.F[n.C]="16(3m)";q t.F[n.C]!==""}j f(e){7(E e==="1m"){4.1U(e)}q 4}j l(e,t,n){7(t===J){e.11(n)}L 7(t){e.11(t,n)}L{n()}}j c(t){k n=[];e.1g(t,j(t){t=e.2G(t);t=e.H.1H[t]||e.2O[t]||t;t=d(t);7(e.2P(t,n)===-1){n.Y(t)}});q n}j h(t,n,r,i){k s=c(t);7(e.1e[r]){r=e.1e[r]}k o=""+m(n)+" "+r;7(1z(i,10)>0){o+=" "+m(i)}k u=[];e.1g(s,j(e,t){u.Y(t+" "+o)});q u.1y(", ")}j p(t,r){7(!r){e.2H[t]=J}e.H.1H[t]=n.C;e.P[t]={N:j(n){k r=e(n).13("H:C");q r.N(t)},G:j(n,r){k i=e(n).13("H:C");i.1n(t,r);e(n).13({"H:C":i})}}}j d(e){q e.27(/([A-Z])/g,j(e){q"-"+e.1Y()})}j v(e,t){7(E e==="1m"&&!e.2J(/^[\\-0-9\\.]+$/)){q e}L{q""+e+t}}j m(t){k n=t;7(e.1C.1D[n]){n=e.1C.1D[n]}q v(n,"29")}e.H={2W:"0.9.9",2S:J,1H:{3j:"1k",2U:"1k",2T:"1k",2V:"1k",2Z:"1f",2Y:"1f",2X:"1f",2R:"1f"},1N:J,1L:1Q};k t=2Q.2K("2I");k n={};k s=2L.2M.1Y().2N("30")>-1;n.I=r("I");n.26=r("26");n.C=r("C");n.T=r("T");n.1X=i();k o={I:"1S",3h:"3g",3f:"3i",3k:"3e",3c:"34"};k u=n.1S=o[n.I]||D;1c(k a K n){7(n.1V(a)&&E e.1J[a]==="B"){e.1J[a]=n[a]}}t=D;e.1e={1E:"1h","K":"1h-K",1j:"1h-1j","K-1j":"1h-K-1j",36:"w-z(0,1,.5,1)",3b:"w-z(.14, .3a, .38, .19)",2a:"w-z(.2e,.2h,.1M,1)",2f:"w-z(.2d,.1R,.1M,1)",2z:"w-z(.6,.2y,.2x,.2A)",2E:"w-z(.2C,.2v,.1K,1)",2n:"w-z(.2m,.2l,.15,.20)",2k:"w-z(.1T,.1r,.2p,.2t)",2s:"w-z(.19,1,.22,1)",2r:"w-z(1,0,0,1)",2q:"w-z(.14,.2u,.1Z,.2D)",2j:"w-z(.25,.46,.45,.2B)",2w:"w-z(.2F,.1P,.2c,.2b)",2g:"w-z(.2i,.1P,.31,.22)",49:"w-z(.1K,.3S,.44,1)",42:"w-z(.4d,0,.1W,1)",4b:"w-z(.3X,.1r,.3Y,.3Z)",40:"w-z(.23,1,.32,1)",3W:"w-z(.20,0,.3U,1)",3V:"w-z(.47,0,.41,.4c)",4a:"w-z(.39,.43,.48,1)",3T:"w-z(.3Q,.1r,.14,.1T)",3y:"w-z(.6,-.28,.3x,.1R)",3z:"w-z(.1W, .3A,.32,1.3o)",3w:"w-z(.1Z,-.14,.3v,1.14)"};e.P["H:C"]={N:j(t){q e(t).21("C")||24 f},G:j(t,r){k i=r;7(!(i 3q f)){i=24 f(i)}7(n.C==="3p"&&!s){t.F[n.C]=i.1x(J)}L{t.F[n.C]=i.1x()}e(t).21("C",i)}};e.P.C={G:e.P["H:C"].G};7(e.1I.3r<"1.8"){e.P.T={N:j(e){q e.F[n.T]},G:j(e,t){e.F[n.T]=t}};e.P.I={N:j(e){q e.F[n.I]},G:j(e,t){e.F[n.I]=t}}}p("S");p("1u");p("U");p("R");p("1p");p("1d");p("16");p("1v");p("18");p("1t");p("1s");p("x",J);p("y",J);f.1l={1n:j(e,t){k n=E t==="1m"?t.1w(","):t.3s===1O?t:[t];n.3u(e);f.1l.G.Q(4,n)},G:j(e){k t=1O.1l.3R.Q(3t,[1]);7(4.1o[e]){4.1o[e].Q(4,t)}L{4[e]=t.1y(",")}},N:j(e){7(4.1q[e]){q 4.1q[e].Q(4)}L{q 4[e]||0}},1o:{1p:j(e){4.1p=v(e,"V")},1d:j(e){4.1d=v(e,"V")},16:j(e){4.16=v(e,"V")},S:j(e,t){7(t===B){t=e}4.S=e+","+t},1u:j(e,t,n){7(t===B){t=e}7(n===B){n=e}4.1u=e+","+t+","+n},1t:j(e){4.1t=v(e,"V")},1s:j(e){4.1s=v(e,"V")},18:j(e){4.18=v(e,"M")},x:j(e){4.G("U",e,D)},y:j(e){4.G("U",D,e)},3C:j(e){4.G("R",e,D,D)},3D:j(e){4.G("R",D,e,D)},3M:j(e){4.G("R",D,D,e)},U:j(e,t){7(4.X===B){4.X=0}7(4.W===B){4.W=0}7(e!==D&&e!==B){4.X=v(e,"M")}7(t!==D&&t!==B){4.W=v(t,"M")}4.U=4.X+","+4.W},R:j(e,t,n){7(4.1i===B){4.1i=0}7(4.1b===B){4.1b=0}7(4.17===B){4.17=0}7(e!==D&&e!==B){4.1i=v(e,"M")}7(t!==D&&t!==B){4.1b=v(t,"M")}7(n!==D&&n!==B){4.17=v(n,"M")}4.R=4.1i+","+4.1b+","+4.17}},1q:{x:j(){q 4.X||0},y:j(){q 4.W||0},S:j(){k e=(4.S||"1,1,1").1w(",");7(e[0]){e[0]=1a(e[0])}7(e[1]){e[1]=1a(e[1])}7(e[2]){e[2]=1a(e[2])}q e[0]===e[1]===e[2]?e[0]:e},1v:j(){k e=(4.1v||"0,0,0,3L").1w(",");1c(k t=0;t<=3;++t){7(e[t]){e[t]=1a(e[t])}}7(e[3]){e[3]=v(e[3],"V")}q e}},1U:j(e){k t=4;e.27(/([a-3N-3O-9]+)\\((.*?)\\)/g,j(e,n,r){t.1n(n,r)})},1x:j(e){k t=[];1c(k r K 4){7(4.1V(r)){7(!n.1X&&(r==="1d"||r==="16"||r==="18"||r==="T")){3P}7(r[0]!=="3K"){7(e&&r==="S"){t.Y(r+"3d("+4[r]+",1)")}L 7(e&&r==="U"){t.Y(r+"3d("+4[r]+",0)")}L{t.Y(r+"("+4[r]+")")}}}}q t.1y(" ")}};e.1I.I=e.1I.H=j(t,r,i,s){k o=4;k a=0;k f=J;7(E r==="j"){s=r;r=B}7(E i==="j"){s=i;i=B}7(E t.1F!=="B"){i=t.1F;12 t.1F}7(E t.1A!=="B"){r=t.1A;12 t.1A}7(E t.1G!=="B"){s=t.1G;12 t.1G}7(E t.11!=="B"){f=t.11;12 t.11}7(E t.1B!=="B"){a=t.1B;12 t.1B}7(E r==="B"){r=e.1C.1D.1E}7(E i==="B"){i=e.1e.1E}r=m(r);k c=h(t,r,i,a);k p=e.H.1N&&n.I;k d=p?1z(r,10)+1z(a,10):0;7(d===0){k v=j(e){o.13(t);7(s){s.Q(o)}7(e){e()}};l(o,f,v);q o}k g={};k y=j(r){k i=1Q;k a=j(){7(i){o.3J(u,a)}7(d>0){o.1g(j(){4.F[n.I]=g[4]||D})}7(E s==="j"){s.Q(o)}7(E r==="j"){r()}};7(d>0&&u&&e.H.1L){i=J;o.3F(u,a)}L{3E.3G(a,d)}o.1g(j(){7(d>0){4.F[n.I]=c}e(4).13(t)})};k b=j(e){4.3H;y(e)};l(o,f,b);q 4};e.H.3I=h})(3B)',
    62,
    262,
    "||||this|||if||||||||||||function|var||||||return||||||cubic|||bezier||undefined|transform|null|typeof|style|set|transit|transition|true|in|else|px|get||cssHooks|apply|translate3d|scale|transformOrigin|translate|deg|_translateY|_translateX|push|||queue|delete|css|55||rotateY|_translate3dZ|perspective||parseFloat|_translate3dY|for|rotateX|cssEase|padding|each|ease|_translate3dX|out|margin|prototype|string|setFromString|setter|rotate|getter|05|skewY|skewX|scale3d|rotate3d|split|toString|join|parseInt|duration|delay|fx|speeds|_default|easing|complete|propertyMap|fn|support|165|useTransitionEnd|355|enabled|Array|03|false|045|transitionEnd|95|parse|hasOwnProperty|175|transform3d|toLowerCase|68|86|data|||new||transitionDelay|replace||ms|easeOutCubic|955|515|645|215|easeInOutCubic|easeInQuart|61|895|easeOutQuad|easeInExpo|135|785|easeInOutCirc|Moz|795|easeInQuad|easeInOutExpo|easeOutExpo|035|085|82|easeInOutQuad|98|04|easeInCirc|335|94|075|53|easeOutCirc|455|camelCase|cssNumber|div|match|createElement|navigator|userAgent|indexOf|cssProps|inArray|document|paddingTop|modifiedForLayerSlider|marginBottom|marginRight|marginTop|version|paddingBottom|paddingRight|paddingLeft|chrome|685||toUpperCase|MSTransitionEnd|substr|snap|charAt|675||055|easeInCubic|msTransition||webkitTransitionEnd|OTransition|transitionend|MozTransition|oTransitionEnd|marginLeft|WebkitTransition|length|90deg|Webkit|275|WebkitTransform|instanceof|jquery|constructor|arguments|unshift|265|easeInOutBack|735|easeInBack|easeOutBack|885|jQuery|t3dx|t3dy|window|bind|setTimeout|offsetWidth|getTransitionValue|unbind|_|0deg|t3dz|zA|Z0|continue|445|slice|84|easeInOutSine|07|easeInSine|easeInOutQuint|755|855|06|easeOutQuint|745|easeInOutQuart|575|||||565|easeOutQuart|easeOutSine|easeInQuint|715|77".split(
      "|"
    )
  )
);
