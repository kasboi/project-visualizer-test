import { useState } from "react";
import TowerSelector from "./TowerSelector";
import FloorSelector from "./FloorSelector";
import ApartmentSelector from "./ApartmentSelector";
import ApartmentDetail from "./ApartmentDetail";
import "./App.css";

type ViewState = "towers" | "floors" | "apartments" | "detail";

interface Apartment {
  id: number;
  type: string;
  area: number;
  rooms: number;
  thumbnail: string;
}

function App() {
  const [currentView, setCurrentView] = useState<ViewState>("towers");
  const [selectedTower, setSelectedTower] = useState<string>("");
  const [selectedFloor, setSelectedFloor] = useState<number>(0);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null,
  );

  const handleTowerSelect = (towerId: string) => {
    setSelectedTower(towerId);
    setCurrentView("floors");
  };

  const handleFloorSelect = (floorId: number) => {
    setSelectedFloor(floorId);
    setCurrentView("apartments");
  };

  const handleApartmentSelect = (apartment: Apartment) => {
    setSelectedApartment(apartment);
    setCurrentView("detail");
  };

  const getBreadcrumbs = () => {
    const breadcrumbs = ["Towers"];
    if (selectedTower) breadcrumbs.push(`Tower ${selectedTower}`);
    if (selectedFloor) breadcrumbs.push(`Floor ${selectedFloor}`);
    if (selectedApartment) breadcrumbs.push(selectedApartment.type);
    return breadcrumbs;
  };

  // Handles the rendering of the current view based on the state
  const renderCurrentView = () => {
    switch (currentView) {
      case "towers":
        return <TowerSelector onSelect={handleTowerSelect} />;
      case "floors":
        return (
          <FloorSelector
            towerId={selectedTower}
            onSelect={handleFloorSelect}
            onBack={() => setCurrentView("towers")}
          />
        );
      case "apartments":
        return (
          <ApartmentSelector
            towerId={selectedTower}
            floorId={selectedFloor}
            onSelect={handleApartmentSelect}
            onBack={() => setCurrentView("floors")}
          />
        );
      case "detail":
        return selectedApartment ? (
          <ApartmentDetail
            apartment={selectedApartment}
            towerId={selectedTower}
            floorId={selectedFloor}
            onBack={() => setCurrentView("apartments")}
          />
        ) : null;
      default:
        return <TowerSelector onSelect={handleTowerSelect} />;
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Real Estate Floor Selector</h1>
        <nav className="breadcrumb">
          {getBreadcrumbs().map((crumb, index, array) => (
            <span key={index} className="breadcrumb-item">
              {crumb}
              {index < array.length - 1 && (
                <span className="breadcrumb-separator"> › </span>
              )}
            </span>
          ))}
        </nav>
      </header>
      <main className="app-main">{renderCurrentView()}</main>
    </div>
  );
}

export default App;
