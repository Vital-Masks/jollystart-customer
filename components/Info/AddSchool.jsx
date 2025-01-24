import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  schoolName: Yup.string().required("required"),
  participated: Yup.string().required("required"),
  game: Yup.string().required("required"),
  from: Yup.string().required("required"),
  to: Yup.string().required("required"),
  role: Yup.string().required("required"),
});

const AddSchool = ({ schoolDetails }) => {
  const [Loading, setLoading] = useState(false);
  const initialValues = {
    schoolName: "",
    participated: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const [items, setItems] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);
  useEffect(() => {
    setItems(schoolDetails);
  }, []);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      let AllData = [];
      if (editIndex !== null) {
        // If editing, update the existing item
        const updatedItems = [...items];
        updatedItems[editIndex] = { ...values, id: editIndex + 1 };
        AllData = updatedItems;
        setItems(updatedItems);
        setEditIndex(null);
      } else {
        // If not editing, add a new item
        setItems([...items, { ...values, id: items.length + 1 }]);
        AllData = [...items, { ...values, id: items.length + 1 }];
      }
      console.log(AllData, "testing");
      handlePutRequest(AllData);
      resetForm();
    },
  });
  const handlePutRequest = async (AllData) => {
    const userDataString = localStorage.getItem("userData");
    const userData = JSON.parse(userDataString);

    let obj = {
      schoolDetails: AllData,
    };
    setLoading(true);
    try {
      setLoading(true);
      const response = await fetch(
        "https://api.jollystarssc.com/api/member/" + userData._id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("POST request successful. Response:", data);
    } catch (error) {
      console.error("Error during POST request:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleEditItem = (index) => {
    setEditIndex(index);
    const { schoolName, participated, game, from, to, role } = items[index];
    formik.setValues({ schoolName, participated, game, from, to, role });
  };

  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
    handlePutRequest(updatedItems);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="px-10 my-10">
        <div
          className="flex flex-col sm:flex-row items-end gap-4 mb-10"

          style={{
            alignItems:
              formik.errors.schoolName && formik.touched.schoolName
                ? "center"
                : "end",
          }}
        >
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
            {editIndex !== null ? "Save" : "Add"}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
              formik.errors.game && formik.touched.game && formik.errors.game
            }
          />
          <InputField
            value={formik.values.from}
            onChange={formik.handleChange}
            label="From"
            name="from"
            required={true}
            type={"date"}
            error={
              formik.errors.from && formik.touched.from && formik.errors.from
            }
            max={new Date().toISOString().split("T")[0]}
          />
          <InputField
            min={formik.values.from}
            // value={formik.values.to}
            value={formik.values.to.split("/").reverse().join("-") || ""} // Convert DD/MM/YYYY to YYYY-MM-DD
            onChange={formik.handleChange}
            label="To"
            name="to"
            type={"date"}
            required={true}
            placeholder="DD/MM/YYYY"
            error={formik.errors.to && formik.touched.to && formik.errors.to}
            max={new Date().toISOString().split("T")[0]}
          />
          <InputField
            value={formik.values.role}
            onChange={formik.handleChange}
            label="Role"
            name="role"
            required={true}
            error={
              formik.errors.role && formik.touched.role && formik.errors.role
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
  );
};

export default AddSchool;
