import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

export const useContactForm = () => {
  const formSchema = z.object({
    userName: z.string().max(50, {
      message: "Limite máximo de 50 caracteres",
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
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return {
    form,
    onSubmit,
  };
};
