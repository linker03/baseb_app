import React from 'react';

type ProgressProps = {
  progress: number;
};

export const ProgressBar: React.FC<ProgressProps> = ({ progress = 0 }) => {
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 100 1">
      <path
        fillOpacity="0"
        stroke="#eff1f3"
        strokeLinecap="round"
        d="M.5.5h99"
      ></path>
      <path
        fillOpacity="0"
        stroke="#ffd01a"
        strokeDasharray={`${progress}px, 100px`}
        strokeDashoffset="0"
        strokeLinecap="round"
        d="M.5.5h99"
        className="rc-progress-line-path"
        style={{
          WebkitTransitionProperty:
            'stroke-dashoffset, stroke-dasharray, stroke',
          transitionProperty: 'stroke-dashoffset, stroke-dasharray, stroke',
          WebkitTransitionDuration: '0s, 0s',
          transitionDuration: '0s, 0s',
          WebkitTransitionTimingFunction: 'ease, ease, linear',
          transitionTimingFunction: 'ease, ease, linear',
          WebkitTransitionDelay: '0s, 0s, 0s',
          transitionDelay: '0s, 0s, 0s',
        }}
      ></path>
    </svg>
  );
};
