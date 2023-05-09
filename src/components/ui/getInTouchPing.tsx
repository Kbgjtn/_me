import clsx from "clsx";

function GetInTouchPing() {
  return (
    <div
      className={clsx(
        `flex relative items-center justify-center translate-y-24 font-semibold gap-4`
      )}
    >
      <div className="flex rel h-3 w-3">
        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-[#f3f3f3] shadow-sm opacity-50" />
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#3c3c3c]"></span>
      </div>
      Get In Touch!
    </div>
  );
}

export default GetInTouchPing;
