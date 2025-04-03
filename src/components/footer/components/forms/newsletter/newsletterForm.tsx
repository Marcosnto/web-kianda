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
        className="mb-[1rem] flex w-full justify-between md:mb-0 md:gap-0"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="w-[70%]">
              <FormControl>
                <Input
                  {...field}
                  placeholder="exemplo@email.com"
                  className="h-[17px] w-full rounded-md border-black bg-white placeholder:font-normal placeholder:italic placeholder:text-[#AAAAAA] md:h-[32px] lg:h-12 lg:placeholder:text-[21px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="h-[17px] w-[25%] flex-grow-0 rounded-md bg-k_green_dark text-[12px] text-k_yellow_light md:h-[31px] md:text-[19px] lg:h-12 lg:text-[28.39px]"
        >
          Assinar
        </Button>
      </form>
    </Form>
  );
};
