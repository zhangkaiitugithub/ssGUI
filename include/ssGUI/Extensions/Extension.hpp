#ifndef SSGUI_EXTENSION
#define SSGUI_EXTENSION


#include "ssGUI/Backend/Interfaces/BackendSystemInputInterface.hpp"
#include "ssGUI/Backend/Interfaces/BackendDrawingInterface.hpp"
#include "ssGUI/BaseClasses/InputStatus.hpp"
#include "ssGUI/BaseClasses/ObjectsReferences.hpp"
#include "ssGUI/DebugAndBuild/ssGUIBuildAndDebugConfig.hpp"
#include "glm/vec2.hpp"
#include <string>

namespace ssGUI
{
    class GUIObject;
}

//namespace: ssGUI::Extensions
namespace ssGUI::Extensions
{   
    //class: Extension
    //Extension provides additional functionality to a GUI object, without the need to create a new type of GUI object.
    //You cannot attach multiple extensions of the same type to the same GUI Object. If needed, consider attaching to an empty widget/window instead.
    class Extension
    {
        protected:
            virtual void ConstructRenderInfo() = 0;
            virtual void ConstructRenderInfo(ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindow, glm::vec2 mainWindowPositionOffset) = 0;

        public:
            virtual ~Extension() = 0;

            //function: SetEnabled
            //If false, this extension is disabled and will not provide and functionality
            virtual void SetEnabled(bool enabled) = 0;

            //function: IsEnabled
            //If false, this extension is disabled and will not provide and functionality
            virtual bool IsEnabled() const = 0;

            //function: Internal_Update
            //Updates function called every frame
            virtual void Internal_Update(bool IsPreUpdate, ssGUI::Backend::BackendSystemInputInterface* inputInterface, ssGUI::InputStatus& globalInputStatus, ssGUI::InputStatus& windowInputStatus, ssGUI::GUIObject* mainWindow) = 0;
            
            //function: Internal_Draw
            //Renders function called every frame
            virtual void Internal_Draw(bool IsPreRender, ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindow, glm::vec2 mainWindowPositionOffset) = 0;
            
            //function: GetExtensionName
            //Returns this extension's name
            virtual std::string GetExtensionName() = 0;
            
            //function: BindToObject
            //Binds this extension to a GUI object
            virtual void BindToObject(ssGUI::GUIObject* bindObj) = 0;
            
            //function: Copy
            //Copy all values of this extension to another extension
            virtual void Copy(ssGUI::Extensions::Extension* extension) = 0;

            //function: Internal_GetObjectsReferences
            //Returns all the referenced GUI Objects. If nullptr is returned, this extension is not referencing any GUI Object (exception for container).
            virtual ObjectsReferences* Internal_GetObjectsReferences() = 0;

            //function: Clone
            //Clones this extension to a new extension that can be attached to a different container
            virtual Extension* Clone(ssGUI::GUIObject* newContainer) = 0;
    };

    inline Extension::~Extension(){}   //Pure virtual destructor needs to be defined
}

#endif