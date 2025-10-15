export const DDRAGON_VERSION = '15.20.1';
export const DDRAGON_CHAMPION_IMAGE_URL = `https://ddragon.leagueoflegends.com/cdn/${DDRAGON_VERSION}/img/champion`;
export const FALLBACK_CHAMPION = 'Aatrox';

export const LOCAL_STORAGE_KEYS = {
  THEME: 'isDarkMode',
  MOBILE_POPUP_DISMISSED: 'mobilePopupDismissed',
} as const;

export const APP_CONFIG = {
  TITLE: 'Am I Nerfed?',
  DESCRIPTION: 'League of Legends ARAM Balance Changes Tracker',
  COPYRIGHT: '2025 AM I NERFED?',
} as const;
