import React from "react";
import {  useField } from "formik";
import { TextField, MenuItem } from "@material-ui/core";
import ImageUpload from "../../shared/ImageUpload/ImageUpload";
//import'./CreatePost.css';
const routes = [
  {
    value: "global",
    label: "Global",
  },
  {
    value: "room1",
    label: "Room 1",
  },
  {
    value: "room2",
    label: "Room 2",
  },
  {
    value: "room3",
    label: "Room 3",
  },
  {
    value: "room4",
    label: "Room 4",
  },
  {
    value: "room5",
    label: "Room 5",
  },
];

export const CustomTextInputMui = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="m-3">
      <TextField
        {...props}
        {...field}
        fullWidth
        error={meta.touched && meta.error ? meta.error : false}
        id="standard-error-helper-text"
        label={props.label}
        helperText={meta.error}
      />
    </div>
  );
};
export const CustomSelectInputMui = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="m-3">
      <TextField
        error={meta.touched && meta.error ? meta.error : false}
        {...props}
        {...field}
        fullWidth
        id="standard-select-currency"
        label="Select Route"
        select
        helperText={meta.error}
      >
        {routes.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
};

export const CustomFileInputMui = (props) => {
  const [field, meta] = useField(props);
  return (
    <div className="m-3">
      <ImageUpload type="file" {...props} {...field} />
      {meta.error && <p> {meta.error} </p>}
    </div>
  );
};
