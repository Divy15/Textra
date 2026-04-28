"use client";
import { useForm } from "react-hook-form";
import FormInput from "@/app/UI/FormInput";
import Link from "next/link";

// Define the shape of your form data for TypeScript
interface LoginFormInputs {
  firstName: string;
  middleName: string;
  lastName: string;
  mobile: string;
  email: string;
  whatsapp: string;
  gender: string;
}

export default function LoginForm({
  onNext,
}: {
  onNext: (id: number, name: string) => void;
}) {
  // 1. Initialize the hook
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  // 2. Submit Handler
  const onSubmit = (data: LoginFormInputs) => {
    console.log("Form Data:", data);
    // Call your service: const res = await sellerService.login(data);
    onNext(123, data.firstName);
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormInput
            label="First Name"
            {...register("firstName", { required: "First name is required" })}
            error={errors.firstName?.message}
          />
          <FormInput
            label="Middle Name"
            {...register("middleName", { required: "Middle name is required" })}
            error={errors.middleName?.message}
          />
          <FormInput
            label="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            error={errors.lastName?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Mobile Number"
            type="tel"
            {...register("mobile", {
              required: "Mobile is required",
              // This prevents the user from typing anything but 0-9
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
            error={errors.mobile?.message}
          />
          <FormInput
            label="WhatsApp Number"
            type="tel"
            {...register("whatsapp", {
              required: "Whatsapp mobile number is required",
              // This prevents the user from typing anything but 0-9
              onChange: (e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              },
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid mobile number",
              },
            })}
            error={errors.whatsapp?.message}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormInput
            label="Email Address"
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            error={errors.email?.message}
          />

          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-sm font-semibold text-gray-700 ml-1">
              Gender
            </label>
            <select
              {...register("gender", { required: "Please select a gender" })}
              className={`w-full p-3 border rounded-lg outline-none bg-white transition-all cursor-pointer
                ${errors.gender ? "border-red-500 bg-red-50" : "border-gray-200 focus:border-green-500"}
              `}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <span className="text-xs text-red-500 ml-1">
                {errors.gender.message}
              </span>
            )}
          </div>
        </div>

        <div className="flex justify-between gap-3 mt-6">
          {/* Cancel Link Styled as a Button */}
          <Link
            href="/"
            className="w-full py-3 rounded-xl font-semibold text-gray-500 hover:text-gray-700 hover:bg-gray-100 text-center transition-all cursor-pointer border border-transparent hover:border-gray-200"
          >
            Cancel & Return Home
          </Link>
          
          {/* Main Submit Button */}
          <button
            type="submit"
            className="w-full py-4 rounded-xl font-bold text-white bg-linear-to-r from-red-500 via-yellow-500 via-green-500 to-purple-500 shadow-lg active:scale-95 transition-all cursor-pointer"
          >
            Verify & Continue
          </button>

        </div>
      </form>
    </div>
  );
}
