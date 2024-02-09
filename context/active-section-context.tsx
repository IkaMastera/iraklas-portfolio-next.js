import React, { useState, createContext } from 'react'
import { links } from '@/library/data';

type SectionName = typeof links[number]["name"];

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

const ActiveSectionContext = createContext(null);

export default function ActiveSectionContextProvider({ children, }: ActiveSectionContextProviderProps ) {
  const [activeSection, setActiveSection] = useState<SectionName>('Home');

  return <ActiveSectionContext.Provider value = {{ activeSection, setActiveSection }}>{ children }</ActiveSectionContext.Provider>;
}
