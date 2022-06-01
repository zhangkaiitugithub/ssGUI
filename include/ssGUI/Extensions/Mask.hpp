#ifndef SSGUI_MASK
#define SSGUI_MASK


#include "ssGUI/Extensions/Extension.hpp"
#include "ssGUI/GUIObjectClasses/GUIObject.hpp"  //This is needed as Extension is only forward declaring ssGUI::GUIObject
#include "ssGUI/GUIObjectClasses/Window.hpp"
#include "ssGUI/EventCallbacks/RecursiveChildAddedEventCallback.hpp"
#include "ssGUI/EventCallbacks/RecursiveChildRemovedEventCallback.hpp"
#include "glm/vec2.hpp"
#include "glm/vec3.hpp"
#include "glm/geometric.hpp"
#include "glm/gtx/norm.hpp"
#include <vector>
#include <cmath>
#include <queue>

//TODO : Change GetMaskContainer to IsMaskContainer instead

//namespace: ssGUI::Extensions
namespace ssGUI::Extensions
{
    /*class: ssGUI::Extensions::Mask
    Mask extension serves 2 purposes:
    - Provides function to mask GUI Objects
    - Manages <MaskEnforcer> that actually uses the function in this extension to mask the GUI objects that the <MaskEnforcer> attached to.
    This includes adding (and removing) <MaskEnforcer> automatically to the children or to a specific GUI object. 
    
    Variables & Constructor:
    ============================== C++ ==============================
    protected:
        ssGUI::GUIObject* Container;
        bool Enabled;
        bool MaskChildren;
        bool MaskContainer;
        bool FollowContainer;
        glm::vec2 FollowPositionOffset;
        glm::vec2 FollowSizePadding;

        glm::vec2 GlobalPosition;
        glm::vec2 Size;
    =================================================================
    ============================== C++ ==============================
    Mask::Mask() :  Container(nullptr), Enabled(true), MaskChildren(true), MaskContainer(false), FollowContainer(true), 
                    FollowPositionOffset(glm::vec2(1, 1)), FollowSizePadding(glm::vec2(-2, -2)), GlobalPosition(), Size()
    {}
    =================================================================    
    */
    class Mask : public Extension
    {
        public:
            friend class ssGUI::Factory;

        private:
            Mask& operator=(Mask const& other);
        
        protected:
            ssGUI::GUIObject* Container;
            bool Enabled;
            bool MaskChildren;
            bool MaskContainer;
            bool FollowContainer;
            glm::vec2 FollowPositionOffset;
            glm::vec2 FollowSizePadding;

            glm::vec2 GlobalPosition;
            glm::vec2 Size;

            virtual bool IsContained(glm::vec2 point, glm::vec2 min, glm::vec2 max) const;
            virtual bool LineToLineIntersection(glm::vec2 linePointA, glm::vec2 linePointB, 
                                                glm::vec2 linePointC, glm::vec2 linePointD, glm::vec2& intersection);
            virtual bool GetAxesValues(glm::vec2 axis, glm::vec2 axis2, glm::vec2 samplePoint, float& axisValue, float& axis2Value);
/*             bool LineToShapeIntersection(   glm::vec2 linePointA, glm::vec2 linePointB,
                                            std::vector<glm::vec2>& shape, int& shapeIntersectionIndex, glm::vec2& intersection);*/
            virtual bool CheckLinesOverlapping(float minA, float maxA, float minB, float maxB);
            virtual bool IsAABBOverlap(std::vector<glm::vec2>& shapeVerticies, int shapeOffset, int shapeVertexCount, 
                                        glm::vec2 maskMin, glm::vec2 maskMax, glm::vec2& shapeMin, glm::vec2& shapeMax);
            
            virtual void GetIntersections(std::vector<glm::vec2>& intersections, std::vector<int>& shapeIntersectIndices, std::vector<int>& maskIntersectIndices,
                                            std::vector<glm::vec2>& shapeVerticies, int shapeOffset, int shapeVertexCount, std::vector<glm::vec2>& maskVerticies);
            
            virtual void FromNewShapeWithIntersections(std::vector<glm::vec2>& currentShapeVertices, std::vector<glm::vec2>& currentShapeUVs, 
                                                        std::vector<glm::u8vec4>& currentShapeColours, std::vector<bool>& currentVertexChanged,
                                                        std::vector<glm::vec2>& originalVerticies, std::vector<glm::u8vec4>& originalColours,
                                                        std::vector<glm::vec2>& originalUVs,
                                                        glm::vec2 maskMin, glm::vec2 maskMax, int shapeOffset, int shapeVertexCount, 
                                                        std::vector<glm::vec2>& maskVerticies, std::vector<glm::vec2>& intersections,
                                                        std::vector<int>& shapeIntersectIndices, std::vector<int>& maskIntersectIndices);

            virtual void SampleNewUVsAndColoursForShapes(std::vector<glm::vec2>& originalVerticies, std::vector<glm::vec2>& originalUVs, std::vector<glm::u8vec4>& originalColours,
                                                        std::vector<int>& verticesCount, std::vector<glm::vec2>& newVertices, std::vector<glm::vec2>& newUVs, 
                                                        std::vector<glm::u8vec4>& newColours, std::vector<bool>& changed, std::vector<int>& newVerticesCount);


//            int GetIndicesDistance(int count, int startIndex, int endIndex);
            virtual int GetNextIndex(int indexOffset, int count, int currentIndex);
            virtual int GetPreviousIndex(int indexOffset, int count, int currentIndex);
            virtual bool GetSampleIndicesFromShape(std::vector<glm::vec2>& vertices, int closestIndices[], glm::vec2 samplePoint);

            virtual void AddMaskEnforcerToChildren(ssGUI::GUIObject* parent, bool includeParent);
            virtual void RemoveMaskEnforcerToChildren(ssGUI::GUIObject* parent, bool includeParent);

            virtual void ConstructRenderInfo() override;
            virtual void ConstructRenderInfo(ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindow, glm::vec2 mainWindowPositionOffset) override;

            Mask();
            virtual ~Mask() override;
            Mask(Mask const& other);
            static void* operator new(size_t size)      {return ::operator new(size);};
            static void* operator new[](size_t size)    {return ::operator new(size);};
            static void operator delete(void* p)        {free(p);};
            static void operator delete[](void* p)      {free(p);};

        public:
            static const std::string EXTENSION_NAME;

            //function: SetMaskChildren
            //If true, this will add <MaskEnforcer> automatically to the children
            virtual void SetMaskChildren(bool maskChildren);
            
            //function: GetMaskChildren
            //If true, this will add <MaskEnforcer> automatically to the children
            virtual bool GetMaskChildren() const;
            
            //function: SetMaskContainer
            //If true, a <MaskEnforcer> will be added to the container. This should normally be false.
            virtual void SetMaskContainer(bool maskContainer);
            
            //function: GetMaskContainer
            //If true, a <MaskEnforcer> will be added to the container. This should normally be false.
            virtual bool GetMaskContainer() const;
            
            //function: SetFollowContainer
            //If true, the mask will follow the container (Setting the position of the mask to be the same as Container) and will be the same size as the container. This should normally be true.
            virtual void SetFollowContainer(bool followContainer);
            
            //function: GetFollowContainer
            //If true, the mask will follow the container (Setting the position of the mask to be the same as Container) and will be the same size as the container. This should normally be true.
            virtual bool GetFollowContainer() const;
            
            //function: SetFollowPositionOffset
            virtual void SetFollowPositionOffset(glm::vec2 positionOffset);
            
            //function: GetFollowPositionOffset
            virtual glm::vec2 GetFollowPositionOffset() const;
            
            //function: SetFollowSizePadding
            //Padding horizontally and vertically (by shrinking the size of the mask)
            virtual void SetFollowSizePadding(glm::vec2 sizePadding);
            
            //function: GetFollowSizePadding
            //Padding horizontally and vertically (by shrinking the size of the mask)
            virtual glm::vec2 GetFollowSizePadding() const;
            
            //function: SetGlobalPosition
            //Sets the global position for the mask
            virtual void SetGlobalPosition(glm::vec2 globalPosition);
            
            //function: GetGlobalPosition
            //Gets the global position for the mask
            virtual glm::vec2 GetGlobalPosition() const;
            
            //function: SetSize
            //Sets the size of the mask
            virtual void SetSize(glm::vec2 size);
            
            //function: GetSize
            //Gets the size of the mask
            virtual glm::vec2 GetSize() const;

            //function: IsPointContainedInMask
            //If true, the (global) point is inside the mask
            virtual bool IsPointContainedInMask(glm::vec2 point) const;
            
            //function: Internal_OnRecursiveChildAdded
            //(Internal ssGUI function) Trigger function when a child is added
            virtual void Internal_OnRecursiveChildAdded(ssGUI::GUIObject* child);
            
            //function: Internal_OnRecursiveChildRemoved
            //(Internal ssGUI function) Trigger function when a child is removed
            virtual void Internal_OnRecursiveChildRemoved(ssGUI::GUIObject* child);
            
            //function: MaskObject
            //Public function for masking a GUI object
            virtual void MaskObject(ssGUI::GUIObject* obj, glm::vec2 renderOffset);

            //Override from Extension
            //function: SetEnabled
            //See <Extension::SetEnabled>
            virtual void SetEnabled(bool enabled) override;

            //function: IsEnabled
            //See <Extension::IsEnabled>
            virtual bool IsEnabled() const override;

            //function: Internal_Update
            //See <Extension::Internal_Update>
            virtual void Internal_Update(bool isPreUpdate, ssGUI::Backend::BackendSystemInputInterface* inputInterface, ssGUI::InputStatus& globalInputStatus, ssGUI::InputStatus& windowInputStatus, ssGUI::GUIObject* mainWindow) override;;
            
            //function: Internal_Draw
            //See <Extension::Internal_Draw>
            virtual void Internal_Draw(bool isPreRender, ssGUI::Backend::BackendDrawingInterface* drawingInterface, ssGUI::GUIObject* mainWindow, glm::vec2 mainWindowPositionOffset) override;
            
            //function: GetExtensionName
            //See <Extension::GetExtensionName>
            virtual std::string GetExtensionName() override;
            
            //function: BindToObject
            //See <Extension::BindToObject>
            virtual void BindToObject(ssGUI::GUIObject* bindObj) override;
            
            //function: Copy
            //See <Extension::Copy>
            virtual void Copy(ssGUI::Extensions::Extension* extension) override;

            //function: Internal_GetObjectsReferences
            //See <Extension::Internal_GetObjectsReferences>
            virtual ObjectsReferences* Internal_GetObjectsReferences() override;

            //function: Clone
            //See <Extension::Clone>
            virtual Mask* Clone(ssGUI::GUIObject* newContainer) override;
    };
}

#endif