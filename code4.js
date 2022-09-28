gdjs._481ControlesCode = {};
gdjs._481ControlesCode.GDBlueSpaceObjects1= [];
gdjs._481ControlesCode.GDBlueSpaceObjects2= [];
gdjs._481ControlesCode.GDBlueSpaceObjects3= [];
gdjs._481ControlesCode.GDWallObjects1= [];
gdjs._481ControlesCode.GDWallObjects2= [];
gdjs._481ControlesCode.GDWallObjects3= [];
gdjs._481ControlesCode.GDNewTextObjects1= [];
gdjs._481ControlesCode.GDNewTextObjects2= [];
gdjs._481ControlesCode.GDNewTextObjects3= [];
gdjs._481ControlesCode.GDwObjects1= [];
gdjs._481ControlesCode.GDwObjects2= [];
gdjs._481ControlesCode.GDwObjects3= [];
gdjs._481ControlesCode.GDaObjects1= [];
gdjs._481ControlesCode.GDaObjects2= [];
gdjs._481ControlesCode.GDaObjects3= [];
gdjs._481ControlesCode.GDsObjects1= [];
gdjs._481ControlesCode.GDsObjects2= [];
gdjs._481ControlesCode.GDsObjects3= [];
gdjs._481ControlesCode.GDdObjects1= [];
gdjs._481ControlesCode.GDdObjects2= [];
gdjs._481ControlesCode.GDdObjects3= [];
gdjs._481ControlesCode.GDupObjects1= [];
gdjs._481ControlesCode.GDupObjects2= [];
gdjs._481ControlesCode.GDupObjects3= [];
gdjs._481ControlesCode.GDdownObjects1= [];
gdjs._481ControlesCode.GDdownObjects2= [];
gdjs._481ControlesCode.GDdownObjects3= [];
gdjs._481ControlesCode.GDleftObjects1= [];
gdjs._481ControlesCode.GDleftObjects2= [];
gdjs._481ControlesCode.GDleftObjects3= [];
gdjs._481ControlesCode.GDrightObjects1= [];
gdjs._481ControlesCode.GDrightObjects2= [];
gdjs._481ControlesCode.GDrightObjects3= [];
gdjs._481ControlesCode.GDNewText2Objects1= [];
gdjs._481ControlesCode.GDNewText2Objects2= [];
gdjs._481ControlesCode.GDNewText2Objects3= [];
gdjs._481ControlesCode.GDespacoObjects1= [];
gdjs._481ControlesCode.GDespacoObjects2= [];
gdjs._481ControlesCode.GDespacoObjects3= [];
gdjs._481ControlesCode.GDDialogoObjects1= [];
gdjs._481ControlesCode.GDDialogoObjects2= [];
gdjs._481ControlesCode.GDDialogoObjects3= [];
gdjs._481ControlesCode.GDEmailInputObjects1= [];
gdjs._481ControlesCode.GDEmailInputObjects2= [];
gdjs._481ControlesCode.GDEmailInputObjects3= [];
gdjs._481ControlesCode.GDUsernameInputObjects1= [];
gdjs._481ControlesCode.GDUsernameInputObjects2= [];
gdjs._481ControlesCode.GDUsernameInputObjects3= [];
gdjs._481ControlesCode.GDLinoBalloonObjects1= [];
gdjs._481ControlesCode.GDLinoBalloonObjects2= [];
gdjs._481ControlesCode.GDLinoBalloonObjects3= [];
gdjs._481ControlesCode.GDLinoTextObjects1= [];
gdjs._481ControlesCode.GDLinoTextObjects2= [];
gdjs._481ControlesCode.GDLinoTextObjects3= [];
gdjs._481ControlesCode.GDusernameTextObjects1= [];
gdjs._481ControlesCode.GDusernameTextObjects2= [];
gdjs._481ControlesCode.GDusernameTextObjects3= [];
gdjs._481ControlesCode.GDemailTextObjects1= [];
gdjs._481ControlesCode.GDemailTextObjects2= [];
gdjs._481ControlesCode.GDemailTextObjects3= [];
gdjs._481ControlesCode.GDStartButtonObjects1= [];
gdjs._481ControlesCode.GDStartButtonObjects2= [];
gdjs._481ControlesCode.GDStartButtonObjects3= [];
gdjs._481ControlesCode.GDclicaAquiObjects1= [];
gdjs._481ControlesCode.GDclicaAquiObjects2= [];
gdjs._481ControlesCode.GDclicaAquiObjects3= [];
gdjs._481ControlesCode.GDLinoObjects1= [];
gdjs._481ControlesCode.GDLinoObjects2= [];
gdjs._481ControlesCode.GDLinoObjects3= [];
gdjs._481ControlesCode.GDBlackFadeObjects1= [];
gdjs._481ControlesCode.GDBlackFadeObjects2= [];
gdjs._481ControlesCode.GDBlackFadeObjects3= [];

gdjs._481ControlesCode.conditionTrue_0 = {val:false};
gdjs._481ControlesCode.condition0IsTrue_0 = {val:false};
gdjs._481ControlesCode.condition1IsTrue_0 = {val:false};
gdjs._481ControlesCode.condition2IsTrue_0 = {val:false};
gdjs._481ControlesCode.condition3IsTrue_0 = {val:false};
gdjs._481ControlesCode.conditionTrue_1 = {val:false};
gdjs._481ControlesCode.condition0IsTrue_1 = {val:false};
gdjs._481ControlesCode.condition1IsTrue_1 = {val:false};
gdjs._481ControlesCode.condition2IsTrue_1 = {val:false};
gdjs._481ControlesCode.condition3IsTrue_1 = {val:false};


gdjs._481ControlesCode.eventsList0 = function(runtimeScene) {

{


gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)) != "teste";
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("UsernameInput"), gdjs._481ControlesCode.GDUsernameInputObjects2);
{for(var i = 0, len = gdjs._481ControlesCode.GDUsernameInputObjects2.length ;i < len;++i) {
    gdjs._481ControlesCode.GDUsernameInputObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


{


gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)) != "teste@teste.com";
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs._481ControlesCode.GDEmailInputObjects1);
{for(var i = 0, len = gdjs._481ControlesCode.GDEmailInputObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDEmailInputObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs._481ControlesCode.mapOfGDgdjs_46_95481ControlesCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs._481ControlesCode.GDStartButtonObjects1});
gdjs._481ControlesCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("UsernameInput"), gdjs._481ControlesCode.GDUsernameInputObjects2);

gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = !(gdjs.evtsExt__InputValidation__IsOnlyLetters.func(runtimeScene, (( gdjs._481ControlesCode.GDUsernameInputObjects2.length === 0 ) ? "" :gdjs._481ControlesCode.GDUsernameInputObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._481ControlesCode.GDUsernameInputObjects2 */
gdjs.copyArray(runtimeScene.getObjects("usernameText"), gdjs._481ControlesCode.GDusernameTextObjects2);
{for(var i = 0, len = gdjs._481ControlesCode.GDUsernameInputObjects2.length ;i < len;++i) {
    gdjs._481ControlesCode.GDUsernameInputObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDusernameTextObjects2.length ;i < len;++i) {
    gdjs._481ControlesCode.GDusernameTextObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs._481ControlesCode.GDEmailInputObjects2);

gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = !(gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs._481ControlesCode.GDEmailInputObjects2.length === 0 ) ? "" :gdjs._481ControlesCode.GDEmailInputObjects2[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
/* Reuse gdjs._481ControlesCode.GDEmailInputObjects2 */
gdjs.copyArray(runtimeScene.getObjects("emailText"), gdjs._481ControlesCode.GDemailTextObjects2);
{for(var i = 0, len = gdjs._481ControlesCode.GDEmailInputObjects2.length ;i < len;++i) {
    gdjs._481ControlesCode.GDEmailInputObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDemailTextObjects2.length ;i < len;++i) {
    gdjs._481ControlesCode.GDemailTextObjects2[i].getBehavior("ShakeObject_PositionAngle").ShakeObject_PositionAngle(1, 5, 5, 5, 0.08, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs._481ControlesCode.GDEmailInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameInput"), gdjs._481ControlesCode.GDUsernameInputObjects1);

gdjs._481ControlesCode.condition0IsTrue_0.val = false;
gdjs._481ControlesCode.condition1IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtsExt__InputValidation__IsValidEmail.func(runtimeScene, (( gdjs._481ControlesCode.GDEmailInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDEmailInputObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs._481ControlesCode.condition0IsTrue_0.val ) {
{
gdjs._481ControlesCode.condition1IsTrue_0.val = gdjs.evtsExt__InputValidation__IsOnlyLetters.func(runtimeScene, (( gdjs._481ControlesCode.GDUsernameInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDUsernameInputObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs._481ControlesCode.condition1IsTrue_0.val) {
/* Reuse gdjs._481ControlesCode.GDEmailInputObjects1 */
/* Reuse gdjs._481ControlesCode.GDUsernameInputObjects1 */
{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}{for(var i = 0, len = gdjs._481ControlesCode.GDEmailInputObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDEmailInputObjects1[i].setReadOnly(true);
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDUsernameInputObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDUsernameInputObjects1[i].setReadOnly(true);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs._481ControlesCode.GDUsernameInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDUsernameInputObjects1[0].getString()));
}{runtimeScene.getGame().getVariables().getFromIndex(3).setString((( gdjs._481ControlesCode.GDEmailInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDEmailInputObjects1[0].getString()));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "27a91a36-5034-4f37-bddc-69f90ee7123f", 1, (( gdjs._481ControlesCode.GDUsernameInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDUsernameInputObjects1[0].getString()) + " " + (( gdjs._481ControlesCode.GDEmailInputObjects1.length === 0 ) ? "" :gdjs._481ControlesCode.GDEmailInputObjects1[0].getString()));
}}

}


};gdjs._481ControlesCode.eventsList2 = function(runtimeScene) {

{


gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs._481ControlesCode.GDBlackFadeObjects1);
{runtimeScene.getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "SwordNonHit.wav", false, 0, 1);
}{for(var i = 0, len = gdjs._481ControlesCode.GDBlackFadeObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDBlackFadeObjects1[i].setOpacity(0);
}
}
{ //Subevents
gdjs._481ControlesCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs._481ControlesCode.GDStartButtonObjects1);

gdjs._481ControlesCode.condition0IsTrue_0.val = false;
gdjs._481ControlesCode.condition1IsTrue_0.val = false;
gdjs._481ControlesCode.condition2IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs._481ControlesCode.mapOfGDgdjs_46_95481ControlesCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs._481ControlesCode.condition0IsTrue_0.val ) {
{
gdjs._481ControlesCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs._481ControlesCode.condition1IsTrue_0.val ) {
{
{gdjs._481ControlesCode.conditionTrue_1 = gdjs._481ControlesCode.condition2IsTrue_0;
gdjs._481ControlesCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21320308);
}
}}
}
if (gdjs._481ControlesCode.condition2IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SwordNonHit.wav", false, 60, 1);
}
{ //Subevents
gdjs._481ControlesCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
gdjs._481ControlesCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs._481ControlesCode.GDBlackFadeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dialogo"), gdjs._481ControlesCode.GDDialogoObjects1);
gdjs.copyArray(runtimeScene.getObjects("EmailInput"), gdjs._481ControlesCode.GDEmailInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("Lino"), gdjs._481ControlesCode.GDLinoObjects1);
gdjs.copyArray(runtimeScene.getObjects("LinoText"), gdjs._481ControlesCode.GDLinoTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText"), gdjs._481ControlesCode.GDNewTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewText2"), gdjs._481ControlesCode.GDNewText2Objects1);
gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs._481ControlesCode.GDStartButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("UsernameInput"), gdjs._481ControlesCode.GDUsernameInputObjects1);
gdjs.copyArray(runtimeScene.getObjects("a"), gdjs._481ControlesCode.GDaObjects1);
gdjs.copyArray(runtimeScene.getObjects("clicaAqui"), gdjs._481ControlesCode.GDclicaAquiObjects1);
gdjs.copyArray(runtimeScene.getObjects("d"), gdjs._481ControlesCode.GDdObjects1);
gdjs.copyArray(runtimeScene.getObjects("down"), gdjs._481ControlesCode.GDdownObjects1);
gdjs.copyArray(runtimeScene.getObjects("emailText"), gdjs._481ControlesCode.GDemailTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("espaco"), gdjs._481ControlesCode.GDespacoObjects1);
gdjs.copyArray(runtimeScene.getObjects("left"), gdjs._481ControlesCode.GDleftObjects1);
gdjs.copyArray(runtimeScene.getObjects("right"), gdjs._481ControlesCode.GDrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("s"), gdjs._481ControlesCode.GDsObjects1);
gdjs.copyArray(runtimeScene.getObjects("up"), gdjs._481ControlesCode.GDupObjects1);
gdjs.copyArray(runtimeScene.getObjects("usernameText"), gdjs._481ControlesCode.GDusernameTextObjects1);
gdjs.copyArray(runtimeScene.getObjects("w"), gdjs._481ControlesCode.GDwObjects1);
{for(var i = 0, len = gdjs._481ControlesCode.GDLinoObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDLinoObjects1[i].setAnimationName("Sneak");
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDLinoTextObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDLinoTextObjects1[i].setString("Bora!");
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDwObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDwObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDsObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDsObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDaObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDaObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDNewTextObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDNewTextObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDdObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDdObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDupObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDupObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDdownObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDdownObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDleftObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDleftObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDrightObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDrightObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDNewText2Objects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDNewText2Objects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDespacoObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDespacoObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDDialogoObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDDialogoObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDEmailInputObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDEmailInputObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDUsernameInputObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDUsernameInputObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDusernameTextObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDusernameTextObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDemailTextObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDemailTextObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDStartButtonObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDStartButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs._481ControlesCode.GDclicaAquiObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDclicaAquiObjects1[i].hide();
}
}{for(var i = 0, len = gdjs._481ControlesCode.GDBlackFadeObjects1.length ;i < len;++i) {
    gdjs._481ControlesCode.GDBlackFadeObjects1[i].setOpacity(gdjs._481ControlesCode.GDBlackFadeObjects1[i].getOpacity() + (150 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackFade"), gdjs._481ControlesCode.GDBlackFadeObjects1);

gdjs._481ControlesCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs._481ControlesCode.GDBlackFadeObjects1.length;i<l;++i) {
    if ( gdjs._481ControlesCode.GDBlackFadeObjects1[i].getOpacity() == 255 ) {
        gdjs._481ControlesCode.condition0IsTrue_0.val = true;
        gdjs._481ControlesCode.GDBlackFadeObjects1[k] = gdjs._481ControlesCode.GDBlackFadeObjects1[i];
        ++k;
    }
}
gdjs._481ControlesCode.GDBlackFadeObjects1.length = k;}if (gdjs._481ControlesCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "02Tutorial", false);
}}

}


};

gdjs._481ControlesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs._481ControlesCode.GDBlueSpaceObjects1.length = 0;
gdjs._481ControlesCode.GDBlueSpaceObjects2.length = 0;
gdjs._481ControlesCode.GDBlueSpaceObjects3.length = 0;
gdjs._481ControlesCode.GDWallObjects1.length = 0;
gdjs._481ControlesCode.GDWallObjects2.length = 0;
gdjs._481ControlesCode.GDWallObjects3.length = 0;
gdjs._481ControlesCode.GDNewTextObjects1.length = 0;
gdjs._481ControlesCode.GDNewTextObjects2.length = 0;
gdjs._481ControlesCode.GDNewTextObjects3.length = 0;
gdjs._481ControlesCode.GDwObjects1.length = 0;
gdjs._481ControlesCode.GDwObjects2.length = 0;
gdjs._481ControlesCode.GDwObjects3.length = 0;
gdjs._481ControlesCode.GDaObjects1.length = 0;
gdjs._481ControlesCode.GDaObjects2.length = 0;
gdjs._481ControlesCode.GDaObjects3.length = 0;
gdjs._481ControlesCode.GDsObjects1.length = 0;
gdjs._481ControlesCode.GDsObjects2.length = 0;
gdjs._481ControlesCode.GDsObjects3.length = 0;
gdjs._481ControlesCode.GDdObjects1.length = 0;
gdjs._481ControlesCode.GDdObjects2.length = 0;
gdjs._481ControlesCode.GDdObjects3.length = 0;
gdjs._481ControlesCode.GDupObjects1.length = 0;
gdjs._481ControlesCode.GDupObjects2.length = 0;
gdjs._481ControlesCode.GDupObjects3.length = 0;
gdjs._481ControlesCode.GDdownObjects1.length = 0;
gdjs._481ControlesCode.GDdownObjects2.length = 0;
gdjs._481ControlesCode.GDdownObjects3.length = 0;
gdjs._481ControlesCode.GDleftObjects1.length = 0;
gdjs._481ControlesCode.GDleftObjects2.length = 0;
gdjs._481ControlesCode.GDleftObjects3.length = 0;
gdjs._481ControlesCode.GDrightObjects1.length = 0;
gdjs._481ControlesCode.GDrightObjects2.length = 0;
gdjs._481ControlesCode.GDrightObjects3.length = 0;
gdjs._481ControlesCode.GDNewText2Objects1.length = 0;
gdjs._481ControlesCode.GDNewText2Objects2.length = 0;
gdjs._481ControlesCode.GDNewText2Objects3.length = 0;
gdjs._481ControlesCode.GDespacoObjects1.length = 0;
gdjs._481ControlesCode.GDespacoObjects2.length = 0;
gdjs._481ControlesCode.GDespacoObjects3.length = 0;
gdjs._481ControlesCode.GDDialogoObjects1.length = 0;
gdjs._481ControlesCode.GDDialogoObjects2.length = 0;
gdjs._481ControlesCode.GDDialogoObjects3.length = 0;
gdjs._481ControlesCode.GDEmailInputObjects1.length = 0;
gdjs._481ControlesCode.GDEmailInputObjects2.length = 0;
gdjs._481ControlesCode.GDEmailInputObjects3.length = 0;
gdjs._481ControlesCode.GDUsernameInputObjects1.length = 0;
gdjs._481ControlesCode.GDUsernameInputObjects2.length = 0;
gdjs._481ControlesCode.GDUsernameInputObjects3.length = 0;
gdjs._481ControlesCode.GDLinoBalloonObjects1.length = 0;
gdjs._481ControlesCode.GDLinoBalloonObjects2.length = 0;
gdjs._481ControlesCode.GDLinoBalloonObjects3.length = 0;
gdjs._481ControlesCode.GDLinoTextObjects1.length = 0;
gdjs._481ControlesCode.GDLinoTextObjects2.length = 0;
gdjs._481ControlesCode.GDLinoTextObjects3.length = 0;
gdjs._481ControlesCode.GDusernameTextObjects1.length = 0;
gdjs._481ControlesCode.GDusernameTextObjects2.length = 0;
gdjs._481ControlesCode.GDusernameTextObjects3.length = 0;
gdjs._481ControlesCode.GDemailTextObjects1.length = 0;
gdjs._481ControlesCode.GDemailTextObjects2.length = 0;
gdjs._481ControlesCode.GDemailTextObjects3.length = 0;
gdjs._481ControlesCode.GDStartButtonObjects1.length = 0;
gdjs._481ControlesCode.GDStartButtonObjects2.length = 0;
gdjs._481ControlesCode.GDStartButtonObjects3.length = 0;
gdjs._481ControlesCode.GDclicaAquiObjects1.length = 0;
gdjs._481ControlesCode.GDclicaAquiObjects2.length = 0;
gdjs._481ControlesCode.GDclicaAquiObjects3.length = 0;
gdjs._481ControlesCode.GDLinoObjects1.length = 0;
gdjs._481ControlesCode.GDLinoObjects2.length = 0;
gdjs._481ControlesCode.GDLinoObjects3.length = 0;
gdjs._481ControlesCode.GDBlackFadeObjects1.length = 0;
gdjs._481ControlesCode.GDBlackFadeObjects2.length = 0;
gdjs._481ControlesCode.GDBlackFadeObjects3.length = 0;

gdjs._481ControlesCode.eventsList2(runtimeScene);
return;

}

gdjs['_481ControlesCode'] = gdjs._481ControlesCode;
