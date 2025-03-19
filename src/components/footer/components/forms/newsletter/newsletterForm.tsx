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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mb-[1rem] flex w-full flex-col items-center gap-1"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[220px]">
              <FormControl>
                <Input
                  {...field}
                  placeholder="exemplo@email.com"
                  className="mb-[7px] h-[17px] w-full rounded-md border-black bg-white placeholder:font-normal placeholder:italic placeholder:text-[#AAAAAA] lg:h-12 lg:w-[90px] lg:placeholder:text-[21px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-[17px] w-[90px] flex-grow-0 rounded-md bg-k_green_dark text-[12px] text-k_yellow_light lg:h-12 lg:w-52 lg:text-[28.39px]"
        >
          Assinar
        </Button>
      </form>
    </Form>
  );
};
