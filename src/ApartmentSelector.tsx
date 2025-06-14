import React, { useState } from "react";
import "./ApartmentSelector.css";
import thumbnail from "./assets/apartment-small.jpg";

interface Apartment {
  id: number;
  type: string;
  area: number;
  rooms: number;
  thumbnail: string;
}

const apartments: Apartment[] = [
  {
    id: 1,
    type: "1BHK",
    area: 650,
    rooms: 1,
    thumbnail: thumbnail,
  },
  {
    id: 2,
    type: "2BHK",
    area: 950,
    rooms: 2,
    thumbnail: thumbnail,
  },
  {
    id: 3,
    type: "2BHK Premium",
    area: 1100,
    rooms: 2,
    thumbnail: thumbnail,
  },
  {
    id: 4,
    type: "3BHK",
    area: 1350,
    rooms: 3,
    thumbnail: thumbnail,
  },
];

interface ApartmentSelectorProps {
  towerId: string;
  floorId: number;
  onSelect: (apartment: Apartment) => void;
  onBack: () => void;
}

const ApartmentSelector: React.FC<ApartmentSelectorProps> = ({
  towerId,
  floorId,
  onSelect,
  onBack,
}) => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleApartmentClick = async (apartment: Apartment) => {
    setIsLoading(true);
    // Simulate a small loading delay for better UX
    setTimeout(() => {
      setIsLoading(false);
      onSelect(apartment);
    }, 200);
  };

  return (
    <div
      className={`apartment-selector ${hoveredId ? "dimmed" : ""} ${
        isLoading ? "loading" : ""
      }`}
    >
      <div className="apartment-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Floors
        </button>
        <h2>
          Tower {towerId} - Floor {floorId}
        </h2>
      </div>
      <div className="apartment-list">
        {apartments.map((apartment) => (
          <div
            key={apartment.id}
            className={`apartment-card ${
              hoveredId === apartment.id ? "hovered" : ""
            }`}
            onClick={() => handleApartmentClick(apartment)}
            onMouseEnter={() => setHoveredId(apartment.id)}
            onMouseLeave={() => setHoveredId(null)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleApartmentClick(apartment);
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Select ${apartment.type} apartment with ${apartment.area} sq ft`}
          >
            <div className="apartment-thumbnail">
              <img src={apartment.thumbnail} alt={`${apartment.type} layout`} />
            </div>
            <div className="apartment-info">
              <h3>{apartment.type}</h3>
              <p className="apartment-area">{apartment.area} sq ft</p>
              <p className="apartment-rooms">
                {apartment.rooms} {apartment.rooms === 1 ? "Room" : "Rooms"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApartmentSelector;
