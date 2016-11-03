'use strict';

module.exports = function(array) {
    array = array || [];
    if(array && Array.isArray(array)) {
        document.write('<ul>');
        array.forEach(function(val, idx, arr) {
            document.write('<li>', val, '</li>');
        });
        document.write('</ul>')
    }
}