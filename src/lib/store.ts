import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { User, Course } from '@/types';

interface AuthState {
  user: User | null;
  setUser: (user: User | null) => void;
  isAuthenticated: boolean;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  setUser: (user) => set({ user, isAuthenticated: !!user }),
}));

interface CartState {
  items: Course[];
  addItem: (course: Course) => void;
  removeItem: (courseId: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      addItem: (course) => {
        const items = get().items;
        if (items.some((item) => item.id === course.id)) return;
        const newItems = [...items, course];
        set({
          items: newItems,
          totalItems: newItems.length,
          totalPrice: newItems.reduce((acc, item) => acc + item.price, 0),
        });
      },
      removeItem: (courseId) => {
        const items = get().items;
        const newItems = items.filter((item) => item.id !== courseId);
        set({
          items: newItems,
          totalItems: newItems.length,
          totalPrice: newItems.reduce((acc, item) => acc + item.price, 0),
        });
      },
      clearCart: () => set({ items: [], totalItems: 0, totalPrice: 0 }),
    }),
    {
      name: 'cart-storage',
    }
  )
);
