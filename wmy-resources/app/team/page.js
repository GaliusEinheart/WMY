import Image from "next/image";

const boardOfDirectors = [
  { name: "Walid Bin Jaafar", role: "Managing Director", image: "/team/walid.jpg" },
  { name: "Rasidah Binti Sanusi", role: "Director", image: "/team/rasidah.jpg" },
];

const keyPersonnel = [
  { name: "Shah Iskandar Kamaruddin", role: "Head of Project Development", image: "/team/shah.jpg" },
  { name: "Mahmud Bin Abd Halim", role: "Finance Manager / Marketing", image: "/team/mahmud.jpg" },
  { name: "Mahani Binti Jusoh", role: "Administration / Finance", image: "/team/mahani.jpg" },
  { name: "Mohamad Suhairi Kamaludin", role: "Site Supervisor", image: "/team/suhairi.jpg" },
  { name: "Raja Norhasniza Raja Taiharian", role: "Project Engineer", image: "/team/norhasniza.jpg" },
  { name: "Mohd Alif Bin Mohd Sofian", role: "Business Manager", image: "/team/alif.jpg" },
  { name: "Khairul Anuar Azizul", role: "Wireman PW3", image: "/team/khairul.jpg" },
  { name: "Mohamad Asyraf", role: "Chargeman A4", image: "/team/asyraf.jpg" },
  { name: "Abd Halim Bin Mohd Kauh", role: "Wireman PW4", image: "/team/halim.jpg" },
  { name: "Khairuddin Bin Daud", role: "Wireman", image: "/team/khairuddin.jpg" },
  { name: "Mohd Faizal Bahazin", role: "Wireman PW4", image: "/team/faizal.jpg" },
];

export default function TeamPage() {
  return (
    <div className="pt-24 pb-20 bg-light">
      <div className="bg-primary text-white py-16 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Team</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Meet the dedicated professionals behind WMY Resources.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4">
        {/* Board of Directors */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-dark mb-4">Board of Directors</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {boardOfDirectors.map((person, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row">
                <div className="relative w-full md:w-1/2 h-64">
                  {/* Replace with actual image */}
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <div className="p-8 flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-xl font-bold text-dark">{person.name}</h3>
                  <p className="text-primary font-semibold">{person.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Personnel */}
        <div>
          <h2 className="text-3xl font-bold text-dark mb-4">Key Personnel</h2>
          <div className="w-20 h-1 bg-secondary mb-8"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyPersonnel.map((person, idx) => (
              <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md text-center p-6">
                <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                  {/* Replace with actual image */}
                  <Image src={person.image} alt={person.name} fill className="object-cover" />
                </div>
                <h3 className="font-bold text-dark text-sm">{person.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}