#include "ssGUI/GUIObjectClasses/CompositeClasses/Scrollbar.hpp"

#include "ssGUI/Extensions/Outline.hpp"
#include "ssGUI/GUIObjectClasses/CompositeClasses/StandardButton.hpp"
#include "ssGUI/GUIObjectClasses/MainWindow.hpp" //For getting mouse position

namespace ssGUI
{
    Scrollbar::Scrollbar(Scrollbar const& other) : Slider(other)
    {
        SetScrollbarSize(other.GetScrollbarSize());
        SetSidePadding(other.GetSidePadding());
    }

    void Scrollbar::UpdateKnobSize()
    {
        if(GetKnobObject() == nullptr)
            return;
        
        if(IsVertical())
        {
            GetKnobObject()->SetSize(glm::vec2(GetSize().x - SidePadding * 2, GetSize().y * GetScrollbarSize()));
            UpdateKnobPosition(true);
        }
        else
        {
            GetKnobObject()->SetSize(glm::vec2(GetSize().x * GetScrollbarSize(), GetSize().y - SidePadding * 2));
            UpdateKnobPosition(true);
        }
    }

    Scrollbar::Scrollbar() : ScrollbarSize(0.25), SidePadding(2)
    {
        SetKnobSize(10, false);
        SetEndPadding(5);
        float diff = 50;
        SetBackgroundColor(GetBackgroundColor() - glm::u8vec4(diff, diff, diff, 0));

        GetKnobObject()->RemoveAnyExtension<ssGUI::Extensions::Outline>();
        auto btn = static_cast<ssGUI::StandardButton*>(GetKnobObject());
        glm::u8vec4 bgColor = GetBackgroundColor();
        bgColor.a = 255;

        btn->SetButtonColor(bgColor);
        btn->SetButtonColor
        (
            (btn->GetButtonColor().r + btn->GetButtonColor().g + btn->GetButtonColor().b) / 3.f > 128 ? 
            btn->GetButtonColor() - glm::u8vec4(diff, diff, diff, 0) : 
            btn->GetButtonColor() + glm::u8vec4(diff, diff, diff, 0)
        );

        UpdateKnobSize();
        SetVertical(true, true);
    }

    Scrollbar::~Scrollbar()
    {
        NotifyAndRemoveOnObjectDestroyEventCallbackIfExist();
    }

    void Scrollbar::SetScrollbarSize(float size)
    {
        ScrollbarSize = size;
        UpdateKnobSize();
    }

    float Scrollbar::GetScrollbarSize() const
    {
        return ScrollbarSize;
    }
    
    void Scrollbar::SetScrollbarValue(float scrollbarValue)
    {
        SetSliderValue(scrollbarValue);
    }

    float Scrollbar::GetScrollbarValue() const
    {
        return GetSliderValue();
    }

    void Scrollbar::SetSidePadding(float sidePadding)
    {
        SidePadding = sidePadding;
    }

    float Scrollbar::GetSidePadding() const
    {
        return SidePadding;
    }

    ssGUI::Enums::GUIObjectType Scrollbar::GetType() const
    {
        return ssGUI::Slider::GetType() | ssGUI::Enums::GUIObjectType::SCROLLBAR;
    }

    Scrollbar* Scrollbar::Clone(bool cloneChildren)
    {
        FUNC_DEBUG_ENTRY();
        Scrollbar* temp = new Scrollbar(*this);
        CloneExtensionsAndEventCallbacks(temp);   
        
        if(cloneChildren)
        {
            if(CloneChildren(this, temp) == nullptr)
            {
                FUNC_DEBUG_EXIT();
                return nullptr;
            }
        }

        FUNC_DEBUG_EXIT();
        return temp;
    }
}