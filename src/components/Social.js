import React from 'react';
import SocialItem from './SocialItem';
function Social(){
    return(

            <ul className="list-group">
                <SocialItem 
                p = {{
                    media : 'Facebook' ,
                    id :'facebook',
                    img :'https://picsum.photos/50'
                }}
               
                />
                <SocialItem 
                p={{
                    media : 'Instagram' ,
                id :'instagram',
                img :'https://picsum.photos/51'
                }}
                
                />
                <SocialItem 
                p = {{ media : 'Youtube' ,
                id : 'youtube',
                img : 'https://picsum.photos/52'

                }}
               
                />
                 <SocialItem 
                 p = {{
                 media : 'LinkedIn' ,
                id : 'linkedin',
                img : 'https://picsum.photos/53'
                 }}
                
                />
            </ul>        
    );
}
export default Social;