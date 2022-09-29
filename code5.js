gdjs.CreditosCode = {};
gdjs.CreditosCode.GDForestBackgroundObjects1= [];
gdjs.CreditosCode.GDForestBackgroundObjects2= [];
gdjs.CreditosCode.GDCreditoObjects1= [];
gdjs.CreditosCode.GDCreditoObjects2= [];
gdjs.CreditosCode.GDDinoDouxObjects1= [];
gdjs.CreditosCode.GDDinoDouxObjects2= [];
gdjs.CreditosCode.GDKnightMaleObjects1= [];
gdjs.CreditosCode.GDKnightMaleObjects2= [];
gdjs.CreditosCode.GDNewTextObjects1= [];
gdjs.CreditosCode.GDNewTextObjects2= [];

gdjs.CreditosCode.conditionTrue_0 = {val:false};
gdjs.CreditosCode.condition0IsTrue_0 = {val:false};
gdjs.CreditosCode.condition1IsTrue_0 = {val:false};
gdjs.CreditosCode.condition2IsTrue_0 = {val:false};
gdjs.CreditosCode.conditionTrue_1 = {val:false};
gdjs.CreditosCode.condition0IsTrue_1 = {val:false};
gdjs.CreditosCode.condition1IsTrue_1 = {val:false};
gdjs.CreditosCode.condition2IsTrue_1 = {val:false};


gdjs.CreditosCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditosCode.condition0IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.CreditosCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("KnightMale"), gdjs.CreditosCode.GDKnightMaleObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "POL-moving-around-short.wav", 1, true, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)), 1);
}{for(var i = 0, len = gdjs.CreditosCode.GDKnightMaleObjects1.length ;i < len;++i) {
    gdjs.CreditosCode.GDKnightMaleObjects1[i].flipX(true);
}
}}

}


{


gdjs.CreditosCode.condition0IsTrue_0.val = false;
gdjs.CreditosCode.condition1IsTrue_0.val = false;
{
gdjs.CreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
}if ( gdjs.CreditosCode.condition0IsTrue_0.val ) {
{
{gdjs.CreditosCode.conditionTrue_1 = gdjs.CreditosCode.condition1IsTrue_0;
gdjs.CreditosCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21577668);
}
}}
if (gdjs.CreditosCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "01Controles", false);
}}

}


};

gdjs.CreditosCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditosCode.GDForestBackgroundObjects1.length = 0;
gdjs.CreditosCode.GDForestBackgroundObjects2.length = 0;
gdjs.CreditosCode.GDCreditoObjects1.length = 0;
gdjs.CreditosCode.GDCreditoObjects2.length = 0;
gdjs.CreditosCode.GDDinoDouxObjects1.length = 0;
gdjs.CreditosCode.GDDinoDouxObjects2.length = 0;
gdjs.CreditosCode.GDKnightMaleObjects1.length = 0;
gdjs.CreditosCode.GDKnightMaleObjects2.length = 0;
gdjs.CreditosCode.GDNewTextObjects1.length = 0;
gdjs.CreditosCode.GDNewTextObjects2.length = 0;

gdjs.CreditosCode.eventsList0(runtimeScene);
return;

}

gdjs['CreditosCode'] = gdjs.CreditosCode;
