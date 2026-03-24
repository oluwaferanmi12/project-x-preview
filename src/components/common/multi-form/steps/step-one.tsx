import { StepProps } from "@/features/house-owners/forms/form.types";
import { StepHeading } from "../step-heading";
import { IconSelectCard } from "../../input/IconSelectCard";
import RedCrownIcon from "@/assets/svgs/red-crown.svg";
import RedBriefcase from "@/assets/svgs/red-briefcase..svg";
import { useState } from "react";
import { RadioCardField } from "../../input/RadioCardField";

export default function StepOne({ subStep, formData, updateForm }: StepProps) {
    const [selectedRole, setSelectedRole] = useState<string | null>(null);
    const [propertyType, setPropertyType] = useState("");


    const options = [
        { label: "I am the owner", value: "owner", icon: <RedCrownIcon /> },
        { label: "I am the agent", value: "agent", icon: <RedBriefcase /> },
    ];



    return (
        <div>
            {subStep === 0 && (
                <div className="flex justify-center items-center w-full">
                    <div>
                        <StepHeading alphaNum="i" heading="What is your relationship to this property?" />
                        <div className="flex flex-col gap-4">
                            {options.map((option) => (
                                <IconSelectCard
                                    key={option.value}
                                    label={option.label}
                                    checked={selectedRole === option.value}
                                    onChange={() => setSelectedRole(option.value)}
                                    icon={option.icon}
                                />
                            ))}
                        </div>

                    </div>

                </div>
            )}

            {subStep === 1 && (
                <div>
                    <RadioCardField
                        value={propertyType}
                        onChange={setPropertyType}
                        options={[
                            { label: "Apartment / Flat", value: "apartment" },
                            { label: "Bungalow", value: "bungalow" },
                        ]}
                    />
                </div>
            )}
        </div>
    );
}
