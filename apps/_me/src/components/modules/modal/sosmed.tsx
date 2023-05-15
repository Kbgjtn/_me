const Sosmed = (props: PropsSosmedArgs) => {
   return props.isHover ? (
      <div className="top-15 absolute left-14 z-50 flex h-auto w-auto"></div>
   ) : null;
};

export default Sosmed;

type PropsSosmedArgs = {
   isHover: Boolean;
};
