import React, { createContext, useContext, useState } from 'react';

export interface GlobalState {
  utmSource: string | null;
  setUtmSource: (utmSource: string | null) => void;
  utmMedium: string | null;
  setUtmMedium: (utmMedium: string | null) => void;
  utmCampaign: string | null;
  setUtmCampaign: (utmCampaign: string | null) => void;
  utmTerm: string | null;
  setUtmTerm: (utmTerm: string | null) => void;
  utmContent: string | null;
  setUtmContent: (utmContent: string | null) => void;
  utmDevice: string | null;
  setUtmDevice: (utmDevice: string | null) => void;
  utmTarget: string | null;
  setUtmTarget: (utmTarget: string | null) => void;
  websiteReferrer: string | null;
  setWebsiteReferrer: (utmWebsiteReferrer: string | null) => void;
}

// We assume this GlobalStateContext will never be used unless inside
// the GlobalStateContext.Provider, and so the default is never used.
export const GlobalStateContext = createContext<GlobalState>({} as GlobalState);

export const useGlobalState = () => useContext(GlobalStateContext);

interface StateProviderProps {
  children: React.ReactNode;
}

export function GlobalStateProvider({ children }: StateProviderProps) {
  const [utmSource, setUtmSource] = useState<string | null>(null);
  const [utmMedium, setUtmMedium] = useState<string | null>(null);
  const [utmCampaign, setUtmCampaign] = useState<string | null>(null);
  const [utmTerm, setUtmTerm] = useState<string | null>(null);
  const [utmContent, setUtmContent] = useState<string | null>(null);
  const [utmDevice, setUtmDevice] = useState<string | null>(null);
  const [utmTarget, setUtmTarget] = useState<string | null>(null);
  const [websiteReferrer, setWebsiteReferrer] = useState<string | null>(null);

  const globalState: GlobalState = {
    utmSource,
    setUtmSource,
    utmMedium,
    setUtmMedium,
    utmCampaign,
    setUtmCampaign,
    utmTerm,
    setUtmTerm,
    utmContent,
    setUtmContent,
    utmDevice,
    setUtmDevice,
    utmTarget,
    setUtmTarget,
    websiteReferrer,
    setWebsiteReferrer,
  };

  return <GlobalStateContext.Provider value={globalState}>{children}</GlobalStateContext.Provider>;
}
