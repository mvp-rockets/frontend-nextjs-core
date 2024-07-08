import React from 'react';

interface TooltipProps {
  position?: 'top' | 'right' | 'bottom' | 'left';
  tooltipArrowPosition?: 'top' | 'right' | 'bottom' | 'left';
  content: React.ReactNode;
  children: React.ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({
  position = 'top',
  tooltipArrowPosition = 'top',
  content,
  children,
}) => {
  const arrowPosition = {
    left: 'right-full translate-x-1/2 top-1/2 -translate-y-1/2',
    top: 'bottom-full translate-y-1/2 left-1/2 -translate-x-1/2',
    right: 'left-full -translate-x-1/2 top-1/2 -translate-y-1/2',
    bottom: 'top-full -translate-y-1/2 left-1/2 -translate-x-1/2',
  };

  const tooltipPosition = {
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
    left: 'right-full translate-x-1/2 top-1/2 -translate-y-1/2',
    top: 'bottom-full translate-y-1/2 left-1/2 -translate-x-1/2 mb-6',
  };

  return (
    <div className='relative inline-block'>
      {children}
      <div className={`bg-neutral-800 rounded py-1.5 px-4 text-center text-basic-white text-sm whitespace-nowrap z-10 absolute transform ${tooltipPosition[position]} ${tooltipArrowPosition !== 'top' && 'flex'}`}>
        {content}
        <div className={`w-3 h-3 bg-neutral-800 transform rotate-45 absolute ${arrowPosition[tooltipArrowPosition]}`} />
      </div>
    </div>
  );
};

export default Tooltip;