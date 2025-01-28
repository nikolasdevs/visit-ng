import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

interface Shopping {
  id: string;
  name: string;
  description: string;
  imageUrls: string[] | null;
  slug: string;
}

export function ShoppingSection({
  title,
  shoppings,
  moreLink,
}: {
  title: string;
  shoppings: Shopping[];
  moreLink: string;
}) {
  return (
    <div className="flex flex-col gap-8 container w-full">
      <div className="text-primary-foreground font-semibold text-2xl bg-primary px-3 pe-6 py-4 flex justify-between items-center">
        <p>{title}</p>
        <Link
          href={moreLink}
          className="inline-flex items-center text-base font-medium text-center text-primary-foreground border-b-2 border-b-transparent hover:border-b-primary-foreground"
        >
          More
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>

      <div className="grid gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 justify-center">
        {shoppings.map((shopping) => (
          <div
            key={shopping.id}
            className="max-w-sm overflow-hidden dark:bg-gray-800 dark:border-gray-700"
          >
            <Link href={`shopping/${title.toLowerCase()}/${shopping.slug}`}>
              <motion.div
                initial={false}
                whileHover={{ scale: 1.1 }}
                className="relative w-full h-48"
                transition={{ duration: 0.3 }}
              >
                {shopping.imageUrls?.length ? (
                  <Image
                    src={shopping.imageUrls[0]}
                    alt={shopping.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-300 text-gray-700">
                    No Image Available
                  </div>
                )}
              </motion.div>
            </Link>
            {/* <div className="mt-4 flex flex-col justify-between">
              <h3 className="mb-2 text-2xl font-bold tracking-tight text-neutral-700 dark:text-white">
                {shopping.name}
              </h3>
              <p className="mb-3 font-normal text-neutral-500 dark:text-gray-400">
                {  shopping.description}
              </p>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
}
