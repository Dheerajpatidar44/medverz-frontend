'use client';

import React from 'react';

interface LeadPopupButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  popupType?: 'lead' | 'work-abroad';
}

export default function LeadPopupButton({ children, className, popupType = 'lead', ...props }: LeadPopupButtonProps) {
  const handleClick = () => {
    const eventName = popupType === 'work-abroad' ? 'open-work-abroad-popup' : 'open-lead-popup';
    window.dispatchEvent(new CustomEvent(eventName));
  };

  return (
    <button onClick={handleClick} className={className} {...props}>
      {children}
    </button>
  );
}
