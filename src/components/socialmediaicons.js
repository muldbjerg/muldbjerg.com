import * as React from "react"

import "../css/components/socialmediaicons.css"

export default class SocialMediaIcons extends React.Component {
    render() {
        return <ul className="social-icons">
        <li>
            <a href="https://dribbble.com/muldbjerg" target="_blank" rel="noreferrer" className="dribbble">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="96" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></circle><path d="M71.0247,205.27116a159.91145,159.91145,0,0,1,136.98116-77.27311q8.09514,0,15.99054.78906" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M188.0294,53.09083A159.68573,159.68573,0,0,1,64.00586,111.99805a160.8502,160.8502,0,0,1-30.15138-2.83671" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M85.93041,41.68508a159.92755,159.92755,0,0,1,78.99267,138.00723,160.35189,160.35189,0,0,1-4.73107,38.77687" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
            </a>
        </li>
        <li>
            <a href="https://www.instagram.com/muldbjerg" target="_blank" rel="noreferrer" className="instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><circle cx="128" cy="128" r="40" fill="none"  strokeMiterlimit="10" strokeWidth="16"></circle><rect x="36" y="36" width="184" height="184" rx="48" strokeWidth="16"  strokeLinecap="round" strokeLinejoin="round" fill="none"></rect><circle cx="180" cy="75.99998" r="12"></circle></svg>
            </a>
        </li>
        <li>
            <a href="https://github.com/muldbjerg" target="_blank" rel="noreferrer" className="github">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><path d="M84,240a24,24,0,0,0,24-24V168" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M172,240a24,24,0,0,1-24-24V168" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M152,168h16a24,24,0,0,1,24,24v8a24,24,0,0,0,24,24" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M104,168H88a24,24,0,0,0-24,24v8a24,24,0,0,1-24,24" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path><path d="M111.825,63.99934A51.9599,51.9599,0,0,0,68,40a51.90058,51.90058,0,0,0-3.48841,44.7036A49.25789,49.25789,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.25769,49.25769,0,0,0-8.5116-27.29639A51.90061,51.90061,0,0,0,188,40a51.95992,51.95992,0,0,0-43.82535,23.99983Z" fill="none"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
            </a>
        </li>
        <li>
            <a href="https://www.pinterest.com/muldbjerg" target="_blank" rel="noreferrer" className="pinterest">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="120" y1="88.00002" x2="88" y2="224.00002" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line><path d="M61.54451,156.55327A80.00347,80.00347,0,1,1,208,112c0,44.18278-32,72-64,72s-41.63152-21.06651-41.63152-21.06651" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></path></svg>
            </a>
        </li>

      </ul>;
    }
}