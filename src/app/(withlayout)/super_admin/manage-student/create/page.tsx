"use client";

import StepperForm from "@/components/StepperForm/StepperForm";

const CreateStudentPage = () => {
  const steps = [
    {
      title: "Student Information",
      // content: <StudentInfo />,
    },
    {
      title: "Basic Information",
      // content: <StudentBasicInfo />,
    },
    {
      title: "Guardian Information",
      // content: <GuardianInfo />,
    },
    {
      title: "Local Guardian Information",
      // content: <LocalGuardianInfo />,
    },
  ];

  const handleStudentSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Create Student</h1>
      <StepperForm
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default CreateStudentPage;
