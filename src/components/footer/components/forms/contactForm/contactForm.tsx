"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { useContactForm } from "./contactForm.hook";
import { Textarea } from "@/components/ui/textarea";

export const ContactForm = () => {
  const { form, onSubmit } = useContactForm();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((e) => onSubmit(e))}
        className="space-y-8"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome*</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="b-1 h-9 rounded-none border-black bg-k_off_white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email*</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="b-1 h-9 rounded-none border-black bg-k_off_white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Título*</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  {...field}
                  className="b-1 h-9 rounded-none border-black bg-k_off_white"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Escreva a sua mensagem"
                  className="b-1 h-9 rounded-none border-black bg-k_off_white"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="w-6/12 rounded-none bg-k_brown text-[1rem] text-k_off_white"
        >
          Enviar
        </Button>
      </form>
    </Form>
  );
};
