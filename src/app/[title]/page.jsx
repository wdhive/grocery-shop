import { categories } from "@/lib/data";
import Image from "next/image";
const page = ({ params: { title } }) => {
  const product = categories.find((category) => category.slug == title);
  console.log(product);
  return (
    <main className="relative top-24 p-20">
      <div className=" flex items-center justify-center flex-col">
        <Image
          src={product.photo}
          width={200}
          height={200}
          alt={product.title}
        />
        <h1>{product.title}</h1>
      </div>
    </main>
  );
};

export default page;
