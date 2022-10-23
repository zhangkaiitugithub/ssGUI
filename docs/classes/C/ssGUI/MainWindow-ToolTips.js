﻿NDContentPage.OnToolTipsLoaded({519:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype519\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ImageData</div></div></div><div class=\"TTSummary\">If you are using LoadRawFromMemory, remember to reload it again if there\'s any changes to the image memory.</div></div>",592:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype592\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;InputStatus</div></div></div></div>",738:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype738\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendMainWindowInterface</div></div></div></div>",789:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype789\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendSystemInputInterface</div></div></div><div class=\"TTSummary\">This class is the interface for getting all the inputs needed.&nbsp; **There will be changes regarding on how to get key presses and realtime input info soon.**</div></div>",863:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype863\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendDrawingInterface</div></div></div></div>",1076:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1076\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Window</div></div></div><div class=\"TTSummary\">A base classes for any window GUI Object (including MainWindow). By itself, it can be used as a window that\'s inside MainWindow.&nbsp; By default, it can be resized or move by a cursor.</div></div>",1078:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1078\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Close()</div></div><div class=\"TTSummary\">Calling this function will triggers the ssGUI::EventCallbacks::OnWindowCloseEventCallback and sets this window\'s parent to nullptr.&nbsp; By default, the window will be deleted automatically after closing. You can change this behaviour by calling SetDeleteAfterClosed.</div></div>",1080:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1080\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> AbortClosing()</div></div><div class=\"TTSummary\">Calling this function will abort the closing operation. Meaning calling IsClosed will return false.&nbsp; Note that you <b>have to</b> call this in the ssGUI::EventCallbacks::OnWindowCloseEventCallback in order for this to work.</div></div>",1081:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1081\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Internal_OnClose()</div></div><div class=\"TTSummary\">(Internal ssGUI function) You should not be calling this function normally.</div></div>",1109:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1109\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See GUIObject::GetType</div></div>",1110:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1110\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Window* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See GUIObject::Clone</div></div>",1122:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1122\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;GUIObject</div></div></div><div class=\"TTSummary\">This is the implementation class for ssGUI::GUIObject. See ssGUI::GUIObject for more details about the functions</div></div>",1131:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1131\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Update function called by ssGUIManager</div></div>",1236:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1236\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;MainWindow</div></div></div><div class=\"TTSummary\">Main Window is the <b>actual</b> window. Not to be confused with ssGUI::Window which lives inside MainWindow.&nbsp; You should call &lt;GUIObject::RedrawObject&gt; after changing the properties of the MainWindow.&nbsp; This class should not be overwritten unless you know what you are doing</div></div>",1242:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1242\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetDisplayPosition() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See &lt;BackendMainWindowInterface::GetDisplayPosition&gt;</div></div>",1243:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1243\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetDisplayPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">pos</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See &lt;BackendMainWindowInterface::SetDisplayPosition&gt;</div></div>",1255:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1255\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetVisible(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">visible</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">See &lt;BackendMainWindowInterface::SetVisible&gt;</div></div>",1256:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1256\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsVisible() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">See &lt;BackendMainWindowInterface::IsVisible&gt;</div></div>",1260:"<div class=\"NDToolTip TStruct LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1260\"><div class=\"CPEntry TStruct Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">struct</span></div><div class=\"CPName\">RealtimeInputInfo</div></div></div><div class=\"TTSummary\">An input info object that records the input status for each input changes within a frame</div></div>",1613:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1613\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ssGUIManager</div></div></div><div class=\"TTSummary\">This manages all the GUI Objects, system input, update and render order, etc...&nbsp; There\'s should only be 1 instance of ssGUIManager.</div></div>"});