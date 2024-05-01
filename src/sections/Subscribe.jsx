import Button from "../components/Button";


export default function Subscribe() {
  return <section className="max-container flex justify-between items-center max-lg:flex-col gap-10 font-semibold" id="contact-us">
    <h3 className="text-4xl leading-[64px] lg:max-w-md ">Sign Up for <span className="text-coral-red">Updates</span> & Newsletter</h3>
    <div className="flex border-2 rounded-full items-center py-0.5 border-red-300 overflow-hidden md:w-[50%]  w-[95%] ">
      <input type="text" placeholder="Subscribe@nike.com" className="input flex-grow border-0" />
      <div className=" mr-1">
      <Button label='Sign Up'/>
      </div>
    </div>

  </section>;
}
