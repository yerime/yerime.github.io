/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {};
var resources = [
];
var symbols = {
"stage": {
    version: "3.0.0",
    minimumCompatibleVersion: "3.0.0",
    build: "3.0.0.322",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'Rectangle',
                type: 'rect',
                rect: ['-6px', '-8px','3010px','5020px','auto', 'auto'],
                fill: ["rgba(0,0,0,1.00)"],
                stroke: [0,"rgba(0,0,0,1)","none"]
            },
            {
                id: 'Text2',
                type: 'text',
                rect: ['144px', '112px','2760px','1360px','auto', 'auto'],
                text: "The wall.<br>Shadow.<br>I am black.<br>I lie down in the shadow.<br>No longer the light of my dream before me,<br>Above me.<br>Only the thick wall.<br>Only the shadow.<br>My hands!<br>My dark hands!<br>Break through the wall!<br>Find my dream!<br>Help me to shatter this darkness,<br>To smash this night,<br>To break this shadow",
                align: "left",
                font: ['Times New Roman, Times, serif', 231, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '5000px'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(70,70,70,1.00)',100]]]],
                ["style", "width", '3000px']
            ],
            "${_Rectangle}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["gradient", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(0,0,0,1.00)',0]]]],
                ["style", "height", '5020px']
            ],
            "${_Text2}": [
                ["style", "top", '112px'],
                ["style", "text-align", 'left'],
                ["style", "font-size", '231px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "left", '144px'],
                ["style", "width", '2760px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 603500,
            autoPlay: true,
            timeline: [
                { id: "eid20", tween: [ "gradient", "${_Rectangle}", "background-image", [270,[['rgba(255,255,255,1.00)',0],['rgba(162,162,162,0.28)',60],['rgba(255,255,255,1.00)',84],['rgba(90,90,90,1.00)',98]]], { fromValue: [270,[['rgba(255,255,255,1.00)',0],['rgba(0,0,0,1.00)',0]]]}], position: 4000, duration: 599500 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-160133266");
