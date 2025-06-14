import React from "react";
import "./TowerSelector.css";

const towers = [
  { id: "A", name: "Tower A" },
  { id: "B", name: "Tower B" },
  { id: "C", name: "Tower C" },
];

interface TowerSelectorProps {
  onSelect: (towerId: string) => void;
}

const TowerSelector: React.FC<TowerSelectorProps> = ({ onSelect }) => (
  <div className="tower-selector">
    <h2>Select a Tower</h2>
    <div className="tower-list">
      {towers.map((tower) => (
        <div
          key={tower.id}
          className="tower-card"
          onClick={() => onSelect(tower.id)}
        >
          {tower.name}
        </div>
      ))}
    </div>
  </div>
);

export default TowerSelector;
