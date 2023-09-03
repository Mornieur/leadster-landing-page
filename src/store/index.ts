import { VideoCategory } from '@/pages/videoCategoryTypes';
import { create } from 'zustand';

export const orderByValues = ['Mais Recente', 'Mais Antigo'];

export const categories: VideoCategory[] = [
  'Marketing Digital',
  'Tecnologia',
  'Mídia Paga',
];

interface VideoStoreProps {
  category: 'Marketing Digital' | 'Tecnologia' | 'Mídia Paga' | null;
  orderBy: 'Mais Recente' | 'Mais Antigo';
  handleStoreValues: HandleStoreValue;
}

type HandleStoreValue = (
  type: keyof VideoStoreProps,
  value: string | null
) => void;

export const useVideoStore = create<VideoStoreProps>((set) => ({
  category: null,
  orderBy: 'Mais Recente',
  handleStoreValues: (type, value) => set(() => ({ [type]: value })),
}));
