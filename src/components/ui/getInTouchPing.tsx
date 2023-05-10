import clsx from "clsx";

function GetInTouchPing() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center translate-y-24 text-md font-semibold gap-4 content-center"
      )}
    >
      <span className="inline-flex justify-center self-center items-center">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#f3f3f3] opacity-50" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3c3c3c]"></span>
      </span>
      Get In Touch!
    </div>
  );
}

export default GetInTouchPing;
