import React, { Component } from "react";
import Zoomy from 'react-zoomy';

export default class Menu extends Component {
    render() {
        return (
            <div className="menu-container">
                <img src="https://static.wixstatic.com/media/c435ef_57d3f9d1b3ae402a92d93cae6808a9e8.jpg/v1/fill/w_1332,h_1746,al_c,q_90,usm_0.66_1.00_0.01/c435ef_57d3f9d1b3ae402a92d93cae6808a9e8.webp"/>

                <Zoomy
                    imageUrl={'https://static.wixstatic.com/media/c435ef_57d3f9d1b3ae402a92d93cae6808a9e8.jpg/v1/fill/w_1332,h_1746,al_c,q_90,usm_0.66_1.00_0.01/c435ef_57d3f9d1b3ae402a92d93cae6808a9e8.webp'}
                    renderThumbnail={({ showImage }) => <button onClick={showImage}>View In Full</button>}
                    scale={[1.1, 1.1]}
                    imageProps={{
                        style: {
                            width: '100vw',
                            height: 'auto',
                            zIndex: 99999999999999999999999999999999
                        }
                    }}
                />

                <img src ="https://static.wixstatic.com/media/c435ef_2922fe651c914e298cc24210bb819bfc.jpg/v1/fill/w_1332,h_1746,al_c,q_90,usm_0.66_1.00_0.01/c435ef_2922fe651c914e298cc24210bb819bfc.webp"/>

                <Zoomy
                    imageUrl={'https://static.wixstatic.com/media/c435ef_2922fe651c914e298cc24210bb819bfc.jpg/v1/fill/w_1332,h_1746,al_c,q_90,usm_0.66_1.00_0.01/c435ef_2922fe651c914e298cc24210bb819bfc.webp'}
                    renderThumbnail={({ showImage }) => <button onClick={showImage}>View In Full</button>}
                    scale={[1.1, 1.1]}
                    imageProps={{
                        style: {
                            width: '100vw',
                            height: 'auto'
                        }
                    }}
                />
            </div>

        );
    }
}
