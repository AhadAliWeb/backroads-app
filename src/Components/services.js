import Service from "./Service";
import Title from "./Title";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <div className="section-title">
        <Title first="our" second="services" />
      </div>
      <div className="section-center services-center">
        {services.map((item) => {
          // const { id, className, title, description } = item;
          return <Service key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default Services;
