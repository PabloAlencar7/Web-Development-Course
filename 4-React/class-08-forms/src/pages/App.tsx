import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
};

export function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <>
      <h1>Class 08 Forms</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>
            Name:{" "}
            <input
              type="text"
              {...register("name", {
                required: "Campo obrigatório.",
                minLength: { value: 3, message: "Mínimo de 3 Caracteres" },
              })}
            />
          </label>

          <div style={{ fontSize: 10, color: "red", position: "absolute" }}>
            {errors.name?.message}
          </div>
        </section>

        <br />

        <section>
          <label>
            Email:{" "}
            <input
              type="email"
              {...register("email", {
                required: "Campo obrigatório.",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i, message: "Endereço de email inválido.",
                },
              })}
            />
          </label>

          <div style={{ fontSize: 10, color: "red", position: "absolute" }}>
            {errors.email?.message}
          </div>
        </section>

        <br />
        <div>
          <button>Enviar</button>
        </div>
      </form>
    </>
  );
}
