import { useState } from 'react';
import { LOCAL_STORAGE_KEYS } from '../constants';

export function useMobilePopup(): [boolean, () => void] {
  const [showPopup, setShowPopup] = useState(() => {
    const dismissed = localStorage.getItem(LOCAL_STORAGE_KEYS.MOBILE_POPUP_DISMISSED);
    const isMobile = window.innerWidth < 768;
    return isMobile && !dismissed;
  });

  const dismissPopup = () => {
    setShowPopup(false);
    localStorage.setItem(LOCAL_STORAGE_KEYS.MOBILE_POPUP_DISMISSED, 'true');
  };

  return [showPopup, dismissPopup];
}
