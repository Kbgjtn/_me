const BookLogo = ({ title }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "35px", height: "35px" }}
    >
      <circle cx="9" cy="9" r="9" fill="#3C3B3D" />
      <path
        d="M8.625 6.33333V13C8.25 12.6667 7.5 12 5.8125 12C5.02566 11.9963 4.24309 12.103 3.49369 12.3163C3.43731 12.333 3.37727 12.3375 3.31851 12.3296C3.25976 12.3216 3.20397 12.3014 3.15575 12.2705C3.10754 12.2396 3.06827 12.199 3.04119 12.1519C3.01411 12.1049 2.99999 12.0528 3 12V6C2.99999 5.95397 3.01071 5.90844 3.03147 5.86627C3.05224 5.82411 3.0826 5.78622 3.12066 5.755C3.64547 5.32467 4.80262 5 5.8125 5C7.19475 5 7.99819 5.668 8.43 6.02675L8.50434 6.08842C8.54238 6.11963 8.57274 6.1575 8.59351 6.19965C8.61427 6.2418 8.625 6.28732 8.625 6.33333ZM9.375 6.33333V13C9.75 12.6667 10.5 12 12.1875 12C12.9743 11.9963 13.7569 12.103 14.5063 12.3163C14.5627 12.333 14.6227 12.3376 14.6815 12.3297C14.7403 12.3217 14.7961 12.3015 14.8443 12.2706C14.8926 12.2397 14.9318 12.199 14.9589 12.152C14.986 12.1049 15.0001 12.0528 15 12V6C15 5.95397 14.9893 5.90844 14.9685 5.86627C14.9478 5.82411 14.9174 5.78622 14.8793 5.755C14.3545 5.32475 13.1975 5 12.1875 5C10.8054 5 10.0017 5.668 9.57 6.02675C9.54403 6.04842 9.51947 6.06892 9.49566 6.08842C9.45762 6.11963 9.42726 6.1575 9.40649 6.19965C9.38573 6.2418 9.375 6.28732 9.375 6.33333Z"
        fill={checkLogoName(title) ? "#B9B9B9" : "#1A1A1A"}
        style={{ transition: "500ms" }}
      />
    </svg>
  );
};

function checkLogoName(t) {
  if (!t && t.length === 0) return false;
  if (t === "book") return true;
  return false;
}

export default BookLogo;