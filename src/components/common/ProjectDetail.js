import '../../styles/common.css';
import '../../styles/ProjectDetail.css';
import iconBack from '../../assets/images/icon_back.png';
import iconPlay from '../../assets/images/icon_play.png';
import iconShare from '../../assets/images/icon_share.png';

import iconWhatsapp from '../../assets/images/social/whatsapp.png';
import iconMail from '../../assets/images/social/mail.png';
import iconLink from '../../assets/images/social/link.png';

import JsxParser from 'react-jsx-parser';
import { useEffect, useState } from 'react';

export default function ProjectDetail(props){
    let [share, setShare] = useState('hide');

    useEffect(() => {
        window.scrollTo(0, 0);
        const script = document.createElement("script")
        script.src = "https://teams.microsoft.com/share/launcher.js"
        script.async = true
        document.body.appendChild(script)
        return () => {
            // clean up the script when the component in unmounted
            document.body.removeChild(script)
        }
    }, [])

    return (
        <div className='relative'>
            <img src={props.thumbnail} alt='bg' className='fullscreen-video z--2 thumbnail-bg'/>
            <div className='fullscreen-video bg-body-blend blur-25 p-40'></div>

            <div className='w-80 m-auto p-20'>
                <div className='mb-40'>
                    <a href='/' className='w-fit as-button-with-bg b-radius-10 flex flex-row'>
                        <img src={iconBack} alt='go back' width={24} className='block'/> 
                        <div className='pl-10 pr-10'>BACK</div>
                    </a>
                </div>

                <div className='grid grid-col-2-3 mobile-grid-row-1-auto gap-40 mb-40'>
                    <div>
                        <img src={props.thumbnail} alt='Project thumbnail' className='w-full h-full object-cover project-detail-thumbnail'/>
                    </div>
                    <div className='flex flex-column flex-space-between'>
                        <div>
                            <div className='font-koulen font-3em m-0'>{props.projectName}</div>
                            <div className='font-15em'>
                                {(props.role !== undefined && props.role.length > 0) ? "as " + props.role : null}&nbsp;
                                {(props.company !== undefined && props.company.length > 0) ? "@ " + props.company : null}
                            </div>
                            <div className='mt-10'>Duration: {props.duration ?? "unsure"}</div>
                        </div>

                        <div className='mt-10 relative'>
                            {props.tag} 
                            &nbsp;
                            <div className='inline bg-thumbnail as-button p-10 w-fit b-radius-10' onClick={() => window.open(props.playableUrl, '_blank').focus()}>
                                <img src={iconPlay} alt='Play' title='Play this experience' width={20} height={20} className='inline vertical-middle'/> Play
                            </div>
                            
                            &nbsp;
                            
                            <div className='inline bg-black-glass as-button p-10 w-fit mt-10 b-radius-10' onClick={() => {share === 'hide' ? setShare('block') : setShare('hide')}}>
                                <img src={iconShare} alt='Share' title='Share this project' width={20} height={20} className='inline vertical-middle'/> Share this with your technical team!
                            </div>
                            <div className={'inline w-fit m-10 bg-white p-10 b-radius-10 flex flex-row gap-20 ' + share}>
                                <div
                                    className="teams-share-button w-fit inline as-button"
                                    data-href={window.location.href}
                                    data-icon-px-size="32">
                                </div>
                                <a href={'whatsapp://send?text=Check out this project from Ayush Thakur!%0a%2a'+ props.projectName + '%2a %0a🔗 ' + encodeURIComponent(window.location.href)} className='inline as-button animate-everything'>
                                    <img src={iconWhatsapp} alt='whatsapp' width={32}/>
                                </a>
                                <a href={'mailto:?subject=Checkout%20this%20project%20from%20Ayush%20Thakur&body=Link to project: ' + window.location.href} className='inline as-button animate-everything'>
                                    <img src={iconMail} alt='mail' width={32}/>
                                </a>
                                <div className='inline as-button animate-everything' onClick={() => {
                                    navigator.clipboard.writeText(window.location.href)
                                    alert("Link copied to clipboard!")
                                }}>
                                    <img src={iconLink} alt='link' width={32}/>
                                </div>
                                <div className='bg-thumbnail p-5 as-button b-radius-10 animate-everything' onClick={() => setShare('hide')}>
                                    close
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className='flex flex-row gap-40 mobile-gap-10 flex-nowrap mobile-flex-wrap mb-40'>
                    {/* Technology used */
                    props.technology !== undefined ?
                    <div className='inline p-20 border-white border-1 b-radius-10 mobile-w-full'>
                        <span className='block font-12em bold mb-10'>Technology used: </span>
                        <ul className='list-20px'>
                            {props.technology.map((t,i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div> : null
                    }
                    
                    { /* Learning outcomes */
                    props.learnings !== undefined ?
                    <div className='inline p-20 border-white border-1 b-radius-10 mobile-w-full'>
                        <span className='block font-12em bold mb-10'>Learning outcomes: </span>
                        <ul className='list-20px'>
                            {props.learnings.map((t,i) => <li key={i}>{t}</li>)}
                        </ul>
                    </div> : null
                    }

                    {/* Description */}
                    <div className='inline p-20 border-white border-1 b-radius-10 w-60 mobile-w-full'>
                        <span className='block font-12em bold mb-10'>Description:</span>
                        <JsxParser className='list-20px show-link' jsx={props.description ?? "Not provided"} />
                    </div>
                </div>

                {/* media */}
                <div>
                    <span className='block font-12em bold mb-20'>Media: </span>
                    <div className='media'>
                        {
                            (props.images === undefined && props.videos === undefined) ?
                            "None attached" : null
                        }
                        {
                            (props.images !== undefined) ?
                            Object.keys(props.images).map((cap,i) => 
                                <figure key={i}>
                                    <img src={props.images[cap]} alt={cap} className='non-dragable'/>
                                    <figcaption>{cap}</figcaption>
                                </figure>        
                            ) : null
                        }
                        {
                            (props.videos !== undefined) ?
                            Object.keys(props.videos).map((cap,i) => 
                                <figure key={i} className='mobile-w-full'>
                                    <iframe width={16*35} height={9*35} className='mobile-w-full' src={'https://www.youtube.com/embed/' + props.videos[cap] + '?si=4qG4d9bgPmb85v40'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                    <figcaption>{cap}</figcaption>
                                </figure>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}