import React from 'react';

const steps = [
    {
        num: 1,
        title: "About You & Property Type",
        subtitle: "This helps seekers understand who is listing the property"
    },
    {
        num: 2,
        title: "Property Details",
        subtitle: "Provide key details about the property."
    },
    {
        num: 3,
        title: "Location",
        subtitle: "Accurate location helps seekers find it easily."
    },
    {
        num: 4,
        title: "Rent & Fees",
        subtitle: "Be clear about the cost of renting this property."
    },
    {
        num: 5,
        title: "Property Features",
        subtitle: "Be clear about the cost of renting this property."
    },
    {
        num: 6,
        title: "Photos",
        subtitle: "Upload actual photos of the property."
    },
    {
        num: 7,
        title: "Review & Publish",
        subtitle: "Provide key details about the property."
    },
]

export const Sidebar = () => {
  return (
    <div className='bg-muted px-5 py-12 w-[25%] -z-10'>
        <div>
            {
                steps.map((step) => (
                    <div key={step.num} className='flex items-start gap-4 mb-8'>
                        <div className='w-10 h-10 rounded-lg bg-p50 flex items-center shrink-0 justify-center text-p300'>
                            {step.num}
                        </div>
                        <div>
                            <h3 className='font-semibold text-lg'>{step.title}</h3>
                            <p className='text-muted-foreground'>{step.subtitle}</p>
                        </div>
                    </div>
                ))

            }

        </div>
        
    </div>
  )
}
