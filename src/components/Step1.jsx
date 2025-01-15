"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";
import { ChevronRight } from "lucide-react";

// const [formValues, setFormValues] = useState({
//   firstName: "",
//   lastName: "",
//   userName: "",
// });
// const [formErrors, setFormErrors] = useState({
//   firstName: "",
//   lastName: "",
//   userName: "",
// });

// const handleChange = (event) => {
//   const { name, value } = event.target;
//   console.log(name, value);
//   setFormErrors((prev) => ({ ...prev, [name]: "" }));

//   setFormValues((prev) => ({ ...prev, [name]: value }));
// };

// const handleClick = () => {
//   const { firstName, lastName, userName } = formValues;

//   if (!firstName.trim()) {
//     setFormErrors((prev) => ({
//       ...prev,
//       firstName: "Please enter your first name",
//     }));
//   }

//   if (!lastName.trim()) {
//     setFormErrors((prev) => ({
//       ...prev,
//       lastName: "Please enter your last name",
//     }));
//   }
// };
export const Step1 = ({ label, placeholder, setCurrentStep }) => {
  return (
    <div className="Flex justify-between items-start bg-white w-[490px] h-[680px] rounded-[8px] p-8">
      <Header />
      <div className="flex flex-col mt-6 ">
        <Input
          label="First name"
          placeholder="Your first name"
          handleChange="{printFirstName}"
          error={""}
          // {formErrors.firstName}
        />
        <Input
          label="Last name"
          placeholder="Your last name"
          handleChange="{printFirstName}"
        />
        <Input
          label="User name"
          placeholder="Your user name"
          handleChange="{printFirstName}"
        />
      </div>
      <div className=" ">
        <Button buttonText="Continue 1/3" setCurrentStep={setCurrentStep} />
      </div>
    </div>
  );
};
