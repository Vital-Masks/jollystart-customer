import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  clubName: Yup.string().required("Name is required"),
  invloved: Yup.string().required("Age is required"),
  game: Yup.string().required("required"),
  from: Yup.string().required("required"),
  to: Yup.string().required("required"),
  role: Yup.string().required("required"),
});
const AddClub = ({ schoolDetails }) => {
  const [Loading, setLoading] = useState(false);
  const initialValues = {
    clubName: "",
    invloved: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const [items, setItems] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);
  useEffect(() => {
    console.log(schoolDetails,"schoooooooo");
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
      clubDetails: AllData,
    };
    console.log(obj, "objjj");
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
    const { clubName, invloved, game, from, to, role } = items[index];
    formik.setValues({ clubName, invloved, game, from, to, role });
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
        <div className="flex items-end gap-4 mb-10">
         
          <div className="w-full">
            <InputField
              label="Club Name"
              name="clubName"
              required={true}
              value={formik.values.clubName}
              onChange={formik.handleChange}
              error={
                formik.errors.clubName &&
                formik.touched.clubName &&
                formik.errors.clubName
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
            {editIndex !== null ? "Edit" : "Add"}
          </button>
        </div>
        <div className="grid grid-cols-5 gap-3">
          <InputField
            label="Team you played"
            name="invloved"
            required={true}
            value={formik.values.invloved}
            onChange={formik.handleChange}
            error={
              formik.errors.invloved &&
              formik.touched.invloved &&
              formik.errors.invloved
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
            error={
              formik.errors.from && formik.touched.from && formik.errors.from
            }
          />
          <InputField
            value={formik.values.to}
            onChange={formik.handleChange}
            label="To"
            name="to"
            required={true}
            error={formik.errors.to && formik.touched.to && formik.errors.to}
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
              table="2"
            />
          </div>
        )}
      </div>
    </form>
  );
};

export default AddClub;
