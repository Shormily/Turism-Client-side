import axios from "axios";
import React from "react";
import { Container } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://rocky-harbor-85366.herokuapp.com/services", data)
      .then((result) => {
        if (result.data?.insertedId) {
          alert("Service added");
        }
      });
  };
  return (
    <Container>
      <h3>Add A service</h3>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="name"
            className="form-control mb-2"
            {...register("name", { required: true })}
          />

          <textarea
            placeholder="description"
            className="form-control mb-2 "
            {...register("description", { required: true })}
          />
          <input
            type="url"
            placeholder="img link"
            className="form-control mb-2"
            {...register("img", { required: true })}
          />

          <input className="btn btn-primary" type="submit" />
        </form>
      </div>
    </Container>
  );
};

export default AddService;
