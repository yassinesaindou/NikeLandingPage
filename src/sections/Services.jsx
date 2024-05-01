import ServiceCard from "../components/ServiceCard";
import { services } from "../constants";
export default function Services() {
  return <section className="max-container flex justify-center flex-wrap gap-9">

    {services.map((service, i) => (<ServiceCard key={i} imgURL={service.imgURL} label={service.label} subtext={service.subtext} />))
    }

  </section>;
}
