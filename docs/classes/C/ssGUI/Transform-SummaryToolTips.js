﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Transform",{429:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype429\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Transform</div></div></div><div class=\"TTSummary\">This manages all the position and size related information for a GUI Object</div></div>",431:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype431\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetPosition() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the local position against the parent from the anchor point. By default the anchor point is at the top-left corner of the parent.&nbsp; Note that windows excludes title bar from the position calculation. Calling this function on MainWindow object will always return (0, 0)</div></div>",432:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype432\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the local poisition against the parent from the anchor point</div></div>",433:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype433\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetGlobalPosition()</div></div><div class=\"TTSummary\">Gets the global position against the top-left corner of MainWindow it is parented. Title bar is excluded from the position calculation.</div></div>",434:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype434\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetGlobalPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the global position against the top-left corner of MainWindow it is parented</div></div>",435:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype435\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the size of the GUI Object</div></div>",436:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype436\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">size</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the size of the GUI Object</div></div>",437:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype437\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetMinSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the minimum size of the GUI Object. Setting the size to be below minimum size will set the size to minimum instead.</div></div>",438:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype438\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMinSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">minSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the minimum size of the GUI Object. Setting minimum size to be negative infinte is possible.</div></div>",439:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype439\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::vec2 GetMaxSize() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the maximum size of the GUI Object. Setting the size to be above maximum size will set the size to maximum instead.</div></div>",440:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype440\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetMaxSize(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">maxSize</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the maximum size of the GUI Object. Setting maximum size to be infinte is possible.</div></div>",441:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype441\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::AnchorType GetAnchorType() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the anchor type of this GUI Object</div></div>",442:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype442\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetAnchorType(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">AnchorType&nbsp;</td><td class=\"PName last\">anchorType</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the anchor type of this GUI Object</div></div>"});