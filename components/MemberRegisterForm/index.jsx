import React, { useState } from 'react';
import PersonalDetail from './PersonalDetail';
import SchoolDetail from './SchoolDetail';
import PaymentDetail from './PaymentDetail';
import { useMembers } from '@/contexts/MemberContext';

const MemberRegisterForm = () => {
  const { step } = useMembers();

  if (step === 1) {
    return <PersonalDetail />;
  } else if (step === 2) {
    return <SchoolDetail />;
  } else if (step === 3) {
    return <PaymentDetail />;
  }
};

export default MemberRegisterForm;
