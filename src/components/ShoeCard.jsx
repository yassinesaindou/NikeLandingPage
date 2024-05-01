/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
export default function ShoeCard({ imgURL, setBigShoeImg, bigShoeImg }) {
  function handleClick() {
    if (bigShoeImg !== imgURL.bigShoe) {
      setBigShoeImg(imgURL.bigShoe);
    }
  }
  return (
    <div
      className={`border-2 rounded-xl ${
        bigShoeImg == imgURL.bigShoe
          ? " border-coral-red"
          : " border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}>
      <div className="flex justify-center items-center bg-card bg-center sm:h-40 bg-cover sm:w-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt={bigShoeImg}
          width={127}
          height={103}
          className="object-contain "
        />
      </div>
    </div>
  );
}
