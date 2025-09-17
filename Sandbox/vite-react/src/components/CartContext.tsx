import React, { useState, createContext, useContext } from "react";
interface CartItem {
  id: number;
  name: string;
  quantity?: number;
  price?: number;
}
interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem, quantity: number) => void;
}
const CartContext = createContext<CartContextType | undefined>(undefined);
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const addToCart = (item: CartItem, quantity: number) => {
    setItems((prevItems) => {
      const ifExist = prevItems?.find((i) => i.id === item.id);
      if (ifExist) {
        return prevItems?.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity! + 1 } : i
        );
      } else {
        return [...prevItems, { ...item, quantity }];
      }
    });
    console.log("cart", item);
  };
  console.log("items", items);

  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("use cart must be used within a cart provider");
  return context;
};
