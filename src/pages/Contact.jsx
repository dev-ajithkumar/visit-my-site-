import { useRef } from "react";
import { newEnquiry } from "../services/newEnquiry";
import Button from "../ui/Button";
import Form from "../ui/Form";
import FormRow from "../ui/FormRow";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

function Contact() {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const formRef = useRef();
  const YOUR_PUBLIC_KEY = "orEMWuhXV2LtblPz0";
  const YOUR_SERVICE_ID = "service_r3z5l4b";
  const YOUR_TEMPLATE_ID = "template_h49zxj5";

  function onSubmit(data) {
    newEnquiry(data);
    // Email Send code Starts
    const formElement = formRef.current;
    emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, formElement, {
      publicKey: YOUR_PUBLIC_KEY,
    });
    // End
    reset();
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)} innerRef={formRef}>
      <h1 className="text-2xl md:text-4xl ">Get In Touch</h1>
      <div className="w-full flex flex-col my-4 p-6-2xl">
        <FormRow label={`Name`}>
          <input
            className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 md:w-2/4"
            name="fullName"
            placeholder={`So, who you are?`}
            {...register("fullName", { required: "Full name needed!" })}
          />
          {errors.fullName && (
            <span className="text-red-500 mx-1 md:mx-3">
              {errors?.fullName.message}
            </span>
          )}
        </FormRow>

        <FormRow label={`Phone`}>
          <input
            className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 md:w-2/4"
            type={`tel`}
            name="phone"
            placeholder={`Drop your number here, please?`}
            {...register("phone", { required: "Phone number, please?" })}
          />
          {errors.phone && (
            <span className="text-red-500 mx-1 md:mx-3">
              {errors?.phone.message}
            </span>
          )}
        </FormRow>

        <FormRow label={`Email`}>
          <input
            className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 md:w-2/4"
            type={`email`}
            name="email"
            placeholder={`Pass along your email id.`}
            {...register("email", { required: "Oops! Valid email please" })}
          />
          {errors.email && (
            <span className="text-red-500 mx-1 md:mx-3">
              {errors?.email.message}
            </span>
          )}
        </FormRow>

        <FormRow label={`Subject`}>
          <input
            className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 md:w-2/4"
            name="subject"
            placeholder={`What's the word?`}
            {...register("subject", { required: "Enter Vaild email id" })}
          />
          {errors.subject && (
            <span className="text-red-500 mx-1 md:mx-3">
              {errors?.subject.message}
            </span>
          )}
        </FormRow>

        <FormRow label={`Detail`}>
          <textarea
            className="border-2 border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400 h-28 md:w-2/4"
            type={`textarea`}
            name="detail"
            placeholder={`Let's chat in detail`}
            {...register("detail", { required: "Required" })}
          />
          {errors.detail && (
            <span className="text-red-500 mx-1 md:mx-3">
              {errors?.detail.message}
            </span>
          )}
        </FormRow>

        <div className="flex justify-center items-center my-4 md:justify-end md:w-2/4">
          <Button type="submit">Submit</Button>
        </div>
      </div>
    </Form>
  );
}

export default Contact;
