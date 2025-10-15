import { APP_CONFIG } from '../constants';

export const updatePageTitle = (championName?: string, patch?: string): void => {
  if (championName && patch) {
    document.title = `${championName} ARAM Balance - ${APP_CONFIG.TITLE} | Patch ${patch}`;
  } else {
    document.title = `${APP_CONFIG.TITLE} - ${APP_CONFIG.DESCRIPTION}`;
  }
};
