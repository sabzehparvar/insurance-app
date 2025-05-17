import React from "react";

export const IranIcon = () => (
  <svg
    width={31}
    height={15}
    viewBox="0 0 31 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      width={30.317}
      height={15}
      fill="url(#iran-flag-pattern)"
    />
    <defs>
      <pattern
        id="iran-flag-pattern"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use
          href="#iran-flag-image"
          transform="matrix(0.00392 0 0 0.00793 0 -0.0786)"
        />
      </pattern>
      <image
        id="iran-flag-image"
        width={255}
        height={146}
        href="data:image/png;base64,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"
      />
    </defs>
  </svg>
);

export const CarIcon = () => (
  <svg
    width={32}
    height={32}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x={0}
      y={0}
      width={32}
      height={32}
      rx={5}
      fill="#FFC453"
    />
    <g>
      <path
        d="M23.8 14.36l-1.22-3.65A2.13 2.13 0 0 0 20.05 8.89h-8.1a2.13 2.13 0 0 0-2.13 1.82l-1.22 3.65A2.02 2.02 0 0 0 7.11 16v4.44c0 .67.38 1.25.93 1.55a.22.22 0 0 0-.04.17V24c0 .49.4.89.89.89h.89c.49 0 .89-.4.89-.89v-1.78h10.67V24c0 .49.4.89.89.89h.89c.49 0 .89-.4.89-.89v-1.83a.22.22 0 0 0-.04-.17c.55-.3.93-.88.93-1.55V16c0-.74-.45-1.37-1.09-1.64ZM8.89 20.44V16h14.22v4.44H8.89Zm3.06-8.89h8.1c.38 0 .72.24.83.61l.98 2.95H10.12l.98-2.95a.89.89 0 0 1 .85-.61Z"
        fill="#fff"
      />
      <circle
        cx={11.11}
        cy={18.22}
        r={1.11}
        fill="#fff"
      />
      <circle
        cx={20.89}
        cy={18.22}
        r={1.11}
        fill="#fff"
      />
    </g>
  </svg>
);
