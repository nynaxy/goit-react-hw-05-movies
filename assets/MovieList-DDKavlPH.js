import{g as y,a as u,j as p,L as m}from"./index-0sw0aZkz.js";var n={exports:{}},l="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",h=l,T=h;function a(){}function i(){}i.resetWarningCache=a;var f=function(){function e(x,g,v,P,O,c){if(c!==T){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}e.isRequired=e;function r(){return e}var t={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:i,resetWarningCache:a};return t.PropTypes=t,t};n.exports=f();var d=n.exports;const o=y(d),R=({movies:e})=>{const r=u();return p.jsx("ul",{children:e.map(t=>p.jsx("li",{children:p.jsx(m,{to:`/movies/${t.id}`,state:{from:r},children:t.title})},t.id))})};R.propTypes={movies:o.arrayOf(o.shape({id:o.number.isRequired,title:o.string.isRequired})).isRequired};export{R as M};
