"use strict";(self.webpackChunkvoeentech_frontend=self.webpackChunkvoeentech_frontend||[]).push([[802],{6371:function(e,t,a){var l=a(7294),c=a(5444),r=a(2359);t.Z=function(e){var t=e.image,a=e.className,m=e.alt,n=(0,c.useStaticQuery)("3321044848");return t?l.createElement(r.G,{alt:m,className:a,image:(0,r.d)(t.localFile)}):l.createElement(r.G,{className:a,image:(0,r.d)(n.cloudBaseGlobal.placeHolder.localFile),alt:"Placeholder Image"})}},6628:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),c=a(5444),r=function(e){var t=e.children;return l.createElement("div",{className:"mb-5 shadow-lg bg-white rounded-md"},t)},m=a(6371),n=function(e){var t=e.products,a=e.gridCols;return l.createElement("div",{className:"grid "+a+" gap-6"},t.map((function(e){return l.createElement(r,{key:e.id},l.createElement(c.Link,{to:"/products/"+e.slug,key:e.id},l.createElement(m.Z,{alt:"Product Image",className:"rounded-t-md border-gray-200\t border-b",image:e.image}),l.createElement("div",{className:"px-4 py-6"},l.createElement("p",null,e.title))))})))};n.defaultProps={gridCols:"grid-cols-2 md:grid-cols-3 lg:grid-cols-4"};var s=n},9864:function(e,t,a){a.r(t);var l=a(7294),c=a(4248),r=a.n(c),m=a(967),n=a(6628),s=a(3751),i=a(6371);t.default=function(e){var t=e.data.cloudBaseProduct,a={title:t.title,shareImage:t.image},c=t.specifications.length>0?"between":"center";return l.createElement(m.Z,null,l.createElement(s.Z,{seo:a}),l.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-24 mt-4"},t.image&&l.createElement("div",{className:"md:col-span-2 md:pr-4"},l.createElement(i.Z,{className:"rounded-md",image:t.image,alt:"Product Image"})),l.createElement("div",{className:"flex flex-col justify-"+c},l.createElement("div",{className:"mb-4"},l.createElement("h1",{className:"text-4xl mb-1"},t.title)),l.createElement("div",{className:"w-full"},t.specifications&&l.createElement("h2",{className:"text-xl mb-1 border-b mb-2"},"Specifications"),t.specifications&&t.specifications.map((function(e,t){return l.createElement("div",{className:"w-full flex text-sm justify-between items-between border-b mb-2 pb-1",key:e+"-"+t},l.createElement("span",{className:"font-extralight"},e.split(/[:：]/)[0]),l.createElement("span",null,e.split(/[:：]/)[1]))}))))),l.createElement("div",{className:"my-6 mb-24"},l.createElement("h1",{className:"text-4xl font-bold text-center"},"Product Description"),l.createElement("hr",{className:"mt-6 mb-12 m-auto w-24 border-t-4"}),l.createElement(r(),{className:"prose md:w-4/5 m-auto",children:t.description})),t.relatedProducts.length>0&&l.createElement("div",{className:"flex flex-col my-6 mb-24"},l.createElement("h2",{className:"text-3xl font-bold text-center"},"Related Products"),l.createElement("hr",{className:"mt-6 mb-12 m-auto w-24 border-t-4"}),l.createElement(n.Z,{products:t.relatedProducts})))}}}]);
//# sourceMappingURL=component---src-pages-products-cloud-base-product-slug-js-d4128264298bacb49e19.js.map