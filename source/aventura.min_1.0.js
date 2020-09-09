var Aventura=function(a,c){a=void 0===a?"en":a;(this.lang="en"===a||"es"===a?a:void 0)||console.log("Incorrect language / lenguaje incorrecto");this.options={typewriterSpeed:50,style:"\n      #storygeneraldiv {\n        box-sizing: border-box;\n        margin: auto;\n        max-width: 600px;\n      }\n      #storydiv {\n        box-sizing: border-box;\n        border: solid black 1px;\n      }\n      .storyp {\n        box-sizing: border-box;\n        min-height: 40px;\n        font-size: 18px;\n        padding: 0px 10px;\n        font-family: 'Courier New', Courier, monospace;\n      }\n      .storybutton {\n        font-size: 20px;\n        padding: 3px:\n        background: white;\n        box-shadow: none;\n        border: solid 1px;\n        margin: 0px 0px;\n        font-family: 'Courier New', Courier, monospace;\n      }\n      .storybutton:hover {\n        color: white;\n        background: black;\n      }\n      .storyimage {\n        max-width: 100%;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      @media screen and (max-device-width: 500px) {\n        #storygeneraldiv {\n          max-width:100%;\n        }\n      }\n      "};
c&&(this.options=Object.assign(this.options,c))};Aventura.prototype.setScenes=function(a){var c=Object.keys(a);this.scenes=a;for(a=0;a<c.length;a++)this.scenes[c[a]].key=c[a]};Aventura.prototype.promptAdventure=function(){void 0===this.lang?console.log("Tura.js: Language undefined / lenguaje indefinido"):(document.title=this.scenes.cover.title.toUpperCase(),alert(this.scenes.cover.title.toUpperCase()+"\n"+this.scenes.cover.subtitle),alert(this.scenes.intro.text),this.goToScene_prompt(this.scenes.start))};
Aventura.prototype.goToScene_prompt=function(a){var c=function(a){alert(a.end.text);var b=a.credits.text,c;for(c in a.credits.authors)b+="\n"+a.credits.authors[c];b+="\n"+a.credits.year;alert(b)},b=prompt(a.text+"\n"+a.optionA+" "+("en"===this.lang?"or":"o")+" "+a.optionB);b==a.optionA?(alert(a.messageA),"end"==a.sceneA?c(this.scenes):this.goToScene_prompt(this.scenes[a.sceneA])):b==a.optionB?(alert(a.messageB),"end"==a.sceneB?c(this.scenes):this.goToScene_prompt(this.scenes[a.sceneB])):null==b?(alert("en"===
this.lang?"You quit the game.":"Saliste del juego"),confirm("en"===this.lang?"Do you want to try again?":"\u00bfQuieres volver a jugar?")&&this.goToScene_prompt(this.scenes.start)):(alert("en"===this.lang?"Invalid answer, you must choose either "+a.optionA+" or "+a.optionB+".":"Respuesta inv\u00e1lida, debes escoger entre "+a.optionA+" o "+a.optionB),this.goToScene_prompt(a))};
Aventura.prototype.domAdventure=function(a){var c=this;if(void 0===this.lang)console.log("Tura.js: Language undefined / lenguaje indefinido");else{document.title=this.scenes.cover.title.toUpperCase();var b=document.createElement("style");b.id="adventurestyle";b.type="text/css";b.innerHTML=this.options.style;document.getElementsByTagName("head")[0].appendChild(b);b=document.createElement("div");b.id="storygeneraldiv";document.body.appendChild(b);a&&(a=document.getElementById(a),document.cont.appendChild(a));
this.scenes.cover.text=this.scenes.cover.title.toUpperCase()+"<br>"+this.scenes.cover.subtitle;this.scenes.intro.continuation="start";this.scenes.end.continuation="credits";a=this.scenes.credits.text;for(var d in this.scenes.credits.authors)a+="<br>"+this.scenes.credits.authors[d];a+="<br>"+this.scenes.credits.year;this.scenes.credits.text=a;this.goToScene_dom(this.scenes.cover,"MAIN",function(){c.continueButton(c.scenes.intro,"continue")})}};
Aventura.prototype.goToScene_dom=function(a,c,b){var d=document.getElementById("storygeneraldiv"),f=document.getElementById("storydiv");f&&d.removeChild(f);f=document.createElement("div");f.id="storydiv";d.appendChild(f);if("MAIN"==c){var e=a.text;var h=a.image}else"A"==c?(e=a.messageA,h=a.imageA):"B"==c&&(e=a.messageB,h=a.imageB);void 0!=h&&(c=document.createElement("img"),c.className="storyimage",c.src=h,f.appendChild(c));var g=document.createElement("p");g.className="storyp";g.innerHTML="";f.appendChild(g);
e=e.replace(/\n/g,"<br>");if(0<this.options.typewriterSpeed)var k=0,l=setInterval(function(){var c=e.substring(0,k);g.innerHTML=c;k++;k>e.length&&(clearInterval(l),"credits"!=a.key&&b())},this.options.typewriterSpeed);else g.innerHTML=e,"credits"!=a.key&&b()};
Aventura.prototype.optionButtons=function(a){var c=this,b=document.getElementById("storydiv"),d=document.createElement("button");d.className="storybutton";d.innerHTML=a.optionA;b.appendChild(d);d.addEventListener("click",function(){var b="end"==a.sceneA?"continue":"options";c.goToScene_dom(a,"A",function(){c.continueButton(c.scenes[a.sceneA],b)})});d=document.createElement("button");d.className="storybutton";d.innerHTML=a.optionB;b.appendChild(d);d.addEventListener("click",function(){var b="end"==
a.sceneB?"continue":"options";c.goToScene_dom(a,"B",function(){c.continueButton(c.scenes[a.sceneB],b)})})};
Aventura.prototype.continueButton=function(a,c){var b=this;c=void 0===c?"options":c;var d=document.getElementById("storydiv"),f="en"===this.lang?"Continue":"Continuar",e=document.createElement("button");e.className="storybutton";e.innerHTML=f;d.appendChild(e);e.addEventListener("click",function(){"continue"==c?b.goToScene_dom(a,"MAIN",function(){b.continueButton(b.scenes[a.continuation])}):b.goToScene_dom(a,"MAIN",function(){b.optionButtons(a)})})};
Aventura.prototype.setGrammar=function(a){this.grammar=a};Aventura.prototype.developGrammar=function(a){if(void 0===this.lang)console.log("Tura.js: Language undefined / lenguaje indefinido");else return a=this.selectGrammarRule(this.grammar[a]),a=this.grammarRuleRecursion(a)};Aventura.prototype.selectGrammarRule=function(a){return a[Math.floor(Math.random()*a.length)]};Aventura.prototype.getNestedObject=function(a,c){return c.reduce(function(a,c){return a&&"undefined"!==a[c]?a[c]:void 0},a)};
Aventura.prototype.defineTransformations=function(a){var c={capitalize:!1,allcaps:!1};a=a.match(/#[a-zA-Z1-9,]+#/g);if(!a)return c;a=a[0].replace(/[#]/g,"");a=a.match(/[A-Z]+/g);for(var b=0;b<a.length;b++)c[a[b].toLowerCase()]=!0;return c};Aventura.prototype.transformString=function(a,c){var b=a;c.capitalize&&(b=b.charAt(0).toUpperCase()+b.slice(1));c.allcaps&&(b=b.toUpperCase());return b};
Aventura.prototype.grammarRuleRecursion=function(a){var c=this;a=this.setNewRule(a);var b=a.match(/<[a-zA-Z1-9.,/#]+>/gi);if(!b)return a;for(var d={$jscomp$loop$prop$i$2:0};d.$jscomp$loop$prop$i$2<b.length;d={$jscomp$loop$prop$i$2:d.$jscomp$loop$prop$i$2,$jscomp$loop$prop$transformations$3:d.$jscomp$loop$prop$transformations$3},d.$jscomp$loop$prop$i$2++)d.$jscomp$loop$prop$transformations$3=this.defineTransformations(b[d.$jscomp$loop$prop$i$2]),a=a.replace(b[d.$jscomp$loop$prop$i$2],function(a){return function(){b[a.$jscomp$loop$prop$i$2]=
b[a.$jscomp$loop$prop$i$2].replace(/[<>]/gi,"");b[a.$jscomp$loop$prop$i$2]=b[a.$jscomp$loop$prop$i$2].replace(/#[a-zA-Z1-9.,/]+#/g,"");if(-1<b[a.$jscomp$loop$prop$i$2].search(/[.]/)){var d=b[a.$jscomp$loop$prop$i$2].match(/[a-zA-Z1-9]+/g,"");d=c.selectGrammarRule(c.getNestedObject(c.grammar,d));return c.transformString(d,a.$jscomp$loop$prop$transformations$3)}d=c.selectGrammarRule(c.grammar[b[a.$jscomp$loop$prop$i$2]]);return c.transformString(d,a.$jscomp$loop$prop$transformations$3)}}(d));return this.grammarRuleRecursion(a)};
Aventura.prototype.setNewRule=function(a){var c=a.match(/\$[a-zA-Z1-9]+\$<[a-zA-Z1-9:,]+>/g);if(c)for(;c.length;){var b=c.pop();a=a.replace(b,"");var d=b.match(/\$[a-zA-Z1-9]+\$/gi)[0].replace(/\$/g,""),f=b.match(/<[a-zA-Z1-9:,]+>/gi)[0].match(/[a-zA-Z1-9]+:[a-zA-Z1-9]+/gi);b=f.map(function(a){return a.replace(/:[a-zA-Z1-9,]+/,"")});f=f.map(function(a){return a.replace(/[a-zA-Z1-9]+:/,"")});this.grammar[d]=this.grammar[d]?this.grammar[d]:{};if(b&&f)for(var e=0;e<b.length;e++)this.grammar[d][b[e]]=
[this.selectGrammarRule(this.grammar[f[e]])]}return a};