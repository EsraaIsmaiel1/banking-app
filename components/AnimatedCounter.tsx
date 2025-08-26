import React from 'react';
import CountUp from 'react-countup';

const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <div className="w-full">
      <CountUp decimals={2} decimal="," end={amount} prefix="$" />
    </div>
  );
};

export default AnimatedCounter;
