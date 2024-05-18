import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export default function useRegisterUser() {
  // const file = e?.target?.files[0];
  // if (file) {
  //   // Ubah file menjadi URL objek
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     setPreview(reader.result);
  //   };
  //   reader.readAsDataURL(file);
  // }

  const registerSchema = Yup.object({
    username: Yup.string().required("Username is required!"),
    email: Yup.string()
      .email("Email is invalid!")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    role: Yup.string().required("First Name is required!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      username: "",
      role: "",
    },
    resolver: yupResolver(registerSchema),
  });
  return { register, handleSubmit, errors, isSubmitting, control };
}
