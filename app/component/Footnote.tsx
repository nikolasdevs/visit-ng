import { Button } from "@/components/ui/button";

export const Footnote = () => {
  return (
    <div className="md:mt-32 mt-16 text-foreground w-full border-t border-t-foreground pt-16 bg-background ">
      <div className="container flex flex-col gap-32">
        <div className=" flex justify-between relative">
          <div className="w-1/3 flex flex-col gap-3 ">
            {" "}
            <h1 className="text-xl leading-snug font-semibold items-center">
              Stay in touch
            </h1>
            <p className="  leading-snug lg:text-start">
              Subscribe to our newsletter to receive exclusive updates and
              offers in your inbox!
            </p>{" "}
          </div>

          {/* Newsletter */}

          <form className="flex flex-col md:flex-row md:items-center justify-end w-2/4 border focus:outline-none focus:ring-1 focus:ring-accent focus:border-accent border-gray-300 px-8">
            <input
              type="email "
              className=" border-0 px-0"
              placeholder="Your email address"
            />
            <Button className=" bg-accent text-background font-bold ">
              Subscribe
            </Button>
          </form>
        </div>

        {/* footnote */}
        <div className="flex justify-between">
          <div className="flex flex-col gap-4">
            <h3 className="">Help</h3>
            <ul className="text-sm">
              <li>FAQs</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Legal Information</h3>
            <ul className="text-sm">
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3>Tourist Information</h3>
            <div className="flex flex-col gap-2">
              <div>
                <p className="font-bold">Head Office</p>
                <p className="text-sm">Lagos State</p>
                <p className="mt-2 text-sm">
                  Mon – Fri: 8.00am – 6.00pm <br /> Sat: 9.00am – 12.00pm /
                  1.00pm – 4.30pm <br /> Sun: 9.00am – 12.00pm / 1.00pm – 4.00pm
                </p>
              </div>
              <div>
                <p className=" font-bold">Customer Care</p>
                <p className="text-sm">0800 123 4567</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <p className="text-center py-4 text-sm">
            © Copyright {new Date().getFullYear()}, Powered by Hamni Nig Ltd
          </p>
        </div>
      </div>
    </div>
  );
};
