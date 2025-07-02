import Image from "next/image";

export default function Teams() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Our Team
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {/* Team Member 1 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
            <Image
              src="/myImg.jpeg"
              width={500}
              height={500}
              alt="vikash"
              className="w-full h-full rounded-full"
            />
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Vikash Bharal</h2>
          <p className="text-gray-600">Full Stack Developer</p>
        </div>

        {/* Team Member 2 */}
        <div className="bg-white rounded-xl shadow-md  flex flex-col items-center hover:shadow-lg transition">
          <div className="w-full h-full relative bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
            <Image src="/myImg.jpeg" fill={true} />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
            IMG
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Aqsa Halim</h2>
          <p className="text-gray-600">Project Mentor</p>
        </div>

        {/* Team Member 4 */}
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition">
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center text-white text-xl font-bold">
            IMG
          </div>
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-gray-600">Backend Engineer</p>
        </div>
      </div>
    </div>
  );
}
