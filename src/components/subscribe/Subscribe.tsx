import { Form } from "types/types";
import { useSubscribeToNewsletter } from "utils/form";
import SocialMedia from "./SocialMedia";

const Subscribe = () => {
  const { form, subscribe, inputEl } = useSubscribeToNewsletter();

  return (
    <footer className="mx-auto p-5 w-full">
      <SocialMedia />
      <div>
        <p className="text-center text-xs mt-8 opacity-60">
          &copy; 2023 pocong.xyz - Built with Next.js, Tailwind, Contentlayer,
          Vercel | Based on bughowi.com.
        </p>
      </div>
    </footer>
  );
};

export default Subscribe;
