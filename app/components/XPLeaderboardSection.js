'use client'
export default function XPLeaderboardSection() {
  const topStudents = [
    { name: 'Akash', xp: 1200 },
    { name: 'Riya', xp: 1100 },
    { name: 'Rahul', xp: 980 },
  ]

  return (
    <section className="py-10 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">🏆 XP Leaderboard</h2>
      <div className="max-w-xl mx-auto">
        {topStudents.map((student, index) => (
          <div key={index} className="bg-blue-50 p-4 my-2 rounded shadow">
            <p className="text-lg font-semibold">{student.name}</p>
            <p className="text-sm text-gray-600">{student.xp} XP</p>
          </div>
        ))}
      </div>
    </section>
  )
}