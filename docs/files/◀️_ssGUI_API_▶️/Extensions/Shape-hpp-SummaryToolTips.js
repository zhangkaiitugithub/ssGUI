﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/Extensions/Shape.hpp",{1752:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1752\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Extensions</div></div></div></div>",1753:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1753\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::&#8203;Extensions::</span>&#8203;Shape</div></div></div><div class=\"TTSummary\">Shape extension allows adding/removing shapes in runtime on the GUI Object without too much effort. This would not work with ssGUI::MainWindow</div></div>",1755:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1755\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional polygon in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1756:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1756\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional polygon in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1757:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1757\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalPolygon()</div></div><div class=\"TTSummary\">Adding additional empty polygon in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1758:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1758\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional rectangle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1759:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1759\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional rectangle in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1760:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1760\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalRectangle()</div></div><div class=\"TTSummary\">Adding additional empty rectangle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1761:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1761\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional circle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1762:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1762\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional circle in addition to GUI Object.&nbsp; The additional shape will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1763:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1763\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalCircle()</div></div><div class=\"TTSummary\">Adding additional empty circle in addition to GUI Object.&nbsp; The additional shape will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1764:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1764\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional line in addition to GUI Object.&nbsp; The additional line will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1765:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1765\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adding additional line in addition to GUI Object.&nbsp; The additional line will be added in the list of additional shapes at index position stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1766:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1766\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> AddAdditionalLine()</div></div><div class=\"TTSummary\">Adding additional empty line in addition to GUI Object.&nbsp; The additional line will be appended in the list of additional shapes stored in this extension.&nbsp; This returns an ID for uniquely identifying the shape just added within this extension for getting, setting and removing it.</div></div>",1767:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1767\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalPolygon(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::vec2&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">vertices,</td></tr><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;glm::u8vec4&gt;<span class=\"SHKeyword\">const</span> &amp;&nbsp;</td><td class=\"PName last\">colors,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning rectangle or circle additional shape can be set to polygon using this function.</div></div>",1768:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1768\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalRectangle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning polygon or circle additional shape can be set to rectangle using this function.</div></div>",1769:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1769\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalCircle(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">pos,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">color,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning polygon or rectangle additional shape can be set to circle using this function.</div></div>",1770:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1770\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAdditionalLine(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">start,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">end,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">startThickness,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">float</span>&nbsp;</td><td class=\"PName last\">endThickness,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">startColor,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">endColor,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">behindGUIObject</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This sets the additional shape with target id. The additional shape with target id is not limited to the same type, meaning other additional shape can be set to circle using this function.</div></div>",1771:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1771\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::vec2&gt;* GetAdditionalShapeVerticesWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape vertices vector that is at target index stored in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices.&nbsp; Nullptr can be returned if index is invalid.</div></div>",1772:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1772\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::vec2&gt;* GetAdditionalShapeVerticesWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape vertices vector with target id in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices.&nbsp; Nullptr can be returned if the id is invalid.</div></div>",1773:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1773\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::u8vec4&gt;* GetAdditionalShapeColorsWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape colors vector that is at target index stored in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices colors.&nbsp; Nullptr can be returned if index is invalid.</div></div>",1774:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1774\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;glm::u8vec4&gt;* GetAdditionalShapeColorsWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This returns a pointer to the target shape colors vector with target id in this extension.&nbsp; This should not be used for a long period of time as the vector can be reallocated somewhere else.&nbsp; Also remember to redraw the GUI Object if changing any vertices colors.&nbsp; Nullptr can be returned if the id is invalid.</div></div>",1775:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1775\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetAdditionalShapesCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">This returns the total number of additional shapes</div></div>",1776:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1776\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> ClearAllAdditionalShapes()</div></div><div class=\"TTSummary\">This removes all the additional shapes</div></div>",1777:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1777\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveAdditionalShapeWithIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the additional shape at target index stored in this extension</div></div>",1778:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1778\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveAdditionalShapeWithID(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">id</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the additional shape with target id stored in this extension</div></div>",1779:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1779\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveGUIObjectShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This removes the shape relative to the GUI Object shape with index</div></div>",1780:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1780\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RestoreGUIObjectShape(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">int</span>&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">This restores the shape removed by RemoveGUIObjectShape relative to the GUI Object shape with index</div></div>",1781:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1781\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsEnabled() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Extension::IsEnabled</div></div>",1782:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1782\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Update(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreUpdate,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendSystemInputInterface*&nbsp;</td><td class=\"PName last\">inputInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">InputStatus&amp;&nbsp;</td><td class=\"PName last\">inputStatus,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Update</div></div>",1783:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1783\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_Draw(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">isPreRender,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Backend::</td><td class=\"PType\">BackendDrawingInterface*&nbsp;</td><td class=\"PName last\">drawingInterface,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">mainWindow,</td></tr><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">mainWindowPositionOffset</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Internal_Draw</div></div>",1784:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1784\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::<span class=\"SHKeyword\">string</span> GetExtensionName() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::GetExtensionName</div></div>",1785:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1785\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> BindToObject(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">bindObj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::BindToObject</div></div>",1786:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1786\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Copy(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Extensions::</td><td class=\"PType\">Extension*&nbsp;</td><td class=\"PName last\">extension</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Extension::Copy</div></div>",1787:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1787\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Internal_GetObjectsReferences</div></div>",1788:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1788\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> Shape* Clone() <span class=\"SHKeyword\">override</span></div></div><div class=\"TTSummary\">See Extension::Clone</div></div>"});