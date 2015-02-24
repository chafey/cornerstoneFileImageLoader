/**
 */
var cornerstoneFileImageLoader = (function (cornerstoneFileImageLoader) {

    "use strict";

    if(cornerstoneFileImageLoader === undefined) {
        cornerstoneFileImageLoader = {};
    }

    var files = [];

    function addFile(file) {
        var fileIndex =  files.push(file);
        return fileIndex - 1;
    }

    function getFile(index) {
        return files[index];
    }

    function purge() {
        files = [];
    }

    // module exports
    cornerstoneFileImageLoader.addFile = addFile;
    cornerstoneFileImageLoader.getFile = getFile;
    cornerstoneFileImageLoader.purge = purge;

    return cornerstoneFileImageLoader;
}(cornerstoneFileImageLoader));