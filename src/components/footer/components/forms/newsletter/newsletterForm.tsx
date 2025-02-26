"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNewsletter } from "./newsletter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const NewsletterForm = () => {
  const { form, onSubmit } = useNewsletter();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex gap-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  placeholder="exemplo@email.com"
                  className="b-1 h-12 w-[603px] rounded-xl border-black bg-white placeholder:text-[21px] placeholder:font-normal placeholder:italic placeholder:text-[#AAAAAA]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="text-k_yellow_light h-12 w-52 rounded-xl bg-k_green_dark text-[28.39px]"
        >
          Assinar
        </Button>
      </form>
    </Form>
  );
};
