import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onFormSubmit = (data) => {
    console.log(JSON.stringify(data));
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <label htmlFor="name">Name</label>
        <br />
        <input
          type="text"
          {...register("name", {
            required: true,
            minLength: 3,
            pattern: /^[A-Za-z\s]+$/,
          })}
        />
        {errors.name && <p>This is required</p>}
        <br />
        <label htmlFor="email">email</label>
        <br />
        <input
          type="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
          })}
        />
        {errors.email && <p>This is required</p>}
        <br />
        <label htmlFor="phone">phone</label>
        <br />
        <input type="phone" {...register("phone")} />
        <br />
        <label htmlFor="password">password</label>
        <br />
        <input type="password" {...register("password")} />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
