(function(){"use strict";var A={9146:function(A,e,t){var n=t(9963),l=t(9471),o=t(6252),a=t.p+"img/sudoku.babf5217.png",w="data:image/png;base64,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";const d={id:"anchor-0",style:{background:"#ececec",padding:"30px"}},r=(0,o._)("div",{style:{height:"50px"}},null,-1),i=(0,o._)("div",{style:{height:"10px"}},null,-1),s=(0,o._)("div",{style:{height:"10px"}},null,-1),g={id:"anchor-1",style:{display:"none",background:"#ececec",padding:"30px"}},f=(0,o._)("span",{style:{fontSize:"50px"}},"难度选择",-1),c=(0,o._)("div",{style:{height:"50px"}},null,-1),u=(0,o._)("div",{style:{height:"10px"}},null,-1),C=(0,o._)("div",{style:{height:"10px"}},null,-1),y=(0,o._)("div",{style:{height:"50px"}},null,-1),B={id:"anchor-2",style:{display:"none",background:"#ececec",padding:"30px"}},h=(0,o._)("span",{style:{fontSize:"50px"}},"共9题",-1),E=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{color:"red",fontSize:"20px"}},"提示：点击格子空白处可以填入数字， 红色数字代表错误，黑色数字代表正确")],-1),D=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第1题")],-1),p=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas1",width:"830",height:"830"},null,-1),P=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第2题")],-1),Q=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas2",width:"830",height:"830"},null,-1),m=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第3题")],-1),v=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas3",width:"830",height:"830"},null,-1),I=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第4题")],-1),k=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas4",width:"830",height:"830"},null,-1),J=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第5题")],-1),z=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas5",width:"830",height:"830"},null,-1),H=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第6题")],-1),M=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas6",width:"830",height:"830"},null,-1),x=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第7题")],-1),O=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas7",width:"830",height:"830"},null,-1),_=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第8题")],-1),T=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas8",width:"830",height:"830"},null,-1),W=(0,o._)("div",{style:{height:"50px"}},[(0,o._)("span",{style:{fontSize:"20px"}},"第9题")],-1),b=(0,o._)("canvas",{style:{"border-width":"1px","border-style":"solid"},id:"canvas9",width:"830",height:"830"},null,-1),j=(0,o._)("img",{src:w,id:"image",style:{display:"none"}},null,-1),S=(0,o._)("div",{style:{height:"50px"}},null,-1);function R(A,e,t,n,l,w){const R=(0,o.up)("a-col"),K=(0,o.up)("a-row"),Z=(0,o.up)("a-button"),L=(0,o.up)("a-card"),X=(0,o.up)("LeftOutlined"),N=(0,o.up)("StarFilled"),U=(0,o.up)("SmileTwoTone"),Y=(0,o.up)("HeartTwoTone"),q=(0,o.up)("a-input");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",d,[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:4}),(0,o.Wm)(R,{span:16},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"1200px"},hoverable:"true"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o._)("img",{style:{width:"800px",height:"800px",opacity:"0.8"},alt:"example",src:a,onClick:e[0]||(e[0]=(...A)=>n.choose&&n.choose(...A))})])),_:1}),r,(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.choose},{default:(0,o.w5)((()=>[(0,o.Uk)(" 开始游戏 ")])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[i])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.leave},{default:(0,o.w5)((()=>[(0,o.Uk)(" 退出游戏")])),_:1},8,["onClick"])])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[s])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 分享游戏")])),_:1})])),_:1})])),_:1})])),_:1}),(0,o.Wm)(R,{span:4})])),_:1})]),(0,o._)("div",g,[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:4}),(0,o.Wm)(R,{span:16},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"1200px"},hoverable:"true"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:4},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{style:{fontSize:"80px"},onClick:n.back},null,8,["onClick"])])),_:1}),(0,o.Wm)(R,{span:16},{default:(0,o.w5)((()=>[f])),_:1}),(0,o.Wm)(R,{span:4})])),_:1}),c,(0,o.Wm)(K,{justify:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}})])),_:1}),(0,o.Wm)(R,{span:4},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:e[1]||(e[1]=A=>n.gamepage(20))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 简单模式 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[u])),_:1}),(0,o.Wm)(K,{justify:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}}),(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}})])),_:1}),(0,o.Wm)(R,{span:4},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:e[2]||(e[2]=A=>n.gamepage(40))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 中等模式 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[C])),_:1}),(0,o.Wm)(K,{justify:"start"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:12},{default:(0,o.w5)((()=>[(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}}),(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}}),(0,o.Wm)(N,{style:{fontSize:"36px",color:"yellow"}})])),_:1}),(0,o.Wm)(R,{span:4},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:e[3]||(e[3]=A=>n.gamepage(40))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 困难模式 ")])),_:1})])),_:1})])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[y])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.back},{default:(0,o.w5)((()=>[(0,o.Uk)("　返回　")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(R,{span:4})])),_:1})]),(0,o._)("div",B,[(0,o.Wm)(K,null,{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:4}),(0,o.Wm)(R,{span:16},{default:(0,o.w5)((()=>[(0,o.Wm)(L,{title:"数独游戏",bordered:!1,style:{width:"1000px",height:"8300px"},hoverable:"true"},{default:(0,o.w5)((()=>[(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(R,{span:4},{default:(0,o.w5)((()=>[(0,o.Wm)(X,{style:{fontSize:"80px"},onClick:n.back2},null,8,["onClick"])])),_:1}),(0,o.Wm)(R,{span:16},{default:(0,o.w5)((()=>[h])),_:1}),(0,o.Wm)(R,{span:4})])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[E])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[D])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[p])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[P])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[Q])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[m])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[v])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[I])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[k])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[J])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[z])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[H])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[M])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[x])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[O])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[_])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[T])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[W])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[b])),_:1}),j,(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[S])),_:1}),(0,o.Wm)(K,{justify:"center"},{default:(0,o.w5)((()=>[(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.solve},{default:(0,o.w5)((()=>[(0,o.Uk)(" 并发求解 ")])),_:1},8,["onClick"]),(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.flash},{default:(0,o.w5)((()=>[(0,o.Uk)(" 重新排列 ")])),_:1},8,["onClick"]),(0,o.Wm)(Z,{shape:"round",size:"large",onClick:n.back2},{default:(0,o.w5)((()=>[(0,o.Uk)(" 结束游戏 ")])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,o.Wm)(R,{span:4})])),_:1})]),(0,o.Wm)(Z,{type:"primary"},{default:(0,o.w5)((()=>[(0,o.Wm)(U),(0,o.Wm)(Y,{twoToneColor:"#eb2f96"}),(0,o.Wm)(Y,{twoToneColor:"#eb2f96"}),(0,o.Wm)(U),(0,o.Uk)(" 欢迎访问！！ ")])),_:1}),(0,o.Wm)(q)],64)}var K=t(1394),Z=t(6154),L=0;const X=[{name:"Name",dataIndex:"name",key:"name"},{title:"时长",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"address",key:"address"},{title:"Tags",key:"tags",dataIndex:"tags"},{title:"Action",key:"action"}],N=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}];var U={name:"App",setup(){const A=()=>{var A=document.getElementById("anchor-0");A.style.display="block";var e=document.getElementById("anchor-1");e.style.display="none";var t=document.getElementById("anchor-2");t.style.display="none"},e=()=>{var A=document.getElementById("anchor-0");A.style.display="none";var e=document.getElementById("anchor-1");e.style.display="block";var t=document.getElementById("anchor-2");t.style.display="none"},t=()=>{var A=document.getElementById("anchor-1");A.style.display="block";var e=document.getElementById("anchor-0");e.style.display="none"},n=()=>{K.ZP.info("你忍心离开吗，555")},l=()=>{K.ZP.info("当前挖空数:"+L),a(L)},o=()=>{var A="/solve",e=(A,e,t)=>{var n=document.getElementById(A),l=n.getContext("2d"),o=document.getElementById("image");l.drawImage(o,0,0);l.measureText(e).height;l.font="40px Arial";var a=l.createLinearGradient(0,0,n.width,0);a.addColorStop("0","magenta"),a.addColorStop("0.5",t),a.addColorStop("1.0",t),l.fillStyle=a;var w=0,d=0,r=0,i=0,s=0;for(s=0;s<3;s++)for(r=0;r<3;r++)for(i=0;i<3;i++)for(d=0;d<3;d++)"0"!=e[w]&&l.fillText(e[w],50+85*d+271*i,80+85*r+271*s),w++};Z.Z.get(A,{}).then((function(A){console.log(A.request.responseText);const t=JSON.parse(A.request.responseText);t[0];let n=1;while(n<=9)e("canvas"+n,t[n-1],"blue"),n++;K.ZP.info("绘制完成")}))},a=A=>{L=A,K.ZP.info("后端并发计算中。。。绘制可能需要一段时间");var e="/api",t="123006709123456780120450789123456789123456789123456789123456789123456789123456789",n=document.getElementById("anchor-2");n.style.display="block";var l=document.getElementById("anchor-1");l.style.display="none";var o=(A,e)=>{var t=document.getElementById(A),n=(t.getContext("2d"),function(n){var l,o,w=t.getBoundingClientRect(),d=n.clientX-w.left*(t.width/w.width),r=n.clientY-w.top*(t.height/w.height);if(r<275){var i=r-20;l=parseInt(i/85)}if(r>290&&r<545){var s=r-40;l=parseInt(s/85)}if(r>560&&r<815){var g=r-60;l=parseInt(g/85)}if(d<275){var f=d-20;o=parseInt(f/85)}if(d>290&&d<545){var c=d-40;o=parseInt(c/85)}if(d>560&&d<815){var u=d-60;o=parseInt(u/85)}var C=o+9*l;const y=e.split("");if("0"==y[C]){var B=Number(window.prompt("输入一个数字(0-9),0表示清空",""));if(y[C]=B,""==B)return;if(parseInt(B)>9||parseInt(B)<0)return;B=parseInt(B).toString();var h=y.join("");Z.Z.get("/check",{params:{before:e,after:h}}).then((function(t){console.log(t.request.responseText),"1"==t.request.responseText&&(K.ZP.info("错误"),a(A,h,e,"red")),"0"==t.request.responseText&&(K.ZP.info("正确"),a(A,h,e,"black"))}))}});t.onclick=n},a=(A,e,t,n)=>{var l=document.getElementById(A),o=l.getContext("2d");document.getElementById("image");o.font="40px Arial";var a=o.createLinearGradient(0,0,l.width,0);a.addColorStop("0",n),a.addColorStop("0.5",n),a.addColorStop("1.0",n),o.fillStyle=a;var w=0,d=0,r=0,i=0,s=0;for(s=0;s<3;s++)for(r=0;r<3;r++)for(i=0;i<3;i++)for(d=0;d<3;d++){o.measureText(t[w]).width,o.measureText(t[w]).height;"0"==t[w]&&"0"!=e[w]&&(o.fillStyle="#d3f3f1",o.fillRect(50+85*d+271*i,45+85*r+271*s,25,40),o.fillStyle=a,o.fillText(e[w],50+85*d+271*i,80+85*r+271*s)),w++}},w=(A,e,t)=>{var n=document.getElementById(A),l=n.getContext("2d"),o=document.getElementById("image");l.drawImage(o,0,0);l.measureText(e).height;l.font="40px Arial";var a=l.createLinearGradient(0,0,n.width,0);a.addColorStop("0","magenta"),a.addColorStop("0.5",t),a.addColorStop("1.0",t),l.fillStyle=a;var w=0,d=0,r=0,i=0,s=0;for(s=0;s<3;s++)for(r=0;r<3;r++)for(i=0;i<3;i++)for(d=0;d<3;d++)"0"!=e[w]&&l.fillText(e[w],50+85*d+271*i,80+85*r+271*s),w++};Z.Z.get(e,{params:{dif:A}}).then((function(A){console.log(A.request.responseText);const e=JSON.parse(A.request.responseText);t=e[0];let n=1;while(n<=9)w("canvas"+n,e[n-1],"blue"),o("canvas"+n,t),n++;K.ZP.info("绘制完成")})).catch((function(A){console.log(A)}))};return{columns:X,data:N,back:A,choose:t,gamepage:a,back2:e,leave:n,flash:l,solve:o}},components:{}},Y=t(3744);const q=(0,Y.Z)(U,[["render",R]]);var V=q,G=(t(1849),t(3424));const F=(0,n.ri)(V);F.config.productionTip=!1;for(const $ in G)F.component($,G[$]);F.use(l.ZP,Z.Z).mount("#app")}},e={};function t(n){var l=e[n];if(void 0!==l)return l.exports;var o=e[n]={exports:{}};return A[n].call(o.exports,o,o.exports,t),o.exports}t.m=A,function(){var A=[];t.O=function(e,n,l,o){if(!n){var a=1/0;for(i=0;i<A.length;i++){n=A[i][0],l=A[i][1],o=A[i][2];for(var w=!0,d=0;d<n.length;d++)(!1&o||a>=o)&&Object.keys(t.O).every((function(A){return t.O[A](n[d])}))?n.splice(d--,1):(w=!1,o<a&&(a=o));if(w){A.splice(i--,1);var r=l();void 0!==r&&(e=r)}}return e}o=o||0;for(var i=A.length;i>0&&A[i-1][2]>o;i--)A[i]=A[i-1];A[i]=[n,l,o]}}(),function(){t.n=function(A){var e=A&&A.__esModule?function(){return A["default"]}:function(){return A};return t.d(e,{a:e}),e}}(),function(){t.d=function(A,e){for(var n in e)t.o(e,n)&&!t.o(A,n)&&Object.defineProperty(A,n,{enumerable:!0,get:e[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(A){if("object"===typeof window)return window}}()}(),function(){t.o=function(A,e){return Object.prototype.hasOwnProperty.call(A,e)}}(),function(){t.r=function(A){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(A,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(A,"__esModule",{value:!0})}}(),function(){t.p=""}(),function(){var A={143:0};t.O.j=function(e){return 0===A[e]};var e=function(e,n){var l,o,a=n[0],w=n[1],d=n[2],r=0;if(a.some((function(e){return 0!==A[e]}))){for(l in w)t.o(w,l)&&(t.m[l]=w[l]);if(d)var i=d(t)}for(e&&e(n);r<a.length;r++)o=a[r],t.o(A,o)&&A[o]&&A[o][0](),A[o]=0;return t.O(i)},n=self["webpackChunksdyx"]=self["webpackChunksdyx"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=t.O(void 0,[998],(function(){return t(9146)}));n=t.O(n)})();
//# sourceMappingURL=app.06e3fb5d.js.map