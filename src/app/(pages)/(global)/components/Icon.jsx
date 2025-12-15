import PhoneIcon from "./Phone";
import EmailIcon from "./Email";
import CardIcon from "./Card";

const Icon = ({ i, text, label, isRight, color }) => {
  let choosenIcon = null;
  let pIcon = "";

  if (isRight == false) {
    pIcon = "-col-start-1 -col-end-2 row-start-1 row-end-2";
  } else {
    pIcon = "col-start-1 col-end-2 row-start-1 row-end-2";
  }

  if (i === "phone") {
    choosenIcon = <PhoneIcon pIcon={`${pIcon}`}></PhoneIcon>;
  } else if (i === "email") {
    choosenIcon = <EmailIcon pIcon={`${pIcon}`}></EmailIcon>;
  } else if (i === "card") {
    choosenIcon = <CardIcon pIcon={`${pIcon}`}></CardIcon>;
  }

  if (isRight == false) {
    return (
      <div
        className={`grid min-w-[200px] grid-cols-[2fr_4fr] grid-rows-1 gap-Friend justify-self-start md:justify-self-end`}
      >
        <div
          className={`grid grid-cols-2 max-w-[40px] items-center col-start-1 col-end-2 row-start-1`}
        >
          <div
            className={`col-start-1 col-end-2 row-start-1 row-end-2 w-[45px] h-Casual3 ${color} rounded-[10px]`}
          ></div>
          {choosenIcon}
        </div>
        {label ? (
          <div className="self-center w-fit row-start-1">
            <p>{label}</p>
            <p className="">{text}</p>
          </div>
        ) : (
          <div className="self-center w-fit row-start-1">
            <p className="">{text}</p>
          </div>
        )}
      </div>
    );
  } else {
    return (
      <div
        className={`max-w-fit grid grid-cols-[4fr_2fr] grid-rows-1 gap-Friend justify-self-end md:justify-self-start`}
      >
        <div
          className={`grid grid-cols-2 max-w-[60px] items-center -col-start-1 -col-end-2 row-start-1 md:justify-self-end`}
        >
          <div
            className={`-col-start-1 -col-end-2 justify-self-end row-start-1 row-end-2 w-[45px] h-Casual3 ${color} rounded-[10px]`}
          ></div>
          {choosenIcon}
        </div>
        {label ? (
          <div className="self-center  md:justify-self-start w-fit row-start-1">
            <p>{label}</p>
            <p className="">{text}</p>
          </div>
        ) : (
          <div className="self-center md:justify-self-start w-fit row-start-1">
            <p className="">{text}</p>
          </div>
        )}
      </div>
    );
  }
};

export default Icon;
