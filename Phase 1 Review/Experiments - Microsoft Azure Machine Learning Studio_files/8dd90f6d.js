(function(n,t){"use strict";var i=t.Communication.Receiver.create("fx");i.register(
)})(this,Shell),function(n){"use strict";n.Namespace.define("Impl")}(Shell),function(
n,t,i){"use strict";function f(){t(n).unload(function(){u.fire()})}function e(n)
{r.add(n)}function o(){r.fire()}function s(n){u.add(n)}var r=t.Callbacks("memory once"),
u=t.Callbacks("memory once");i.Namespace.define("Host",{onDocumentUnload:s,onLoadComplete:
e,loadComplete:o});t(function(){f()})}(this,jQuery,Shell),function(n){"use strict";
var t={},i=function(n){return typeof n=="string"&&n.length>0&&n in t?t[n]:null},
r=function(n,i){typeof n=="string"&&n.length>0&&(t[n]=i)};n.Namespace.define("Impl.Services",
{get:i,add:r})}(Shell),function(n,t,i,r){"use strict";var u=t.prototype,f="fxs.fxsPicker",
e="<div class='fxs-picker-dropdown-container'><select data-bind='foreach: data.selectableItems, value: data.selectedItem'><option data-bind='attr: {value: $data, title: $parent.func._getToolTipFunc($data)}, text: $parent.func._getTextFunc($data)'><\/option><\/select><\/div><a class='fxs-picker-ok' data-bind='css: { \"fxs-picker-ok-hidden\" : data.showOk() === false }'><span class=\"sprite\"><\/span><\/a>",
o=r.getStrings(f);n.widget(f,t,{options:{selectionChange:null,class_:r.getClasses(
"fx.fxDropdown"),showOk:!0},_clickHandler:null,_viewModel:null,_selectedItem:null,
_getToolTipFunc:null,_getTextFunc:null,_select:null,_create:function(t,i){var r=
this,s=this.options.showOk,f;this._getToolTipFunc=i||function(){};this._getTextFunc=
t||function(){};this._setOption("showOk",s);this.element.addClass("fxs-picker").
html(e);ko.applyBindings({data:this._getViewModel(),func:this},this.element[0]);
this._select=this.element.find("select");f=this.element.find(".fxs-picker-ok");this.
element.on("click",".fxs-picker-ok[href]",this._clickHandler=function(){r._applySelection(
)});this._select.change(function(){var t=n(this).val();t===r._selectedItem?f.removeAttr(
"href"):f.attr("href","#");r._getViewModel().showOk()||r._applySelection()}).fxDropdown(
{url:this.options.url});f.find("span.sprite").attr({"class":"sprite dlwux-tick",
title:o.ok});u._create.call(this)},_destroy:function(){this.element.removeClass(
"fxs-picker").empty();this._clickHandler&&(this.element.off("click",".fxs-picker-ok[href]",
this._clickHandler),this._clickHandler=null);this._super()},_applySelection:function(
){this._selectedItem=this._getViewModel().selectedItem();this.options.selectionChange&&
this.options.selectionChange(this._selectedItem)},_validateModel:function(n,t){if(
t&&n.indexOf(t)===-1)throw"The selected item '{0}' is not a selectable item.".format(
t);},_getViewModel:function(){return this._viewModel||(this._viewModel={selectedItem:
ko.observable(),selectableItems:ko.observableArray(),showOk:ko.observable(!0)}),
this._viewModel},_setSelectedItem:function(n){this._validateModel(this._getViewModel(
).selectableItems(),n);this._getViewModel().selectedItem(n);this._selectedItem?this.
_applySelection():this._selectedItem=n;this._select&&this._select.fxDropdown("option",
"value",this._selectedItem)},_setSelectableItems:function(n){n=n||[];this._validateModel(
n,this._getViewModel().selectedItem());this._getViewModel().selectableItems(n);this.
_select&&this._select.fxDropdown("destroy").fxDropdown({url:this.options.url})},
_setOption:function(n,t){return n==="showOk"&&this._getViewModel().showOk(t),u._setOption.
apply(this,arguments)}})}(jQuery,jQuery.Widget,this,this.fx.resources),function(
n,t,i,r){"use strict";function u(n,t,i){f[n]={nativeName:i,englishName:t}}var e=
t.prototype,f={};u("af","Afrikaans","Afrikaans");u("af-za","Afrikaans (South Africa)",
"Afrikaans (Suid Afrika)‎");u("am","Amharic","አማርኛ");u("am-et","Amharic (Ethiopia)",
"አማርኛ (ኢትዮጵያ)‎");u("ar","Arabic","العربية");u("ar-ae","Arabic (U.A.E.)","العربية (الإمارات العربية المتحدة)‏");
u("ar-bh","Arabic (Bahrain)","العربية (البحرين)‏");u("ar-dz","Arabic (Algeria)",
"العربية (الجزائر)‏");u("ar-eg","Arabic (Egypt)","العربية (مصر)‏");u("ar-iq","Arabic (Iraq)",
"العربية (العراق)‏");u("ar-jo","Arabic (Jordan)","العربية (الأردن)‏");u("ar-kw",
"Arabic (Kuwait)","العربية (الكويت)‏");u("ar-lb","Arabic (Lebanon)","العربية (لبنان)‏");
u("ar-ly","Arabic (Libya)","العربية (ليبيا)‏");u("ar-ma","Arabic (Morocco)","العربية (المملكة المغربية)‏");
u("arn","Mapudungun","Mapudungun");u("arn-cl","Mapudungun (Chile)","Mapudungun (Chile)‎");
u("ar-om","Arabic (Oman)","العربية (عمان)‏");u("ar-qa","Arabic (Qatar)","العربية (قطر)‏");
u("ar-sa","Arabic (Saudi Arabia)","العربية (المملكة العربية السعودية)‏");u("ar-sy",
"Arabic (Syria)","العربية (سوريا)‏");u("ar-tn","Arabic (Tunisia)","العربية (تونس)‏");
u("ar-ye","Arabic (Yemen)","العربية (اليمن)‏");u("as","Assamese","অসমীয়া");u("as-in",
"Assamese (India)","অসমীয়া (ভাৰত)‎");u("az","Azerbaijani","Azərbaycan­ılı");u("az-cyrl",
"Azerbaijani (Cyrillic)","Азәрбајҹан дили");u("az-cyrl-az","Azerbaijani (Cyrillic, Azerbaijan)",
"Азәрбајҹан (Азәрбајҹан)‎");u("az-latn","Azerbaijani (Latin)","Azərbaycan­ılı");
u("az-latn-az","Azerbaijani (Latin, Azerbaijan)","Azərbaycan­ılı (Azərbaycan)‎");
u("ba","Bashkir","Башҡорт");u("ba-ru","Bashkir (Russia)","Башҡорт (Россия)‎");u(
"be","Belarusian","Беларускі");u("be-by","Belarusian (Belarus)","Беларускі (Беларусь)‎");
u("bg","Bulgarian","български");u("bg-bg","Bulgarian (Bulgaria)","български (България)‎");
u("bn","Bangla","বাংলা");u("bn-bd","Bangla (Bangladesh)","বাংলা (বাংলাদেশ)‎");u(
"bn-in","Bangla (India)","বাংলা (ভারত)‎");u("bo","Tibetan","བོད་ཡིག");u("bo-cn",
"Tibetan (PRC)","བོད་ཡིག (ཀྲུང་ཧྭ་མི་དམངས་སྤྱི་མཐུན་རྒྱལ་ཁབ།)‎");u("br","Breton",
"brezhoneg");u("br-fr","Breton (France)","brezhoneg (Frañs)‎");u("bs","Bosnian",
"bosanski");u("bs-cyrl","Bosnian (Cyrillic)","босански");u("bs-cyrl-ba","Bosnian (Cyrillic, Bosnia and Herzegovina)",
"босански (Босна и Херцеговина)‎");u("bs-latn","Bosnian (Latin)","bosanski");u("bs-latn-ba",
"Bosnian (Latin, Bosnia and Herzegovina)","bosanski (Bosna i Hercegovina)‎");u("ca",
"Catalan","català");u("ca-es","Catalan (Catalan)","català (català)‎");u("co","Corsican",
"Corsu");u("co-fr","Corsican (France)","Corsu (France)‎");u("cs","Czech","čeština");
u("cs-cz","Czech (Czech Republic)","čeština (Česká republika)‎");u("cy","Welsh",
"Cymraeg");u("cy-gb","Welsh (United Kingdom)","Cymraeg (y Deyrnas Unedig)‎");u("da",
"Danish","dansk");u("da-dk","Danish (Denmark)","dansk (Danmark)‎");u("de","German",
"Deutsch");u("de-at","German (Austria)","Deutsch (Österreich)‎");u("de-ch","German (Switzerland)",
"Deutsch (Schweiz)‎");u("de-de","German (Germany)","Deutsch (Deutschland)‎");u("de-li",
"German (Liechtenstein)","Deutsch (Liechtenstein)‎");u("de-lu","German (Luxembourg)",
"Deutsch (Luxemburg)‎");u("dsb","Lower Sorbian","dolnoserbšćina");u("dsb-de","Lower Sorbian (Germany)",
"dolnoserbšćina (Nimska)‎");u("dv","Divehi","ދިވެހިބަސް");u("dv-mv","Divehi (Maldives)",
"ދިވެހިބަސް (ދިވެހި ރާއްޖެ)‏");u("el","Greek","Ελληνικά");u("el-gr","Greek (Greece)",
"Ελληνικά (Ελλάδα)‎");u("en","English","English");u("en-029","English (Caribbean)",
"English (Caribbean)‎");u("en-au","English (Australia)","English (Australia)‎");
u("en-bz","English (Belize)","English (Belize)‎");u("en-ca","English (Canada)","English (Canada)‎");
u("en-gb","English (United Kingdom)","English (United Kingdom)‎");u("en-ie","English (Ireland)",
"English (Ireland)‎");u("en-in","English (India)","English (India)‎");u("en-jm",
"English (Jamaica)","English (Jamaica)‎");u("en-my","English (Malaysia)","English (Malaysia)‎");
u("en-nz","English (New Zealand)","English (New Zealand)‎");u("en-ph","English (Republic of the Philippines)",
"English (Philippines)‎");u("en-sg","English (Singapore)","English (Singapore)‎");
u("en-tt","English (Trinidad and Tobago)","English (Trinidad y Tobago)‎");u("en-us",
"English (United States)","English (United States)‎");u("en-za","English (South Africa)",
"English (South Africa)‎");u("en-zw","English (Zimbabwe)","English (Zimbabwe)‎");
u("es","Spanish","español");u("es-ar","Spanish (Argentina)","Español (Argentina)‎");
u("es-bo","Spanish (Bolivia)","Español (Bolivia)‎");u("es-cl","Spanish (Chile)",
"Español (Chile)‎");u("es-co","Spanish (Colombia)","Español (Colombia)‎");u("es-cr",
"Spanish (Costa Rica)","Español (Costa Rica)‎");u("es-do","Spanish (Dominican Republic)",
"Español (República Dominicana)‎");u("es-ec","Spanish (Ecuador)","Español (Ecuador)‎");
u("es-es","Spanish (Spain, International Sort)","Español (España, alfabetización internacional)‎");
u("es-gt","Spanish (Guatemala)","Español (Guatemala)‎");u("es-hn","Spanish (Honduras)",
"Español (Honduras)‎");u("es-mx","Spanish (Mexico)","Español (México)‎");u("es-ni",
"Spanish (Nicaragua)","Español (Nicaragua)‎");u("es-pa","Spanish (Panama)","Español (Panamá)‎");
u("es-pe","Spanish (Peru)","Español (Perú)‎");u("es-pr","Spanish (Puerto Rico)",
"Español (Puerto Rico)‎");u("es-py","Spanish (Paraguay)","Español (Paraguay)‎");
u("es-sv","Spanish (El Salvador)","Español (El Salvador)‎");u("es-us","Spanish (United States)",
"Español (Estados Unidos)‎");u("es-uy","Spanish (Uruguay)","Español (Uruguay)‎");
u("es-ve","Spanish (Bolivarian Republic of Venezuela)","Español (Republica Bolivariana de Venezuela)‎");
u("et","Estonian","eesti");u("et-ee","Estonian (Estonia)","eesti (Eesti)‎");u("eu",
"Basque","euskara");u("eu-es","Basque (Basque)","euskara (euskara)‎");u("fa","Persian",
"فارسى");u("fa-ir","Persian","فارسى (ایران)‏");u("fi","Finnish","suomi");u("fi-fi",
"Finnish (Finland)","suomi (Suomi)‎");u("fil","Filipino","Filipino");u("fil-ph",
"Filipino (Philippines)","Filipino (Pilipinas)‎");u("fo","Faroese","føroyskt");u(
"fo-fo","Faroese (Faroe Islands)","føroyskt (Føroyar)‎");u("fr","French","français");
u("fr-be","French (Belgium)","français (Belgique)‎");u("fr-ca","French (Canada)",
"français (Canada)‎");u("fr-ch","French (Switzerland)","français (Suisse)‎");u("fr-fr",
"French (France)","français (France)‎");u("fr-lu","French (Luxembourg)","français (Luxembourg)‎");
u("fr-mc","French (Monaco)","français (Principauté de Monaco)‎");u("fy","Frisian",
"Frysk");u("fy-nl","Frisian (Netherlands)","Frysk (Nederlân)‎");u("ga","Irish","Gaeilge");
u("ga-ie","Irish (Ireland)","Gaeilge (Éire)‎");u("gd","Scottish Gaelic","Gàidhlig");
u("gd-gb","Scottish Gaelic (United Kingdom)","Gàidhlig (An Rìoghachd Aonaichte)‎");
u("gl","Galician","galego");u("gl-es","Galician (Galician)","galego (galego)‎");
u("gsw","Alsatian","Elsässisch");u("gsw-fr","Alsatian (France)","Elsässisch (Frànkrisch)‎");
u("gu","Gujarati","ગુજરાતી");u("gu-in","Gujarati (India)","ગુજરાતી (ભારત)‎");u("ha",
"Hausa","Hausa");u("ha-latn","Hausa (Latin)","Hausa");u("ha-latn-ng","Hausa (Latin, Nigeria)",
"Hausa (Nigeria)‎");u("he","Hebrew","עברית");u("he-il","Hebrew (Israel)","עברית (ישראל)‏");
u("hi","Hindi","हिंदी");u("hi-in","Hindi (India)","हिंदी (भारत)‎");u("hr","Croatian",
"hrvatski");u("hr-ba","Croatian (Latin, Bosnia and Herzegovina)","hrvatski (Bosna i Hercegovina)‎");
u("hr-hr","Croatian (Croatia)","hrvatski (Hrvatska)‎");u("hsb","Upper Sorbian","hornjoserbšćina");
u("hsb-de","Upper Sorbian (Germany)","hornjoserbšćina (Němska)‎");u("hu","Hungarian",
"magyar");u("hu-hu","Hungarian (Hungary)","magyar (Magyarország)‎");u("hy","Armenian",
"Հայերեն");u("hy-am","Armenian (Armenia)","Հայերեն (Հայաստան)‎");u("id","Indonesian",
"Bahasa Indonesia");u("id-id","Indonesian (Indonesia)","Bahasa Indonesia (Indonesia)‎");
u("ig","Igbo","Igbo");u("ig-ng","Igbo (Nigeria)","Igbo (Nigeria)‎");u("ii","Yi",
"ꆈꌠꁱꂷ");u("ii-cn","Yi (PRC)","ꆈꌠꁱꂷ (ꍏꉸꏓꂱꇭꉼꇩ)‎");u("is","Icelandic","íslenska");u(
"is-is","Icelandic (Iceland)","íslenska (Ísland)‎");u("it","Italian","italiano");
u("it-ch","Italian (Switzerland)","italiano (Svizzera)‎");u("it-it","Italian (Italy)",
"italiano (Italia)‎");u("iu","Inuktitut","Inuktitut");u("iu-cans","Inuktitut (Syllabics)",
"ᐃᓄᒃᑎᑐᑦ");u("iu-cans-ca","Inuktitut (Syllabics, Canada)","ᐃᓄᒃᑎᑐᑦ (ᑲᓇᑕᒥ)‎");u("iu-latn",
"Inuktitut (Latin)","Inuktitut");u("iu-latn-ca","Inuktitut (Latin, Canada)","Inuktitut (Kanatami)‎");
u("ja","Japanese","日本語");u("ja-jp","Japanese (Japan)","日本語 (日本)‎");u("ka","Georgian",
"ქართული");u("ka-ge","Georgian (Georgia)","ქართული (საქართველო)‎");u("kk","Kazakh",
"Қазақ");u("kk-kz","Kazakh (Kazakhstan)","Қазақ (Қазақстан)‎");u("kl","Greenlandic",
"kalaallisut");u("kl-gl","Greenlandic (Greenland)","kalaallisut (Kalaallit Nunaat)‎");
u("km","Khmer","ខ្មែរ");u("km-kh","Khmer (Cambodia)","ខ្មែរ (កម្ពុជា)‎");u("kn",
"Kannada","ಕನ್ನಡ");u("kn-in","Kannada (India)","ಕನ್ನಡ (ಭಾರತ)‎");u("ko","Korean",
"한국어");u("kok","Konkani","कोंकणी");u("kok-in","Konkani (India)","कोंकणी (भारत)‎");
u("ko-kr","Korean (Korea)","한국어 (대한민국)‎");u("ky","Kyrgyz","Кыргыз");u("ky-kg","Kyrgyz (Kyrgyzstan)",
"Кыргыз (Кыргызстан)‎");u("lb","Luxembourgish","Lëtzebuergesch");u("lb-lu","Luxembourgish (Luxembourg)",
"Lëtzebuergesch (Luxembourg)‎");u("lo","Lao","ລາວ");u("lo-la","Lao (Lao P.D.R.)",
"ລາວ (ສ.ປ.ປ. ລາວ)‎");u("lt","Lithuanian","lietuvių");u("lt-lt","Lithuanian (Lithuania)",
"lietuvių (Lietuva)‎");u("lv","Latvian","latviešu");u("lv-lv","Latvian (Latvia)",
"latviešu (Latvija)‎");u("mi","Maori","Reo Māori");u("mi-nz","Maori (New Zealand)",
"Reo Māori (Aotearoa)‎");u("mk","Macedonian (FYROM)","македонски јазик");u("mk-mk",
"Macedonian","македонски јазик (Македонија)‎");u("ml","Malayalam","മലയാളം");u("ml-in",
"Malayalam (India)","മലയാളം (ഭാരതം)‎");u("mn","Mongolian","Монгол хэл");u("mn-cyrl",
"Mongolian (Cyrillic)","Монгол хэл");u("mn-mn","Mongolian (Cyrillic, Mongolia)",
"Монгол хэл (Монгол улс)‎");u("mn-mong","Mongolian (Traditional Mongolian)","ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ");
u("mn-mong-cn","Mongolian (Traditional Mongolian, PRC)","ᠮᠤᠨᠭᠭᠤᠯ ᠬᠡᠯᠡ (ᠪᠦᠭᠦᠳᠡ ᠨᠠᠢᠷᠠᠮᠳᠠᠬᠤ ᠳᠤᠮᠳᠠᠳᠤ ᠠᠷᠠᠳ ᠣᠯᠣᠰ)‎");
u("moh","Mohawk","Kanien'kéha");u("moh-ca","Mohawk (Mohawk)","Kanien'kéha");u("mr",
"Marathi","मराठी");u("mr-in","Marathi (India)","मराठी (भारत)‎");u("ms","Malay","Bahasa Melayu");
u("ms-bn","Malay (Brunei Darussalam)","Bahasa Melayu (Brunei Darussalam)‎");u("ms-my",
"Malay (Malaysia)","Bahasa Melayu (Malaysia)‎");u("mt","Maltese","Malti");u("mt-mt",
"Maltese (Malta)","Malti (Malta)‎");u("nb","Norwegian (Bokmål)","norsk (bokmål)‎");
u("nb-no","Norwegian, Bokmål (Norway)","norsk, bokmål (Norge)‎");u("ne","Nepali",
"नेपाली");u("ne-np","Nepali (Nepal)","नेपाली (नेपाल)‎");u("nl","Dutch","Nederlands");
u("nl-be","Dutch (Belgium)","Nederlands (België)‎");u("nl-nl","Dutch (Netherlands)",
"Nederlands (Nederland)‎");u("nn","Norwegian (Nynorsk)","norsk (nynorsk)‎");u("nn-no",
"Norwegian, Nynorsk (Norway)","norsk, nynorsk (Noreg)‎");u("no","Norwegian","norsk");
u("nso","Sesotho sa Leboa","Sesotho sa Leboa");u("nso-za","Sesotho sa Leboa (South Africa)",
"Sesotho sa Leboa (Afrika Borwa)‎");u("oc","Occitan","Occitan");u("oc-fr","Occitan (France)",
"Occitan (França)‎");u("or","Odia","ଓଡ଼ିଆ");u("or-in","Odia (India)","ଓଡ଼ିଆ (ଭାରତ)‎");
u("pa","Punjabi","ਪੰਜਾਬੀ");u("pa-in","Punjabi (India)","ਪੰਜਾਬੀ (ਭਾਰਤ)‎");u("pl",
"Polish","polski");u("pl-pl","Polish (Poland)","polski (Polska)‎");u("prs","Dari",
"درى");u("prs-af","Dari (Afghanistan)","درى (افغانستان)‏");u("ps","Pashto","پښتو");
u("ps-af","Pashto (Afghanistan)","پښتو (افغانستان)‏");u("pt","Portuguese","Português");
u("pt-br","Portuguese (Brazil)","Português (Brasil)‎");u("pt-pt","Portuguese (Portugal)",
"português (Portugal)‎");u("qps-ploc","Pseudo Language (Pseudo)","[Þšéųδô Ļāⁿĝüåġė (Ρŝέũδθ) !!! !!]");
u("qut","K'iche","K'iche");u("qut-gt","K'iche (Guatemala)","K'iche (Guatemala)‎");
u("quz","Quechua","runasimi");u("quz-bo","Quechua (Bolivia)","runasimi (Qullasuyu)‎");
u("quz-ec","Quechua (Ecuador)","runasimi (Ecuador)‎");u("quz-pe","Quechua (Peru)",
"runasimi (Piruw)‎");u("rm","Romansh","Rumantsch");u("rm-ch","Romansh (Switzerland)",
"Rumantsch (Svizra)‎");u("ro","Romanian","română");u("ro-ro","Romanian (Romania)",
"română (România)‎");u("ru","Russian","русский");u("ru-ru","Russian (Russia)","русский (Россия)‎");
u("rw","Kinyarwanda","Kinyarwanda");u("rw-rw","Kinyarwanda (Rwanda)","Kinyarwanda (Rwanda)‎");
u("sa","Sanskrit","संस्कृत");u("sah","Sakha","саха");u("sah-ru","Yakut (Russia)",
"саха (Россия)‎");u("sa-in","Sanskrit (India)","संस्कृत (भारतम्)‎");u("se","Sami (Northern)",
"davvisámegiella");u("se-fi","Sami, Northern (Finland)","davvisámegiella (Suopma)‎");
u("se-no","Sami, Northern (Norway)","davvisámegiella (Norga)‎");u("se-se","Sami, Northern (Sweden)",
"davvisámegiella (Ruoŧŧa)‎");u("si","Sinhala","සිංහල");u("si-lk","Sinhala (Sri Lanka)",
"සිංහල (ශ්‍රී ලංකා)‎");u("sk","Slovak","slovenčina");u("sk-sk","Slovak (Slovakia)",
"slovenčina (Slovenská republika)‎");u("sl","Slovenian","slovenski");u("sl-si","Slovenian (Slovenia)",
"slovenski (Slovenija)‎");u("sma","Sami (Southern)","åarjelsaemiengiele");u("sma-no",
"Sami, Southern (Norway)","åarjelsaemiengiele (Nöörje)‎");u("sma-se","Sami, Southern (Sweden)",
"åarjelsaemiengiele (Sveerje)‎");u("smj","Sami (Lule)","julevusámegiella");u("smj-no",
"Sami, Lule (Norway)","julevusámegiella (Vuodna)‎");u("smj-se","Sami, Lule (Sweden)",
"julevusámegiella (Svierik)‎");u("smn","Sami (Inari)","sämikielâ");u("smn-fi","Sami, Inari (Finland)",
"sämikielâ (Suomâ)‎");u("sms","Sami (Skolt)","sääm´ǩiõll");u("sms-fi","Sami, Skolt (Finland)",
"sääm´ǩiõll (Lää´ddjânnam)‎");u("sq","Albanian","shqipe");u("sq-al","Albanian (Albania)",
"shqipe (Shqipëria)‎");u("sr","Serbian","srpski");u("sr-cyrl","Serbian (Cyrillic)",
"српски");u("sr-cyrl-ba","Serbian (Cyrillic, Bosnia and Herzegovina)","српски (Босна и Херцеговина)‎");
u("sr-cyrl-cs","Serbian (Cyrillic, Serbia and Montenegro (Former))","српски (Србија и Црна Гора (Претходно))‎");
u("sr-cyrl-me","Serbian (Cyrillic, Montenegro)","српски (Црна Гора)‎");u("sr-cyrl-rs",
"Serbian (Cyrillic, Serbia)","српски (Србија)‎");u("sr-latn","Serbian (Latin)","srpski");
u("sr-latn-ba","Serbian (Latin, Bosnia and Herzegovina)","srpski (Bosna i Hercegovina)‎");
u("sr-latn-cs","Serbian (Latin, Serbia and Montenegro (Former))","srpski (Srbija i Crna Gora (Prethodno))‎");
u("sr-latn-me","Serbian (Latin, Montenegro)","srpski (Crna Gora)‎");u("sr-latn-rs",
"Serbian (Latin, Serbia)","srpski (Srbija)‎");u("sv","Swedish","svenska");u("sv-fi",
"Swedish (Finland)","svenska (Finland)‎");u("sv-se","Swedish (Sweden)","svenska (Sverige)‎");
u("sw","Kiswahili","Kiswahili");u("sw-ke","Kiswahili (Kenya)","Kiswahili (Kenya)‎");
u("syr","Syriac","ܣܘܪܝܝܐ");u("syr-sy","Syriac (Syria)","ܣܘܪܝܝܐ (سوريا)‏");u("ta",
"Tamil","தமிழ்");u("ta-in","Tamil (India)","தமிழ் (இந்தியா)‎");u("te","Telugu","తెలుగు");
u("te-in","Telugu (India)","తెలుగు (భారత దేశం)‎");u("tg","Tajik","Тоҷикӣ");u("tg-cyrl",
"Tajik (Cyrillic)","Тоҷикӣ");u("tg-cyrl-tj","Tajik (Cyrillic, Tajikistan)","Тоҷикӣ (Тоҷикистон)‎");
u("th","Thai","ไทย");u("th-th","Thai (Thailand)","ไทย (ไทย)‎");u("tk","Turkmen",
"türkmençe");u("tk-tm","Turkmen (Turkmenistan)","türkmençe (Türkmenistan)‎");u("tn",
"Setswana","Setswana");u("tn-za","Setswana (South Africa)","Setswana (Aforika Borwa)‎");
u("tr","Turkish","Türkçe");u("tr-tr","Turkish (Turkey)","Türkçe (Türkiye)‎");u("tt",
"Tatar","Татар");u("tt-ru","Tatar (Russia)","Татар (Россия)‎");u("tzm","Tamazight",
"Tamazight");u("tzm-latn","Tamazight (Latin)","Tamazight");u("tzm-latn-dz","Tamazight (Latin, Algeria)",
"Tamazight (Djazaïr)‎");u("ug","Uyghur","ئۇيغۇرچە");u("ug-cn","Uyghur (PRC)","ئۇيغۇرچە (جۇڭخۇا خەلق جۇمھۇرىيىتى)‏");
u("uk","Ukrainian","українська");u("uk-ua","Ukrainian (Ukraine)","українська (Україна)‎");
u("ur","Urdu","اُردو");u("ur-pk","Urdu (Islamic Republic of Pakistan)","اُردو (پاکستان)‏");
u("uz","Uzbek","U'zbek");u("uz-cyrl","Uzbek (Cyrillic)","Ўзбек");u("uz-cyrl-uz",
"Uzbek (Cyrillic, Uzbekistan)","Ўзбек (Ўзбекистон)‎");u("uz-latn","Uzbek (Latin)",
"U'zbek");u("uz-latn-uz","Uzbek (Latin, Uzbekistan)","U'zbek (U'zbekiston Respublikasi)‎");
u("vi","Vietnamese","Tiếng Việt");u("vi-vn","Vietnamese (Vietnam)","Tiếng Việt (Việt Nam)‎");
u("wo","Wolof","Wolof");u("wo-sn","Wolof (Senegal)","Wolof (Sénégal)‎");u("xh","isiXhosa",
"isiXhosa");u("xh-za","isiXhosa (South Africa)","isiXhosa (uMzantsi Afrika)‎");u(
"yo","Yoruba","Yoruba");u("yo-ng","Yoruba (Nigeria)","Yoruba (Nigeria)‎");u("zh",
"Chinese","中文");u("zh-cn","Chinese (Simplified, PRC)","中文(中华人民共和国)‎");u("zh-hans",
"Chinese (Simplified)","中文(简体)‎");u("zh-hant","Chinese (Traditional)","中文(繁體)‎");
u("zh-hk","Chinese (Traditional, Hong Kong S.A.R.)","中文(香港特別行政區)‎");u("zh-mo","Chinese (Traditional, Macao S.A.R.)",
"中文(澳門特別行政區)‎");u("zh-sg","Chinese (Simplified, Singapore)","中文(新加坡)‎");u("zh-tw",
"Chinese (Traditional, Taiwan)","中文(台灣)‎");u("zu","isiZulu","isiZulu");u("zu-za",
"isiZulu (South Africa)","isiZulu (iNingizimu Afrika)‎");n.widget("fxs.fxsLanguagePicker",
t,{options:{selectableCultures:[],selectedCulture:null},_selectableCulturesGroupedByLanguage:
null,_create:function(){var n=this.options.selectableCultures,t=this.options.selectedCulture;
n=n||[];r&&(r.supportedLocales&&n.length===0&&(n=r.supportedLocales),r.locale&&!t&&
n&&n.indexOf(r.locale)!==-1&&(t=r.locale));this.element.addClass("fxs-languagepicker");
this._setOption("selectableCultures",n);this._setOption("selectedCulture",t);e._create.
call(this,this.getNativeName,this.getEnglishName)},_destroy:function(){this.element.
removeClass("fxs-languagepicker");this._super()},_validateOptions:function(t,i){
if(n.each(t,function(n,t){if(!f[t])throw"The culture '{0}' is not a supported culture.".
format(t);}),i&&t.indexOf(i)===-1)throw"The selected culture '{0}' is not a selectable culture.".
format(i);},_setOption:function(n,t){return n==="selectableCultures"?(this._validateOptions(
t,this.options.selectedCulture),this._selectableCulturesGroupedByLanguage=null,e.
_setSelectableItems.call(this,t)):n==="selectedCulture"&&(this._validateOptions(
this.options.selectableCultures,t),e._setSelectedItem.call(this,t)),e._setOption.
apply(this,arguments)},getNativeName:function(n){var o=this._getViewModel().selectableItems(
),r,u,t,e,i;if(!this._selectableCulturesGroupedByLanguage)for(this._selectableCulturesGroupedByLanguage=
{},r=0;r<o.length;r++)u=o[r],t=u.split("-")[0],this._selectableCulturesGroupedByLanguage[
t]||(this._selectableCulturesGroupedByLanguage[t]=[]),this._selectableCulturesGroupedByLanguage[
t].push(u);return f[n]?(i=f[n].nativeName,t=n.split("-")[0],(!this._selectableCulturesGroupedByLanguage[
t]||this._selectableCulturesGroupedByLanguage[t].length<=1)&&(e=i.indexOf("("),e!==
-1&&(i=i.substring(0,e-1)))):i=n,i},getEnglishName:function(n){return f[n]?f[n].
englishName:n}})}(jQuery,jQuery.fxs.fxsPicker,this,this.fx.environment,this.fx.utilities),
function(n,t,i,r,u,f,e){"use strict";var y=t.prototype,l="fxs-contextmenu",p="fxs-contextmenu-item",
a="fxs-contextmenu-item-hover",w="fxs-contextmenu-separator",b="fxs-contextmenu-shown",
k="fxs-contextmenu-item-disabled",d="fxs-contextmenu-languagepicker",g="fxs-contextmenu-languagepicker-item",
nt="fxs-contextmenu-languagepicker-selected",s="fxs-contextmenu-hidden",tt="fxs-contextmenu",
o=0,h={},v=[],c={};n.widget("fxs.fxsContextMenu",t,{options:{visible:!0,items:[],
showBy:null,position:null,animateDuration:300},_viewModel:null,_create:function(
){this._setViewModel(new n.fxs.fxsContextMenu.ContextMenu);this.element.addClass(
l);this.options.showBy!==null?this._positionProximal(this.options.showBy):this.options.
position!==null&&this._position(this.options.position.left,this.options.position.
top);this._renderItems();this.options.visible||this.element.addClass(s);e.applyBindings(
{data:this._viewModel,func:this},this.element[0]);y._create.call(this)},_destroy:
function(){this.element.empty().removeClass(l).removeClass(s);this._super()},_positionProximal:
function(n){var t=n.position(),i=n.height();this._position(t.left,t.top+(i+20))}
,_position:function(n,t){this.element.addClass(b).css("left",n).css("top",t)},_renderItems:
function(){var i=[],t,n;for(o=0;o<this.options.items.length;o++){n=this.options.
items[o];switch(n.type){case"separator":t={text:"separator"+o,value:"separator"+
o};c[o]=!0;break;case"languagepicker":t={text:"languagepicker"+o,value:"languagepicker"+
o};h[o]=!0;break;case"text":t={text:n.text,value:n.text};break;default:t={text:n.
text,value:n.text}}i.push(t);n.disabled&&v.push(t)}this._initListControl(i,v,this)}
,_initListControl:function(t,i,r){var u;u=n("<div />").fxItemList({name:tt,values:
t,disabledValues:i});u.find("ul > li").each(function(t){var u=n(this).addClass(p),
f=n("<a />").attr("href","#").html(u.html());if(i[t]||u.html(f),r.options.items[
t].setup&&r.options.items[t].setup(u),c[t]&&u.text("").addClass(w),u.attr("aria-disabled")===
"true")u.addClass(k).click(function(){return!1});else{u.on("click","a",function(
n){var i=r.options.items[t].click;i&&i(this);n.preventDefault()});r.options.items[
t].type!=="languagepicker"&&u.hover(function(){n(this).addClass(a)},function(){n(
this).removeClass(a)})}h[t]&&(r._createLanguagePicker(r.options.items[t],r,u),u.
addClass(g))});h={};c={};r.element.append(u)},_createLanguagePicker:function(t,i,
r){var o=t,s=n("<div />").fxsLanguagePicker().addClass(d),u=[],f,h=n("<span />"),
e=s.find("select");e.find("option").each(function(){var t=n(this).attr("value");
u.push({value:t,title:n(this).attr("title"),text:n(this).text(),selected:t===e.val(
)?!0:!1})});f=n("<div />").fxItemList({name:"fx-languagelist",values:u});f.find(
"li").each(function(t){var r=n(this),f=n("<a />").attr("href","#").html(r.html());
r.html(f);r.attr("data-val-culture",u[t].value);r.on("click","a",function(t){i._selectLanguage(
n(this).parent().attr("data-val-culture"));t.preventDefault()});u[t].selected&&r.
addClass(nt)});f.prepend(h.text(o.label));r.html(f)},_selectLanguage:function(n)
{var t=f.getUrlWithQueryStringParameter(i.location.href,r.localeQueryStringParameterName,
n);Shell.Diagnostics.Telemetry.customEvent("Language","HeaderBarMenu",n);i.location.
hash&&(t=f.getUrlWithQueryStringParameter(t,r.fragmentQueryStringParameterName,i.
location.hash.substr(1)),t=t.substr(0,t.lastIndexOf("#")));i.location.href=t},show:
function(){this.element.removeClass(s);this.options.visible=!0},showAnimate:function(
){this.element.slideDown(this.options.animateDuration).removeClass(s);this.options.
visible=!0},hide:function(){this.element.addClass(s);this.options.visible=!1},hideAnimate:
function(){this.element.slideUp(this.options.animateDuration).addClass(s);this.options.
visible=!1},toggleVisibility:function(){this.options.visible?this.hide():this.show(
)},position:function(n,t){this._position(n,t)},visible:function(){return this.options.
visible},getViewModel:function(){return this._viewModel},getActiveLocale:function(
){return this.element.find(".fxs-contextmenu-languagepicker-selected").attr("data-val-culture")}
,_setViewModel:function(n){this._viewModel=n}});n.fxs.fxsContextMenu.ContextMenu=
function(){this.items=e.observable([])};n.fxs.fxsContextMenu.Item=function(){this.
text=e.observable("");this.enabled=e.observable(!0);this.visible=e.observable(!0);
this.click=e.observable(n.noop)}}(jQuery,jQuery.Widget,this,this.fx.environment,
this.fx.resources,this.fx.utilities,ko),function(n,t,i){"use strict";var u=t.prototype,
f="fxs-avatarbar",e="fxs-avatarbar-large",o="fxs-avatarbar-menu",r="fxs-avatarbar-active",
s="<a href='#' class='fxs-avatarbar-link'><div class='fxs-avatarbar-image'><\/div><span class='fxs-avatarbar-text' data-bind='text: data.name'><\/span><\/a><div class='"+
o+"'><\/div>";n.widget("fxs.fxsAvatarBar",t,{options:{name:"",menuItems:[],large:
!1},_viewModel:null,_subscriptions:null,_clickHandler:null,_globalClickHandler:null,
_isOpeningMenu:!1,_create:function(){var t=this;this._setViewModel(new n.fxs.fxsAvatarBar.
AvatarBar);this._setOption("name",this.options.name);this._setOption("large",this.
options.large);this.element.addClass(f).html(s).on("click","a.fxs-avatarbar-link",
this._clickHandler=function(n){t._viewModel.menuOpen()?(t.closeMenu(),Shell.Diagnostics.
Telemetry.customEvent("Close","HeaderBarMenu")):(t.openMenu(),t._isOpeningMenu=!0,
Shell.Diagnostics.Telemetry.customEvent("Open","HeaderBarMenu"));n.preventDefault(
)});i.applyBindings({data:this._viewModel,func:this},this.element[0]);this._setOption(
"menuItems",this.options.menuItems);n("html").on("click",this._globalClickHandler=
function(){t._globalClick()});u._create.call(this)},_destroy:function(){this.element.
empty().removeClass(f+" "+e+" "+r);this._clickHandler&&(this.element.off("click",
this._clickHandler),this._clickHandler=null);this._globalClickHandler&&(n("html").
off("click",this._globalClickHandler),this._globalClickHandler=null);this._unsubscribe(
);this._super()},openMenu:function(){var t=this.element.find("."+o),n=this.element.
find("a.fxs-avatarbar-link"),i=n.position(),r,u;r=i.top+n.outerHeight();u=i.left+
n.outerWidth()-t.outerWidth();t.fxsContextMenu("position",u,r);this._viewModel.menuOpen(
!0)},closeMenu:function(){this._viewModel.menuOpen(!1)},getViewModel:function(){
return this._viewModel},_setViewModel:function(n){this._viewModel=n;this._subscribe(
this._viewModel)},_globalClick:function(){this._isOpeningMenu?this._isOpeningMenu=
!1:this._viewModel.menuOpen(!1)},_setupMenu:function(){var n=this.element.find(".fxs-avatarbar-menu");
n.is(":data(fxs-fxsContextMenu)")&&n.fxsContextMenu("destroy");n.fxsContextMenu(
{items:this.options.menuItems,visible:!1})},_unsubscribe:function(){if(this._subscriptions)
while(this._subscriptions.length)this._subscriptions.splice(0,1)[0].dispose()},_subscribe:
function(n){var t=this;this._subscriptions=this._subscriptions||[];this._unsubscribe(
);this._subscriptions.push(n.large.subscribe(function(n){var r=t.element.find(".fxs-avatarbar-menu"),
o=r.position(),i,u,f;t.element.toggleClass(e,n);t._viewModel.menuOpen()&&(i=t.element,
u=i.position(),f=u.top+i.height(),r.fxsContextMenu("position",o.left,f))}));n.large.
notifySubscribers(n.large());this._subscriptions.push(n.menuOpen.subscribe(function(
n){n?t.element.addClass(r).find(".fxs-avatarbar-menu").fxsContextMenu("showAnimate"):
t.element.removeClass(r).find(".fxs-avatarbar-menu").fxsContextMenu("hideAnimate")}
));n.menuOpen.notifySubscribers(n.menuOpen())},_setOption:function(n,t){var i=u.
_setOption.apply(this,arguments);switch(n){case"menuItems":this._setupMenu();break
case"name":case"large":this._viewModel[n](t)}return i}});n.fxs.fxsAvatarBar.AvatarBar=
function(){this.name=i.observable("");this.large=i.observable(!1);this.menuOpen=
i.observable(!1)}}(jQuery,jQuery.Widget,ko,this),function(n,t,i,r){"use strict";
var e=t.prototype,u="fxs.fxsHeaderBar",o="fxs-headerbar",f="fxs-headerbar-controls",
s="fxs-headerbar-avatarbar",h="fxs-headerbar-expanded",c="<div class='fxs-headerbar-navigation'><div class='fxs-headerbar-navigation-wrapper'><a data-bind='attr: { href: data.logoUrl }' class='fxs-headerbar-navigation-logo'><img data-bind='attr: { src: data.logo, alt: data.logoAltText }' /><\/a><a href='#' class='fxs-headerbar-navigation-expander' data-bind='attr: { title: data.expanded() ? text.expanderCollapseImageAlt : text.expanderExpandImageAlt }'><img data-bind='attr: { src: data.expanded() ? url.expanderCollapseImageUrl : url.expanderExpandImageUrl, alt: data.expanded() ? text.expanderCollapseImageAlt : text.expanderExpandImageAlt }' /><\/a><\/div><nav><ul class='fxs-headerbar-navigation-menu' data-bind='foreach: data.menuItems'><li><a data-bind='attr: { href: href }, text: text'><\/a><\/li><\/ul><\/nav><\/div><div class='fxs-headerbar-controls-parent'><div class='"+
f+"'><\/div><div class='"+s+"'><\/div><\/div>";n.widget(u,t,{options:{logo:"",logoAltText:
"",logoUrl:"",avatarBar:null,controls:[],menuItems:[],expanded:!1,class_:i.getClasses(
u),text:i.getStrings(u)},_viewModel:null,_subscriptions:null,_clickHandler:null,
_globalClickHandler:null,_create:function(){var t=this;this._setViewModel(new n.
fxs.fxsHeaderBar.HeaderBar);this._setOption("menuItems",this.options.menuItems);
this._setOption("logo",this.options.logo);this._setOption("logoAltText",this.options.
logo);this._setOption("logoUrl",this.options.logoUrl);this._setOption("expanded",
this.options.expanded);this.element.addClass(o).html(c).on("click","a.fxs-headerbar-navigation-expander",
this._clickHandler=function(n){t._viewModel.expanded(!t._viewModel.expanded());n.
preventDefault();n.stopPropagation();t._viewModel.expanded()?Shell.Diagnostics.Telemetry.
customEvent("MaximizerOpen","HeaderBar"):Shell.Diagnostics.Telemetry.customEvent(
"MaximizerClose","HeaderBar")});r.applyBindings({data:this._viewModel,func:this,
text:this.options.text,class_:this.options.class_},this.element[0]);this._setOption(
"avatarBar",this.options.avatarBar)._setOption("controls",this.options.controls);
n("html").on("click",this._globalClickHandler=function(n){t._globalClick(n)});e.
_create.call(this)},_destroy:function(){this.element.empty().removeClass(o);this.
_clickHandler&&(this.element.off("click",this._clickHandler),this._clickHandler=
null);this._globalClickHandler&&(n("html").off("click",this._globalClickHandler),
this._globalClickHandler=null);this._super()},getViewModel:function(){return this.
_viewModel},addControl:function(n){this.element.find("."+f).append(n)},_setControls:
function(t){var i=this.element.find("."+f);i.empty();n.each(t,function(n,t){i.append(
t)})},_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)}
,_setupAvatarBar:function(n){this.element.find("."+s).empty().append(n)},_globalClick:
function(t){n.contains(this.element,t.target)||this._viewModel.expanded(!1)},_unsubscribe:
function(){if(this._subscriptions)while(this._subscriptions.length)this._subscriptions.
splice(0,1)[0].dispose()},_subscribe:function(n){var t=this;this._subscriptions=
this._subscriptions||[];this._unsubscribe();this._subscriptions.push(n.expanded.
subscribe(function(n){t.element.toggleClass(h,n);t._viewModel.avatarBarModel&&t.
_viewModel.avatarBarModel.large(n)}));n.expanded.notifySubscribers(n.expanded())}
,_setOption:function(n,t){var i=e._setOption.apply(this,arguments);switch(n){case"avatarBar":
this._setupAvatarBar(t);t?(this._viewModel.avatarBarModel=t.fxsAvatarBar("getViewModel"),
this._viewModel.expanded.notifySubscribers(this._viewModel.expanded())):this._viewModel.
avatarBarModel=null;break;case"controls":this._setControls(t);break;case"logo":case"logoAltText":
case"logoUrl":case"menuItems":case"expanded":this._viewModel[n](t)}return i}});n.
fxs.fxsHeaderBar.HeaderBar=function(){this.avatarBarModel=null;this.menuItems=r.
observableArray();this.expanded=r.observable(!0);this.logo=r.observable("");this.
logoAltText=r.observable("");this.logoUrl=r.observable("")}}(jQuery,jQuery.Widget,
this.fx.resources,ko,this),function(n,t,i,r,u){"use strict";function e(){var r=t(
"#fxshell-navpane");r.length===1&&(r.navigation(),n.onhashchange=function(){var t=
n.location,r;return i.Diagnostics.Telemetry.traceNavigation(),o(t.hash),r=i.UI.Navigation.
cdmNavigateTo(t.hash),typeof r=="string"?(t.hash=r,!1):void 0})}function o(n){var
i=null,t=n.split("/");t.length>2?(i=t[t.length-1],i!=="ViewExperiment"&&window.newExperimentGeneration&&
(window.newExperimentGeneration=null)):window.newExperimentGeneration&&(window.newExperimentGeneration=
null)}function s(){var n=i.Environment.getDevelopmentMode();if(n){f=t("#fxshell-diagnosticDialog").
logviewer({width:"60em",height:"230",zIndex:2e3,maxHeight:"600",position:["right",
"bottom"],autoOpen:!1,showLogOnError:n});t("body").on("keypress",function(n){n.which===
126&&f.logviewer("open")})}}function h(){var n=t("#fxshell-wallpaper"),i=t("#fxshell-wallpaper-a"),
u=t("#fxshell-wallpaper-b");n.data("background-index","0");t("#fxshell-wallpaper").
dblclick(function(){var t=["wallpaper-white.png","wallpaper-textureblue.jpg","wallpaper-texturegrey.jpg",
"wallpaper-bluelights.jpg","wallpaper-rainbow.jpg"],o=function(){i.css("background-image",
e).css("opacity",1);u.css("background-image",null)},f=(parseInt(n.data("background-index"),
10)+1)%t.length,e="url("+r.getContentUrl("Content/Images/"+t[f])+")";u.css("background-image",
e);i.stop(!0,!0).animate({opacity:0},500,o);n.data("background-index",f)})}function c(
){function u(){o=i.scrollLeft();s=i.width();h=r.width();s<h?(r.css({position:"static",
boxShadow:"0 0"}),e.css({display:"none"}),f.css({left:-o,marginLeft:0})):(r.css(
{position:"",boxShadow:""}),e.css({display:""}),f.css({left:"",marginLeft:""}))}
var i=t(n),f=t("#headerbar-wrapper, #fxshell-navpane, #aux-foreground, #drawer, .preview-positioner"),
r=t("#aux-foreground"),e=t("#fxshell-wallpaper"),o,s,h;i.scroll(u).resize(u);u()}
function l(){t("#drawer").on("fxsdraweropenhelp",function(){i.Diagnostics.Telemetry.
traceEvent("help")}).on("fxsdrawermenuquickcreate fxsdrawermenuactionexecute",function(
n,t){i.Diagnostics.Telemetry.traceEvent("drawer",t.extension,t.path)})}function a(
){e();s();h();c();l();Impl.UI.HeaderBar.initialize();var n=u.Services.get("loggingService");
n&&n.setLogViewer(f);i.Diagnostics.Log.writeEntry("webbrowserhost.LogSessionId",
"Page request ID is "+i.Environment.getPageRequestId(),i.Diagnostics.LogEntryLevel.
information)}var f=null;t(function(){a()})}(this,jQuery,Shell,this.fx.resources,
Impl),function(n,t){"use strict";function f(){return i.accountUrl}function e(){return i.
applicationRoot}function o(){return i.developmentMode}function s(){return i.isOnPremMode}
function h(){return i.isAdminMode}function c(){return i.navigationLinks}function l(
){return i.portalVersion}function a(){return i.userEmailAddress}function v(){return i.
userFirstName}function y(){return i.branding}function p(){return i.enableHelpDrawer}
function w(){return i.signOutLink}function b(){return i.feedbackLink}function k(
){return i.isTelemetryEventDisabled}function d(){if(!r&&(r={},i.betaFeatures))for(
var n=0;n<i.betaFeatures.length;n++)r[i.betaFeatures[n].extensionName]=i.betaFeatures[
n].featureName;return r}function g(){return i.betaSignUpUrl}function nt(){return i.
productionPortalUrl}function tt(){return i.pageRequestId}function it(n){return n=
n||"",u+n}var i={},r,u="";n.environment&&(i=n.environment,u=i.staticContentRootUrl||
"");t.Namespace.define("Impl.Environment",{getApplicationRoot:e,getDevelopmentMode:
o,getIsOnPremMode:s,getIsAdminMode:h,getNavigationLinks:c,getPortalVersion:l,getUserEmailAddress:
a,getUserFirstName:v,getEnableHelpDrawer:p,getBranding:y,getSignOutLink:w,getFeedbackLink:
b,getIsTelemetryEventDisabled:k,getBetaFeatures:d,getBetaSignUpUrl:g,getAccountUrl:
f,getProductionPortalUrl:nt,getPageRequestId:tt,getUrl:it})}(this,Shell),function(
n,t,i,r,u,f){"use strict";var e;e=i.Class.define(function(){var n=this;u.onDocumentUnload(
function(){n._eventQueue.length>0&&n._sendEventsToServer()})},{_logViewer:null,_sendTimeoutMs:
1e4,_maxQueuedEvents:50,_eventQueue:[],_eventsBeingSentToServer:[],_sendTimer:null,
_outstandingRequestToServer:null,_throttleNextRequest:!1,_isRequestToServerThrottleTimer:
null,writeEntry:function(n,i,r,u){var e=r===Shell.Diagnostics.LogEntryLevel.error,
f={};this._logViewer!==null&&this._logViewer.logviewer("addEntry",i,r);u=this._getDataObject(
u);t.extend(f,{message:i,eventKey:n},u);this._logData(r,f,e)},exception:function(
n,i,r,u,f){var e={};f=this._getDataObject(f);t.extend(e,{isHandledException:n,type:
i,stackTrace:r,stringRepresentation:u},f);this._logData("exception",e)},startup:
function(n,i,r,u,f,e){var o={};e=this._getDataObject(e);t.extend(o,{secondsDuration:
n,successfulDownloadCount:i,failedDownloadCount:r,failedDownloadSummary:u,downloadMetricsSummary:
f},e);this._logData("startup",o)},viewSwitch:function(n,i,r,u){var f={};u=this._getDataObject(
u);t.extend(f,{fromView:n,toView:i,totalSeconds:r},u);this._logData("viewSwitch",
f)},clientAction:function(n,i,r,u){var f={};u=this._getDataObject(u);t.extend(f,
{action:n,scenarioCorrelationId:i,selectedEntity:r},u);this._logData("clientAction",
f)},customEvent:function(n,i,r){var u={};r=this._getDataObject(r);t.extend(u,{customEventType:
i,eventKey:n},r);this._logData("customEvent",u)},clientScenario:function(n,i,r,u,
f,e,o){var s={};o=this._getDataObject(o);t.extend(s,{scenarioCorrelationId:n,scenarioName:
i,entityType:r,completionReason:u,userSeconds:f,endToEndSeconds:e},o);this._logData(
"clientScenario",s)},performance:function(n,i,r,u){var f={};u=this._getDataObject(
u);t.extend(f,{key:n,time:i,message:r},u);this._logData("performance",f)},feedbackInfo:
function(n,i){var r={};i=this._getDataObject(i);t.extend(r,{comments:n},i);this.
_logData("feedbackInfo",r,!0)},featureUsage:function(n,i,r,u,f,e,o,s){var h={};s=
this._getDataObjectAsString(s);t.extend(h,{featureId:n,featureName:i,groupId:r,groupName:
u,workspaceId:f,experimentId:e,moduleId:o},s);this._logData("featureUsage",h)},setLogViewer:
function(n){this._logViewer=n},_getDataObjectAsString:function(n){switch(typeof n)
{case"object":return{data:JSON.stringify(n)};case"undefined":return"";case"string":
return{data:n};default:return{data:n.toString()}}},_getDataObject:function(n){var
t,i;switch(typeof n){case"object":if(n instanceof Array){for(i={},t=0;t<n.length;
t++)i["data"+t]=n[t];return i}return n;case"undefined":return{};case"string":return{
data:n};default:return{data:n.toString()}}},_logData:function(n,r,u){var f=e._methodToEventIdMap[
n],o=i.Environment.getIsTelemetryEventDisabled();o&&o[f-450]||(this._eventQueue.
push(t.extend(r,{eventId:f},this._getCommonLoggingData())),this._sendEventsToServerIfNecessary(
u))},_sendEventsToServerIfNecessary:function(t){var i=this;!this._isRequestToServerThrottleTimer&&
!this._outstandingRequestToServer&&this._eventQueue.length>0&&(this._eventQueue.
length>=this._maxQueuedEvents||t?this._sendEventsToServer():this._sendTimer||(this.
_sendTimer=n.setTimeout(function(){i._sendEventsToServer()},this._sendTimeoutMs)))}
,_throttleIfNecessary:function(){var i=!1,t=this;return t._isRequestToServerThrottleTimer?
i=!0:t._throttleNextRequest&&(t._isRequestToServerThrottleTimer=n.setTimeout(function(
){t._isRequestToServerThrottleTimer=null;t._sendEventsToServer()},t._sendTimeoutMs),
t._throttleNextRequest=!1,i=!0),i},_sendEventsToServer:function(){if(!this._throttleIfNecessary(
)){var r=this,u=r._eventsBeingSentToServer=r._eventQueue.splice(0,r._maxQueuedEvents);
r._outstandingRequestToServer=i.Net.ajax({type:"POST",url:e._postDataUrl,data:r.
_getPostString(),logFunction:t.noop,suppressSuccessLogging:!0}).fail(function(){
r._eventQueue=u.concat(r._eventQueue);r._throttleNextRequest=!0}).always(function(
){r._outstandingRequestToServer=null;r._sendEventsToServerIfNecessary()});n.clearTimeout(
r._sendTimer);r._sendTimer=null;r._eventsBeingSentToServer=[]}},_getPostString:function(
){for(var u="",t,f,i,r,o,s,n=0;n<this._eventsBeingSentToServer.length;n++){t=this.
_eventsBeingSentToServer[n];f=e._handlerArgName+"["+n+"][";r=0;for(i in t)t.hasOwnProperty(
i)&&(o=this._encodeText(i),s=this._encodeText(t[i]),u+=f+r+"].Key="+o+"&",u+=f+r+
"].Value="+s+"&",r++)}return u.slice(0,-1)},_encodeText:function(n){var t=n===f||
n===null?"":(n+"").replace(/([&<>"])/g,this._getReplacementEntity);return encodeURIComponent(
t)},_getReplacementEntity:function(n){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':
"&quot;"}[n]},_getCommonLoggingData:function(){return{pageRequestId:i.Environment.
getPageRequestId(),url:n.location.href,clientDateTime:(new Date).toUTCString()}}
},{_methodToEventIdMap:{error:451,information:452,exception:453,startup:454,viewSwitch:
456,clientAction:457,clientScenario:458,customEvent:459,warning:460,verbose:461,
performance:462,feedbackInfo:463,featureUsage:464},_postDataUrl:"/LoggingService/PostData",
_handlerArgName:"evts"});r.Services.add("loggingService",new e)}(this,jQuery,Shell,
Impl,this.Host),function(n,t,i,r,u,f){"use strict";var o=t.prototype,e="fxs.fxsNotification",
s=0,h="__fxs-notification",c=function(){return h+s++},l="<div class='fxs-notification-actions'><ul class='fxs-notification-buttons'><li data-bind='visible: func._hasDetails.call(func) && !data.detailsShowing()' class='fxs-notification-detailsbutton'><button class='fxs-notification-button' data-bind='activateWidget: \"fxButton\", fxcontrol-options: { class_: class_.details, selector: \"span.sprite\" }'><span class='sprite'><\/span><span class='fxs-notification-button-text' data-bind='text: text.details'><\/span><\/button><\/li><!-- ko foreach: data.actions --><li><button class='fxs-notification-button' data-bind='activateWidget: \"fxButton\", fxcontrol-options: jQuery.extend({}, $data, { selector: \"span.sprite\" })'><span class='sprite'><\/span><span class='fxs-notification-button-text' data-bind='text: text'><\/span><\/button><\/li><!-- /ko --><\/ul><\/div><div class='fxs-notification-summary' aria-live='polite'><div class='fxs-notification-status' data-bind='if: class_[data.status()]'><span data-bind='attr: { class: \"sprite \" + class_[data.status()] }'><\/span><\/div><div class='fxs-notification-header' data-bind='safeMarkup: data.title'><\/div><\/div><div class='fxs-notification-details'><div class='fxs-notification-title'><button class='fxs-notification-back'><span class='sprite'><\/span><\/button><div class='fxs-notification-header' data-bind='safeMarkup: text.back'><\/div><\/div><!-- ko if: data.detailsText --><!-- ko ifnot: data.detailsUseHtml --><div data-bind='safeMarkup: data.detailsText' class='fxs-notification-details-text'><\/div><!-- /ko --><!-- ko if: data.detailsUseHtml --><div data-bind='html: data.detailsText' class='fxs-notification-details-text'><\/div><!-- /ko --><!-- /ko --><!-- ko template: { 'if': data.detailsUrl, afterRender: func._iFrameRender } --><div class='fxs-notification-details-iframe'><iframe frameborder='0' data-bind='attr: { src: data.detailsUrl }'><\/iframe><\/div><!-- /ko --><\/div>";
n.widget(e,t,{options:{title:"",status:"",detailsText:"",detailsUrl:"",actions:[
],class_:r.getClasses(e),text:r.getStrings(e),detailsUseHtml:!1},_viewModel:null,
_subscriptions:null,_backClickHandler:null,_detailsClickHandler:null,_create:function(
){var t=this,i=c();this._setViewModel(new n.fxs.fxsNotification.Notification);this.
element.attr({"aria-live":"polite","aria-describedby":i}).addClass("fxs-notification").
html(l).find(".fxs-notification-summary").attr("id",i).end().find(".fxs-notification-back span.sprite").
addClass(this.options.class_.back).end().on("click","button.fxs-notification-back",
this._backClickHandler=function(n){t._viewModel.detailsShowing(!1);n.preventDefault(
)}).on("click",".fxs-notification-detailsbutton",this._detailsClickHandler=function(
n){t._viewModel.detailsShowing(!0);n.preventDefault()});this._setOption("title",
this.options.title);this._setOption("status",this.options.status);this._setOption(
"detailsText",this.options.detailsText);this._setOption("detailsUrl",this.options.
detailsUrl);this._setOption("actions",this.options.actions);this._setOption("detailsUseHtml",
this.options.detailsUseHtml);u.applyBindings({data:this._viewModel,class_:this.options.
class_,text:this.options.text,func:this},this.element[0]);o._create.call(this)},
_destroy:function(){this.element.empty().removeClass("fxs-notification fxs-notification-hasdetails").
removeAttr("role aria-live aria-describedby");this._backClickHandler&&(this.element.
off("click",this._backClickHandler),this._backClickHandler=null);this._detailsClickHandler&&
(this.element.off("click",this._detailsClickHandler),this._detailsClickHandler=null);
this._unsubscribe();this._super()},getViewModel:function(){return this._viewModel}
,_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)},_iFrameRender:
function(t){var i=n(t[0]).find("iframe");i[0].allowTransparency=!0;i.on("load",function(
){n(this).addClass("fxs-notification-details-iframe-loaded")})},_hasDetails:function(
){var n=this._viewModel.detailsText(),t=this._viewModel.detailsUrl();return n!==
null&&n!==""||t!==null&&t!==""},_unsubscribe:function(){if(this._subscriptions)while(
this._subscriptions.length)this._subscriptions.splice(0,1)[0].dispose()},_subscribe:
function(n){var t=this,i=function(){var n=t._hasDetails();t.element.toggleClass(
"fxs-notification-hasdetails",n);n||t._viewModel.detailsShowing(!1)},r=function(
n){t.element.toggleClass("fxs-notification-showingdetails",n)};this._subscriptions=
this._subscriptions||[];this._unsubscribe();this._subscriptions.push(n.status.subscribe(
function(n){n==="warning"||n==="error"?t.element.attr("role","alert"):t.element.
attr("role","status")}));n.status.notifySubscribers(n.status());this._subscriptions.
push(n.detailsText.subscribe(i));this._subscriptions.push(n.detailsUrl.subscribe(
i));this._subscriptions.push(n.detailsShowing.subscribe(r));this._subscriptions.
push(n.detailsUseHtml.subscribe(i));n.detailsText.notifySubscribers(n.detailsText(
));n.detailsUrl.notifySubscribers(n.detailsUrl());n.detailsUrl.notifySubscribers(
n.detailsShowing());n.detailsUseHtml.notifySubscribers(n.detailsUseHtml());this.
_subscriptions.push(n.title.subscribe(function(n){t.element.find(".fxs-notification-header").
attr("title",f.getText(n))}));n.title.notifySubscribers(n.title())},_setOption:function(
n,t){var i=o._setOption.apply(this,arguments);switch(n){case"title":case"status":
case"detailsText":case"detailsUrl":case"actions":case"detailsUseHtml":this._viewModel[
n](t)}return i}});n.fxs.fxsNotification.NotificationStatus={information:"information",
warning:"warning",error:"error"};n.fxs.fxsNotification.Notification=function(){this.
title=u.observable("");this.status=u.observable();this.detailsText=u.observable(
"");this.detailsUrl=u.observable("");this.actions=u.observableArray();this.detailsShowing=
u.observable(!1);this.detailsUseHtml=u.observable(!1)}}(jQuery,jQuery.Widget,Shell,
this.fx.resources,ko,Shell.Utilities.SafeMarkup),function(n,t,i){"use strict";var
r=t.Communication.Receiver.getReceiver(),o=function(){},e=o,h=t.Environment.getDevelopmentMode&&
t.Environment.getDevelopmentMode(),f=function(){var n=i.Services.get("loggingService");
if(!n)throw"logging service not found";return n},s=function(t,i,r,u,f){var l=n.dcsMultiTrack,
e=n.location,o,s,c;l&&!h&&(t?(o=e.pathname+e.hash,s="0",c=e.host+o):(o=e.pathname,
s="1",c=null),l("DCS.dcssip",e.host,"DCS.dcsuri",o,"WT.dl",s,"DCSext.wtEvtSrc",c,
"WT.z_source",i,"WT.z_extension",r,"WT.z_action",u,"WT.z_context",f))},u=t.Namespace.
define("Impl.Diagnostics.Log",{writeEntry:function(n,t,i,r){e(n,t,i,r);f().writeEntry(
n,t,i,r)},exception:function(n,t,i,r,u){e(t,"Exception","error",[n,r,u]);f().exception(
n,t,i,r,u)},startup:function(n,t,i,r,u,e){f().startup(n,t,i,r,u,e)},viewSwitch:function(
n,t,i,r){f().viewSwitch(n,t,i,r)},clientAction:function(n,t,i,r){f().clientAction(
n,t,i,r)},customEvent:function(n,t,i){f().customEvent(n,t,i)},clientScenario:function(
n,t,i,r,u,e,o){f().clientScenario(n,t,i,r,u,e,o)},performance:function(n,t,i,r){
f().performance(n,t,i,r)},traceEvent:function(n,t,i,r){s(!1,n,t,i,r)},traceNavigation:
function(){s(!0)},feedbackInfo:function(n,t){f().feedbackInfo(n,t)},featureUsage:
function(n,t,i,r,u,e,o,s){f().featureUsage(n,t,i,r,u,e,o,s)}});(function(){if(t.
Environment&&t.Environment.getDevelopmentMode&&t.Environment.getDevelopmentMode(
)&&t.Diagnostics&&t.Diagnostics.LogEntryLevel){var u=t.Diagnostics.LogEntryLevel,
i=n.console,r;n.jQuery&&n.jQuery.cookie&&(r=n.jQuery.cookie("tracePattern"));i&&
i.error&&i.info&&i.log&&i.warn&&(e=function(n,t,f,e){r&&n&&n.IndexOf(r)===-1?o():
f===u.error?i.error(n,{message:t,data:e}):f===u.warning?i.warn(n,{message:t,data:
e}):r&&i.info(n,{message:t,data:e})})}})();r.addMethod("Impl.Diagnostics.Log.writeEntry",
u.writeEntry);r.addMethod("Impl.Diagnostics.Log.exception",u.exception);r.addMethod(
"Impl.Diagnostics.Log.startup",u.startup);r.addMethod("Impl.Diagnostics.Log.viewSwitch",
u.viewSwitch);r.addMethod("Impl.Diagnostics.Log.clientAction",u.clientAction);r.
addMethod("Impl.Diagnostics.Log.customEvent",u.customEvent);r.addMethod("Impl.Diagnostics.Log.clientScenario",
u.clientScenario);r.addMethod("Impl.Diagnostics.Log.performance",u.performance);
r.addMethod("Impl.Diagnostics.Log.traceEvent",u.traceEvent);r.addMethod("Impl.Diagnostics.Log.traceNavigation",
u.traceNavigation);r.addMethod("Impl.Diagnostics.Log.feedbackInfo",u.feedbackInfo);
r.addMethod("Impl.Diagnostics.Log.featureUsage",u.featureUsage)}(this,Shell,Impl),
function(n,t,i,r,u){"use strict";function y(n,t){var i=n.complete,r=n.error,u=function(
){t.releaseArgument(i);t.releaseArgument(r)};t.holdArgument(n);n.complete=function(
){i.apply(this,arguments);u()};n.error=function(){r.apply(this,arguments);u()}}function ft(
n){var t=ut;return function(){ut===t&&n.apply(this,arguments)}}function v(n,t,i,
r,u){it[n].call(this,t,ft(i),ft(r),u)}function f(n){return n===null||n===u}function oi(
n,t){return!f(n.path)&&(!t||typeof n.name=="string"&&n.name!==""&&n.hasOwnProperty(
"value"))}function p(t,i,r){var u=i&&typeof i.store=="string"&&i.store!==""&&(i.
type==="User"||i.type==="Subscription"&&typeof i.subscriptionId=="string"&&i.subscriptionId!==
"")&&n.isArray(i.settings)&&n.grep(i.settings,function(n){return!oi(n,r)}).length===
0;return u||t.error("arguments must be of the format {store, type, subscriptionid, settings {[{path, name}]}}."),
u}function si(t,i){var r=i&&typeof i.store=="string"&&i.store!==""&&(i.type==="User"||
i.type==="Subscription"&&typeof i.subscriptionId=="string"&&i.subscriptionId!=="")
&&n.isArray(i.pathPrefixes);return r&&n.each(i.pathPrefixes,function(n,t){if(typeof
t!="string")return r=!1,!1}),r||t.error("arguments must be of the format {store, type, subscriptionid, pathPrefixes:[<pathPrefixString>, ...]}]."),
r}function et(n,t){return t.store!==dt?(n.error("use of preloaded settings is currently limited to the 'Global' store."),
!1):!0}function o(){nt&&nt.setEntry(s)}function ot(n,t,i,r,u){return u.store===n&&
u.type===t&&(u.subscriptionId===i||f(u.subscriptionId)&&f(i))&&u.path===r.path&&
(u.name===r.name||f(u.name)&&f(r.name))}function hi(n,t){var i,r;if(!ht(n))for(i=
0,r=n.value.length;i<r;i++)if(n.value[i].Name===t)return!0}function st(n,t,i,r,e,
o,s,h){var b=!f(e.name),a,v,y,k,c,d,l,p;for(b&&(y={path:e.path},k=w(s,y)),c=0,d=
n.length;c<d;c++){if(l=n[c],p=l.hashCode,p===o&&ot(t,i,r,e,l)&&(a=c,h||v!==u))break;
if(b&&p===k&&ot(t,i,r,y,l)&&hi(l,e.name)&&(v=c,h||a!==u))break}return{settingIndex:
a,pathWildcardIndex:v}}function ht(n){return n.value===null||n.value===rt}function ct(
n,t){return(n&4294967295)+(t&4294967295)}function lt(n,t){return n<<t|n>>>32-t}function at(
n){for(var i=0,t=0;t<n.length;t++)i=ct(lt(i,7),n.charCodeAt(t));return i}function k(
n,t,i){return at(gt(n,t,i))}function gt(n,t,i){return[n,t,i||"undefined"].join("/")}
function w(n,t){var i=ct(n,lt(at(t.path),11));return f(t.name)||(i=ct(i,lt(at(t.
name),23))),i}function vt(t){for(var e=t.store,o=t.type,s=t.subscriptionId,a=k(e,
o,s),c=t.settings,v=n.map(t.settings,function(n){return w(a,n)}),i,y=c.length,u,
f=[],r=0,l=h.length;r<l;r++)for(u=h[r],i=0;i<y;i++)u.hashCode===v[i]&&ot(e,o,s,c[
i],u)&&!f[i]&&(f[i]=r);return f}function ni(n,t,i,r,u,e,o){var s;return n.length>=
bt&&n.splice(n.length-1,n.length-bt+1),s={hashCode:o,store:t,type:i,subscriptionId:
r,path:u.path,value:e,name:null,refreshTime:null},f(u.name)||(s.name=u.name),n.splice(
0,0,s),s}function ti(t,i,r,e,o,s,h,c,l){var y=w(h,o),v=st(t,i,r,e,o,y,h),a;v.settingIndex===
u?l||(a=ni(t,i,r,e,o,s,y)):(a=t[v.settingIndex],a.value=s);a&&c&&(a.refreshTime=
c);f(o.name)?n.each(s,function(){var n={path:this.Path,name:this.Name};ti(t,i,r,
e,n,this,h,c,!0)}):v.pathWildcardIndex!==u&&(a=t[v.pathWildcardIndex],ht(a)||n.each(
a.value,function(n,t){if(t.Name===o.name)return a.value.splice(n,1,s),!1}))}function ii(
t,i){var l=[],u,e,h,c,r,s,o;if(i)for(i=n.isArray(i)?i:[i],u=0,h=t.settings.length;
u<h;u++){if(r=t.settings[u],f(r.name))for(s=[],e=0,c=i.length;e<c;e++)o=i[e],o.Path===
r.path&&s.push(o);else for(s=null,e=0,c=i.length;e<c;e++)if(o=i[e],o.Path===r.path&&
o.Name===r.name){s=o;break}l.push({setting:r,value:s})}else for(u=0,h=t.settings.
length;u<h;u++)r=t.settings[u],l.push({setting:r,value:{Path:r.path,Name:r.name,
Value:r.value}});return l}function d(n,t,i,r){for(var e=t.store,o=t.type,s=t.subscriptionId,
c=k(e,o,s),f=ii(t,r),l=!!r,u=0,h=f.length;u<h;u++)ti(n,e,o,s,f[u].setting,f[u].value,
c,i,l)}function tt(){return(new Date).getTime()}function ri(n,t,i,r,u,f){var e=k(
n,t,i),o=w(e,{path:r,name:u}),s={hashCode:o,store:n,type:t,subscriptionId:i,path:
r,name:u,value:f};h.push(s)}function ui(n,t){for(var r=ii(n,t),s=vt(n),f,e,c=!!t,
l=n.store,a=n.type,v=n.subscriptionId,i=0;i<r.length;i++)f=r[i].setting,e=r[i].value,
s[i]===u?c||ri(l,a,v,f.path,f.name,e):h[s[i]].value=e;o()}function ci(t,i,r,e,o,
s,h,c,l){var k=w(s,o),p=st(t,i,r,e,o,k,s,!0),b=p.settingIndex!==u?p.settingIndex:
p.pathWildcardIndex,v,d,a,y;if(b===u)return h&&c&&ni(t,i,r,e,o,rt,k),!1;if((a=t[
b],h&&(t.splice(b,1),t.splice(0,0,a)),a.value===rt)||h&&c&&(!a.refreshTime||a.refreshTime<
kt))return!1;if(n.isArray(a.value)){for(v=0,d=a.value.length;v<d;v++)if(y=a.value[
v],(f(o.name)||y.Name===o.name)&&(l.push(y),y.Name===o.name))break}else a.value&&
typeof a.value=="object"&&l.push(a.value);return!0}function g(n,t,i,r,u){for(var
o=t.store,s=t.type,h=t.subscriptionId,a=k(o,s,h),c=[],e,l,f=0;f<t.settings.length;
f++)e=t.settings[f],!ci(n,o,s,h,e,a,i,r,c)&&r&&(l=!0,u&&u.push(e));return l?null:
c}function li(){var i=tt();n.each(c,function(r,u){var f=u.args,s=u.callers;v("updateUserSettings",
f,function(r){d(e,f,r,i);t.Diagnostics.Log.writeEntry("Impl.Configuration","Delayed settings update succeeded for extension '"+
f.store+"'.",t.Diagnostics.LogEntryLevel.verbose);n.each(s,function(){this.promiseProxy.
complete(g(e,this.args))});o()},function(i){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Delayed settings update failed for extension '"+f.store+"': "+i,t.Diagnostics.LogEntryLevel.
error);n.each(s,function(){this.promiseProxy.error(i)})})});c=null}function ai(t,
r){c?i.clearTimeout(wt):c={};wt=i.setTimeout(ft(li),pt);var f=gt(r.store,r.type,
r.subscriptionId);c[f]?n.each(r.settings,function(n,t){for(var r=c[f].args.settings,
e,i=0;i<r.length;i++)if(r[i].path===t.path&&r[i].name===t.name){e=i;break}e!==u?
r.splice(e,1,this):r.push(this)}):c[f]={args:n.extend(!0,{},r),callers:[]};c[f].
callers.push({args:r,promiseProxy:t})}function vi(t,i){var r=i.store,e=i.type,o=
i.subscriptionId,s=k(r,e,o);n.each(i.settings,function(i,h){var y=w(s,h),a=st(t,
r,e,o,h,y,s),c,l,v;if(a.settingIndex!==u&&t.splice(a.settingIndex,1),f(h.name))for(
l=0,v=t.length;l<v;l++)c=t[l],c.path===h.path&&c.name&&t.splice(l,1);else a.pathWildcardIndex!==
u&&(c=t[a.pathWildcardIndex],ht(c)||n.each(c.value,function(n,t){if(t.Name===h.name)
return c.value.splice(n,1),!1}))})}function yi(n,t,i,r,u){for(var o=0,e,s;o<n.length;
)e=n[o],s=e.store===t&&e.type===i&&(e.subscriptionId===r||f(e.subscriptionId)&&f(
r))&&e.path.indexOf(u)===0,s?n.splice(o,1):o++}function pi(t,i){var r=i.store,u=
i.type,f=i.subscriptionId,e=i.pathPrefixes;n.each(e,function(n,i){yi(t,r,u,f,i)}
)}function wi(i){var r="User",u={SettingPrefixCollection:[{Store:dt,Type:r,PathPrefix:
""}]};return new t.Promise(function(t,f){v("getUserSettingsByPrefix",u,function(
i){h=[];n.each(i,function(t,i){var u=i.Store,f=null;n.each(i.Settings,function(n,
t){ri(u,r,f,t.Path,t.Name,t)})});o();t()},function(n){f(n)},i||ei)})}function fi(
){s={version:yt,lruSettingsCache:[],loadedSettingsCache:[]};o()}var a=t.Communication.
Receiver.getReceiver(),yt=2,ei=1e4,s,nt,it,e,b,h,pt,c,wt,bt=500,rt=1,ut,kt,dt="Global",
l;l=t.Namespace.define("Impl.Configuration",{getUserSettings:function(i,r,u,f){if(
p(i,r)){var h,c,s=r,l;if(y(i,t.Communication.Receiver.getReceiver()),u){if(h=g(e,
r,!0,f,c=[]),o(),h||!f){i.complete(h||[]);return}s=n.extend({},r,{settings:c})}l=
tt();v("getUserSettings",s,function(n){u&&d(e,s,l,n);t.Diagnostics.Log.writeEntry(
"Impl.Configuration","Settings get succeeded for extension '"+s.store+"'.",t.Diagnostics.
LogEntryLevel.verbose);u&&(n=g(e,r),o());i.complete(n)},function(n){t.Diagnostics.
Log.writeEntry("Impl.Configuration","Settings get failed for extension '"+r.store+
"': "+n,t.Diagnostics.LogEntryLevel.error);i.error(n)})}},updateUserSettings:function(
n,i,r){if(p(n,i,!0)){var u;y(n,t.Communication.Receiver.getReceiver());r&&(u=tt(
),d(e,i,u),o());v("updateUserSettings",i,function(f){r&&(d(e,i,u,f),o());t.Diagnostics.
Log.writeEntry("Impl.Configuration","Settings update succeeded for extension '"+
i.store+"'.",t.Diagnostics.LogEntryLevel.verbose);n.complete(f||[])},function(r)
{t.Diagnostics.Log.writeEntry("Impl.Configuration","Settings update failed for extension '"+
i.store+"': "+r,t.Diagnostics.LogEntryLevel.error);n.error(r)})}},deleteUserSettings:
function(n,i){p(n,i)&&(y(n,t.Communication.Receiver.getReceiver()),vi(e,i),o(),v(
"deleteUserSettings",i,function(r){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Settings delete succeeded for extension '"+i.store+"'.",t.Diagnostics.LogEntryLevel.
verbose);n.complete(r||[])},function(r){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Settings delete failed for extension '"+i.store+"': "+r,t.Diagnostics.LogEntryLevel.
error);n.error(r)}))},deleteUserSettingsByPrefix:function(i,r){if(si(i,r)){y(i,t.
Communication.Receiver.getReceiver());pi(e,r);o();var u={SettingPrefixCollection:
n.map(r.pathPrefixes,function(n){return{Store:r.store,Type:r.type,SubscriptionId:
r.subscriptionId,PathPrefix:n}})};v("deleteUserSettingsByPrefix",u,function(u){t.
Diagnostics.Log.writeEntry("Impl.Configuration","Settings delete succeeded for extension '"+
r.store+"'.",t.Diagnostics.LogEntryLevel.verbose);var f=n.map(u,function(n){return n.
Settings});i.complete(f)},function(n){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Settings delete failed for extension '"+r.store+"': "+n,t.Diagnostics.LogEntryLevel.
error);i.error(n)})}},getLoadedUserSettings:function(n,t){if(p(n,t)&&et(n,t)){for(
var r=vt(t),f=[],i=0;i<t.settings.length;i++)r[i]!==u&&f.push(h[r[i]].value);n.complete(
f)}},updateLoadedUserSettings:function(n,i,r){p(n,i,!0)&&et(n,i)&&(y(n,t.Communication.
Receiver.getReceiver()),ui(i),r?ai(n,i):v("updateUserSettings",i,function(r){ui(
i,r);t.Diagnostics.Log.writeEntry("Impl.Configuration","Settings update succeeded for extension '"+
i.store+"'.",t.Diagnostics.LogEntryLevel.verbose);n.complete(r||[])},function(r)
{t.Diagnostics.Log.writeEntry("Impl.Configuration","Settings update failed for extension '"+
i.store+"': "+r,t.Diagnostics.LogEntryLevel.error);n.error(r)}))},deleteLoadedUserSettings:
function(i,r){if(p(i,r)&&et(i,r)){y(i,t.Communication.Receiver.getReceiver());var
u=vt(r).sort(function(n,t){return n>t?-1:1});n.each(u,function(n,t){h.splice(t,1)}
);o();v("deleteUserSettings",r,function(n){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Settings delete succeeded for extension '"+r.store+"'.",t.Diagnostics.LogEntryLevel.
verbose);i.complete(n||[])},function(n){t.Diagnostics.Log.writeEntry("Impl.Configuration",
"Settings delete failed for extension '"+r.store+"': "+n,t.Diagnostics.LogEntryLevel.
error);i.error(n)})}},_getViewSettings:function(n){return g(b,n,!0)},_updateViewSettings:
function(n){return d(b,n),g(b,n)},initialize:function(n,i,u){var f;if(y(n,t.Communication.
Receiver.getReceiver()),pt=i||5e3,it=r.Services.get("configurationService"),!it)
throw"configurationService not found";f=t.Environment.getUserEmailAddress();f&&(
f="Impl.Configuration."+f,nt=t.Storage.getLocalCache(f),s=nt.getEntry());s&&s.version===
yt||fi();e=s.lruSettingsCache;b=[];h=s.loadedSettingsCache;c=null;ut={};kt=tt();
wi(u).then(function(){t.Diagnostics.Log.writeEntry("Impl.Configuration","Global settings cache has been refreshed from settings service",
t.Diagnostics.LogEntryLevel.information);n.complete()},function(i){t.Diagnostics.
Log.writeEntry("Impl.Configuration","Could not get user settings to refresh the cache. Will use stale data: "+
i,t.Diagnostics.LogEntryLevel.error);n.error(i)})},_clearSettingsCache:function(
){fi();e=s.lruSettingsCache;b=[];h=s.loadedSettingsCache}});a.addMethod("Impl.Configuration.getUserSettings",
l.getUserSettings);a.addMethod("Impl.Configuration.updateUserSettings",l.updateUserSettings);
a.addMethod("Impl.Configuration.deleteUserSettings",l.deleteUserSettings);a.addMethod(
"Impl.Configuration.deleteUserSettingsByPrefix",l.deleteUserSettingsByPrefix);a.
addMethod("Impl.Configuration.getLoadedUserSettings",l.getLoadedUserSettings);a.
addMethod("Impl.Configuration.updateLoadedUserSettings",l.updateLoadedUserSettings);
a.addMethod("Impl.Configuration.deleteLoadedUserSettings",l.deleteLoadedUserSettings);
a.addMethod("Impl.Configuration.initialize",l.initialize)}(jQuery,Shell,this,Impl),
function(n,t,i,r){"use strict";function y(n,r){var f=n.subViewName,u;switch(r.path)
{case i.Configuration.ViewSettings.Path.perType:u=o;break;case i.Configuration.ViewSettings.
Path.perInstance:u=h}return f&&(u=[u,"subview",f].join("/")),t.extend({},r,{path:
u})}function c(n,t){var i=n.complete,r=n.error,u=function(){t.releaseArgument(i);
t.releaseArgument(r)};t.holdArgument(n);n.complete=function(){i.apply(this,arguments);
u()};n.error=function(){r.apply(this,arguments);u()}}function l(n,r){n=n||{};var
f="Global",e=n.subscriptionId?"Subscription":"User",o=n.subscriptionId,u={perType:
[],perInstance:[]};return t.each(r,function(t,r){var f=r.path;r=y(n,r);switch(f)
{case i.Configuration.ViewSettings.Path.perType:u.perType.push(r);break;case i.Configuration.
ViewSettings.Path.perInstance:u.perInstance.push(r)}}),t.each(["perType","perInstance"],
function(n,t){u[t]=u[t].length>0?i.Configuration.createFullUserSettings(f,e,o,u[
t]):null}),u}function e(i){var r=i?t.isArray(i)?i:[i]:null;return r&&(r=t.map(r,
function(i){return t.extend({},i,{Value:n.JSON.parse(i.Value)})})),r}function a(
n,t){return t===i.Configuration.ViewSettings.Path.perType||t===i.Configuration.ViewSettings.
Path.perInstance?!0:(n.error("'path' must be one of 'perType' or 'perInstance' from Shell.Configuration.ViewSettings.Path"),
!1)}var f=i.Communication.Receiver.getReceiver(),v="perType",s,o,h,u;u=i.Namespace.
define("Impl.Configuration.ViewSettings",{getViewSettings:function(n,t,u){for(var
o,f=[],s=0;s<u.length;s++)if(!a(n,u[s].path))return;o=l(t,u);c(n,i.Communication.
Receiver.getReceiver());o.perInstance&&(f=f.concat(r.Configuration._getViewSettings(
o.perInstance)));o.perType?r.Configuration.getLoadedUserSettings({complete:function(
t){f=f.concat(t);n.complete(e(f))},error:function(t){n.error(t)}},o.perType):n.complete(
e(f))},updateViewSetting:function(n,t,u,f,o){if(a(n,u)){var s=l(t,[{path:u,name:
f,value:JSON.stringify(o)}]);c(n,i.Communication.Receiver.getReceiver());s.perInstance?
n.complete(e(r.Configuration._updateViewSettings(s.perInstance))):s.perType?r.Configuration.
updateLoadedUserSettings({complete:function(t){n.complete(e(t))},error:function(
t){n.error(t)}},s.perType,!0):n.complete([])}},setCurrentExtension:function(n){s=
n.settingsStore||n.name},setBuiltInPaths:function(n,t){var i=["extension",s,"type",
n];o=[v].concat(i).join("/");h=t?["perInstance"].concat(i.concat(["instance",t])).
join("/"):o}});f.addMethod("Impl.Configuration.ViewSettings.getViewSettings",u.getViewSettings);
f.addMethod("Impl.Configuration.ViewSettings.updateViewSetting",u.updateViewSetting);
f.addMethod("Impl.Configuration.ViewSettings.setCurrentExtension",u.setCurrentExtension);
f.addMethod("Impl.Configuration.ViewSettings.setBuiltInPaths",u.setBuiltInPaths)}
(this,jQuery,Shell,this.Impl),function(n,t,i){"use strict";var r=i.prototype;n.widget(
"fxs.fxsModalPresenter",i,{options:{shieldOpenDurationMs:500,shieldCloseDurationMs:
250},_dialogs:null,_shield:null,_presenter:null,_resizeHandler:null,_create:function(
){this._dialogs=[];this.element.addClass("fxs-modalpresenter");this._createShieldAndPresenter(
);r._create.call(this)},_destroy:function(){this._resizeHandler!==null&&(n(t).off(
"resize",this._resizeHandler),this._resizeHandler=null);this.element.removeClass(
"fxs-modalpresenter").empty();this._super()},open:function(n){for(var i=this,u,f,
r=0;r<this._dialogs.length;r++)if(this._dialogs[r]===n)throw"dialog is already open";
n.on("close",function(){i._close(n)});this._dialogs.push(n);u=function(){i._dialogs.
length>0&&i._dialogs[i._dialogs.length-1]===n&&(i._presenter.append(n).show().css(
"z-index",t.fx.utilities.getNextZIndex(i._presenter.css("z-index"))),i._resizeHandler(
),i._callWidgetMethod(n,"open"))};this._dialogs.length===1?(this._shield.css("z-index",
t.fx.utilities.getNextZIndex(this._shield.css("z-index"))).show().animate({opacity:
.75},this.options.shieldOpenDurationMs),u()):(f=this._dialogs[this._dialogs.length-
2],f.hide(),u())},_close:function(n){var r=this,i,t;if(t=this._dialogs.indexOf(n),
t===-1)throw"could not find dialog to close";this._dialogs.splice(t,1);n.remove(
);this._dialogs.length===0?(this._shield.animate({opacity:0},this.options.shieldCloseDurationMs,
function(){r._shield.hide()}),this._presenter.hide()):(i=this._dialogs[this._dialogs.
length-1],i.show(),this._resizeHandler())},_createShieldAndPresenter:function(){
var i=this,r=n(t);this._shield=n("<div />").addClass("fxs-modalpresenter-shield").
appendTo(this.element);this._presenter=n("<div />").addClass("fxs-modalpresenter-presenter").
appendTo(this.element);r.on("resize",this._resizeHandler=function(){var n=i._dialogs[
i._dialogs.length-1],t;n&&(t=i._callWidgetMethod(n,"getCssPositioning"),i._presenter.
css(t))})},_callWidgetMethod:function(n,t){var i;return n.hasClass("fxs-wizard")?
i=n.fxsWizard(t):n.hasClass("fxs-dialog")?i=n.fxsDialog(t):n.hasClass("fxs-confirmation")&&
(i=n.fxsConfirmation(t)),i}})}(jQuery,this,jQuery.Widget),function(n,t){"use strict";
var i,r=500,u=250;t.Namespace.define("Impl.UI.Dialogs.ModalPresenter",{initialize:
function(t){i=n("<div />").fxsModalPresenter({shieldOpenDurationMs:r,shieldCloseDurationMs:
u}).appendTo(t)},open:function(n){i.fxsModalPresenter("open",n)},_setAnimationDurations:
function(n,t){r=n;u=t}})}(jQuery,Shell),function(n,t,i){"use strict";var r=i.prototype;
n.widget("fxs.fxsKeyboardModal",i,{options:{escapeKeyHandler:n.noop},_keydownHandler:
null,_accessibilityKeysHandler:null,_savedElementForFocus:null,_create:function(
){this._setupTrapFocus();this._setupAccessibilityKeys();this._focusFirstElement(
);r._create.call(this)},_destroy:function(){this._removeTrapFocus();this._removeAccessibilityKeys(
);this._restoreFocusElement();this._super()},_setupAccessibilityKeys:function(){
var i=this;this._removeAccessibilityKeys();n(t).on("keydown",this._accessibilityKeysHandler=
function(t){t.which===n.ui.keyCode.ESCAPE&&(i.options.escapeKeyHandler&&i.options.
escapeKeyHandler(t),t.preventDefault())})},_removeAccessibilityKeys:function(){this.
_accessibilityKeysHandler&&(n(t).off("keydown",this._accessibilityKeysHandler),this.
_accessibilityKeysHandler=null)},_setupTrapFocus:function(){var i=this,t=this.widget(
);this._removeTrapFocus();t.on("keydown",this._keydownHandler=function(r){var u,
f,e;if(r.which===n.ui.keyCode.TAB)if(u=n(i._getAllTabbableElements(t)),f=u.filter(
":first"),e=u.filter(":last"),r.target!==e[0]||r.shiftKey){if(r.target===f[0]&&r.
shiftKey)return e.focus(),!1}else return f.focus(),!1})},_removeTrapFocus:function(
){this._keydownHandler&&(this.widget().off("keydown",this._keydownHandler),this.
_keydownHandler=null)},_focusFirstElement:function(){this._savedElementForFocus=
t.document.activeElement;this.widget().find(":tabbable").first().focus()},_restoreFocusElement:
function(){var r=this.widget(),i=t.document.activeElement,u=this._savedElementForFocus;
this._savedElementForFocus=null;u&&(i===null||t.document.body===i||r[0]===i||n.contains(
r[0],i))&&this._delayedExecute(function(){u.focus()},200)},_delayedExecute:function(
n,i){t.setTimeout(function(){n()},i)},_getAllTabbableElements:function(n){var t=
n.find("iframe:visible,:tabbable").toArray();return t.stableSort?t.stableSort(function(
n,t){return n.tabIndex>t.tabIndex?t.tabIndex===0?-1:1:n.tabIndex<t.tabIndex?n.tabIndex===
0?1:-1:0}):t}})}(jQuery,this,jQuery.Widget),function(n,t,i){"use strict";var r=i.
prototype;n.widget("fxs.fxsModalBase",i,{options:{closing:n.noop,close:n.noop},_create:
function(){this.widgetEventPrefix="";this.element.attr("role","dialog");r._create.
call(this)},_destroy:function(){this.element.removeAttr("role");this._super()},open:
function(){var n=this;this.element.fxsKeyboardModal({escapeKeyHandler:function()
{n.close()}})},close:function(){return this.options.closing&&this.options.closing(
)===!1?!1:(this._trigger("close"),this.element.is(":data(fxs-fxsKeyboardModal)")&&
this.element.fxsKeyboardModal("destroy"),!0)},getCssPositioning:function(){var i=
n(t);return{left:Math.max(0,Math.round((i.width()-this.element.outerWidth())/2)),
top:Math.max(0,Math.round((i.height()-this.element.outerHeight())/2))}}})}(jQuery,
this,jQuery.Widget),function(n,t){"use strict";var i=t.prototype,r=["height","marginTop",
"marginBottom","paddingTop","paddingBottom"];n.widgetReference("fxs.fxsToastBox",
t,{options:{data:null,openDuration:200,closeDuration:100,easing:"swing",direction:
"top"},_references:{data:!0},_height:0,_outerHeight:0,_isOpened:!1,_direction:"top",
_create:function(){this._setOption("data",this.options.data||new n.fxs.fxsToastBox.
ToastBox);this.element.addClass("fxs-toastbox").html(this.options.data.content());
this.options.direction==="bottom"?(this.element.addClass("fxs-toastbox-direction-bottom"),
this._direction="bottom"):this.element.addClass("fxs-toastbox-direction-top");this.
refresh();this.element[0].style.height="0px";i._create.call(this)},_destroy:function(
){this.element.removeClass("fxs-toastbox fxs-toastbox-direction-bottom fxs-toastbox-direction-top");
this._unsubscribe();this._super()},open:function(){var n={height:this._height};return n[
this._direction]="-"+this._outerHeight,this._doAction(!0,this.options.openDuration,
function(){return this.options.data.open()},n)},close:function(){var n={height:0};
return n[this._direction]="0",this._doAction(!1,this.options.closeDuration,function(
){return!this.options.data.open()},n)},refresh:function(){return(this._conserveHeight(
function(){this._height=this.element.height();this._outerHeight=this.element.outerHeight(
)}),this._isOpened)?this.open():n.Deferred().resolve().promise()},_conserveHeight:
function(n){var t=this.element[0].style.height;t&&this.element.height("");n.call(
this);t&&this.element.height(t)},_genFx:function(t){var i={};return n.each(r,function(
){i[this]=t}),i},_doAction:function(t,i,r,u){var s=this,f,e,o;return this.options.
data.lock()?(this.options.data.open()!==this._isOpened&&this.options.data.open(this.
_isOpened),n.Deferred().reject().promise()):(o=this.element.is(":hidden"),e=t&&o?
this._genFx("show"):t||o?{}:this._genFx("hide"),n.extend(e,u),f=n.Deferred(),this.
_isOpened=t,this.element.stop(!0,!0).animate(e,i,this.options.easing,function(){
s.element.height(u.height);f.resolve()}),this.options.data.open(this._isOpened),
f.promise())},_unsubscribe:function(n){if(n=n||this.element.__fxsToastBox_subscriptions,
n)while(n.length)n.splice(0,1)[0].dispose()},_subscribe:function(n){var t=this,i=
this.element.__fxsToastBox_subscriptions||[];this._unsubscribe(i);i.push(n.content.
subscribe(function(){t.element.html(n.content());t.refresh()}));i.push(n.open.subscribe(
function(n){n&&!t._isOpened?t.open():!n&&t._isOpened&&t.close()}));this.element.
__fxsToastBox_subscriptions=i},_setOption:function(n,t){var r=i._setOption.apply(
this,arguments);return n==="data"&&this._subscribe(t),r}});n.fxs.fxsToastBox.ToastBox=
function(){this.content=ko.observable("");this.lock=ko.observable(!1);this.open=
ko.observable(!1)}}(jQuery,jQuery.Widget),function(n,t,i,r,u){"use strict";var f=
t.prototype,o=0,s="__fxs-confirmation",h=function(){return s+o++},c=".fxs-drawer",
e="fxs-confirmation-summary",l="<div class='fxs-confirmation-toastbox'><\/div>",
a="<div class='fxs-confirmation-actions'><ul class='fxs-confirmation-buttons' data-bind='foreach: data.actions'><li><button class='fxs-confirmation-button' data-bind='activateWidget: \"fxButton\", fxcontrol-options: jQuery.extend({}, $data, { selector: \"span.sprite\" })'><span class='sprite'><\/span><span class='fxs-confirmation-button-text' data-bind='text: text'><\/span><\/button><\/li><\/ul><\/div><div class='"+
e+"' data-bind='safeMarkup: data.title' aria-live='assertive'><\/div><div class='fxs-confirmation-details'><!-- ko if: data.detailsText --><!-- ko ifnot: data.detailsUseHtml --><div data-bind='safeMarkup: data.detailsText' class='fxs-confirmation-details-text'><\/div><!-- /ko --><!-- ko if: data.detailsUseHtml --><div data-bind='html: data.detailsText' class='fxs-confirmation-details-text'><\/div><!-- /ko --><!-- /ko --><!-- ko template: { 'if': data.detailsUrl, afterRender: func._iFrameRender } --><div class='fxs-confirmation-details-iframe'><iframe frameborder='0' data-bind='attr: { src: data.detailsUrl }'><\/iframe><\/div><!-- /ko --><\/div>";
n.widget("fxs.fxsConfirmation",t,{options:{title:"",detailsText:"",detailsUrl:"",
actions:[],focus:-1,openingDurationMs:200,closingDurationMs:100,detailsUseHtml:!1},
_viewModel:null,_subscriptions:null,_drawerElement:null,_toastBoxViewModel:null,
_toastBoxWidget:null,_confirmationSummaryElement:null,_create:function(){var t=h(
);this._setViewModel(new n.fxs.fxsConfirmation.Confirmation(new n.fxs.fxsToastBox.
ToastBox));this._viewModel.toastBox.content(a);this.element.addClass("fxs-confirmation").
html(l);this._toastBoxWidget=this.element.find(".fxs-confirmation-toastbox").fxsToastBox(
{direction:"top",data:this._viewModel.toastBox});this._viewModel.toastBox.open(!1);
this._confirmationSummaryElement=this._toastBoxWidget.find("."+e).attr("id",t);this.
_setOption("title",this.options.title);this._setOption("detailsText",this.options.
detailsText);this._setOption("detailsUrl",this.options.detailsUrl);this._setOption(
"actions",this.options.actions);this._setOption("focus",this.options.focus);this.
_setOption("openingDurationMs",this.options.openingDurationMs);this._setOption("closingDurationMs",
this.options.closingDurationMs);this._setOption("detailsUseHtml",this.options.detailsUseHtml);
i.applyBindings({data:this._viewModel,func:this},this.element[0]);f._create.call(
this);this.element.attr({role:"alertdialog","aria-live":"assertive","aria-labelledby":
t,"aria-atomic":"true"})},_destroy:function(){this.element.empty().removeClass("fxs-confirmation fxs-confirmation-withdetails").
removeAttr("role aria-live aria-labelledby aria-atomic");this._unsubscribe();this.
_super()},open:function(){var n,t=this._viewModel.focus(),i=t===-1?":last":":eq("+
parseInt(t,10)+")";return this._toastBoxWidget.fxsToastBox("refresh"),n=this._toastBoxWidget.
fxsToastBox("open"),f.open.call(this),this.element.find(".fxs-confirmation-buttons li"+
i+" button").focus(),u.forceRead(this.element[0]),n},close:function(){var n=this;
return this._toastBoxWidget.fxsToastBox("close").done(function(){f.close.call(n)}
)},getCssPositioning:function(){var n=this._getDrawerElement(),t=n.position(),i=
n.css("margin-top"),r=n.css("margin-left"),u=i==="auto"?0:parseInt(i,10),f=r==="auto"?
0:parseInt(r,10);return{top:t.top+u,left:t.left+f}},getViewModel:function(){return this.
_viewModel},_getDrawerElement:function(){if(!this._drawerElement&&(this._drawerElement=
n(c),this._drawerElement.length===0))throw"confirmation box could not find drawer";
return this._drawerElement},_setViewModel:function(n){this._viewModel=n;this._subscribe(
this._viewModel)},_iFrameRender:function(t){var i=n(t[0]).find("iframe");i[0].allowTransparency=
!0;i.on("load",function(){n(this).addClass("fxs-confirmation-details-iframe-loaded")}
)},_unsubscribe:function(){if(this._subscriptions)while(this._subscriptions.length)
this._subscriptions.splice(0,1)[0].dispose()},_subscribe:function(n){var t=this,
i=function(){t._viewModel.detailsText()||t._viewModel.detailsUrl()?t.element.addClass(
"fxs-confirmation-withdetails"):t.element.removeClass("fxs-confirmation-withdetails")}
;this._subscriptions=this._subscriptions||[];this._unsubscribe();this._subscriptions.
push(n.detailsText.subscribe(i));n.detailsText.notifySubscribers(n.detailsText());
this._subscriptions.push(n.detailsUrl.subscribe(i));n.detailsUrl.notifySubscribers(
n.detailsUrl());this._subscriptions.push(n.detailsUseHtml.subscribe(i));n.detailsUseHtml.
notifySubscribers(n.detailsUseHtml());this._subscriptions.push(n.title.subscribe(
function(n){t.element.find("."+e).attr("title",r.getText(n))}));n.title.notifySubscribers(
n.title())},_setOption:function(n,t){var i=f._setOption.apply(this,arguments);switch(
n){case"detailsText":case"detailsUrl":case"detailsUseHtml":this._viewModel[n](t);
this._toastBoxWidget.fxsToastBox("refresh");break;case"title":case"actions":case"focus":
this._viewModel[n](t);break;case"openingDurationMs":this.element.find(".fxs-confirmation-toastbox").
fxsToastBox("option","openDuration",t);break;case"closingDurationMs":this.element.
find(".fxs-confirmation-toastbox").fxsToastBox("option","closeDuration",t)}return i}
});n.fxs.fxsConfirmation.Confirmation=function(n){this.toastBox=n;this.title=i.observable(
"");this.detailsText=i.observable("");this.detailsUrl=i.observable("");this.actions=
i.observableArray();this.focus=i.observable(-1);this.detailsUseHtml=i.observable(
!1)}}(jQuery,jQuery.fxs.fxsModalBase,ko,Shell.Utilities.SafeMarkup,this.fx.utilities),
function(n,t){"use strict";var r={},u=t.Communication.Receiver.getReceiver(),f=200,
e=100,i=t.Namespace.define("Impl.UI.Notifications.Confirmation",{_drawerElement:
null,_getDrawerWidth:function(){if(!i._drawerElement&&(i._drawerElement=n(".fxs-drawer"),
!i._drawerElement))throw"could not find drawer";return i._drawerElement.width()}
,_addConfirmation:function(n){n.width(i._getDrawerWidth());Impl.UI.Dialogs.ModalPresenter.
open(n)},_removeConfirmation:function(n){n.fxsConfirmation("close")},_sync:function(
u,o,s){var l=this,c,a,h,v;if(u){if(!r[u])throw"confirmation handle is invalid";h=
r[u].widget;i._holdWidgetOptions.call(this,h,o);h.fxsConfirmation(o)}else v=n.extend(
{},o,{openingDurationMs:f,closingDurationMs:e}),h=n("<div />").fxsConfirmation(v),
u=t.Utilities.newGuid(),r[u]={widget:h},i._holdWidgetOptions.call(this,h,o),i._addConfirmation(
h),c=r[u].widget.data("fxs-fxsConfirmation"),a=c.destroy,this.receiver.holdArgument(
s),c.destroy=function(){s();l.receiver.releaseArgument(r[u].widget.fxsConfirmation(
"option","actions"));l.receiver.releaseArgument(s);a.apply(this,arguments);delete
r[u]};return u},_holdWidgetOptions:function(n,t){t.actions&&(this.receiver.releaseArgument(
n.fxsConfirmation("option","actions")),this.receiver.holdArgument(t.actions))},_remove:
function(n){var t=r[n];t&&i._removeConfirmation(t.widget)},_clear:function(){n.each(
r,function(){i._removeConfirmation(this.widget)})},_setAnimationDurations:function(
n,t){f=n;e=t}});u.addMethod("Impl.UI.Notifications.Confirmation.sync",i._sync);u.
addMethod("Impl.UI.Notifications.Confirmation.remove",i._remove)}(jQuery,Shell),
function(n,t,i,r){"use strict";function v(i,r){s||(s=n.setTimeout(p,0));r&&t.inArray(
i,h)<0&&h.push(i)}function p(){t.each(h,function(n,t){var r=e.getDataSetErrors(t),
i=o.hasOwnProperty(t)&&u.getDataSetErrors(t);i?i===f?u.createDataLoadFailureNotification(
):r&&e.showingPartialErrorsNotification()||u.createPartialDataLoadNotification():
i&&u.showingPartialErrorsNotification()||e.createPartialDataLoadNotification()});
h.splice(0,h.length);s=null;t(Impl.UI.Notifications.DataLoad).triggerHandler("dataLoadHandlingComplete")}
function y(){u=new a(c.viewDataLoadWarnings,c.viewDataLoadError);e=new a(c.portalDataLoadWarnings);
o={}}function w(){u.destroy();e.destroy();s&&(n.clearTimeout(s),s=null)}function b(
n,t,i){var r=t;e.handleDataLoadSuccess(r,i,!1);n.complete()}function k(n,t,i){var
r=t;u.handleDataLoadSuccess(r,i);o[r]=!0;n.complete()}function d(n,t,i){var r=t;
u.handleDataLoadFailure(r,i);o[r]=!0;n.complete()}function g(){u.removeNotifications(
);u.removeErrors(o);o={}}var c=r.getStrings("Impl.UI.Notifications.DataLoad"),l=
i.Communication.Receiver.getReceiver(),f=42,u,e,o,s,h=[],a=i.Class.define(function(
n,t){this._warningString=n;this._errorString=t;this._partialDataLoadNotification=
null;this._dataLoadFailureNotification=null;this._errorsByDataSet={}},{destroy:function(
){this.removeNotifications()},createPartialDataLoadNotification:function(){if(this.
_partialDataLoadNotification)this._updatePartialDataLoadNotificationDetails();else{
var n=this._partialDataLoadNotification=new i.UI.Notifications.Notification(this.
_warningString,i.UI.Notifications.Severity.warning),t=this;n.setActions([new i.UI.
Notifications.Buttons.ok(function(){t._removePartialDataLoadNotification()})]);this.
_updatePartialDataLoadNotificationDetails();i.UI.Notifications.add(n)}},createDataLoadFailureNotification:
function(){if(!this._dataLoadFailureNotification){var n=this._dataLoadFailureNotification=
new i.UI.Notifications.Notification(this._errorString,i.UI.Notifications.Severity.
error),t=this;n.setActions([new i.UI.Notifications.Buttons.ok(function(){t._removeDataLoadFailureNotification(
)})]);i.UI.Notifications.add(n)}},handleDataLoadSuccess:function(n,i){var r=this.
_errorsByDataSet[n],u,f,e,o;t.isArray(i)&&i.length>0?(u=t.map(i,function(n){return n.
errorString}).sort(),r&&(f=r.length===u.length&&t.grep(u,function(n){return t.inArray(
n,r)<0}).length===0),f||(this._errorsByDataSet[n]=u,this._partialDataLoadNotification?
this._updatePartialDataLoadNotificationDetails():(e=!r||t.grep(u,function(n){return t.
inArray(n,r)<0}).length>0,e&&(o=!0)))):r&&(delete this._errorsByDataSet[n],this.
_updateOrRemovePartialDataLoadNotification());this._updateOrRemoveDataLoadFailureNotification(
);v(n,o)},handleDataLoadFailure:function(n,t){var i;t&&(this._errorsByDataSet[n]!==
f&&(i=!0),this._errorsByDataSet[n]=f,this._updateOrRemovePartialDataLoadNotification(
));v(n,i)},removeNotifications:function(){this._partialDataLoadNotification&&this.
_removePartialDataLoadNotification();this._dataLoadFailureNotification&&this._removeDataLoadFailureNotification(
)},removeErrors:function(n){var i,r=this;t.each(n,function(n){delete r._errorsByDataSet[
n];i=!0});i&&(this._updateOrRemovePartialDataLoadNotification(),this._updateOrRemoveDataLoadFailureNotification(
))},_updateOrRemovePartialDataLoadNotification:function(){var n;this._partialDataLoadNotification&&
(t.each(this._errorsByDataSet,function(t,i){if(i!==f)return n=!0,!1}),n?this._updatePartialDataLoadNotificationDetails(
):this._removePartialDataLoadNotification())},_updateOrRemoveDataLoadFailureNotification:
function(){var n;this._dataLoadFailureNotification&&(t.each(this._errorsByDataSet,
function(t,i){if(i===f)return n=!0,!1}),n||this._removeDataLoadFailureNotification(
))},getDataSetErrors:function(n){return this._errorsByDataSet[n]},showingPartialErrorsNotification:
function(){return!!this._partialDataLoadNotification},_updatePartialDataLoadNotificationDetails:
function(){var n;t.each(this._errorsByDataSet,function(t,i){i!==f&&(n=(n?[n]:[])
.concat(i).join("%%%"))});this._partialDataLoadNotification.setDetailsText(n||"")}
,_removePartialDataLoadNotification:function(){i.UI.Notifications.remove(this._partialDataLoadNotification);
this._partialDataLoadNotification=null},_removeDataLoadFailureNotification:function(
){i.UI.Notifications.remove(this._dataLoadFailureNotification);this._dataLoadFailureNotification=
null}});i.Namespace.define("Impl.UI.Notifications.DataLoad",{initialize:y,destroy:
w,onNavigateAway:g});l.addMethod("Impl.UI.Notifications.DataLoad.handleExtensionDataLoadSuccess",
b);l.addMethod("Impl.UI.Notifications.DataLoad.handleViewDataLoadSuccess",k);l.addMethod(
"Impl.UI.Notifications.DataLoad.handleViewDataLoadFailure",d);y()}(this,jQuery,Shell,
this.fx.resources),function(n,t){"use strict";var i={},r=n.Callbacks(),f=t.Communication.
Receiver.getReceiver(),u=t.Namespace.define("Impl.UI.Notifications.Notification",
{addListener:function(n){r.add(n)},removeListener:function(n){r.remove(n)},_sync:
function(f,e,o){var h=f===null,c=this,s,l;return f=f||t.Utilities.newGuid(),i[f]=
i[f]||{widget:n("<div />").fxsNotification(),status:e.status},h&&r.fire("ADD",i[
f].widget,i[f].status),u._setWidgetOptions.call(this,i[f].widget,e),h&&(s=i[f].widget.
data("fxs-fxsNotification"),l=s.destroy,this.receiver.holdArgument(o),s.destroy=
function(){o();c.receiver.releaseArgument(i[f].widget.fxsNotification("option","actions"));
c.receiver.releaseArgument(o);l.apply(this,arguments);delete i[f]}),f},_setWidgetOptions:
function(n,t){t.actions&&(this.receiver.releaseArgument(n.fxsNotification("option",
"actions")),this.receiver.holdArgument(t.actions));n.fxsNotification(t)},_remove:
function(n){var t=i[n];t&&r.fire("REMOVE",t.widget,t.status)}});f.addMethod("Impl.UI.Notifications.Notification.sync",
u._sync);f.addMethod("Impl.UI.Notifications.Notification.remove",u._remove)}(jQuery,
Shell),function(n,t,i){"use strict";n.widget("fxs.fxsMarkupLinkInjector",{options:
{text:"",click:n.noop},_originalHtml:null,_create:function(){var n=i.Utilities.SafeMarkup.
create(this.options.text);this._originalHtml=this.element.html();this.element.html(
n);this._attachLinkHandler()},_destroy:function(){this.element.html(this._originalHtml).
off(".linkinjector","a");this._super()},_attachLinkHandler:function(){var t=this;
this.element.on("click.linkinjector","a",function(r){var u=n(this),f=u.attr("id").
substring(i.Utilities.SafeMarkup.getLinkIdPrefix().length),e=u.attr("href"),o={id:
f,href:e};r.preventDefault();t._trigger("click",r,o)})},_setOption:function(n,r)
{var f=t._setOption.apply(this,arguments),u;return n==="text"&&(u=i.Utilities.SafeMarkup.
create(r),this.element.html(u)),f}})}(jQuery,jQuery.Widget.prototype,Shell),function(
n,t,i,r,u){"use strict";var o=t.prototype,f="fxs.fxsProgressBox",s=0,h="__fxs-progressbox",
e=function(){return h+s++},c="<div class='fxs-progressbox-indicator'><div class='fxs-progressbox-indicator-status' data-bind='style: { width: data.valuePercentage }'><\/div><\/div><div class='fxs-progressbox-content'><div class='fxs-progressbox-actions'><div class='fxs-progressbox-actions-title'><\/div><ul class='fxs-progressbox-buttons'><li data-bind='visible: (func._hasDetails.call(func, data)) || (data.steps().length > 0 && !data.stepDetailsShowing() && !data.drillDetailsShowing())' class='fxs-progressbox-detailsbutton'><button class='fxs-progressbox-button' data-bind='activateWidget: \"fxButton\", fxcontrol-options: { class_: class_.details, selector: \"span.sprite\" }'><span class='sprite'><\/span><span class='fxs-progressbox-button-text' data-bind='text: text.details'><\/span><\/button><\/li><!-- ko foreach: data.actions --><li class='fxs-progressbox-actionbutton'><button class='fxs-progressbox-button' data-bind='activateWidget: \"fxButton\", fxcontrol-options: jQuery.extend({}, $data, { selector: \"span.sprite\" })'><span class='sprite'><\/span><span class='fxs-progressbox-button-text' data-bind='text: text'><\/span><\/button><\/li><!-- /ko --><\/ul><\/div><div class='fxs-progressbox-summary' aria-live='polite'><div class='fxs-progressbox-status' data-bind='if: class_[data.status()]'><span data-bind='attr: { class: \"sprite \" + class_[data.status()] }'><\/span><\/div><div class='fxs-progressbox-header'><\/div><\/div><div class='fxs-progressbox-details fxs-progressbox-stepdetails'><div class='fxs-progressbox-title'><button class='fxs-progressbox-back'><span class='sprite'><\/span><\/button><div class='fxs-progressbox-header'><\/div><\/div><ul class='fxs-progressbox-steps' aria-live='polite' data-bind='foreach: data.steps'><li data-bind='attr: { \"class\": \"fxs-progressbox-status-\" + status() }'><a class='fxs-progressbox-step' data-bind='attr: { href: $root.func._hasDetails.call($root.func, $data) ? \"#\" : false }'><div class='fxs-progressbox-status' data-bind='if: $root.class_[\"step\" + $root.func._pascalCase(status())]'><span data-bind='attr: { class: \"sprite \" + $root.class_[\"step\" + $root.func._pascalCase(status())] }'><\/span><\/div><span class='fxs-progressbox-steptitle' data-bind='safeMarkup: title, safeMarkup-options: { disableLinks: true }'><\/span><span class='fxs-progressbox-stepdetails'><span data-bind='attr: { class: \"sprite \" + $root.class_.stepDetails }'><\/span><\/span><\/a><\/li><\/ul><\/div><div class='fxs-progressbox-details fxs-progressbox-drilldetails'><div class='fxs-progressbox-title'><button class='fxs-progressbox-back'><span data-bind='attr: { class: \"sprite \" + class_.back }'><\/span><\/button><div class='fxs-progressbox-header' data-bind='text: data.drillDetailsTitle'><\/div><\/div><!-- ko if: data.drillDetailsText --><div data-bind='safeMarkup: data.drillDetailsText' class='fxs-progressbox-details-text'><\/div><!-- /ko --><!-- ko template: { 'if': data.drillDetailsUrl, afterRender: func._iFrameRender } --><div class='fxs-progressbox-details-iframe'><iframe frameborder='0' data-bind='attr: { src: data.drillDetailsUrl }'><\/iframe><\/div><!-- /ko --><\/div><\/div>";
n.widget(f,t,{options:{title:"",status:"",value:0,actions:[],indeterminate:!1,detailsText:
"",detailsUrl:"",class_:i.getClasses(f),text:i.getStrings(f),click:null,dismiss:
null,dismissable:!1},_viewModel:null,_backClickHandler:null,_detailsClickHandler:
null,_stepDetailsClickHandler:null,_subscriptions:null,_create:function(){var t=
this,i=e(),u=e();this._setViewModel(new n.fxs.fxsProgressBox.Progress);this._setOption(
"title",this.options.title);this._setOption("status",this.options.status);this._setOption(
"steps",this.options.steps);this._setOption("actions",this.options.actions);this.
_setOption("indeterminate",this.options.indeterminate);this._setOption("detailsText",
this.options.detailsText);this._setOption("detailsUrl",this.options.detailsUrl);
this._setOption("dismissable",this.options.dismissable);this.element.attr({role:
"progressbar","aria-atomic":!0,"aria-valuemin":0,"aria-valuemax":100,"aria-labelledby":
i,"aria-describedby":u}).addClass("fxs-progressbox").html(c).find(".fxs-progressbox-summary").
attr("id",i).end().find(".fxs-progressbox-details.fxs-progressbox-stepdetails").
attr("id",u).end().find(".fxs-progressbox-back span.sprite").addClass(this.options.
class_.back).end().find(".fxs-progressbox-actions-title").text(this.options.text.
actions).end().on("click","button.fxs-progressbox-back",this._backClickHandler=function(
n){t._viewModel.drillDetailsShowing()?t._viewModel.drillDetailsShowing(!1):t._viewModel.
stepDetailsShowing(!1);n.preventDefault()}).on("click",".fxs-progressbox-detailsbutton button",
this._detailsClickHandler=function(){var n=t._viewModel.detailsText(),i=t._viewModel.
detailsUrl();n||i?t._showDrillDetails(t.options.text.backToOperations,n,i):t._viewModel.
stepDetailsShowing(!0)}).on("click","a.fxs-progressbox-step[href=#]",this._stepDetailsClickHandler=
function(n){var i=r.contextFor(this).$data;t._showDrillDetails(t.options.text.backToSteps,
i.detailsText(),i.detailsUrl());n.preventDefault()});r.applyBindings({data:this.
_viewModel,class_:this.options.class_,text:this.options.text,func:this},this.element[
0]);this._applyLinksToTitle(!0);o._create.call(this)},_destroy:function(){this.element.
empty().removeClass("fxs-progressbox fxs-progressbox-indeterminate fxs-progressbox-hasdetails fxs-progressbox-showstepdetails fxs-progressbox-withactions fxs-progressbox-showdrilldetails").
removeAttr("role aria-atomic aria-valuemin aria-valuemax aria-labelledby aria-describedby aria-valuenow");
this._removeStatusClassName();this._backClickHandler&&(this.element.off("click",
this._backClickHandler),this._backClickHandler=null);this._detailsClickHandler&&
(this.element.off("click",this._detailsClickHandler),this._detailsClickHandler=null);
this._stepDetailsClickHandler&&(this.element.off("click",this._stepDetailsClickHandler),
this._stepDetailsClickHandler=null);this._unsubscribe();this._super()},addStep:function(
t,i){var u=new n.fxs.fxsProgressBox.ProgressStep,f=e();return typeof i!="number"&&
(i=this._viewModel.steps().length),u.id=f,r.mapping.fromJS(t,null,u),this._viewModel.
steps.splice(i,0,u),f},removeStep:function(n){this._viewModel.steps.remove(function(
t){return t.id===n})},removeAllSteps:function(){this._viewModel.steps([])},updateStep:
function(n,t){var i=r.utils.arrayFirst(this._viewModel.steps(),function(t){return t.
id===n});i&&r.mapping.fromJS(t,null,i)},getViewModel:function(){return this._viewModel}
,_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)},_iFrameRender:
function(t){var i=n(t[0]).find("iframe");i[0].allowTransparency=!0;i.on("load",function(
){n(this).addClass("fxs-progressbox-details-iframe-loaded")})},_hasDetails:function(
n){var t=n.detailsText(),i=n.detailsUrl();return t!==null&&t!==""||i!==null&&i!==
""},_showDrillDetails:function(n,t,i){this._viewModel.drillDetailsTitle(n);this.
_viewModel.drillDetailsText(t);this._viewModel.drillDetailsUrl(i);this._viewModel.
drillDetailsShowing(!0)},_removeStatusClassName:function(){this.element.removeClass(
"fxs-progressbox-status-unknown fxs-progressbox-status-active fxs-progressbox-status-error fxs-progressbox-status-success fxs-progressbox-status-warning")}
,_pascalCase:function(n){return n=n||"",n.substr(0,1).toUpperCase()+n.substr(1)}
,_unsubscribe:function(){if(this._subscriptions)while(this._subscriptions.length)
this._subscriptions.splice(0,1)[0].dispose()},_subscribe:function(n){var t=this,
i=function(){var i=t._viewModel.stepDetailsShowing(),r=t._viewModel.drillDetailsShowing(
),n=t._viewModel.steps().length;t.element.toggleClass("fxs-progressbox-withactions",
!!(t._hasDetails(t._viewModel)||t._viewModel.actions().length||n&&!i));t.element.
toggleClass("fxs-progressbox-showstepdetails",!!(i&&n));n||t._viewModel.stepDetailsShowing(
!1);t.element.toggleClass("fxs-progressbox-showdrilldetails",r);t.element.toggleClass(
"fxs-progressbox-hasdetails",!!n)};this._subscriptions=this._subscriptions||[];this.
_unsubscribe();this._subscriptions.push(n.value.subscribe(function(n){n!==null?t.
element.attr("aria-valuenow",n):t.element.removeAttr("aria-valuenow")}));n.value.
notifySubscribers(n.value());this._subscriptions.push(n.status.subscribe(function(
n){var i=t.element.find(".fxs-progressbox-summary, .fxs-progressbox-steps");i.attr(
"aria-live","polite");(n==="warning"||n==="error")&&i.attr("aria-live","assertive");
(n==="warning"||n==="error"||n==="success")&&t._viewModel.value()===null&&t._viewModel.
value(100);t._removeStatusClassName();t.element.addClass("fxs-progressbox-status-"+
n)}));n.status.notifySubscribers(n.status());this._subscriptions.push(n.steps.subscribe(
i));this._subscriptions.push(n.actions.subscribe(i));this._subscriptions.push(n.
detailsText.subscribe(i));this._subscriptions.push(n.detailsUrl.subscribe(i));this.
_subscriptions.push(n.stepDetailsShowing.subscribe(i));this._subscriptions.push(
n.drillDetailsShowing.subscribe(i));this._subscriptions.push(n.title.subscribe(function(
){t._applyLinksToTitle(!1)}));n.steps.notifySubscribers(n.steps());n.actions.notifySubscribers(
n.actions());n.actions.notifySubscribers(n.detailsText());n.actions.notifySubscribers(
n.detailsUrl())},_setOption:function(n,t){var i=o._setOption.apply(this,arguments);
switch(n){case"title":case"status":case"value":case"actions":case"detailsText":case"detailsUrl":
case"dismissable":this._viewModel[n](t);break;case"indeterminate":this._viewModel.
value(t?null:this._viewModel.value())}return i},_applyLinksToTitle:function(t){var
o=this,f,r=this.element.find(".fxs-progressbox-details.fxs-progressbox-stepdetails .fxs-progressbox-header, .fxs-progressbox-summary .fxs-progressbox-header"),
i,e=this._viewModel.title();for(t&&(f=function(n,t){o._trigger("click",n,t)}),r.
attr("title",u.getText(e)),i=0;i<r.length;i++)t?n(r[i]).fxsMarkupLinkInjector({text:
this._viewModel.title(),click:f}):n(r[i]).fxsMarkupLinkInjector("option","text",
e)}});n.fxs.fxsProgressBox.ProgressStatus={unknown:"unknown",active:"active",error:
"error",warning:"warning",success:"success"};n.fxs.fxsProgressBox.ProgressStep=function(
){this.id=null;this.title=r.observable("");this.status=r.observable(n.fxs.fxsProgressBox.
ProgressStatus.unknown).extend({validateEnum:n.fxs.fxsProgressBox.ProgressStatus});
this.detailsText=r.observable("");this.detailsUrl=r.observable("")};n.fxs.fxsProgressBox.
Progress=function(){this.title=r.observable("");this.status=r.observable(n.fxs.fxsProgressBox.
ProgressStatus.unknown).extend({validateEnum:n.fxs.fxsProgressBox.ProgressStatus});
this.value=r.observable(0);this.steps=r.observableArray();this.actions=r.observableArray(
);this.detailsText=r.observable("");this.detailsUrl=r.observable("");this.stepDetailsShowing=
r.observable(!1);this.drillDetailsShowing=r.observable(!1);this.drillDetailsTitle=
r.observable();this.drillDetailsText=r.observable();this.drillDetailsUrl=r.observable(
);this.dismissable=r.observable(!1);this.valuePercentage=r.computed(function(){var
n=this.value();return n===null?null:n+"%"},this)}}(jQuery,jQuery.Widget,this.fx.
resources,ko,Shell.Utilities.SafeMarkup),function(n,t){"use strict";var i={},r=n.
Callbacks(),f=t.Communication.Receiver.getReceiver(),u=t.Namespace.define("Impl.UI.Notifications.Progress",
{addListener:function(n){r.add(n)},removeListener:function(n){r.remove(n)},_sync:
function(f,e,o){var c=f===null,s=this,h,l;return f=f||t.Utilities.newGuid(),i[f]=
i[f]||{widget:n("<div />").fxsProgressBox(),widgetOptions:e.widgetOptions,steps:
e.steps},c&&r.fire("ADD",i[f].widget),u._setWidgetOptions.call(this,i[f].widget,
e.widgetOptions),u._setSteps.call(this,i[f].widget,e.steps),c&&(h=i[f].widget.data(
"fxs-fxsProgressBox"),l=h.destroy,this.receiver.holdArgument(o),h.destroy=function(
){var n=i[f].widget;o();s.receiver.releaseArgument(n.fxsProgressBox("option","actions"));
s.receiver.releaseArgument(n.fxsProgressBox("option","click"));s.receiver.releaseArgument(
n.fxsProgressBox("option","dismiss"));s.receiver.releaseArgument(o);l.apply(this,
arguments);delete i[f]}),f},_setWidgetOptions:function(n,t){t.actions&&(this.receiver.
releaseArgument(n.fxsProgressBox("option","actions")),this.receiver.holdArgument(
t.actions));t.click&&(this.receiver.releaseArgument(n.fxsProgressBox("option","click")),
this.receiver.holdArgument(t.click));t.dismiss&&(this.receiver.releaseArgument(n.
fxsProgressBox("option","dismiss")),this.receiver.holdArgument(t.dismiss));n.fxsProgressBox(
t)},_setSteps:function(n,t){var i=n.data("steps")||[],r=[];t=t||[];t.forEach(function(
t){for(var u,f=i.length;f--;)if(t.code===i[f].code){u=i[f].handle;i.splice(f,1);
break}u?(n.fxsProgressBox("updateStep",u,t),r.push({code:t.code,handle:u})):r.push(
{code:t.code,handle:n.fxsProgressBox("addStep",t)})});i.forEach(function(t){n.fxsProgressBox(
"removeStep",t.handle)});n.data("steps",r)},_remove:function(n){var t=i[n];t&&r.
fire("REMOVE",t.widget)},_removeAllSteps:function(n){var t=i[n],r;t&&(r=t.widget,
t._setSteps(r,null))}});f.addMethod("Impl.UI.Notifications.Progress.sync",u._sync);
f.addMethod("Impl.UI.Notifications.Progress.remove",u._remove)}(jQuery,Shell),function(
n,t,i){"use strict";var r=t.prototype,u=0,f="__fxs-command",e=function(){return f+
u++},o="<div class='fxs-command-iconwrapper'><div class='fxs-command-icon'><img data-bind='attr: { src: data.url }' alt='' /><\/div><\/div><div class='fxs-command-text' data-bind='text: data.text'><\/div><!-- ko if: data.subCommands().length --><ul class='fxs-command-flyout' data-bind='foreach: data.subCommands '><li><a data-bind='attr: { \"href\": disabled() ? false : \"#\" }, text: text'><\/a><\/li><\/ul><!-- /ko -->";
n.widget("fxs.fxsCommand",t,{options:{action:"",click:null,url:"",text:""},_viewModel:
null,_subscriptions:null,_flyoutClickHandler:null,_buttonEnterHandler:null,_buttonLeaveHandler:
null,_create:function(){var t=this;this._setViewModel(new n.fxs.fxsCommand.Command);
this._setOption("action",this.options.action);this._setOption("url",this.options.
url);this._setOption("text",this.options.text);this.element.addClass("fxs-command").
html(o).fxButton({click:this.options.click}).on("click",".fxs-command-flyout a",
this._flyoutClickHandler=function(r){var f=n(this),u;r.preventDefault();r.stopPropagation(
);f.attr("href")&&(u=i.contextFor(this).$data.click,u&&u());t.element.removeClass(
"fxs-command-subcommandsvisible")}).on("mouseenter focusin",this._buttonEnterHandler=
function(){if(!t.options.disabled){var n=t.element.offset(),i=t.element.find(".fxs-command-flyout");
t.element.addClass("fxs-command-subcommandsvisible");n.left-=parseInt((i.outerWidth(
)-t.element.outerWidth())/2,10);n.top-=i.height();i.offset(n)}}).on("mouseleave focusout",
this._buttonLeaveHandler=function(){t.element.removeClass("fxs-command-subcommandsvisible")}
);i.applyBindings({data:this._viewModel,func:this},this.element[0]);r._create.call(
this)},_destroy:function(){this.element.removeClass("fxs-command fxs-command-subcommandsvisible").
empty().fxButton("destroy");this._flyoutClickHandler&&(this.element.off("click",
this._flyoutClickHandler),this._flyoutClickHandler=null);this._buttonEnterHandler&&
(this.element.off("mouseenter focusin",this._buttonEnterHandler),this._buttonEnterHandler=
null);this._buttonLeaveHandler&&(this.element.off("mouseleave focusout",this._buttonLeaveHandler),
this._buttonLeaveHandler=null);this._viewModel.action("");this._unsubscribe();this.
_super()},addSubCommands:function(t,r){var u=[],f=[];return t.forEach(function(t)
{var r=new n.fxs.fxsCommand.SubCommand,o=e();r.id=o;i.mapping.fromJS(t,null,r);u.
push(r);f.push(o)},this),typeof r!="number"&&(r=this._viewModel.subCommands().length),
this._viewModel.subCommands.splice.apply(this._viewModel.subCommands,[r,0].concat(
u)),f},removeSubCommands:function(n){n.forEach(function(n){this._viewModel.subCommands.
remove(function(t){return t.id===n})},this)},removeAllSubCommands:function(){this.
_viewModel.subCommands([])},updateSubCommand:function(n,t){var r=i.utils.arrayFirst(
this._viewModel.subCommands(),function(t){return t.id===n});r&&i.mapping.fromJS(
t,null,r)},getViewModel:function(){return this._viewModel},_setViewModel:function(
n){this._viewModel=n;this._subscribe(this._viewModel)},_unsubscribe:function(){if(
this._subscriptions)while(this._subscriptions.length)this._subscriptions.splice(
0,1)[0].dispose()},_subscribe:function(n){var t=this;this._subscriptions=this._subscriptions||
[];this._unsubscribe();this._subscriptions.push(n.action.subscribe(function(n){var
i=t.element.data("currentAction");i&&t.element.removeClass("fxs-command-action-"+
i).removeData("currentAction");n&&t.element.addClass("fxs-command-action-"+n).data(
"currentAction",n)}));n.action.notifySubscribers(n.action())},_setOption:function(
n,t){var i;n==="action"?(t=(t||"").replace(/[^a-z0-9]*/gi,""),i=r._setOption.call(
this,n,t)):i=r._setOption.apply(this,arguments);switch(n){case"action":case"url":
case"text":this._viewModel[n](t);break;case"click":this.element.fxButton({click:
t})}return n==="disabled"&&this.element.fxButton("option","disabled",t),i}});n.fxs.
fxsCommand.SubCommand=function(){this.id=null;this.text=i.observable();this.click=
null;this.disabled=i.observable(!1)};n.fxs.fxsCommand.Command=function(){this.action=
i.observable();this.url=i.observable();this.text=i.observable();this.subCommands=
i.observableArray()}}(jQuery,jQuery.Widget,ko),function(n,t,i){"use strict";var r=
{},f=n.Callbacks(),e=t.Communication.Receiver.getReceiver(),u=t.Namespace.define(
"Impl.UI.Commands",{addListener:function(n){f.add(n)},removeListener:function(n)
{f.remove(n)},_sync:function(f,e,o){var l=f===null,s=this,h,c;return f=f||t.Utilities.
newGuid(),e.widgetOptions.action&&(e.widgetOptions.url=i.getContentUrl("Content/Images/icons-action-32-sprites.png")),
r[f]=r[f]||{widget:n("<div />").fxsCommand(),group:e.widgetOptions.group,widgetOptions:
e.widgetOptions,subCommands:e.subCommands},this.receiver.holdArgument(e),l?(h=r[
f].widget.data("fxs-fxsCommand"),c=h.destroy,this.receiver.holdArgument(o),h.destroy=
function(){o();u._releaseSubCommands.call(s,r[f].widget);s.receiver.releaseArgument(
r[f].widget.fxsCommand("option","click"));s.receiver.releaseArgument(o);c.apply(
this,arguments);delete r[f]}):(u._setWidgetOptions.call(this,r[f].widget,e.widgetOptions),
u._setSubCommands.call(this,r[f].widget,e.subCommands)),f},_setWidgetOptions:function(
n,t){t.click&&(this.receiver.releaseArgument(n.fxsCommand("option","click")),this.
receiver.holdArgument(t.click));n.fxsCommand(t)},_releaseSubCommands:function(n)
{for(var t=n.fxsCommand("getViewModel").subCommands(),i=t.length;i--;)this.receiver.
releaseArgument(t[i].click)},_setSubCommands:function(n,t){u._releaseSubCommands.
call(this,n);n.fxsCommand("removeAllSubCommands");t&&(t.forEach(function(n){n.click&&
this.receiver.holdArgument(n.click)},this),n.fxsCommand("addSubCommands",t))},_remove:
function(){var t=[].slice.call(arguments),n=[];t.forEach(function(t){var i=r[t];
i&&n.push(i)});f.fire("REMOVE",n)},_clear:function(n){for(var t in r)r.hasOwnProperty(
t)&&(n===null||r[t].group===n)&&u._remove(t)},_add:function(){var n=[].slice.call(
arguments),t=[];n.forEach(function(n){var i=r[n];i&&t.push(i)});f.fire("ADD",t);
n.forEach(function(n){var t=r[n];t&&(u._setWidgetOptions.call(this,t.widget,t.widgetOptions),
u._setSubCommands.call(this,t.widget,t.subCommands),t.widgetOptions=null,t.subCommands=
null)},this)}});e.addMethod("Impl.UI.Commands.sync",u._sync);e.addMethod("Impl.UI.Commands.remove",
u._remove);e.addMethod("Impl.UI.Commands.clear",u._clear);e.addMethod("Impl.UI.Commands.add",
u._add)}(jQuery,Shell,this.fx.resources),function(n,t,i){"use strict";var u=t.prototype,
r;i.Resources&&i.Resources.getResources&&(r=i.Resources.getResources("fx.regions"));
n.widget("fxs.fxsRegionPicker",t,{options:{selectableRegions:[],selectedRegion:null},
_create:function(){var n=this.options.selectableRegions,t=this.options.selectedRegion;
n=n||[];this.element.addClass("fxs-regionpicker");this._setOption("selectableRegions",
n);this._setOption("selectedRegion",t);u._create.call(this,this._getName)},_destroy:
function(){this.element.removeClass("fxs-regionpicker");this._super()},_validateOptions:
function(t,i){if(n.each(t,function(n,t){if(!r[t])throw"The region '{0}' is not a supported region.".
format(t);}),i&&t.indexOf(i)===-1)throw"The selected region '{0}' is not a selectable region.".
format(i);},_setOption:function(n,t){return n==="selectableRegions"?(this._validateOptions(
t,this.options.selectedRegion),t.sort(function(n,t){var i=r[n],u=r[t];return i<u?
-1:i>u?1:0}),u._setSelectableItems.call(this,t)):n==="selectedRegion"&&(this._validateOptions(
this.options.selectableRegions,t),u._setSelectedItem.call(this,t)),u._setOption.
apply(this,arguments)},_getName:function(n){return r[n]?r[n]:n}})}(jQuery,jQuery.
fxs.fxsPicker,this),function(n,t,i,r,u,f){"use strict";var l=t.prototype,a=0,v="__fxs-customersupport",
h={failedToRetrieveSku:1,rdfeMintMisMatch:2},e={billing:"billing",technical:"technical"},
y={name:"free",code:0,supportTypeKeys:[e.billing]},c=f.getClasses("fx.fxDialog"),
o=function(){return v+a++},p=function(){var n=f.getStrings("fxs.fxsCustomerSupport");
return n.loading=n.validating,n},w="<div class='fxs-customersupport-title'><h2><span data-bind='text: options.text.title'><\/span><\/h2><\/div><div class='fxs-customersupport-body'><div class='fxs-customersupport-manage-section'><div class='fxs-customersupport-subtitle' data-bind='text: options.text.otherOptionsTitle'><\/div><ul><li><a class='fxs-customersupport-premier' data-bind='text: options.text.premierLinkText, attr: { href: options.url.premierSupport }' target='_blank'><\/a><\/li><li><a href='#' class='fxs-customersupport-msdn' data-bind='text: options.text.msdnLinkText'><\/a><\/li><\/ul><div class='fxs-customersupport-subtitle fxs-customersupport-viewincidents' data-bind='text: options.text.viewIncidentsTitle'><\/div><input type='button' class='fxs-customersupport-manage' data-bind='value: options.text.manageButton' /><\/div><div class='fxs-customersupport-create-section'><div class='fxs-customersupport-subtitle' data-bind='text: options.text.createIncidentTitle'><\/div><div class='fxs-customersupport-form-item'><label class='fxs-customersupport-subscriptions-label' data-bind='text: options.text.subscription'><\/label><select class='fxs-customersupport-subscriptions fxs-customersupport-options' data-bind='options: model.subscriptions, optionsText: \"subscriptionName\", value: model.subscription'><\/select><\/div><div class='fxs-customersupport-form-item' data-bind='css: { \"fxs-customersupport-first-option-disabled\": model.supportTypes().length > 1, \"fxs-customersupport-option-required\": model.supportTypeRequired, \"fxs-customersupport-selected-option-dimmed\": !model.supportType() }'><label class='fxs-customersupport-types-label' data-bind='text: options.text.supportType'><\/label><select class='fxs-customersupport-types' data-bind='foreach: model.supportTypes, value: model.supportType'><option data-bind='value: $data.supportTypeValue, text: $data.supportTypeText, enable: $data.supportTypeValue'><\/option><\/select><\/div><div class='fxs-customersupport-form-item'><label class='fxs-customersupport-regions-label' data-bind='text: options.text.region'><\/label><div class='fxs-customersupport-regions'><\/div><\/div><div class='fxs-customersupport-form-item'><label class='fxs-customersupport-languages-label' data-bind='text: options.text.language'><\/label><div class='fxs-customersupport-languages'><\/div><\/div><\/div><div class='fxs-customersupport-message-container'><\/div><div class='fxs-customersupport-create-container'><a data-bind='css: { \"fxs-customersupport-disabled\": model.enableCreate() === false }'><span data-bind='attr: { \"class\": 'sprite ' + options.class_.createIconImage }'><\/span><span data-bind='text: options.text.createButton'><\/span><\/a><\/div><\/div>",
s=n.templates("<img class='fxs-customersupport-message-icon' alt='' src='{{attr:iconUrl}}' /><div class='fxs-customersupport-message-text'>{{>message}}{{if linkUrl}} <a href='{{attr:linkUrl}}' target='_blank'>{{>linkText}}<\/a>{{/if}}<\/div>"),
b=n.templates("<img class='fxs-customersupport-message-icon' alt='' src='{{attr:iconUrl}}' /><div class='fxs-customersupport-message-text'><strong>{{>supportPlanLabel}}:<\/strong> {{>supportPlanName}}<div class='fxs-customersupport-message-details'>{{:details}}<\/div><\/div>");
n.widget("fxs.fxsCustomerSupport",t,{options:{languages:["en-us"],supportTypeKeys:
[e.billing,e.technical],defaultLanguage:"en-us",regions:["AE","AR","AT","AU","AZ",
"BE","BG","BH","BR","BY","CA","CH","CL","CO","CR","CY","CZ","DE","DK","DO","DZ",
"EC","EE","EG","ES","FI","FR","GB","GR","GT","HK","HR","HU","ID","IE","IL","IN",
"IS","IT","JO","JP","KE","KR","KW","KZ","LI","LT","LK","LU","LV","MA","ME","MK",
"MT","MX","MY","NG","NL","NO","NZ","OM","PA","PE","PH","PK","PL","PR","PT","PY",
"QA","RO","RS","RU","SA","SE","SG","SI","SK","SV","TH","TN","TR","TT","TW","UA",
"US","UY","VE","ZA"],defaultRegion:"US",supportSkuSettings:[{name:"proDirect",code:
3,languages:["en-us"]},y],enableMessageAnimation:!1,windowOpenHandler:function(n)
{i.open(n)},subscriptionListProvider:null,supportEntitlementProvider:null,url:{createIncident:
"/Support/Create",viewIncidents:"/Support/List",loadingIcon:null,errorIcon:null,
informationIcon:null},class_:{createIconImage:c.ok,createIconHoverImage:c.okHover},
text:p()},_viewModel:null,_clickHandler:null,_defaultSupportTypes:null,_create:function(
){var t=this;this.element.text(this.options.text.title).attr("title",this.options.
text.iconAlternate).addClass("fxs-customersupport").on("click",this._clickHandler=
function(n){n.stopPropagation();n.preventDefault();t.show()});this._defaultSupportTypes=
n.map(this.options.supportTypeKeys,function(n){return{supportTypeValue:n,supportTypeText:
t.options.text[n]}});this._defaultSupportTypes.length>1&&this._defaultSupportTypes.
splice(0,0,{supportTypeValue:"",supportTypeText:this.options.text.chooseSupportType});
l._create.call(this)},_destroy:function(){this.element.removeClass("fxs-customersupport").
empty();this._clickHandler&&(this.element.off("click",this._clickHandler),this._clickHandler=
null);this._super()},show:function(){var t=this;r.UI.DialogPresenter.show({extension:
"NotAnExtension",name:"Support",closeOnEscape:!0,template:n.templates(w),showOk:
!1,init:function(){var i=o(),f=o(),s=o(),h=o(),c=this.element.find(".fxs-customersupport-languages"),
l=this.element.find(".fxs-customersupport-types"),a=this.element.find(".fxs-customersupport-create-container").
find("a"),v=this.element.find(".fxs-customersupport-message-container");t._viewModel=
new n.fxs.fxsCustomerSupport.ViewModel;t._viewModel.region=t.options.defaultRegion;
t._viewModel.language=t.options.defaultLanguage;t._viewModel.supportTypes(t._defaultSupportTypes);
t._viewModel.supportType(t._defaultSupportTypes[0].supportTypeValue);t._viewModel.
enableMessageAnimation(t.options.enableMessageAnimation);t._populateSubscriptions(
);u.applyBindings({model:t._viewModel,options:t.options},this.element[0]);this.element.
addClass("fxs-customersupport-dialog").find(".fxs-customersupport-manage").on("click",
function(n){var u=t.options.url.viewIncidents,i=new r.Utilities.QueryStringBuilder;
n.stopPropagation();n.preventDefault();i.set({language:t._viewModel.language});t.
options.windowOpenHandler(u+i.toString(!0))}).end().find(".fxs-customersupport-msdn").
on("click",function(n){var i=t._viewModel,f=t.options.url.createIncident,u=new r.
Utilities.QueryStringBuilder;u.set({lang:i.language,c:i.region,st:e.technical,si:
i.subscription().subscriptionId,msdn:!0});n.stopPropagation();n.preventDefault();
t.options.windowOpenHandler(f+u.toString(!0))}).end().find(".fx-dialog-ok").hide(
).end().find(".fxs-customersupport-message-container").hide().end().find(".fxs-customersupport-subscriptions-label").
attr("for",i).end().find(".fxs-customersupport-subscriptions").attr("id",i).on("change",
function(){t._beginLoadSubscription(t._viewModel.subscription())}).end().find(".fxs-customersupport-types-label").
attr("for",f).end().find(".fxs-customersupport-options").fxDropdown().end().find(
".fxs-customersupport-regions").fxsRegionPicker({selectableRegions:t.options.regions,
selectedRegion:t.options.defaultRegion,showOk:!1,selectionChange:function(n){t._viewModel.
region=n}}).end().find(".fxs-customersupport-regions-label").attr("for",s).end().
find(".fxs-customersupport-regions").find("select").attr("id",s).end().end().find(
".fxs-customersupport-languages-label").attr("for",h);t._setupCreateIncidentHandler(
a);t._setupMessageChangeHandler(v);t._setupSupportTypesChangeHandler(l,f);t._setupLanguagesChangeHandler(
c,h);t._beginLoadSubscription(t._viewModel.subscription());t._trigger("open")}})}
,_getMessageWithPlanHtml:function(n,t){return b.render({iconUrl:this.options.url.
informationIcon,supportPlanLabel:this.options.text.supportPlan,supportPlanName:n,
details:t})},_setupSupportTypesChangeHandler:function(n,t){n.attr("id",t).fxDropdown(
);this._viewModel.supportTypes.subscribe(function(){n.fxDropdown()})},_setupLanguagesChangeHandler:
function(t,i){var r=this;t.find("select").attr("id",i).end().fxsLanguagePicker({
selectableCultures:r.options.languages,selectedCulture:r.options.defaultLanguage,
showOk:!1,selectionChange:function(n){r._viewModel.language=n}});r._viewModel.languages.
subscribe(function(i){n.inArray(r._viewModel.language,i)===-1&&(t.fxsLanguagePicker(
"option","selectableCultures",r.options.languages),t.fxsLanguagePicker("option",
"selectedCulture",i[0]));t.fxsLanguagePicker("option","selectableCultures",i)})}
,_setupCreateIncidentHandler:function(t){var i=this,r=t.find("span.sprite");i._viewModel.
enableCreate.subscribe(function(u){if(u)t.attr("href","#").on("click",n.proxy(i.
_createIncidentHandler,i)).on("mouseenter",function(){r.removeClass(i.options.url.
createIconImage).addClass(i.options.url.createIconHoverImage)}).on("mouseleave",
function(){r.removeClass(i.options.url.createIconHoverImage).addClass(i.options.
url.createIconImage)});else t.removeAttr("href").off("click mouseenter mouseleave")}
)},_setupMessageChangeHandler:function(n){var t=this;t._viewModel.messageHtml.subscribe(
function(i){t._viewModel.enableMessageAnimation()?n.slideUp(function(){n.html(i);
n.slideDown()}):(n.html(i),n.show())})},_populateSubscriptions:function(){var t=
this;this.options.subscriptionListProvider&&n.each(this.options.subscriptionListProvider(
),function(n,i){t._viewModel.subscriptions.push({subscriptionId:i.SubscriptionID,
subscriptionName:i.UnambiguousSubscriptionName,languages:null,supportTypeKeys:null,
validationToken:null,message:null,enableCreate:!1})})},_beginLoadSubscription:function(
n){var t=this;this._viewModel.messageHtml(s.render({iconUrl:this.options.url.loadingIcon,
message:this.options.text.loading}));this._viewModel.enableCreate(!1);this._trigger(
"entitlementLoading",null,n);n.validationToken?(this._endLoadSubscription(n),this.
_trigger("entitlementLoaded",null,n)):this.options.supportEntitlementProvider&&this.
options.supportEntitlementProvider(n.subscriptionId).done(function(i){t._getSupportEntitlementSuccess(
n,i)}).fail(function(){t._getSupportEntitlementFailure(n)}).always(function(){t.
_endLoadSubscription(n);t._trigger("entitlementLoaded",null,n)})},_endLoadSubscription:
function(t){this._viewModel.messageHtml(t.messageHtml);this._viewModel.enableCreate(
t.enableCreate);t.languages?this._viewModel.languages(t.languages):this._viewModel.
languages(this.options.languages);t.supportTypeKeys?this._viewModel.supportTypes(
n.grep(this._defaultSupportTypes,function(i){return n.inArray(i.supportTypeValue,
t.supportTypeKeys)>=0})):this._viewModel.supportTypes(this._defaultSupportTypes)}
,_getSupportEntitlementSuccess:function(t,i){var u=this.options,f=n.grep(u.supportSkuSettings,
function(n){return n.code===i.supportPlanSku});f.length>0&&(t.languages=f[0].languages,
t.supportTypeKeys=f[0].supportTypeKeys);t.validationToken=i.validationToken;i.supportPlanErrorCode===
h.rdfeMintMisMatch?(t.enableCreate=!1,t.messageHtml=s.render({iconUrl:u.url.errorIcon,
message:u.text.errorRdfeMintMissmatch,linkUrl:u.url.customerService,linkText:u.text.
customerService})):i.supportPlanErrorCode===h.failedToRetrieveSku?(t.enableCreate=
!0,t.messageHtml=s.render({iconUrl:u.url.informationIcon,message:u.text.errorRetrievingPlan.
format(i.supportPlanName)})):i.supportPlanSku===0?(t.enableCreate=!0,t.messageHtml=
this._getMessageWithPlanHtml(u.text.supportPlanFree,r.Utilities.SafeMarkup.create(
u.text.purchasePlanMessageFormat.format("[customerSupportMessage|{0}|{1}|_blank]".
format(r.Utilities.SafeMarkup.getText(u.text.purchasePlanLinkText),r.Utilities.SafeMarkup.
getText(u.url.purchaseSupport)))))):(t.enableCreate=!0,t.messageHtml=this._getMessageWithPlanHtml(
i.supportPlanName))},_getSupportEntitlementFailure:function(n){var t=this.options;
t.text.error&&t.text.error[t.text.error.length-1]!=="."&&(t.text.error+=".");n.enableCreate=
!1;n.messageHtml=s.render({iconUrl:t.url.errorIcon,message:t.text.error,linkUrl:
t.url.customerService,linkText:t.text.customerService})},_createIncidentHandler:
function(n){var t=this._viewModel,i=t.subscription(),u=new r.Utilities.QueryStringBuilder,
f=this.options.url.createIncident;t.enableValidation(!0);t.supportType()&&(u.set(
{lang:t.language,c:t.region,si:i.subscriptionId,st:t.supportType(),val:i.validationToken}),
this.options.windowOpenHandler(f+u.toString(!0)));n.preventDefault()}});n.fxs.fxsCustomerSupport.
ViewModel=function(){this.supportTypes=u.observableArray([]);this.subscriptions=
u.observableArray([]);this.languages=u.observableArray([]);this.region=null;this.
language=null;this.supportType=u.observable();this.subscription=u.observable();this.
messageHtml=u.observable();this.enableCreate=u.observable(!1);this.enableMessageAnimation=
u.observable(!1);this.enableValidation=u.observable(!1);this.supportTypeRequired=
u.computed(function(){return this.enableValidation()&&!this.supportType()},this)}
}(jQuery,jQuery.Widget,this,Shell,ko,this.fx.resources),function(n,t,i){"use strict";
function f(f,e){var h=new i.Utilities.QueryStringBuilder(n.location.search),c=h.
containsKey("getSupport"),o=t(".fxs-avatarbar-customersupport"),s=o.find("a");u.
holdArgument(e);i.Environment.getCustomerSupportEnabled()&&o.show();s.fxsCustomerSupport(
{enableMessageAnimation:!0,url:f.url,text:f.text,languages:i.Environment.getCustomerSupportLanguages(
),subscriptionListProvider:function(){return f.subscriptions},open:function(){r=
r.slice(-10)},supportEntitlementProvider:function(n){return i.Net.ajaxPost({url:
f.url.entitlementService,data:{si:n}}).then(function(n){return r.push(n),e(r),{supportPlanErrorCode:
n.SupportPlanErrorCode,supportPlanName:n.SupportPlanName,supportPlanSku:n.SupportPlanSku,
validationToken:n.ValidationToken}})}});c&&s.fxsCustomerSupport("show")}var u=i.
Communication.Receiver.getReceiver(),r=[];i.Namespace.define("Impl.UI.CustomerSupport",
{initialize:f});u.addMethod("Impl.UI.CustomerSupport.initialize",f)}(this,jQuery,
Shell),function(n,t,i,r,u){"use strict";var e="fxs.fxsDialog",o=0,s="__fxs-dialog",
f=t.prototype,h=70,c="<div class='fxs-dialog-content'><h1 class='fxs-dialog-title' data-bind='text: data.title'><\/h1><div class='fxs-dialog-mainpanel'><div class='fxs-dialog-datacontent' data-bind='html: data.content'><\/div><iframe class='fxs-dialog-dataurl' data-bind='attr: { src: $root.func._getUrlWithQueryStringParameter(data.dataUrl(), \"dialogId\", data.id) }'><\/iframe><\/div><div class='fxs-dialog-navigation'><div class='fxs-dialog-navigation-complete'><a data-bind='attr: { href: data.completeButtonEnabled() ? \"#\" : null }'><span class='sprite'><\/span><\/a><\/div><\/div><div class='fxs-dialog-close'><a href='#'><span class='sprite'><\/span><\/a><\/div><\/div>",
l=function(){return s+o++};n.widget(e,t,{options:{closing:n.noop,close:n.noop,activate:
n.noop,deactivate:n.noop,completeButtonEnabled:!0,title:"",dataUrl:"",showProgress:
!1,useUrl:!1,size:[800,640],class_:r.getClasses(e),text:r.getStrings(e)},_viewModel:
null,_bindingsApplied:!1,_completeHandler:null,_closeHandler:null,_contentSize:null,
_subscriptions:null,_create:function(){var t=this,i;this._setViewModel(new n.fxs.
fxsDialog.Dialog);i=this._viewModel.id+"_title";this.element.addClass("fxs-dialog").
attr("aria-labelledby",i).html(c).find(".fxs-dialog-navigation-complete a").attr(
"title",this.options.text.complete).find("span.sprite").addClass(this.options.class_.
complete).end().end().find(".fxs-dialog-close a").attr("title",this.options.text.
close).find("span.sprite").addClass(this.options.class_.close).end().end().find(
".fxs-dialog-title").attr("id",i).end().on("click",".fxs-dialog-navigation-complete a[href]",
this._completeHandler=function(){return t._completeClicked.apply(t,arguments)}).
on("click",".fxs-dialog-close a[href]",this._closeHandler=function(){return t._closeClicked.
apply(t,arguments)});this._setOption("title",this.options.title);this._setOption(
"dataUrl",this.options.dataUrl);this._setOption("completeButtonEnabled",this.options.
completeButtonEnabled);this._setOption("showProgress",this.options.showProgress);
this._setOption("useUrl",this.options.useUrl);this._setOption("size",this.options.
size);f._create.call(this);this.element.addClass("fxs-dialog").html(this.options.
content);f._create.call(this)},_destroy:function(){this.element.removeClass("fxs-dialog").
removeAttr("aria-labelledby").empty();this._completeHandler&&(this.element.off("click",
this._completeHandler),this._completeHandler=null);this._closeHandler&&(this.element.
off("click",this._closeHandler),this._closeHandler=null);this._unsubscribe();this.
_super()},open:function(){f.open.call(this);this._bindingsApplied||(u.applyBindings(
{data:this._viewModel,func:this},this.element[0]),this._bindingsApplied=!0,this.
options.activate&&this.options.activate({dialog:this._viewModel,element:this.element.
find(".fxs-dialog-mainpanel")[0]}),this._setSize())},close:function(n){if(this.options.
deactivate&&this.options.deactivate({dialog:this._viewModel,element:this.element.
find(".fxs-dialog-mainpanel")[0]})===!1||this.options.closing&&this.options.closing(
{completed:!!n,dialog:this._viewModel})===!1)return!1;this._trigger("close");this.
element.is(":data(fxs-fxsKeyboardModal)")&&this.element.fxsKeyboardModal("destroy")}
,getContentSize:function(){return this._contentSize},getViewModel:function(){return this.
_viewModel},_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)}
,_completeClicked:function(n){n.preventDefault();this.close(!0)},_closeClicked:function(
n){n.preventDefault();this.close(!1)},_setSize:function(){var n=this.element.find(
".fxs-dialog-datacontent, .fxs-dialog-dataurl"),t=parseInt(n.css("top"),10);this.
element.find(".fxs-dialog-content").css({width:this.options.size[0],height:this.
options.size[1]});this._contentSize=[this.options.size[0],this.options.size[1]-t-
h];n.css({width:this._contentSize[0],height:this._contentSize[1]})},_unsubscribe:
function(){if(this._subscriptions)while(this._subscriptions.length)this._subscriptions.
splice(0,1)[0].dispose()},_subscribe:function(){this._subscriptions=this._subscriptions||
[];this._unsubscribe()},_getUrlWithQueryStringParameter:function(){return i.getUrlWithQueryStringParameter.
apply(null,arguments)},_setOption:function(n,t){var i=f._setOption.apply(this,arguments);
switch(n){case"title":case"dataUrl":case"completeButtonEnabled":case"showProgress":
this._viewModel[n](t);break;case"useUrl":t?this.element.addClass("fxs-dialog-usingiframe"):
this.element.removeClass("fxs-dialog-usingiframe");break;case"size":this._setSize(
)}return i}});n.fxs.fxsDialog.Dialog=function(){this.id=l();this.title=u.observable(
);this.completeButtonEnabled=u.observable(!0);this.showProgress=u.observable(!1);
this.content=u.observable();this.dataUrl=u.observable()}}(jQuery,jQuery.fxs.fxsModalBase,
this.fx.utilities,this.fx.resources,ko),function(n,t,i,r){"use strict";var b={},
u=i.Communication.Receiver.getReceiver(),f=function(){return b},s=function(n,t,i,
r,u){n?n(t).done(function(n){i&&n===!1||u&&u()}).fail(r):u&&u()},e=function(n){n&&
u.releaseArgument(n)},o=function(n){n&&u.holdArgument(n)},k=function(n){n.closing=
function(n){var t=f()[n.dialog.id],i,r;return t.internalClosingOperation?(t.internalClosingOperation=
!1,!0):(r={completed:n.completed,dialog:n.dialog.id,data:t.data},i={dialog:n.dialog.
id},s(n.dialog.deactivate,i,!0,t.viewModel.error,function(){s(n.dialog.closing,r,
!0,t.viewModel.error,function(){t.internalClosingOperation=!0;t.dialog.fxsDialog(
"close")})}),!1)}},d=function(n){var i=t.extend({},n);return k(i),i},g=function(
n,i,r){n.viewModel.contentLoadingDeferred=t.Deferred();n.viewModel.contentLoadingDeferred.
done(function(){s(n.viewModel.activate,i,!1,n.viewModel.error,r)}).always(function(
){n.viewModel.contentLoadingDeferred=null})},h=function(n,r){var s,e,h=t("<div />"),
o=new Impl.UI.Dialogs.DialogInfo,l,c,a;return s=d(n),s.useUrl=!0,l=h.fxsDialog(s),
e=h.fxsDialog("getViewModel"),e.id=i.Utilities.newGuid(),c=l.data("fxs-fxsDialog"),
a=c.destroy,u.holdArgument(r),c.destroy=function(){r();u.releaseArgument(e);u.releaseArgument(
r);a.apply(this,arguments);delete f()[e.id]},o.dialog=h,o.viewModel=e,o.data={},
f()[e.id]=o,e.id},c=function(n){var t=f()[n],i;if(!t)throw"The dialog cannot be found.";
try{r.UI.Dialogs.ModalPresenter.open(t.dialog)}catch(u){t.viewModel.error&&t.viewModel.
error(u)}i={dialog:n,data:t.data};g(t,i)},l=function(n,t,i){var r=f()[n];if(!r)throw"The dialog cannot be found.";
r.dialog.fxsDialog("option",t,i)},a=function(n,t){var i=f()[n];if(!i)throw"The dialog cannot be found.";
e(i.viewModel.closing);o(t);i.viewModel.closing=t},nt=function(n,t){var i=f()[n];
if(!i)throw"The dialog cannot be found.";e(i.viewModel.error);o(t);i.viewModel.error=
t},v=function(n){var t=f()[n];if(!t)throw"The dialog cannot be found.";t.viewModel.
isLoaded=!0;t.viewModel.contentLoadingDeferred&&t.viewModel.contentLoadingDeferred.
resolve()},y=function(n,t){var i=f()[n];if(!i)throw"The dialog cannot be found.";
e(i.viewModel.activate);o(t);i.viewModel.activate=t},p=function(n,t){var i=f()[n];
if(!i)throw"The dialog cannot be found.";e(i.viewModel.deactivate);o(t);i.viewModel.
deactivate=t},w=function(n,t){var i=f()[n];if(!i)throw"The dialog cannot be found.";
i.data=t};i.Namespace.define("Impl.UI.Dialogs.Dialogs",{create:h,open:c,update:l,
setClosing:a,ready:v,setActivate:y,setDeactivate:p,setDialogData:w});r.UI.Dialogs.
DialogInfo=function(){this.dialogOptions=null;this.dialog=null;this.viewModel=null;
this.internalClosingOperation=!1};u.addMethod("Impl.UI.Dialogs.Dialog.create",h);
u.addMethod("Impl.UI.Dialogs.Dialog.open",c);u.addMethod("Impl.UI.Dialogs.Dialog.update",
l);u.addMethod("Impl.UI.Dialogs.Dialog.setClosing",a);u.addMethod("Impl.UI.Dialogs.Dialog.setError",
nt);u.addMethod("Impl.UI.Dialogs.Dialog.ready",v);u.addMethod("Impl.UI.Dialogs.Dialog.setActivate",
y);u.addMethod("Impl.UI.Dialogs.Dialog.setDeactivate",p);u.addMethod("Impl.UI.Dialogs.Dialog.setDialogData",
w)}(this,jQuery,Shell,Impl,ko),function(n,t,i,r,u,f){"use strict";var e="fxs.fxsWizard",
h=0,c="__fxs-wizard",l=0,a="__fxs-wizard-step",v=75,o=t.prototype,y="<div class='fxs-wizard-content'><div class='fxs-wizard-alert' data-bind='activateWidget: \"fxsToastBox\", fxcontrol-options: { data: data.alert }'><\/div><h1 class='fxs-wizard-title' data-bind='text: data.title'><\/h1><ol class='fxs-wizard-aroundsteps fxs-wizard-previoussteps' data-bind='foreach: { data: data.steps }'><li data-bind='attr: { \"aria-hidden\": $root.func._isBladeHidden.call($root.func, \"backward\", $data) }'><a class='fxs-wizard-stepnumber' data-bind='attr: { href: $root.func._isBladeHidden.call($root.func, \"backward\", $data) || locked() ? null : \"#\" }, style: { background: $root.func._getColor($root.func._getStepIndex($data, $parent.data.steps()), $parent.data.steps().length) }'><span data-bind='text: $parent.func._getStepIndex($data, $parent.data.steps()) + 1'><\/span><\/a><\/li><\/ol><ol class='fxs-wizard-mainpanel' data-bind='foreach: {data: data.steps, afterRender: function(element, step) { func._afterRender.call(func, element, step); },beforeRemove: function(element, index, step) { func._beforeRemove.call(func, element, index, step); }}'><li data-bind='attr: { \"aria-hidden\": $parent.data.currentStep() !== $data }, css: { \"fxs-wizard-currentstep\": $parent.data.currentStep() === $data }'><div class='fxs-wizard-stepcontainer'><h2 class='fxs-wizard-steptitle' data-bind='text: title'><\/h2><div class='fxs-wizard-stepcontent' data-bind='template: contentTemplateOptions'><\/div><iframe class='fxs-wizard-stepurl' data-bind='attr: { src: $root.func._getUrlWithQueryStringParameter($root.func._getUrlWithQueryStringParameter(url(), \"wizardId\", $parent.data.id), \"stepId\", id) }'><\/iframe><\/div><\/li><\/ol><ul class='fxs-wizard-navigation'><li data-bind='attr: { \"aria-hidden\": data.currentStepIndex() <= 0 }' class='fxs-wizard-navigation-previous'><a data-bind='attr: { href: func._isPreviousStepLocked() ? null : \"#\", title: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].previousLabel }'><div><span class='sprite'><\/span><\/div><span data-bind='text: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].previousLabel, css: {\"fxs-wizard-navigation-invisible\": (data.currentStepIndex() >= 0 && !data.steps()[data.currentStepIndex()].previousLabel()) } '><\/span><\/a><\/li><li data-bind='attr: { \"aria-hidden\": data.currentStepIndex() >= data.steps().length - 1 }' class='fxs-wizard-navigation-next'><a data-bind='attr: { href: func._isNextStepLocked() ? null : \"#\", title: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].nextLabel }'><div><span class='sprite'><\/span><\/div><span data-bind='text: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].nextLabel, css: {\"fxs-wizard-navigation-invisible\": (data.currentStepIndex() >= 0 && !data.steps()[data.currentStepIndex()].nextLabel()) }'><\/span><\/a><\/li><li data-bind='attr: { \"aria-hidden\": data.currentStepIndex() !== data.steps().length - 1 || !data.completeButtonDisplayed }' class='fxs-wizard-navigation-complete'><a data-bind='attr: { href: data.completeButtonEnabled() ? \"#\" : null, title: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].completeLabel }'><div><span class='sprite'><\/span><\/div><span data-bind='text: data.currentStepIndex() < 0 ? \"\" : data.steps()[data.currentStepIndex()].completeLabel, css: {\"fxs-wizard-navigation-invisible\": (data.currentStepIndex() >= 0 && !data.steps()[data.currentStepIndex()].completeLabel()) } '><\/span><\/a><\/li><\/ul><ol class='fxs-wizard-aroundsteps fxs-wizard-nextsteps' data-bind='foreach: { data: data.steps, afterRender: function() { func._animateBlades.apply(func, arguments); } }, attr: { start: data.currentStepIndex() + 2 }'><li data-bind='attr: { \"aria-hidden\": $root.func._isBladeHidden.call($root.func, \"forward\", $data) }'><a class='fxs-wizard-stepnumber' data-bind='attr: { href: $root.func._isBladeHidden.call($root.func, \"forward\", $data) || locked() ? null : \"#\" }, style: { background: $root.func._getColor($root.func._getStepIndex($data, $parent.data.steps()), $parent.data.steps().length) }'><span data-bind='text: $parent.func._getStepIndex($data, $parent.data.steps()) + 1'><\/span><\/a><\/li><\/ol><div class='fxs-wizard-close'><a href='#'><span class='sprite'><\/span><\/a><\/div><div class='fxs-wizard-progress'><\/div><\/div>",
s=30,p=function(){return a+l++},w=function(){return c+h++};n.widget(e,t,{options:
{closing:n.noop,close:n.noop,stepActivate:n.noop,stepDeactivate:n.noop,stepMovePrevious:
n.noop,stepMoveNext:n.noop,stepAfterAdd:n.noop,stepBeforeRemove:n.noop,autoLock:
!0,completeButtonEnabled:!1,completeButtonDisplayed:!0,title:"",showProgress:!1,
useUrl:!1,size:[800,640],class_:r.getClasses(e),text:r.getStrings(e)},_viewModel:
null,_bindingsApplied:!1,_previousHandler:null,_nextHandler:null,_completeHandler:
null,_closeHandler:null,_stepHandler:null,_animationDuration:350,_animationMovement:
15,_contentSize:null,_subscriptions:null,_bladeStartingColor:[83,184,225],_bladeEndingColor:
[30,131,174],_create:function(){var t=this,i;this._setViewModel(new n.fxs.fxsWizard.
Wizard);i=this._viewModel.id+"_title";this.element.addClass("fxs-wizard").attr("aria-labelledby",
i).html(y).find(".fxs-wizard-navigation-previous span.sprite").addClass(this.options.
class_.previous).end().find(".fxs-wizard-navigation-next span.sprite").addClass(
this.options.class_.next).end().find(".fxs-wizard-navigation-complete span.sprite").
addClass(this.options.class_.complete).end().find(".fxs-wizard-close a").attr("title",
this.options.text.close).find("span.sprite").addClass(this.options.class_.close).
end().end().find(".fxs-wizard-title").attr("id",i).end().on("click",".fxs-wizard-navigation-previous a[href]",
this._previousHandler=function(){return t._previousClicked.apply(t,arguments)}).
on("click",".fxs-wizard-navigation-next a[href]",this._nextHandler=function(){return t.
_nextClicked.apply(t,arguments)}).on("click",".fxs-wizard-navigation-complete a[href]",
this._completeHandler=function(){return t._completeClicked.apply(t,arguments)}).
on("click",".fxs-wizard-close a[href]",this._closeHandler=function(){return t._closeClicked.
apply(t,arguments)}).on("click","a.fxs-wizard-stepnumber[href]",this._stepHandler=
function(){return t._stepClicked.apply(t,arguments)});this._findBladeColors();this.
_setOption("title",this.options.title);this._setOption("completeButtonEnabled",this.
options.completeButtonEnabled);this._setOption("completeButtonDisplayed",this.options.
completeButtonDisplayed);this._setOption("showProgress",this.options.showProgress);
this._setOption("useUrl",this.options.useUrl);this._setOption("size",this.options.
size);o._create.call(this)},_destroy:function(){this.element.removeClass("fxs-wizard fxs-wizard-usingiframe").
removeAttr("aria-labelledby aria-busy").removeAttr("").empty();this._previousHandler&&
(this.element.off("click",this._previousHandler),this._previousHandler=null);this.
_nextHandler&&(this.element.off("click",this._nextHandler),this._nextHandler=null);
this._completeHandler&&(this.element.off("click",this._completeHandler),this._completeHandler=
null);this._closeHandler&&(this.element.off("click",this._closeHandler),this._closeHandler=
null);this._stepHandler&&(this.element.off("click",this._stepHandler),this._stepHandler=
null);this._unsubscribe();this._super()},open:function(){var n=this._viewModel.steps(
);o.open.call(this);this._bindingsApplied||(u.applyBindings({data:this._viewModel,
func:this},this.element[0]),this._bindingsApplied=!0,this._setSize());n&&n.length>
0&&this._goToStep(n[0])},close:function(n){var r,t,u,i;if(this._viewModel.currentStep(
))if(n){if(!this._checkGoToStep(null))return!1}else if(this.options.stepDeactivate&&
(r=this._getStepChangingEventArgs(null),this.options.stepDeactivate(r)===!1))return!1;
if(this.options.closing&&this.options.closing({completed:!!n,wizard:this._viewModel})===
!1)return!1;for(this._trigger("close"),t=this._viewModel.steps(),u=t.length,i=0;
i<u;i++)this._callBeforeRemove(t[i],this._getStepHtml(t[i],t));this.element.is(":data(fxs-fxsKeyboardModal)")&&
this.element.fxsKeyboardModal("destroy")},setAlertMessage:function(n){this._viewModel.
alert.content(n)},setShowAlert:function(n){this._viewModel.alert.open(n)},getCurrentStep:
function(){return this._viewModel.currentStep()},getCurrentStepIndex:function(){
return this._viewModel.currentStepIndex()},setCurrentStep:function(n){n.locked(!1);
this._checkGoToStep(n)},addStep:function(t,i){var r=new n.fxs.fxsWizard.WizardStep;
return u.mapping.fromJS(t,null,r),typeof i!="number"?this._viewModel.steps.push(
r):this._viewModel.steps.splice(i,0,r),r},updateStep:function(n,t){n&&u.mapping.
fromJS(t,null,n)},removeStep:function(n){n&&this._viewModel.steps.remove(n)},getContentSize:
function(){return this._contentSize},getViewModel:function(){return this._viewModel}
,_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)},_findBladeColors:
function(){var t=n("<div />").addClass("fxs-wizard-bladescolor").appendTo("body");
this._bladeStartingColor=this._rgbToArray(t.css("color"));this._bladeEndingColor=
this._rgbToArray(t.css("background-color"));t.remove()},_previousClicked:function(
n){n.preventDefault();this._checkGoToStep(this._viewModel.previousStep())},_nextClicked:
function(n){n.preventDefault();this._checkGoToStep(this._viewModel.nextStep())},
_completeClicked:function(n){n.preventDefault();this.close(!0)},_closeClicked:function(
n){n.preventDefault();this.close(!1)},_stepClicked:function(n){n.preventDefault(
);this._checkGoToStep(u.contextFor(n.target).$data)},_getStepChangingEventArgs:function(
n){var t=this._viewModel,i=t.currentStep(),r=t.steps(),u=t.currentStepIndex(),f=
this._getStepIndex(n,r),e=this._getDirection(f,u),o=this._getStepHtml(i,r);return{
wizard:this._viewModel,element:o,currentStep:i,newStep:n,direction:e}},_checkGoToStep:
function(n){var t=this._getStepChangingEventArgs(n);if(n&&n.locked())return!1;switch(
t.direction){case"backward":if(this.options.stepMovePrevious&&this.options.stepMovePrevious(
t)===!1)return!1;break;case"forward":if(this.options.stepMoveNext&&this.options.
stepMoveNext(t)===!1)return!1}return this.options.stepDeactivate&&this.options.stepDeactivate(
t)===!1?!1:(this._goToStep(n),!0)},_getStepHtml:function(n,t){var i=this._getStepIndex(
n,t);return this.element.find("ol.fxs-wizard-mainpanel > li").eq(i)[0]},_goToStep:
function(t){var i=this._viewModel,r=i.steps(),u=i.currentStep(),f=this._getDirection(
this._getStepIndex(t,r),this._getStepIndex(u,r)),s=f==="forward"?"backward":"forward",
e={forward:{left:this._animationMovement,opacity:0},backward:{left:-this._animationMovement,
opacity:0}},o;t&&(t!==u&&(i.showProgress()&&i.showProgress(!1),o=this.element.find(
".fxs-wizard-mainpanel li.fxs-wizard-currentstep").addClass("fxs-wizard-willanimate"),
i.currentStep(t),o.animate(e[s],this._animationDuration/2,function(){n(this).removeClass(
"fxs-wizard-willanimate")}),this.element.find(".fxs-wizard-mainpanel li.fxs-wizard-currentstep").
css(e[f]).delay(175).animate({left:0,opacity:1},this._animationDuration/2)),this.
_animateBlades(),this.options.stepActivate&&this.options.stepActivate({wizard:this.
_viewModel,element:this._getStepHtml(t,r),oldStep:u,currentStep:t,direction:f}),
this.element.find(".fxs-wizard-navigation-previous span").text(t.previousLabel()))}
,_animateBlades:function(){var n=this._viewModel,t=n.steps();this.element.find(".fxs-wizard-previoussteps").
animate({left:-n.currentStepIndex()*s},this._animationDuration);this.element.find(
".fxs-wizard-nextsteps").animate({right:-(t.length-1-n.currentStepIndex())*s},this.
_animationDuration)},_autoLockSteps:function(){var t,r,u,n,i=this._viewModel;if(
this.options.autoLock){for(t=i.steps(),r=t.length,u=i.currentStepIndex(),n=u+1,t[
n]&&t[n].locked(!1),n+=1;n<r;n++)t[n].locked(!0);u===r-1?i.completeButtonEnabled(
!0):i.completeButtonEnabled(!1)}},_getDirection:function(n,t){return n===t?"initial":
n>t||n===-1?"forward":"backward"},_isPreviousStepLocked:function(){var n=this._viewModel.
previousStep();return n&&n.locked()},_isNextStepLocked:function(){var n=this._viewModel.
nextStep();return n&&n.locked()},_isBladeHidden:function(n,t){var i=this._viewModel,
r=i.currentStepIndex(),u=this._getStepIndex(t,i.steps());return this._getDirection(
u,r)!==n},_getHex:function(n,t,i){var u=n<<16|t<<8|i,r=u.toString(16);return"#"+
Array(7-r.length).join("0")+r},_getColor:function(n,t){var i;return n>=0&t>1?(i=
n/(t-1),this._getHex(this._bladeStartingColor[0]+(this._bladeEndingColor[0]-this.
_bladeStartingColor[0])*i,this._bladeStartingColor[1]+(this._bladeEndingColor[1]-
this._bladeStartingColor[1])*i,this._bladeStartingColor[2]+(this._bladeEndingColor[
2]-this._bladeStartingColor[2])*i)):this._getHex.apply(this,this._bladeStartingColor)}
,_rgbToArray:function(n){var r=0,t,i=[0,0,0];if(n&&n.length>1)if(n[0]==="#")n.length===
4?(t=n.substring(1,2),t=t+t,i[0]=parseInt(t,16),t=n.substring(2,3),t=t+t,i[1]=parseInt(
t,16),t=n.substring(3,4),t=t+t,i[2]=parseInt(t,16)):(i[0]=parseInt(n.substring(1,
3),16),i[1]=parseInt(n.substring(3,5),16),i[2]=parseInt(n.substring(5,7),16));else
for(n=n.match(/\d+(\.\d+)?%?/g);r<3;)t=n[r],t.indexOf("%")!==-1&&(t=Math.round(parseFloat(
t)*2.55)),i[r]=parseInt(t,10),r++;return i},_getStepIndex:function(n,t){return u.
utils.arrayIndexOf(t,n)},_afterRender:function(n,t){this.options.stepAfterAdd&&this.
options.stepAfterAdd({wizard:this._viewModel,step:t,element:n[0]})},_beforeRemove:
function(n,t,i){this._callBeforeRemove(i,n);u.removeNode(n);this._goToStep(this.
_viewModel.currentStep())},_callBeforeRemove:function(n,t){this.options.stepBeforeRemove&&
this.options.stepBeforeRemove({wizard:this._viewModel,step:n,element:t})},_setSize:
function(){var n=this.element.find(".fxs-wizard-stepcontainer"),t=parseInt(n.css(
"marginTop"),10)+parseInt(n.css("marginBottom"),10);this.element.find(".fxs-wizard-content").
css({width:this.options.size[0],height:this.options.size[1]});this.element.find(
".fxs-wizard-aroundsteps li a").css("height",this.options.size[1]);isNaN(t)||(this.
_contentSize=[this.options.size[0],this.options.size[1]-t-v],n.css({width:this.options.
size[0],height:this.options.size[1]-t}),this.element.find(".fxs-wizard-stepcontent, .fxs-wizard-stepurl").
css({width:this._contentSize[0],height:this._contentSize[1]-5}))},_unsubscribe:function(
){if(this._subscriptions)while(this._subscriptions.length)this._subscriptions.splice(
0,1)[0].dispose()},_subscribe:function(n){var t=this;this._subscriptions=this._subscriptions||
[];this._unsubscribe();this._subscriptions.push(n.steps.subscribe(function(){t._setSize(
);t._viewModel.showProgress()&&t._disableNavigationForNewStepIfExists()}));n.steps.
notifySubscribers(n.steps());this._subscriptions.push(n.currentStep.subscribe(function(
){t._autoLockSteps()}));n.currentStep.notifySubscribers(n.currentStep());this._subscriptions.
push(n.showProgress.subscribe(function(n){t._showProgress(n)}));n.showProgress.notifySubscribers(
n.showProgress())},_showProgress:function(n){var i=this.element.find(".fxs-wizard-progress"),
t=this.element.find(".fxs-wizard-currentstep");n?(t.length>0&&t.addClass("fxs-wizard-hidden"),
this.element.attr("aria-busy","true"),i.addClass("fxs-wizard-progress-active"),this.
_disableNavigationForProgress()):(t.length>0&&t.removeClass("fxs-wizard-hidden"),
this.element.removeAttr("aria-busy"),i.removeClass("fxs-wizard-progress-active"),
this._restoreNavigationStateAfterShowingProgress())},_disableNavigationForProgress:
function(){for(var i=this._viewModel.steps(),n,t=0;t<i.length;t++)n=i[t],n.savedLockedState=
n.locked(),n!==this._viewModel.currentStep()&&n.locked(!0);this._viewModel.savedCompleteButtonState=
this._viewModel.completeButtonEnabled();this._viewModel.completeButtonEnabled(!1)}
,_restoreNavigationStateAfterShowingProgress:function(){for(var i=this._viewModel.
steps(),n,t=0;t<i.length;t++)n=i[t],n!==this._viewModel.currentStep()&&n.locked(
n.savedLockedState),n.savedLockedState=f;this._viewModel.completeButtonEnabled(this.
_viewModel.savedCompleteButtonState);this._viewModel.savedCompleteButtonState=f}
,_disableNavigationForNewStepIfExists:function(){for(var i=this._viewModel.steps(
),n,t=0;t<i.length;t++)n=i[t],n.savedLockedState===f&&(n.savedLockedState=n.locked(
),n.locked(!0))},_getUrlWithQueryStringParameter:function(){return i.getUrlWithQueryStringParameter.
apply(null,arguments)},_setOption:function(n,t){var i=o._setOption.apply(this,arguments);
switch(n){case"title":case"completeButtonEnabled":case"completeButtonDisplayed":
case"showProgress":this._viewModel[n](t);break;case"useUrl":t?this.element.addClass(
"fxs-wizard-usingiframe"):this.element.removeClass("fxs-wizard-usingiframe");break
case"size":this._setSize()}return i}});n.fxs.fxsWizard.WizardStep=function(){this.
id=p();this.title=u.observable();this.locked=u.observable(!0);this.contentTemplateOptions=
u.observable();this.content=u.observable();this.url=u.observable();this.previousLabel=
u.observable();this.nextLabel=u.observable();this.completeLabel=u.observable();this.
locked=u.observable(!0)};n.fxs.fxsWizard.Wizard=function(){this.id=w();var t=u.observable(
);this.title=u.observable();this.steps=u.observableArray();this.completeButtonEnabled=
u.observable(!0);this.completeButtonDisplayed=u.observable(!0);this.currentStep=
u.computed({read:function(){return t()},write:function(n){n&&(t(n),n.locked(!1))}
,owner:this,deferEvaluation:!0});this.currentStepIndex=u.computed(function(){return u.
utils.arrayIndexOf(this.steps(),this.currentStep())},this);this.previousStep=u.computed(
function(){return this.steps()[this.currentStepIndex()-1]||null},this);this.nextStep=
u.computed(function(){return this.steps()[this.currentStepIndex()+1]||null},this);
this.showProgress=u.observable(!1);this.lockOrUnlockNextSteps=function(n,t){var i,
r,u,f=!1;if(!t){this.currentStep()&&this.lockOrUnlockNextSteps(n,this.currentStep(
));return}for(i=0,r=this.steps(),u=r.length;i<u;i++)f?r[i].locked(n):r[i]===t&&(
f=!0)};this.lockOrUnlockPreviousSteps=function(n){var t,i,r;for(t=0,i=this.steps(
),r=this.currentStepIndex();t<r;t++)i[t].locked(n)};this.alert=new n.fxs.fxsToastBox.
ToastBox}}(jQuery,jQuery.fxs.fxsModalBase,this.fx.utilities,this.fx.resources,ko),
function(n,t,i,r,u,f){"use strict";var st={},e=i.Communication.Receiver.getReceiver(
),o=function(){return st},h=function(n,t){return u.utils.arrayFirst(n.steps(),function(
n){return n.id===t})},s=function(n,t,i,r,u){n?n(t).done(function(n){i&&n===!1||u&&
u()}).fail(r):u&&u()},c=function(n){n&&e.releaseArgument(n)},l=function(n){n&&e.
holdArgument(n)},ht=function(n){n.closing=function(n){var t=o()[n.wizard.id],r,u,
i;return n.completed?!0:t.internalClosingOperation?(t.internalClosingOperation=!1,
!0):(u={completed:n.completed,wizard:n.wizard.id,data:t.data},i=function(){s(n.wizard.
closing,u,!0,t.viewModel.error,function(){t.internalClosingOperation=!0;t.wizard.
fxsWizard("close")})},n.wizard.currentStep()?(r={wizard:n.wizard.id,newStep:null,
currentStep:n.wizard.currentStep().id},s(n.wizard.currentStep().deactivate,r,!0,
t.viewModel.error,i)):i(),!1)}},ct=function(n){n.stepMoveNext=function(n){var t=
o()[n.wizard.id],i,r,u=n.currentStep;return t.internalSetStepOperation?(t.internalSetStepOperation=
!1,!0):(i={wizard:n.wizard.id,currentStep:n.currentStep.id,direction:n.direction},
i.newStep=n.newStep?n.newStep.id:null,s(u.moveNext,i,!0,t.viewModel.error,function(
){s(u.deactivate,i,!0,t.viewModel.error,function(){var i;n.newStep?(r={wizard:n.
wizard.id,currentStep:n.newStep.id,oldStep:n.currentStep.id,direction:n.direction,
data:t.data},a(t,n.newStep,r,function(){t.internalSetStepOperation=!0;t.wizard.fxsWizard(
"setCurrentStep",n.newStep)})):(i={completed:!0,wizard:n.wizard.id,data:t.data},
s(n.wizard.closing,i,!0,t.viewModel.error,function(){t.internalSetStepOperation=
!0;t.wizard.fxsWizard("close",!0)}))})}),!1)}},lt=function(n){n.stepMovePrevious=
function(n){var t=o()[n.wizard.id],i,r;return t.internalSetStepOperation?(t.internalSetStepOperation=
!1,!0):(i={wizard:n.wizard.id,currentStep:n.currentStep.id,newStep:n.newStep.id,
direction:n.direction},r={wizard:n.wizard.id,currentStep:n.newStep.id,oldStep:n.
currentStep.id,direction:n.direction,data:t.data},s(n.currentStep.movePrevious,i,
!0,t.viewModel.error,function(){s(n.currentStep.deactivate,i,!0,t.viewModel.error,
function(){a(t,n.newStep,r,function(){t.internalSetStepOperation=!0;t.wizard.fxsWizard(
"setCurrentStep",n.newStep)})})}),!1)}},at=function(n){var i=t.extend({},n);return ht(
i),ct(i),lt(i),i.stepActivate=null,i.stepDeactivate=null,i.close=null,i},a=function(
n,i,r,u){i.isLoaded?s(i.activate,r,!1,n.viewModel.error,u):(i.contentLoadingDeferred=
t.Deferred(),i.contentLoadingDeferred.done(function(){s(i.activate,r,!1,n.viewModel.
error,u)}).always(function(){i.contentLoadingDeferred=null;n.viewModel.showProgress(
!1)}),n.viewModel.showProgress(!0))},v=function(n,r){var s,u,h=t("<div />"),f=new
Impl.UI.Dialogs.WizardInfo,l,c,a;return s=at(n),s.useUrl=!0,l=h.fxsWizard(s),u=h.
fxsWizard("getViewModel"),u.id=i.Utilities.newGuid(),c=l.data("fxs-fxsWizard"),a=
c.destroy,e.holdArgument(r),c.destroy=function(){r();e.releaseArgument(u);e.releaseArgument(
u.steps());e.releaseArgument(r);a.apply(this,arguments);delete o()[u.id]},f.wizard=
h,f.viewModel=u,f.data={},o()[u.id]=f,u.id},y=function(n){var t=o()[n],i,u;if(!t)
throw"The wizard cannot be found.";try{r.UI.Dialogs.ModalPresenter.open(t.wizard)}
catch(f){t.viewModel.error&&t.viewModel.error(f)}i=t.viewModel.steps();i&&i.length>
0&&(u={wizard:n,currentStep:i[0].id,oldStep:null,direction:"initial",data:t.data},
a(t,i[0],u))},p=function(n,t,i){var r=o()[n];if(!r)throw"The wizard cannot be found.";
r.wizard.fxsWizard("option",t,i)},w=function(n,t,i){var r=o()[n],u;if(!r)throw"The wizard cannot be found.";
return i===null&&(i=f),u=r.wizard.fxsWizard("addStep",t,i),u.id},b=function(n,t,
i,r){var u=o()[n],f,e={};if(!u)throw"The wizard cannot be found.";f=h(u.viewModel,
t);f&&(e[i]=r,u.wizard.fxsWizard("updateStep",f,e))},k=function(n,t){var r=o()[n],
i;if(!r)throw"The wizard cannot be found.";if(i=h(r.viewModel,t),i){e.releaseArgument(
i);r.wizard.fxsWizard("removeStep",i);return}},d=function(n){var i=o()[n],r=[];if(
!i)throw"The wizard cannot be found.";return t.each(i.viewModel.steps(),function(
n,t){r.push(t.id)}),r},g=function(n){var t=o()[n],i;if(!t)throw"The wizard cannot be found.";
i=t.viewModel.nextStep();i?i.locked(!0):t.viewModel.completeButtonEnabled(!1)},nt=
function(n){var t=o()[n],i;if(!t)throw"The wizard cannot be found.";i=t.viewModel.
nextStep();i?i.locked(!1):t.viewModel.completeButtonEnabled(!0)},tt=function(n,t)
{var i=o()[n];if(!i)throw"The wizard cannot be found.";c(i.viewModel.closing);l(
t);i.viewModel.closing=t},vt=function(n,t){var i=o()[n];if(!i)throw"The wizard cannot be found.";
c(i.viewModel.error);l(t);i.viewModel.error=t},it=function(n,t){var r=o()[n],i;if(
!r)throw"The wizard cannot be found.";i=h(r.viewModel,t);i.isLoaded=!0;i.contentLoadingDeferred&&
i.contentLoadingDeferred.resolve()},rt=function(n,t,i){var u=o()[n],r;if(!u)throw"The wizard cannot be found.";
r=h(u.viewModel,t);r&&(c(r.activate),l(i),r.activate=i)},ut=function(n,t,i){var u=
o()[n],r;if(!u)throw"The wizard cannot be found.";r=h(u.viewModel,t);r&&(c(r.deactivate),
l(i),r.deactivate=i)},ft=function(n,t,i){var u=o()[n],r;if(!u)throw"The wizard cannot be found.";
r=h(u.viewModel,t);r&&(c(r.moveNext),l(i),r.moveNext=i)},et=function(n,t,i){var u=
o()[n],r;if(!u)throw"The wizard cannot be found.";r=h(u.viewModel,t);r&&(c(r.movePrevious),
l(i),r.movePrevious=i)},ot=function(n,t){var i=o()[n];if(!i)throw"The wizard cannot be found.";
i.data=t};i.Namespace.define("Impl.UI.Dialogs.Wizard",{create:v,open:y,update:p,
addStep:w,updateStep:b,removeStep:k,getSteps:d,disableNextButton:g,enableNextButton:
nt,setClosing:tt,stepReady:it,setStepActivate:rt,setStepDeactivate:ut,setStepMoveNext:
ft,setStepMovePrevious:et,setWizardData:ot});r.UI.Dialogs.WizardInfo=function(){
this.wizardOptions=null;this.wizard=null;this.viewModel=null;this.internalClosingOperation=
!1;this.internalSetStepOperation=!1};e.addMethod("Impl.UI.Dialogs.Wizard.create",
v);e.addMethod("Impl.UI.Dialogs.Wizard.open",y);e.addMethod("Impl.UI.Dialogs.Wizard.update",
p);e.addMethod("Impl.UI.Dialogs.Wizard.addStep",w);e.addMethod("Impl.UI.Dialogs.Wizard.updateStep",
b);e.addMethod("Impl.UI.Dialogs.Wizard.removeStep",k);e.addMethod("Impl.UI.Dialogs.Wizard.getSteps",
d);e.addMethod("Impl.UI.Dialogs.Wizard.disableNextButton",g);e.addMethod("Impl.UI.Dialogs.Wizard.enableNextButton",
nt);e.addMethod("Impl.UI.Dialogs.Wizard.setClosing",tt);e.addMethod("Impl.UI.Dialogs.Wizard.setError",
vt);e.addMethod("Impl.UI.Dialogs.Wizard.stepReady",it);e.addMethod("Impl.UI.Dialogs.Wizard.setStepActivate",
rt);e.addMethod("Impl.UI.Dialogs.Wizard.setStepDeactivate",ut);e.addMethod("Impl.UI.Dialogs.Wizard.setStepMoveNext",
ft);e.addMethod("Impl.UI.Dialogs.Wizard.setStepMovePrevious",et);e.addMethod("Impl.UI.Dialogs.Wizard.setWizardData",
ot)}(this,jQuery,Shell,Impl,ko),function(n,t){"use strict";var i=t.prototype,r="<ul class='fxs-drawercommands-commands-global' data-bind='foreach: { data: data.globalCommands, afterRender: func._attachElements }'><li><\/li><\/ul><ul class='fxs-drawercommands-commands-contextual' data-bind='foreach: { data: data.contextualCommands, afterRender: func._attachElements }'><li><\/li><\/ul>";
n.widget("fxs.fxsDrawerCommands",t,{options:{globalCommands:null,contextualCommands:
null},_viewModel:null,_create:function(){this._setViewModel(new n.fxs.fxsDrawerCommands.
DrawerCommands);this._setOption("globalCommands",this.options.commands);this._setOption(
"contextualCommands",this.options.commands);this.element.addClass("fxs-drawercommands").
html(r);ko.applyBindings({data:this._viewModel,func:this},this.element[0]);i._create.
call(this)},_destroy:function(){this.element.removeClass("fxs-drawercommands");this.
_super()},addCommands:function(n,t){for(var r={},u,f=[],i=0;i<n.length;i++)u=r[n[
i].group]=r[n[i].group]||[],u.push(n[i].widget),f.push(n[i]);for(i in r)if(r.hasOwnProperty(
i)){if(!this._isValidGroup(i))continue;typeof t!="number"&&(t=this._viewModel[i+
"Commands"]().length);this._viewModel[i+"Commands"].splice.apply(this._viewModel[
i+"Commands"],[t,0].concat(r[i]))}return f},removeCommands:function(n){n.forEach(
function(n){this._isValidGroup(n.group)&&this._viewModel[n.group+"Commands"].remove(
n.widget)},this)},removeAllCommands:function(n){n?this._isValidGroup(n)&&this._viewModel[
n+"Commands"]([]):(this._viewModel.globalCommands([]),this._viewModel.contextualCommands(
[]))},getViewModel:function(){return this._viewModel},_isValidGroup:function(n){
return/^(global|contextual)$/.test(n)},_setViewModel:function(n){this._viewModel=
n},_attachElements:function(t,i){n(t).hide().append(i).fadeIn()},_setOption:function(
n,t){var r=i._setOption.apply(this,arguments);switch(n){case"globalCommands":this.
_viewModel.globalCommands(t||[]);break;case"contextualCommands":this._viewModel.
contextualCommands(t||[])}return r}});n.fxs.fxsDrawerCommands.DrawerCommands=function(
){this.globalCommands=ko.observableArray();this.contextualCommands=ko.observableArray(
)}}(jQuery,jQuery.Widget),function(n,t,i){"use strict";var r=t.prototype,u="<div class='fxs-drawerdetails-details-box'><\/div>";
n.widget("fxs.fxsDrawerDetails",t,{_viewModel:null,_subscriptions:null,_detailsDiv:
null,_newExperimentDetails:null,_newDatasetDetails:null,_create:function(){this.
_detailsDiv=this.element.addClass("fxs-drawerdetails").html(u).find(".fxs-drawerdetails-details-box");
this._setViewModel(new n.fxs.fxsDrawerDetails.DrawerDetails);DataLab.Features.newExperimentFlowEnabled(
)&&(DataLab.Features.galleryInPlusNewInterimEnabled()?ExperimentEditor.NewDrawerMenu.
NewExperimentTemplateList.initializeTutorialTemplate(window.DataLab.Workspace):ExperimentEditor.
NewDrawerMenu.NewExperimentTemplateList.initialize(window.DataLab.Workspace));r.
_create.call(this)},_destroy:function(){this._unsubscribe();this.element.removeClass(
"fxs-drawerdetails").empty();this._super()},getViewModel:function(){return this.
_viewModel},_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel);
ko.applyBindings(this._viewModel,this.element[0])},_subscribe:function(n){var t=
this;this._unsubscribe();this._subscriptions=[];DataLab.Features.newExperimentFlowEnabled(
)?this._subscriptions.push(n.selectedItemId.subscribe(function(n){n==="NewExperimentMenuItem"?
DataLab.Features.galleryInPlusNewInterimEnabled()?ExperimentEditor.NewDrawerMenu.
NewExperimentCatalogMenuInitialize():ExperimentEditor.NewDrawerMenu.NewExperimentMenuInitialize(
):n==="Dataset"?ExperimentEditor.NewDrawerMenu.NewDatasetMenuInitialize():n==="NewNotebookMenuItem"?
DataLab.Features.iPythonNotebookEnabled()&&DataLab.Features.notebookPlusNewEnabled(
)&&ExperimentEditor.NewDrawerMenu.NewNotebookMenuInitialize():n==="Module"?DataLab.
Features.newCustomModuleUploadEnabled()&&ExperimentEditor.NewDrawerMenu.NewModuleMenuInitialize(
):n==="NewProjectMenuItem"&&DataLab.Features.enableProjectBasedAssetsGroupingEnabled(
)&&ExperimentEditor.NewDrawerMenu.NewProjectMenuInitialize(Exp.Drawer.close)})):
this._subscriptions.push(n.text.subscribe(function(n){n&&t._detailsDiv.html(i.Utilities.
SafeMarkup.create(n))}))},_unsubscribe:function(){if(this._subscriptions)while(this.
_subscriptions.length)this._subscriptions.splice(0,1)[0].dispose()}});n.fxs.fxsDrawerDetails.
DrawerDetails=function(){this.text=ko.observable();this.selectedItemId=ko.observable(
)}}(jQuery,jQuery.Widget,Shell),function(n,t,i,r,u){"use strict";var s=0,h="__fxs-menu-menu",
f="fxs-menu-collapsed",e=i.prototype,o="<div class='fxs-menu-menu'><ul data-bind='foreach: { data: data.menuItems, beforeRemove: beforeRemoveFunction }'><li data-bind='attr: { \"aria-selected\": selected() ? \"true\" : \"false\",\"aria-disabled\": disabled() ? \"true\" : \"false\"}'><div class='fxs-menu-tablediv'><a href='#' data-bind='click: function() { if (!disabled()) { selected(true); }}' tabindex='-1'><div data-bind='attr: { \"class\": \"icon \" + id }'><img data-bind='attr: { src: image, alt: text }' /><\/div><div class='fxs-menu-text' data-bind='css: { \"fxs-menu-has-popout-icon\": showPopOutIcon() }'><div class='fxs-menu-itemtext' data-bind='text: text'><\/div><!-- ko if: isPreviewFeature() --><div class='fxs-menu-previewbadge'><\/div><!-- /ko --><\/div><!-- ko if: showPopOutIcon() --><span class='fxs-menu-popout-img sprite'><\/span><!-- /ko --><\/a><\/div><\/li><\/ul><\/div>",
c=function(){return h+s++};n.widget("fxs.fxsMenu",i,{options:{maxWidth:-1,menuWidth:
-1,openCloseDurationMs:400,select:n.noop,class_:u.getClasses("fxs.fxsMenu"),text:
u.getStrings("fxs.fxsMenu")},_viewModel:null,_menuStack:null,_itemWithTabIndex:null,
_focusCount:0,_hoverHandler:null,_focusHandler:null,_keyDownHandler:null,_collapsedMenuItemWidth:
-1,_collapsedMenuItemOuterWidth:-1,_expandedMenuItemWidth:-1,_expandedMenuItemOuterWidth:
-1,_originalExpandedMenuWidth:-1,_expandedMenuItemOuterWidthDiff:-1,_create:function(
){this.element.addClass("fxs-menu");this._menuStack=[];this._focusCount=0;this._calculateMenuItemSizes(
);this.options.menuWidth!==-1&&this._setMenuWidth(this.options.menuWidth);this._setOption(
"text",this.options.text);this._setViewModel(new n.fxs.fxsMenu.Menu);this._setupHandlers(
);e._create.call(this)},_destroy:function(){this.element.removeClass("fxs-menu").
empty();this._destroyMenus();this._hoverHandler&&(this.element.off("mousemove mouseleave",
"a",this._hoverHandler),this._hoverHandler=null);this._focusHandler&&(this.element.
off("focus blur","a",this._focusHandler),this._focusHandler=null);this._keyDownHandler&&
(this.element.off("keydown",this._keyDownHandler),this._keyDownHandler=null);this.
_super()},getViewModel:function(){return this._viewModel},collapseAndExpandMenus:
function(){var n=0,i=!1,r,t;if(this.options.maxWidth>0){for(t=0;t<this._menuStack.
length;t++)r=this._menuStack[t].div,r.hasClass(f)?(i=!0,n+=this._collapsedMenuItemOuterWidth):
n+=this._expandedMenuItemOuterWidth;n>this.options.maxWidth?this._collapseMenus(
n,0):i&&this._expandMenus(n,this._menuStack.length-1)}},refresh:function(){for(var
n=0;n<this._menuStack.length;n++)this._menuStack[n].div.find("ul").fxScrollbar("refresh")}
,reset:function(){for(var n=this._menuStack.length-1;n>0;n--)this._destroyMenu(this.
_menuStack[n],!0)},_keyDown:function(t){var r=!0,u=t.target,i;switch(t.which){case
n.ui.keyCode.UP:i=this._getPreviousItemJqueryAnchorElement(u);i&&i.focus();r=!1;
break;case n.ui.keyCode.DOWN:i=this._getNextItemJqueryAnchorElement(u);i&&i.focus(
);r=!1;break;case n.ui.keyCode.LEFT:this._handleKeyboardLeft(u);r=!1;break;case n.
ui.keyCode.RIGHT:this._handleKeyboardRight(u);r=!1}return r},_handleKeyboardRight:
function(t){var u=ko.dataFor(t),f,r,e,i;if(u.menuItems)if(u.selected()){for(i=0;
i<this._menuStack.length;i++)if(this._menuStack[i].viewModel===u){if(r=this._menuStack[
i].div.data("focuselement"),r)n(r).focus();else if(f=this._menuStack[i].div.find(
"a"),f.length>0)for(i=0;i<f.length;i++)if(r=f[i],e=ko.dataFor(r),!e.disabled()){
n(r).focus();break}break}}else u.selected(!0)},_handleKeyboardLeft:function(n){var
i=ko.dataFor(n)._parent,t;i&&(t=this._findJqueryAnchorElementForMenuItem(i),t&&t.
focus())},_findJqueryAnchorElementForMenuItem:function(t){for(var u=null,r=null,
i=0;i<this._menuStack.length;i++)if(this._menuStack[i].viewModel===t._parent){r=
this._menuStack[i].div.find("li");break}if(r)for(i=0;i<r.length;i++)ko.dataFor(r[
i])===t&&(u=r[i]);return u?n(u).find("a"):null},_getNextItemJqueryAnchorElement:
function(t){var r=n(t).closest("li"),i;if(r.length===0)throw"Could not find list item from anchor tag";
return i=r.next("li"),i.length>0?i.find("a"):null},_getPreviousItemJqueryAnchorElement:
function(t){var r=n(t).closest("li"),i;if(r.length===0)throw"Could not find list item from anchor tag";
return i=r.prev("li"),i.length>0?i.find("a"):null},_getParentListItemFromListItem:
function(n){var t=ko.dataFor(n);return t.parent?ko.contextFor(t.parent):null},_setupHandlers:
function(){this._setupHoverEvents();this._setupKeyDownHandler();this._setupFocusHandlers(
)},_setupFocusHandlers:function(){var t=this;this._focusHandler=function(i){var r=
i.target,f=ko.dataFor(r),u;i.type==="focusout"?(t._focusCount--,t._focusCount===
0&&t._viewModel.hoveredItem(null),u=n(r).closest("div.fxs-menu-menu"),n(u).data(
"focuselement",r)):i.type==="focusin"&&(t._itemWithTabIndex&&t._itemWithTabIndex.
attr("tabindex",-1),t._itemWithTabIndex=n(r).attr("tabindex",0),t._viewModel.hoveredItem(
f),t._focusCount++)};this.element.on("focus blur","a",this._focusHandler)},_setupHoverEvents:
function(){var n=this;this._hoverHandler=function(t){var i;t.type==="mouseleave"?
n._viewModel.hoveredItem(null):t.type==="mousemove"&&(i=ko.contextFor(t.target).
$data,n._viewModel.hoveredItem(i))};this.element.on("mousemove mouseleave","a",this.
_hoverHandler)},_setupKeyDownHandler:function(){var n=this;this._keyDownHandler=
function(){return n._keyDown.apply(n,arguments)};this.element.on("keydown",this.
_keyDownHandler)},_calculateMenuItemSizes:function(){var t=n(o);t.css({position:
"absolute",top:-9e3,left:-9e3});this.element.append(t);this._expandedMenuItemWidth=
t.width();this._expandedMenuItemOuterWidth=t.outerWidth();this._originalExpandedMenuWidth=
this._expandedMenuItemWidth;this._expandedMenuItemOuterWidthDiff=this._expandedMenuItemOuterWidth-
this._expandedMenuItemWidth;t.addClass(f);this._collapsedMenuItemWidth=t.width();
this._collapsedMenuItemOuterWidth=t.outerWidth();t.remove()},_setViewModel:function(
n){this._viewModel=n;this._addNewMenuLevel(this._viewModel,!1)},_subscribeToMenuViewModel:
function(n){var i=this,t=[];return t.push(n.selectedItem.subscribe(function(t){i.
_selectionChanged(n,t)})),t.push(n.menuItems.subscribe(function(){i._menuItemsChanged(
n)})),t},_unsubscribeToMenuViewModel:function(n){if(n)while(n.length)n.splice(0,
1)[0].dispose()},_menuItemsChanged:function(n){for(var r,i,t=0;t<this._menuStack.
length;t++)if(i=this._menuStack[t],i.viewModel===n){r=i.div.find("ul");r.fxScrollbar(
"refresh");break}this._itemWithTabIndex||this._moveTabIndexToValidMenuItem()},_beforeItemRemoved:
function(t){n.contains(t,this._itemWithTabIndex[0])&&this._moveTabIndexToValidMenuItem(
);n(t).remove()},_moveTabIndexToValidMenuItem:function(){for(var f=!1,i,u,t,r=this.
_menuStack.length-1;r>=0;r--){for(i=this._menuStack[r].div.find("a"),t=0;t<i.length;
t++)if(u=ko.dataFor(i[t]),u.disabled&&!u.disabled()){this._itemWithTabIndex=n(i[
t]).attr("tabindex",0);f=!0;break}if(f)break}},_addNewMenuLevel:function(t,i){var
f=this,r=n(o),u,s=c(),h=this._subscribeToMenuViewModel(t),e=function(){u.is(":data(fx-fxScrollbar)")&&
u.fxScrollbar("refresh")};r.attr("id",s);r.find(".fxs-menu-previewbadge").text(this.
options.text.preview);this._menuStack.length===0?this.element.append(r):this._menuStack[
this._menuStack.length-1].div.after(r);ko.applyBindings({data:t,class_:this.options.
class_,beforeRemoveFunction:function(){f._beforeItemRemoved.apply(f,arguments)}},
r[0]);u=r.find("ul").fxScrollbar({overlay:!0});i?r.css({width:0}).animate({width:
this._expandedMenuItemWidth},this.options.openCloseDurationMs,e):(r.css({width:this.
_expandedMenuItemWidth}),e());this._menuStack.push({div:r,viewModel:t,subscriptions:
h})},_collapseMenus:function(n,t){var i;t<this._menuStack.length&&(i=this._menuStack[
t].div,i.hasClass(f)?this._collapseMenus(n,t+1):(n=n-i.outerWidth()+this._collapsedMenuItemWidth,
i.animate({width:this._collapsedMenuItemWidth},this.options.openCloseDurationMs).
addClass(f),n>this.options.maxWidth&&this._collapseMenus(n,t+1)))},_expandMenus:
function(n,t){var r=n-this._collapsedMenuItemOuterWidth+this._expandedMenuItemOuterWidth,
i;t>=0&&r<=this.options.maxWidth&&(i=this._menuStack[t].div,i.hasClass(f)?(n=n-i.
outerWidth()+this._expandedMenuItemWidth,i.animate({width:this._expandedMenuItemWidth},
this.options.openCloseDurationMs,function(){i.removeClass(f).find("ul").fxScrollbar(
"refresh")}),this._expandMenus(n,t-1)):this._expandMenus(n,t-1))},_selectionChanged:
function(n,t){var i,u,f=null,r=[];for(this._trigger("select",null,{parent:n,selected:
t}),i=this._menuStack.length-1;i>=0&&this._menuStack[i].viewModel!==n;i--)r.push(
this._menuStack[i]);for(t!==null&&t.menuItems&&r.length>0&&(f=r.pop()),u=0;u<r.length;
u++)this._destroyMenu(r[u],!0);f!==null?(this._destroyMenu(f,!1),this._addNewMenuLevel(
t,!1)):t&&t.menuItems&&this._addNewMenuLevel(t,!0);DataLab.Features.newExperimentFlowEnabled(
)||this.collapseAndExpandMenus()},_setMenuWidth:function(t){t===-1&&(t=this._originalExpandedMenuWidth);
n.each(this._menuStack,function(){this.div.hasClass(f)||this.div.css({width:t}).
find("ul").fxScrollbar("refresh")});this._expandedMenuItemWidth=t;this._expandedMenuItemOuterWidth=
t+this._expandedMenuItemOuterWidthDiff},_setOption:function(n,t){var i=e._setOption.
apply(this,arguments);switch(n){case"menuWidth":this._setMenuWidth(t);this.collapseAndExpandMenus(
);break;case"text":this.element.find(".fxs-menu-previewbadge").text(t.preview)}return i}
,_destroyMenus:function(){for(var n=0;n<this._menuStack.length;n++)this._destroyMenu(
this._menuStack[n],!1)},_destroyMenu:function(t,i){var u=function(){var n=t.div.
find("ul");n.is(":data(fx-fxScrollbar)")&&t.div.find("ul").fxScrollbar("destroy");
t.div.remove()},f=!1,r;for(this._unsubscribeToMenuViewModel(t.subscriptions),f=n.
contains(t.div,this._itemWithTabIndex),i?t.div.animate({width:0},this.options.openCloseDurationMs,
function(){u()}):u(),r=0;r<this._menuStack.length;r++)if(this._menuStack[r]===t)
{this._menuStack.splice(r,1);break}f&&this._moveTabIndexToValidMenuItem()}});n.fxs.
fxsMenu.MenuItem=r.Class.define(function(n,t,i,r){var u=this;this._selected=ko.observable(
!1);this.id=n;this.text=ko.observable(t);this.image=ko.observable(i);this.disabled=
ko.observable(!1);this.description=ko.observable(r);this.isPreviewFeature=ko.observable(
!1);this.showPopOutIcon=ko.observable(!1);this.selected=ko.computed({read:function(
){return u._selected()},write:function(n){var t;n&&u.disabled()||(n&&!u._selected(
)&&(u._parent._selected&&u._parent.selected(!0),t=u._parent.selectedItem(),t===u&&
(t=null)),u._selected(n),t&&t.selected(!1))}})},{_parent:null,_selected:null,id:
null,image:null,text:null,disabled:null,getPath:function(){var n="";return this.
_parent&&this._parent.getPath&&(n+=this._parent.getPath()+"/"),n+this.id}});n.fxs.
fxsMenu.ActionMenuItem=r.Class.derive(n.fxs.fxsMenu.MenuItem,function(t,i,r,u,f)
{var e=this,o;n.fxs.fxsMenu.MenuItem.call(this,t,i,r,u);o=this.selected;this.showPopOutIcon(
!0);this.selected=ko.computed({read:function(){return o()},write:function(n){n&&
e._execute&&e._execute(e);o.call(e,n)}});this._execute=f},{_execute:null});n.fxs.
fxsMenu.ContainerMenuItem=r.Class.derive(n.fxs.fxsMenu.MenuItem,function(t,i,r,u)
{var f=this,e;n.fxs.fxsMenu.MenuItem.call(this,t,i,r,u);e=this.selected;this.menuItems=
ko.observableArray();this.menuItems.subscribe(function(t){n.each(t,function(n,t)
{t._parent=f})});this.selected=ko.computed({read:function(){return e()},write:function(
n){var t;!n&&f._selected()&&(t=f.selectedItem(),t&&t.selected(!1));e.call(f,n)}});
this.selectedItem=ko.computed({read:function(){for(var t=f.menuItems(),n=0;n<t.length;
n++)if(t[n].selected())return t[n];return null}})},{_id:null,menuItems:null,selectedItem:
null});n.fxs.fxsMenu.Menu=r.Class.define(function(){var t=this;this.menuItems=ko.
observableArray();this.menuItems.subscribe(function(i){n.each(i,function(n,i){i.
_parent=t});t.menuItems().length>0&&t.menuItems()[t.menuItems().length-1].selected(
!0)});this.selectedItem=ko.computed({read:function(){for(var i=t.menuItems(),n=0;
n<i.length;n++)if(i[n].selected())return i[n];return i.length>0?(i[n-1].selected(
!0),i[n-1]):null}});this.deepestSelectedItem=ko.computed({read:function(){for(var
n=t;n.selectedItem&&n.selectedItem();)n=n.selectedItem();return n===t&&(n=null),
n}});this.hoveredItem=ko.observable()},{_id:null,menuItems:null,selectedItem:null,
hoveredItem:null})}(jQuery,this,jQuery.Widget,Shell,this.fx.resources),function(
n,t,i,r,u){"use strict";var e="fxs-details-small",h=960,c=244,o=t.prototype,f="fxs-drawermenu-inactive",
s="fxs-drawermenu-small",l="<div class='fxs-drawermenu-title'><\/div><div class='fxs-drawermenu-closebutton'><div><span class='sprite'><\/span><\/div><\/div><div class='fxs-drawermenu-menuandbutton'><div class='fxs-drawermenu-menuarea'><div class='fxs-drawermenu-menu'><\/div><div class='fxs-drawermenu-details'><\/div><div class='fxs-drawermenu-template'><\/div><\/div><div class='fxs-drawermenu-ok'><span class='fxs-drawermenu-oktext' data-bind='text: okLabel'><\/span><div><span class='sprite'><\/span><\/div><\/div><\/div>";
n.widget("fxs.fxsDrawerMenu",t,{options:{close:n.noop,class_:u.getClasses("fxs.fxsDrawerMenu"),
text:u.getStrings("fxs.fxsDrawerMenu")},_menuWidget:null,_detailsWidget:null,_quickAddDiv:
null,_quickAddItem:null,_closeButtonWidget:null,_okButtonWidget:null,_resizeHandler:
null,_viewModel:null,_subscriptions:[],_lastReservedWidth:0,_create:function(){var
t=this;this.element.addClass("fxs-drawermenu").html(l).attr({role:"dialog","aria-atomic":
"true"});this._activateWidgets();this._setViewModel(new n.fxs.fxsDrawerMenu.DrawerMenu(
this._menuWidget.fxsMenu("getViewModel"),this._detailsWidget.fxsDrawerDetails("getViewModel")));
this._setOption("text",this.options.text);n(r).on("resize",this._resizeHandler=function(
){t._resize()});o._create.call(this)},_destroy:function(){this._destroyWidgets();
this.element.empty().removeClass("fxs-drawermenu").removeAttr("role aria-live aria-atomic");
this._resizeHandler&&(n(r).off("resize",this._resizeHandler),this._resizeHandler=
null);this._unsubscribe();this._super()},getViewModel:function(){return this._viewModel}
,refresh:function(){this._menuWidget.fxsMenu("refresh");this._resize()},reset:function(
){this.element.is(":data(fxs-fxsKeyboardModal)")&&this.element.fxsKeyboardModal(
"destroy");this._clearQuickAdd()},setToModal:function(){var n=this;this.element.
fxsKeyboardModal({escapeKeyHandler:function(){n.element.find(".fxs-drawermenu-closebutton").
click()}})},_activateWidgets:function(){var n=this;this._detailsWidget=this.element.
find(".fxs-drawermenu-details").fxsDrawerDetails();this._quickAddDiv=this.element.
find(".fxs-drawermenu-template").addClass("fxs-quickadd").addClass(f);this._okButtonWidget=
this.element.find(".fxs-drawermenu-ok").fxButton().find("span.sprite").addClass(
this.options.class_.okButton).end();this._okButtonWidget.addClass(f);this._closeButtonWidget=
this.element.find(".fxs-drawermenu-closebutton").attr({title:this.options.text.close}).
fxButton({click:function(){n._close.call(n)}}).find("span.sprite").addClass(this.
options.class_.closeButton).end();this._menuWidget=this.element.find(".fxs-drawermenu-menu").
fxsMenu({select:function(){n._selectItem.apply(n,arguments)}});this._setMaxWidth(
this._detailsWidget.outerWidth())},_destroyWidgets:function(){this._detailsWidget.
fxsDrawerDetails("destroy");this._closeButtonWidget.fxButton("destroy");this._menuWidget.
fxsMenu("destroy");this._okButtonWidget.fxButton("destroy")},_setViewModel:function(
n){this._viewModel=n;this._subscribe(this._viewModel);ko.applyBindings(this._viewModel,
this._okButtonWidget[0])},_subscribe:function(n){this._unsubscribe();DataLab.Features.
newExperimentFlowEnabled()?this._subscriptions.push(n.menu.selectedItem.subscribe(
function(t){t&&t.id&&n.details.selectedItemId(t.id)})):this._subscriptions.push(
n.menu.hoveredItem.subscribe(function(t){t&&t.description&&t.description()&&n.details.
text(t.description())}))},_unsubscribe:function(){if(this._subscriptions)while(this.
_subscriptions.length)this._subscriptions.splice(0,1)[0].dispose()},_isInSmallMode:
function(){return this.element.width()===h},_resize:function(){var t=this._menuWidget.
fxsMenu("option","menuWidth"),n;this._isInSmallMode()?(n=c,this.element.addClass(
s)):(n=-1,this.element.removeClass(s));t!==n&&(this._setMaxWidth(),this._menuWidget.
fxsMenu("option","menuWidth",n))},_renderQuickAddTemplate:function(n){var t=this,
i=n.extension,u=i?Shell.extensionIndex[i]:{},e;this._quickAddItem=n;this._quickAddDiv.
removeClass(f);this._detailsWidget.addClass(f);n.opening&&n.opening({data:n.data});
try{u.templates[n.template].link(this._quickAddDiv,n.data,u.templateHelpers)}catch(r)
{e=Shell.Utilities.htmlEncodeVariable(r.message||r.Message||r);Shell.Diagnostics.
Log.writeEntry("cdm.ErrorRenderingTemplate",e,Shell.Diagnostics.LogEntryLevel.error)}
this._setMaxWidth(this._quickAddDiv.outerWidth());n.open&&n.open({root:this._quickAddDiv,
data:n.data});n.ok&&this._okButtonWidget.fxButton("option","click",function(r){var
u=n.ok({fields:t.gatherFields(t._quickAddDiv),data:n.data});u!==!1&&(t._trigger(
"quickCreate",r,{extension:i,path:n.getPath()}),t._close.call(t))});n.label&&this.
_viewModel.okLabel(n.label);this._okButtonWidget.removeClass(f)},gatherFields:function(
t){var i={};return t.find("input").each(function(){i[this.name||this.id]=n(this).
val()||n(this).text()}),t.find("select").each(function(){i[this.name||this.id]=n(
this).val()}),i},_clearQuickAdd:function(){this._quickAddItem&&(this._quickAddItem.
close&&this._quickAddItem.close(),this._quickAddDiv.empty(),this._okButtonWidget.
addClass(f))},_close:function(){this._clearQuickAdd();this.options.close&&this.options.
close()},_selectItem:function(t,i){i.selected&&i.selected instanceof n.fxs.fxsMenu.
QuickAddMenuItem?this._renderQuickAddTemplate(i.selected):i.selected&&i.selected
instanceof n.fxs.fxsMenu.ActionMenuItem?(this._trigger("actionExecute",t,{extension:
i.selected.extension,path:i.selected.getPath()}),DataLab.Features.newExperimentFlowEnabled(
)||this._close()):(this._setDetailsWidgetWidth(i),this._clearQuickAdd(),this._detailsWidget.
removeClass(f),this._quickAddDiv.addClass(f),this._setMaxWidth(this._detailsWidget.
outerWidth()),this._okButtonWidget.addClass(f))},_setDetailsWidgetWidth:function(
n){n.selected&&(n.selected._parent===this._viewModel.menu?(this._detailsWidget.removeClass(
e),this._setMaxWidth(this._detailsWidget.outerWidth())):(this._detailsWidget.addClass(
e),this._setMaxWidth(this._detailsWidget.outerWidth())))},_setMaxWidth:function(
n){var t=n||this._lastReservedWidth;this.element.is(":visible")&&(this._lastReservedWidth=
t,this._menuWidget.fxsMenu("option","maxWidth",this.element.width()-this._lastReservedWidth))}
,_setOption:function(n,t){var i=o._setOption.apply(this,arguments);return n==="text"&&
(this.element.find(".fxs-drawermenu-title").text(t.title),this._viewModel.okLabel(
t.okLabel)),i}});n.fxs.fxsDrawerMenu.DrawerMenu=function(n,t){this.menu=n;this.details=
t;this.okLabel=ko.observable("")};n.fxs.fxsMenu.QuickAddMenuItem=i.Class.derive(
n.fxs.fxsMenu.ActionMenuItem,function(t,i,r,u,f,e,o,s,h,c,l){var v=this,a;n.fxs.
fxsMenu.MenuItem.call(this,t,i,r,u);this.template=f;this.label=e;this.data=o;this.
opening=s;this.open=h;this.ok=c;this.close=l;a=this.selected;this.selected=ko.computed(
{read:function(){return a()},write:function(n){a.call(v,n)}})},{_execute:null,extension:
null,template:null,label:null,data:null,opened:null,ok:null,close:null});n.fxs.fxsMenu.
MenuItem.prototype.extension=""}(jQuery,jQuery.Widget,Shell,this,this.fx.resources,
this.fx.utilities),function(n,t,i,r){"use strict";var u=t.prototype,f="<div class='fxs-drawerhelp-title' data-bind='text: data.title'><\/div><div class='fxs-drawerhelp-closebutton'><div><span class='sprite'><\/span><\/div><\/div><div class='fxs-drawerhelp-content'><iframe frameborder='0' data-bind='attr: { src: data.helpUrl }'><\/iframe><\/div>";
n.widget("fxs.fxsDrawerHelp",t,{options:{close:n.noop,ok:n.noop,helpUrl:"",class_:
r.getClasses("fxs.fxsDrawerHelp"),text:r.getStrings("fxs.fxsDrawerHelp")},_viewModel:
null,_subscriptions:[],_create:function(){this._setViewModel(new n.fxs.fxsDrawerHelp.
Help);this._setOption("helpUrl",this.options.helpUrl);this._setOption("text",this.
options.text);this.element.addClass("fxs-drawerhelp").html(f).find(".fxs-drawerhelp-closebutton").
attr({title:this.options.text.close}).fxButton({click:this.options.close}).find(
"span.sprite").addClass(this.options.class_.closeButton).end().end().find(".fxs-drawerhelp-content iframe").
one("load",function(){n(this).addClass("fxs-drawerhelp-iframe-loaded")}).end().attr(
{role:"dialog","aria-atomic":"true"});ko.applyBindings({data:this._viewModel,func:
this},this.element[0]);this.element.find(".fxs-drawerhelp-content").height(this.
element.outerHeight()-this.element.find(".fxs-drawerhelp-title").outerHeight());
u._create.call(this)},_destroy:function(){this.element.empty().removeClass("fxs-drawerhelp").
removeAttr("role aria-live aria-atomic");this._super()},reset:function(){this.element.
is(":data(fxs-fxsKeyboardModal)")&&this.element.fxsKeyboardModal("destroy")},setToModal:
function(){var n=this;this.element.fxsKeyboardModal({escapeKeyHandler:function()
{n.element.find(".fxs-drawerhelp-closebutton").click()}})},getViewModel:function(
){return this._viewModel},_setViewModel:function(n){this._viewModel=n},_setOption:
function(n,t){var i=u._setOption.apply(this,arguments);return n==="helpUrl"?this.
_viewModel.helpUrl(t):n==="text"&&this._viewModel.title(t.title),i}});n.fxs.fxsDrawerHelp.
Help=function(){this.title=ko.observable();this.helpUrl=ko.observable()}}(jQuery,
jQuery.Widget,this,this.fx.resources,this.fx.utilities),function(n,t){"use strict";
var i=t.prototype,r="<div class='fxs-drawernotifications-listcontainer'><ul class='fxs-drawernotifications-list' data-bind='foreach: { data: data.notifications, afterRender: func._attachElements }'><li><\/li><\/ul><\/div>";
n.widget("fxs.fxsDrawerNotifications",t,{options:{notifications:null},_viewModel:
null,_subscriptions:null,_create:function(){this._setViewModel(new n.fxs.fxsDrawerNotifications.
DrawerNotifications);this._setOption("notifications",this.options.notifications);
this.element.addClass("fxs-drawernotifications").html(r);ko.applyBindings({data:
this._viewModel,func:this},this.element[0]);this.element.find(".fxs-drawernotifications-listcontainer").
fxScrollbar({overlay:!0});i._create.call(this)},_destroy:function(){this.element.
empty().removeClass("fxs-drawernotifications fxs-drawernotifications-hasmultiple fxs-drawernotifications-noptificationdetails");
this._unsubscribe();this._super()},refresh:function(){this.element.find(".fxs-drawernotifications-listcontainer").
fxScrollbar("refresh")},addNotification:function(n,t){return typeof t!="number"&&
(t=this._viewModel.notifications().length),this._viewModel.notifications.splice(
t,0,n),n},removeNotification:function(n){this._viewModel.notifications.remove(n)}
,removeAllNotifications:function(){this._viewModel.notifications([])},getViewModel:
function(){return this._viewModel},_setViewModel:function(n){this._viewModel=n;this.
_subscribe(this._viewModel)},_attachElements:function(t,i){n(t).append(i).closest(
".fxs-drawernotifications-listcontainer").fxScrollbar("refresh")},_unsubscribe:function(
){if(this._subscriptions)while(this._subscriptions.length)this._subscriptions.splice(
0,1)[0].dispose()},_subscribe:function(n){var t=this,i=function(n){t.element.removeClass(
"fxs-drawernotifications-notificationdetails");n.forEach(function(n){var i=n.fxsNotification(
"getViewModel");i.detailsShowing()&&t.element.addClass("fxs-drawernotifications-notificationdetails")}
)},r=function(n){return function(i){var r=n.closest("li");i?(r.addClass("fxs-drawernotifications-showingdetails"),
t.element.addClass("fxs-drawernotifications-notificationdetails").find(".fxs-drawernotifications-listcontainer").
fxScrollbar("destroy").contents().unwrap()):(r.removeClass("fxs-drawernotifications-showingdetails"),
t.element.removeClass("fxs-drawernotifications-notificationdetails").find(".fxs-drawernotifications-list").
wrap("<div class='fxs-drawernotifications-listcontainer'><\/div>").end(),t.element.
find(".fxs-drawernotifications-listcontainer").fxScrollbar({overlay:!0}))}};this.
_subscriptions=this._subscriptions||[];this._unsubscribe();this._subscriptions.push(
n.notifications.subscribe(function(n){t.element.toggleClass("fxs-drawernotifications-hasmultiple",
n.length>1);n.forEach(function(n){var t=n.fxsNotification("getViewModel");t.drawernotificationsSubscribed||
(t.detailsShowing.subscribe(r(n)),t.drawernotificationsSubscribed=!0)});i(n)}));
n.notifications.notifySubscribers(n.notifications())},_setOption:function(n,t){var
r=i._setOption.apply(this,arguments);return n==="notifications"&&this._viewModel.
notifications(t||[]),r}});n.fxs.fxsDrawerNotifications.DrawerNotifications=function(
){this.notifications=ko.observableArray()}}(jQuery,jQuery.Widget,this.fx.resources),
function(n,t,i){"use strict";var u=t.prototype,r="fxs.fxsDrawerProgress",f="<div class='fxs-drawerprogress-summary'><div class='fxs-drawerprogress-buttonsets'><button class='fxs-drawerprogress-dismiss'><span data-bind='text: text.dismiss'><\/span><span data-bind='attr: { \"class\": \"sprite \" + class_.dismiss }'><\/span><\/button><button class='fxs-drawerprogress-collapse'><span data-bind='attr: { \"class\": \"sprite \" + class_.collapse }'><\/span><\/button><\/div><div class='fxs-drawerprogress-overall' data-bind='text: data.summary'><\/div><\/div><div class='fxs-drawerprogress-listcontainer'><ul class='fxs-drawerprogress-list' data-bind='foreach: { data: data.progress, afterRender: func._attachElements }'><li><\/li><\/ul><\/div>";
n.widget(r,t,{options:{progress:null,collapse:n.noop,class_:i.getClasses(r),text:
i.getStrings(r)},_viewModel:null,_subscriptions:null,_create:function(){var t=this;
this._setViewModel(new n.fxs.fxsDrawerProgress.DrawerProgress);this._setOption("progress",
this.options.progress);this.element.addClass("fxs-drawerprogress").html(f).find(
".fxs-drawerprogress-summary .fxs-drawerprogress-buttonsets").find(".fxs-drawerprogress-collapse").
on("click",function(n){t._trigger("collapse",n)}).end().find(".fxs-drawerprogress-dismiss").
on("click",function(){for(var n=t._viewModel.progress(),i=n.length,r;i--;)n[i].fxsProgressBox(
"option","dismissable")&&(r=n[i].fxsProgressBox("option","dismiss"),r&&r())}).end(
);ko.applyBindings({data:this._viewModel,func:this,text:this.options.text,class_:
this.options.class_},this.element[0]);this.element.find(".fxs-drawerprogress-listcontainer").
fxScrollbar({overlay:!0});u._create.call(this)},_destroy:function(){this.element.
empty().removeClass("fxs-drawerprogress fxs-drawerprogress-hasmultiple fxs-drawerprogress-progressdetails fxs-drawerprogress-dismissable");
this._unsubscribe();this._super()},refresh:function(){this.element.find(".fxs-drawerprogress-listcontainer").
fxScrollbar("refresh")},addProgress:function(n,t){return typeof t!="number"&&(t=
this._viewModel.progress().length),this._viewModel.progress.splice(t,0,n),n},removeProgress:
function(n){this._viewModel.progress.remove(n)},removeAllProgress:function(){this.
_viewModel.progress([])},getViewModel:function(){return this._viewModel},_setViewModel:
function(n){this._viewModel=n;this._subscribe(this._viewModel)},_attachElements:
function(t,i){n(t).append(i).closest(".fxs-drawerprogress-listcontainer").fxScrollbar(
"refresh")},_getSummary:function(){var u=this,f="",r=[],i="",t={};return n.each(
this._viewModel.progress(),function(){var i=n(this).fxsProgressBox("getViewModel").
status();t[i]=(t[i]||0)+1}),n.each(["active","success","error","warning"],function(
n,i){t[i]>0&&(r.push(u.options.text[i+f+(t[i]===1?"Single":"Multiple")].replace(
"{0}",t[i])),f="Short")}),i=r.splice(0,1)+"",n.each(r,function(n,t){i=u.options.
text.join.replace("{0}",i).replace("{1}",t)}),i},_unsubscribe:function(){if(this.
_subscriptions)while(this._subscriptions.length)this._subscriptions.splice(0,1)[
0].dispose()},_subscribe:function(n){var t=this,u=function(n){t.element.removeClass(
"fxs-drawerprogress-progressdetails");n.forEach(function(n){var i=n.fxsProgressBox(
"getViewModel");(i.stepDetailsShowing()||i.drillDetailsShowing())&&t.element.addClass(
"fxs-drawerprogress-progressdetails")})},i=function(n){return function(){var i=n.
closest("li"),r=n.fxsProgressBox("getViewModel");r.stepDetailsShowing()||r.drillDetailsShowing(
)?(i.addClass("fxs-drawerprogress-showingdetails"),t.element.addClass("fxs-drawerprogress-progressdetails").
find(".fxs-drawerprogress-listcontainer").fxScrollbar("destroy").contents().unwrap(
)):(i.removeClass("fxs-drawerprogress-showingdetails"),t.element.removeClass("fxs-drawerprogress-progressdetails").
find(".fxs-drawerprogress-list").wrap("<div class='fxs-drawerprogress-listcontainer'><\/div>").
end(),t.element.find(".fxs-drawerprogress-listcontainer").fxScrollbar({overlay:!0}))}
},r=function(n){var i=0;t.element.removeClass("fxs-drawerprogress-dismissable");
n.forEach(function(n){var t=n.fxsProgressBox("getViewModel");t.dismissable()&&i++}
);i&&t.element.addClass("fxs-drawerprogress-dismissable")};this._subscriptions=this.
_subscriptions||[];this._unsubscribe();n.summary=ko.computed(function(){return this.
_getSummary()},this);this._subscriptions.push(n.progress.subscribe(function(n){t.
element.toggleClass("fxs-drawerprogress-hasmultiple",n.length>1);n.forEach(function(
t){var u=t.fxsProgressBox("getViewModel");u.drawerprogressSubscribed||(u.stepDetailsShowing.
subscribe(i(t)),u.drillDetailsShowing.subscribe(i(t)),u.dismissable.subscribe(function(
){r(n)}),u.drawerprogressSubscribed=!0)});u(n);r(n)}));n.progress.notifySubscribers(
n.progress())},_setOption:function(n,t){var i=u._setOption.apply(this,arguments);
return n==="progress"&&this._viewModel.progress(t||[]),i}});n.fxs.fxsDrawerProgress.
DrawerProgress=function(){this.progress=ko.observableArray()}}(jQuery,jQuery.Widget,
this.fx.resources),function(n,t,i,r){"use strict";var e=t.prototype,u="<li><div class='fxs-drawertray-button' data-bind='attr: { \"data-code\": $root.func._getFinalCode(code), title: $root.func._getText(code) }'><span class='fxs-drawertray-count' data-bind='text: count'><\/span><span data-bind='attr: { class: \"sprite \" + $root.func._getClass(code) }'><\/span><\/div><\/li>",
f="ko foreach: { data: data.notifications, afterRender: function() { func._createButton.apply(func, arguments); } }",
o="<ul><!-- "+f+" -->"+u+"<!-- /ko --><!-- ko if: data.progressCount() --><!-- ko template: { data: { code: 'progress_' + data.progressStatus(), count: data.progressCount() }, afterRender: function() { func._createButton.apply(func, arguments); } } -->"+
u+"<!-- /ko --><!-- /ko --><\/ul>";n.widget("fxs.fxsDrawerTray",t,{options:{click:
null,class_:r.getClasses("fxs.fxsDrawerTray"),text:r.getStrings("fxs.fxsDrawerTray")},
_viewModel:null,_subscriptions:null,_create:function(){this._setViewModel(new n.
fxs.fxsDrawerTray.DrawerTray);this.element.addClass("fxs-drawertray").html(o);this.
_fixIE8Comment();ko.applyBindings({data:this._viewModel,func:this},this.element[
0]);e._create.call(this)},_destroy:function(){this.element.removeClass("fxs-drawertray");
this._unsubscribe();this._super()},getViewModel:function(){return this._viewModel}
,_setViewModel:function(n){this._viewModel=n;this._subscribe(this._viewModel)},_fixIE8Comment:
function(){var n=this.element[0].firstChild.firstChild;n&&n.nodeName&&n.nodeName.
toLowerCase()==="li"&&n.parentNode.insertBefore(i.document.createComment(f),n)},
_getClass:function(n){return this.options.class_[n]},_getText:function(n){var t=
this.options.text,u,r,i,f;if(typeof n=="string")for(r=n.split("_"),f=r.length,i=
0;i<f;i++)if(t=t[r[i]],!t||typeof t=="string"){u=t;break}return u},_createButton:
function(t,i){var r=this,u=r._getFinalCode(i.code);n(t[0]).find(".fxs-drawertray-button").
fxButton({toggle:!0,click:function(t){var f=n(this),i=f.fxButton("option","pressed");
r._viewModel.pressedButton(i?u:"");r.options.click&&r.options.click(t,{code:u,pressed:
i})},pressed:this._viewModel.pressedButton()===u})},_unselectButtons:function(){
this.element.find(".fxs-drawertray-button").fxButton("option","pressed",!1)},_getFinalCode:
function(n){var t=n.indexOf("_");return t===-1?n:n.substr(0,t)},_unsubscribe:function(
){if(this._subscriptions)while(this._subscriptions.length)this._subscriptions.splice(
0,1)[0].dispose()},_subscribe:function(n){var t=this;this._subscriptions=this._subscriptions||
[];this._unsubscribe();this._subscriptions.push(n.pressedButton.subscribe(function(
n){var i;t._unselectButtons();n&&(i=t.element.find("[data-code="+n+"]"),i.length&&
i.fxButton("option","pressed",!0))}))}});n.fxs.fxsDrawerTray.ProgressStatus={active:
"active",error:"error",completed:"completed",activeWithError:"activeWithError"};
n.fxs.fxsDrawerTray.DrawerTray=function(){var t=[],i=function(n,i){for(var u=!1,
r=0;r<t.length;r++)if(t[r].code===n){u=!0;i?t[r].count(i):t.splice(r,1);break}!u&&
i&&t.unshift({code:n,count:ko.observable(i)})};this.errorCount=ko.observable(0);
this.warningCount=ko.observable(0);this.informationCount=ko.observable(0);this.progressCount=
ko.observable(0);this.progressStatus=ko.observable(n.fxs.fxsDrawerTray.ProgressStatus.
active).extend({validateEnum:n.fxs.fxsDrawerTray.ProgressStatus});this.pressedButton=
ko.observable("");this.notifications=ko.computed(function(){return i("error",this.
errorCount()),i("warning",this.warningCount()),i("information",this.informationCount(
)),t},this)}}(jQuery,jQuery.Widget,this,this.fx.resources),function(n,t,i){"use strict";
var r=t.prototype,u="<div class='fxs-drawertaskbar-newbutton'><div class='fxs-drawertaskbar-newbutton-img'><span class='sprite'><\/span><\/div><span class='fxs-drawertaskbar-newbutton-text'><\/span><\/div><div class='fxs-drawertaskbar-commands'><\/div><div class='fxs-drawertaskbar-notifications'><div class='fxs-drawertaskbar-tray'><\/div><div class='fxs-drawertaskbar-help'><a href='#'><span class='sprite'><\/span><\/a><\/div><\/div>";
n.widget("fxs.fxsDrawerTaskbar",t,{options:{newButtonClick:null,trayClick:null,helpClick:
null,class_:i.getClasses("fxs.fxsDrawerTaskbar"),text:i.getStrings("fxs.fxsDrawerTaskbar")},
_viewModel:null,_create:function(){var t=this;this._setViewModel(new n.fxs.fxsDrawerTaskbar.
DrawerTaskbar);this.element.addClass("fxs-drawertaskbar").html(u).find(".fxs-drawertaskbar-newbutton").
fxButton({click:this.options.newButtonClick}).end().find(".fxs-drawertaskbar-newbutton-text").
text(this.options.text.newButton).end().find(".fxs-drawertaskbar-commands").fxsDrawerCommands(
).end().find(".fxs-drawertaskbar-tray").fxsDrawerTray({click:this.options.trayClick,
class_:this.options.class_.tray,text:this.options.text.tray}).end().find(".fxs-drawertaskbar-help").
find("a").attr({title:this.options.text.help}).on("click",function(n){n.preventDefault(
);t.options.helpClick&&t.options.helpClick()}).end().find("span.sprite").addClass(
this.options.class_.help).end().end();this._viewModel.drawerCommands=this.element.
find(".fxs-drawertaskbar-commands").fxsDrawerCommands("getViewModel");this._viewModel.
drawerTray=this.element.find(".fxs-drawertaskbar-tray").fxsDrawerTray("getViewModel");
r._create.call(this)},getViewModel:function(){return this._viewModel},_setViewModel:
function(n){this._viewModel=n},_destroy:function(){this.element.removeClass("fxs-drawertaskbar");
this._super()},_setOption:function(n,t){var i=r._setOption.apply(this,arguments);
switch(n){case"newButtonClick":this.element.find(".fxs-drawertaskbar-newbutton").
fxButton("option","click",t);break;case"trayClick":this.element.find(".fxs-drawertaskbar-tray").
fxsDrawerTray("option","click",t)}return i}});n.fxs.fxsDrawerTaskbar.DrawerTaskbar=
function(){this.drawerCommands=null;this.drawerTray=null}}(jQuery,jQuery.Widget,
this.fx.resources),function(n,t,i,r){"use strict";var s=t.prototype,h="<div class='fxs-drawer-toastbox'><\/div><div class='fxs-drawer-inner'><div class='fxs-drawer-slip'><div class='fxs-drawer-drawertaskbar'><\/div><div class='fxs-drawer-drawermenu'><\/div><div class='fxs-drawer-drawerhelp'><\/div><\/div><\/div>",
c="<div><div class='fxs-drawer-drawerinformation'><\/div><div class='fxs-drawer-drawerwarning'><\/div><div class='fxs-drawer-drawererror'><\/div><div class='fxs-drawer-drawerprogress'><\/div><\/div>",
e="information",o="warning",u="error",f="progress";n.widget("fxs.fxsDrawer",t,{options:
{menuAnimationTaskbarOffset:200,menuAnimationLength:300,notificationOpeningDuringMs:
200,notificationClosingDurationMs:100,autoHideNotificationMs:-1,menuOpen:null,helpOpen:
null,close:null,class_:r.getClasses("fxs.fxsDrawer"),text:r.getStrings("fxs.fxsDrawer")},
_viewModel:null,_subscriptions:null,_drawerMenuWidget:null,_drawerHelpWidget:null,
_taskBarWidget:null,_toastBoxWidget:null,_notificationContainer:null,_progressWidget:
null,_infoWidget:null,_warningWidget:null,_errorWidget:null,_helpUrl:"",_innerDiv:
null,_modalOverlay:null,_taskBarHeight:-1,_drawerMenuHeight:-1,_drawerHelpHeight:
-1,_savedToastBoxOpenedState:!1,_autoHideTimerHandle:null,_autoHideMouseMoveHandler:
null,_autoHideMouseLeaveHandler:null,_autoHideMouseClickHandler:null,_autoHideMouseTrayClickHandler:
null,_create:function(){var i=this,t=new n.fxs.fxsToastBox.ToastBox;this.element.
addClass("fxs-drawer").html(h);this._initialize(t);this._setViewModel(new n.fxs.
fxsDrawer.Drawer(this._drawerMenuWidget.fxsDrawerMenu("getViewModel"),this._taskBarWidget.
fxsDrawerTaskbar("getViewModel"),this._infoWidget.fxsDrawerNotifications("getViewModel"),
this._warningWidget.fxsDrawerNotifications("getViewModel"),this._errorWidget.fxsDrawerNotifications(
"getViewModel"),this._progressWidget.fxsDrawerProgress("getViewModel"),t));this.
_modalOverlay=n("<div/>").addClass("fxs-drawer-modal-overlay").on("click",function(
){i.close()}).appendTo("body");s._create.call(this)},_destroy:function(){this._innerDiv.
stop(!0);this._drawerSlip.stop(!0);this._modalOverlay.remove();this.element.removeClass(
"fxs-drawer fxs-drawer-open fxs-drawer-showmenu fxs-drawer-showhelp");this._destroyWidgets(
);this._unsubscribe();this._super()},openMenu:function(){var t=this,i;this.element.
hasClass("fxs-drawer-open")||(this.element.addClass("fxs-drawer-open fxs-drawer-showmenu"),
this._drawerMenuWidget.removeClass("fxs-drawer-inactive").fxsDrawerMenu("refresh"),
i=DataLab.Features.enableFrictionFreeUserExperienceEnabled()?n(".navbar-wrapper").
height():n(".fxs-headerbar").height(),this._open(n(window).height()-i-10,function(
){t.options.menuOpen&&t.options.menuOpen();t._drawerMenuWidget.fxsDrawerMenu("setToModal")}
))},openHelp:function(){var n=this;this.element.hasClass("fxs-drawer-open")||(this.
element.addClass("fxs-drawer-open fxs-drawer-showhelp"),this._drawerHelpWidget.removeClass(
"fxs-drawer-inactive").fxsDrawerHelp("option","helpUrl",this._helpUrl),this._open(
this._drawerHelpHeight,function(){n.options.helpOpen&&n.options.helpOpen();n._drawerHelpWidget.
fxsDrawerHelp("setToModal")}),this._trigger("openHelp"))},close:function(){this.
element.hasClass("fxs-drawer-open")&&(this.element.removeClass("fxs-drawer-open"),
this.element.hasClass("fxs-drawer-showmenu")?this._closeMenu():this.element.hasClass(
"fxs-drawer-showhelp")&&this._closeHelp(),this._modalOverlay.hide())},selectMenuPath:
function(n){for(var t=this._viewModel.drawerMenu.menu,r,u=n.split("/"),i=0;i<u.length&&
t!==null;i++){if(r=this._findMenuItem(t,u[i]),r.disabled())break;t=r}t&&t.selected&&
t.selected(!0)},setHelpUrl:function(n){this._helpUrl=n;this.element.hasClass("fxs-drawer-showhelp")&&
this._drawerHelpWidget.fxsDrawerHelp("option","helpUrl",this._helpUrl)},getViewModel:
function(){return this._viewModel},_open:function(n,t){var i=this;this._modalOverlay.
show();this._savedToastBoxOpenedState=this._viewModel._toastBox.open();this._viewModel.
_toastBox.open(!1);this._innerDiv.stop(!0).animate({height:n},this.options.menuAnimationLength);
this._drawerSlip.stop(!0).delay(this.options.menuAnimationTaskbarOffset).animate(
{top:-1*this._taskBarHeight},this.options.menuAnimationLength,function(){i._taskBarWidget.
addClass("fxs-drawer-inactive");i._drawerSlip.css("top",0);t()})},_close:function(
n){var t=this;this._drawerSlip.css("top",-1*this._taskBarHeight);this._taskBarWidget.
removeClass("fxs-drawer-inactive");this._innerDiv.stop(!0).animate({height:this.
_taskBarHeight},this.options.menuAnimationLength);this._viewModel._toastBox.open(
this._savedToastBoxOpenedState);this._drawerSlip.stop(!0).delay(this.options.menuAnimationTaskbarOffset).
animate({top:"0"},this.options.menuAnimationLength,function(){n();t.options.close&&
t.options.close()})},_closeMenu:function(){var n=this;this._close(function(){n._drawerMenuWidget.
addClass("fxs-drawer-inactive").fxsDrawerMenu("reset");n.element.removeClass("fxs-drawer-showmenu")}
)},_closeHelp:function(){var n=this;this._close(function(){n._drawerHelpWidget.addClass(
"fxs-drawer-inactive").fxsDrawerHelp("reset");n.element.removeClass("fxs-drawer-showhelp")}
)},_initialize:function(n){this._activateWidgets(n);this._taskBarHeight=this.element.
find(".fxs-drawer-drawertaskbar").height();this._drawerSlip=this.element.find(".fxs-drawer-slip");
this._innerDiv=this.element.find(".fxs-drawer-inner");this._innerDiv.height(this.
_taskBarHeight)},_activateWidgets:function(t){var i=this;this._notificationContainer=
n(c);this._taskBarWidget=this.element.find(".fxs-drawer-drawertaskbar").fxsDrawerTaskbar(
{newButtonClick:function(){i._newButtonClicked.apply(i,arguments)},trayClick:function(
){i._trayButtonClicked.apply(i,arguments)},helpClick:function(){i._helpButtonClicked.
apply(i,arguments)},class_:this.options.class_.taskBar,text:this.options.text.taskBar});
this._drawerMenuWidget=this.element.find(".fxs-drawer-drawermenu").fxsDrawerMenu(
{close:function(){i._closeButtonClicked.apply(i,arguments)},class_:this.options.
class_.menu,text:this.options.text.menu});this._drawerMenuHeight=this._drawerMenuWidget.
height();this._drawerMenuWidget.addClass("fxs-drawer-inactive");this._drawerHelpWidget=
this.element.find(".fxs-drawer-drawerhelp").fxsDrawerHelp({close:function(){i._closeButtonClicked.
apply(i,arguments)},class_:this.options.class_.drawerHelp,text:{title:this.options.
text.help}});this._drawerHelpHeight=this._drawerHelpWidget.height();this._drawerHelpWidget.
addClass("fxs-drawer-inactive");this._infoWidget=this._notificationContainer.find(
".fxs-drawer-drawerinformation").fxsDrawerNotifications();this._warningWidget=this.
_notificationContainer.find(".fxs-drawer-drawerwarning").fxsDrawerNotifications(
);this._errorWidget=this._notificationContainer.find(".fxs-drawer-drawererror").
fxsDrawerNotifications();this._progressWidget=this._notificationContainer.find(".fxs-drawer-drawerprogress").
fxsDrawerProgress({collapse:function(){i._progressCollapseButtonClicked.apply(i,
arguments)},class_:this.options.class_.progress,text:this.options.text.progress});
this._toastBoxWidget=this.element.find(".fxs-drawer-toastbox").fxsToastBox({direction:
"top",openDuration:this.options.notificationOpeningDuringMs,closeDuration:this.options.
notificationClosingDurationMs,data:t});t.content(this._notificationContainer)},_destroyWidgets:
function(){this._taskBarWidget.fxsDrawerTaskbar("destroy");this._drawerMenuWidget.
fxsDrawerMenu("destroy");this._drawerHelpWidget.fxsDrawerHelp("destroy");this._infoWidget.
fxsDrawerNotifications("destroy");this._warningWidget.fxsDrawerNotifications("destroy");
this._errorWidget.fxsDrawerNotifications("destroy");this._progressWidget.fxsDrawerProgress(
"destroy");this._toastBoxWidget.fxsToastBox("destroy")},_findMenuItem:function(n,
t){for(var u=n.menuItems(),r,i=0;i<u.length;i++)if(r=u[i],r.id===t)return r;return null}
,_newButtonClicked:function(){this.openMenu()},_helpButtonClicked:function(){this.
openHelp()},_closeButtonClicked:function(){this.close()},_trayButtonClicked:function(
n,t){var i=this,r=function(n){var t;i._viewModel._toastBox.open()?(t=i._toastBoxWidget.
fxsToastBox("close"),n.hasClass("fxs-drawer-inactive")&&t.done(function(){i._showNotificationWidget(
n)})):i._showNotificationWidget(n)},s=function(n){n.forEach(function(n){var t=n.
fxsNotification("getViewModel");t.detailsShowing(!1)})};switch(t.code){case e:r(
this._infoWidget);s(this._viewModel.informationNotifications());break;case o:r(this.
_warningWidget);s(this._viewModel.warningNotifications());break;case u:r(this._errorWidget);
s(this._viewModel.errorNotifications());break;case f:r(this._progressWidget);this.
_viewModel.progress().forEach(function(n){var t=n.fxsProgressBox("getViewModel");
t.stepDetailsShowing(!1);t.drillDetailsShowing(!1)})}},_progressCollapseButtonClicked:
function(){this._viewModel._drawerTaskBar.drawerTray.pressedButton("");this._viewModel.
_toastBox.open(!1)},_setViewModel:function(n){this._viewModel=n;this._subscribe(
this._viewModel)},_unsubscribe:function(){if(this._subscriptions)while(this._subscriptions.
length)this._subscriptions.splice(0,1)[0].dispose()},_subscribe:function(n){var t=
this;this._subscriptions=this._subscriptions||[];this._unsubscribe();this._subscriptions.
push(n.informationNotifications.subscribe(function(){t._informationNotificationsChanged.
apply(t,arguments)}));this._subscriptions.push(n.warningNotifications.subscribe(
function(){t._warningNotificationsChanged.apply(t,arguments)}));this._subscriptions.
push(n.errorNotifications.subscribe(function(){t._errorNotificationsChanged.apply(
t,arguments)}));this._subscriptions.push(n.progress.subscribe(function(){t._progressNotificationsChanged.
apply(t,arguments)}))},_notificationsChanged:function(n){var t=this,i=function()
{t._toastBoxWidget.fxsToastBox("refresh")};n.forEach(function(n){var t=n.fxsNotification(
"getViewModel");t.drawerSubscribed||(t.detailsShowing.subscribe(i),t.drawerSubscribed=
!0)})},_informationNotificationsChanged:function(n){this._viewModel._drawerTaskBar.
drawerTray.informationCount(n.length);this._notificationsChanged(n);this._viewModel.
_drawerTaskBar.drawerTray.pressedButton()===e&&(n.length?(this._infoWidget.fxsDrawerNotifications(
"refresh"),this._toastBoxWidget.fxsToastBox("refresh")):(this._toastBoxWidget.fxsToastBox(
"close"),this._viewModel._drawerTaskBar.drawerTray.pressedButton("")))},_warningNotificationsChanged:
function(n){this._viewModel._drawerTaskBar.drawerTray.warningCount(n.length);this.
_notificationsChanged(n);this._viewModel._drawerTaskBar.drawerTray.pressedButton(
)===o&&(n.length?(this._warningWidget.fxsDrawerNotifications("refresh"),this._toastBoxWidget.
fxsToastBox("refresh")):(this._toastBoxWidget.fxsToastBox("close"),this._viewModel.
_drawerTaskBar.drawerTray.pressedButton("")))},_errorNotificationsChanged:function(
n){var t=this,i=this._viewModel._drawerTaskBar.drawerTray.pressedButton(),r,f=function(
){t._viewModel._drawerTaskBar.drawerTray.pressedButton(u);t._showNotificationWidget(
t._errorWidget);t._errorWidget.fxsDrawerNotifications("refresh");t._toastBoxWidget.
fxsToastBox("refresh")};this._viewModel._drawerTaskBar.drawerTray.errorCount(n.length);
this._notificationsChanged(n);i===""?f():i!==u?(r=this._toastBoxWidget.fxsToastBox(
"close"),r.done(f)):n.length?(this._errorWidget.fxsDrawerNotifications("refresh"),
this._toastBoxWidget.fxsToastBox("refresh")):(this._toastBoxWidget.fxsToastBox("close"),
this._viewModel._drawerTaskBar.drawerTray.pressedButton(""));t._setupAutoHide()}
,_progressNotificationsChanged:function(n){var t=this,o=this._viewModel._drawerTaskBar.
drawerTray.pressedButton(),r,u=function(){t._viewModel._drawerTaskBar.drawerTray.
progressStatus(t._findProgressOverallStatus(t._viewModel._drawerProgress.progress(
)))},i=function(){t._toastBoxWidget.fxsToastBox("refresh")},e=function(){t._viewModel.
_drawerTaskBar.drawerTray.pressedButton(f);t._showNotificationWidget(t._progressWidget);
t._progressWidget.fxsDrawerProgress("refresh");t._toastBoxWidget.fxsToastBox("refresh")}
;this._viewModel._drawerTaskBar.drawerTray.progressCount(n.length);n.forEach(function(
n){var t=n.fxsProgressBox("getViewModel");t.drawerSubscribed||(t.status.subscribe(
u),t.stepDetailsShowing.subscribe(i),t.drillDetailsShowing.subscribe(i),t.actions.
subscribe(i),t.steps.subscribe(i),t.drawerSubscribed=!0)});u(n);o===""?e():this.
_viewModel._drawerTaskBar.drawerTray.pressedButton()!==f?(r=this._toastBoxWidget.
fxsToastBox("close"),r.done(e)):n.length?(this._progressWidget.fxsDrawerProgress(
"refresh"),this._toastBoxWidget.fxsToastBox("refresh")):(this._toastBoxWidget.fxsToastBox(
"close"),this._viewModel._drawerTaskBar.drawerTray.pressedButton(""));t._setupAutoHide(
)},_findProgressOverallStatus:function(t){var i={active:!1,error:!1,warning:!1};
return t.forEach(function(n){i[n.fxsProgressBox("getViewModel").status()]=!0}),i.
active?i.error?n.fxs.fxsDrawerTray.ProgressStatus.activeWithError:n.fxs.fxsDrawerTray.
ProgressStatus.active:i.error?n.fxs.fxsDrawerTray.ProgressStatus.error:n.fxs.fxsDrawerTray.
ProgressStatus.completed},_showNotificationWidget:function(n){var i=this,t=function(
t){t===n?t.removeClass("fxs-drawer-inactive"):t.addClass("fxs-drawer-inactive")}
;t(this._infoWidget);t(this._warningWidget);t(this._errorWidget);t(this._progressWidget);
this._toastBoxWidget.fxsToastBox("refresh");this._toastBoxWidget.fxsToastBox("open").
done(function(){n.is(":data(fxs-fxsDrawerNotifications)")&&n.fxsDrawerNotifications(
"refresh");n.is(":data(fxs-fxsFxsDrawerProgress)")&&n.fxsDrawerProgress("refresh");
i._toastBoxWidget.fxsToastBox("refresh")})},_setupAutoHide:function(){var n=this,
r=function(){n.options.autoHideNotificationMs>0&&(n._autoHideTimerHandle=i.setTimeout(
f,n.options.autoHideNotificationMs))},u=function(){n._autoHideTimerHandle&&(i.clearTimeout(
n._autoHideTimerHandle),n._autoHideTimerHandle=null)},t=function(){n._autoHideTimerHandle&&
(i.clearTimeout(n._autoHideTimerHandle),n._autoHideTimerHandle=null);n._toastBoxWidget.
off("mousemove",n._autoHideMouseMoveHandle).off("mouseleave",n._autoHideMouseLeaveHandler).
off("click",n._autoHideMouseClickHandler);n._taskBarWidget.find(".fxs-drawertray").
off("click",n._autoHideMouseTrayClickHandler);n._autoHideMouseMoveHandle=null;n.
_autoHideMouseLeaveHandler=null;n._autoHideMouseClickHandler=null;n._autoHideMouseTrayClickHandler=
null},f=function(){t();n._toastBoxWidget.fxsToastBox("close");n._viewModel._drawerTaskBar.
drawerTray.pressedButton("")};t();r();this._toastBoxWidget.on("mousemove",this._autoHideMouseMoveHandler=
function(){u()}).on("mouseleave",this._autoHideMouseLeaveHandler=function(){r()}
).on("click",this._autoHideMouseClickHandler=function(){t()});this._taskBarWidget.
find(".fxs-drawertray").on("click",this._autoHideMouseTrayClickHandler=function(
){t()})}});n.fxs.fxsDrawer.Drawer=function(n,t,i,r,u,f,e){this._drawerMenu=n;this.
_drawerTaskBar=t;this._infoNotifications=i;this._warningNotifications=r;this._errorNotifications=
u;this._drawerProgress=f;this._toastBox=e;this.drawerMenu=this._drawerMenu;this.
globalCommands=this._drawerTaskBar.drawerCommands.globalCommands;this.contextualCommands=
this._drawerTaskBar.drawerCommands.contextualCommands;this.informationNotifications=
this._infoNotifications.notifications;this.warningNotifications=this._warningNotifications.
notifications;this.errorNotifications=this._errorNotifications.notifications;this.
progress=this._drawerProgress.progress}}(jQuery,jQuery.Widget,this,this.fx.resources),
function(n,t){"use strict";function y(t,i){var r=n.extend({},i,{menuOpen:ft});f=
n(t).fxsDrawer(r);u=f.fxsDrawer("getViewModel");Impl.UI.Commands.addListener(e=function(
n,t){n==="ADD"?t.forEach(function(n){u[n.group+"Commands"].splice(u[n.group+"Commands"](
).length,0,n.widget)}):n==="REMOVE"&&t.forEach(function(n){u[n.group+"Commands"].
remove(n.widget)})});Impl.UI.Notifications.Notification.addListener(o=function(n,
t,i){n==="ADD"?u[i+"Notifications"].push(t):n==="REMOVE"&&u[i+"Notifications"].remove(
t)});Impl.UI.Notifications.Progress.addListener(s=function(n,t){n==="ADD"?u.progress.
push(t):n==="REMOVE"&&u.progress.remove(t)})}function p(){e&&(Impl.UI.Commands.removeListener(
e),e=null);o&&(Impl.UI.Notifications.Notification.removeListener(o),o=null);s&&(
Impl.UI.Notifications.Progress.removeListener(s),s=null)}function c(){return u.drawerMenu}
function w(t,i,u){var f,e;switch(i._type){case"container":f=new n.fxs.fxsMenu.ContainerMenuItem(
i._id,i._text,i._image,i._description);f.destroy=function(){for(e=0;e<f.menuItems(
).length;e++)f.menuItems()[e].destroy&&f.menuItems()[e].destroy();u();delete r[t]}
;break;case"quickAdd":f=new n.fxs.fxsMenu.QuickAddMenuItem(i._id,i._text,i._image,
i._description,i._template,i._label,i._data,i._opening,i._open,i._ok,i._close);f.
destroy=function(){u();delete r[t]};break;case"action":f=new n.fxs.fxsMenu.ActionMenuItem(
i._id,i._text,i._image,i._description,i._execute);f.destroy=function(){u();delete
r[t]};break;default:throw"invalid menu item type";}return f&&(f.extension=i._extension,
f.displayOrder=i._displayOrder,f.disabled(i._disabled),f.isPreviewFeature(i._isPreviewFeature)),
f}function b(n,t){n.text()!==t._text&&n.text(t._text);n.image()!==t._image&&n.image(
t._image);n.description()!==t._description&&n.description(t._description);n.disabled(
)!==t._disabled&&n.disabled(t._disabled);n.isPreviewFeature()!==t._isPreviewFeature&&
n.isPreviewFeature(t._isPreviewFeature);switch(t._type){case"container":break;case"quickAdd":
n.extension=t._extension;n.template=t._template;n.label=t._label;n.data=t._data;
break;case"action":break;default:throw"invalid menu item type";}}function l(n){var
u,t=c().menu,f,r,i;if(n)for(u=n.split("/"),r=0;r<u.length;r++){for(f=!1,i=0;i<t.
menuItems().length;i++)if(t.menuItems()[i].id===u[r]){f=!0;t=t.menuItems()[i];break}
if(!f){t=null;break}}return t}function k(i,u,f){var o=i===null,e;if(i=i||t.Utilities.
newGuid(),o){if(u._parentPath&&u._parentPath!==""&&(e=l(u._parentPath),!e))throw"could not find parent menu item";
r[i]=n.extend(w(i,u,f),{handle:i});e?a(e,r[i]):a(c().menu,r[i])}else{if(!r[i])throw"could not find menu item handle";
b(r[i],u)}return i}function d(n){var t=r[n];t&&(t._parent.menuItems.remove(t),t.
destroy())}function g(n,t){t.destroy=function(){for(var r=t.menuItems(),i,n=0;n<
r.length;n++)i=r[n],i.destroy&&i.destroy()};a(n,t)}function a(n,t){n&&n.menuItems&&
(n.menuItems.push(t),n.menuItems.sort(function(n,t){return n.displayOrder-t.displayOrder}
))}function nt(n){var u=t.Utilities.newGuid();return i.holdArgument(n),h.add(n),
r[u]=n,u}function tt(n){var t=r[n];if(!t)throw"could not find callback";h.remove(
t);i.releaseArgument(t)}function it(){f.fxsDrawer("openMenu")}function rt(n){n&&
v(n);f.fxsDrawer("openHelp")}function ut(){f.fxsDrawer("close")}function ft(){h.
fire()}function et(n){f.fxsDrawer("selectMenuPath",n)}function v(n){f.fxsDrawer(
"setHelpUrl",n)}function ot(t){var i=l(t),r,u=[];if(!i)throw"could not find menu item with path: "+
t;return i.menuItems&&(r=i.menuItems(),n.each(r,function(){u.push(this.id)})),u}
function st(n){return l(n)!==null}var r={},f=null,u=null,i=t.Communication.Receiver.
getReceiver(),h=n.Callbacks(),e,o,s;t.Namespace.define("Impl.UI.Drawer",{initialize:
y,destroy:p,getMenuViewModel:c,addMenuItem:g,syncMenuItem:k});i.addMethod("Impl.UI.Drawer.addDrawerOpenedCallback",
nt);i.addMethod("Impl.UI.Drawer.open",it);i.addMethod("Impl.UI.Drawer.openHelp",
rt);i.addMethod("Impl.UI.Drawer.close",ut);i.addMethod("Impl.UI.Drawer.removeDrawerOpenedCallback",
tt);i.addMethod("Impl.UI.Drawer.removeMenuItem",d);i.addMethod("Impl.UI.Drawer.selectMenuPath",
et);i.addMethod("Impl.UI.Drawer.setHelpUrl",v);i.addMethod("Impl.UI.Drawer.Menu.getChildren",
ot);i.addMethod("Impl.UI.Drawer.Menu.exists",st)}(jQuery,Shell),function(n,t,i){
"use strict";function r(n){t("#headerbar").fxsHeaderBar(n)}function u(n){t("#headerbar").
fxsHeaderBar("addControl",n)}i.Namespace.define("Impl.UI.HeaderBar",{initialize:
r,addControl:u})}(this,jQuery,Shell,this.fx.resources),function(n,t){"use strict";
function i(n){var t=n;return t&&(t=t.replace(/[\/#]+$/g,"")),t}t.Namespace.define(
"Impl.UI",{Navigation:{normalizePath:i}})}(this,Shell),function(n,t,i){"use strict";
function u(n,u){var o=!1,s,f;if(r===i||r===null)return n.error("Need to give Shell.Extensions.add some extension(s) to activate.");
for(t.Utilities.isArray(u)||(u=[u],o=!0),f=0,s=u.length;f<s;f++)u[f].id=t.Utilities.
newGuid(),u[f].isActivated=!1,e(u[f]),r[u[f].id]=u[f];return n.complete(o?u[0]:u)}
function f(n){n!==i&&n.id!==i&&r[n.id]!==i&&(r[n.id].isActivated=!0)}function e(
n){return n.templates={},n.templateUris={},n.dataIsLoaded=!1,n.navigationalViewModelPath===
i&&(n.navigationalViewModelPath=""),n.viewModels===i&&(n.viewModels=[]),n.displayOrderHint===
i&&(n.displayOrderHint=9999),n.loadOrderHint===i&&(n.loadOrderHint=9999),n.includeInAllView===
i&&(n.includeInAllView=!0),n.excludeFromNavigation===i&&(n.excludeFromNavigation=
!1),n}function o(t,i){n.cdm.extensionShowCategory(t,i)}var r={};t.extensionIndex||
(t.extensionIndex={});t.extensions||(t.extensions=[]);t.Namespace.define("Impl.Extensions",
{add:u,activate:f,Current:{showCategory:o}})}(this,Shell),function(n,t,i){"use strict";
function k(n,t){return{value:n.id,text:n.displayName,id:n.id,navFilter:n.navFilter,
extensionId:t,image:n.image}}function l(n){return f[n]||(f[n]=[]),f[n]}function a(
n){var r=n.id,t;return e[n.id]===i&&(e[n.id]=!0,n.initializePivots&&n.initializePivots(
),t=u[r],!t||(t.invokeCallback(),delete u[r])),e[n.id]}function v(){return b}function d(
n){v().push(n)}function g(n,t){u[t]===i&&(u[t]=n)}function nt(t,r){var u=l(t),f,
e;u.splice(0,u.length);$.each(r,function(n,r){(r.visible===i||r.visible)&&u.push(
k(r,t))});e=$.grep(n.extensions,function(n){return n.id===t})[0];o&&e.id===o.id&&
(y(e,h),$.isNumeric(s)&&(f=u[s],w(t,f.id,f.navFilter,c)))}function r(n,t){return $.
grep(l(n),function(n){return n.navFilter===t||(n.navFilter===null||n.navFilter===
i)&&(t===null||t===i)})}function tt(n,t){var u=null,i;return n&&(i=r(n,t),i.length>
0&&(u=i[0].id)),u}function it(n,t,i){var e=!1,u,o,f;if(n)for(f=r(n,t),u=0,o=f.length;
u<o;u++)if(i===f[u].id){e=!0;break}return e}function y(n,t){var f,i,u;o=n;h=t;a(
n);i=$("#tabcontainer .fxshell-tabcontainer");u=r(n.id,t);i.is(":data(fxshell-fxshellPivotList)")&&
i.fxshellPivotList("destroy");u.length>0&&(i.fxshellPivotList({panel:$("#tabcontainer .tabcontent"),
values:u,click:rt,change:ut}),f=$(".aux-tabcontent"),f.hide(),p(u.length!==1),f.
show())}function p(n){var t=$(".fxshell-tabcontainer"),i=$(".aux-tabcontent");i.
css("top","");i.css("height","");n?t.removeClass("fxshell-tabcontainer-collapsed"):
t.addClass("fxshell-tabcontainer-collapsed")}function w(n,t,i,u){var e=$.grep(r(
n,i),function(n){return t===n.id}),f;e.length===1&&(f=e[0],u&&$.extend(f,{renderData:
u,navFilter:i}),$("#tabcontainer .fxshell-tabcontainer").fxshellPivotList("option",
"value",f))}function rt(n,i){var r=t.location.hash.substring(1).split("/"),u=r.splice(
0,r.length-1).join("/");t.location.hash="#"+(u?u+"/":"")+i.value.id}function ut(
n,t){ft(t.value.extensionId,t.value,t.value.navFilter,t.value.renderData)}function ft(
n,t,i,u){s=$.inArray(t,r(n,i));c=u;$.each(v(),function(){this.invokeCallback({extensionId:
n,pivotId:t.id,navFilter:i,renderData:u})})}var f={},b=[],u=[],e=[],o,h,s,c;n.Namespace.
define("Impl.UI.Pivots",{ensureExtensionPivotsInitialized:a,setCurrentExtension:
y,updatePivotList:nt,selectPivot:w,setupPivotActivatedListener:d,setupPivotInitializedListener:
g,setVisibility:p,getFirstPivotId:tt,pivotExists:it})}(Shell,this),function(n,t)
{"use strict";function i(n,t,i){i([])}function u(n,t,r,u){i("/SettingService/Get",
n,t,r,u)}function f(n,t,r,u){i("/SettingService/GetByPrefix",n,t,r,u)}function e(
n,t,r,u){i("/SettingService/Update",n,t,r,u)}function o(n,t,r,u){i("/SettingService/Delete",
n,t,r,u)}function s(n,t,r,u){i("/SettingService/DeleteByPrefix",n,t,r,u)}var r;r=
{getUserSettings:u,getUserSettingsByPrefix:f,updateUserSettings:e,deleteUserSettings:
o,deleteUserSettingsByPrefix:s};t.Services.add("configurationService",r)}(Shell,
Impl),function(n,t,i,r,u,f){"use strict";var h=i.prototype,e="fxs-subscriptionpicker-inactive",
s="fxs-subscriptionpicker-expanded",c="fxs-subscriptionpicker-searchactive",o="fxs-subscriptionpicker-checked",
v="fxs-subscriptionpicker-no-selection",l="fxs-subscriptionpicker-pressed",a="__fxs-subscriptionpicker-sub-",
y="<a class='fxs-subscriptionpicker-tray' href='#'><span class='fxs-subscriptionpicker-text' data-bind='text: text.subscriptionFilter'><\/span><img class='fxs-subscriptionpicker-icon' src='' alt='' /><\/a><div class='fxs-subscriptionpicker-dropdown' data-bind='css: { \"fxs-subscriptionpicker-dirty\": data.isDirty() }'><div class='fxs-subscriptionpicker-searchbox'><input type='text' /><img class='fxs-subscriptionpicker-search-icon' data-bind='attr: { src: url.search_off }' alt='' /><\/div><div class='fxs-subscriptionpicker-header fxs-subscription-picker-filtertext' data-bind='text: text.filter'><\/div><div class='fxs-subscriptionpicker-list'><ul><li class='fxs-subscriptionpicker-selectall'><label><div class='fxs-subscriptionpicker-checkbox' data-bind='activateWidget: \"fxTristateCheckBox\", fxcontrol-options: $.extend({}, { url: $root.url.checkbox })'><\/div><div class='fxs-subscriptionpicker-item-text' data-bind='text: text.selectAll'><\/div><\/label><\/li><li class='fxs-subscriptionpicker-noresults'><div class='fxs-subscriptionpicker-item-text' data-bind='text: text.noResults'><\/div><\/li><!-- ko foreach: data.subscriptions --><li data-bind='attr: { \"class\": $root.ctx._getListItemId(id) }, css: { \"fxs-subscriptionpicker-inactive\": !visible(), \""+
o+"\": selected() }'><label><div class='fxs-subscriptionpicker-checkbox' data-bind='activateWidget: \"fxCheckBox\", fxcontrol-options: $.extend({}, { value: selected(), change: $root.ctx._checkBoxChanged, url: $root.url.checkbox })'><\/div><div class='fxs-subscriptionpicker-item-text' data-bind='text: text()'><\/div><\/label><\/li><!-- /ko --><\/ul><\/div><div class='fxs-subscriptionpicker-applybutton'><span class='fxs-subscriptionpicker-apply-text' data-bind='text: text.apply'><\/span><img class='"+
e+" fxs-subscriptionpicker-apply-spinner' data-bind='attr: { src: url.applySpinner }' alt=''><\/div><div class='fxs-subscriptionpicker-actions'><div class='fxs-subscriptionpicker-header fxs-subscriptionpicker-actionsheader' data-bind='text: text.usefulActions'><\/div><div class='fxs-subscriptionpicker-actions-container'><ul data-bind='foreach: data.actions'><li><a class='fxs-subscriptionpicker-action' href='#' data-bind='text: text'><\/a><\/li><\/ul><\/div><\/div><\/div>";
n.widget("fxs.fxsSubscriptionPicker",i,{options:{update:n.noop,subscriptions:null,
animationDurationMs:300,class_:u.getClasses("fxs.fxsSubscriptionPicker"),text:u.
getStrings("fxs.fxsSubscriptionPicker")},_viewModel:null,_subscriptions:null,_originalSubscriptionState:
null,_subscriptionItemSubscriptions:null,_selectedSubscriptionExists:!1,_isDropDownOpening:
!1,_dropDownElement:null,_subscriptionListElement:null,_searchBoxElement:null,_selectAllListItemElement:
null,_selectAllCheckBoxElement:null,_selectAllTextElement:null,_noResultsListItemElement:
null,_searchBoxInputElement:null,_applyButtonElement:null,_globalClickHandler:null,
_create:function(){this.element.addClass("fxs-subscriptionpicker").html(y);this.
_setViewModel(new n.fxs.fxsSubscriptionPicker.SubscriptionPicker);this._initializeControlsAndEventHandlers(
);this._setOption("subscriptions",this.options.subscriptions);this._setOption("actions",
this.options.actions);h._create.call(this)},_destroy:function(){this.element.removeClass(
"fxs-subscriptionpicker").empty();this._unsubscribe();this._destroyGlobalClickHandler(
);this._super()},_initializeControlsAndEventHandlers:function(){var n=this;this.
element.find(".fxs-subscriptionpicker-tray").on("click",function(){n._trayClicked.
apply(n,arguments)});this._dropDownElement=this.element.find(".fxs-subscriptionpicker-dropdown").
addClass(e).on("click",function(){n._onDropDownClick.apply(n,arguments)});this._dropDownElement.
find(".fxs-subscriptionpicker-list ul").on("click","li",function(){n._onSubscriptionListItemClick.
apply(n,arguments)});this._subscriptionListElement=this.element.find(".fxs-subscriptionpicker-list").
fxScrollbar({overlay:!0});this._selectAllListItemElement=this.element.find(".fxs-subscriptionpicker-selectall");
this._selectAllCheckBoxElement=this._selectAllListItemElement.find(".fxs-subscriptionpicker-checkbox").
on("change.fxcontrol",function(){n._selectAllCheckBoxChanged.apply(n,arguments)}
);this._selectAllTextElement=this._selectAllListItemElement.find(".fxs-subscriptionpicker-item-text");
this._noResultsListItemElement=this.element.find(".fxs-subscriptionpicker-noresults").
addClass(e);this._applyButtonElement=this.element.find(".fxs-subscriptionpicker-applybutton").
fxButton({click:function(){n._triggerUpdate.apply(n,arguments)}});this._searchBoxElement=
this.element.find(".fxs-subscriptionpicker-searchbox").on("focusin",function(){n.
_searchBoxElement.addClass(c)}).on("focusout",function(){n._searchBoxInputElement.
val()===""&&n._searchBoxElement.removeClass(c)});this._searchBoxInputElement=this.
_searchBoxElement.find("input").fxTextBox({change:function(){n._onFilter.apply(n,
arguments)}})},_onFilter:function(t,i){var r=i.value.split(" "),u=[],e=function(
n){return n.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},f=!1;n.each(r,
function(n,t){t&&(u.push(new RegExp(e(t),"i")),f=!0)});n.each(this._viewModel.subscriptions(
),function(t,i){var f=!0,e=i.text(),o=i.id;n.each(u,function(n,t){if(r[n]!==o&&!t.
test(e))return f=!1,!1});i.visible(f)});this._setSelectAllBoxState(f);this._subscriptionListElement.
fxScrollbar("refresh")},_onDropDownClick:function(n){var i=ko.dataFor(n.target),
t;i&&i.callback&&(t=i.callback(),t&&typeof t=="function"&&(t(),this._closeDropDownMenu(
)));n.preventDefault();n.stopPropagation()},_setViewModel:function(n){this._viewModel=
n;this._subscribe(this._viewModel);ko.applyBindings({data:this._viewModel,class_:
this.options.class_,text:this.options.text,ctx:this},this.element[0])},_getListItemId:
function(n){return a+n},_setOption:function(n,t){var i=h._setOption.apply(this,arguments);
switch(n){case"subscriptions":this._setSubscriptions(t);break;case"actions":this.
_setActions(t)}return i},_clearDirty:function(){this._viewModel._isDirty(!1);this.
_applyButtonElement.removeClass(l);this._setSelectAllBoxState(!1)},_setSubscriptions:
function(t){var u=this,i=[],r=!1;this._originalSubscriptionState={};t&&(n.each(t,
function(t,f){var e=f;typeof f!="fxs.fxsSubscriptionPicker.Subscription"&&(e=new
n.fxs.fxsSubscriptionPicker.Subscription(f.id,f.text,f.selected));u._originalSubscriptionState[
e.id]=e.selected();e.selected()||(r=!0);i.push(e)}),this._viewModel.subscriptions.
splice(0,this._viewModel.subscriptions().length),ko.utils.arrayPushAll(this._viewModel.
subscriptions,i),r?this.element.find(".fxs-subscriptionpicker-icon").attr({src:this.
options.url.filter_on}):this.element.find(".fxs-subscriptionpicker-icon").attr({
src:this.options.url.filter_off}),this._clearDirty())},_restoreOriginalState:function(
){var t=this;n.each(this._viewModel.subscriptions(),function(n,i){var r=t._originalSubscriptionState[
i.id];r!==f&&i.selected(r)});this._clearDirty()},_setActions:function(t){var i=[
];t&&(n.each(t,function(t,r){var u=r;typeof r!="fxs.fxsSubscriptionPicker.Action"&&
(u=new n.fxs.fxsSubscriptionPicker.Action(r.text,r.callback));i.push(u)}),this._viewModel.
actions.splice(0,this._viewModel.actions.length),ko.utils.arrayPushAll(this._viewModel.
actions,i))},_setSelectAllBoxState:function(t){var u=this,c=this._viewModel.subscriptions(
),f=!1,s=!0,h=!0,r,i;this._selectedSubscriptionExists=!1;n.each(c,function(n,t){
t.visible()?(f=!0,t.selected()?(h=!1,u._selectedSubscriptionExists=!0):s=!1):t.selected(
)&&(u._selectedSubscriptionExists=!0)});t?r=this.options.text.selectAllSearchResults:
t===!1&&(r=this.options.text.selectAll);s?(i=n.fx.fxTristateCheckBox.Values.checked,
this._selectAllListItemElement.addClass(o)):h?(i=n.fx.fxTristateCheckBox.Values.
unchecked,this._selectAllListItemElement.removeClass(o)):(i=n.fx.fxTristateCheckBox.
Values.indeterminate,this._selectAllListItemElement.addClass(o));f?(this._noResultsListItemElement.
addClass(e),this._selectAllListItemElement.removeClass(e),this._selectAllCheckBoxElement.
fxTristateCheckBox("option","value",i),this._selectAllTextElement.text(r)):(this.
_selectAllListItemElement.addClass(e),this._noResultsListItemElement.removeClass(
e));this._dropDownElement.toggleClass(v,!this._selectedSubscriptionExists)},_subscribe:
function(n){var t=this;this._unsubscribe();this._subscriptions=[];this._subscriptions.
push(n.subscriptions.subscribe(function(n){t._subscriptionListChanged.call(t,n)}
))},_subscriptionListChanged:function(t){var i=this;this._unsubscribeFromSubscriptionItems(
);this._subscriptionItemSubscriptions=[];n.each(t,function(){var t=this,r=i._originalSubscriptionState[
t.id];r===f&&(i._originalSubscriptionState[t.id]=t.selected());i._subscriptionItemSubscriptions.
push(t.selected.subscribe(function(r){var u=i.element.find("."+a+t.id+" .fx-checkbox"),
e=!1;if(u.length!==1)throw"subscription id is invalid";u.fxCheckBox("value")!==r&&
u.fxCheckBox("option","value",r);i._setSelectAllBoxState();n.each(i._viewModel.subscriptions(
),function(n,t){var r=i._originalSubscriptionState[t.id];if(r===f)throw"missing original state of subscription "+
t.id;if(r!==t.selected())return e=!0,!1});i._viewModel._isDirty(e)}))})},_unsubscribe:
function(){if(this._unsubscribeFromSubscriptionItems(),this._subscriptions)while(
this._subscriptions.length)this._subscriptions.splice(0,1)[0].dispose()},_unsubscribeFromSubscriptionItems:
function(){if(this._subscriptionItemSubscriptions)while(this._subscriptionItemSubscriptions.
length)this._subscriptionItemSubscriptions.splice(0,1)[0].dispose()},_onSubscriptionListItemClick:
function(t){var r=ko.dataFor(t.target),i;r&&r.selected?(i=n(t.target).parents("li").
eq(0).find(".fx-checkbox"),i.length!==1||i[0]===t.target||n.contains(i[0],t.target)||
r.selected(!r.selected())):(i=n(t.target).parents("li").eq(0).find(".fx-tristatecheckbox"),
i.length!==1||i[0]===t.target||n.contains(i[0],t.target)||i.fxTristateCheckBox("toggle"))}
,_checkBoxChanged:function(t,i){var r=ko.dataFor(t.target),u=n(t.target).parent(
"li");u.toggleClass(o,r.selected());r.selected()!==i.value&&r.selected(i.value)}
,_selectAllCheckBoxChanged:function(t,i){var r=null;i.value===n.fx.fxTristateCheckBox.
Values.checked?r=!0:i.value===n.fx.fxTristateCheckBox.Values.unchecked&&(r=!1);r!==
null&&n.each(this._viewModel.subscriptions(),function(n,t){t.visible()&&t.selected(
)!==r&&t.selected(r)})},_triggerUpdate:function(){var n;this._selectedSubscriptionExists&&
this._viewModel.isDirty()&&(n=this._getSubscriptionObjects(),this._applyButtonElement.
addClass(l),this._trigger("update",null,{subscriptions:n}))},_getSubscriptionObjects:
function(){var t=[];return n.each(this._viewModel.subscriptions(),function(n,i){
t.push({id:i.id,text:i.text(),selected:i.selected()})}),t},_trayClicked:function(
t){var i=this;if(!this.element.hasClass(s)){this.element.addClass(s);this._dropDownElement.
slideDown(this.options.animationDurationMs).removeClass(e);this._isDropDownOpening=
!0;this._destroyGlobalClickHandler();n("body").on("click",this._globalClickHandler=
function(){i._closeDropDownMenu.apply(i,arguments)});this._subscriptionListElement.
fxScrollbar("refresh")}t.preventDefault()},_closeDropDownMenu:function(){var n=this;
this._isDropDownOpening?this._isDropDownOpening=!1:(this.element.removeClass(s),
this._dropDownElement.slideUp(this.options.animationDurationMs,function(){n._restoreOriginalState(
)}).addClass(e),this._destroyGlobalClickHandler())},_destroyGlobalClickHandler:function(
){this._globalClickHandler&&(n("body").off("click",this._globalClickHandler),this.
_globalClickHandler=null)}});n.fxs.fxsSubscriptionPicker.SubscriptionPicker=r.Class.
define(function(){var n=this;this._isDirty=ko.observable(!1);this.subscriptions=
ko.observableArray();this.actions=ko.observableArray();this.isDirty=ko.computed(
{read:function(){return n._isDirty()}})});n.fxs.fxsSubscriptionPicker.Subscription=
r.Class.define(function(n,t,i){var r=!0;typeof i=="boolean"&&(r=i);this.id=n||"";
this.selected=ko.observable(r);this.text=ko.observable(t||"");this.visible=ko.observable(
!0)});n.fxs.fxsSubscriptionPicker.Action=r.Class.define(function(n,t){this.text=
n||"";this.callback=ko.observable(t||null)})}(jQuery,this,jQuery.Widget,Shell,this.
fx.resources)