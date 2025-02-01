import { CartCounter } from "@/app/shop";


export default function CounterPage() {


  return (
    <div className="flex flex-col items-center justify-center h-full w-full">

      <span>Productos en el carrito</span>

      <CartCounter value={5} />

    </div>
  );
}