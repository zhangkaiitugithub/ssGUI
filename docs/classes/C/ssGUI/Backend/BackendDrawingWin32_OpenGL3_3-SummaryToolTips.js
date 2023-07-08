﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Backend.BackendDrawingWin32_OpenGL3_3",{39:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype39\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Backend::</span>&#8203;BackendDrawingWin32_OpenGL3_3</div></div></div><div class=\"TTSummary\">For functions explainations, please see BackendDrawingInterface. Normally you don\'t need to deal with this class</div></div>",55:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype55\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> SaveState() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendDrawingInterface::SaveState</div></div>",620:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype620\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> RestoreState() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendDrawingInterface::RestoreState</div></div>",621:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype621\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> DrawEntities(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\"><span class=\"SHKeyword\">const</span> std::</td><td class=\"PType\">vector&lt;ssGUI::DrawingEntity&gt;&amp;&nbsp;</td><td class=\"PName last\">entities</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::DrawEntities</div></div>",623:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype623\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">void</span> DrawToBackBuffer() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See BackendDrawingInterface::DrawToBackBuffer</div></div>",1991:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1991\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> Render(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::Render</div></div>",1992:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1992\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ClearBackBuffer(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec3&nbsp;</td><td class=\"PName last\">clearColor</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">For some reason windows implementation of OpenGL (AMD and Nvidia) creates memory leak when calling GLClear without swapping buffer.&nbsp; Therefore, this doesn\'t do anything for now.</div></div>",1993:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1993\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> AddImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::AddImageCache</div></div>",1994:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1994\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveImageCache(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::RemoveImageCache</div></div>",1995:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1995\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span>* GetRawImageCacheHandle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendImageInterface*&nbsp;</td><td class=\"PName last\">backendImage</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See BackendDrawingInterface::GetRawImageCacheHandle</div></div>"});