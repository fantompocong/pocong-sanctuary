import Link from "next/link";
import { Button } from "types/types";

function OutlineGradientButton({ url, title }: Button) {
  return (
    <Link href={url}>
      <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-none p-0.5 font-bold">
        <span className="absolute h-full w-full bg-gradient-to-br from-[#00FF80] via-[#00FF80] to-[#00FF80] group-hover:from-[#00FF80] group-hover:via-[#00FF80] group-hover:to-[#00FF80]"></span>
        <span className="duration-400 relative rounded-none bg-darkPrimary px-4 py-3 transition-all ease-out group-hover:bg-opacity-0">
          <span className="relative text-white hover:text-black ">{title}</span>
        </span>
      </button>
    </Link>
  );
}

export default OutlineGradientButton;
