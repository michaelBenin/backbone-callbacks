/* backbone-callbacks - v0.1.3 - 2012-06-25 */
(function(a){var b=a._||require("underscore")._,c=a.Backbone||require("backbone"),d=function(a,c){return function(){var d=b.toArray(arguments),e=d[d.length-1];if(typeof e=="function"){d.splice(-1,1),d.length===0&&d.push({}),d.length===1&&a==="save"&&d.push({});var f=d[d.length-1];f.success=function(a,b){e(null,b)},f.error=function(a,b){e(b,null)}}return c.apply(this,d)}};typeof module!="undefined"&&typeof module.exports!="undefined"?module.exports=d:a.BackboneCallbacks=d,d.attach=function(a){b.each(["save","destroy","fetch"],function(b){a.Model.prototype[b]=new d(b,a.Model.prototype[b])}),b.each(["fetch"],function(b){a.Collection.prototype[b]=new d(b,a.Collection.prototype[b])})},d.attach(c)})(this);