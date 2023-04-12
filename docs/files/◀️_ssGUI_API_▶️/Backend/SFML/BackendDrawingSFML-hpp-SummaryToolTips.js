﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Backend/SFML/BackendDrawingSFML.hpp",{946:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype946\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Backend</div></div></div></div>",947:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype947\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendDrawingSFML</div></div></div><div class=\"TTSummary\">For functions explainations, please see BackendDrawingInterface. Normally you don\'t need to deal with this class</div></div>",949:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype949\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> SaveState() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendDrawingInterface::SaveState</div></div>",950:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype950\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> RestoreState() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendDrawingInterface::RestoreState</div></div>",951:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype951\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> DrawEntities(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;&amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;&amp;&nbsp;</td><td class=\"PName last\">texCoords,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;&amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;<span class=\"SHKeyword\">int</span>&gt;&amp;&nbsp;</td><td class=\"PName last\">counts,</td></tr><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;ssGUI::DrawingProperty&gt;&amp;&nbsp;</td><td class=\"PName last\">properties</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::DrawEntities</div></div>",952:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype952\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Render(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::Render</div></div>",953:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype953\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ClearBackBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::ClearBackBuffer</div></div>",954:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype954\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::AddImageCache</div></div>",955:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype955\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::RemoveImageCache</div></div>",956:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype956\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span>* GetRawImageCacheHandle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::GetRawImageCacheHandle</div></div>"});