import { BASE_API_URL } from "@/utils/envs";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export function usePostNewsletter() {
  const {
    mutate: postNewsLetter,
    isPending: isNewsletterPending,
    isError: hasNewsletterError,
    isSuccess: isNewsletterSucess,
  } = useMutation({
    mutationFn: (email: string) =>
      axios.post(`${BASE_API_URL}/newsletter/subscribe`, {
        email,
      }),
  });

  return { postNewsLetter, isNewsletterSucess, isNewsletterPending, hasNewsletterError };
}
