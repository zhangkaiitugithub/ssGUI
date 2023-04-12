﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Extensions/RoundedCorners.hpp",{2029:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2029\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Extensions</div></div></div></div>",2030:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype2030\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;RoundedCorners</div></div></div><div class=\"TTSummary\">This extension rounds the corner of the selected shapes or vertices on the GUI object. This works best with anti-aliasing.</div></div>",2032:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2032\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetRoundedCornersRadius(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">radius</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the radius for the rounded corners. Note that it will use the largest possible radius if this is not available.</div></div>",2033:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2033\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual float</span> GetRoundedCornersRadius() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the radius for the rounded corners</div></div>",2034:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2034\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddTargetShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">shapeIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds the shapeIndex that indicates the index of the shape to be rounded drawn in GUI object.&nbsp; Note that if you have added any target vertices (AddTargetVertex), this will be <b>ignored</b>.</div></div>",2035:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2035\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> GetTargetShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the shapeIndex that indicates the index of the shape to be rounded drawn in GUI object, by specifying the location shapedIndex that is stored in this extension.</div></div>",2036:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2036\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTargetShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">shapeIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the shapeIndex that indicates the index of the shape to be rounded drawn in GUI object, by specifying the location shapedIndex that is stored in this extension.</div></div>",2037:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2037\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetTargetShapesCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of shapes to be rounded (number of shapeIndex) that are stored in this extension.</div></div>",2038:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2038\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveTargetShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the shapeIndex that indicates the index of the shape to be rounded drawn in GUI object, by specifying the location shapedIndex that is stored in this extension.</div></div>",2039:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2039\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearTargetShapes()</div></div><div class=\"TTSummary\">Clears all the shapeIndex entries in this extension</div></div>",2040:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2040\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> AddTargetVertex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">vertexIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds the target vertex that indicates the index of the vertex to be rounded drawn in GUI object, by specifying the location vertexIndex that is stored in this extension.&nbsp; Note that if you are adding any target vertices, any target shapes added (AddTargetShape) this will be ignored.</div></div>",2041:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2041\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> GetTargetVertex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns the vertexIndex that indicates the index of the vertex to be rounded drawn in GUI object, by specifying the location vertexIndex that is stored in this extension.</div></div>",2042:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2042\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetTargetVertex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location,</td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">vertexIndex</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the vertexIndex that indicates the index of the vertex to be rounded drawn in GUI object, by specifying the location vertexIndex that is stored in this extension.</div></div>",2043:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2043\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetTargetVerticesCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of indices to be rounded (number of vertexIndex) that are stored in this extension.</div></div>",2044:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2044\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveTargetVertex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">location</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the vertexIndex that indicates the index of the vertex to be rounded drawn in GUI object, by specifying the location vertexIndex that is stored in this extension.</div></div>",2045:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2045\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearTargetVertices()</div></div><div class=\"TTSummary\">Clears all the vertexIndex entries in this extension</div></div>",2046:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2046\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",2047:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2047\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",2048:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2048\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",2049:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2049\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",2050:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2050\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",2051:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2051\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",2052:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2052\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",2053:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype2053\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> RoundedCorners* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});