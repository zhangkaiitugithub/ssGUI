#ifndef SSGUI_IMAGE_FORMAT_H
#define SSGUI_IMAGE_FORMAT_H

#include "ssGUI/Enums/ImageType.hpp"
#include <cstdint>

namespace ssGUI
{
    //struct: ssGUI::ImageFormat
    //Default is RGBA 8 bit per channel with non alpha pre-multiplied. 
    struct ImageFormat
    {
        //var: ImgType
        //Indicates the image type
        ssGUI::Enums::ImageType ImgType = ssGUI::Enums::ImageType::RGB;
        
        //var: BitDepthPerChannel
        //How many bits per channel
        int BitDepthPerChannel = 8;
        
        //var: BitPerPixel
        //How many biys per pixel
        int BitPerPixel = 32;
        
        //var: HasAlpha
        //If this image contains alpha.
        //If this value is set to true for type MONO but IndexA is set to -1,
        //then it will treat black as transparent
        bool HasAlpha = true;
        
        //var: PreMultipliedAlpha
        bool PreMultipliedAlpha = false;
        
        //var: IndexR 
        int IndexR = 0;
        
        //var: IndexG 
        int IndexG = 1;
        
        //var: IndexB
        int IndexB = 2;
        
        //var: IndexMono
        int IndexMono = -1;
        
        //var: IndexA
        int IndexA = 3;
        
        //var: RowPaddingInBytes
        int RowPaddingInBytes = 0;
    };
}

#endif