﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/GUIObjectClasses/Image.hpp",{1394:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1394\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",1395:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1395\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Image</div></div></div><div class=\"TTSummary\">A class that can show the content of ImageData</div></div>",1397:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1397\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::ImageData* GetImageData() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the ImageData object used by this Image widget. Returns nullptr if no ImageData is used</div></div>",1398:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1398\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetImageData(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">ImageData*&nbsp;</td><td class=\"PName last\">imageData</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the ImageData object to be used by this Image widget.&nbsp; To unset the image data from this object, simply pass in nullptr.&nbsp; Note that the image data must be valid (if non-nullptr is set) before this object is destroyed.</div></div>",1399:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1399\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::ImageFitting GetFitting() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns how the image will be fitted inside this Image Widget</div></div>",1400:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1400\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFitting(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">ImageFitting&nbsp;</td><td class=\"PName last\">fitting</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets how the image will be fitted inside this Image Widget</div></div>",1401:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1401\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetImageTint(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">u8vec4&nbsp;</td><td class=\"PName last\">tint</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the tint of the image. (255, 255, 255, 255) would be the normal image color</div></div>",1402:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1402\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> glm::u8vec4 GetImageTint() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the tint of the image. (255, 255, 255, 255) would be the normal image color</div></div>",1403:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1403\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Image* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::Clone</div></div>"});