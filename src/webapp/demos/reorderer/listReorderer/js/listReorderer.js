/*
Copyright 2007-2009 University of Cambridge
Copyright 2007-2009 University of Toronto
Copyright 2007-2009 University of California, Berkeley

Licensed under the Educational Community License (ECL), Version 2.0 or the New
BSD license. You may not use this file except in compliance with one these
Licenses.

You may obtain a copy of the ECL 2.0 License and BSD License at
https://source.fluidproject.org/svn/LICENSE.txt
*/

/*global jQuery*/
/*global fluid*/
/*global demo*/

var demo = demo || {};
(function ($, fluid) {
    
    demo.initListReorderer = function () {
        return fluid.reorderList(".todo-list", {
            selectors: {
                movables: ".movable"
            },
            styles: {
				defaultStyle: "demo-reorderer-movable-default",
				selected: "demo-reorderer-movable-selected",
				dragging: "demo-reorderer-movable-dragging",
				mouseDrag: "demo-reorderer-movable-mousedrag",
				hover: "demo-reorderer-movable-hover",
				dropMarker: "demo-reorderer-dropMarker",
				avatar: "demo-reorderer-avatar"
            }
        });
    };
})(jQuery, fluid);