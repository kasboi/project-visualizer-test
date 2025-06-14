import React from "react";
import "./ApartmentDetail.css";

interface Apartment {
  id: number;
  type: string;
  area: number;
  rooms: number;
  thumbnail: string;
}

interface ApartmentDetailProps {
  apartment: Apartment;
  towerId: string;
  floorId: number;
  onBack: () => void;
}

const ApartmentDetail: React.FC<ApartmentDetailProps> = ({
  apartment,
  towerId,
  floorId,
  onBack,
}) => (
  <div className="apartment-detail">
    <div className="detail-header">
      <button className="back-button" onClick={onBack}>
        ← Back to Apartments
      </button>
      <h2>
        Tower {towerId} - Floor {floorId} - {apartment.type}
      </h2>
    </div>

    <div className="detail-content">
      <div className="detail-image">
        <img src={apartment.thumbnail} alt={`${apartment.type} layout`} />
      </div>

      <div className="detail-info">
        <div className="info-section">
          <h3>Apartment Details</h3>
          <div className="info-grid">
            <div className="info-item">
              <label>Type:</label>
              <span>{apartment.type}</span>
            </div>
            <div className="info-item">
              <label>Area:</label>
              <span>{apartment.area} sq ft</span>
            </div>
            <div className="info-item">
              <label>Rooms:</label>
              <span>
                {apartment.rooms} {apartment.rooms === 1 ? "Room" : "Rooms"}
              </span>
            </div>
            <div className="info-item">
              <label>Location:</label>
              <span>
                Tower {towerId}, Floor {floorId}
              </span>
            </div>
          </div>
        </div>

        <div className="info-section">
          <h3>Features</h3>
          <ul className="features-list">
            <li>Modern kitchen with appliances</li>
            <li>Spacious living area</li>
            <li>Premium flooring</li>
            <li>Natural lighting</li>
            <li>Balcony with city view</li>
            <li>24/7 security</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default ApartmentDetail;
