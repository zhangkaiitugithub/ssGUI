﻿NDSummary.OnToolTipsLoaded("File:◀️_ssGUI_API_▶️/GUIObjectClasses/Menu.hpp",{1449:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1449\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\">ssGUI</div></div></div></div>",1450:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1450\"><div class=\"CPEntry TClass Current\"><div class=\"CPModifiers\"><span class=\"SHKeyword\">namespace</span> </div><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Enums</div></div></div></div>",1454:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1454\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">inline</span> std::<span class=\"SHKeyword\">string</span> MenuSpawnDirectionToString(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\">MenuSpawnDirection&nbsp;</td><td class=\"PName last\">menuDirection</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div></div>",1455:"<div class=\"NDToolTip TClass LC\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype1455\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\"><span class=\"Qualifier\">ssGUI::</span>&#8203;Menu</div></div></div><div class=\"TTSummary\">This class manages ssGUI::MenuItem to show menus such as right click menu or menu bar menu.&nbsp; Normally this should be added to MainWindow directly so that it can always be shown in front.</div></div>",1457:"<div class=\"NDToolTip TVariable LC\"><div id=\"NDPrototype1457\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">static const</span> std::<span class=\"SHKeyword\">string</span> ListenerKey</div></div></div>",1459:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1459\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\">ssGUI::Enums::MenuSpawnDirection GetMenuSpawnDirection(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">globalSpawnPosition</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">When spawning the menu, it can be positioned differently depending on the spawn position.&nbsp; This returns the spawn direction against the globalSpawnPosition</div></div>",1460:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1460\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SpawnMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">globalPosition</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spawns the menu at globalPosition</div></div>",1461:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1461\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">bool</span> CanSpawnMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">globalSpawnPosition,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MenuSpawnDirection&nbsp;</td><td class=\"PName last\">direction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">You can spawn the menu with a specified spawn direction, this function returns if such operation is possible.</div></div>",1462:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1462\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> ForceSpawnMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">glm::</td><td class=\"PType\">vec2&nbsp;</td><td class=\"PName last\">globalPosition,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::Enums::</td><td class=\"PType\">MenuSpawnDirection&nbsp;</td><td class=\"PName last\">direction</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Spawn the menu with a spawn direction specified.</div></div>",1463:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1463\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RegisterMenuItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">MenuItem*&nbsp;</td><td class=\"PName last\">menuItem</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the menu item\'s parent to the menu and register different callbacks internally</div></div>",1464:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1464\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> RemoveMenuItem(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">MenuItem*&nbsp;</td><td class=\"PName last\">menuItem</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Deletes the menu item</div></div>",1465:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1465\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::MenuItem* AddMenuItem()</div></div><div class=\"TTSummary\">This is equivalent to</div></div>",1466:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1466\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> LinkMenuItemToSubMenu(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">MenuItem*&nbsp;</td><td class=\"PName last\">menuItem,</td></tr><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">Menu*&nbsp;</td><td class=\"PName last\">subMenu</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Links a sub menu against a menu item, the sub menu must be parented to the menu in order for it to work properly.</div></div>",1467:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1467\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">void</span> SetMenuTarget(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PModifierQualifier first\">ssGUI::</td><td class=\"PType\">GUIObject*&nbsp;</td><td class=\"PName last\">target</td></tr></table></td><td class=\"PAfterParameters\">)</td></tr></table></div></div><div class=\"TTSummary\">Sets the target of the menu that is spawned on, meaning the GUI Object that &quot;spawns&quot; the menu.&nbsp; This is automatically called when calling ssGUI::GUIObject::RegisterRightClickMenu.&nbsp; If you want to spawn menu programmatically instead of right clicking, you can be called by SpawnMenu or ForceSpawnMenu.&nbsp; To unset the target, set it to nullptr.</div></div>",1468:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1468\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">ssGUI::GUIObject* GetMenuTarget() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets the target of the menu that is spawned on, meaning the GUI Object that &quot;spawns&quot; the menu.&nbsp; This can return nullptr if not a specific GUI Object spawned it.</div></div>",1469:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1469\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">std::vector&lt;ssGUI::MenuItem*&gt; GetListOfMenuItems() <span class=\"SHKeyword\">const</span></div></div><div class=\"TTSummary\">Gets all the menu items (Non recursive) under this menu</div></div>",1470:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1470\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> SetFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Hierarchy::SetFocus</div></div>",1471:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1471\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual void</span> Internal_SetSelfFocus(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">focus</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See ssGUI::Hierarchy::Internal_SetSelfFocus</div></div>",1472:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1472\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\"><span class=\"SHKeyword\">virtual</span> ssGUI::Enums::GUIObjectType GetType() <span class=\"SHKeyword\">const override</span></div></div><div class=\"TTSummary\">See Widget::GetType</div></div>",1473:"<div class=\"NDToolTip TFunction LC\"><div id=\"NDPrototype1473\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection CStyle\"><table><tr><td class=\"PBeforeParameters\"><span class=\"SHKeyword\">virtual</span> Menu* Clone(</td><td class=\"PParametersParentCell\"><table class=\"PParameters\"><tr><td class=\"PType first\"><span class=\"SHKeyword\">bool</span>&nbsp;</td><td class=\"PName last\">cloneChildren</td></tr></table></td><td class=\"PAfterParameters\">) <span class=\"SHKeyword\">override</span></td></tr></table></div></div><div class=\"TTSummary\">See Widget::Clone</div></div>"});