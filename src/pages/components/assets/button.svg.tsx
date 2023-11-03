export const ButtonSvg = ({ title }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="142"
      height="40"
      viewBox="0 0 142 40"
      fill="none"
    >
      <path
        d="M0.5 20C0.5 9.23045 9.23045 0.5 20 0.5H122C132.77 0.5 141.5 9.23045 141.5 20C141.5 30.7696 132.77 39.5 122 39.5H20C9.23045 39.5 0.5 30.7696 0.5 20Z"
        fill="url(#paint0_linear_4_110)"
        stroke="url(#paint1_linear_4_110)"
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill="white"
        fontSize="13px"
        fontWeight={500}
      >
        {title}
      </text>
      <defs>
        <linearGradient
          id="paint0_linear_4_110"
          x1="70.7893"
          y1="40"
          x2="70.7893"
          y2="2.33391e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7C4D" />
          <stop offset="1" stopColor="#FFA466" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_4_110"
          x1="70.7893"
          y1="40"
          x2="70.7893"
          y2="2.33391e-06"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF7C4D" />
          <stop offset="1" stopColor="#FFA466" />
        </linearGradient>
      </defs>
    </svg>
  );
};
