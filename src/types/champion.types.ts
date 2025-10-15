export interface Champion {
  name: string;
  damageDealt: string;
  damageTaken: string;
  passiveOther: string;
}

export interface ChampionData {
  patch: string;
  champions: Champion[];
}
