'use strict';

require('lodash');
var pkg = require('pkg-1');

function pkg2() {
    console.log('this is pkg2, pkg1 returns', pkg());
}

module.exports = pkg2;
