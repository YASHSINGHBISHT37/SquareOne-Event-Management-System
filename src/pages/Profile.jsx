import React, { useState } from 'react'
import { useLayoutEffect } from 'react'
import { data } from '../data/data'
import { useRef } from 'react'
import { Link, useLocation } from "react-router-dom"
import {
    SiJavascript,
    SiReact,
    SiHtml5,
    SiTailwindcss,
    // SiCss3,
    SiNodedotjs,
    SiExpress,
    SiMongodb,
    SiFramer
} from 'react-icons/si';

const skills = [
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
    { name: 'React', icon: SiReact, color: '#61DAFB' },
    { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
    // { name: 'CSS', icon: SiCss3, color: '#663399' },
    { name: 'Node.js', icon: SiNodedotjs, color: '#5FA04E' },
    { name: 'Express', icon: SiExpress, color: '#FFFFFF' },
    { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
]

export default function Profile() {
    const settings = [
        { name: 'Basic Info', icon: 'user' },
        { name: 'Email', icon: 'envelope-simple' },
        { name: 'Education Details', icon: 'graduation-cap' },
        { name: 'Experience', icon: 'suitcase' },
        { name: 'Links', icon: 'link' },
        { name: 'Contact', icon: 'phone' }
    ]


    const input = 'flex-1 w-full border rounded-xl text- bg-bg h-10 flex item-center px-3 outline-0 border-accent/30 border-dashe'

    const [close, setClose] = useState(false)
    const [select, setSelect] = useState('Basic Info')

    const social = ['x-logo', 'instagram-logo', 'facebook-logo', 'linkedin-logo']

    const d = [
        { name: 'Male', icon: 'user-circle' },
        { name: 'Delhi, India', icon: 'map-pin' },
        { name: '+91 8076541734', icon: 'phone' },
        { name: 'yashbisht0007@gmail.com', icon: 'envelope-simple' },
    ]

    return (
        <div className="w-full flex flex-col items-center min-h-screen">


            <div className="w-full max-w-7xl borde mt-20 border-border-10 bg-whit p-4 flex flex-col scroll-mt-60">

                {/* BANNER */}
                <div className='w-full h-70 rounded-3xl relative bg-text'>
                    {/* <img src='banner.webp' className="w-full h-full object-cover rounded-3xl" /> */}

                    <div className='w-36 h-36 shrink-0 rounded-full p-1.5 absolute bg-bg -bottom-20 left-8 z-9 overflow-clip'>
                        <img src='W.jpg' className=" object-cover w-full h-full rounded-full " />
                    </div>
                </div>


                <div className='w-full px-4 p-2 flex gap-6'>
                    <div className='w-full'>

                        <div className='flex justify-between w-full gap-10 mb-6 pl-4    '>
                            <div className='pl-40'>
                                <h1 className='text-3xl tracking-tight font-bold'>Yash Singh Bisht</h1>
                                <h1 className='text-lg tracking-tight text-muted-text leading-5'>@thunderbeast37</h1>
                            </div>

                            <div className='flex items-center gap-1.5 pb-4'>
                                {social.map((item) => (
                                    <i className={`ph ph-${item} border rounded-full border-border-10 cursor-pointer bg-muted-bg text-2xl p-1`}></i>
                                ))}
                            </div>
                        </div>

                        <div className='flex items-center justify-between w-full'>
                            <div className='flex gap-3 items-end px-4 pt-1'>
                                {d.map((item, i) => (
                                    <div className='border cursor-pointer flex items-center gap-1.5 bg-muted-bg rounded-lg p-1 border-border-10 px-2'>
                                        <i className={`ph ph-${item.icon}`}></i>
                                        <h1 className='text-sm'>{item.name}</h1>
                                    </div>
                                ))}
                            </div>

                            <div on onClick={() => setClose(true)} className='border h-8 cursor-pointer flex items-center gap-2 bg-muted-bg rounded-xl p-1 text-sm border-border-10 px-2.5 tracking-tight'>
                                <i className='ph ph-pencil-simple'></i>
                                <h1>Edit Profile</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-end p-4'>
                            <p className='w-3xl leading-4.5 text-justify text-sm tracking-wide'>Currently pursuing a BCA in Computer from Yash Singh Bisht, with an anticipated graduation in 2027. Eager to apply and expand my knowledge in the field. I am keen on exploring opportunities to build a strong foundation for my career. I am looking forward to building up my skills.</p>
                        </div>

                        <div className='flex justify-between w-full gap-10 border-t p-4 border-border-10'>
                            <div className=''>
                                <h1 className='text-xl font-bold mb-2'>Education</h1>
                                <p className='w-full'>Guru Gobind Singh Indraprastha University (GGSIPU), iitm</p>
                                <div className='text-sm text-muted-text pl-4'>

                                    <div className='flex items-center gap-2'>
                                        <i className='ph ph-graduation-cap'></i>
                                        <h1 className='text-sm'>BCA (Bachelor of Computer Applications)</h1>
                                    </div>

                                    <div className='flex items-center gap-2'>
                                        <i className='ph ph-calendar-blank'></i>
                                        <h1 className='text-sm'>2027 Graduation Year</h1>
                                    </div>
                                    <p></p>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col justify-between w-full border-t p-4 border-border-10'>
                            <h1 className='text-xl font-bold mb-2'>Skills</h1>

                            <div className="gri flex gap-3">
                                {skills.map(({ name, icon: Icon, color }) => (
                                    <div key={name} className="flex items-center justify-center gap-2 bg-muted-bg border border-border-10 rounded-xl p-2 px-3">
                                        <Icon size={18} color={color} />
                                        <span className="text-sm ">{name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>


                {/* {close && (
                    <div className='w-full h-full bg-text/50 backdrop-blur-xs fixed inset-0 z-999999 flex justify-center items-center'>
                        <div className='w-full h-full absolute z-1 inset-0 flex justify-center items-center'></div>

                        <div className="rounded-3xl relative w-6xl h-150 bg-[#EFF0F1] z-2 max-w-7xl border mt-0 border-border-10 p-4 flex gap-3">
                            <i onClick={() => setClose(false)} className='ph ph-x absolute right-4 z-3 top-4 cursor-pointer text-xl text-muted-text'></i>


                            <div className='w-80 border-r pr-4 border-border-10 '>
                                <h1 className='mb-3 text-accent tracking-tight text-3xl font-bold p-2'>Edit Profile </h1>
                                {settings.map((item, i) => (
                                    <div className='flex items-center gap-1 border border-border-10/0 hover:border-border-10 p-1 px-3 cursor-pointer hover:bg-muted-bg rounded-xl'>
                                        <i className={`ph ph-${item.icon}`}></i>
                                        <p className=' capitalize'>{item.name}</p>
                                    </div>
                                ))}
                            </div>

                            <div className='flex broder w-full p-4 borde flex-col relative'>
                                <div className='mb-8'>
                                    <h1 className='font-bold text-2xl'>Basic Info</h1>
                                    <p className='text-muted-text text-sm'>Everything here is public. Put a real face to the handle, or stay a bot, if that's more your thing.</p>
                                </div>


                                <div className='grid grid-cols-2 gap-4 px-8'>
                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>First Name <span className='text-warn'>*</span></h1>
                                        <input type="text" className={input} placeholder='Enter first name' />
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>First name is required</p>
                                    </div>

                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>Last Name <span className='text-warn'>*</span></h1>
                                        <input type="text" className={input} placeholder='Enter last name' />
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Last name is required</p>
                                    </div>

                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>Username <span className='text-warn'>*</span></h1>
                                        <input type="text" className={input} placeholder='@username' />
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Username is required</p>
                                    </div>

                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>Country <span className='text-warn'>*</span></h1>
                                        <input type="text" className={input} placeholder='Enter your country' />
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Country is required</p>
                                    </div>

                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>Date of Birth <span className='text-warn'>*</span></h1>
                                        <input type="date" className={input} />
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Date of birth is required</p>
                                    </div>

                                    <div className='flex-1'>
                                        <h1 className='px-1 text-sm mb-1'>Gender <span className='text-warn'>*</span></h1>
                                        <select className={input}>
                                            <option value="">Select gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                            <option value="prefer-not-to-say">Prefer not to say</option>
                                        </select>
                                        <p className='text-warn text-xs px-1 pt-0.5 hidden'>Please select your gender</p>
                                    </div>

                                    <div className='col-span-2'>
                                        <h1 className='px-1 text-sm mb-1'>Bio</h1>
                                        <textarea className={input} rows={8} placeholder='Tell us a little about yourself...' />
                                    </div>
                                </div>


                                <div className=' absolute right-0 bottom-0 z-3 flex gap-3 justify-center ite'>
                                    <h1 className=' border cursor-pointer bg-muted-bg border-border-10 rounded-lg tracking-tight p-1 px-2 text-sm'>Cancel</h1>
                                    <h1 className=' border cursor-pointer text-bg bg-accent border-border-10 rounded-lg tracking-tight p-1 px-2 text-sm'>Save Profile</h1>
                                </div>
                            </div>

                        </div>
                    </div>

                )} */}

                {close && (
                    <div onClick={() => setClose(false)} className='w-full h-full bg-text/70 backdrop-blur-xs fixed inset-0 z-999999 flex justify-center items-center'>

                        <div className="rounded-3xl relative w-6xl h-166 bg-[#EFF0F1] z-2 max-w-7xl border mt-0 border-border-10 p-4 flex gap-3">
                            <i onClick={() => setClose(false)} className='ph ph-x absolute right-4 z-3 top-4 cursor-pointer text-xl text-muted-text'></i>

                            <div className='w-80 border pr-4 border-border-10 bg-bg p-4 rounded-3xl'>
                                <h1 className='mb-3 text-accent tracking-tight text-2xl font-bold p-2'>Edit Profile </h1>
                                <div className='flex flex-col gap-1.5'>
                                    {settings.map((item, i) => (
                                        <div onClick={() => setSelect(item.name)} className={`${select === item.name ? 'bg-accent text-bg border-border-10' : ' hover:border hover:border-border-10 hover:bg-muted-bg'} flex items-center border border-border-10/0 gap-2 p-1.5 px-3 cursor-pointer rounded-lg`}>
                                            <i className={`ph ph-${item.icon} text-lg`}></i>
                                            <p className=' capitalize'>{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>


                            <div className='flex w-full p-4 flex-col relative min-w-0'>

                                <div className='mb-8'>
                                    <h1 className='font-bold text-2xl'>{select}</h1>
                                    <p className='text-muted-text text-sm'>
                                        {select === 'Basic Info' && 'Manage your personal information.'}
                                        {select === 'Email' && 'Manage your email address and verification.'}
                                        {select === 'Education Details' && 'Add your educational background.'}
                                        {select === 'Experience' && 'Manage your work experience.'}
                                        {select === 'Links' && 'Connect your social media and portfolio.'}
                                        {select === 'Contact' && 'How can we reach you?'}
                                    </p>
                                </div>

                                <div className='flex-1 overflow-y-auto pb-20'>

                                    {select === 'Basic Info' && (
                                        <div className='grid grid-cols-2 gap-4 px-4'>
                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>First Name *</h1>
                                                <input type="text" className={input} placeholder='Enter first name' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Last Name *</h1>
                                                <input type="text" className={input} placeholder='Enter last name' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Username *</h1>
                                                <input type="text" className={input} placeholder='@username' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Country *</h1>
                                                <input type="text" className={input} placeholder='Enter country' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Date of Birth</h1>
                                                <input type="date" className={input} />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Gender</h1>
                                                <select className={input}>
                                                    <option value="">Select gender</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                    <option>Other</option>
                                                    <option>Prefer not to say</option>
                                                </select>
                                            </div>

                                            <div className='col-span-2'>
                                                <h1 className='px-1 text-sm mb-1'>Bio</h1>
                                                <textarea
                                                    rows={5}
                                                    className={`${input} h-auto py-3 resize-none`}
                                                    placeholder='Tell us about yourself...'
                                                />
                                            </div>
                                        </div>
                                    )}

                                    {select === 'Email' && (
                                        <div className='flex flex-col gap-4 px-4'>
                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Email Address *</h1>
                                                <div className='flex items-center gap-3'>
                                                    <input type="email" className={input} placeholder='Enter email address' />
                                                    <button type="button" className='border border-border-10 bg-muted-bg rounded-xl px-4 py-2 text-sm whitespace-nowrap'>
                                                        Verify Email
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {select === 'Education Details' && (
                                        <div className='grid grid-cols-2 gap-4 px-4'>
                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Degree Type *</h1>
                                                <select className={input}>
                                                    <option value="">Select degree</option>
                                                    <option>Bachelor's</option>
                                                    <option>Master's</option>
                                                    <option>Diploma</option>
                                                    <option>PhD</option>
                                                </select>
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Course *</h1>
                                                <input type="text" className={input} placeholder='Enter course' />
                                            </div>

                                            <div className='col-span-2'>
                                                <h1 className='px-1 text-sm mb-1'>College / Institution *</h1>
                                                <input type="text" className={input} placeholder='Enter college name' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>University</h1>
                                                <input type="text" className={input} placeholder='Enter university' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Graduation Year</h1>
                                                <input type="number" className={input} placeholder='2027' />
                                            </div>
                                        </div>
                                    )}

                                    {select === 'Experience' && (
                                        <div className='grid grid-cols-2 gap-4 px-4'>
                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Job Title</h1>
                                                <input type="text" className={input} placeholder='Frontend Developer' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Company Name</h1>
                                                <input type="text" className={input} placeholder='Enter company name' />
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Employment Type</h1>
                                                <select className={input}>
                                                    <option value="">Select type</option>
                                                    <option>Full Time</option>
                                                    <option>Part Time</option>
                                                    <option>Internship</option>
                                                    <option>Freelance</option>
                                                </select>
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Duration</h1>
                                                <input type="text" className={input} placeholder='e.g. 6 months' />
                                            </div>

                                            <div className='col-span-2'>
                                                <h1 className='px-1 text-sm mb-1'>Description</h1>
                                                <textarea rows={5} className={`${input} h-auto py-3 resize-none`} placeholder='Describe your experience...' />
                                            </div>
                                        </div>
                                    )}

                                    {select === 'Links' && (
                                        <div className='flex flex-col gap-4 px-4'>
                                            {['GitHub', 'LinkedIn', 'Portfolio', 'Instagram', 'X / Twitter'].map((item) => (
                                                <div key={item}>
                                                    <h1 className='px-1 text-sm mb-1'>{item}</h1>
                                                    <input type="url" className={input} placeholder={`Enter ${item} URL`} />
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {select === 'Contact' && (
                                        <div className='flex flex-col gap-4 border-b border-border-10 pb-6 px-4'>
                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Email Address *</h1>
                                                <div className='flex items-center gap-4'>
                                                    <input type="email" className={input} placeholder='Enter email address' />
                                                    <button type="button" className='border border-border-10 p-2 bg-muted-bg rounded-xl px-3 text-sm whitespace-nowrap'>
                                                        Verify Email
                                                    </button>
                                                </div>
                                            </div>

                                            <div>
                                                <h1 className='px-1 text-sm mb-1'>Phone Number *</h1>
                                                <input type="tel" className={input} placeholder='Enter phone number' />
                                            </div>
                                        </div>
                                    )}

                                </div>

                                <div className='absolute right-0 bottom-0 z-3 flex gap-3 justify-end w-full bg-[#EFF0F1]'>
                                    <button type="button" onClick={() => setClose(false)} className='border cursor-pointer bg-muted-bg border-border-10 rounded-lg p-1.5 px-3 text-sm'> Cancel</button>
                                    <button type="button" className='border cursor-pointer text-bg bg-accent border-border-10 rounded-lg p-1.5 px-3 text-sm'> Save Profile</button>
                                </div>

                            </div>

                        </div>
                    </div>

                )}


            </div>

        </div>
    )
}