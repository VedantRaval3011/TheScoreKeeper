import React from "react";
import PageTitle from "../../components/PageTitle";
import { useNavigate } from "react-router-dom";
import StudentForm from "../../components/StudentForm";

function AddStudent() {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title="Add Student" />
      <img
        src="https://dhavalmangukiya.000webhostapp.com/scorekeeper/add.png"
        alt=""
        height={100}
        width={100}
        className="my-2"
      />
      <StudentForm />
    </div>
  );
}

export default AddStudent;