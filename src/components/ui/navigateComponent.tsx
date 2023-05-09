import { navigateComponent } from "@/helpers/navigate";
import clsx from "clsx";

export interface IPropsNavigate extends ScrollOptions {
  id: string;
  text?: TextStyleOption;
}

type TextStyleOption = "↓" | "|";

function NavigateComponent(props: IPropsNavigate) {
  return (
    <div className={clsx("absolute -translate-y-48 bottom-0 cursor-pointer")}>
      <div
        className={clsx(
          "flex h-5 w-5 items-center justify-center",
          "animate-bounce"
        )}
        onClick={() => navigateComponent({ ...props })}
      >
        <span className="animate-ping absolute inline-flex h-7 w-3 rounded-full bg-[#f3f3f3] shadow-sm opacity-50" />
        <span
          className={clsx(
            "inline-flex relative h-10 w-4 self-center justify-center items-center rounded-full opacity-50 bg-[#3c3c3c]",
            "text-4xl text-center font-medium"
          )}
        >
          {props.text}
        </span>
      </div>
    </div>
  );
}

export default NavigateComponent;
