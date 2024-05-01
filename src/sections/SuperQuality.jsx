
import { shoe8 } from "../assets/images";
import Button from "../components/Button";

export default function SuperQuality() {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl capitalize font-bold">
          We Provide you <span className="text-coral-red">Super Quality</span>{" "}
          Shoes
        </h2>
        <p className=" my-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our Dedication to details and excellence ensures your satisfaction
        </p>
        <div>
          <Button label="view details" />
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center ">
        <img src={shoe8} alt="" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
}
