(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{574:function(l,e,r){"use strict";r.r(e);var n={name:"MazSliderDoc",data:function(){return{slider:50,multipleSilders:[25,50,75],multipleSildersLabels:["Small","Middle","Big"],logSilders:[100,1e3,1e4,4e4],logSildersLabels:["Micro","Small","Middle","Big"]}}},t=r(1),component=Object(t.a)(n,(function(){var l=this,e=l.$createElement,r=l._self._c||e;return r("div",{staticClass:"maz-slider-doc"},[r("ComponentContainer",{attrs:{code:'<template>\n  <MazSlider\n    v-model="slider"\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        slider: 50\n      }\n    }\n  }\n<\/script>'}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        Basic\n      ")]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("MazSlider",{model:{value:l.slider,callback:function(e){l.slider=e},expression:"slider"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.slider)+"\n    ")],1),l._v(" "),r("ComponentContainer",{attrs:{code:"<template>\n  <MazSlider\n    v-model=\"multipleSilders\"\n    :labels=\"multipleSildersLabels\"\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        multipleSilders: [25, 50, 75],\n        multipleSildersLabels: ['Small', 'Middle', 'Big']\n      }\n    }\n  }\n<\/script>"}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        Multiple values\n      ")]),l._v(" "),r("h5",[l._v("\n        With labels\n      ")]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.multipleSilders)+"\n    ")],1),l._v(" "),r("ComponentContainer",{attrs:{code:"<template>\n  <MazSlider\n    v-model=\"multipleSilders\"\n    :labels=\"multipleSildersLabels\"\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        multipleSilders: [25, 50, 75],\n        multipleSildersLabels: ['Small', 'Middle', 'Big']\n      }\n    }\n  }\n<\/script>"}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        Size & colors\n      ")]),l._v(" "),r("h5",[l._v('\n        Default: color="primary" size="8"\n      ')]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v("\n        Default\n      ")]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v('\n        color="secondary"\n        :size="2"\n      ')]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,color:"secondary",size:2},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v('\n        color="third"\n        :size="4"\n      ')]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,color:"third",size:4},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v('\n        color="warning"\n        :size="6"\n      ')]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,color:"warning",size:6},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v('\n        color="danger"\n        :size="10"\n      ')]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,color:"danger",size:10},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("h5",[l._v('\n        color="success"\n        :size="12"\n      ')]),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,color:"success",size:12},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.multipleSilders)+"\n    ")],1),l._v(" "),r("ComponentContainer",{attrs:{code:"<template>\n  <MazSlider\n    v-model=\"logSilders\"\n    logs\n    :labels=\"logSildersLabels\"\n    :min=\"50\"\n    :max=\"50000\"\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        logSilders: [50, 10000, 30000, 45000],\n        logSildersLabels: ['Micro', 'Small', 'Middle', 'Big']\n      }\n    }\n  }\n<\/script>"}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        Logarithmic/exponential slider\n      ")]),l._v(" "),r("h5",[l._v("\n        With min & max values (50, 50000)\n      ")]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("MazSlider",{attrs:{log:"",labels:l.logSildersLabels,min:50,max:5e4},model:{value:l.logSilders,callback:function(e){l.logSilders=e},expression:"logSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.logSilders)+"\n    ")],1),l._v(" "),r("ComponentContainer",{attrs:{code:'<template>\n  <MazSlider\n    v-model="multipleSilders"\n    no-divider\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        multipleSilders: [25, 50, 75]\n      }\n    }\n  }\n<\/script>'}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        No-divider: No differents colors between cursors\n      ")]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("MazSlider",{attrs:{"no-divider":""},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.multipleSilders)+"\n    ")],1),l._v(" "),r("ComponentContainer",{attrs:{code:'<template>\n  <MazSlider\n    v-model="multipleSilders"\n    no-divider\n  />\n  </div>\n</template>\n\n<script>\n  export default {\n    data () {\n      return {\n        multipleSilders: [25, 50, 75]\n      }\n    }\n  }\n<\/script>'}},[r("h4",{staticClass:"maz-mb-3"},[l._v("\n        No-zoom-animation: Disables cursor animation when active\n      ")]),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("MazSlider",{attrs:{labels:l.multipleSildersLabels,"no-cursor-anim":""},model:{value:l.multipleSilders,callback:function(e){l.multipleSilders=e},expression:"multipleSilders"}}),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5"}),l._v(" "),r("strong",[l._v("\n        v-model:\n      ")]),l._v("\n      "+l._s(l.multipleSilders)+"\n    ")],1),l._v(" "),r("hr",{staticClass:"maz-border-top maz-border-solid maz-border-color maz-my-5",attrs:{id:"howToUseIt"}}),l._v(" "),r("h4",[l._v("\n      How to use it ?\n    ")]),l._v(" "),r("CodeContainer",{attrs:{language:"html",code:"<template>\n  <MazSlider\n    v-model=\"slider\"\n  />\n  </div>\n</template>\n\n<script>\n  import { MazSlider } from 'maz-ui'\n  export default {\n    components: { MazSlider },\n    data () {\n      return {\n        slider: 50\n      }\n    }\n  }\n<\/script>"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);