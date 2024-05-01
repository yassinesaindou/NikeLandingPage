import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return <footer className="max-container ">
    <div className="flex  justify-between items-start gap-20 flex-wrap max-sm:flex-col ">
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="" width={150} height={46}/>
        </a>
        <p className="text-slate-300 mt-6 leading-8 font-montserrat sm:max-w-sm ">Get shoes ready for the new term at your nearest Nike store. Find Your perfect size in store. Get reward</p>
        <div className="flex justify-center items-center  gap-5">{
          socialMedia.map(icon => (
            <div key={icon.alt} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
              <img src={icon.src} alt={icon.alt}  width={24} height={24}/>
          </div>
        ))}

        </div>
      </div>
      <div className="flex flex-1 max-sm:flex-col justify-between lg:gap-10 gap-20">
        {
          footerLinks.map(section => (
            <div key={section}>
              <h4 className="text-white font-montserrat">{section.title}</h4>
              <ul>{
                section.links.map(link => (
                  <li key={link.name}>
                    <a href={link.link} className="text-slate-400 font-montserrat ">{ link.name}</a>
                  </li>
              ))}</ul>
            </div>
          ))
        }
      </div>
    </div>
    <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
      <div className="flex flex-1 justify-start items-center font-montserrat cursor-pointer">
        <img src={copyrightSign} alt="copy" width={20} height={20} className="rounded-full" />
        <p>All Rights Reserved.</p>
      </div>
      <p className="font-montserrat cursor-pointer">Terms and Conditions</p>
    </div>
  </footer>;
}
