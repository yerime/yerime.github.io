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
                id: 'as',
                type: 'text',
                rect: ['80px', '278px','432px','172px','auto', 'auto'],
                text: "As",
                align: "left",
                font: ['Times New Roman, Times, serif', 24, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'I',
                type: 'text',
                rect: ['280px', '134px','152px','192px','auto', 'auto'],
                text: "I",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'grew',
                type: 'text',
                rect: ['328px', '258px','312px','192px','auto', 'auto'],
                text: "Grew<br>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'older',
                type: 'text',
                rect: ['572px', '122px','auto','auto','auto', 'auto'],
                text: "Older<br>",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'it',
                type: 'text',
                rect: ['120px', '454px','220px','252px','auto', 'auto'],
                text: "It",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'was',
                type: 'text',
                rect: ['288px', '570px','312px','136px','auto', 'auto'],
                text: "was",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'alongtime',
                type: 'text',
                rect: ['384px', '430px','628px','172px','auto', 'auto'],
                text: "a long time",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'ago',
                type: 'text',
                rect: ['568px', '318px','260px','136px','auto', 'auto'],
                text: "ago.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'ihave',
                type: 'text',
                rect: ['18px', '344px','336px','118px','auto', 'auto'],
                text: "I have",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 118, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'almost',
                type: 'text',
                rect: ['80px', '14px','240px','92px','auto', 'auto'],
                text: "almost",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'forgotten',
                type: 'text',
                rect: ['244px', '272px','220px','92px','auto', 'auto'],
                text: "fogotten",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 150, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'mydream',
                type: 'text',
                rect: ['153px', '455px','555px','106px','auto', 'auto'],
                text: "my dream.",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'butitwas',
                type: 'text',
                rect: ['36px', '703px','555px','106px','auto', 'auto'],
                text: "But it was",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'therethan',
                type: 'text',
                rect: ['522px', '1035px','555px','106px','auto', 'auto'],
                text: "there then,",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'In_front_of',
                type: 'text',
                rect: ['164px', '861px','555px','106px','auto', 'auto'],
                text: "In front of",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'bright',
                type: 'text',
                rect: ['664px', '776px','386px','160px','auto', 'auto'],
                text: "Bright like",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            },
            {
                id: 'sun',
                type: 'text',
                rect: ['54px', '973px','270px','210px','auto', 'auto'],
                text: " a sun—",
                align: "left",
                font: ['\'Times New Roman\', Times, serif', 100, "rgba(0,0,0,1)", "400", "none", "normal"]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_mydream}": [
                ["style", "top", '455px'],
                ["style", "width", '555px'],
                ["style", "opacity", '1'],
                ["style", "left", '153px'],
                ["style", "font-size", '100px']
            ],
            "${_forgotten}": [
                ["style", "top", '272px'],
                ["style", "font-size", '150px'],
                ["style", "height", '92px'],
                ["style", "opacity", '1'],
                ["style", "left", '244px'],
                ["style", "width", '220px']
            ],
            "${_grew}": [
                ["style", "top", '430px'],
                ["style", "opacity", '1'],
                ["style", "left", '688px'],
                ["style", "font-size", '100px']
            ],
            "${_In_front_of}": [
                ["style", "top", '861px'],
                ["style", "font-size", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '164px'],
                ["style", "width", '555px']
            ],
            "${_it}": [
                ["style", "top", '382px'],
                ["style", "opacity", '1'],
                ["style", "left", '54px'],
                ["style", "font-size", '100px']
            ],
            "${_butitwas}": [
                ["style", "top", '703px'],
                ["style", "font-size", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '36px'],
                ["style", "width", '555px']
            ],
            "${_alongtime}": [
                ["style", "top", '578px'],
                ["style", "width", '628px'],
                ["style", "opacity", '1'],
                ["style", "left", '442px'],
                ["style", "font-size", '100px']
            ],
            "${_sun}": [
                ["style", "top", '973px'],
                ["style", "height", '210px'],
                ["style", "opacity", '1'],
                ["style", "left", '54px'],
                ["style", "width", '270px']
            ],
            "${_as}": [
                ["style", "top", '278px'],
                ["style", "font-size", '118px'],
                ["style", "font-family", 'Times New Roman, Times, serif'],
                ["style", "height", '152px'],
                ["style", "opacity", '1'],
                ["style", "left", '80px'],
                ["style", "width", '188px']
            ],
            "${_I}": [
                ["style", "top", '134px'],
                ["style", "opacity", '1'],
                ["style", "left", '212px'],
                ["style", "font-size", '100px']
            ],
            "${_ihave}": [
                ["style", "top", '56px'],
                ["style", "width", '336px'],
                ["style", "opacity", '1'],
                ["style", "left", '664px'],
                ["style", "font-size", '100px']
            ],
            "${_ago}": [
                ["style", "top", '182px'],
                ["style", "opacity", '1'],
                ["style", "left", '640px'],
                ["style", "font-size", '100px']
            ],
            "${_bright}": [
                ["style", "top", '776px'],
                ["style", "height", '160px'],
                ["style", "opacity", '1'],
                ["style", "left", '664px'],
                ["style", "width", '386px']
            ],
            "${_therethan}": [
                ["style", "top", '1035px'],
                ["style", "font-size", '100px'],
                ["style", "opacity", '1'],
                ["style", "left", '522px'],
                ["style", "width", '555px']
            ],
            "${_almost}": [
                ["style", "top", '14px'],
                ["style", "width", '240px'],
                ["style", "height", '92px'],
                ["style", "opacity", '1'],
                ["style", "left", '80px'],
                ["style", "font-size", '100px']
            ],
            "${_was}": [
                ["style", "top", '573px'],
                ["style", "opacity", '1'],
                ["style", "left", '70px'],
                ["style", "font-size", '100px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '1000px'],
                ["style", "height", '1200px'],
                ["style", "overflow", 'hidden']
            ],
            "${_older}": [
                ["style", "top", '146px'],
                ["style", "opacity", '1'],
                ["style", "left", '300px'],
                ["style", "font-size", '100px']
            ],
            "${_Text14}": [
                ["style", "top", '642px'],
                ["style", "width", '485px'],
                ["style", "height", '115px'],
                ["color", "color", 'rgba(0,0,0,1)'],
                ["style", "left", '856px'],
                ["style", "font-size", '100px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1288000,
            autoPlay: true,
            labels: {
                "asplay": 1200000,
                "stop1": 1205000,
                "iplay": 1206000,
                "stop2": 1210000,
                "grewplay": 1211500,
                "stop3": 1215000,
                "olderplay": 1215956,
                "stop4": 1220000,
                "itplay": 1221000,
                "stop5": 1225000,
                "wasplay": 1226000,
                "stop6": 1230000,
                "waslongtimeplay": 1232000,
                "stop7": 1236000,
                "agoplay": 1237000,
                "stop8": 1241000,
                "ihaveplay": 1242000,
                "stop9": 1246042,
                "almostplay": 1247000,
                "stop10": 1251000,
                "fogottenplay": 1252000,
                "stop11": 1256000,
                "mydreamplay": 1257000,
                "stop12": 1262500,
                "butitwasplay": 1264000,
                "stop13": 1268000,
                "therethenplay": 1270000,
                "stop14": 1274000,
                "infrontofplay": 1275000,
                "stop14 1": 1279000,
                "brightplay": 1280000,
                "stop15": 1284000,
                "sunplay": 1285000
            },
            timeline: [
                { id: "eid206", tween: [ "style", "${_ihave}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid205", tween: [ "style", "${_grew}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid63", tween: [ "style", "${_as}", "opacity", '0', { fromValue: '1'}], position: 1200000, duration: 2721 },
                { id: "eid213", tween: [ "style", "${_ago}", "top", '182px', { fromValue: '182px'}], position: 1199500, duration: 0 },
                { id: "eid253", tween: [ "style", "${_therethan}", "opacity", '0', { fromValue: '1'}], position: 1270000, duration: 3000 },
                { id: "eid68", tween: [ "style", "${_grew}", "opacity", '0', { fromValue: '1'}], position: 1211500, duration: 3000 },
                { id: "eid67", tween: [ "style", "${_older}", "opacity", '0', { fromValue: '1'}], position: 1216000, duration: 3000 },
                { id: "eid173", tween: [ "style", "${_older}", "top", '146px', { fromValue: '146px'}], position: 1199500, duration: 0 },
                { id: "eid70", tween: [ "style", "${_it}", "opacity", '0', { fromValue: '1'}], position: 1221000, duration: 3000 },
                { id: "eid212", tween: [ "style", "${_ago}", "left", '640px', { fromValue: '640px'}], position: 1199500, duration: 0 },
                { id: "eid172", tween: [ "style", "${_older}", "left", '300px', { fromValue: '300px'}], position: 1199500, duration: 0 },
                { id: "eid254", tween: [ "style", "${_In_front_of}", "opacity", '0', { fromValue: '1'}], position: 1275000, duration: 3000 },
                { id: "eid208", tween: [ "style", "${_I}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid218", tween: [ "style", "${_almost}", "opacity", '0', { fromValue: '1'}], position: 1247000, duration: 3000 },
                { id: "eid72", tween: [ "style", "${_alongtime}", "opacity", '0', { fromValue: '1'}], position: 1232000, duration: 3000 },
                { id: "eid203", tween: [ "style", "${_older}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid163", tween: [ "style", "${_alongtime}", "top", '578px', { fromValue: '578px'}], position: 1199500, duration: 0 },
                { id: "eid162", tween: [ "style", "${_alongtime}", "left", '442px', { fromValue: '442px'}], position: 1199500, duration: 0 },
                { id: "eid182", tween: [ "style", "${_was}", "left", '70px', { fromValue: '70px'}], position: 1199500, duration: 0 },
                { id: "eid219", tween: [ "style", "${_forgotten}", "opacity", '0', { fromValue: '1'}], position: 1252000, duration: 3000 },
                { id: "eid216", tween: [ "style", "${_it}", "left", '54px', { fromValue: '54px'}], position: 1199500, duration: 0 },
                { id: "eid65", tween: [ "style", "${_I}", "opacity", '0', { fromValue: '1'}], position: 1206000, duration: 3000 },
                { id: "eid257", tween: [ "style", "${_sun}", "opacity", '0', { fromValue: '1'}], position: 1285000, duration: 3000 },
                { id: "eid256", tween: [ "style", "${_bright}", "opacity", '0', { fromValue: '1'}], position: 1280000, duration: 3000 },
                { id: "eid217", tween: [ "style", "${_it}", "top", '382px', { fromValue: '382px'}], position: 1199500, duration: 0 },
                { id: "eid251", tween: [ "style", "${_butitwas}", "opacity", '0', { fromValue: '1'}], position: 1264000, duration: 3000 },
                { id: "eid210", tween: [ "style", "${_ihave}", "left", '664px', { fromValue: '664px'}], position: 1199500, duration: 0 },
                { id: "eid186", tween: [ "style", "${_grew}", "left", '688px', { fromValue: '688px'}], position: 1199500, duration: 0 },
                { id: "eid73", tween: [ "style", "${_ago}", "opacity", '0', { fromValue: '1'}], position: 1237000, duration: 3000 },
                { id: "eid74", tween: [ "style", "${_ihave}", "opacity", '0', { fromValue: '1'}], position: 1242000, duration: 3000 },
                { id: "eid209", tween: [ "style", "${_ago}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid183", tween: [ "style", "${_was}", "top", '573px', { fromValue: '573px'}], position: 1199500, duration: 0 },
                { id: "eid211", tween: [ "style", "${_ihave}", "top", '56px', { fromValue: '56px'}], position: 1199500, duration: 0 },
                { id: "eid153", tween: [ "style", "${_I}", "left", '212px', { fromValue: '212px'}], position: 1199500, duration: 0 },
                { id: "eid220", tween: [ "style", "${_mydream}", "opacity", '0', { fromValue: '1'}], position: 1257000, duration: 3000 },
                { id: "eid204", tween: [ "style", "${_alongtime}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid207", tween: [ "style", "${_was}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid71", tween: [ "style", "${_was}", "opacity", '0', { fromValue: '1'}], position: 1226000, duration: 3000 },
                { id: "eid202", tween: [ "style", "${_it}", "font-size", '100px', { fromValue: '100px'}], position: 1199500, duration: 0 },
                { id: "eid187", tween: [ "style", "${_grew}", "top", '430px', { fromValue: '430px'}], position: 1199500, duration: 0 }            ]
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
})(jQuery, AdobeEdge, "EDGE-62488463");
