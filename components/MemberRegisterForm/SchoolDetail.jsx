import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image"; // Ensure you're importing Next.js's Image component
import { convertFileToBase64 } from "../utils/fileUtils";

function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

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
const validationSchema2 = Yup.object({
  clubName: Yup.string()
    .matches(/^\S.*$/, "Cannot start with a space")
    .required("Required")
    .min(3, "Minimum 3 letter")
    .max(40, "Max 40 Letter"),
  involved: Yup.string()
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
const validationSchema3 = Yup.object().shape({
  file: Yup.mixed().required("File is required"),
});

const SchoolDetail = ({
  AllSchoollData,
  SchoolData,
  selectedImage2,
  setSelectedImage2,
}) => {
  const { setStep } = useMembers();

  const initialValues = {
    schoolName: "",
    participated: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const initialValues2 = {
    clubName: "",
    involved: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const initialValues3 = {
    file: SchoolData.file ? SchoolData.file : "",
  };

  const [items, setItems] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);

  const [items2, setItems2] = React.useState([]);
  const [items3, setItems3] = React.useState(null);
  const [editIndex2, setEditIndex2] = React.useState(null);

  useEffect(() => {
    if (!isObjectEmpty(SchoolData)) {
      setItems(SchoolData.schoolDetails);
      setItems2(SchoolData.clubDetails);
      console.log(SchoolData);
    }
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      if (editIndex !== null) {
        // If editing, update the existing item
        const updatedItems = [...items];
        updatedItems[editIndex] = { ...values, id: editIndex + 1 };
        console.log(updatedItems,items,"==================");

        setItems(updatedItems);
        setEditIndex(null);
      } else {
        // If not editing, add a new item
        setItems([...items, { ...values, id: items.length + 1 }]);
      }

      resetForm();
    },
  });

  const formik2 = useFormik({
    initialValues: initialValues2,
    validationSchema: validationSchema2,
    onSubmit: (values, { resetForm }) => {
      console.log("jmiknm", values);
      if (editIndex2 !== null) {
        // If editing, update the existing item
        const updatedItems = [...items2];
        updatedItems[editIndex2] = { ...values, id: editIndex2 + 1 };
        console.log(updatedItems,items2,"==================");
        
        setItems2(updatedItems);
        setEditIndex2(null);
      } else {
        // If not editing, add a new item
        setItems2([...items2, { ...values, id: items2.length + 1 }]);
      }

      resetForm();
    },
  });

  const formik3 = useFormik({
    initialValues: initialValues3,
    validationSchema: validationSchema3,
    onSubmit: async (values, { resetForm }) => {
      var base64String = [];
   
      try {
        if (!Object.keys(SchoolData).length === 0) {
          base64String = values.file;
        } else {
          base64String = await Promise.all(
            values.file.map((file) => convertFileToBase64(file))
          );
        }
        base64String = base64String.map((data) =>
          data.startsWith("data:image/png;base64,") ? data : `data:image/png;base64,${data}`
        );
        let obj = {
          schoolDetails: items,
          clubDetails: items2,
          file: base64String,
        };
        console.log(obj,"ooobbjjj");
        if (SchoolData) {
          if (items && items.length > 0) {
            AllSchoollData(obj);  
            if (values.file) {
              setStep(3);
            } else {
              toast.error("Upload the Image");
            }
          } else {
            console.log(items, formik3.values.file);
            toast.error("Fill the School Details");
          }
        }
      } catch (error) {
        console.log(error, "error");
      }
    },
  });

  const handleEditItem = (index) => {
    setEditIndex(index);
    const { schoolName, participated, game, from, to, role } = items[index];
    formik.setValues({ schoolName, participated, game, from, to, role });
  };

  const handleEditItem2 = (index) => {
    setEditIndex2(index);
    const { clubName, involved, game, from, to, role } = items2[index];
    formik2.setValues({ clubName, involved, game, from, to, role });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleDeleteItem2 = (index) => {
    const updatedItems = [...items2];
    updatedItems.splice(index, 1);
    setItems2(updatedItems);
  };

  const nextPage = () => {
    let obj = {
      schoolDetails: items,
      clubDetails: items2,
      file: items3,
    };

    if (SchoolData) {
      if (items && items.length > 0) {
        if (formik3.values.file) {
          setStep(3);
        } else {
          toast.error("Upload the Image");
        }
        AllSchoollData(obj);
      } else {
        console.log(items, formik3.values.file);
        toast.error("Fill the School Details");
      }
    }

    console.log(items, "ohhh");
  };

  return (
    <div className="w-full bg-white border rounded-xl">
      <div className="p-4 m-2 text-xl md:text-2xl font-semibold text-center text-white bg-blue-900 rounded-xl">
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
        <form
          className="w-full bg-white border rounded-xl"
          onSubmit={formik.handleSubmit}
        >
          <div className="px-10 my-10">
            <div className="flex flex-col md:flex-row  gap-4 mb-10">
              <div className="w-full">
                <InputField
                  label="School Name"
                  name="schoolName"
                  required={true}
                  value={formik.values.schoolName}
                  onChange={formik.handleChange}
                  error={
                    formik.errors.schoolName &&
                    formik.touched.schoolName &&
                    formik.errors.schoolName
                  }
                />
              </div>

              <div
                className={`flex justify-center ${
                  formik.errors.schoolName ? "items-center" : "items-end"
                }`}
              >
                <button
                  className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                  type="submit"
                  style={{
                    height: "45px",
                  }}
                >
                  {editIndex !== null ? "Save" : "Add"}
                </button>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 gap-3 space-y-4 md:space-y-0">
              <InputField
                label="Team you played"
                name="participated"
                required={true}
                value={formik.values.participated}
                onChange={formik.handleChange}
                error={
                  formik.errors.participated &&
                  formik.touched.participated &&
                  formik.errors.participated
                }
              />
              <InputField
                value={formik.values.game}
                onChange={formik.handleChange}
                label="Game"
                name="game"
                required={true}
                error={
                  formik.errors.game &&
                  formik.touched.game &&
                  formik.errors.game
                }
              />
              <InputField
                type={"date"}
                value={formik.values.from}
                onChange={formik.handleChange}
                label="From"
                name="from"
                required={true}
                error={
                  formik.errors.from &&
                  formik.touched.from &&
                  formik.errors.from
                }
                max={new Date().toISOString().split("T")[0]}
              />
              <InputField
                type={"date"}
                value={formik.values.to}
                min={formik.values.from}
                onChange={formik.handleChange}
                label="To"
                name="to"
                required={true}
                error={
                  formik.errors.to && formik.touched.to && formik.errors.to
                }
                max={new Date().toISOString().split("T")[0]}
              />
              <InputField
                value={formik.values.role}
                onChange={formik.handleChange}
                label="Role"
                name="role"
                required={true}
                error={
                  formik.errors.role &&
                  formik.touched.role &&
                  formik.errors.role
                }
              />
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
        </form>
      </div>
      <div>
        <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
          Club Details (Optional)
        </div>
        <form
          className="w-full bg-white border rounded-xl"
          onSubmit={formik2.handleSubmit}
        >
          <div className="px-10 my-10">
            <div className="flex flex-col md:flex-row gap-4 mb-10">
              <div className="w-full">
                <InputField
                  label="Club Name"
                  name="clubName"
                  required={true}
                  value={formik2.values.clubName}
                  onChange={formik2.handleChange}
                  error={
                    formik2.errors.clubName &&
                    formik2.touched.clubName &&
                    formik2.errors.clubName
                  }
                  astric
                />
              </div>

              <div
                className={`flex justify-center ${
                  formik2.errors.clubName ? "items-center" : "items-end"
                }`}
              >
                <button
                  className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                  type="submit"
                  style={{
                    height: "45px",
                  }}
                >
                  {editIndex2 !== null ? "Save" : "Add"}
                </button>
              </div>
            </div>
            <div className="md:grid md:grid-cols-5 gap-3 space-y-4 md:space-y-0">
              <InputField
                label="Team you played"
                name="involved"
                required={true}
                value={formik2.values.involved}
                onChange={formik2.handleChange}
                error={
                  formik2.errors.involved &&
                  formik2.touched.involved &&
                  formik2.errors.involved
                }
                astric
              />
              <InputField
                value={formik2.values.game}
                onChange={formik2.handleChange}
                label="Game"
                name="game"
                required={true}
                error={
                  formik2.errors.game &&
                  formik2.touched.game &&
                  formik2.errors.game
                }
                astric
              />
              <InputField
                value={formik2.values.from}
                onChange={formik2.handleChange}
                label="From"
                name="from"
                required={true}
                error={
                  formik2.errors.from &&
                  formik2.touched.from &&
                  formik2.errors.from
                }
                type={"date"}
                max={new Date().toISOString().split("T")[0]}
                astric
              />
              <InputField
                value={formik2.values.to}
                min={formik2.values.from}
                type={"date"}
                onChange={formik2.handleChange}
                label="To"
                name="to"
                required={true}
                error={
                  formik2.errors.to && formik2.touched.to && formik2.errors.to
                }
                max={new Date().toISOString().split("T")[0]}
              />
              <InputField
                value={formik2.values.role}
                onChange={formik2.handleChange}
                label="Role"
                name="role"
                required={true}
                error={
                  formik2.errors.role &&
                  formik2.touched.role &&
                  formik2.errors.role
                }
                astric
              />
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
        </form>
      </div>
      <div className="px-10 py-2 text-xl font-semibold text-left text-white bg-blue-900">
        Image of your team you played (for verification purpose)
      </div>
      <form onSubmit={formik3.handleSubmit} className="py-4 px-10">
        <div className="col-span-full">
          <label
            htmlFor="cover-photo"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Add picture
          </label>
          <div className="flex justify-center px-6 py-10 mt-2 border border-dashed rounded-lg border-gray-900/25">
            <div className="text-center items-center justify-center flex flex-col">
              <div className="flex items-center gap-2 justify-center text-center">
                {selectedImage2 ? (
                  selectedImage2.map((img, i) => (
                    <Image
                      key={i}
                      src={img}
                      width={200}
                      height={200}
                      alt="Preview"
                    />
                  ))
                ) : (
                  <PhotoIcon
                    className="w-12 h-12 mx-auto text-gray-300"
                    aria-hidden="true"
                  />
                )}
              </div>
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
                    multiple
                    onChange={(event) => {
                      const files = Array.from(event.currentTarget.files);
                      const obj = [];
                      const obj2 = [];
                      files.map((file) => {
                        console.log(file,"values.file22");
                        
                        obj2.push(file);
                        obj.push(URL.createObjectURL(file));
                      });
                      formik3.setFieldValue("file", obj2);
                      setSelectedImage2(obj);
                      // if (file && file.type.startsWith("image/")) {
                      //   formik3.setFieldValue("file", file);
                      //   setSelectedImage2(URL.createObjectURL(file));
                      // }
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
        <div className="flex flex-col md:flex-row items-center justify-center mb-10 gap-3 mt-10">
          <button
            type="button"
            onClick={() => setStep(1)}
            className="p-2 text-lg font-semibold text-white bg-gray-400 rounded-full w-52"
          >
            Previous
          </button>
          <button
            type="submit"
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default SchoolDetail;
