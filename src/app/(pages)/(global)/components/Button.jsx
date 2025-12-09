import Link from "next/link";

const Button = ({ isPrimary, titel }) => {
  if (isPrimary === true) {
    return (
      <Link
        href={`/${titel}`}
        className=" bg-green3 border-2 border-green3 rounded-xs text-white text-center w-[125px] py-BestFriend hover:bg-green2 hover:border-green2 hover:text-black hover:button]"
      >
        {titel}
      </Link>
    );
  } else {
    return (
      <Link
        href={`/${titel}`}
        className="border-2 border-white text-white md:border-black md:text-black text-center w-[125px] py-BestFriend hover:bg-green2 hover:button"
      >
        {titel}
      </Link>
    );
  }
};
export default Button;
