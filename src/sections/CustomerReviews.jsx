import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

export default function CustomerReviews() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customer</span> Say
      </h3>
      <p className="info-text m-auto max-w-lg text-center ">
        Hear what our customers have to say about us. These are genuine stories
      </p>
      <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
        {reviews.map(rev => (
          <ReviewCard
            key={rev.customerName}
            customerName={rev.customerName}
            feedback={rev.feedback}
            imageURL={rev.imgURL}
            rating={rev.rating}
          />
        ))}
      </div>
    </section>
  );
}
