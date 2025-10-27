"use client";

import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import { Product } from '@/data/products';

// CartItem Interface 
export interface CartItem {
  id: string; 
  productId: string; 
  name: string; 
  price: number;
  quantity: number;
  image: string;
  variantId?: string; 
  variantName?: string;
}


interface ICartContext {
  cartItems: CartItem[];
  addToCart: (itemToAdd: Product & { variantId?: string; variantName?: string }, quantity: number) => void; 
  removeFromCart: (cartItemId: string) => void; 
  updateQuantity: (cartItemId: string, newQuantity: number) => void; 
  getCartTotal: () => number;
  clearCart: () => void;
}

const CartContext = createContext<ICartContext | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // addToCart Logic
  const addToCart = useCallback((itemToAdd: Product & { variantId?: string; variantName?: string }, quantity: number) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === itemToAdd.id);

      if (existingItem) {
        return prevItems.map((item) =>
          item.id === itemToAdd.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [
          ...prevItems,
          {
            id: itemToAdd.id, 
            productId: itemToAdd.variants ? itemToAdd.id.split('-')[0] : itemToAdd.id, 
            // Include variant name in the cart item name if applicable
            name: itemToAdd.variantName ? `${itemToAdd.name} (${itemToAdd.variantName})` : itemToAdd.name,
            price: itemToAdd.price,
            quantity: quantity,
            image: itemToAdd.image,
            variantId: itemToAdd.variantId, 
            variantName: itemToAdd.variantName, 
          },
        ];
      }
    });
  }, []);
  

  const removeFromCart = useCallback((cartItemId: string) => { 
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== cartItemId) 
    );
  }, []);

  const updateQuantity = useCallback((cartItemId: string, newQuantity: number) => { 
    if (newQuantity < 1) {
      removeFromCart(cartItemId); 
    } else {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item 
        )
      );
    }
  }, [removeFromCart]);
  

  const getCartTotal = useCallback(() => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  }, [cartItems]);

  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        getCartTotal,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};