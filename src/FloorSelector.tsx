import React from "react";
import "./FloorSelector.css";

const floors = Array.from({ length: 15 }, (_, i) => ({
  id: i + 1,
  name: `Floor ${i + 1}`,
}));

interface FloorSelectorProps {
  towerId: string;
  onSelect: (floorId: number) => void;
  onBack: () => void;
}

const FloorSelector: React.FC<FloorSelectorProps> = ({
  towerId,
  onSelect,
  onBack,
}) => (
  <div className="floor-selector">
    <div className="floor-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Towers
      </button>
      <h2>Tower {towerId} - Select Floor</h2>
    </div>
    <div className="floor-list">
      {floors.map((floor) => (
        <div
          key={floor.id}
          className="floor-card"
          onClick={() => onSelect(floor.id)}
        >
          {floor.name}
        </div>
      ))}
    </div>
  </div>
);

export default FloorSelector;
