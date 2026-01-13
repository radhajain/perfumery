import React from 'react';
import './PairingChip.css';

interface PairingChipProps {
  id: number;
  name: string;
  family: string;
  color: string;
  onClick: (id: number) => void;
}

export const PairingChip: React.FC<PairingChipProps> = ({
  id,
  name,
  family,
  color,
  onClick
}) => {
  return (
    <button
      className="pairing-chip"
      onClick={() => onClick(id)}
      style={{ borderColor: color }}
    >
      <span className="pairing-chip__dot" style={{ backgroundColor: color }} />
      <span className="pairing-chip__name">{name}</span>
    </button>
  );
};
