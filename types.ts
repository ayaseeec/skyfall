
export interface Spirit {
  name: string;
  memory: string;
}

export interface WorldRegion {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  color: string;
  landmarks: string[];
  spirits: Spirit[];
  guideTip: string;
}

export interface SpiritMessage {
  role: 'user' | 'spirit';
  text: string;
}
