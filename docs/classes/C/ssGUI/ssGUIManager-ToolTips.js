﻿NDContentPage.OnToolTipsLoaded({528:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype528\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Delete()</div></div><div class=\"TTSummary\">Delete the current GUI Object. This will unset the parent of this GUI Object and all it\'s references.&nbsp; This will also deletes all of the children GUI Objects. If this is allocated on the heap, it will be deallocated automiactically. Any referencing to this GUI Object after deleted is undefined.</div></div>",535:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype535\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ImageData</div></div></div><div class=\"TTSummary\">If you are using LoadRawFromMemory, remember to reload it again if there\'s any changes to the image memory.</div></div>",755:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype755\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendSystemInputInterface</div></div></div><div class=\"TTSummary\">This class is the interface for getting all the inputs needed.&nbsp; **There will be changes regarding on how to get key presses and realtime input info soon.**</div></div>",761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype761\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistLastFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistLastFrame</div></div>",762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype762\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistCurrentFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistCurrentFrame</div></div>",772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype772\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCursorType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">CursorType&nbsp;</td><td class=\"PName last\">cursorType</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the cursor type it is currently using.&nbsp; By default, ssGUI::ssGUIManager sets the cursor type back to normal at the end of every frame.</div></div>",777:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype777\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::<span class=\"SHKeyword\">string</span> GetCurrentCustomCursorName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursorName</div></div>",779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype779\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> HasCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::HasCustomCursor</div></div>",784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype784\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClearClipboard() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearClipboard</div></div>",785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype785\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasText() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasText</div></div>",786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype786\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasImage() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasImage</div></div>",787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype787\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardImage</div></div>",788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype788\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardText</div></div>",789:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype789\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardImage</div></div>",790:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype790\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardText</div></div>",791:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype791\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uint64_t GetElapsedTime() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetElapsedTime</div></div>",1188:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1188\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetLastMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Get mouse position relative to the mainWindow from last frame. If nullptr is passed, it will return global mouse position instead.</div></div>",1189:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1189\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> glm::ivec2 GetCurrentMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Get mouse position relative to the mainWindow from current frame. If nullptr is passed, it will return global mouse position instead.</div></div>",1193:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1193\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetCurrentMouseScrollDelta() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Return the direction of mouse scrolling for the current frame.</div></div>",1196:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1196\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::wstring GetTextInput() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Returns all the text typed in current frame.&nbsp; Any characters in here https://&#8203;en&#8203;.wikipedia&#8203;.org&#8203;/wiki&#8203;/List_of_Unicode_characters&#8203;#Control_codes are not recorded in here.</div></div>",1198:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1198\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::CursorType GetCursorType() <span class=\"SHKeyword\">const</span> = <span class=\"SHNumber\">0</span></div></div><div class=\"TTSummary\">Gets the cursor type it is currently using.&nbsp; By default, ssGUI::ssGUIManager sets the cursor type back to normal at the end of every frame.</div></div>",1199:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1199\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> CreateCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">cursorSize,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Creates a custom cursor. The image data of customCursor is copied so it is fine to dispose it if needed.&nbsp; The size of customCurrsor image will be resized to cursorSize if needed.&nbsp; The passed in hotspot must be smaller than cursorSize, (0, 0) as top-left corner.</div></div>",1200:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1200\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Sets the current custom cursor from created custom cursor. Nothing is changed if the custom cursor name cannot be found.</div></div>",1201:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1201\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> GetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Copies the (resized) current custom cursor image data to customCursor image data and returns the hotspot of the cursor.&nbsp; customCursor &amp; hotspot are unchanged if there\'s no custom cursor.</div></div>",1203:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1203\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> GetCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) = <span class=\"SHNumber\">0</span></td></tr></table></div></div><div class=\"TTSummary\">Copies the (resized) custom cursor image data to customCursor image data and returns the hotspot of the cursor.&nbsp; customCursor &amp; hotspot are unchanged if there\'s no custom cursor.</div></div>",1558:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1558\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;GUIObject</div></div></div><div class=\"TTSummary\">This is the implementation class for ssGUI::GUIObject. See ssGUI::GUIObject for more details about the functions</div></div>",1623:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1623\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;MainWindow</div></div></div><div class=\"TTSummary\">Main Window is the <b>actual</b> window. Not to be confused with ssGUI::Window which lives inside MainWindow.&nbsp; You should call Renderer::RedrawObject after changing the properties of the MainWindow.&nbsp; This class should not be overwritten unless you know what you are doing</div></div>",2055:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2055\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;ssGUIManager</div></div></div><div class=\"TTSummary\">This manages all the GUI Objects, system input, update and render order, etc...&nbsp; There\'s should only be 1 instance of ssGUIManager.</div></div>",2057:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2057\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddRootGUIObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This is only used internally, used the template version instead.&nbsp; Only main window should be added, the reason why it is accepting ssGUI::GUIObject is for future compatibility.</div></div>",2067:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2067\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> AddPostGUIUpdateEventListener(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">void</span>()&gt;&nbsp;</td><td class=\"PName last\">event</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds event callback that gets triggered after the update function (before render function) is called for GUI objects.&nbsp; Returns index that can be used to remove the event callback later.</div></div>",2069:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2069\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemovePostGUIUpdateEventListener(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes event callback that gets triggered after the update function (before render function) is called for GUI objects</div></div>"});