"use client"


import { Sidebar } from '@/components/common/multi-form/sidebar';
import { steps } from '@/components/common/multi-form/stepsData';
import { useFormStore } from '@/store/useFormStore';
import { useState } from 'react'

const ListPropertyRegistrationPage = () => {
    const [stepIndex, setStepIndex] = useState(0);
    const [subStepIndex, setSubStepIndex] = useState(0);

    const { formData, updateForm } = useFormStore();

    const currentStep = steps[stepIndex];
    const StepComponent = currentStep.component;

    const handleNext = () => {
        if (subStepIndex < currentStep.totalSubSteps - 1) {
            setSubStepIndex((prev) => prev + 1);
        } else {
            setStepIndex((prev) => prev + 1);
            setSubStepIndex(0);
        }
    };

    const handlePrev = () => {
        if (subStepIndex > 0) {
            setSubStepIndex((prev) => prev - 1);
        } else if (stepIndex > 0) {
            const prevStep = steps[stepIndex - 1];
            setStepIndex((prev) => prev - 1);
            setSubStepIndex(prevStep.totalSubSteps - 1);
        }
    };
    return (
        <div className='pt-28 px-24 flex gap-5'>
            <Sidebar />
            <div className="relative right-side shadow-2xl w-[70%] rounded-xl px-5 py-12">
            <div className="flex justify-center items-center w-full"></div>
                <StepComponent
                    subStep={subStepIndex}
                    formData={formData}
                    updateForm={updateForm}
                />

                <div className="absolute bottom-15 flex justify-between mt-6">
                    <button onClick={handlePrev}>Previous</button>
                    <button onClick={handleNext}>Continue</button>
                </div>
            </div>
        </div>
    )
}

export default ListPropertyRegistrationPage