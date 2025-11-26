export type Platform = 'Uber' | 'Lyft' | 'DoorDash' | 'SkipTheDishes';
export type OfferType = 'rideshare' | 'delivery';
export type SortOption = 'default' | 'highestPay' | 'lowestPay' | 'shortestDistance' | 'longestDistance' | 'fastestTime' | 'longestTime' | 'expiringSoon';

export interface Offer {
  id: string;
  platform: Platform;
  type: OfferType;
  payout: number;
  timeRemaining: number; // in seconds
  estimatedTime: number; // in minutes
  distance: number; // in km
  pickup: string;
  dropoff: string;
  location: {
    lat: number;
    lng: number;
  };
}

export interface FilterState {
  platforms: {
    Uber: boolean;
    Lyft: boolean;
    DoorDash: boolean;
    SkipTheDishes: boolean;
  };
  offerTypes: {
    ride: boolean;
    delivery: boolean;
  };
  radiusFromLocation: number;
  distanceFromTrip: number;
  radiusMin: number;
  radiusMax: number;
  distanceMin: number;
  distanceMax: number;
}
