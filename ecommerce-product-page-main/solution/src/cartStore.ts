import { atom, map } from 'nanostores';

export type CartItem = {
    id: string;
    name: string;
    imageSrc: string;
    quantity: number;
    price: number;
    totalPrice: number;
}
export type CartQuantityItem = number;

export const cartItems = map<Record<string, CartItem>>({});
export let cartQuantity = atom<CartQuantityItem>(0);

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc' | 'quantity' | 'price' | 'totalPrice'>;
export function addCartItem({ id, name, imageSrc, quantity, price, totalPrice }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + quantity,
      totalPrice: existingEntry.totalPrice + (existingEntry.price * quantity),
    });
    cartQuantity.set(cartQuantity.get() + quantity)
  } else {
    cartItems.setKey(
      id,
      { id, name, imageSrc, quantity: quantity, price: price, totalPrice: (price * quantity) }
    );
    cartQuantity.set(cartQuantity.get() + quantity)
  }
}
export function deleteCartItem({ id } : ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartQuantity.set(cartQuantity.get() - existingEntry.quantity)
    cartItems.set({})
  }
}