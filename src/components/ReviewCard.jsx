import { star } from "../assets/icons";

/* eslint-disable react/prop-types */
export default function ReviewCard({ customerName, feedback, rating, imageURL }) {
    console.log(imageURL);
    return <div className="flex justify-center items-center flex-col">
        <img src={imageURL} alt={imageURL} className="rounded-full w-[120px] h-[120px] object-cover" />
        <p className="mt-6 max-w-full text-center info-text">{feedback}</p>
        <div className="mt-3 flex justify-center items-center gap-2.5 ">
            <img src={star} alt="star" width={24} height={24} />
            <p className="text-xl font-montserrat text-slate-gray ">{rating}</p>
        </div>
        <h3 className="mt-1 font-palanquin text-center font-bold ">{customerName}</h3>
      
  </div>;
}
