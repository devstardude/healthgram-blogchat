import React, { useState } from "react";
import JumbotronTop from "../shared/JumbotronTop/JumbotronTop";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import {
  CustomFileInputMui,
  CustomTextInputMui,
  CustomSelectInputMui,
} from "../shared/Inputs/Inputs";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import * as db from "../../firebase/config";
//import'./CreatePost.css';
const auth = firebase.auth();
const firestore = firebase.firestore();

const CreatePost = (props) => {

  const imageUploadHandler = async (id, file) => {
    const url = await db.uploadImage(id,file);
    return url;
  };
  const dataSubmitHandler = async (values, { setSubmitting, resetForm }) => {
    const postRef = firestore.collection(`posts-${values.route}`);
    const { uid, photoURL } = auth.currentUser;
    await postRef.add({
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      data: {
        title: values.title,
        description: values.description,
        content: values.content,
        route: values.route,
        file: await imageUploadHandler(uid,values.file)
      },
      uid,
      photoURL,
    });
    setSubmitting(false);
    // resetForm();
  };
  return (
    <div>
      <JumbotronTop jumboHeight="20">
        <h2>Create Post</h2>
      </JumbotronTop>
      <div className="container">
        <Formik
          initialValues={{
            route: "",
            title: "",
            description: "",
            content: "",
            file: null,
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .min(1, "Must be atleast 1 characters")
              .max(60, "Cannot exceed 60 character")
              .required("Required"),
            description: Yup.string()
              .min(1, "Must be atleast 1 characters")
              .max(60, "Cannot exceed 60 character")
              .required("Required"),
            content: Yup.string()
              .min(1, "Must be atleast 1 characters")
              .required("Required"),
            route: Yup.string()
              .oneOf(["global", "room1", "room2", "room3","room4","room5"])
              .required("Required"),
            // file: Yup.mixed().required("Please upload a file"),
          })}
          onSubmit={dataSubmitHandler}
        >
          {({ setFieldValue, ...props }) => (
            <Form>
              <CustomTextInputMui
                label="Title"
                name="title"
                placeholder="Title here"
              />
              <CustomTextInputMui
                label="Despcription"
                name="description"
                placeholder="Description here"
              />
              <CustomTextInputMui
                multiline
                rows={6}
                label="Content"
                name="content"
                placeholder="Content here"
              />
              <CustomSelectInputMui name="route" />

              <CustomFileInputMui
                id="file"
                name="file"
                onInput={(file) => file && setFieldValue("file", file)}
              />
              <button className="btn btn-dark px-4 m-3" type="submit">
                {props.isSubmitting ? "Submitting" : "Submit"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CreatePost;
