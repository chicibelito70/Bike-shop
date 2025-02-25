export interface Bike {
  id: string;
  type: 'MTB' | 'RUTA' | 'E_BIKE' | 'GRAVEL';
  name: string;
  price: number;
  image: string;
  description: string;
  specs: {
    frame: string;
    groupset: string;
    wheels: string;
    weight: string;
  };
  available: boolean;
}

export interface Reservation {
  bikeId: string;
  startDate: string;
  endDate: string;
  customerName: string;
  customerEmail: string;
  status: 'pending' | 'confirmed' | 'completed';
}