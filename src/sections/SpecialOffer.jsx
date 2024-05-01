import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";


export default function SpecialOffer() {
  return <section className="flex justify-center items-center flex-wrap max-xl:flex-col-reverse gap-10  ">
    <div className="flex-1 ">
      <img src={offer} alt="" width={773} height={687} className="object-contain w-full" />
    </div>
    <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          We Provide you <span className="text-coral-red">Special</span>{" "}
          Offer
        </h2>
        <p className=" my-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our Dedication to details and excellence ensures your satisfaction
        </p>
        <div className="mt-10  flex-wrap flex gap-7">
          <Button label="Shop Now " iconURL={arrowRight}/>
          <Button label="Learn More" type = 'secondary'  />
        </div>
      </div>
  </section>;
}
