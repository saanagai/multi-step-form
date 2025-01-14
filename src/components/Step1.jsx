"use client";
import { Header } from "./Header";
import { Input } from "./Input";
import Button from "./Button";

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
export const Step1 = (label, placeholder) => {
  return (
    <div className="Flex justify-between items-start bg-[green] w-[490px] h-[680px] rounded-[8px] p-8">
      <Header />
      <div className="flex flex-col mt-6">
        <Input label="First name" placeholder="Your first name" />
        <Input label="First name" placeholder="Your last name" />
        <Input label="First name" placeholder="Your user name" />
      </div>
      <div className=" flex flex-col m-auto">
        <Button />
      </div>
    </div>
  );
};
