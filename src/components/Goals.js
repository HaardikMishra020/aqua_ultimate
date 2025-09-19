import { cld } from '../utils/cloudinary';
import {AdvancedImage} from '@cloudinary/react';
import { scale } from "@cloudinary/url-gen/actions/resize";

export default function Goals() {
    const goals = [
      {
        title: "Innovation",
        desc: "Continuously improving water solutions with advanced technology.",
        icon: "3d-explore_k1emj2",
        color: "bg-blue-500 text-text",
      },
      {
        title: "Sustainability",
        desc: "Providing eco-friendly and long-lasting products for every home.",
        icon: "3d-safe_x9ygyi",
        color: "bg-blue-500 text-text",
      },
      {
        title: "Customer Care",
        desc: "Ensuring reliable support and satisfaction with every purchase.",
        icon: "3d-customer-service_nilwqf",
        color: "bg-blue-500 text-text",
      },
    ];
    return (
      <section className="py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            Our Goals & Values
          </h2>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {goals.map((goal, index) => {
            const cldGoal=cld.image(`${goal.icon}`).format("auto").quality("auto").resize(scale().width(500))
            return(
            <div
              key={index}
              className={`flex flex-col items-center justify-center text-center px-2 py-3 shadow-lg bg-white text-gray-900
                hover:${goal.color}
                rounded-full h-[50vh]`}
            >
              <div className="text-lg mb-2">
                <AdvancedImage key={cldGoal} cldImg={cldGoal} className="w-full h-40"/>
                </div>
              <h3 className="font-semibold text-lg mb-2">{goal.title}</h3>
              <p className="text-md">{goal.desc}</p>
            </div>
          )})}
        </div>
        </div>
      </section>
    );
  }
  