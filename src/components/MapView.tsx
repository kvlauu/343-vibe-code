import mapImage from "@/assets/fake-map.svg";

interface MapViewProps {
  className?: string;
}

export function MapView({ className = "" }: MapViewProps) {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      <img
        src={mapImage}
        alt="Map placeholder"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}
