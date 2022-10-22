﻿NDSummary.OnToolTipsLoaded("CClass:ssGUI.Hierarchy",{985:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype985\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Hierarchy</div></div></div><div class=\"TTSummary\">This manages all the information related to the hierarchy status of a GUI Object</div></div>",487:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype487\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::GUIObject* GetParent() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the parent of the GUI Object. Nullptr will be returned if there\'s no parent set.</div></div>",1680:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1680\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetParent(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName\">newParent,</td><td></td><td class=\"last\"></td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName\">compositeChild</td><td class=\"PDefaultValueSeparator\">&nbsp;=&nbsp;</td><td class=\"PDefaultValue last\"><span class=\"SHKeyword\">false</span></td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the parent of the GUI Object. Setting nullptr will unset the parent.</div></div>",1685:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1685\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildComposite() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">True if the current child (see FindChild) belongs to this composite object</div></div>",489:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype489\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual int</span> GetChildrenCount() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the number of children parented to this GUI Object. (Non recursive)</div></div>",490:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype490\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> MoveChildrenIteratorToFirst()</div></div><div class=\"TTSummary\">Moves the children iterator to the first child.&nbsp; To preserve the current children iterator, use StashChildrenIterator.&nbsp; Please note that if the current children iterator points to a child that is removed then it will be invalid and IsChildrenIteratorEnd will return true.</div></div>",491:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype491\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> MoveChildrenIteratorToLast()</div></div><div class=\"TTSummary\">Moves the children iterator to the last child.&nbsp; To preserve the current children iterator, use StashChildrenIterator.&nbsp; Please note that if the current children iterator points to a child that is removed then it will be invalid and IsChildrenIteratorEnd will return true.</div></div>",492:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype492\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> MoveChildrenIteratorNext()</div></div><div class=\"TTSummary\">Moves the children iterator to the next child.&nbsp; To preserve the current children iterator, use StashChildrenIterator.&nbsp; Please note that if the current children iterator points to a child that is removed then it will be invalid and IsChildrenIteratorEnd will return true.</div></div>",493:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype493\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> MoveChildrenIteratorPrevious()</div></div><div class=\"TTSummary\">Moves the children iterator to the previous child.&nbsp; To preserve the current children iterator, use StashChildrenIterator.&nbsp; Please note that if the current children iterator points to a child that is removed then it will be invalid and IsChildrenIteratorEnd will return true.</div></div>",494:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype494\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildrenIteratorLast()</div></div><div class=\"TTSummary\">Returns true if the iterator is on the last child</div></div>",495:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype495\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildrenIteratorFirst()</div></div><div class=\"TTSummary\">Returns true if the iterator is on the first child</div></div>",496:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype496\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsChildrenIteratorEnd()</div></div><div class=\"TTSummary\">Returns true if the iterator is <u>beyond</u> the first or last child</div></div>",497:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype497\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> StashChildrenIterator()</div></div><div class=\"TTSummary\">Stores the current children iterator on the stack. Any modification will not affect the children iterator.&nbsp; However, if the stashed children iterator points to a child that is removed then the stashed children iterator will be invalid and IsChildrenIteratorEnd will be true when the stashed iterator is restored (popped).</div></div>",498:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype498\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> PopChildrenIterator()</div></div><div class=\"TTSummary\">Pops the most recent stashed children iterator back to the current children iterator.&nbsp; Please note that if the stashed children iterator points to a child that is removed then the stashed children iterator will be invalid, meaning IsChildrenIteratorEnd will be true.</div></div>",499:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype499\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual bool</span> FindChild(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">child</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">If a child exists is parented to this GUI Object, this will move the children iterator to it and returns true.&nbsp; Otherwise, the children iterator is untouched and this will return false.&nbsp; To preserve the current children iterator, use StashChildrenIterator.</div></div>",500:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype500\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::GUIObject* GetCurrentChild()</div></div><div class=\"TTSummary\">Returns the object the children iterator is currently pointing to. This will remove nullptr if it is not pointing at any child.&nbsp; To check if the current children iterator is valid, use IsChildrenIteratorEnd.</div></div>",1688:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1688\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Hierarchy::ChildToken GetCurrentChildToken()</div></div><div class=\"TTSummary\">Returns the underlying childrenIterator used for this GUI Object</div></div>",1689:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1689\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ChangeChildOrderToBeforePosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Hierarchy::</td><td class=\"PType\">ChildToken&nbsp;</td><td class=\"PName last\">child,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Hierarchy::</td><td class=\"PType\">ChildToken&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes the child\'s position to be in front of said position. Use GetCurrentChildToken to get the iterator.</div></div>",1690:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1690\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> ChangeChildOrderToAfterPosition(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::Hierarchy::</td><td class=\"PType\">ChildToken&nbsp;</td><td class=\"PName last\">child,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Hierarchy::</td><td class=\"PType\">ChildToken&nbsp;</td><td class=\"PName last\">position</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Changes the child\'s position to be in behind of said position. Use GetCurrentChildToken to get the iterator.</div></div>",504:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype504\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> std::vector&lt;ssGUI::GUIObject*&gt; GetListOfChildren() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets a list of children</div></div>",1694:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1694\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_AddChild(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj,</td></tr><tr><td class=\"first\"></td><td class=\"PType\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">compositeChild</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Adds the GUI Object to the children record. Use SetParent instead for adding or removing child.</div></div>",506:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype506\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_RemoveChild(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">obj</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Removes the GUI Object to the children record. Use SetParent instead for adding or removing child.</div></div>",507:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype507\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetUserCreated(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">created</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the UserCreated flag. True if this GUI Object\'s lifetime is managed explcitly, otherwise managed by ssGUI object/extension.</div></div>",508:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype508\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsUserCreated() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Returns the UserCreated flag. True if this GUI Object\'s lifetime is managed explcitly, otherwise managed by ssGUI object/extension.</div></div>",509:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype509\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsFocused() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Return if this GUI Object is focused</div></div>",510:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype510\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Set this GUI Object to be focused</div></div>",511:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype511\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_SetSelfFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Set the focus of the GUI object without affect any other GUI object</div></div>",512:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype512\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual void</span> Delete()</div></div><div class=\"TTSummary\">Delete the current GUI Object. This will unset the parent of this GUI Object and all it\'s references.&nbsp; This will also deletes all of the children GUI Objects. If this is allocated on the heap, it will be deallocated automiactically. Any referencing to this GUI Object after deleted is undefined.</div></div>",513:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype513\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> Internal_IsDeleted() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">(Internal ssGUI function) This is used to determined if this GUI Object is &quot;deleted&quot; or not.</div></div>",514:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype514\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetHeapAllocated(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">heap</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the HeapAllocated flag of this GUI Object. If true, this object will be deleted from the heap automatically after the Delete function is called.</div></div>",515:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype515\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual bool</span> IsHeapAllocated() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the HeapAllocated flag of this GUI Object. If true, this object will be deleted from the heap automatically after the Delete function is called.</div></div>",516:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype516\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_ManualDeletion(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">std::</td><td class=\"PType\">vector&lt;ssGUI::ssGUIObjectIndex&gt;&nbsp;</td><td class=\"PName last\">generatedObjs</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">(Internal ssGUI function) Allow a composite GUI object to be able to deallocate itself with its generated GUI objects when the destructor is being called</div></div>",517:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype517\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ObjectsReferences* Internal_GetObjectsReferences()</div></div><div class=\"TTSummary\">(Internal ssGUI function) Returns the pointer of the ObjectReferences</div></div>"});