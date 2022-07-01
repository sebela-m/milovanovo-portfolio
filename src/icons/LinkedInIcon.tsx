import React from 'react';

interface LinkedInIconProps {
    className: string;
}

const LinkedInIcon:React.FC<LinkedInIconProps> = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            className={props.className}
        >
			<path d="M437.019,74.982C388.667,26.628,324.379,0,256,0S123.333,26.628,74.981,74.982C26.628,123.333,0,187.621,0,256
				s26.628,132.667,74.981,181.019C123.333,485.372,187.621,512,256,512s132.667-26.628,181.019-74.982
				C485.372,388.667,512,324.379,512,256S485.372,123.333,437.019,74.982z M256,495.832C123.756,495.832,16.168,388.244,16.168,256
				S123.756,16.168,256,16.168S495.832,123.756,495.832,256S388.244,495.832,256,495.832z"/>
			<path d="M180.547,204.8h-53.895c-4.465,0-8.084,3.619-8.084,8.084v161.684c0,4.466,3.62,8.084,8.084,8.084h53.895
				c4.465,0,8.084-3.619,8.084-8.084V212.884C188.632,208.419,185.012,204.8,180.547,204.8z M172.463,366.484h-37.726V220.968h37.726
				V366.484z"/>
			<path d="M148.21,107.789c-22.289,0-40.421,18.132-40.421,40.421c0,22.289,18.132,40.421,40.421,40.421
				c22.289,0,40.421-18.132,40.421-40.421S170.499,107.789,148.21,107.789z M148.21,172.463c-13.373,0-24.253-10.88-24.253-24.253
				c0-13.372,10.879-24.253,24.253-24.253c13.373,0,24.253,10.88,24.253,24.253C172.463,161.583,161.584,172.463,148.21,172.463z"/>
			<path d="M331.453,204.8c-16.054,0-31.87,4.156-45.811,11.896v-3.811c0-4.465-3.62-8.084-8.084-8.084h-43.116
				c-4.465,0-8.084,3.62-8.084,8.084v161.684c0,4.465,3.62,8.084,8.084,8.084h53.895c4.465,0,8.084-3.62,8.084-8.084v-58.04
				c0-19.008,4.207-41.665,24.253-41.665c14.959,0,21.095,12.619,23.247,26.923c0.59,3.922,3.989,6.808,7.957,6.808
				c4.979,0,8.722-4.464,7.954-9.382c-4.059-25.974-17.828-40.517-39.158-40.517c-25.688,0-40.421,21.08-40.421,57.833v49.956
				h-37.726V220.968h26.947v10.63c0,2.507,1.044,4.956,3.004,6.519c3.043,2.426,7.234,2.342,10.138,0.012
				c14.001-11.226,30.888-17.161,48.837-17.161c46.537,0,67.368,39.249,67.368,78.147v67.368h-37.726v-26.62
				c0-4.452-3.609-8.061-8.06-8.061h-0.047c-4.452,0-8.06,3.609-8.06,8.061v34.704c0,4.465,3.62,8.084,8.084,8.084h53.895
				c4.465,0,8.084-3.62,8.084-8.084v-75.453C414.989,243.584,380.638,204.8,331.453,204.8z"/>
        </svg>
    )
}

export default LinkedInIcon;