(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{483:function(n,e,t){var content=t(504);"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(7).default)("43fa8cd6",content,!0,{sourceMap:!1})},503:function(n,e,t){"use strict";t(483)},504:function(n,e,t){(e=t(6)(!1)).push([n.i,".get-started p[data-v-7ec7b1f0]{margin:15px 0}@media screen and (max-width:1024px){.get-started__container[data-v-7ec7b1f0]{flex-direction:column}.get-started__item[data-v-7ec7b1f0]{padding:0;border:none}}",""]),n.exports=e},546:function(n,e,t){"use strict";t.r(e);var o={name:"GetStarted",layout:"documentation"},r=(t(503),t(1)),component=Object(r.a)(o,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"get-started"},[t("div",{staticClass:"get-started__header maz-flex maz-space-between maz-align-center"},[t("h2",[n._v("\n        Get Started\n      ")]),n._v(" "),t("MazBtn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:{el:"#allComponents",container:".documentation__container"},expression:"{\n          el: '#allComponents',\n          container: '.documentation__container'\n        }"}],attrs:{href:"#allComponents"}},[n._v("\n        List of all components\n      ")])],1),n._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),n._v(" "),t("h3",[n._v("Install maz-ui")]),n._v(" "),t("CodeContainer",{staticClass:"maz-my-4",attrs:{code:"npm i maz-ui -S\n\n/*\n * or yarn add maz-ui\n */"}}),n._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-mb-5"}),n._v(" "),t("h3",{staticClass:"maz-mb-2"},[n._v("\n      On demand\n    ")]),n._v(" "),t("h4",[n._v("\n      Import only the components you need\n    ")]),n._v(" "),n._m(0),n._v(" "),t("p",[n._v("First, install babel-plugin-component:")]),n._v(" "),t("CodeContainer",{attrs:{code:"npm install babel-plugin-component -D\n\n/*\n * or yarn add babel-plugin-component -D\n */"}}),n._v(" "),t("h4",[n._v("\n      Babel config\n    ")]),n._v(" "),t("CodeContainer",{attrs:{code:"// .babelrc\n\n{\n  plugins: [\n    [\n      'component', {\n        libraryName: 'maz-ui',\n        styleLibraryName: 'css'\n      }\n    ]\n  ]\n}"}}),n._v(" "),t("h4",[n._v("\n      Nuxt.JS babel config\n    ")]),n._v(" "),t("CodeContainer",{attrs:{code:"// nuxt.config.js\n\nmodule.exports = {\n  plugins: [\n    ...\n    './plugins/maz-ui'\n    ...\n  ],\n  build: {\n    babel: {\n      plugins: [\n        [\n          'component', {\n            libraryName: 'maz-ui',\n            styleLibraryName: 'css'\n          }\n        ]\n      ]\n    }\n  }\n}"}}),n._v(" "),t("h4",[n._v("\n      Now import component as you want\n    ")]),n._v(" "),t("CodeContainer",{attrs:{code:"/*\n* main.js\n* ./plugin/maz-ui/index.js for Nuxt.JS\n*/\n\nimport Vue from 'vue'\nimport { MazBtn, MazInput } from 'maz-ui'\n\nVue.use(MazBtn)\nVue.use(MazInput)\n\n/* or\n * Vue.component(MazBtn.name, MazBtn)\n * Vue.component(MazInput.name, MazInput)\n */"}}),n._v(" "),t("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"allComponents"}}),n._v(" "),t("h3",{staticClass:"maz-mb-0"},[n._v("\n      All components you can import\n    ")]),n._v(" "),t("CodeContainer",{attrs:{code:"import Vue from 'vue'\nimport {\n  MazAvatar,\n  MazBottomSheet,\n  MazBtn,\n  MazBtnGroup,\n  MazCheckbox,\n  MazCollapse,\n  MazDialog,\n  MazDraggableList,\n  MazDropdown\n  MazDropzone,\n  MazFlex,\n  MazImg,\n  MazInput,\n  MazInputTags,\n  MazList,\n  MazListItem,\n  MazLoader,\n  MazPagination,\n  MazPicker,\n  MazPlotly,\n  MazProgressBar,\n  MazPhoneNumberInput,\n  MazRadio,\n  MazReadMore,\n  MazResponsiveMenu,\n  MazSearch,\n  MazSelect,\n  MazSlider,\n  MazSidebar,\n  MazSpinner,\n  MazStepper,\n  MazSwitch,\n  MazTabsBar,\n  MazTabsContent,\n  MazTabsContentItem,\n  MazTransitionExpand,\n} from 'maz-ui'\n\nVue.use(MazAvatar)\nVue.use(MazBottomSheet)\nVue.use(MazBtn)\nVue.use(MazBtnGroup)\nVue.use(MazCheckbox)\nVue.use(MazCollapse)\nVue.use(MazDialog)\nVue.use(MazDraggableList)\nVue.use(MazDropdown)\nVue.use(MazDropzone)\nVue.use(MazFlex)\nVue.use(MazImg)\nVue.use(MazInput)\nVue.use(MazInputTags)\nVue.use(MazList)\nVue.use(MazListItem)\nVue.use(MazLoader)\nVue.use(MazPagination)\nVue.use(MazPicker)\nVue.use(MazPlotly)\nVue.use(MazProgressBar)\nVue.use(MazPhoneNumberInput)\nVue.use(MazRadio)\nVue.use(MazReadMore)\nVue.use(MazResponsiveMenu)\nVue.use(MazSearch)\nVue.use(MazSelect)\nVue.use(MazSlider)\nVue.use(MazSidebar)\nVue.use(MazSpinner)\nVue.use(MazStepper)\nVue.use(MazSwitch)\nVue.use(MazTabsBar)\nVue.use(MazTabsContent)\nVue.use(MazTabsContentItem)\nVue.use(MazTransitionExpand)"}})],1)}),[function(){var n=this.$createElement,e=this._self._c||n;return e("p",[this._v("\n      With the help of "),e("a",{attrs:{href:"https://www.npmjs.com/package/babel-plugin-component"}},[e("strong",[this._v("babel-plugin-component")])]),this._v(", we can import components we\n      actually need, making the project smaller than otherwise.\n    ")])}],!1,null,"7ec7b1f0",null);e.default=component.exports}}]);