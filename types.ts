
export interface Location {
  lat: number;
  lng: number;
}

export interface Driver {
  id: number;
  name: string;
  rating: number;
  eta: number; // in minutes
  location: Location;
  vehicle: string;
}

export interface Transaction {
  id: string;
  driverName: string;
  date: string;
  amount: number;
  commission: number;
}

export enum ViewMode {
    USER = 'USER',
    DRIVER = 'DRIVER',
    OWNER = 'OWNER'
}

export enum GeminiModel {
  FLASH_LITE = 'gemini-2.5-flash-lite',
  FLASH = 'gemini-2.5-flash',
  PRO = 'gemini-2.5-pro',
}

export enum ChatRole {
    USER = 'user',
    MODEL = 'model',
    SYSTEM = 'system'
}

export interface ChatMessage {
    role: ChatRole;
    text: string;
    sources?: GroundingChunk[];
}

export interface WebGrounding {
    uri: string;
    title: string;
}

export interface MapsGrounding {
    uri: string;
    title: string;
}

export interface GroundingChunk {
    web?: WebGrounding;
    maps?: MapsGrounding;
}
