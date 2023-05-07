export const LoadingBar = ({ loading }: { loading: number }) => {
  return (
    <div className="flex z-20 flex-col justify-center items-center max-w-xl">
      <p className="font-normal text-[16px] text-snow"> {loading + "%"}</p>
      <svg height="18" width="300">
        <line
          x="0"
          y="0"
          x2={`${loading}%`}
          y2=""
          className={" stroke-[#FFB300] stroke-8 dark:stroke-white"}
        />
      </svg>
    </div>
  );
};
