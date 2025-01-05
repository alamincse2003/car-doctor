
import ServiceCard from "./ServiceCard";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const services = useServices();
  // const [services, setServices] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/services")
  //     .then((response) => response.json())
  //     .then((data) => setServices(data));
  // }, []);

  return (
    <div className="mt-5">
      <div className="text-center space-y-3">
        <h3 className="text-3xl font-bold text-orange-500">Service</h3>
        <h4 className="text-5xl text-black">Our Service Area</h4>
        <p className="text-gray-400">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
