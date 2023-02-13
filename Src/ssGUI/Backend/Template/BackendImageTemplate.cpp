#include "ssGUI/Backend/Template/BackendImageTemplate.hpp"

#include "ssGUI/HelperClasses/LogWithTagsAndLevel.hpp"

namespace ssGUI
{

namespace Backend
{
    BackendImageTemplate::BackendImageTemplate(BackendImageTemplate const& other)
    {
    
    }

    BackendImageTemplate::BackendImageTemplate()
    {
        ssGUI_WARNING(ssGUI_BACKEND_TAG, "BackendImageTemplate is being created, is this intended?");
    }

    BackendImageTemplate::~BackendImageTemplate()
    {

    }

    void* BackendImageTemplate::GetRawHandle()
    {
        return nullptr;
    }

    bool BackendImageTemplate::IsValid() const
    {
        return true;
    }

    bool BackendImageTemplate::LoadFromPath(std::string path)
    {
        return true;
    }

    bool BackendImageTemplate::LoadImgFileFromMemory(void const * dataPtr, std::size_t size)
    {
        return true;
    }

    bool BackendImageTemplate::LoadRawFromMemory(void const * dataPtr, ssGUI::ImageFormat format, glm::ivec2 imageSize)
    {
        return true;
    }
    
    glm::ivec2 BackendImageTemplate::GetSize() const
    {
        return glm::ivec2();
    }

    void* BackendImageTemplate::GetPixelPtr(ssGUI::ImageFormat& format) const
    {
        return nullptr;
    }

    void BackendImageTemplate::AddBackendDrawingLinking(ssGUI::Backend::BackendDrawingInterface* backendDrawing)
    {
    }

    void BackendImageTemplate::RemoveBackendDrawingLinking(ssGUI::Backend::BackendDrawingInterface* backendDrawing)
    {
    }

    BackendImageInterface* BackendImageTemplate::Clone()
    {
        return nullptr;
    }
}

}