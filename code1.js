gdjs.InicioCode = {};
gdjs.InicioCode.GDDoorAllObjects1= [];
gdjs.InicioCode.GDDoorAllObjects2= [];
gdjs.InicioCode.GDWallLeftObjects1= [];
gdjs.InicioCode.GDWallLeftObjects2= [];
gdjs.InicioCode.GDWallMidObjects1= [];
gdjs.InicioCode.GDWallMidObjects2= [];
gdjs.InicioCode.GDWallRightObjects1= [];
gdjs.InicioCode.GDWallRightObjects2= [];
gdjs.InicioCode.GDStartButtonObjects1= [];
gdjs.InicioCode.GDStartButtonObjects2= [];

gdjs.InicioCode.conditionTrue_0 = {val:false};
gdjs.InicioCode.condition0IsTrue_0 = {val:false};
gdjs.InicioCode.condition1IsTrue_0 = {val:false};
gdjs.InicioCode.condition2IsTrue_0 = {val:false};


gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.InicioCode.GDStartButtonObjects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.InicioCode.GDStartButtonObjects1);

gdjs.InicioCode.condition0IsTrue_0.val = false;
gdjs.InicioCode.condition1IsTrue_0.val = false;
{
gdjs.InicioCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.InicioCode.condition0IsTrue_0.val ) {
{
gdjs.InicioCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_46InicioCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.InicioCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Prototipo", false);
}}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDDoorAllObjects1.length = 0;
gdjs.InicioCode.GDDoorAllObjects2.length = 0;
gdjs.InicioCode.GDWallLeftObjects1.length = 0;
gdjs.InicioCode.GDWallLeftObjects2.length = 0;
gdjs.InicioCode.GDWallMidObjects1.length = 0;
gdjs.InicioCode.GDWallMidObjects2.length = 0;
gdjs.InicioCode.GDWallRightObjects1.length = 0;
gdjs.InicioCode.GDWallRightObjects2.length = 0;
gdjs.InicioCode.GDStartButtonObjects1.length = 0;
gdjs.InicioCode.GDStartButtonObjects2.length = 0;

gdjs.InicioCode.eventsList0(runtimeScene);
return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
