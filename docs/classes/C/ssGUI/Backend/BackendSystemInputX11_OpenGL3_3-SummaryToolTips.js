﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Backend.BackendSystemInputX11_OpenGL3_3",{718:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype718\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendSystemInputX11_OpenGL3_3</div></div></div><div class=\"TTSummary\">This class is the interface for getting all the inputs needed.&nbsp; **There will be changes regarding on how to get key presses and realtime input info soon.**</div></div>",720:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype720\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateInput() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateInput</div></div>",721:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype721\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetLastButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastButtonAndKeyPresses</div></div>",722:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype722\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">const</span> std::vector&lt;ssGUI::Enums::GenericButtonAndKeyInput&gt;&amp; GetCurrentButtonAndKeyPresses() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentButtonAndKeyPresses</div></div>",723:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype723\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistLastFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistLastFrame</div></div>",724:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype724\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> IsButtonOrKeyPressExistCurrentFrame(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">GenericButtonAndKeyInput&nbsp;</td><td class=\"PName last\">input</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::IsButtonOrKeyPressExistCurrentFrame</div></div>",725:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype725\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">glm::ivec2 GetLastMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastMousePosition</div></div>",726:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype726\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">glm::ivec2 GetCurrentMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMousePosition</div></div>",727:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype727\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMousePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">position,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendMainWindowInterface*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetMousePosition</div></div>",728:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype728\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetLastMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastMouseButton</div></div>",729:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype729\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetCurrentMouseButton(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MouseButton&nbsp;</td><td class=\"PName last\">button</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMouseButton</div></div>",730:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype730\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">glm::vec2 GetCurrentMouseScrollDelta() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentMouseScrollDelta</div></div>",731:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype731\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::vector&lt;ssGUI::RealtimeInputInfo&gt; <span class=\"SHKeyword\">const</span> &amp; GetLastRealtimeInputs() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetLastRealtimeInputs</div></div>",732:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype732\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::vector&lt;ssGUI::RealtimeInputInfo&gt; <span class=\"SHKeyword\">const</span> &amp; GetCurrentRealtimeInputs() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentRealtimeInputs</div></div>",733:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype733\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::wstring GetTextInput() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetTextInput</div></div>",734:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype734\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCursorType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">CursorType&nbsp;</td><td class=\"PName last\">cursorType</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetCursorType</div></div>",735:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype735\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::Enums::CursorType GetCursorType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCursorType</div></div>",736:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype736\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> CreateCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">cursorSize,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::CreateCustomCursor</div></div>",737:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype737\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetCurrentCustomCursor</div></div>",738:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype738\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetCurrentCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursor</div></div>",739:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype739\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::<span class=\"SHKeyword\">string</span> GetCurrentCustomCursorName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCurrentCustomCursorName</div></div>",740:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype740\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> GetCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">customCursor,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">ivec2&amp;&nbsp;</td><td class=\"PName last\">hotspot</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetCustomCursor</div></div>",741:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype741\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> HasCustomCursor(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">string</span>&nbsp;</td><td class=\"PName last\">cursorName</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::HasCustomCursor</div></div>",742:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype742\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> UpdateCursor() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::UpdateCursor</div></div>",743:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype743\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">int</span> AddRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\"><span class=\"SHKeyword\">function</span>&lt;<span class=\"SHKeyword\">bool</span>(ssGUI::Backend::BackendMainWindowInterface*, <span class=\"SHKeyword\">void</span>*)&gt;&nbsp;</td><td class=\"PName last\">handler</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::AddRawEventHandler</div></div>",744:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype744\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveRawEventHandler(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::RemoveRawEventHandler</div></div>",745:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype745\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> ClearRawEventHandler() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearRawEventHandler</div></div>",746:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype746\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClearClipboard() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClearClipboard</div></div>",747:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype747\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasText() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasText</div></div>",748:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype748\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">bool</span> ClipbaordHasImage() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::ClipbaordHasImage</div></div>",749:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype749\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardImage</div></div>",750:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype750\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> SetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::SetClipboardText</div></div>",751:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype751\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardImage(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface&amp;&nbsp;</td><td class=\"PName last\">imgData</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardImage</div></div>",752:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype752\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> GetClipboardText(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">wstring&amp;&nbsp;</td><td class=\"PName last\">str</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetClipboardText</div></div>",753:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype753\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">uint64_t GetElapsedTime() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See BackendSystemInputInterface::GetElapsedTime</div></div>"});