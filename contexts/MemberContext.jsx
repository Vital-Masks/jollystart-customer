import { createContext, useContext, useMemo, useState } from 'react';

const MemberContext = createContext(null);

export const MemberProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  const value = useMemo(() => ({ step, setStep }), [step]);
  return (
    <MemberContext.Provider value={value}>{children}</MemberContext.Provider>
  );
};

export const useMembers = () => {
  return useContext(MemberContext);
};
