"use client";
import CardComponents from "@/components/CartComponents";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    id : 1,
    name : "Book",
    price : 100,
    quantity : 1.5, 
    image : "https://i.pinimg.com/564x/2c/d1/7a/2cd17a3db4212d40711fa02465fad587.jpg",
    description:"this is the description",
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CardComponents
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      qunatity={product.quantity}
      image={product.image}
     />
    </main>
  )
}
