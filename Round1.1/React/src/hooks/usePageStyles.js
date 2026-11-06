import { useLayoutEffect } from 'react';

   
                
                
                  
                                                                                    
                                                                                     
                                                                                
                                                                                    
                                                                                   
  
               
                                                                                   
                                                                            
                                                                                    
  
             
                                                                                                       
                              
  
                                                                                  
                                                                                    
                                                   
  
                                                                                 
                                                              
   
export default function usePageStyles(cssList) {
  useLayoutEffect(() => {
    const tags = cssList.map((css) => {
      const tag = document.createElement('style');
      tag.textContent = css;
      document.head.appendChild(tag);
      return tag;
    });
    
    return () => tags.forEach((tag) => tag.remove());
    
    
  }, []);
}
