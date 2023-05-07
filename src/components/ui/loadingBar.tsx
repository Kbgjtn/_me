export const LoadingBar = ({ loading }: { loading: number }) => {
  return (
    <div className="flex z-20 flex-col justify-center items-center max-w-xl">
      <p className="font-normal text-[16px] text-snow"> {loading + "%"}</p>
      <svg height="6" width="300">
        <line
          x="0"
          y="0"
          x2={`${loading}%`}
          y2="0"
          className={"stroke-[#1c1c1c] h-[4px] stroke-[4px] dark:stroke-white"}
        />
      </svg>
    </div>
  );
};
