(function(e){function t(t){for(var i,n,s=t[0],l=t[1],c=t[2],u=0,b=[];u<s.length;u++)n=s[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&b.push(o[n][0]),o[n]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],i=!0,s=1;s<a.length;s++){var l=a[s];0!==o[l]&&(i=!1)}i&&(r.splice(t--,1),e=n(n.s=a[0]))}return e}var i={},o={app:0},r=[];function n(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=i,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(a,i,function(t){return e[t]}.bind(null,i));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/cuthen/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;r.push([1,"chunk-vendors"]),a()})({0:function(e,t){},"0356":function(e,t,a){},"0fbf":function(e,t,a){"use strict";a("0356")},1:function(e,t,a){e.exports=a("56d7")},"1e07":function(e,t,a){"use strict";a("c4c1")},"1f44":function(e,t,a){},2582:function(e,t,a){},"2c4e":function(e,t,a){},"2eb9":function(e,t,a){"use strict";a("2582")},"2f52":function(e,t,a){},"30bb":function(e,t,a){"use strict";a("2c4e")},"32e4":function(e,t,a){"use strict";a("2f52")},4417:function(e,t,a){},4573:function(e,t,a){},"4ee6":function(e,t,a){},5356:function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("4121");var i=a("7a23");const o={class:"banner"};function r(e,t,a,r,n,s){const l=Object(i["E"])("top-bar"),c=Object(i["E"])("nav-bar"),d=Object(i["E"])("router-view"),u=Object(i["E"])("v-footer");return Object(i["w"])(),Object(i["h"])("div",{class:Object(i["r"])(["main","skin-"+n.skin])},[Object(i["i"])("div",o,[Object(i["l"])(l,{title:"CUThen",version:n.version},null,8,["version"]),Object(i["l"])(c)]),Object(i["l"])(d,null,{default:Object(i["N"])(({Component:e})=>[Object(i["l"])(i["c"],{name:n.transitionName,mode:"out-in"},{default:Object(i["N"])(()=>[(Object(i["w"])(),Object(i["f"])(i["b"],null,[(Object(i["w"])(),Object(i["f"])(Object(i["F"])(e)))],1024))]),_:2},1032,["name"])]),_:1}),Object(i["l"])(u,{contributors:[{name:"Alked 🐂🍺",url:"https://github.com/Alked"},{name:"Xxl-Valeria 🦭",url:"https://github.com/Xxl-Valeria"}],version:n.version},null,8,["contributors","version"])],2)}const n={class:"top-bar"},s={class:"info"};function l(e,t,a,o,r,l){return Object(i["w"])(),Object(i["h"])("div",n,[Object(i["i"])("span",s,Object(i["H"])(a.title),1)])}var c={name:"TopBar",props:{title:String,version:String}},d=(a("32e4"),a("6b0d")),u=a.n(d);const b=u()(c,[["render",l],["__scopeId","data-v-696d9bc4"]]);var p=b;const h=e=>(Object(i["z"])("data-v-a9b8edd6"),e=e(),Object(i["x"])(),e),m={class:"nav-bar"},g=h(()=>Object(i["i"])("i",{class:"pi pi-pencil"},null,-1)),v=Object(i["k"])("   Edit "),f=[g,v],O=h(()=>Object(i["i"])("i",{class:"pi pi-calendar"},null,-1)),j=Object(i["k"])("   Schedule "),k=[O,j];function y(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",m,[Object(i["i"])("div",{class:Object(i["r"])(["nav-button left",{active:n.isEditMode,inactive:!n.isEditMode}]),onClick:t[0]||(t[0]=t=>e.$router.replace("/edit"))},f,2),Object(i["i"])("div",{class:Object(i["r"])(["nav-button right",{active:!n.isEditMode,inactive:n.isEditMode}]),onClick:t[1]||(t[1]=t=>e.$router.replace("/schedule"))},k,2)])}var w={name:"NavBar",computed:{isEditMode(){return"/edit"===this.$route.fullPath}}};a("6085");const S=u()(w,[["render",y],["__scopeId","data-v-a9b8edd6"]]);var E=S;const C=e=>(Object(i["z"])("data-v-839fb9e2"),e=e(),Object(i["x"])(),e),M={class:"footer"},A={class:"col"},z=C(()=>Object(i["i"])("span",{class:"title bold"},"CUThen",-1)),x={class:"bold small"},I=C(()=>Object(i["i"])("span",{class:"bold small"},[Object(i["i"])("a",{href:"https://github.com/Alked/cuthen",target:"_blank"},[Object(i["i"])("i",{class:"pi pi-github"}),Object(i["k"])(" github.com/Alked/cuthen ")])],-1)),D={class:"col"},P=C(()=>Object(i["i"])("span",{class:"bold"},"Developed by",-1)),$=["href"],L=C(()=>Object(i["i"])("i",{class:"pi pi-github"},null,-1));function _(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",M,[Object(i["i"])("div",A,[z,Object(i["i"])("span",x,Object(i["H"])(a.version),1),I]),Object(i["i"])("div",D,[P,(Object(i["w"])(!0),Object(i["h"])(i["a"],null,Object(i["C"])(a.contributors,e=>(Object(i["w"])(),Object(i["h"])("span",{class:"contributor",key:e.name},[Object(i["i"])("a",{href:e.url,target:"_blank"},[L,Object(i["k"])(" "+Object(i["H"])(e.name),1)],8,$)]))),128))])])}var N={name:"VFooter",props:{contributors:Array,version:String}};a("f4db");const U=u()(N,[["render",_],["__scopeId","data-v-839fb9e2"]]);var T=U,B={components:{TopBar:p,NavBar:E,VFooter:T},data(){return{skin:"dark",transitionName:"",refreshed:!1,version:"v0.0.13 alpha"}},watch:{$route(){if(this.refreshed)this.refreshed=!1;else switch(this.$route.fullPath){case"/edit":this.transitionName="slide-fade-left";break;case"/schedule":this.transitionName="slide-fade-right";break;default:break}}},created(){this.refreshed=!0}};a("fd86");const F=u()(B,[["render",r]]);var H=F,q=a("6605");function V(e,t,a,o,r,n){const s=Object(i["E"])("edit");return Object(i["w"])(),Object(i["f"])(s)}const G={class:"edit-view"},K={class:"info-block"},R={class:"info-col"},Y={class:"info-col"},J={class:"buttons"},X=["disabled"],W={class:"pi pi-check"},Z={class:"pi pi-times"},Q=["disabled"],ee={class:"pi pi-check"},te=Object(i["j"])('<div class="info-col help" data-v-23087238><div class="help-entry" data-v-23087238><div class="icon-wrapper" data-v-23087238><i class="pi pi-user" data-v-23087238></i></div><p class="description" data-v-23087238> A nickname to help identify yourself when scheduling. </p></div><div class="help-entry" data-v-23087238><div class="icon-wrapper" data-v-23087238><i class="pi pi-clock" data-v-23087238></i></div><p class="description" data-v-23087238> The timezone your availability corresponds to. </p></div><div class="help-entry" data-v-23087238><div class="icon-wrapper" data-v-23087238><i class="pi pi-code" data-v-23087238></i></div><p class="description" data-v-23087238> A unique code that encodes your availability, your nickname and your timeozne. </p></div></div><div class="info-col help" data-v-23087238><div class="help-entry" data-v-23087238><div class="slot-sample available" data-v-23087238></div><p class="description wide" data-v-23087238> Available: I&#39;m happy to CUThen. <br data-v-23087238> ▸ Left click or drag on <span class="slot-inline unavailable" data-v-23087238>unavailable</span> slots. </p></div><div class="help-entry" data-v-23087238><div class="slot-sample uncertain" data-v-23087238></div><p class="description wide" data-v-23087238> Uncertain: I might be able to meet. <br data-v-23087238> ▸ Right click or drag on <span class="slot-inline available" data-v-23087238>available</span> or <span class="slot-inline unavailable" data-v-23087238>unavailable</span> slots. </p></div><div class="help-entry" data-v-23087238><div class="slot-sample unavailable" data-v-23087238></div><p class="description wide" data-v-23087238> Unavailable: I can&#39;t meet at this time. <br data-v-23087238> ▸ Left click or drag on <span class="slot-inline available" data-v-23087238>available</span> or <span class="slot-inline uncertain" data-v-23087238>uncertain</span> slots. </p></div></div>',2);function ae(e,t,a,o,r,n){const s=Object(i["E"])("text-box"),l=Object(i["E"])("drop-box"),c=Object(i["E"])("grid");return Object(i["w"])(),Object(i["h"])("div",G,[Object(i["i"])("div",K,[Object(i["i"])("div",R,[Object(i["l"])(s,{icon:"user",placeholder:"Insert a nickname",prohibitedAlphabet:"$",errorMessage:r.nicknameErrorMessage,errorNotifier:r.nicknameErrorNotifier,data:r.nickname,"onUpdate:data":t[0]||(t[0]=e=>r.nickname=e)},null,8,["errorMessage","errorNotifier","data"]),Object(i["l"])(l,{icon:"clock",entries:r.timezones,selectedID:r.timezone,"onUpdate:selectedID":t[1]||(t[1]=e=>r.timezone=e)},null,8,["entries","selectedID"])]),Object(i["i"])("div",Y,[Object(i["l"])(s,{icon:"code",data:r.code,"onUpdate:data":t[2]||(t[2]=e=>r.code=e),selectAllOnClick:!0,errorMessage:r.codeErrorMessage,errorNotifier:r.codeErrorNotifier},null,8,["data","errorMessage","errorNotifier"]),Object(i["i"])("div",J,[Object(i["i"])("button",{class:Object(i["r"])(["button",{failed:r.loadFailed}]),onClick:t[3]||(t[3]=(...e)=>n.onClickLoad&&n.onClickLoad(...e)),disabled:r.loadDisabled},[Object(i["O"])(Object(i["i"])("i",W,null,512),[[i["L"],r.loadDisabled&&!r.loadFailed]]),Object(i["O"])(Object(i["i"])("i",Z,null,512),[[i["L"],r.loadFailed]]),Object(i["k"])(" "+Object(i["H"])(n.loadLabel),1)],10,X),Object(i["i"])("button",{class:"button",onClick:t[4]||(t[4]=(...e)=>n.onClickCopy&&n.onClickCopy(...e)),disabled:r.copyDisabled},[Object(i["O"])(Object(i["i"])("i",ee,null,512),[[i["L"],r.copyDisabled]]),Object(i["k"])(" "+Object(i["H"])(n.copyLabel),1)],8,Q)])]),te]),Object(i["l"])(c,{isEditable:!0,gridcode:this.gridcode,"onUpdate:gridcode":t[5]||(t[5]=e=>this.gridcode=e)},null,8,["gridcode"])])}var ie=a("3416"),oe=a("5c1a"),re=a.n(oe);let ne="";const se=[];Object(ie["a"])().forEach(e=>{const t=e.rawOffsetInMinutes/60;let a="";const i=Math.abs(t);i<10&&(a+="0"),a+=Math.floor(i),i!==Math.floor(i)?a+=":30":a+=":00",a=t<0?"-"+a:"+"+a;let o=e.name;o=o.replace("America","US").replace("Pacific","PAC").replace("Africa","AF").replace("Europe","EU").replace("Asia","AS").replace("Australia","AU").replace("Indian","IN").replace("Argentina","AR").replace("Antarctica","AN").replace("Atlantic","ATL").replace("Arctic","ARC");const r=re.a.md.md5.create();r.update(`${o}:${a}`);const n=r.digest().toHex().slice(0,6);se.push({printed:`(UTC${a}) ${o}`,value:e.rawOffsetInMinutes,id:n}),Intl.DateTimeFormat().resolvedOptions().timeZone===e.name&&(ne=n)});const le=ne,ce=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],de=["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],ue=["0 AM","1 AM","2 AM","3 AM","4 AM","5 AM","6 AM","7 AM","8 AM","9 AM","10 AM","11 AM","12 PM","1 PM","2 PM","3 PM","4 PM","5 PM","6 PM","7 PM","8 PM","9 PM","10 PM","11 PM","0 AM"],be=["abomasnow","abra","absol","accelgor","aegislash","aerodactyl","aggron","aipom","alakazam","alomomola","altaria","amaura","ambipom","amoonguss","ampharos","anorith","arbok","arcanine","arceus","archen","archeops","ariados","armaldo","aromatisse","aron","articuno","audino","aurorus","avalugg","axew","azelf","azumarill","azurill","bagon","baltoy","banette","barbaracle","barboach","basculin","bastiodon","bayleef","beartic","beautifly","beedrill","beheeyem","beldum","bellossom","bellsprout","bergmite","bibarel","bidoof","binacle","bisharp","blastoise","blaziken","blissey","blitzle","boldore","bonsly","bouffalant","braixen","braviary","breloom","bronzong","bronzor","budew","buizel","bulbasaur","buneary","bunnelby","burmy","butterfree","cacnea","cacturne","camerupt","carbink","carnivine","carracosta","carvanha","cascoon","castform","caterpie","celebi","chandelure","chansey","charizard","charmander","charmeleon","chatot","cherrim","cherubi","chesnaught","chespin","chikorita","chimchar","chimecho","chinchou","chingling","cinccino","clamperl","clauncher","clawitzer","claydol","clefable","clefairy","cleffa","cloyster","cobalion","cofagrigus","combee","combusken","conkeldurr","corphish","corsola","cottonee","cradily","cranidos","crawdaunt","cresselia","croagunk","crobat","croconaw","crustle","cryogonal","cubchoo","cubone","cyndaquil","darkrai","darmanitan","darumaka","dedenne","deerling","deino","delcatty","delibird","delphox","deoxys","dewgong","dewott","dialga","diancie","diggersby","diglett","ditto","dodrio","doduo","donphan","doublade","dragalge","dragonair","dragonite","drapion","dratini","drifblim","drifloon","drilbur","drowzee","druddigon","ducklett","dugtrio","dunsparce","duosion","durant","dusclops","dusknoir","duskull","dustox","dwebble","eelektrik","eelektross","eevee","ekans","electabuzz","electivire","electrike","electrode","elekid","elgyem","emboar","emolga","empoleon","entei","escavalier","espeon","espurr","excadrill","exeggcute","exeggutor","exploud","farfetch","fearow","feebas","fennekin","feraligatr","ferroseed","ferrothorn","finneon","flaaffy","flabébé","flareon","fletchinder","fletchling","floatzel","floette","florges","flygon","foongus","forretress","fraxure","frillish","froakie","frogadier","froslass","furfrou","furret","gabite","gallade","galvantula","garbodor","garchomp","gardevoir","gastly","gastrodon","genesect","gengar","geodude","gible","gigalith","girafarig","giratina","glaceon","glalie","glameow","gligar","gliscor","gloom","gogoat","golbat","goldeen","golduck","golem","golett","golurk","goodra","goomy","gorebyss","gothita","gothitelle","gothorita","gourgeist","granbull","graveler","greninja","grimer","grotle","groudon","grovyle","growlithe","grumpig","gulpin","gurdurr","gyarados","happiny","hariyama","haunter","hawlucha","haxorus","heatmor","heatran","heliolisk","helioptile","heracross","herdier","hippopotas","hippowdon","hitmonchan","hitmonlee","hitmontop","honchkrow","honedge","ho-oh","hoopa","hoothoot","hoppip","horsea","houndoom","houndour","huntail","hydreigon","hypno","igglybuff","illumise","infernape","inkay","ivysaur","jellicent","jigglypuff","jirachi","jolteon","joltik","jumpluff","jynx","kabuto","kabutops","kadabra","kakuna","kangaskhan","karrablast","kecleon","keldeo","kingdra","kingler","kirlia","klang","klefki","klink","klinklang","koffing","krabby","kricketot","kricketune","krokorok","krookodile","kyogre","kyurem","lairon","lampent","landorus","lanturn","lapras","larvesta","larvitar","latias","latios","leafeon","leavanny","ledian","ledyba","lickilicky","lickitung","liepard","lileep","lilligant","lillipup","linoone","litleo","litwick","lombre","lopunny","lotad","loudred","lucario","ludicolo","lugia","lumineon","lunatone","luvdisc","luxio","luxray","machamp","machoke","machop","magby","magcargo","magikarp","magmar","magmortar","magnemite","magneton","magnezone","makuhita","malamar","mamoswine","manaphy","mandibuzz","manectric","mankey","mantine","mantyke","maractus","mareep","marill","marowak","marshtomp","masquerain","mawile","medicham","meditite","meganium","meloetta","meowstic","meowth","mesprit","metagross","metang","metapod","mew","mewtwo","mienfoo","mienshao","mightyena","milotic","miltank","mime jr.","minccino","minun","misdreavus","mismagius","moltres","monferno","mothim","mr. mime","mudkip","muk","munchlax","munna","murkrow","musharna","natu","nidoking","nidoqueen","nidoran","nidoran♂","nidorina","nidorino","nincada","ninetales","ninjask","noctowl","noibat","noivern","nosepass","numel","nuzleaf","octillery","oddish","omanyte","omastar","onix","oshawott","pachirisu","palkia","palpitoad","pancham","pangoro","panpour","pansage","pansear","paras","parasect","patrat","pawniard","pelipper","persian","petilil","phanpy","phantump","phione","pichu","pidgeot","pidgeotto","pidgey","pidove","pignite","pikachu","piloswine","pineco","pinsir","piplup","plusle","politoed","poliwag","poliwhirl","poliwrath","ponyta","poochyena","porygon","porygon2","porygon-z","primeape","prinplup","probopass","psyduck","pumpkaboo","pupitar","purrloin","purugly","pyroar","quagsire","quilava","quilladin","qwilfish","raichu","raikou","ralts","rampardos","rapidash","raticate","rattata","rayquaza","regice","regigigas","regirock","registeel","relicanth","remoraid","reshiram","reuniclus","rhydon","rhyhorn","rhyperior","riolu","roggenrola","roselia","roserade","rotom","rufflet","sableye","salamence","samurott","sandile","sandshrew","sandslash","sawk","sawsbuck","scatterbug","sceptile","scizor","scolipede","scrafty","scraggy","scyther","seadra","seaking","sealeo","seedot","seel","seismitoad","sentret","serperior","servine","seviper","sewaddle","sharpedo","shaymin","shedinja","shelgon","shellder","shellos","shelmet","shieldon","shiftry","shinx","shroomish","shuckle","shuppet","sigilyph","silcoon","simipour","simisage","simisear","skarmory","skiddo","skiploom","skitty","skorupi","skrelp","skuntank","slaking","slakoth","sliggoo","slowbro","slowking","slowpoke","slugma","slurpuff","smeargle","smoochum","sneasel","snivy","snorlax","snorunt","snover","snubbull","solosis","solrock","spearow","spewpa","spheal","spinarak","spinda","spiritomb","spoink","spritzee","squirtle","stantler","staraptor","staravia","starly","starmie","staryu","steelix","stoutland","stunfisk","stunky","sudowoodo","suicune","sunflora","sunkern","surskit","swablu","swadloon","swalot","swampert","swanna","swellow","swinub","swirlix","swoobat","sylveon","taillow","talonflame","tangela","tangrowth","tauros","teddiursa","tentacool","tentacruel","tepig","terrakion","throh","thundurus","timburr","tirtouga","togekiss","togepi","togetic","torchic","torkoal","tornadus","torterra","totodile","toxicroak","tranquill","trapinch","treecko","trevenant","tropius","trubbish","turtwig","tympole","tynamo","typhlosion","tyranitar","tyrantrum","tyrogue","tyrunt","umbreon","unfezant","unown","ursaring","uxie","vanillish","vanillite","vanilluxe","vaporeon","venipede","venomoth","venonat","venusaur","vespiquen","vibrava","victini","victreebel","vigoroth","vileplume","virizion","vivillon","volbeat","volcanion","volcarona","voltorb","vullaby","vulpix","wailmer","wailord","walrein","wartortle","watchog","weavile","weedle","weepinbell","weezing","whimsicott","whirlipede","whiscash","whismur","wigglytuff","wingull","wobbuffet","woobat","wooper","wormadam","wurmple","wynaut","xatu","xerneas","yamask","yanma","yanmega","yveltal","zangoose","zapdos","zebstrika","zekrom","zigzagoon","zoroark","zorua","zubat","zweilous","zygarde"];a("13d5");function pe(e){switch(e){case 0:return"00";case 1:return"11";case 2:return"01";default:break}return null}function he(e){switch(e){case"00":return 0;case"11":return 1;case"01":return 2;default:break}return null}function me(e){let t="0b";e.forEach(e=>{e.forEach(e=>{t+=pe(e)})});const a=BigInt(t),i=a.toString(36);return i}function ge(e,t){return[...e.toString()].reduce((e,a)=>e*BigInt(t)+BigInt(parseInt(a,t)),0n)}function ve(e){let t=e;while(t.length<336)t="0"+t;return t}function fe(e){const t=ge(e,36),a=ve(t.toString(2)),i=[...new Array(7)].map(()=>[...new Array(24)].map(()=>0));let o=0;for(let r=0;r<7;r+=1)for(let e=0;e<24;e+=1)i[r][e]=he(a.slice(o,o+2)),o+=2;return i}function Oe(e){let t=0;try{t=ge(e,36)}catch(i){return!1}const a=t.toString(2);return!(a.length>336)}function je(e){if(0===e.length)return"0";let t=ge(e[0],36);return e.slice(1).forEach(e=>{t&=ge(e,36)}),t.toString(36)}function ke(e){const t=[];return fe(e).forEach((e,a)=>{let i=e[0],o={day:a,start:0,end:1,state:i};e.slice(1).forEach((e,r)=>{e===i?o.end=r+2:(t.push(o),o={day:a,start:r+1,end:r+2,state:e},i=e)}),t.push(o)}),t}function ye(e,t){const a=ke(e).filter(e=>e.day===t.day).filter(e=>2===e.state).filter(e=>e.start>=t.start&&e.end<=t.end);return a}function we(e,t,a){const i=se.filter(e=>e.id===t)[0].value,o=se.filter(e=>e.id===a)[0].value;let r="";fe(e).forEach(e=>{r=r.concat(e.join(""))});let n=Math.round((o-i)/60);n<0?(n=Math.abs(n),r=r.slice(n).concat(r.slice(0,n))):r=r.slice(-n).concat(r.slice(0,168-n));let s=[],l=[];for(let c=0;c<168;c+=1)c%24===0&&(s.push(l),l=[]),l.push(parseInt(r[c],10));return s.push(l),s=s.slice(1),me(s)}function Se(e){const t=e.split("$"),[a,i,o]=t;let r=0,n="";if(3!==t.length?r=1:Oe(i)?void 0===se.find(e=>e.id===o)&&(r=3):r=2,r>0)switch(r){case 1:n="Corrupted code: bad format";break;case 2:n="Corrupted code: bad grid code";break;case 3:n="Corrupted code: bad timezone";break;default:n="Corrupted code: unknwon"}return[n,a,i,o]}var Ee=Se;const Ce={class:"grid",oncontextmenu:"return false;"},Me={class:"columns"};function Ae(e,t,a,o,r,n){const s=Object(i["E"])("column");return Object(i["w"])(),Object(i["h"])("div",Ce,[Object(i["i"])("div",Me,[(Object(i["w"])(),Object(i["h"])(i["a"],null,Object(i["C"])(7,e=>Object(i["l"])(s,{key:e,day:r.daysAbbr[e-1],isEditable:a.isEditable,weeklyState:r.weeklyStates[e-1],"onUpdate:weeklyState":t=>r.weeklyStates[e-1]=t},null,8,["day","isEditable","weeklyState","onUpdate:weeklyState"])),64))])])}const ze={class:"column"},xe={class:"day"};function Ie(e,t,a,o,r,n){const s=Object(i["E"])("toggle-switch"),l=Object(i["E"])("cell");return Object(i["w"])(),Object(i["h"])("div",ze,[Object(i["i"])("div",xe,Object(i["H"])(a.day),1),Object(i["O"])(Object(i["l"])(s,{isOn:r.isAllAvailable,"onUpdate:isOn":t[0]||(t[0]=e=>r.isAllAvailable=e),onSwitched:n.onAllCellStateSwitched},null,8,["isOn","onSwitched"]),[[i["L"],a.isEditable]]),Object(i["i"])("div",{onMousemove:t[1]||(t[1]=(...e)=>n.updateCellLabelOpacity&&n.updateCellLabelOpacity(...e)),onMouseleave:t[2]||(t[2]=(...e)=>n.hideCellLabels&&n.hideCellLabels(...e))},[(Object(i["w"])(),Object(i["h"])(i["a"],null,Object(i["C"])(24,e=>Object(i["l"])(l,{key:e,end:e,mousePos:r.mousePos,isEditable:a.isEditable,cellState:r.cellStates[e-1],"onUpdate:cellState":t=>r.cellStates[e-1]=t},null,8,["end","mousePos","isEditable","cellState","onUpdate:cellState"])),64))],32)])}function De(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",{class:"cell",onMousedown:t[0]||(t[0]=(...e)=>n.onMouseDown&&n.onMouseDown(...e)),onMouseenter:t[1]||(t[1]=(...e)=>n.onMouseEnter&&n.onMouseEnter(...e)),style:Object(i["s"])({background:[a.isEditable?"var(--cell-bg-color)":"var(--cell-bg-color-uneditable)","var(--cell-available-color)","var(--cell-uncertain-color)"][a.cellState]})},[Object(i["i"])("span",{class:"timespan",ref:"timespan",style:Object(i["s"])({opacity:n.opacity+"%",color:0===a.cellState?"var(--cell-timespan-color)":"var(--cell-timespan-active-color)"})},Object(i["H"])(n.timespan),5)],36)}var Pe={name:"Cell",props:{end:Number,mousePos:Array,cellState:Number,isEditable:Boolean},data(){return{cellPos:[0,0]}},computed:{timespan(){const{start:e,end:t}={start:this.end-1,end:this.end};return`${ue[e]} - ${ue[t]}`},opacity(){if(0!==this.cellState)return 100;if(-1===this.mousePos[0])return 0;const e=400,t=this.mousePos[0],a=this.mousePos[1];let i=Math.sqrt((t-this.cellPos.x)**2+(a-this.cellPos.y)**2);return i>e&&(i=e),100*(1-i/e)}},methods:{onMouseDown(e){if(this.isEditable)switch(e.button){case 0:this.cellState>0?this.$emit("update:cellState",0):this.$emit("update:cellState",1);break;case 2:this.cellState>1?this.$emit("update:cellState",0):this.$emit("update:cellState",2);break;default:break}},onMouseEnter(e){if(this.isEditable&&0!==e.buttons)switch(e.buttons){case 1:this.cellState>0?this.$emit("update:cellState",0):this.$emit("update:cellState",1);break;case 2:this.cellState>1?this.$emit("update:cellState",0):this.$emit("update:cellState",2);break;default:break}},updateCellPos(){this.cellPos=this.$refs.timespan.getBoundingClientRect()}},created(){window.addEventListener("resize",this.updateCellPos),window.addEventListener("scroll",this.updateCellPos)},activated(){this.updateCellPos()},unmounted(){window.removeEventListener("resize",this.updateCellPos),window.removeEventListener("scroll",this.updateCellPos)}};a("0fbf");const $e=u()(Pe,[["render",De],["__scopeId","data-v-c8588d28"]]);var Le=$e;function _e(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",{class:"switch",onClick:t[0]||(t[0]=(...e)=>n.onClick&&n.onClick(...e)),style:Object(i["s"])({background:a.isOn?"var(--switch-active-bg-color)":"var(--switch-inactive-bg-color)"})},[Object(i["i"])("div",{class:"toggle",style:Object(i["s"])({"margin-left":a.isOn?"1.7rem":"0",background:a.isOn?"var(--switch-toggle-on-color)":"var(--switch-toggle-color)"})},null,4)],4)}var Ne={name:"ToggleSwitch",props:{isOn:Boolean},methods:{onClick(){this.$emit("update:isOn",!this.isOn),this.$emit("switched",!this.isOn)}}};a("c428");const Ue=u()(Ne,[["render",_e],["__scopeId","data-v-4c00d80c"]]);var Te=Ue,Be={name:"Column",components:{Cell:Le,ToggleSwitch:Te},props:{day:String,isEditable:Boolean,weeklyState:Array},data(){return{mousePos:[-999,-999],cellStates:[...new Array(24)].map(()=>0),isAllAvailable:!1}},methods:{updateCellLabelOpacity(e){this.mousePos=[e.clientX,e.clientY]},hideCellLabels(){this.mousePos=[-1]},onAllCellStateSwitched(e){this.cellStates=e?[...new Array(24)].map(()=>1):[...new Array(24)].map(()=>0)}},watch:{weeklyState(e){this.cellStates=e},cellStates(e){e.every(e=>e>0)?this.isAllAvailable=!0:this.isAllAvailable=!1,this.$emit("update:weeklyState",e)}}};a("9bf5");const Fe=u()(Be,[["render",Ie],["__scopeId","data-v-84001d96"]]);var He=Fe,qe={name:"Grid",props:{isEditable:Boolean,gridcode:String},data(){return{daysAbbr:de,weeklyStates:[...new Array(7)].map(()=>[...new Array(24)].map(()=>0))}},components:{Column:He},watch:{gridcode(){this.weeklyStates=fe(this.gridcode)},weeklyStates:{handler(){const e=me(this.weeklyStates);this.$emit("update:gridcode",e)},deep:!0}}};a("e95f");const Ve=u()(qe,[["render",Ae],["__scopeId","data-v-440ef5ee"]]);var Ge=Ve;const Ke=e=>(Object(i["z"])("data-v-1b746613"),e=e(),Object(i["x"])(),e),Re={class:"error-msg"},Ye=Ke(()=>Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-exclamation-triangle"])},null,-1)),Je={class:"textbox"},Xe={class:"icon"},We=["placeholder"];function Ze(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",null,[Object(i["i"])("div",{class:Object(i["r"])(["error",{show:r.showError}])},[Object(i["i"])("span",Re,[Ye,Object(i["k"])("   "+Object(i["H"])(r.errorMessageLocal),1)])],2),Object(i["i"])("div",Je,[Object(i["i"])("div",Xe,[Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-"+a.icon])},null,2)]),Object(i["O"])(Object(i["i"])("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>r.dataLocal=e),placeholder:a.placeholder,onClick:t[1]||(t[1]=(...e)=>n.onClick&&n.onClick(...e)),onKeydown:t[2]||(t[2]=(...e)=>n.onKeydown&&n.onKeydown(...e))},null,40,We),[[i["K"],r.dataLocal]])])])}a("caad"),a("33d1"),a("ea98");var Qe={name:"TextBox",props:{icon:String,placeholder:String,data:String,selectAllOnClick:Boolean,errorMessage:String,errorNotifier:Number,prohibitedAlphabet:String},data(){return{dataLocal:"",showError:!1,errorMessageLocal:""}},methods:{onClick(e){this.selectAllOnClick&&e.target.select()},onKeydown(){this.showError=!1}},watch:{dataLocal(e){if(this.prohibitedAlphabet&&this.prohibitedAlphabet.includes(e.at(-1)))return this.errorMessageLocal=`<${e.at(-1)}> is prohibited`,this.showError=!0,void(this.dataLocal=e.slice(0,-1));this.$emit("update:data",e)},data(e){this.dataLocal=e},errorNotifier(){this.showError=0!==this.errorMessage.length,0!==this.errorMessage.length&&(this.errorMessageLocal=this.errorMessage)}}};a("aa9c");const et=u()(Qe,[["render",Ze],["__scopeId","data-v-1b746613"]]);var tt=et;const at={class:"textbox"},it={class:"icon"},ot={class:"select"},rt=["value"];function nt(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",at,[Object(i["i"])("div",it,[Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-"+a.icon])},null,2)]),Object(i["i"])("div",ot,[Object(i["O"])(Object(i["i"])("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>r.selectedIDLocal=e)},[(Object(i["w"])(!0),Object(i["h"])(i["a"],null,Object(i["C"])(a.entries,e=>(Object(i["w"])(),Object(i["h"])("option",{key:e,value:e.id},Object(i["H"])(e.printed),9,rt))),128))],512),[[i["J"],r.selectedIDLocal]])])])}var st={name:"DropBox",props:{icon:String,entries:Array,selectedID:String},data(){return{selectedIDLocal:""}},watch:{selectedIDLocal(e){this.$emit("update:selectedID",e)},selectedID(e){this.selectedIDLocal=e}}};a("2eb9");const lt=u()(st,[["render",nt],["__scopeId","data-v-7e8c09dc"]]);var ct=lt,dt={name:"Edit",components:{Grid:Ge,TextBox:tt,DropBox:ct},data(){return{loadDisabled:!1,loadFailed:!1,copyDisabled:!1,timezones:[],timezone:"",nickname:"",gridcode:"0",code:"",codeErrorMessage:"",codeErrorNotifier:0,nicknameErrorMessage:"",nicknameErrorNotifier:0}},computed:{loadLabel(){return this.loadDisabled?"":"Load"},copyLabel(){return this.copyDisabled?"":"Copy"},codeBuilder(){return`${this.nickname}$${this.gridcode}$${this.timezone}`}},methods:{onClickLoad(){const[e,t,a,i]=Ee(this.code);""===e?(this.nickname=t,this.gridcode=a,this.timezone=i):(this.codeErrorNotifier+=1,this.loadFailed=!0,this.codeErrorMessage=e),this.loadDisabled=!0,setTimeout(()=>{this.loadDisabled=!1,this.loadFailed=!1},2e3)},onClickCopy(){navigator.clipboard.writeText(this.code),this.copyDisabled=!0,setTimeout(()=>{this.copyDisabled=!1},2e3)}},watch:{codeBuilder(e){this.code=e,localStorage.setItem("code",e)},code(){this.codeErrorMessage="",this.codeErrorNotifier+=1},nickname(e){""===e&&(this.nicknameErrorMessage="Nickname cannot be empty",this.nicknameErrorNotifier+=1)}},mounted(){if(this.timezones=se,this.timezone=le,localStorage.getItem("code")){const[e,t,a]=localStorage.getItem("code").split("$");this.nickname=e,this.gridcode=t,this.timezone=a}""===this.nickname&&(this.nickname=be[Math.round(1e5*Math.random())%be.length])}};a("cfbf");const ut=u()(dt,[["render",ae],["__scopeId","data-v-23087238"]]);var bt=ut,pt={name:"EditView",components:{Edit:bt}};const ht=u()(pt,[["render",V]]);var mt=ht;function gt(e,t,a,o,r,n){const s=Object(i["E"])("sched");return Object(i["w"])(),Object(i["f"])(s)}const vt={class:"schedule-view"},ft={class:"info-block"},Ot={class:"info-col"},jt=["disabled"],kt={class:"pi pi-check"},yt={class:"pi pi-times"},wt={class:"info-col"},St={class:"info-col"};function Et(e,t,a,o,r,n){const s=Object(i["E"])("text-box"),l=Object(i["E"])("drop-box"),c=Object(i["E"])("participant-card"),d=Object(i["E"])("card-holder"),u=Object(i["E"])("suggestion-card"),b=Object(i["E"])("grid");return Object(i["w"])(),Object(i["h"])("div",vt,[Object(i["i"])("div",ft,[Object(i["i"])("div",Ot,[Object(i["l"])(s,{icon:"code",data:r.code,"onUpdate:data":t[0]||(t[0]=e=>r.code=e),selectAllOnClick:!0,errorMessage:r.codeErrorMessage,errorNotifier:r.codeErrorNotifier},null,8,["data","errorMessage","errorNotifier"]),Object(i["i"])("button",{class:Object(i["r"])(["button",{failed:r.insertFailed}]),onClick:t[1]||(t[1]=(...e)=>n.onClickInsert&&n.onClickInsert(...e)),disabled:r.insertDisabled},[Object(i["O"])(Object(i["i"])("i",kt,null,512),[[i["L"],r.insertDisabled&&!r.insertFailed]]),Object(i["O"])(Object(i["i"])("i",yt,null,512),[[i["L"],r.insertFailed]]),Object(i["k"])(" "+Object(i["H"])(n.insertLabel),1)],10,jt),Object(i["l"])(l,{icon:"clock",entries:r.timezones,selectedID:r.timezone,"onUpdate:selectedID":t[2]||(t[2]=e=>r.timezone=e)},null,8,["entries","selectedID"])]),Object(i["i"])("div",wt,[Object(i["l"])(d,{icon:"users",title:"Participants"},{default:Object(i["N"])(()=>[(Object(i["w"])(!0),Object(i["h"])(i["a"],null,Object(i["C"])(n.orderedParticipants,e=>(Object(i["w"])(),Object(i["f"])(c,{key:e.id,name:e.details.name,id:e.id,prohibitDelete:"main-user"===e.id,onDeleteParticipant:n.onDeleteParticipant,involved:e.details.isInvolved,"onUpdate:involved":t=>e.details.isInvolved=t},null,8,["name","id","prohibitDelete","onDeleteParticipant","involved","onUpdate:involved"]))),128))]),_:1})]),Object(i["i"])("div",St,[Object(i["l"])(d,{icon:"check-circle",title:"Suggestions"},{default:Object(i["N"])(()=>[(Object(i["w"])(!0),Object(i["h"])(i["a"],null,Object(i["C"])(n.suggestionsVisualised,e=>(Object(i["w"])(),Object(i["f"])(u,{key:e,title:e.title,details:e.details,state:e.state},null,8,["title","details","state"]))),128))]),_:1})])]),Object(i["l"])(b,{isEditable:!1,gridcode:r.gridcode,"onUpdate:gridcode":t[3]||(t[3]=e=>r.gridcode=e)},null,8,["gridcode"])])}function Ct(e){const t=[];let a;return e.forEach(e=>{1===e.state&&t.push(e),e.state>0?void 0===a?a={day:e.day,start:e.start,end:e.end,state:e.state}:(a.end=e.end,a.state*=e.state):void 0!==a&&(a.state>1&&(a.state=2,t.push(a)),a=void 0)}),void 0!==a&&a.state>1&&(a.state=2,t.push(a)),t.sort((e,t)=>e.state<t.state?-1:e.state===t.state?t.end-t.start-(e.end-e.start):1),t}var Mt=Ct;const At={class:"card-holder"},zt={class:"heading"},xt={class:"icon"},It={class:"title"},Dt={class:"body-wrapper"},Pt={class:"body-scrollable"},$t={class:"body"};function Lt(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",At,[Object(i["i"])("div",zt,[Object(i["i"])("div",xt,[Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-"+a.icon])},null,2)]),Object(i["i"])("div",It,Object(i["H"])(a.title),1)]),Object(i["i"])("div",Dt,[Object(i["i"])("div",Pt,[Object(i["i"])("div",$t,[Object(i["D"])(e.$slots,"default",{},void 0,!0)])])])])}var _t={name:"CardHolder",props:{title:String,icon:String}};a("b5ad");const Nt=u()(_t,[["render",Lt],["__scopeId","data-v-76cc8376"]]);var Ut=Nt;const Tt=e=>(Object(i["z"])("data-v-6344f57d"),e=e(),Object(i["x"])(),e),Bt={class:"card"},Ft={class:"user"},Ht=Tt(()=>Object(i["i"])("div",{class:"icon"},[Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-user"])})],-1)),qt={class:"buttons"},Vt=Tt(()=>Object(i["i"])("i",{class:Object(i["r"])(["pi","pi-trash"])},null,-1)),Gt=[Vt];function Kt(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",Bt,[Object(i["i"])("div",Ft,[Ht,Object(i["i"])("span",{class:Object(i["r"])(["name",{crossed:!r.isInvolved}])},Object(i["H"])(a.name),3)]),Object(i["i"])("div",qt,[Object(i["i"])("button",{class:Object(i["r"])(["button","view",{long:a.prohibitDelete}]),onClick:t[0]||(t[0]=(...e)=>n.onClickView&&n.onClickView(...e))},[Object(i["i"])("i",{class:Object(i["r"])(["pi",{"pi-eye":r.isInvolved,"pi-eye-slash":!r.isInvolved}])},null,2)],2),a.prohibitDelete?Object(i["g"])("",!0):(Object(i["w"])(),Object(i["h"])("button",{key:0,class:"button delete",onClick:t[1]||(t[1]=(...e)=>n.onClickDelete&&n.onClickDelete(...e))},Gt))])])}var Rt={name:"ParticipantCard",props:{name:String,id:String,prohibitDelete:Boolean},data(){return{isInvolved:!0}},methods:{onClickView(){this.isInvolved=!this.isInvolved,this.$emit("update:involved",this.isInvolved)},onClickDelete(){this.$emit("deleteParticipant",this.id)}}};a("f218");const Yt=u()(Rt,[["render",Kt],["__scopeId","data-v-6344f57d"]]);var Jt=Yt;const Xt={class:"card"},Wt={class:"title"};function Zt(e,t,a,o,r,n){return Object(i["w"])(),Object(i["h"])("div",Xt,[Object(i["i"])("span",Wt,Object(i["H"])(a.title),1),(Object(i["w"])(!0),Object(i["h"])(i["a"],null,Object(i["C"])(a.details,e=>(Object(i["w"])(),Object(i["h"])("span",{class:Object(i["r"])(["detail",{green:1===a.state,yellow:2===a.state}]),key:e},Object(i["H"])(e),3))),128))])}var Qt={name:"SuggestionCard",props:{title:String,details:Array,state:Number}};a("30bb");const ea=u()(Qt,[["render",Zt],["__scopeId","data-v-52d91af3"]]);var ta=ea,aa={name:"Sched",components:{Grid:Ge,TextBox:tt,DropBox:ct,CardHolder:Ut,ParticipantCard:Jt,SuggestionCard:ta},data(){return{insertDisabled:!1,insertFailed:!1,code:"",codeErrorMessage:"",codeErrorNotifier:0,participants:{},gridcode:"0",suggestions:[],timezones:[],timezone:""}},computed:{insertLabel(){return this.insertDisabled?"":"Insert"},orderedParticipants(){const e=[];return Object.keys(this.participants).forEach(t=>{e.push({id:t,details:this.participants[t]})}),e.sort((e,t)=>e.details.insertedAt-t.details.insertedAt),e},suggestionsVisualised(){const e=[];return this.suggestions.forEach(t=>{const a=[];1===t.state?a.push("Everyone is available"):Object.keys(this.participants).forEach(e=>{const i=ye(this.participants[e].gridcode,t);if(0!==i.length){let t;t="main-user"===e?"You are uncertain for":this.participants[e].name+" is uncertain for";let o="";i.forEach((e,t)=>{const a=ue[e.start],r=ue[e.end];o=o.concat(`${a} - ${r}`),2===i.length&&0===t?o=o.concat(" and "):t<i.length-2?o=o.concat(", "):i.length>2&&t===i.length-2&&(o=o.concat(" and "))}),a.push(`${t} ${o}`)}}),e.push({title:`${ce[t.day]} ${ue[t.start]} - ${ue[t.end]}`,details:a,state:t.state})}),e}},methods:{onClickInsert(){const[e,t,a,i]=Ee(this.code);""===e?this.participants[(1e10*Math.random()).toFixed(0)]={name:t,gridcode:a,timezone:i,isInvolved:!0,insertedAt:Date.now()}:(this.codeErrorNotifier+=1,this.insertFailed=!0,this.codeErrorMessage=e),this.insertDisabled=!0,setTimeout(()=>{this.insertDisabled=!1,this.insertFailed=!1},800)},onDeleteParticipant(e){delete this.participants[e]},refreshGridcode(){const e=[];Object.keys(this.participants).forEach(t=>{if(this.participants[t].isInvolved){const a=we(this.participants[t].gridcode,this.participants[t].timezone,this.timezone);e.push(a)}}),this.gridcode=je(e),this.suggestions=Mt(ke(this.gridcode))}},watch:{participants:{handler(){this.refreshGridcode()},deep:!0},timezone(){this.refreshGridcode()}},mounted(){this.timezones=se,this.timezone=le;const[e,t,a]=localStorage.getItem("code").split("$");this.participants["main-user"]={name:e+" (You)",gridcode:t,timezone:a,isInvolved:!0,insertedAt:Date.now()}},activated(){const[e,t,a]=localStorage.getItem("code").split("$");this.participants["main-user"].name=e+" (You)",this.participants["main-user"].gridcode=t,this.participants["main-user"].timezone=a}};a("1e07");const ia=u()(aa,[["render",Et],["__scopeId","data-v-5c7151c4"]]);var oa=ia,ra={name:"ScheduleView",components:{Sched:oa}};const na=u()(ra,[["render",gt]]);var sa=na;const la=[{path:"/",redirect:()=>"edit"},{path:"/edit",name:"Edit",component:mt},{path:"/schedule",name:"Schedule",component:sa}],ca=Object(q["a"])({history:Object(q["b"])(),routes:la});var da=ca;Object(i["e"])(H).use(da).mount("#app")},6085:function(e,t,a){"use strict";a("7fd8")},"643c":function(e,t,a){},"7fd8":function(e,t,a){},"9bf5":function(e,t,a){"use strict";a("4ee6")},a7d4:function(e,t,a){},aa9c:function(e,t,a){"use strict";a("ab84")},ab84:function(e,t,a){},b5ad:function(e,t,a){"use strict";a("1f44")},c428:function(e,t,a){"use strict";a("643c")},c4c1:function(e,t,a){},cfbf:function(e,t,a){"use strict";a("ec81")},e95f:function(e,t,a){"use strict";a("4573")},ec81:function(e,t,a){},f218:function(e,t,a){"use strict";a("5356")},f4db:function(e,t,a){"use strict";a("4417")},fd86:function(e,t,a){"use strict";a("a7d4")}});
//# sourceMappingURL=app.7bf20297.js.map