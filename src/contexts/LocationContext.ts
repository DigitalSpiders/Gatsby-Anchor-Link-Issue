import React from 'react';

export const LocationContext = React.createContext<{ pathname: string } | null>(null);
