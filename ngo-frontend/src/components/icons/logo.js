import React from 'react';

const Logo = ({ isWhite, ...props }) => {
  return (
    <svg viewBox="0 0 185.92 36.62" width={185.92} height={36.62} {...props}>
      <defs>
        <linearGradient
          id="prefix__b"
          x1={16.08}
          y1={-16.52}
          x2={10.26}
          y2={20.44}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#0096d9" />
          <stop offset={1} stopColor="#00c198" />
        </linearGradient>
        <linearGradient
          id="prefix__c"
          x1={8.95}
          y1={13.48}
          x2={18.28}
          y2={32.02}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#002dd9" />
          <stop offset={1} stopColor="#00b2ab" />
        </linearGradient>
        <linearGradient
          id="prefix__a"
          x1={23.33}
          y1={-3.39}
          x2={5.66}
          y2={37.65}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#3482c0" />
          <stop offset={0.45} stopColor="#96bede" />
          <stop offset={0.83} stopColor="#e1edf6" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="prefix__d"
          x1={21.64}
          y1={1.42}
          x2={6.63}
          y2={30.44}
          xlinkHref="#prefix__a"
        />
        <linearGradient
          id="prefix__e"
          x1={25.15}
          y1={3.24}
          x2={10.14}
          y2={32.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#569fa1" />
          <stop offset={0.36} stopColor="#97c4c5" />
          <stop offset={0.8} stopColor="#e2eeef" />
          <stop offset={1} stopColor="#fff" />
        </linearGradient>
        <radialGradient
          id="prefix__f"
          cx={21.16}
          cy={32.05}
          r={27.25}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#ff0" />
          <stop offset={1} />
        </radialGradient>
      </defs>
      <g data-name="Layer 2">
        <g data-name="Layer 1">
     
          <path
            d="M19.8.53A15.73 15.73 0 004.65 26.89L22.17 9.37A5.29 5.29 0 0019.8.53z"
            fill="url(#prefix__b)"
          />
          <path
            d="M6.65 36.09A15.73 15.73 0 0021.81 9.73L4.29 27.25a5.28 5.28 0 002.36 8.84z"
            fill="url(#prefix__c)"
          />
          <path
            d="M21.81 9.73L4.29 27.25a5.28 5.28 0 002.36 8.84 15.72 15.72 0 005.75.44c-7.68-7.39 9.41-26.8 9.41-26.8z"
            style={{
              mixBlendMode: 'multiply',
            }}
            fill="url(#prefix__a)"
          />
          <g
            style={{
              mixBlendMode: 'multiply',
            }}
          >
            <path
              d="M6.33 36c-2.49-7.7 12.45-23.21 15.09-25.87L4.29 27.25A5.28 5.28 0 006.33 36z"
              fill="url(#prefix__d)"
            />
            <path d="M21.75 9.79l.06-.06z" fill="url(#prefix__e)" />
          </g>
          <path
            d="M23.45 7.29L4.64 26.88 22.17 9.37a5.14 5.14 0 001.28-2.08z"
            style={{
              mixBlendMode: 'screen',
            }}
            fill="url(#prefix__f)"
          />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
