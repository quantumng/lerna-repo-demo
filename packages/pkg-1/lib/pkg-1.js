'use strict';

function pkg1(name) {
    console.log('this is pkg-1! it used by', name);
    return name
}

module.exports = pkg1;
