export type MultiStepOptionsProps = {
  num: number;
  title: string;
  subtitle: string;
};

export type FormData = {
  relationship?: "owner" | "agent";
  propertyType?: string;
};

export type StepConfig = {
  id: number;
  title: string;
  component: React.FC<StepProps>;
  totalSubSteps: number;
};

export type StepProps = {
  subStep: number;
  formData: FormData;
  updateForm: (data: Partial<FormData>) => void;
};
