#include "ssGUI/HeaderGroups/StandardGroup.hpp"
#include "ssGUI/DebugAndBuild/ssGUIBuildAndDebugConfig.hpp"


//Event callback example
int main()
{
    ssGUI::MainWindow mainWindow;

    ssGUI::EventCallbacks::RecursiveChildAddedEventCallback* callback = new ssGUI::EventCallbacks::RecursiveChildAddedEventCallback();
    callback->AddEventListener(
        [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* refs) 
        {
            std::cout<<"child added\n";
        });

    mainWindow.AddEventCallback(callback);

    //Creating window
    ssGUI::Window window;
    window.SetSize(glm::vec2(400, 300));
    window.SetPosition(glm::vec2(50, 200));
    window.SetParent(&mainWindow);     //This should trigger the event callback

    //Creating ssGUIManager and run it
    ssGUI::ssGUIManager guiManager;
    guiManager.AddGUIObject((ssGUI::GUIObject*)&mainWindow);
    guiManager.StartRunning();

    return 0;
}