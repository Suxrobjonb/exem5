import React from "react";

export default function Logo() {
  return (
    <>
      <svg
        width={115}
        height={35}
        viewBox="0 0 115 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          width={114}
          height={34}
          transform="translate(0.753052 0.827271)"
          fill="url(#pattern0)"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width={1}
            height={1}
          >
            <use
              xlinkHref="#image0_1_633"
              transform="scale(0.00877193 0.0294118)"
            />
          </pattern>
          <image
            id="image0_1_633"
            width={114}
            height={34}
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </>
  );
}
