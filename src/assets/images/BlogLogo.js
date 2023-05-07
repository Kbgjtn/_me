const BlogLogo = ({ title }) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "35px", height: "35px" }}
    >
      <circle cx="9" cy="9" r="9" fill="#3C3B3D" />
      <g width="20" height="20">
        <path d="M0 0V12L4 16H16V0H0ZM14 14H5V11H2V2H14V14Z" fill="black" />
        <path
          d="M7 6H5L6 4H5L4 6V9H7V6ZM12 6H10L11 4H10L9 6V9H12V6Z"
          fill="black"
        />
      </g>
    </svg>
  );
};

function checkLogoName(t) {
  if (!t && t.length === 0) return false;
  if (t === "blog") return true;
  return false;
}

export default BlogLogo;
