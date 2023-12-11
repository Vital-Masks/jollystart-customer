import React, { useEffect } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { useFormik } from "formik";
import * as Yup from "yup";
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}

const validationSchema = Yup.object({
  schoolName: Yup.string().required("Name is required"),
  participated: Yup.string().required("Age is required"),
  game: Yup.string().required("required"),
  from: Yup.string().required("required"),
  to: Yup.string().required("required"),
  role: Yup.string().required("required"),
});
const validationSchema2 = Yup.object({
  clubName: Yup.string().required("Name is required"),
  invloved: Yup.string().required("Age is required"),
  game: Yup.string().required("required"),
  from: Yup.string().required("required"),
  to: Yup.string().required("required"),
  role: Yup.string().required("required"),
});
const validationSchema3 = Yup.object().shape({
  file: Yup.mixed().required("File is required"),
});
const SchoolDetail = ({ AllSchoollData, SchoolData }) => {
  const { setStep } = useMembers();
  const initialValues = {
    schoolName: "",
    participated: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };
  const initialValues3 = {
    file: null,
  };
  const initialValues2 = {
    clubName: "",
    invloved: "",
    game: "",
    from: "",
    to: "",
    role: "",
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
        updatedItems[editIndex] = { ...values, id: editIndex2 + 1 };
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
    onSubmit: (values, { resetForm }) => {
      console.log("jmiknm", values);

      resetForm();
    },
  });

  const handleEditItem = (index) => {
    setEditIndex(index);
    const { schoolName, participated, game, from, to, role } = items[index];
    formik.setValues({ schoolName, participated, game, from, to, role });
  };
  const handleEditItem2 = (index) => {
    setEditIndex2(index);
    const { clubName, invloved, game, from, to, role } = items2[index];
    formik2.setValues({ clubName, invloved, game, from, to, role });
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
      if (items.length > 0 ) {
        setStep(3);
        AllSchoollData(obj);
      }
    }

    console.log(obj, "ohhh");
  };
  return (
    <div className="w-full bg-white border rounded-xl">
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
        <form
          className="w-full bg-white border rounded-xl"
          onSubmit={formik.handleSubmit}
        >
          <div className="px-10 my-10">
            <div className="flex items-end gap-4 mb-10">
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

              <button
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                type="submit"
              >
                {editIndex !== null ? "Edit" : "Add"}
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
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
              />
              <InputField
                value={formik.values.to}
                onChange={formik.handleChange}
                label="To"
                name="to"
                required={true}
                error={
                  formik.errors.to && formik.touched.to && formik.errors.to
                }
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
          Club Details
        </div>
        <form
          className="w-full bg-white border rounded-xl"
          onSubmit={formik2.handleSubmit}
        >
          <div className="px-10 my-10">
            <div className="flex items-end gap-4 mb-10">
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
                />
              </div>
              {formik.errors.clubName && formik.touched.clubName && (
                <div>{formik.errors.clubName}</div>
              )}

              <button
                className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
                type="submit"
              >
                {editIndex2 !== null ? "Edit" : "Add"}
              </button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              <InputField
                label="Team you played"
                name="invloved"
                required={true}
                value={formik2.values.invloved}
                onChange={formik2.handleChange}
                error={
                  formik2.errors.invloved &&
                  formik2.touched.invloved &&
                  formik2.errors.invloved
                }
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
              />
              <InputField
                value={formik2.values.to}
                onChange={formik2.handleChange}
                label="To"
                name="to"
                required={true}
                error={
                  formik2.errors.to && formik2.touched.to && formik2.errors.to
                }
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
        Image Of your team you played (for verification purpose)
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
                      formik.setFieldValue(
                        "file",
                        event.currentTarget.files[0]
                      );
                    }}
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
      </form>
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
