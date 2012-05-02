/*#target aftereffects*/$.evalFile("~/Dropbox/Scripts/AEScripts/BeforeEffects/src/testbefore.jsxinc");$.evalFile("~/Dropbox/Scripts/AEScripts/BeforeEffects/src/beforeeffects.jsx");//Configure TB:TB.configure({    catchErrors: false});//The following config object contains functions utilized by the tests below.//These functions are used soley by the BE test suite and, therefore, are not//contained with the TB object.testConfig = {    comp: {        init: function () {            var theComp, testLayers;            this.theComp = app.project.items.addComp(                "testComp",                1920,                1080,                1,                10,                29.97            );            this.testLayers = [];            theComp = this.theComp;            testLayers = this.testLayers;            testLayers["Solid 1"] = theComp.layers.addSolid([0,0,0], "Solid 1", 1920, 1080, 1, 10);            testLayers["Solid 2"] = theComp.layers.addSolid([0,0,0], "Solid 2", 1920, 1080, 1, 10);            testLayers["Solid 3"] = theComp.layers.addSolid([0,0,0], "Solid 3", 1920, 1080, 1, 10);            testLayers["Null 1"] = theComp.layers.addNull(1);            testLayers["Null 1"].name = "Null 1";            testLayers["Shape 1"] = theComp.layers.addShape();            testLayers["Shape 1"].name = "Shape 1";            testLayers["Text 1"] = theComp.layers.addText("Test text layer");            testLayers["Text 1"].name = "Text 1";            testLayers["Light 1"] = theComp.layers.addLight("Light 1", [0,0]);            testLayers["Camera 1"] = theComp.layers.addCamera("Camera 1", [0,0]);        },        clean: function () {            this.theComp.remove();            app.project.items[1].remove();        }    },    layer: {        init: function () {            var theComp, testLayers, i;            testConfig.comp.init();            theComp = testConfig.comp.theComp;            testLayers = testConfig.comp.testLayers;            //Add markers to the layers            for (i in testLayers) {                if (testLayers.hasOwnProperty(i)) {                    testLayers[i].property("Marker").setValueAtTime(                        1,                        new MarkerValue(i + " Marker 1")                    );                    testLayers[i].property("Marker").setValueAtTime(                        2,                        new MarkerValue(i + " Marker 2")                    );                }            }        },        clean: function () {            testConfig.comp.clean();        }    }};//Run the tests by including their individual test scripts#include BE_test.jsx#include BE.comp_test.jsx#include BE.layer_test.jsxTB.runTests();