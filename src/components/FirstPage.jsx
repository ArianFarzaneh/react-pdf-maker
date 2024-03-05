import { useForm } from "react-hook-form";
import Navbar from "../layouts/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";

// custom validation function for name input
const validateName = (name) => {
  // check if name is empty
  if (!name || name.trimStart() == "") {
    return "Name is required";
  }
  // check if name contains only letters and spaces
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return "Name must contain only letters and spaces";
  }
  // check if name is longer than 30 characters
  if (name.length > 30) {
    return "Name must be shorter than 30 characters";
  }
  // return true if name passes all validations

  return true;
};

const validatelastName = (lastName) => {
  // check if lastName is empty
  if (!lastName || lastName.trimStart() == "") {
    return "lastName is required";
  }
  // check if lastName contains only letters and spaces
  if (!/^[a-zA-Z\s]+$/.test(lastName)) {
    return "lastName must contain only letters and spaces";
  }
  // check if lastName is longer than 30 characters
  if (lastName.length > 30) {
    return "lastName must be shorter than 30 characters";
  }
  // return true if lastName passes all validations

  return true;
};

// custom validation function for age input
const validateAge = (age) => {
  // check if age is empty
  if (!age) {
    return "Age is required";
  }
  // check if age is a number
  if (isNaN(age)) {
    return "Age must be a number";
  }
  // check if age is between 18 and 99
  if (age < 18 || age > 99) {
    return "Age must be between 18 and 99";
  }
  // return true if age passes all validations
  return true;
};

function FirstPage() {
  const [pdfRenderModal, setPdfRenderModal] = useState(false);
  async function addToDb(object) {
    try {
      fetch(`http://localhost:3000/Data`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(object),
      });
    } catch (error) {
      console.log(`your error is: ${error}`);
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setPdfRenderModal(true);
    addToDb(data);
  };

  return (
    <>
      <Navbar />
      {pdfRenderModal ? (
        <div className="flex flex-col justify-center">
          <div className="flex justify-center">
            <div className="px-4 pt-20 border rounded-xl bg-gradient-to-r from-red-400 to-purple-200 w-[800px] h-[500px]">
              <div className="text-center text-4xl font-bold font-[shabnam] mb-40">
                اطلاعات شما به درستی وارد شد
              </div>
              <div className="flex justify-center">
                <Link to="/PdfCreator">
                  <button className="text-2xl font-bold font-[shabnam] px-4 py-1 bg-black text-white rounded-full italic">
                    پرینت جزئیات
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="pl-3 pt-3 flex justify-center">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="font-bold italic text-lg">Name: </label>
              <input
                placeholder="write your name here:"
                className="border border-black rounded-full p-2 py-1 bg-gray-100 font-bold    "
                {...register("name", { validate: validateName })}
              />
              {errors.name && (
                <p className="text-red-400 font-bold italic text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
            <br />

            <div className="mb-3">
              <label className="font-bold italic text-lg">Last Name: </label>
              <input
                placeholder="write your LastName here:"
                className="border border-black rounded-full p-2 py-1 bg-gray-100 font-bold"
                {...register("lastName", { validate: validatelastName })}
              />
              {errors.lastName && (
                <p className="text-red-400 font-bold italic text-sm">
                  {errors.lastName.message}
                </p>
              )}
            </div>
            <br />

            <div className="mb-3">
              <label className="font-bold italic text-lg">Age: </label>
              <input
                placeholder="select your age:"
                className="border border-black rounded-full p-2 py-1 bg-gray-100 font-bold"
                type="number"
                {...register("age", { validate: validateAge })}
              />
              {errors.age && (
                <p className="text-red-400 font-bold italic text-sm">
                  {errors.age.message}
                </p>
              )}
            </div>
            <br />

            <div className="mb-3">
              <label className="font-bold italic text-lg">Date of Sign: </label>
              <input
                placeholder="select the date:"
                className="border border-black rounded-full p-2 py-1 bg-gray-100 font-bold"
                type="date"
                {...register("dateOfSign", { required: true })}
              />
              {errors.dateOfSign && (
                <p className="text-red-400 font-bold italic text-sm">
                  Date of Sign is required
                </p>
              )}
            </div>
            <br />

            <div className="mb-3">
              <label className="font-bold italic text-lg">email: </label>
              <input
                placeholder="write your email:"
                className="border border-black rounded-full p-2 py-1 bg-gray-100 font-bold"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
            </div>
            <br />

            <div className="flex justify-center">
              <input
                className="rounded-full p-2 py-2 bg-blue-600 text-white w-28 font-bold"
                type="submit"
              />
            </div>
            <br />
          </form>
        </div>
      )}
    </>
  );
}
export default FirstPage;
