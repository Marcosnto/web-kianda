import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { BASE_API_URL } from "@/utils/envs";

export const useContactForm = () => {
  const formSchema = z.object({
    userName: z.string().max(50, {
      message: "Limite máximo de 50 caracteres",
    }),
    subject: z.string().min(3).max(100, {
      message: "Limite máximo de 100 caracteres",
    }),
    email: z.string().email({
      message: "Email inválido",
    }),
    message: z
      .string()
      .min(5, {
        message: "Messagem deve possuir no mínimo 5 caracteres",
      })
      .max(2000, {
        message: "Messagem deve possuir no máximo 2000 caracteres",
      }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      userName: "",
      subject: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const { userName, email, message, subject } = values;
    const response = await axios.post(`${BASE_API_URL}/email/send`, {
      userName,
      source: email,
      to_email: "contatoweb@kiandadiversidade.com",
      subject: subject,
      body: message,
    });
  };

  return {
    form,
    onSubmit,
  };
};
