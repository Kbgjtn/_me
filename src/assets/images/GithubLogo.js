const GithubLogo = ({ title }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="#1A1A1A"
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "36px", height: "36px" }}
    >
      <path
        d={
          checkLogoName(title)
            ? "M6.71275 17.2392C8.41353 17.8087 10.2535 17.809 11.9544 17.24C11.8924 17.26 11.8266 17.2649 11.7623 17.2544C11.698 17.2439 11.6371 17.2182 11.5847 17.1796C11.5323 17.1409 11.4898 17.0903 11.4608 17.032C11.4317 16.9737 11.417 16.9093 11.4178 16.8442C11.4178 16.5625 11.4286 15.6667 11.4286 14.5525C11.4509 14.2702 11.4123 13.9865 11.3152 13.7204C11.2181 13.4544 11.065 13.2124 10.8661 13.0109C12.7203 12.8025 14.6678 12.0942 14.6678 8.89586C14.6812 8.06746 14.3754 7.26565 13.8136 6.65669C14.0683 5.93687 14.0385 5.14693 13.7303 4.44836C13.7303 4.44836 13.0319 4.21919 11.4386 5.30252C10.075 4.92748 8.63549 4.92748 7.27192 5.30252C5.67775 4.22919 4.98025 4.44752 4.98025 4.44752C4.6719 5.14608 4.64209 5.93605 4.89692 6.65586C4.33677 7.26582 4.03116 8.06696 4.04275 8.89502C4.04275 12.0825 5.98025 12.8017 7.83442 13.01C7.52775 13.305 7.33942 13.7009 7.30275 14.1242C7.09868 14.2386 6.87405 14.3118 6.64171 14.3393C6.40937 14.3669 6.17386 14.3485 5.94866 14.285C5.72345 14.2216 5.51296 14.1143 5.32921 13.9695C5.14545 13.8247 4.99205 13.645 4.87775 13.4409L4.87609 13.4367C4.74687 13.2018 4.5629 13.0015 4.33978 12.8528C4.11667 12.7041 3.86099 12.6114 3.59442 12.5825C2.89692 12.5934 3.31359 12.9784 3.60525 13.135C3.98109 13.4517 4.27442 13.8559 4.45942 14.3117C4.62609 14.7809 5.16775 15.6767 7.26109 15.2909C7.26109 15.9892 7.27192 16.645 7.27192 16.8434C7.27192 17.0592 7.11692 17.3025 6.71275 17.2392Z"
            : ""
        }
        fill="#B9B9B9"
        style={{ transition: "500ms" }}
      />
      <mask
        id="path-2-outside-1_0_1"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="18"
        height="18"
        fill="black"
      >
        <path d="M9.33333 1C4.73083 1 1 4.73083 1 9.33333C1 13.0192 3.39583 16.1408 6.7125 17.24C7.11667 17.3025 7.27083 17.06 7.27083 16.8442C7.27083 16.6458 7.26083 15.99 7.26083 15.2917C5.16667 15.6775 4.625 14.7817 4.45833 14.3125C4.2733 13.8568 3.98015 13.4529 3.60417 13.1358C3.3125 12.9792 2.89583 12.5942 3.59333 12.5833C4.135 12.6417 4.6125 12.9608 4.875 13.4375L4.8775 13.4425C4.99179 13.6467 5.1452 13.8263 5.32895 13.9711C5.5127 14.116 5.72319 14.2232 5.9484 14.2867C6.17361 14.3501 6.40911 14.3686 6.64145 14.341C6.8738 14.3134 7.09843 14.2403 7.3025 14.1258C7.33833 13.7008 7.5275 13.3058 7.83333 13.0108C5.97917 12.8025 4.04167 12.0833 4.04167 8.89583C4.03007 8.06777 4.33568 7.26663 4.89583 6.65667C4.64109 5.93685 4.6709 5.14691 4.97917 4.44833C4.97917 4.44833 5.67667 4.22917 7.27083 5.3025C8.6344 4.92746 10.0739 4.92746 11.4375 5.3025C13.0308 4.21917 13.7292 4.44833 13.7292 4.44833C14.0375 5.14667 14.0675 5.93667 13.8125 6.65667C14.3743 7.26563 14.6801 8.06743 14.6667 8.89583C14.6667 12.0942 12.7183 12.8025 10.865 13.0108C11.2667 13.4192 11.4725 13.9808 11.4275 14.5525C11.4275 15.6667 11.4167 16.5625 11.4167 16.8442C11.4158 16.9093 11.4305 16.9737 11.4594 17.032C11.4883 17.0903 11.5307 17.1409 11.583 17.1797C11.6354 17.2184 11.6961 17.2442 11.7604 17.2548C11.8246 17.2654 11.8905 17.2607 11.9525 17.2408C15.27 16.1417 17.6667 13.02 17.6667 9.33333C17.6667 4.73083 13.9358 1 9.33333 1Z" />
      </mask>
      <path
        d="M9.33333 1C4.73083 1 1 4.73083 1 9.33333C1 13.0192 3.39583 16.1408 6.7125 17.24C7.11667 17.3025 7.27083 17.06 7.27083 16.8442C7.27083 16.6458 7.26083 15.99 7.26083 15.2917C5.16667 15.6775 4.625 14.7817 4.45833 14.3125C4.2733 13.8568 3.98015 13.4529 3.60417 13.1358C3.3125 12.9792 2.89583 12.5942 3.59333 12.5833C4.135 12.6417 4.6125 12.9608 4.875 13.4375L4.8775 13.4425C4.99179 13.6467 5.1452 13.8263 5.32895 13.9711C5.5127 14.116 5.72319 14.2232 5.9484 14.2867C6.17361 14.3501 6.40911 14.3686 6.64145 14.341C6.8738 14.3134 7.09843 14.2403 7.3025 14.1258C7.33833 13.7008 7.5275 13.3058 7.83333 13.0108C5.97917 12.8025 4.04167 12.0833 4.04167 8.89583C4.03007 8.06777 4.33568 7.26663 4.89583 6.65667C4.64109 5.93685 4.6709 5.14691 4.97917 4.44833C4.97917 4.44833 5.67667 4.22917 7.27083 5.3025C8.6344 4.92746 10.0739 4.92746 11.4375 5.3025C13.0308 4.21917 13.7292 4.44833 13.7292 4.44833C14.0375 5.14667 14.0675 5.93667 13.8125 6.65667C14.3743 7.26563 14.6801 8.06743 14.6667 8.89583C14.6667 12.0942 12.7183 12.8025 10.865 13.0108C11.2667 13.4192 11.4725 13.9808 11.4275 14.5525C11.4275 15.6667 11.4167 16.5625 11.4167 16.8442C11.4158 16.9093 11.4305 16.9737 11.4594 17.032C11.4883 17.0903 11.5307 17.1409 11.583 17.1797C11.6354 17.2184 11.6961 17.2442 11.7604 17.2548C11.8246 17.2654 11.8905 17.2607 11.9525 17.2408C15.27 16.1417 17.6667 13.02 17.6667 9.33333C17.6667 4.73083 13.9358 1 9.33333 1Z"
        fill="#3C3B3D"
      />
      <path
        d="M9.33333 1C4.73083 1 1 4.73083 1 9.33333C1 13.0192 3.39583 16.1408 6.7125 17.24C7.11667 17.3025 7.27083 17.06 7.27083 16.8442C7.27083 16.6458 7.26083 15.99 7.26083 15.2917C5.16667 15.6775 4.625 14.7817 4.45833 14.3125C4.2733 13.8568 3.98015 13.4529 3.60417 13.1358C3.3125 12.9792 2.89583 12.5942 3.59333 12.5833C4.135 12.6417 4.6125 12.9608 4.875 13.4375L4.8775 13.4425C4.99179 13.6467 5.1452 13.8263 5.32895 13.9711C5.5127 14.116 5.72319 14.2232 5.9484 14.2867C6.17361 14.3501 6.40911 14.3686 6.64145 14.341C6.8738 14.3134 7.09843 14.2403 7.3025 14.1258C7.33833 13.7008 7.5275 13.3058 7.83333 13.0108C5.97917 12.8025 4.04167 12.0833 4.04167 8.89583C4.03007 8.06777 4.33568 7.26663 4.89583 6.65667C4.64109 5.93685 4.6709 5.14691 4.97917 4.44833C4.97917 4.44833 5.67667 4.22917 7.27083 5.3025C8.6344 4.92746 10.0739 4.92746 11.4375 5.3025C13.0308 4.21917 13.7292 4.44833 13.7292 4.44833C14.0375 5.14667 14.0675 5.93667 13.8125 6.65667C14.3743 7.26563 14.6801 8.06743 14.6667 8.89583C14.6667 12.0942 12.7183 12.8025 10.865 13.0108C11.2667 13.4192 11.4725 13.9808 11.4275 14.5525C11.4275 15.6667 11.4167 16.5625 11.4167 16.8442C11.4158 16.9093 11.4305 16.9737 11.4594 17.032C11.4883 17.0903 11.5307 17.1409 11.583 17.1797C11.6354 17.2184 11.6961 17.2442 11.7604 17.2548C11.8246 17.2654 11.8905 17.2607 11.9525 17.2408C15.27 16.1417 17.6667 13.02 17.6667 9.33333C17.6667 4.73083 13.9358 1 9.33333 1Z"
        stroke="#1A1A1A"
        strokeWidth="0.6"
        mask="url(#path-2-outside-1_0_1)"
      />
    </svg>
  );
};

function checkLogoName(t) {
  if (!t && t.length === 0) return false;
  if (t === "repository") return true;
  return false;
}

export default GithubLogo;