import React from 'react';

interface YoutubeIconProps {
    className: string;
}

const YoutubeIcon:React.FC<YoutubeIconProps> = (props) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 512 512" 
            className={props.className}
        >
	        <path d="M437.022,74.984C388.67,26.63,324.381,0,256,0C187.624,0,123.338,26.63,74.984,74.984S0,187.624,0,256
	        	c0,68.388,26.63,132.678,74.984,181.028C123.335,485.375,187.621,512,256,512c68.385,0,132.673-26.625,181.021-74.972
	        	C485.372,388.679,512,324.389,512,256C512,187.623,485.372,123.336,437.022,74.984z M425.708,425.714
	        	C380.381,471.039,320.111,496,256,496c-64.106,0-124.374-24.961-169.703-70.286C40.965,380.386,16,320.113,16,256
	        	c0-64.102,24.965-124.37,70.297-169.703C131.63,40.965,191.898,16,256,16c64.108,0,124.378,24.965,169.708,70.297
	        	C471.037,131.628,496,191.896,496,256C496,320.115,471.037,380.387,425.708,425.714z"/>
	        <path d="M430.038,114.969c-2.784-3.432-7.821-3.957-11.253-1.172c-3.431,2.784-3.956,7.822-1.172,11.252
	        	C447.526,161.919,464,208.426,464,256c0,55.567-21.635,107.803-60.919,147.085C363.797,442.367,311.563,464,256,464
	        	c-51.26,0-100.505-18.807-138.663-52.956c-3.292-2.946-8.35-2.666-11.296,0.626s-2.666,8.35,0.626,11.296
	        	C147.763,459.745,200.797,480,256,480c59.837,0,116.089-23.297,158.394-65.601C456.701,372.095,480,315.84,480,256
	        	C480,204.767,462.256,154.681,430.038,114.969z"/>
	        <path d="M48,256c0-114.691,93.309-208,208-208c51.26,0,100.504,18.808,138.662,52.959c3.293,2.948,8.351,2.666,11.296-0.625
	        	c2.947-3.292,2.667-8.35-0.625-11.296C364.237,52.256,311.203,32,256,32c-59.829,0-116.08,23.301-158.389,65.611
	        	C55.301,139.921,32,196.171,32,256c0,51.239,17.744,101.328,49.963,141.038c1.581,1.949,3.889,2.96,6.217,2.96
	        	c1.771,0,3.553-0.585,5.036-1.788c3.431-2.784,3.956-7.822,1.172-11.253C64.474,350.088,48,303.58,48,256z"/>
	        <path d="M393.81,199.21c-0.297-2.237-3.165-22.123-12.481-32.244c-11.127-12.384-23.789-13.666-29.877-14.283
	        	c-0.531-0.054-1.019-0.103-1.458-0.156c-0.12-0.015-0.239-0.027-0.359-0.036c-36.754-2.849-92.235-2.882-92.792-2.882h-0.124
	        	c-0.556,0-56.038,0.033-92.784,2.882c-0.12,0.009-0.24,0.021-0.359,0.036c-0.438,0.054-0.926,0.103-1.458,0.156
	        	c-6.086,0.616-18.742,1.897-29.876,14.282c-9.308,10.117-12.184,30.004-12.481,32.242c-0.006,0.044-0.011,0.089-0.017,0.133
	        	c-0.11,0.947-2.689,23.462-2.689,46.399v21.314c0,22.953,2.579,45.46,2.689,46.407c0.005,0.043,0.011,0.087,0.016,0.131
	        	c0.297,2.237,3.166,22.118,12.486,32.224c10.304,11.453,23.351,13.129,30.365,14.031c1.235,0.159,2.302,0.296,3.029,0.441
	        	c0.248,0.049,0.498,0.087,0.75,0.113c21.2,2.171,87.505,2.839,90.409,2.867c0.557-0.001,56.085-0.132,92.828-2.947
	        	c0.136-0.01,0.271-0.024,0.405-0.042c0.452-0.058,0.957-0.109,1.507-0.167c6.074-0.635,18.705-1.955,29.789-14.292
	        	c9.309-10.104,12.184-29.979,12.481-32.216c0.006-0.044,0.011-0.089,0.017-0.134c0.11-0.947,2.688-23.461,2.689-46.406v-21.315
	        	c0-22.945-2.579-45.459-2.689-46.407C393.821,199.297,393.815,199.254,393.81,199.21z M380.514,267.063
	        	c0,21.399-2.42,43.136-2.575,44.499c-0.602,4.445-3.392,18.033-8.397,23.436c-0.03,0.032-0.06,0.065-0.089,0.098
	        	c-6.977,7.786-14.56,8.578-19.578,9.103c-0.6,0.063-1.155,0.122-1.661,0.184c-36.146,2.754-90.895,2.884-91.352,2.886
	        	c-0.678-0.007-67.638-0.68-88.505-2.75c-1.154-0.212-2.398-0.372-3.707-0.541c-5.992-0.77-14.199-1.825-20.538-8.893
	        	c-0.03-0.033-0.06-0.066-0.09-0.099c-4.448-4.797-7.503-16.895-8.394-23.436c-0.158-1.395-2.575-23.106-2.575-44.496V245.74
	        	c0-21.4,2.422-43.145,2.575-44.493c0.602-4.449,3.394-18.048,8.401-23.464c0.027-0.03,0.055-0.06,0.082-0.09
	        	c7.008-7.814,14.596-8.582,19.617-9.091c0.58-0.059,1.118-0.114,1.61-0.172c36.127-2.788,90.83-2.821,91.379-2.821h0.124
	        	c0.549,0,55.252,0.033,91.387,2.821c0.491,0.058,1.03,0.113,1.61,0.172c5.023,0.508,12.614,1.277,19.614,9.088
	        	c0.029,0.032,0.058,0.063,0.086,0.095c4.45,4.808,7.506,16.91,8.4,23.466c0.158,1.393,2.575,23.113,2.575,44.496L380.514,267.063z"
	        	/>
	        <path d="M310.355,249.579l-82.356-49.415c-2.472-1.482-5.549-1.521-8.058-0.102c-2.508,1.42-4.059,4.079-4.059,6.961v98.829
	        	c0,2.882,1.55,5.542,4.059,6.961c1.224,0.693,2.583,1.039,3.941,1.039c1.426,0,2.851-0.381,4.116-1.14l82.356-49.415
	        	c2.409-1.446,3.884-4.05,3.884-6.86S312.765,251.024,310.355,249.579z M231.883,291.724v-70.57l58.808,35.285L231.883,291.724z"/>
        </svg>
    );
}

export default YoutubeIcon;