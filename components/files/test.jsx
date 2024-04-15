import React from "react";
import TextField from "@mui/material/TextField";

const CustomImageInput = ({
  size,
  id,
  name,
  label,
  formikProps,
  onChange,
  labelstyle,
  edit,
}) => {
  return (
    <div>
      {edit ? (
        <div
          className={`form-floatng ${
            formikProps.errors[name] ? "has-error" : ""
          } flex justify-center w-full`}
        >
          <div class="flex items-center justify-center w-full">
            <label
              style={labelstyle}
              for={id}
              class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  "
            >
              <div class="flex flex-col items-center justify-center pt-1 pb-1 ">
                <svg
                  style={{ width: "20px" }}
                  class="w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span class="font-semibold">{label}</span>
                </p>

                <div className="flex w-full justify-between ps-2 pe-2">
                  <label for={id}>
                    <p class="mb-2 text-sm text-gray-500 dark:text-black-400 btn">
                      Click to upload
                    </p>
                  </label>
                  <p class="mb-2 text-sm text-black dark:text-black-400">
                    open
                  </p>
                </div>
              </div>
              <input id={id} type="file" class="hidden" onChange={onChange} />
            </label>
          </div>

          {/* <TextField

        label={label}
        variant="outlined"
        fullWidth
        value={formikProps.values[name]}
        onChange={formikProps.handleChange}
        onBlur={formikProps.handleBlur}
        error={formikProps.touched[name] && Boolean(formikProps.errors[name])}
        helperText={
          formikProps.touched.vehicle_category &&
          formikProps.errors.vehicle_category
        }
        margin="normal"
        size={size ? "small" : "medium"}
      /> */}
        </div>
      ) : (
        <div
          className={`form-floatng ${
            formikProps.errors[name] ? "has-error" : ""
          } flex justify-center w-full`}
        >
          <div class="flex items-center justify-center w-full">
            <label
              style={labelstyle}
              for={id}
              class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer  "
            >
              <div class="flex flex-col items-center justify-center pt-1 pb-1 ">
                <svg
                  style={{ width: "20px" }}
                  class="w-8 h-8 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400 text-center">
                  <span class="font-semibold">{label}</span>
                </p>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span class="font-semibold">Click to upload</span>
                </p>
              </div>
              <input id={id} type="file" class="hidden" onChange={onChange} />
            </label>
          </div>

          {/* <TextField
  
          label={label}
          variant="outlined"
          fullWidth
          value={formikProps.values[name]}
          onChange={formikProps.handleChange}
          onBlur={formikProps.handleBlur}
          error={formikProps.touched[name] && Boolean(formikProps.errors[name])}
          helperText={
            formikProps.touched.vehicle_category &&
            formikProps.errors.vehicle_category
          }
          margin="normal"
          size={size ? "small" : "medium"}
        /> */}
        </div>
      )}
    </div>
  );
};

export default CustomImageInput;
