import { useContext } from "react";
import { FaLeaf } from "react-icons/fa";
import { AuthContext } from "../Context/FirebaseContext";


const plants = [
  {
    name: "Snake Plant",
    image:
      "https://i.ibb.co/RTS94Krc/snake.jpg",
    description: "Thrives in low light and requires minimal watering.",
    tip: "Water every 2‑3 weeks, allowing soil to dry out completely.",
  },
  {
    name: "Pothos",
    image:
      "https://i.ibb.co/4nyxGDJ3/pothos.jpg",
    description: "Fast‑growing vine, perfect for low‑maintenance care.",
    tip: "Water when leaves droop slightly, about every 1‑2 weeks.",
  },
  {
    name: "Jade Plant",
    image:
      "https://i.ibb.co/Q7Fd11VH/jade.jpg",
    description: "A succulent that stores water in its thick leaves.",
    tip: "Place in bright light and water sparingly every 2 weeks.",
  },
  {
    name: "Spider Plant",
    image: "https://i.ibb.co/35DzS1gF/spider.jpg",
    description: "Produces baby plantlets, easy to propagate.",
    tip: "Keep in indirect light and water weekly.",
  },
  {
    name: "Peace Lily",
    image: "https://i.ibb.co/Gv86k42f/peace.jpg",
    description: "Loves shade and signals when it needs water.",
    tip: "Water when leaves droop, about once a week.",
  },
  {
    name: "Aloe Vera",
    image: "https://i.ibb.co/wZ4FD668/aloe.jpg",
    description: "A hardy succulent with medicinal properties.",
    tip: "Water every 2‑3 weeks in bright, indirect light.",
  },
];

const BeginnerFriendlyPlants = () => {
   const { dark } = useContext(AuthContext);
  return (
    <div className="my-28 py-12 w-11/12 mx-auto rounded-2xl shadow-sm">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-teal-600 mb-12">
          Beginner‑Friendly Plants
        </h2>

        {/* Card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {plants.map((plant, idx) => (
            <div
              key={idx}
              className={`${
                  dark ? "bg-gray-600" : "bg-white"
                }  flip-card h-80 overflow-hidden rounded-xl shadow-lg`}
            >
              <div className="flip-card-inner h-full">
                {/* Front Face */}
                <div className="flip-card-front w-full h-full relative">
                  {/* Skeleton placeholder */}
                  <div className="absolute inset-0 animate-pulse bg-green-200" />

                  {/* Actual image */}
                  <img
                    src={plant.image}
                    alt={plant.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Text overlay */}
                  <div className="relative z-10 bg-black/50 h-full flex flex-col justify-end p-4">
                    <h3 className="text-xl font-semibold text-white">
                      {plant.name}
                    </h3>
                    <FaLeaf className="text-teal-600 text-2xl mt-2" />
                  </div>
                </div>

                {/* Back Face */}
                <div className="flip-card-back w-full h-full flex flex-col justify-center items-center text-center p-4 space-y-2">
                  <FaLeaf className="text-teal-600 text-3xl" />
                  <h3 className="text-lg font-semibold text-teal-600">
                    {plant.name}
                  </h3>
                  <p className=" text-sm">{plant.description}</p>
                  <p className="text-sm font-medium">
                    <span className="font-bold">Tip:</span> {plant.tip}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Flip‑card CSS (scoped) */}
      <style>{`
        .flip-card {
          perspective: 1000px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background-color: #4A5565;
        }
      `}</style>
    </div>
  );
};

export default BeginnerFriendlyPlants;
