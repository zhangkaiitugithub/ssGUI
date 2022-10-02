#ifndef SSGUI_Factory
#define SSGUI_Factory

#include <type_traits>

//namespace: ssGUI
namespace ssGUI
{   
    class GUIObject;
    
    //class: ssGUI::Factory
    //<Extension>s & <EventCallback>s must be created and disposed via this class.
    //You can also create GUI Objects via this class but it is not required.
    class Factory
    {
        public:
            static void SetHeapAllocatedFlagForGUIObject(ssGUI::GUIObject* obj);
            
            //function: Create< template<typename T> class Wrapper, typename T>
            //Creates the object on the heap
            template< template<typename T> class Wrapper, typename T> 
            static Wrapper<T>* Create()
            {
                return new Wrapper<T>();
            };

            //function: Create<typename T> 
            //Creates the object on the heap
            template<typename T> 
            static T* Create()
            {
                if(std::is_base_of<ssGUI::GUIObject, T>::value)
                {
                    T* guiObj = new T();
                    SetHeapAllocatedFlagForGUIObject(dynamic_cast<ssGUI::GUIObject*>(guiObj));
                    return guiObj;
                }
                
                return new T();
            };

            //function: Dispose
            //Delete the object allocated on the heap
            template<typename T>
            static void Dispose(T* obj)
            {
                //static_assert(std::is_base_of<ssGUI::Extensions::Extension, T>::value);
                delete obj;
            };
    };
}

#endif