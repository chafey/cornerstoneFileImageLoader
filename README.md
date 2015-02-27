cornerstone DICOM P10 File Image Loader
=======================================

A [cornerstone](https://github.com/chafey/cornerstone) Image Loader for DICOM P10 instances stored
as files.  This library is built on top of

Project Status
---------------
Alpha but usable, see key features and backlog of [cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader),
please view its page for the features it supports and backlog.

Live Examples
---------------

[Click here for a live example of this library in use!](http://rawgithub.com/chafey/cornerstoneFileImageLoader/master/examples/index.html)

Install
-------

Get a packaged source file:

* [cornerstoneFileImageLoader.js](https://raw.githubusercontent.com/chafey/cornerstoneFileImageLoader/master/dist/cornerstoneFileImageLoader.js)
* [cornerstoneFileImageLoader.min.js](https://raw.githubusercontent.com/chafey/cornerstoneFileImageLoader/master/dist/cornerstoneFileImageLoader.min.js)

or install from bower

> bower install cornerstone-file-image-loader

Usage
-------

The cornerstoneFileImageLoader depends on the following libraries:

1. [jQuery](https://github.com/jquery/jquery)
2. [dicomParser](https://github.com/chafey/dicomParser) 
3. [cornerstone](https://github.com/chafey/cornerstone)
4. [cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader)
5. [JPEG2000 Codec](https://github.com/OHIF/image-JPEG2000)

All of these libraries should be loaded before the cornerstoneFileImageLoader.js.  See the source code
for the [example](https://rawgithub.com/chafey/cornerstoneFileImageLoader/master/examples/index.html).

Before loading a file, the user needs to select it using the file input element or via drag and drop.  Once you
have the File object, you add it to the image loader using the cornerstoneFileImageLoader.addFile() api.  This
API returns a unique integer which you use to create an imageId with the prefix 'dicomfile'.  Here is an example:

```
dicomfile:http://1
```

Once you have this imageId, you can load it using normal cornerstone methods.

Build System
============

This project uses grunt to build the software.

Pre-requisites:
---------------

NodeJs - [click to visit web site for installation instructions](http://nodejs.org).

grunt-cli

> npm install -g grunt-cli

bower

> npm install -g bower

Common Tasks
------------

Update dependencies (after each pull):
> npm install

> bower install

Running the build:
> grunt

Automatically running the build and unit tests after each source change:
> grunt watch

Copyright
============
Copyright 2015 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)
