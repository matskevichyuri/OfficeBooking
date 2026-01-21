export type TableStatus = 'free' | 'booked';

export interface Table {
  id: number;
  row: number;
  col: number;
  status: TableStatus;
  bookedBy?: string;
}

export interface Room {
  id: number;
  name: string;
  tables: Table[];
  door_positions: string[];
  window_positions: string[];
}
