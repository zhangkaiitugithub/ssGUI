#include "ssGUI/HeaderGroups/StandardGroup.hpp"
#include "ssGUI/DebugAndBuild/ssGUIDebugInit.hpp"
#include "ssGUI/DebugAndBuild/ssGUIBuildAndDebugConfig.hpp"
#include "ssGUI/Extensions/AdvancedPosition.hpp"


int main()
{
    //Create the main window
    ssGUI::MainWindow mainWindow;
    mainWindow.SetSize(glm::ivec2(450, 125));
    // mainWindow.GetBackendWindowInterface()->SetMSAA(8);

    //AdvancedPosition extension allows more option to position a GUI Object. By default it will center the GUI object.
    auto positionExtension = ssGUI::Factory::Create<ssGUI::Extensions::AdvancedPosition>();
    
    //Create a button and set an event callback to change the text when it is clicked
    ssGUI::Button button;
    button.SetSize(glm::ivec2(50, 30));
    button.GetAnyEventCallback<ssGUI::EventCallbacks::ButtonStateChangedEventCallback>()->AddEventListener
    (
        "AnyKey",
        [](ssGUI::GUIObject* src, ssGUI::GUIObject* container, ssGUI::ObjectsReferences* refs)
        {
            if(((ssGUI::Button*)src)->GetButtonState() == ssGUI::Enums::ButtonState::CLICKED)
            {
                container->GetParent()->Delete();
            }
        }
    );
    
    //Clone the extension for the button widget
    auto positionExtension2 = positionExtension->Clone(&button);
    positionExtension2->SetVerticalPixel(20);

    ssGUI::Window window;
    window.SetSize(glm::ivec2(100, 100));

    //Add the text and button widget to the main window
    button.SetParent(&window);
    window.SetParent(&mainWindow);

    //Create the GUIManager, add the main window and start running
    ssGUI::ssGUIManager guiManager;

    guiManager.AddPostGUIUpdateEventListener
    (
        [&]()
        {
            ssGUI::Backend::BackendSystemInputInterface* inputInterface = guiManager.GetBackendInputInterface();
            
            if(inputInterface->GetCurrentKeyPresses().IsSystemKeyPresent(ssGUI::Enums::SystemKey::ENTER) &&
                !inputInterface->GetLastKeyPresses().IsSystemKeyPresent(ssGUI::Enums::SystemKey::ENTER))
            {
                ssLOG_LINE(window.Internal_IsDeleted());
                ssLOG_LINE(button.Internal_IsDeleted());
            }
        }
    );    

    guiManager.AddGUIObject((ssGUI::GUIObject*)&mainWindow);
    guiManager.StartRunning();
    return 0;
}