"use client";
import CardComponents from "@/components/CartComponents";
import { useState } from "react";

export default function Home() {
  const [product, setProduct] = useState({
    id : 1,
    name : "Product 1",
    price : 100,
    quantity : 1, 
    image : "https://i.pinimg.com/236x/14/c4/ed/14c4edea989244069c30fdfce5b5b317.jpg",
    description:"this is the description",
  });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CardComponents
      key={product.id}
      id={product.id}
      name={product.name}
      price={product.price}
      image={product.image}
     />
    </main>
  )
}
