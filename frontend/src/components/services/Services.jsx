import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
    return(
        <section id='services'>
            <h5>How can I help you?</h5>
            <h2>Services</h2>

            <div className='container services__container'>
                <article className='service'>
                    <div className='service__head'>
                        <h3>SOFTWARE DEVELOPMENT</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Complete Modeling of A System</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Cross platform Design</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Implementation Using Java and javaFx API</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Software Testing</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Deployment Of System</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Maintenance</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF SOFTWARE DEVELOPMENT*/}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Web Development</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Structure the Content of a Web page with HTML</p>

                        </li>
                        
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Styling with CSS</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Animate with Javascript</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Frontend With the ReactJs technology</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Experienced Java Programming</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>MERN Stack Development</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF Web Dev*/}

                <article className='service'>
                    <div className='service__head'>
                        <h3>Networking And DataCom</h3>
                    </div>

                    <ul className='service__list'>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Basic VLAN configurations on a WLAN Networking</p>

                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Implementation of STP protocols</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>IP subnetting</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Implementation of Basic WlAN </p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Security Management Of a WLAN Configuration</p>
                            
                        </li>
                        <li>
                            <BiCheck className='service__list-icon'/>
                            <p>Provides Assists and Guidance In the Basic DatacomV1 course</p>
                            
                        </li>
                    </ul>
                </article>
                {/*END OF UI*/}
            </div>
        </section>
    )
}

export default Services