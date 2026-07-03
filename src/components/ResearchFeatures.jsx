import {
  BookOpen,
  Search,
  Lightbulb,
  Megaphone,
  Scale,
  Sprout,
  Globe,
  Landmark,
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Authentic Knowledge",
    icon: BookOpen,
  },
  {
    id: 2,
    title: "Scholarly Research",
    icon: Search,
  },
  {
    id: 3,
    title: "Insightful Perspectives",
    icon: Lightbulb,
  },
  {
    id: 4,
    title: "Responsible Awareness",
    icon: Megaphone,
  },
  {
    id: 5,
    title: "Reliable Fatwas",
    icon: Scale,
  },
  {
    id: 6,
    title: "Sustainable Development",
    icon: Sprout,
  },
  {
    id: 7,
    title: "Global Engagement",
    icon: Globe,
  },
  {
    id: 8,
    title: "Institutional Excellence",
    icon: Landmark,
  },
];

export default function ResearchFeatures() {
  return (
    <section className="bg-[#f5f0e9] py-20">
      <div className="max-w-7xl mx-auto px-5">

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="relative bg-white rounded-3xl border border-[#d8c6a5] p-8 shadow-sm hover:shadow-xl transition duration-300 group overflow-hidden"
              >
                {/* Number */}
                <div className="absolute left-5 top-5 w-8 h-8 rounded-full bg-[#b88a2b] text-white flex items-center justify-center text-sm font-bold">
                  {item.id}
                </div>

                {/* Icon */}
                <div className="flex justify-center mt-8 mb-6">
                  <div className="w-20 h-20 rounded-full bg-[#faf4e9] flex items-center justify-center group-hover:scale-110 transition">
                    <Icon
                      size={52}
                      strokeWidth={1.6}
                      className="text-[#b88a2b]"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-center text-2xl font-semibold text-[#132238] leading-snug">
                  {item.title}
                </h3>

                {/* Decorative Line */}
                <div className="flex justify-center mt-7">
                  <div className="relative w-24 h-px bg-[#d5b26c]">
                    <span className="absolute left-1/2 -translate-x-1/2 -top-[7px] text-[#b88a2b]">
                      ✦
                    </span>
                  </div>
                </div>

                {/* Hover Border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#b88a2b] transition duration-300"></div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}