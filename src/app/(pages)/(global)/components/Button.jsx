import Link from "next/link";

const Button = ({ isPrimary, titel, isForside }) => {
  if (isPrimary === true) {
    return (
      <Link
        href={`/kontakt`}
        className={` bg-green3 border-2 border-green3 rounded-xs text-white text-center w-[125px] py-BestFriend hover:bg-green2 hover:border-green2 hover:text-black font-normal button tracking-wide`}
      >
        {titel}
      </Link>
    );
  } else if (isForside === true) {
    return (
      <Link
        href={`/kontakt`}
        className={`border-2 border-white text-white bg-black/40 lg:bg-black/0 lg:border-black lg:text-black text-center w-[125px] py-BestFriend hover:border-green3 hover:text-green3 button tracking-wide rounded-xs`}
      >
        {titel}
      </Link>
    );
  } else {
    return (
      <Link
        href={`/kontakt`}
        className={`border-2 border-white text-white lg:border-black lg:text-black text-center w-[125px] py-BestFriend hover:border-white hover:text-white button tracking-wide rounded-xs`}
      >
        {titel}
      </Link>
    );
  }
};
export default Button;
