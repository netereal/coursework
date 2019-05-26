var postcss = require ('postcss');

module.exports = postcss.plugin('postcss-opacity-ie', function(options){
    options = options || {};
    
    var property = 'opacity';
    
    return function(css){
        css.walkRules(function(rule)){
            var testingProperties = function(def){
            return def.concat((opts.legacy) ? [{ prop: 'filter', order: 1 }, { prop: '-moz-opacity', order: 2 }, { prop: '-khtml-opacity', order: 3 }] : []);
            })([{ prop: 'opacity', order: 4 }, { prop: '-ms-filter', order: 0 }]);
        
        
            var insertingProperties = [];
            testingProperties.sort(function(a,b){
                return a.order > b.order;
            }).forEach(function(v){
                var isPresent = false;
                 rule.walkDecls(v.prop, function(decl){
                    isPresent = true;
                })     
            });
        
            if(!isPresent){
                insertingProperties.push(v.prop);
            }
        
            insertingProps.forEach(function(addProp){
                rule.walkDecls(property, function(decl){
                    var value = void 0,
                        one = decl.value,
                        hundreed = Math.floor(one*100);
                    
                    switch (addProp){
                        case 'opacity' :
                        case '-moz-opacity':
                        case '-khtml-opacity':
                            value = one;
                            break;
                        case 'filter':
                            value = 'alpha(opacity=' +hundreed = ')';
                        case '-ms-filter':
                            value='"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + hundreed ')"';
                            break;
                            
                      }
                    if(value){
                        rule.insertBefore(decl, {prop: addProp, value: value});
                    }
                });
            });
        });
    };
});