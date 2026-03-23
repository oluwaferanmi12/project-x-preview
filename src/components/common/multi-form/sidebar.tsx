import React, { useState } from 'react';
import { steps } from './stepsData';
import Image from 'next/image';
import houseBottom from '@/assets/images/house-bottom.png';    

export const Sidebar = () => {
    const [active, setActive] = useState(1)
    return (
        <div className='bg-muted relative min-h-237.5 px-5 py-12  w-[30%] rounded-xl flex flex-col'>
            {
                steps.map((step) => (
                    <div key={step.num} onClick={() => setActive(step.num)} className='flex items-start gap-4 cursor-pointer'>
                        <div>
                            <div className={` w-10 h-10 rounded-xl flex items-center shrink-0 justify-center p-1.5 ${active === step.num ? 'bg-p300 text-white text-xl' : 'bg-p50 border border-p75'} `}>
                                {step.num}
                            </div> 
                            <div className={`bg-s300 ${step.num < steps.length ? 'h-10' : ''} mx-auto w-0.5 my-1`}></div>
                        </div>

                        <div>
                            <h3 className='font-semibold text-base text-primary'>{step.title}</h3>
                            <p className={`text-secondary text-sm ${active === step.num ? 'block' : 'hidden'}`}>
                                {step.subtitle}
                            </p>
                        </div>
                    </div>
                ))
            }
            <div className='absolute bottom-0 left-0 w-full'>
                <Image src={houseBottom} alt="house" className='w-full object-cover'  />
            </div>
        </div>
    )
}
