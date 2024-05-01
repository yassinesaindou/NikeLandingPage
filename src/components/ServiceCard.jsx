/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
export default function ServiceCard({ imgURL, label, subtext }) {
  return <div className=" flex-1 sm:w=[350px] w-full rounded-[20px] shadow-3xl px-10 py-16 ">
    <div className=" flex w-11 h-11 justify-center items-center bg-coral-red rounded-full">
      <img src={imgURL} alt={label} width={24} height={24}/>
    </div>
    <h3 className="mt-5 font-palanquin text-3xl leading-normal font-bold">{label}</h3>
    <p className=" break-words mt-3 font-montserrat text-lg text-slate-gray">{subtext}</p>
  </div>;
}
