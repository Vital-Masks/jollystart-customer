import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { Form, Formik, useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const SchoolDetail = ({ AllSchoollData, SchoolData }) => {
  const { setStep } = useMembers();

  const [editIndex, setEditIndex] = React.useState(null);
  const [editIndex2, setEditIndex2] = React.useState(null);
  const [editIndex3, setEditIndex3] = React.useState(null);
  
  const [items, setItems] = React.useState([]);
  const [items2, setItems2] = React.useState([]);
  const [items3, setItems3] = React.useState(null);

  useEffect(() => {
    if (!isObjectEmpty(SchoolData)) {
      setItems(SchoolData.schoolDetails);
      setItems2(SchoolData.clubDetails);
      console.log(SchoolData);
    }
  }, []);

   


  // const handleEditItem2 = (index) => {
  //   setEditIndex2(index);
  //   const { clubName, invloved, game, from, to, role } = items2[index];
  //   formik2.setValues({ clubName, invloved, game, from, to, role });
  // };

  // const handleDeleteItem = (index) => {
  //   const updatedItems = [...items];
  //   updatedItems.splice(index, 1);
  //   setItems(updatedItems);
  // };
  // const handleDeleteItem2 = (index) => {
  //   const updatedItems = [...items2];
  //   updatedItems.splice(index, 1);
  //   setItems2(updatedItems);
  // };

  const nextPage = () => {
    let obj = {
      schoolDetails: items,
      clubDetails: items2,
      file: items3,
    };


      if (SchoolData) {
        if (items && items.length > 0) {
          if (obj.file) {
            setStep(3);
          } else {
            toast.error("Upload the Image");
          }
          AllSchoollData(obj);
        } else {
          console.log(items, obj.file);
          toast.error("Fill the School Details");
        }
      }
  };

  return (
    <div className="w-full bg-white border rounded-xl">
      {Form1(editIndex, items, setItems, setEditIndex)}
      {Form2(editIndex, editIndex2, items2, setEditIndex2, setEditIndex2)}
      {Form3(editIndex, editIndex3, items3, setItems3, setEditIndex3)}
      <div className="flex items-center justify-center mb-10">
        <button
          onClick={() => setStep(1)}
          className="p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52"
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SchoolDetail;

const Form1 = (editIndex, items, setItems, setEditIndex) => {
  const initialValues = {
    schoolName: "",
    participated: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const handleEditItem = (index) => {
    setEditIndex(index);
    const { schoolName, participated, game, from, to, role } = items[index];
    setValues({ schoolName, participated, game, from, to, role });
  };

  const validationSchema = Yup.object({
    schoolName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    participated: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    game: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(2, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    from: Yup.string().required("Required"),

    to: Yup.string().required("Required"),
    role: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
  });

  const handleSubmit = (values) => {
    if (editIndex !== null) {
      // If editing, update the existing item
      const updatedItems = [...items];
      updatedItems[editIndex] = { ...values, id: editIndex + 1 };
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      // If not editing, add a new item
      setItems([...items, { ...values, id: items.length + 1 }]);
    }
  };

  return (
    <>
      <div className="py-4 m-2 text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
        STEP 02 - FILL YOUR SCHOOL AND CLUB DETAILS
      </div>
      <div className="px-10 my-10">
        <p className="text-xl text-center">
          The membership of the club is open to all persons who are approved by
          the Executive Committee. Each applicant for admission as a member of
          the club shall apply in the prescribed.
        </p>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          School Details
        </div>

        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, actions) => {
            handleSubmit(values).then(() => {
              actions.setSubmitting(false);
              // actions.resetForm();
            });
          }}
        >
          {({
            handleSubmit,
            errors,
            values,
            touched,
            isSubmitting,
            isValidating,
            isValid,
            setFieldValue,
            dirty,
          }) => (
            // warn user when leaving the page without saving
            // {WarnIfUnsaved(Object.keys(touched).some((v) => v !== '') && dirty)}

            <Form onSubmit={handleSubmit} className="">
              <div className="px-10 my-10">
                <div className="flex  gap-4 mb-10">
                  <div className="w-full">
                    <InputField
                      label="School Name"
                      name="schoolName"
                      required={true}
                      error={errors.schoolName}
                    />
                  </div>

                  <div
                    className={`flex justify-center ${
                      errors.schoolName ? "items-center" : "items-end"
                    }`}
                  >
                    <button
                      className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                      type="submit"
                      style={{
                        height: "45px",
                      }}
                    >
                      {editIndex !== null ? "Edit" : "Add"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <InputField
                    label="Team you played"
                    name="participated"
                    error={errors.participated}
                  />
                  <InputField
                    label="Game"
                    name="game"
                    required={true}
                    error={errors.game}
                  />
                  <InputField
                    type={"date"}
                    label="From"
                    name="from"
                    required={true}
                    error={errors.from}
                    max={new Date().toISOString().split("T")[0]}
                  />
                  <InputField
                    type={"date"}
                    label="To"
                    name="to"
                    required={true}
                    error={errors.to}
                  />
                  <InputField label="Role" name="role" error={errors.role} />
                </div>

                {items && items.length > 0 && (
                  <div className="mt-10">
                    <Table
                      items={items}
                      handleEditItem={handleEditItem}
                      handleDeleteItem={handleDeleteItem}
                    />
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const Form2 = (editIndex, editIndex2, items2, setItems2, setEditIndex2) => {
  const initialValues = {
    clubName: "",
    invloved: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const validationSchema = Yup.object({
    clubName: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    invloved: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    game: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
    from: Yup.string().required("Required"),
    to: Yup.string().required("Required"),
    role: Yup.string()
      .matches(/^\S.*$/, "Cannot start with a space")
      .required("Required")
      .min(3, "Minimum 3 letter")
      .max(40, "Max 40 Letter"),
  });

  const handleSubmit = () => {
    if (editIndex2 !== null) {
      // If editing, update the existing item
      const updatedItems = [...items2];
      updatedItems[editIndex] = { ...values, id: editIndex2 + 1 };
      setItems2(updatedItems);
      setEditIndex2(null);
    } else {
      // If not editing, add a new item
      setItems2([...items2, { ...values, id: items2.length + 1 }]);
    }
  };

  return (
    <>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Club Details (Optional)
        </div>
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          validateOnBlur={false}
          validateOnChange={false}
          onSubmit={(values, actions) => {
            handleSubmit(values).then(() => {
              actions.setSubmitting(false);
              // actions.resetForm();
            });
          }}
        >
          {({
            handleSubmit,
            errors,
            values,
            touched,
            isSubmitting,
            isValidating,
            isValid,
            setFieldValue,
            dirty,
          }) => (
            // warn user when leaving the page without saving
            // {WarnIfUnsaved(Object.keys(touched).some((v) => v !== '') && dirty)}

            <Form
              onSubmit={handleSubmit}
              className="w-full bg-white border rounded-xl"
            >
              <div className="px-10 my-10">
                <div className="flex  gap-4 mb-10">
                  <div className="w-full">
                    <InputField
                      label="Club Name"
                      name="clubName"
                      error={errors.clubName}
                    />
                  </div>

                  <div
                    className={`flex justify-center ${
                      errors.clubName ? "items-center" : "items-end"
                    }`}
                  >
                    <button
                      className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                      type="submit"
                      style={{
                        height: "45px",
                      }}
                    >
                      {editIndex !== null ? "Edit" : "Add"}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-5 gap-3">
                  <InputField
                    label="Team you played"
                    name="invloved"
                    error={errors.invloved}
                  />
                  <InputField label="Game" name="game" error={errors.game} />
                  <InputField
                    label="From"
                    name="from"
                    error={errors.from}
                    type={"date"}
                    max={new Date().toISOString().split("T")[0]}
                  />
                  <InputField
                    type={"date"}
                    label="To"
                    name="to"
                    error={errors.to}
                  />
                  <InputField label="Role" name="role" error={errors.role} />
                </div>

                {items2 && items2.length > 0 && (
                  <div className="mt-10">
                    <Table
                      items={items2}
                      handleEditItem={handleEditItem2}
                      handleDeleteItem={handleDeleteItem2}
                      table="2"
                    />
                  </div>
                )}
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

const Form3 = (editIndex, editIndex3, items3, setItems3, setEditIndex3) => {
  const initialValues = {
    file: null,
  };

  const validationSchema = Yup.object().shape({
    file: Yup.mixed().required("File is required"),
  });

  const handleSubmit = () => {
    if (editIndex3 !== null) {
      // If editing, update the existing item
      const updatedItems = [...items3];
      updatedItems[editIndex] = { ...values, id: editIndex3 + 1 };
      setItems3(updatedItems);
      setEditIndex3(null);
    } else {
      // If not editing, add a new item
      setItems3([...items3, { ...values, id: items3.length + 1 }]);
    }
  };

  return (
    <>
      <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
        Image of your team you played (for verification purpose)
      </div>
      <Formik
        initialValues={initialValues}
        enableReinitialize
        validationSchema={validationSchema}
        validateOnBlur={false}
        validateOnChange={false}
        onSubmit={(values, actions) => {
          handleSubmit(values).then(() => {
            actions.setSubmitting(false);
            // actions.resetForm();
          });
        }}
      >
        {({
          handleSubmit,
          errors,
          values,
          touched,
          isSubmitting,
          isValidating,
          isValid,
          setFieldValue,
          dirty,
        }) => (
          // warn user when leaving the page without saving
          // {WarnIfUnsaved(Object.keys(touched).some((v) => v !== '') && dirty)}

          <Form onSubmit={handleSubmit} className="py-4 px-10">
            <div className="col-span-full">
              <label
                htmlFor="cover-photo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Add picture
              </label>
              <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
                <div className="text-center">
                  <PhotoIcon
                    className="w-12 h-12 mx-auto text-gray-300"
                    aria-hidden="true"
                  />
                  <div className="flex mt-4 text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="file"
                      className="relative font-semibold text-indigo-600 bg-white rounded-md cursor-pointer focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file"
                        name="file"
                        type="file"
                        className="sr-only"
                        onChange={(event) => {
                          setFieldValue("file", event.currentTarget.files[0]);
                        }}
                        accept="image/*"
                      />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">
                    PNG, JPG, GIF up to 10MB
                  </p>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};
