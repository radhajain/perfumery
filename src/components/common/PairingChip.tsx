import React from 'react';
import { ScentFamily } from '../../types';
import './PairingChip.css';

interface PairingChipProps {
  name: string;
  family: ScentFamily;
  familyColor: string;
  onClick: () => void;
}

export const PairingChip: React.FC<PairingChipProps> = ({
  name,
  family,
  familyColor,
  onClick,
}) => {
  return (
    <button
      className="pairing-chip"
      onClick={onClick}
      style={{ backgroundColor: familyColor }}
      aria-label={`View ${name} details`}
    >
      <span className="pairing-chip__name">{name}</span>
      <span className="pairing-chip__family">{family}</span>
    </button>
  );
};
