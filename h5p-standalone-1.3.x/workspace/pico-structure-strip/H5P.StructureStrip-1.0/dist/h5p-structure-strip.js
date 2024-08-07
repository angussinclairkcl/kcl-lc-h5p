!function(){"use strict";let t=function(){function t(){}return t.extend=function(){for(let t=1;t<arguments.length;t++)for(let e in arguments[t])Object.prototype.hasOwnProperty.call(arguments[t],e)&&("object"==typeof arguments[0][e]&&"object"==typeof arguments[t][e]?this.extend(arguments[0][e],arguments[t][e]):arguments[0][e]=arguments[t][e]);return arguments[0]},t.htmlDecode=function(t){return(new DOMParser).parseFromString(t,"text/html").documentElement.textContent.replace(/(\r\n|\n|\r)/gm,"")},t.closestParent=function(t,e){if("object"!=typeof t||"string"!=typeof e)return null;if(!t.parentNode)return null;if("."===e.substr(0,1)){if(e.split(".").filter((t=>""!==t)).every((e=>t.parentNode.classList.contains(e))))return t.parentNode}else if("#"===e.substr(0,1)){if("function"==typeof t.parentNode.getAttribute&&t.parentNode.getAttribute("id")===e.substr(1))return t.parentNode}else if(t.parentNode.tagName.toLowerCase()===e.toLowerCase())return t.parentNode;return this.closestParent(t.parentNode,e)},t.greatestCommonDivisor=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return s?t.greatestCommonDivisor(s,e%s):e},t.greatestCommonDivisorArray=function(e){return e.reduce(((e,s)=>e?t.greatestCommonDivisor(e,s):1))},t.copyTextToClipboard=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:()=>{};navigator.clipboard||e(!1),navigator.clipboard.writeText(t).then((()=>{e(!0)}),(t=>{e(!1)}))},t.formatLanguageCode=function(t){if("string"!=typeof t)return t;const e=t.split("-");return e[0]=e[0].toLowerCase(),e.length>1&&(e[1]=e[1].toUpperCase()),t=e.join("-")},t.computeHSVValue=function(t){if("string"!=typeof t||!/#[0-9a-f]{6}/.test(t))return null;t=t.substr(1);const e=[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)];return Math.max(e[0],e[1],e[2])/255},t.computeContrastColor=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.5;if("string"!=typeof e||!/#[0-9a-f]{6}/.test(e))return null;"number"!=typeof s&&(s=.5),s=Math.min(Math.max(0,s),1),e=e.substr(1);const i=[parseInt(e.substr(0,2),16)/255,parseInt(e.substr(2,2),16)/255,parseInt(e.substr(4,2),16)/255],n=Math.max(i[0],i[1],i[2]),r=Math.min(Math.max(0,n>.5?n-s:n+s),1)/n;return`#${[t.dec2hex(i[0]*r*255,2),t.dec2hex(i[1]*r*255,2),t.dec2hex(i[2]*r*255,2)].join("")}`},t.dec2hex=function(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if("number"!=typeof t)return null;("number"!=typeof e||e<0)&&(e=0);let s=Math.abs(Math.round(t)).toString(16);for(;s.length<e;)s=`0${s}`;return t<0&&(s=`-${s}`),s},t}();var e=t;let s=function(){function t(t){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.params=e.extend({container:document.body,content:document.createElement("div"),styleBase:"h5p-structure-strip-overlay",title:"",position:{offsetHorizontal:0,offsetVertical:0},a11y:{closeWindow:"Close"}},t),this.callbacks=e.extend({onClose:()=>{}},s),this.container=null,this.isVisible=!1,this.focusableElements=[],this.addDOM(),document.addEventListener("focus",(t=>{this.isVisible&&0!==this.focusableElements.length&&this.trapFocus(t)}),!0),this.modifierClasses=[]}var s=t.prototype;return s.addDOM=function(){this.overlay=document.createElement("div"),this.overlay.classList.add(`${this.params.styleBase}-container`),this.overlay.classList.add(`${this.params.styleBase}-invisible`),this.params.a11y.title&&this.overlay.setAttribute("aria-label",this.params.a11y.title),this.overlay.setAttribute("aria-modal","true"),this.outer=document.createElement("div"),this.outer.classList.add(`${this.params.styleBase}-outer`),this.overlay.appendChild(this.outer),this.headline=document.createElement("div"),this.headline.classList.add(`${this.params.styleBase}-headline`),this.outer.appendChild(this.headline),this.title=document.createElement("div"),this.title.classList.add(`${this.params.styleBase}-title`),this.headline.appendChild(this.title),this.buttonClose=document.createElement("button"),this.buttonClose.classList.add(`${this.params.styleBase}-button-close`),this.buttonClose.setAttribute("aria-label",this.params.a11y.closeWindow),this.buttonClose.addEventListener("click",(()=>{this.callbacks.onClose()})),this.headline.appendChild(this.buttonClose),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add(`${this.params.styleBase}-content-wrapper`),this.outer.appendChild(this.contentWrapper),this.content=document.createElement("div"),this.content.classList.add(`${this.params.styleBase}-content`),this.content.appendChild(this.params.content),this.contentWrapper.appendChild(this.content),this.blocker=document.createElement("div"),this.blocker.classList.add(`${this.params.styleBase}-blocker`),this.blocker.classList.add(`${this.params.styleBase}-display-none`),this.blocker.addEventListener("click",(()=>{this.callbacks.onClose()}))},s.getDOM=function(){return this.overlay},s.setTitle=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.title.innerHTML=e.htmlDecode(t)},s.setContent=function(t){for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);this.content.appendChild(t)},s.setContainer=function(t){this.container=t},s.setModifierClass=function(t){(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])&&(this.modifierClasses.forEach((t=>{this.overlay.classList.remove(t)})),this.modifierClasses=[]),-1===this.modifierClasses.indexOf(t)&&this.modifierClasses.push(t),this.overlay.classList.add(t)},s.trapFocus=function(t){this.isChild(t.target)?this.currentFocusElement=t.target:(this.currentFocusElement===this.focusableElements[0]?this.currentFocusElement=this.focusableElements[this.focusableElements.length-1]:this.currentFocusElement=this.focusableElements[0],this.currentFocusElement.focus())},s.isChild=function(t){const e=t.parentNode;return!!e&&(e===this.overlay||this.isChild(e))},s.updateFocusableElements=function(){this.focusableElements=[].slice.call(this.overlay.querySelectorAll('video, audio, button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])')).filter((t=>"true"!==t.getAttribute("disabled")&&!0!==t.getAttribute("disabled")))},s.show=function(){!this.blockerAppended&&this.container&&this.container.appendChild(this.blocker),this.blockerAppended=!0,this.overlay.classList.remove("h5p-structure-strip-overlay-invisible"),this.blocker.classList.remove("h5p-structure-strip-overlay-display-none"),setTimeout((()=>{this.updateFocusableElements();const t=this.focusableElements.length>0,e=null===document.querySelector(".h5p-content.using-mouse");t&&e&&this.focusableElements[0].focus(),this.isVisible=!0,this.resize()}),0)},s.hide=function(){this.isVisible=!1,this.overlay.classList.add("h5p-structure-strip-overlay-invisible"),this.blocker.classList.add("h5p-structure-strip-overlay-display-none")},s.resize=function(){if(!this.isVisible)return;const t=this.computeMaxHeightCSS();t&&(this.outer.style.maxHeight=t)},s.computeMaxHeightCSS=function(){const t=document.querySelector(".h5p-container");return t?(this.outerStyle=this.outerStyle||window.getComputedStyle(this.outer),`calc(${t.offsetHeight}px - ${this.outerStyle.getPropertyValue("margin-top")} - ${this.outerStyle.getPropertyValue("margin-bottom")})`):null},t}(),i=function(){function t(t,s){this.params=e.extend({color:"rgba(255, 255, 255, 0)",title:"",description:"",text:"",weight:1,a11y:{showHints:"showHints"}},t),this.callbacks=e.extend({onContentChanged:()=>{},onHintButtonOpened:()=>{},onInteracted:()=>{}},s),this.content=document.createElement("div"),this.content.classList.add("h5p-structure-strip-text-strip");const i=document.createElement("div");i.classList.add("h5p-structure-strip-text-strip-description-container"),i.style.backgroundColor=this.params.colorBackground,i.style.color=this.params.colorText,this.content.appendChild(i),"whileTyping"===this.params.feedbackMode&&this.addProgressBar(i),this.addDescriptionWrapper(i),this.addInputField()}var s=t.prototype;return s.getDOM=function(){return this.content},s.enable=function(){this.inputField.disabled=!1},s.disable=function(){this.inputField.disabled=!0},s.getId=function(){return this.params.id},s.getText=function(){return this.inputField.value||""},s.reset=function(){this.inputField.value="",this.setStatus(""),this.setProgressBar(0)},s.getTitle=function(){return this.params.title},s.getLength=function(){return this.getText().length},s.getWeight=function(){return this.params.weight},s.setStatus=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.descriptionStatus&&(this.descriptionStatus.innerHTML=t)},s.addProgressBar=function(t){this.progressBarContainer=document.createElement("div"),this.progressBarContainer.classList.add("h5p-structure-strip-text-strip-progress-bar-container"),this.progressBarContainer.style.backgroundColor=e.computeContrastColor(this.params.colorBackground,.1),t.appendChild(this.progressBarContainer),this.progressBar=document.createElement("div"),this.progressBar.classList.add("h5p-structure-strip-text-strip-progress-bar");e.computeHSVValue(this.params.colorBackground)>.5?this.progressBar.classList.add("h5p-structure-strip-text-strip-progress-bar-pattern-dark"):this.progressBar.classList.add("h5p-structure-strip-text-strip-progress-bar-pattern-light"),this.progressBarContainer.appendChild(this.progressBar)},s.addDescriptionWrapper=function(t){const e=document.createElement("div");e.classList.add("h5p-structure-strip-text-strip-description-wrapper"),this.addTitle(e),"whileTyping"===this.params.feedbackMode&&(this.descriptionStatus=document.createElement("div"),this.descriptionStatus.classList.add("h5p-structure-strip-text-strip-description-status"),this.descriptionStatus.innerHTML="",e.appendChild(this.descriptionStatus)),t.appendChild(e)},s.addTitle=function(t){const s=document.createElement("div");s.classList.add("h5p-structure-strip-text-strip-description-title"),t.appendChild(s);const i=document.createElement("span");if(i.classList.add("h5p-structure-strip-text-strip-description-title-text"),i.innerHTML=e.htmlDecode(this.params.title),s.appendChild(i),this.params.hasDescription){const t=document.createElement("button");t.classList.add("h5p-structure-strip-text-strip-button-hint"),t.style.color=this.params.colorText,t.setAttribute("aria-label",this.params.a11y.showHints),t.addEventListener("click",(()=>{this.callbacks.onHintButtonOpened(this.params.id)})),s.appendChild(t)}},s.addInputField=function(){const t=document.createElement("div");t.classList.add("h5p-structure-strip-text-strip-input-container"),this.inputField=document.createElement("textarea"),this.inputField.classList.add("h5p-structure-strip-text-strip-input-field"),this.inputField.setAttribute("rows",5),this.inputField.setAttribute("aria-label",this.buildAriaLabel([this.params.title])),this.inputField.value=this.params.text,this.lastValue=this.params.text,this.inputField.addEventListener("blur",(()=>{this.inputField.value!==this.lastValue&&this.callbacks.onInteracted(),this.lastValue=this.inputField.value})),"whileTyping"===this.params.feedbackMode&&(["change","keyup","paste"].forEach((t=>{this.inputField.addEventListener(t,this.callbacks.onContentChanged)})),this.inputField.addEventListener("focus",(()=>{this.inputField.setAttribute("aria-label",this.buildAriaLabel([this.params.title,this.descriptionStatus.innerHTML]))}))),t.appendChild(this.inputField),this.content.appendChild(t)},s.setProgressBar=function(t){"number"==typeof t&&this.progressBar&&(t>100?this.progressBar.classList.add("h5p-structure-strip-text-strip-progress-bar-pattern-exceeded"):this.progressBar.classList.remove("h5p-structure-strip-text-strip-progress-bar-pattern-exceeded"),this.progressBar.style.width=`${Math.min(Math.max(0,t),100)}%`)},s.buildAriaLabel=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((t=>"."===(t=e.htmlDecode(t)).slice(-1)?t.slice(0,-1):t)).join(". ")},t}(),n=function(){function t(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.params=t,this.callbacks=e.extend({onInteracted:()=>{}},n),this.sections=[],this.content=document.createElement("div"),this.content.classList.add("h5p-structure-strip-content");const r=document.createElement("div");r.classList.add("h5p-structure-strip-text-strips-container"),this.content.appendChild(r),this.params.sections.forEach(((t,s)=>{const n=new i({colorBackground:t.colorBackground,colorText:t.colorText,feedbackMode:this.params.feedbackMode,hasDescription:t.description&&""!==t.description,id:s,text:this.params.previousState.texts?this.params.previousState.texts[s]:"",title:e.htmlDecode(t.title||`${this.params.l10n.section} ${s+1}`),weight:t.weight,a11y:{showHints:this.params.a11y.showHints}},{onContentChanged:()=>{this.updateSections()},onHintButtonOpened:i=>{const n=document.createElement("div");n.innerHTML=this.params.sections[i].description,this.overlay.setTitle(e.htmlDecode(t.title||`${this.params.l10n.section} ${s+1}`)),this.overlay.setContent(n),this.overlay.show()},onInteracted:()=>{this.callbacks.onInteracted()}});this.sections.push(n),r.appendChild(n.getDOM())})),this.referenceSection=this.sections.reduce(((t,e)=>t?e.getWeight()>t.getWeight()?e:t:e));const o=this.sections.reduce(((t,e)=>t+e.getWeight()),0);this.referenceSectionPercentage=this.referenceSection.getWeight()/o,this.params.textLengthMax*this.referenceSectionPercentage<this.params.textLengthMin&&(this.params.textLengthMax=Number.POSITIVE_INFINITY),this.greatestCommonDivisor=e.greatestCommonDivisorArray(this.sections.map((t=>t.getWeight()))),"whileTyping"===this.params.feedbackMode&&this.updateSections(),this.overlay=new s({container:this.params.container,a11y:{closeWindow:this.params.a11y.closeWindow}},{onClose:()=>{this.overlay.hide()}}),this.content.appendChild(this.overlay.getDOM())}var n=t.prototype;return n.getDOM=function(){return this.content},n.setContainer=function(t){this.overlay.setContainer(t)},n.getText=function(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const e=this.sections.map((t=>t.getText()));return t?e.filter((t=>""!==t)).join("\n"):e},n.resize=function(){this.overlay.resize()},n.enableSections=function(){this.sections.forEach((t=>{t.enable()}))},n.resetSections=function(){this.sections.forEach((t=>{t.reset()}))},n.updateSections=function(){if("whileTyping"!==this.params.feedbackMode)return;if(this.sections.some((t=>0===t.getText().length)))return void this.sections.forEach((t=>{t.setStatus("&nbsp;"),t.setProgressBar(0)}));const t=this.buildFeedbackTexts({tooLong:this.params.l10n.tooLong,tooShort:this.params.l10n.tooShort}),e=this.buildProgresses();this.sections.forEach(((s,i)=>{s.setStatus(t[i]||"&nbsp;"),s.setProgressBar(e[i])}))},n.computeNormedLengths=function(){let t=Math.max(this.referenceSection.getText().length,this.referenceSection.getWeight()/this.greatestCommonDivisor),e=this.params.slack/100;t<this.params.textLengthMin*this.referenceSectionPercentage&&(t=this.params.textLengthMin*this.referenceSectionPercentage,e=0),t>this.params.textLengthMax*this.referenceSectionPercentage&&(t=this.params.textLengthMax*this.referenceSectionPercentage,e=0);const s=t/this.referenceSection.getWeight();return{min:s*(1-e),max:s*(1+e)}},n.buildFeedbackTexts=function(t){const e=this.computeNormedLengths(),s=[];return this.sections.forEach((i=>{const n=i.getText().length/i.getWeight();if(n>e.max){const r=Math.round((n-e.max)*i.getWeight());0===r?s.push(null):s.push(t.tooLong.replace(/@title/g,i.getTitle()).replace(/@chars/g,r))}else if(n<e.min){const r=Math.round((e.min-n)*i.getWeight());0===r?s.push(null):s.push(t.tooShort.replace(/@title/g,i.getTitle()).replace(/@chars/g,r))}else s.push(t.alright)})),s},n.buildProgresses=function(){const t=this.computeNormedLengths();return this.sections.map((e=>{const s=e.getText().length/e.getWeight();if(s>t.max){return 0===Math.round((s-t.max)*e.getWeight())?100:s/t.max*100}if(s<t.min){return 0===Math.round((t.min-s)*e.getWeight())?100:s/t.min*100}return 100}))},n.checkAnswer=function(){if("onRequest"!==this.params.feedbackMode)return;this.sections.forEach((t=>{t.disable()}));let t=this.buildFeedbackTexts({alright:null,tooLong:this.params.l10n.sectionTooLong,tooShort:this.params.l10n.sectionTooShort});t=t.filter((t=>null!==t)),0===t.length&&(t=[this.params.l10n.allSectionsGood]);let e="";return e=1===t.length?`<p>${t[0]}</p>`:`<ul>${t.reduce(((t,e)=>`${t}<li>${e}</li>`),"")}</ul>`,e},t}();function r(t,e){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},r(t,e)}let o=function(t){var s,i;function o(s,i){var n;let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(n=t.call(this,"structure-strip")||this).params=e.extend({media:{},sections:[],behaviour:{enableSolutionsButton:!0,enableRetry:!0,slack:10,textLengthMin:0,textLengthMax:Number.POSITIVE_INFINITY,feedbackMode:"whileTyping"},l10n:{checkAnswer:"Check answer",copy:"Copy",showSolution:"Show solution",tryAgain:"Retry",allSectionsGood:"Your sections' lenghts are all fine.",sectionTooShort:"Your @title is too short. You need at least @char more characters.",sectionTooLong:"Your @title is too long. Remove at least @chars characters.",tooShort:"@chars characters too short",tooLong:"@chars characters too long",copyToClipboardError:"Your text could not be copied to the clipboard",copyToClipboardSuccess:"Your text was copied to the clipboard",section:"Section",messageNoSection:"There was no section given for this structure strip."},a11y:{copyToClipboard:"Copy text to clipboard",feedback:"Feedback",closeWindow:"Close window"}},s);for(let t in n.params.a11y)n.params.a11y[t]=e.htmlDecode(n.params.a11y[t]);n.contentId=i,n.extras=r;const o=n.extras&&n.extras.metadata&&n.extras.metadata.defaultLanguage||"en";return n.languageTag=e.formatLanguageCode(o),n.previousState=n.extras.previousState||{},n}i=t,(s=o).prototype=Object.create(i.prototype),s.prototype.constructor=s,r(s,i);var a=o.prototype;return a.registerDomElements=function(){const t=this.params.media.type;if(t&&t.library){const e=t.library.split(" ")[0];"H5P.Image"===e?t.params.file&&this.setImage(t.params.file.path,{disableImageZooming:this.params.media.disableImageZooming,alt:t.params.alt,title:t.params.title,expandImage:t.params.expandImage,minimizeImage:t.params.minimizeImage}):"H5P.Video"===e?t.params.sources&&this.setVideo(t):"H5P.Audio"===e&&t.params.files&&this.setAudio(t)}if(0===this.params.sections.length){const t=document.createElement("div");return t.classList.add("h5p-structure-strip-message"),t.innerText=this.params.l10n.messageNoSection,void this.setContent(t)}if(this.params.taskDescription){const t=document.createElement("div");t.classList.add("h5p-structure-strip-task-description"),t.innerHTML=this.params.taskDescription,this.setIntroduction(t)}this.content=new n({feedbackMode:this.params.behaviour.feedbackMode,l10n:{allSectionsGood:this.params.l10n.allSectionsGood,sectionTooShort:this.params.l10n.sectionTooShort,sectionTooLong:this.params.l10n.sectionTooLong,tooShort:this.params.l10n.tooShort,tooLong:this.params.l10n.tooLong,section:this.params.l10n.section},a11y:{closeWindow:this.params.a11y.closeWindow,showHints:this.params.a11y.showHints},previousState:this.previousState,sections:this.params.sections,slack:this.params.behaviour.slack,taskDescription:this.params.taskDescription,textLengthMax:this.params.behaviour.textLengthMax,textLengthMin:this.params.behaviour.textLengthMin},{onInteracted:()=>{this.handleInteracted()}}),this.setContent(this.content.getDOM()),this.addButtons(),"complete"===document.readyState?window.requestAnimationFrame((()=>{this.handleDOMInitialized()})):document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&window.requestAnimationFrame((()=>{this.handleDOMInitialized()}))})),this.on("resize",(()=>{this.content.resize()}))},a.addButtons=function(){this.addButton("show-solution",this.params.l10n.showSolution,(()=>{}),!1,{},{}),"onRequest"===this.params.behaviour.feedbackMode&&this.addButton("check-answer",this.params.l10n.checkAnswer,(()=>{const t=this.content.checkAnswer();this.setFeedback(t,null,null,this.params.a11y.feedback),this.hideButton("check-answer"),this.params.behaviour.enableRetry&&this.showButton("try-again")}),!0,{},{}),this.addButton("try-again",this.params.l10n.tryAgain,(()=>{this.retry()}),!1,{},{}),this.addButton("copy",this.params.l10n.copy,(()=>{const t=this.content.getText(!0);e.copyTextToClipboard(t,(t=>{const e=this.buttonCopy,s=!0===t?this.params.l10n.copyToClipboardSuccess:this.params.l10n.copyToClipboardError;this.read(s),H5P.attachToastTo(e,s,{position:{horizontal:"after",noOverflowRight:!0,offsetHorizontal:10,offsetVertical:-5,vertical:"centered"}})}))}),!0,{"aria-label":this.params.l10n.copyToClipboard},{})},a.getAnswerGiven=function(){return!1},a.getScore=function(){return 0},a.getMaxScore=function(){return 0},a.showSolutions=function(){this.trigger("resize")},a.retry=function(){this.removeFeedback(),this.showButton("check-answer"),this.hideButton("try-again"),this.content.enableSections(),this.trigger("resize")},a.resetTask=function(){this.content.resetSections(),this.retry()},a.getXAPIData=function(){return{statement:this.getXAPIAnswerEvent().data.statement}},a.getXAPIAnswerEvent=function(){const t=this.createXAPIEvent("answered");return t.setScoredResult(this.getScore(),this.getMaxScore(),this,!0,this.isPassed()),t},a.createXAPIEvent=function(t){const s=this.createXAPIEventTemplate(t);return e.extend(s.getVerifiedStatementValue(["object","definition"]),this.getxAPIDefinition()),s},a.getxAPIDefinition=function(){const t={name:{}};return t.name[this.languageTag]=this.getTitle(),t.description={},t.description[this.languageTag]=this.getDescription(),t.type="http://adlnet.gov/expapi/activities/cmi.interaction",t.interactionType="other",t},a.isPassed=function(){return!0},a.getTitle=function(){let t;return this.extras.metadata&&(t=this.extras.metadata.title),t=t||o.DEFAULT_DESCRIPTION,H5P.createTitle(t)},a.getDescription=function(){return this.params.taskDescription||o.DEFAULT_DESCRIPTION},a.getCurrentState=function(){return{texts:this.content.getText()}},a.handleDOMInitialized=function(){this.container=e.closestParent(this.content.getDOM(),".h5p-question.h5p-structure-strip"),this.buttonCopy=this.container.querySelector(".h5p-question-copy"),this.content.setContainer(this.container)},a.handleInteracted=function(){this.triggerXAPI("interacted")},o}(H5P.Question);o.DEFAULT_DESCRIPTION="Structure Strip",H5P.StructureStrip=o}();