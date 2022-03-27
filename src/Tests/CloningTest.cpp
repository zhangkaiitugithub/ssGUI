#include "ssGUI/DebugAndBuild/ssGUIDebugInit.hpp"
#include "ssGUI/DebugAndBuild/ssGUIBuildAndDebugConfig.hpp"
#include "ssGUI/HeaderGroups/StandardGroup.hpp"
#include "ssGUI/Extensions/Dockable.hpp"
#include "ssGUI/Extensions/Docker.hpp"
#include "ssGUI/Extensions/Mask.hpp"
#include "ssGUI/Extensions/Layout.hpp"

// Cloning test
int main()
{
    ssGUI::MainWindow mainWindow;

    //Creating window
    ssGUI::Window window;
    window.SetTitlebarColor(glm::u8vec4(255, 127, 127, 255));
    window.SetSize(glm::vec2(150, 150));
    window.SetParent(&mainWindow);
    ssGUI::Extensions::Dockable* dock = new ssGUI::Extensions::Dockable();
    window.AddExtension(dock);

    //Creating window
    auto window2 = window.Clone(false);
    static_cast<ssGUI::Window*>(window2)->SetTitlebarColor(glm::u8vec4(127, 255, 127, 255));    

    ssGUI::Extensions::Docker* docker = new ssGUI::Extensions::Docker();
    docker->SetChildrenDockerUseThisSettings(false);
    
    ssGUI::Extensions::Border* bor = new ssGUI::Extensions::Border();
    
    ssGUI::Widget mainWindowWidget;

    mainWindowWidget.AddExtension(docker);
    mainWindowWidget.AddExtension(bor);
    mainWindowWidget.SetBackgroundColor(glm::u8vec4(200, 200, 200, 255));
    mainWindowWidget.SetMinSize(glm::vec2(200, 200));
    mainWindowWidget.SetParent(&mainWindow);

    auto layout = new ssGUI::Extensions::Layout();
    layout->SetCoverFullLength(false);
    layout->SetHorizontalLayout(true);
    mainWindow.AddExtension(layout);

    mainWindow.MoveChildrenIteratorToLast();
    std::list<ssGUI::ssGUIObjectIndex>::iterator lastIt = mainWindow.GetCurrentChildReferenceIterator();
    mainWindow.MoveChildrenIteratorToFirst();
    std::list<ssGUI::ssGUIObjectIndex>::iterator firstIt = mainWindow.GetCurrentChildReferenceIterator();
    mainWindow.ChangeChildOrderToBeforePosition(lastIt, firstIt);

    //Creating ssGUIManager and run it
    ssGUI::ssGUIManager guiManager;

    guiManager.AddOnUpdateEventListener
    (
        [&]()
        {
            ssGUI::Backend::BackendSystemInputInterface* inputInterface = guiManager.GetBackendInputInterface();
            
            if(inputInterface->GetCurrentKeyPresses().IsSystemKeyPresent(ssGUI::Enums::SystemKey::ENTER) &&
                !inputInterface->GetLastKeyPresses().IsSystemKeyPresent(ssGUI::Enums::SystemKey::ENTER))
            {
                mainWindowWidget.Clone(true);
            }
        }
    );

    guiManager.AddGUIObject((ssGUI::GUIObject*)&mainWindow);
    guiManager.StartRunning();

    return 0;
}