import React, { useEffect, useState } from "react";
import InputField from "../UI/InputField";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { useMembers } from "@/contexts/MemberContext";
import Table from "../Table";
import { useFormik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  clubName: Yup.string().required("required"),
  involved: Yup.string().required("required"),
  game: Yup.string().required("required"),
  from: Yup.string().required("required"),
  to: Yup.string().required("required"),
  role: Yup.string().required("required"),
});
const AddClub = ({ schoolDetails }) => {
  const [Loading, setLoading] = useState(false);
  const initialValues = {
    clubName: "",
    involved: "",
    game: "",
    from: "",
    to: "",
    role: "",
  };

  const [items, setItems] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);
  useEffect(() => {
    console.log(schoolDetails, "schoooooooo");
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
        "https://api.jollystars.lk/api/member/" + userData._id,
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
    const { clubName, involved, game, from, to, role } = items[index];
    formik.setValues({ clubName, involved, game, from, to, role });
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
              formik.errors.clubName && formik.touched.clubName
                ? "center"
                : "end",
          }}
        >
          <div className="w-full">
            <InputField
              astric
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

          <button
            className="p-2 text-lg font-semibold text-white bg-blue-900 rounded-full w-52"
            type="submit"
          >
            {editIndex !== null ? "Save" : "Add"}
          </button>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <InputField
            astric
            label="Team you played"
            name="involved"
            required={true}
            value={formik.values.involved}
            onChange={formik.handleChange}
            error={
              formik.errors.involved &&
              formik.touched.involved &&
              formik.errors.involved
            }
          />
          <InputField
            astric
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
            astric
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
            astric
            min={formik.values.from}
            value={formik.values.to}
            onChange={formik.handleChange}
            label="To"
            name="to"
            type={"date"}
            required={true}
            error={formik.errors.to && formik.touched.to && formik.errors.to}
            max={new Date().toISOString().split("T")[0]}
          />
          <InputField
            astric
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
