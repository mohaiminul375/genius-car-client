import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mb-8">
        <p className="text-2xl font-bold text-orange-600">Our Services</p>
        <h2 class="text-5xl font-semibold">Our service area</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
          adipisci consequatur ut soluta, quaerat laboriosam esse repellendus
          dolores asperiores magnam, alias ipsum.
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        
        {services.map(service => <ServiceCard 
        key={service._id}
        service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Services;
