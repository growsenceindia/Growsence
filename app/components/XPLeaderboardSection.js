'use client'

export default function XPLeaderboardSection() {
  const topStudents = [
    { name: "Ankit", xp: 9200 },
    { name: "Sneha", xp: 8800 },
    { name: "Rahul", xp: 8600 },
  ]

  return (
    <section className="py-12 bg-white text-center px-4">
      <h2 className="text-2xl font-bold mb-6">🏆 Top XP Leaders</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {topStudents.map((student, index) => (
          <div key={index} className="bg-blue-100 p-6 rounded-xl shadow hover:scale-105 transition">
            <h3 className="text-lg font-semibold">{student.name}</h3>
            <p className="text-sm text-gray-600">{student.xp} XP</p>
          </div>
        ))}
      </div>
    </section>
  )
}