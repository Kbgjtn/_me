const Sosmed = (props: PropsSosmedArgs) => {
  return props.isHover ? (
    <div className="flex w-auto absolute z-50 h-auto top-15 left-14"></div>
  ) : null;
};

export default Sosmed;

type PropsSosmedArgs = {
  isHover: Boolean;
};
