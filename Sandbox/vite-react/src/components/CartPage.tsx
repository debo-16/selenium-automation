import { useState } from "react";
import { useCart } from "./CartContext";

const CartPage = () => {
  const { items } = useCart();
  // const sum = (items: any) => {
  //   return items.reduce((acc: any, item: any) =>
  //     Number(acc + item.price * item.quantity, 0)
  //   );
  // };
  const [totalAmount, setTotalAmount] = useState(0);
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Your Cart</h1>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id} className="flex justify-between border-b py-2">
              <span>{item.name}</span>
              <span>Quantity: {item.quantity}</span>
              <span>Price: {item.price}</span>
            </li>
            setTotalAmount((totalAmount) => (totalAmount + item.quantity* item.price)))
          ))}
          <li>Total: {totalAmount}</li>
        </ul>
      )}
    </div>
  );
};

export default CartPage;
