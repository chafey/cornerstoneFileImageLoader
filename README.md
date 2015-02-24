cornerstone DICOM P10 File Image Loader
=======================================

A [cornerstone](https://github.com/chafey/cornerstone) Image Loader for DICOM P10 instances stored
as files.

Project Status
---------------
Alpha but usable, see key features and backlog below.

Live Examples
---------------

[Click here for a live example of this library in use!](http://rawgithub.com/chafey/cornerstoneWADOImageLoader/master/examples/index.html)

Install
-------

Get a packaged source file:

* [cornerstoneFileImageLoader.js](https://raw.githubusercontent.com/chafey/cornerstoneFileImageLoader/master/dist/cornerstoneFileImageLoader.js)
* [cornerstoneFileImageLoader.min.js](https://raw.githubusercontent.com/chafey/cornerstoneFileImageLoader/master/dist/cornerstoneFileImageLoader.min.js)

Usage
-------

The cornerstoneWADOImageLoader depends on the following libraries:

1. [jQuery](https://github.com/jquery/jquery)
2. [dicomParser](https://github.com/chafey/dicomParser) 
3. [cornerstone](https://github.com/chafey/cornerstone)
3. [cornerstoneWADOImageLoader](https://github.com/chafey/cornerstoneWADOImageLoader)

All three of these libraries should be loaded before the cornerstoneFileImageLoader.js.  See the source code
for the [example](https://rawgithub.com/chafey/cornerstoneFileImageLoader/master/examples/index.html).

Before loading a file, the user needs to select it using the file input element or via drag and drop.  Once you
have the File object, you add it to the image loader using the cornerstoneFileImageLoader.addFile() api.  This
API returns a unique integer which you use to create an imageId with the prefix 'dicomfile'.  Here is an example:

```
dicomfile:http://1
```

Once you have this imageId, you can load it using normal cornerstone methods.



Key Features
------------

* Implements a [cornerstone ImageLoader](https://github.com/chafey/cornerstone/wiki/ImageLoader) for DICOM P10 Instances via a HTTP get request. 
  * Can be used with a WADO server
  * Can be used with Orthanc's file endpoint
* Supports multiframe
* Supported pixel formats:
    * 8 bit grayscale
    * 16 bit grayscale (unsigned and signed)
    * RGB Color
    * YBRFull Color
    * YBRFull422 Color (including encapsulated)
* Supported transfer syntaxes
    * Implicit Little Endian
    * Explicit Little Endian

NOTE: JPEG2000 is not supported!

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

Backlog
------------

* Support images with Pixel Padding
* Mask out burned in overlays?
* Consider alternatives to jQuery for deferred (when.js?)
* Add error handling
* Add support for compressed transfer syntaxes
  * JPEG 2000
  * JPEG
  * RLE
* Add support for less common pixel formats


FAQ
===

_Why is this a separate library from cornerstone?_

Mainly to avoid adding a dependency to cornerstone for the DICOM parsing library.  While cornerstone is
intended to be used to display medical images that are stored in DICOM, cornerstone aims to simplify
the use of medical imaging and therefore tries to hide some of the complexity that exists within
DICOM.  It is also desirable to support display of non DICOM images so a DICOM independent image model
makes sense.


Copyright
============
Copyright 2015 Chris Hafey [chafey@gmail.com](mailto:chafey@gmail.com)
