import { Profile } from "../../../.contentlayer/generated";
import Link from "next/link";

function ProfileCard(profile: Profile) {
  return (
    <div className="flex flex-col gap-3 bg-darkSecondary p-4 border border-slate-300 border-opacity-40 rounded-md hover:scale-[1.02] transition-transform ease-in-out">
      <h3 className="font-bold text-2xl hover:text-greenAccent transition-colors w-fit">
        <Link href={profile.url}>{profile.title}</Link>
      </h3>
      <p className="text-opacity-80">{profile.name}</p>
    </div>
  );
}

export default ProfileCard;
