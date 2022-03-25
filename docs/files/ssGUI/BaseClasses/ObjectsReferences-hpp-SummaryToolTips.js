﻿NDSummary.OnToolTipsLoaded("File:ssGUI/BaseClasses/ObjectsReferences.hpp",{489:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype489\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",348:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype348\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">ObjectsReferences</div></div></div><div class=\"TTSummary\">The purpose of this class is to track references between each GUI Objects.&nbsp; So when cloning happens, the cloned version of the GUI Objects will be referenced (if present) instead of the original GUI Objects.</div></div>",497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype497\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetObjectsReferencesCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of GUI Object this is referencing</div></div>",498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype498\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> ssGUIObjectIndex AddObjectReference(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Adds the GUI Object to the referencing table. Returns the index of it.</div></div>",499:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype499\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> ssGUI::GUIObject* GetObjectReference(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ssGUIObjectIndex&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the referencing GUI Object of the referencing index. Nullptr is returned if invalid index.</div></div>",500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype500\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetObjectReference(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"first\"></td><td class=\"PType\">ssGUIObjectIndex&nbsp;</td><td class=\"PName last\">index,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the referencing GUI Object with the index</div></div>",501:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype501\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> RemoveObjectReference(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ssGUIObjectIndex&nbsp;</td><td class=\"PName\">index,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">internalCleanUp</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Removes the referencing GUI Object with the index</div></div>",522:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype522\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_AddExternalDependency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ObjectsReferences*&nbsp;</td><td class=\"PName last\">dependency,</td></tr><tr><td class=\"PType first\">ssGUIObjectIndex&nbsp;</td><td class=\"PName last\">index</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Adds the external depending ObjectsReferences</div></div>",526:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype526\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_RemoveExternalDependency(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">ObjectsReferences*&nbsp;</td><td class=\"PName last\">dependency</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Removes the external depending ObjectsReferences</div></div>",504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype504\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> ssGUIObjectIndex GetObjectIndex(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Gets the referencing index by the address of the GUI Object. Returns -1 if not found</div></div>",505:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype505\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> IsObjectReferenceExist(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">const</span></td></tr></table></div></div><div class=\"TTSummary\">Returns true if the GUI Object is being referenced</div></div>",506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype506\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;ssGUIObjectIndex&gt; GetListOfObjectsIndices()</div></div><div class=\"TTSummary\">Gets all the valid referencing index</div></div>",507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype507\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> CleanUp()</div></div><div class=\"TTSummary\">Removes all references to this object</div></div>",508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype508\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> CheckObjectsReferencesValidity()</div></div><div class=\"TTSummary\">Debug function to make sure all the references are valid</div></div>"});