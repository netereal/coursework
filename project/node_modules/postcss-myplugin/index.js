var postcss = require('postcss');
var fontstacks_config = {
    'Arial': 'Arial, "Helvetica Neue", Helvetica, sans-serif',
    'Times New Roman': 'TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif'
}
function toTitleCase(str) {
                      return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }
module.exports = postcss.plugin('myplugin', function myplugin(options) {
    return function (css) {
        options = options || {};  
        css.walkRules(function (rule) {
            rule.walkDecls(function (decl, i) {
                    var value = decl.value;
                    if (value.indexOf( 'fontstack(' ) !== -1) {
                     var fontstack_requested = value.match(/\(([^)]+)\)/)[1].replace(/["']/g, ""); 
                     fontstack_requested = toTitleCase(fontstack_requested);
                     var fontstack = fontstacks_config[fontstack_requested];
                     var first_font = value.substr(0, value.indexOf('fontstack('));
                     var new_value = first_font + fontstack;
                     decl.value = new_value;
                    }


            });

        }); 
    }
 
}); 