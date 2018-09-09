/**
 * skylark-utils-math - The math features enhancement for skylark utils.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.1
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){function i(t,n){if("."!==t[0])return t;var i=n.split("/"),r=t.split("/");i.pop();for(var e=0;e<r.length;e++)"."!=r[e]&&(".."==r[e]?i.pop():i.push(r[e]));return i.join("/")}var r=n.define,e=n.require,s="function"==typeof r&&r.amd,h=!s&&"undefined"!=typeof exports;if(!s&&!r){var a={};r=n.define=function(t,n,r){"function"==typeof r?(a[t]={factory:r,deps:n.map(function(n){return i(n,t)}),exports:null},e(t)):a[t]=r},e=n.require=function(t){if(!a.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var n=a[t];if(!n.exports){var i=[];n.deps.forEach(function(t){i.push(e(t))}),n.exports=n.factory.apply(window,i)}return n.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(t(r,e),!s){var o=e("skylark-utils-interact/main");h?exports=o:n.skylarkjs=o}}(function(t,n){t("skylark-utils/skylark",["skylark-langx/skylark"],function(t){return t}),t("skylark-utils/langx",["skylark-langx/langx"],function(t){return t}),t("skylark-utils-math/math",["skylark-utils/skylark","skylark-utils/langx"],function(t,n){var i=t.math={log2:function(t){for(var n=1,i=0;t>n;)n<<=1,i++;return i}};return n.mixin(i,Math),i}),t("skylark-utils-math/Geometry",["skylark-langx/langx","./math"],function(t,n){var i=n.Geometry=t.klass({klassName:"Geometry"});return i}),t("skylark-utils-math/Point",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.Point=i.inherit({klassName:"Point",x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},clone:function(){var t=this._;return new r(t.x,t.y)},move:function(t,n){var i=this._;return new r(i.x+t,i.y+n)},notEqual:function(t){var n=this._;return!t||t.x!=n.x||t.y!=n.y},equal:function(t){return!this.notEqual(t)},init:function(t,n){var i=this._={};i.x=t||0,i.y=n||0}});return r.fromString=function(t){var n=t.split(",");return new r(parseFloat(n[0]),parseFloat(n[1]))},r.fromPlain=function(t){return new r(t.x,t.y)},r.fromArray=function(t){return new r(t[0],t[1])},r.Zero=new r(0,0),r}),t("skylark-utils-math/Arrow",["skylark-langx/langx","./math","./Geometry","./Point"],function(t,n,i,r){var e={left:1,top:2,right:3,bottom:4},s=n.Arrow=i.inherit({klassName:"Arrow",bounds:{get:function(){var t=this._,n={x:t.x,y:this.y,width:t.width,height:t.height};return n}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},width:{get:function(){return this._.width}},height:{get:function(){return this._.height}},direction:{get:function(){return this._.direction}},leftTop:{get:function(){var t=this._;return new r(t.x,t.y)}},leftBottom:{get:function(){var t=this._;return new r(t.x,t.y+t.height)}},rightTop:{get:function(){var t=this._;return new r(t.x+t.width,t.y)}},rightBottom:{get:function(){var t=this._;return new r(t.x+t.width,t.y+t.height)}},move:function(t,n){var i=this._;return new s(i.x+t,i.y+n,i.width,i.height,i.direction)},containPoint:function(t,n){if(void 0===n){var i=t;t=i.x,n=i.y}var r=this._;return t>=r.x&&t<r.x+r.width&&n>=r.y&&n<r.y+r.height},init:function(t,n,i,r,s){var h=this._={};h.x=t||0,h.y=n||0,h.width=i||0,h.height=r||0,h.direction=s||e.top}});return s.Direction=e,s}),t("skylark-utils-math/Circle",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.Circle=i.inherit({klassName:"Circle",bounds:{get:function(){var t=this._,n={x:t.cx-t.r,y:t.cy-t.r,width:2*t.r,height:2*t.r};return n}},cx:{get:function(){return this._.cx}},cy:{get:function(){return this._.cy}},r:{get:function(){return this._.r}},move:function(t,n){var i=this._;return new r(i.cx+t,i.cy+n,i.r)},containPoint:function(t,n){if(void 0===n){var i=t;t=i.x,n=i.y}var r=this._,e=(t-r.x)*(t-r.x)+(n-r.y)*(n-r.y);return e<r.r*r.r},init:function(t,n,i){var r=this._={};r.cx=t||0,r.cy=n||0,r.r=i||0}});return r}),t("skylark-utils-math/Ellipse",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.Ellipse=i.inherit({klassName:"Ellipse",bounds:{get:function(){var t=this._,n={x:t.cx-t.rx,y:t.cy-t.ry,width:2*t.rx,height:2*t.ry};return n}},cx:{get:function(){return this._.cx}},cy:{get:function(){return this._.cy}},rx:{get:function(){return this._.rx}},ry:{get:function(){return this._.ry}},move:function(t,n){var i=this._;return new r(i.cx+t,i.cy+n,i.rx,i.ry)},containPoint:function(t){},init:function(t,n,i,r){var e=this._={};e.cx=t||0,e.cy=n||0,e.rx=i||0,e.ry=r||0}});return r}),t("skylark-utils-math/Line",["skylark-langx/langx","./math","./Geometry","./Point"],function(t,n,i,r){var e=n.Line=i.inherit({klassName:"Line",bounds:{get:function(){var t=this._,n={x:Math.min(t.x1,t.x2),y:Math.min(t.y1,t.y2),width:Math.abs(t.x2-t.x1),height:Math.abs(t.y2-t.y1)};return n}},x1:{get:function(){return this._.x1}},y1:{get:function(){return this._.y1}},x2:{get:function(){return this._.x2}},y2:{get:function(){return this._.y2}},startPoint:{get:function(){var t=this._;return new r(t.x1,t.y1)}},endPointer:{get:function(){var t=this._;return new r(t.x2,t.y2)}},move:function(t,n){var i=this._;return new e(i.x1+t,i.y1+n,i.x2+t,i.y2+n)},containPoint:function(t,n){if(void 0===n){var i=t;t=i.x,n=i.y}var r=this._;return Math.abs((n-r.y1)*(r.x2-r.x1)-(r.y2-r.y1)*(t-r.x1))<1e-6},init:function(t,n,i,r){var e=this._={};e.x1=t||0,e.y1=n||0,e.x2=i||0,e.y2=r||0}});return e}),t("skylark-utils-math/Polyline",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.Polyline=i.inherit({klassName:"Polyline",bounds:{get:function(){for(var t=this._,n=t.points,i=n.length,r=n[0],e={l:r.x,t:r.y,r:r.x,b:r.y},s=1;s<i;++s)r=n[s],e.l>r.x&&(e.l=r.x),e.r<r.x&&(e.r=r.x),e.t>r.y&&(e.t=r.y),e.b<r.y&&(e.b=r.y);var h={x:e.l,y:e.t,width:e.r-e.l,height:e.b-e.t};return h}},points:{get:function(){return this._.points}},init:function(t){var n=this._={};n.points=t?t:[]}});return r}),t("skylark-utils-math/PolyStar",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.PolyStar=i.inherit({klassName:"PolyStar",bounds:{get:function(){var t=this._,n=t.points,i=n.length,r=n[0];bbox={l:r.x,t:r.y,r:r.x,b:r.y};for(var e=1;e<i;++e)r=n[e],bbox.l>r.x&&(bbox.l=r.x),bbox.r<r.x&&(bbox.r=r.x),bbox.t>r.y&&(bbox.t=r.y),bbox.b<r.y&&(bbox.b=r.y);var s={x:bbox.l,y:bbox.t,width:bbox.r-bbox.l,height:bbox.b-bbox.t};return s}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},radius:{get:function(){return this._.radius}},sides:{get:function(){return this._.sides}},pointSize:{get:function(){return this._.pointSize}},angle:{get:function(){return this._.angle}},init:function(t,n,i,r,e,s){var h=this._;h.x=t,h.y=n,h.radius=i,h.sides=r,h.pointSize=e,h.angle=s}});return r}),t("skylark-utils-math/Size",["skylark-langx/langx","./math","./Geometry"],function(t,n,i){var r=n.Size=i.inherit({klassName:"Size",width:{get:function(){return this._.width}},height:{get:function(){return this._.height}},clone:function(){var t=this._;return new r(t.width,t.height)},toArray:function(){return[this.width,this.height]},toPlain:function(){return{width:this.width,height:this.height}},toString:function(){return this.width+","+this.height},init:function(t,n){var i=this._={};i.width=t||0,i.height=n||0}});return r.fromString=function(t){var n=t.split(",");return new r(parseFloat(n[0]),parseFloat(n[1]))},r.fromPlain=function(t){return new r(t.w||t.width,t.h||t.height)},r.fromArray=function(t){return new r(t[0],t[1])},r.Zero=new r(0,0),r}),t("skylark-utils-math/Rect",["skylark-langx/langx","./math","./Geometry","./Point","./Size"],function(t,n,i,r,e){var s=n.Rect=i.inherit({klassName:"Rect",bounds:{get:function(){var t=this._,n={x:t.x,y:this.y,width:t.width,height:t.height};return n}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},width:{get:function(){return this._.width}},height:{get:function(){return this._.height}},radius:{get:function(){return this._.radius}},leftTop:{get:function(){var t=this._;return new r(t.x,t.y)}},leftBottom:{get:function(){var t=this._;return new r(t.x,t.y+t.height)}},rightTop:{get:function(){var t=this._;return new r(t.x+t.width,t.y)}},rightBottom:{get:function(){var t=this._;return new r(t.x+t.width,t.y+t.height)}},size:{get:function(){var t=this._;return new e(t.width,t.height)}},move:function(t,n){var i=this._;return new s(i.x+t,i.y+n,i.width,i.height,i.radius)},containPoint:function(t,n){if(void 0===n){var i=t;t=i.x,n=i.y}var r=this._;return t>=r.x&&t<r.x+r.width&&n>=r.y&&n<r.y+r.height},isEmpty:function(){return this.width<=0||this.height<=0},notEqual:function(t){return!t||t.x!=this.x||t.y!=this.y||t.width!=this.width||t.height!=this.height||t.radius!=this.radius},equal:function(t){return!this.notEqual(t)},isIntersect:function(t,n,i,r){var e=this.x1,s=this.y,h=this.width,a=this.height;return Math.min(e+h,t+i)-(e>t?e:t)>0&&Math.min(s+a,n+r)-(s>n?s:n)>0},intersect:function(t,n,i,r){var e=this.x1,s=this.y,h=this.width,a=this.height;return Math.min(e+h,t+i)-(e>t?e:t)>0&&Math.min(s+a,n+r)-(s>n?s:n)>0},unite:function(t,n,i,r){var e=this.x1,h=this.y,a=this.width,o=this.height,u=e<t?e:t,c=h<n?h:n,l=Math.max(e+a,t+i)-u;return height=Math.max(h+o,n+r)-c,new s(u,c,l,height)},clone:function(){var t=this._;return new s(t.x,t.y,t.width,t.height,t.radius)},init:function(t,n,i,r,e){var s=this._={};s.x=t||0,s.y=n||0,s.width=i||0,s.height=r||0,s.radius=e||0}});return s.fromString=function(t){var n=t.split(",");return new s(parseFloat(n[0]),parseFloat(n[1]),parseFloat(n[2]),parseFloat(n[3]))},s.fromPlain=function(t){return new s(t.x||t.l,t.y||t.t,t.w||t.width,t.h||t.height)},s.fromArray=function(t){return new s(t[0],t[1],t[2],t[3])},s.Zero=new s(0,0,0,0),s}),t("skylark-utils-math/transform/Matrix",["skylark-langx/langx","../math"],function(t,n){var i=Math.PI/180,r={},e=function(t){return r[t]||(r[t]=Math.PI*t/180)},s=n.TransformMatrix=t.klass({klassName:"TransformMatrix",_multiplyPoint:function(t){var n=this._,i=t.x*n.m11+t.y*n.m21+n.dx,r=t.x*n.m12+t.y*n.m22+n.dy;return new Point(i,r)},m11:{get:function(){return this._.m11}},m12:{get:function(){return this._.m12}},m21:{get:function(){return this._.m21}},m22:{get:function(){return this._.m22}},dx:{get:function(){return this._.dx}},dy:{get:function(){return this._.dy}},alpha:{get:function(){return this._.alpha}},shadow:{get:function(){return this._.shadow}},compositeOperation:{get:function(){return this._.compositeOperation}},multiplyPoint:function(t){return this._multiplyPoint(t)},multiplyRectangle:function(t){if(this.isIdentity())return t.clone();var n=this.multiplyPoint(t.leftTop),i=this.multiplyPoint(t.leftBottom),r=this.multiplyPoint(t.right),e=this.multiplyPoint(t.rightBottom),s=Math.min(n.x,i.x,r.x,e.x),h=Math.min(n.y,i.y,r.y,e.y),a=Math.max(n.x,i.x,r.x,e.x),o=Math.max(n.y,i.y,r.y,e.y);return new Rect(s,h,a-s,o-h)},prepend:function(t,n,i,r,e,s){var h=this.dx;if(1!=t||0!=n||0!=i||1!=r){var a=this.m11,o=this.m21;this.m11=a*t+this.m12*i,this.m12=a*n+this.m12*r,this.m21=o*t+this.m22*i,this.m22=o*n+this.m22*r}return this.dx=h*t+this.dy*i+e,this.dy=h*n+this.dy*r+s,this},append:function(t,n,i,r,e,s){var h=this.m11,a=this.m12,o=this.m21,u=this.m22;return this.m11=t*h+n*o,this.m12=t*a+n*u,this.m21=i*h+r*o,this.m22=i*a+r*u,this.dx=e*h+s*o+this.dx,this.dy=e*a+s*u+this.dy,this},prependMatrix:function(t){return this.prepend(t.m11,t.m12,t.m21,t.m22,t.dx,t.dy),this.prependProperties(t.alpha,t.shadow,t.compositeOperation),this},appendMatrix:function(t){return this.append(t.m11,t.m12,t.m21,t.m22,t.dx,t.dy),this.appendProperties(t.alpha,t.shadow,t.compositeOperation),this},prependTransform:function(t,n,r,e,s,h,a,o,u){if(s%360)var c=s*i,l=Math.cos(c),f=Math.sin(c);else l=1,f=0;return(o||u)&&(this.dx-=o,this.dy-=u),h||a?(h*=i,a*=i,this.prepend(l*r,f*r,-f*e,l*e,0,0),this.prepend(Math.cos(a),Math.sin(a),-Math.sin(h),Math.cos(h),t,n)):this.prepend(l*r,f*r,-f*e,l*e,t,n),this},appendTransform:function(t,n,r,e,s,h,a,o,u){if(s%360)var c=s*i,l=Math.cos(c),f=Math.sin(c);else l=1,f=0;return h||a?(h*=i,a*=i,this.append(Math.cos(a),Math.sin(a),-Math.sin(h),Math.cos(h),t,n),this.append(l*r,f*r,-f*e,l*e,0,0)):this.append(l*r,f*r,-f*e,l*e,t,n),(o||u)&&(this.dx-=o*this.m11+u*this.m21,this.dy-=o*this.m12+u*this.m22),this},rotate:function(t){var n=Math.cos(t),i=Math.sin(t),r=this.m11,e=this.m21,s=this.dx;return this.m11=r*n-this.m12*i,this.m12=r*i+this.m12*n,this.m21=e*n-this.m22*i,this.m22=e*i+this.m22*n,this.dx=s*n-this.dy*i,this.dy=s*i+this.dy*n,this},skew:function(t,n){return t*=i,n*=i,this.append(Math.cos(n),Math.sin(n),-Math.sin(t),Math.cos(t),0,0),this},scale:function(t,n){return this.m11*=t,this.m22*=n,this.dx*=t,this.dy*=n,this},translate:function(t,n){return this.dx+=t,this.dy+=n,this},identity:function(){return this.alpha=this.m11=this.m22=1,this.m12=this.m21=this.dx=this.dy=0,this.shadow=this.compositeOperation=null,this},invert:function(){var t=this.m11,n=this.m12,i=this.m21,r=this.m22,e=this.dx,s=t*r-n*i;return this.m11=r/s,this.m12=-n/s,this.m21=-i/s,this.m22=t/s,this.dx=(i*this.dy-r*e)/s,this.dy=-(t*this.dy-n*e)/s,this},isIdentity:function(){return 0==this.dx&&0==this.dy&&1==this.m11&&0==this.m12&&0==this.m21&&1==this.m22},decompose:function(t){null==t&&(t={}),t.x=this.dx,t.y=this.dy,t.scaleX=Math.sqrt(this.m11*this.m11+this.m12*this.m12),t.scaleY=Math.sqrt(this.m21*this.m21+this.m22*this.m22);var n=Math.atan2(-this.m21,this.m22),r=Math.atan2(this.m12,this.m11);return n==r?(t.rotation=r/i,this.m11<0&&this.m22>=0&&(t.rotation+=t.rotation<=0?180:-180),t.skewX=t.skewY=0):(t.skewX=n/i,t.skewY=r/i),t},reinitialize:function(t,n,i,r,e,s,h,a,o){return this._initialize(t,n,i,r,e,s),this.alpha=h||1,this.shadow=a,this.compositeOperation=o,this},appendProperties:function(t,n,i){return this.alpha*=t,this.shadow=n||this.shadow,this.compositeOperation=i||this.compositeOperation,this},prependProperties:function(t,n,i){return this.alpha*=t,this.shadow=this.shadow||n,this.compositeOperation=this.compositeOperation||i,this},multiply:function(t){var n=this.m11,i=this.m12,r=this.m21,e=this.m22,s=this.dx,h=this.dy,a=t;return this.m11=n*a.m11+r*a.m12,this.m12=i*a.m11+e*a.m12,this.m21=n*a.m21+r*a.m22,this.m22=i*a.m21+e*a.m22,this.dx=n*a.dx+r*a.dy+s,this.dy=i*a.dx+e*a.dy+h,this},clone:function(){var t=this._,n=new s(t.m11,t.m12,t.m21,t.m22,t.dx,t.dy);return n.shadow=this.shadow,n.alpha=this.alpha,n.compositeOperation=this.compositeOperation,n},toString:function(){var t=this._;return"[Matrix (m11="+t.m11+" m12="+t.m12+" m21="+t.m21+" m22="+t.m22+" dx="+t.dx+" dy="+t.dy+")]"},init:function(t,n,i,r,e,s){var h=this._;h.m11=t||1,h.m12=n||0,h.m21=i||0,h.m22=r||1,h.dx=e||0,h.dy=s||0}});return t.mixin(s,{translate:function(t,n){return new s(1,0,0,1,t,n)},scale:function(t,n){return new s(t,0,0,n?n:t,0,0)},rotate:function(t){var n=Math.cos(t),i=Math.sin(t);return new s(n,i,(-i),n,0,0)},rotateg:function(t){return this.rotate(e(t))},skewX:function(t){var n=Math.tan(t);return new s(1,0,n,1)},skewXg:function(t){return this.skewX(e(t))},skewY:function(t){var n=Math.tan(t);return new s(1,n,0,1)},skewYg:function(t){return this.skewY(e(t))},reflect:function(t,n){1==arguments.length&&(n=t.y,t=t.x);var i=t*t,r=n*n,e=i+r,h=2*i/e-1,a=2*t*n/e,o=a,u=2*r/e-1;return new s(h,o,a,u)},project:function(t,n){var i=t*t,r=n*n,e=i+r,h=i/e,a=t*n/e;return yx=a,yy=r/e,new s(h,yx,a,yy)},_sandwich:function(t,n,i){return this.translate(n,i).multiply(t).multiply(this.translate(-n,-i))},scaleAt:function(t,n,i,r){switch(arguments.length){case 4:return this._sandwich(this.scale(t,n),i,r);case 3:return"number"==typeof i?this._sandwich(this.scale(t),n,i):this._sandwich(this.scale(t,n),i.x,i.y)}return this._sandwich(this.scale(t),n.x,n.y)},rotateAt:function(t,n,i){return arguments.length>2?this._sandwich(this.rotate(t),n,i):this._sandwich(this.rotate(t),n.x,n.y)},rotategAt:function(t,n,i){return arguments.length>2?this._sandwich(this.rotateg(t),n,i):this._sandwich(this.rotateg(t),n.x,n.y)},skewXAt:function(t,n,i){return arguments.length>2?this._sandwich(this.skewX(t),n,i):this._sandwich(this.skewX(t),n.x,n.y)},skewXgAt:function(t,n,i){return arguments.length>2?this._sandwich(this.skewXg(t),n,i):this._sandwich(this.skewXg(t),n.x,n.y)},skewYAt:function(t,n,i){return arguments.length>2?this._sandwich(this.skewY(t),n,i):this._sandwich(this.skewY(t),n.x,n.y)},skewYgAt:function(t,n,i){return arguments.length>2?this._sandwich(this.skewYg(t),n,i):this._sandwich(this.skewYg(t),n.x,n.y)}}),s}),t("skylark-utils-math/transform/Transform",["skylark-langx/langx","../math","./Matrix"],function(t,n,i){var r=n.Transform=t.klass({klassName:"Transform",value:{get:function(){return this._.value}}});return r}),t("skylark-utils-math/transform/MatrixTransform",["skylark-langx/langx","../math","./Transform","../Point","../Rect"],function(t,n,i,r,e){var s=n.MatrixTransform=i.inherit({klassName:"MatrixTransform",value:{get:function(){return this.matrix.clone()}},matrix:{get:function(){return this._.matrix}},clone:function(){},transform:function(t){},transformBounds:function(t){},initialize:function(t){var n=this._;n.matrix=t}});return s}),t("skylark-utils-math/transform/RotateTransform",["skylark-langx/langx","../math","./Transform","./Matrix","../Point","../Rect"],function(t,n,i,r,e,s){var h=n.RotateTransform=i.inherit({klassName:"RotateTransform",value:{get:function(){return r.rotateAt(this.angle,this.centerX,this.centerY)}},angle:{get:function(){return this._.angle}},centerX:{get:function(){return this._.centerX}},centerY:{get:function(){return this._.centerY}},clone:function(){},transform:function(t){},transformBounds:function(t){},init:function(t,n,i){var r=this._={};r.angle=t?t:0,r.centerX=n?n:0,r.centerY=i?i:0}});return h}),t("skylark-utils-math/transform/ScaleTransform",["skylark-langx/langx","../math","./Transform","./Matrix","../Point","../Rect"],function(t,n,i,r,e,s){var h=n.ScaleTransform=i.inherit({klassName:"ScaleTransform",value:{get:function(){return r.scaleAt(this.scaleX,this.scaleY,this.centerX,this.centerY)}},scaleX:{get:function(){return this._.scaleX}},scaleY:{get:function(){return this._.scaleY}},centerX:{get:function(){return this._.centerX}},centerY:{get:function(){return this._.centerY}},clone:function(){},transform:function(t){},transformBounds:function(t){},init:function(t,n,i,r){var e=this._;e.scaleX=t?t:1,e.scaleY=n?n:1,e.centerX=i?i:0,e.centerY=r?r:0}});return h}),t("skylark-utils-math/transform/SkewTransform",["skylark-langx/langx","../math","./Transform","./Matrix","../Point","../Rect"],function(t,n,i,r,e){var s=math.SkewTransform=n.inherit({klassName:"SkewTransform",value:{get:function(){return i.scaleAt(this.skewX,this.skewY)}},skewX:{get:function(){return this._.skewX}},skewY:{get:function(){return this._.skewY}},clone:function(){},transform:function(t){},transformBounds:function(t){},init:function(t,n){var i=this._;i.skewX=t?t:0,i.skewY=n?n:0}});return s}),t("skylark-utils-math/transform/TranslateTransform",["skylark-langx/langx","../math","./Transform","./Matrix","../Point","../Rect"],function(t,n,i,r,e,s){var h=n.TranslateTransform=i.inherit({klassName:"TranslateTransform",value:{get:function(){return r.scaleAt(this.x,this.y)}},x:{get:function(){return this._.x}},y:{get:function(){return this._.y}},clone:function(){},transform:function(t){},transformBounds:function(t){},init:function(t,n){var i=this._;i.x=t?t:0,i.y=n?n:0}});return h;var h}),t("skylark-utils-math/main",["./math","./Arrow","./Circle","./Ellipse","./Geometry","./Line","./Point","./Polyline","./PolyStar","./Rect","./Size","./transform/Matrix","./transform/MatrixTransform","./transform/RotateTransform","./transform/ScaleTransform","./transform/SkewTransform","./transform/Transform","./transform/TranslateTransform"],function(t){return t}),t("skylark-utils-math",["skylark-utils-math/main"],function(t){return t})},this);
//# sourceMappingURL=sourcemaps/skylark-utils-math.js.map
