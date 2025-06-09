import React from 'react';

const SearchBox = () => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search skills or courses"
        className="p-3 w-full border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );
};

const SkillCard = ({ skill, description }: { skill: string; description: string }) => {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-md border hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{skill}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-6 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-600">SkillSync</h1>
        <p className="text-lg text-gray-600">Skill Mapping & Learning App</p>
      </header>

      <div className="max-w-2xl mx-auto">
        <SearchBox />
        <div className="grid gap-4">
          <SkillCard skill="React" description="A JavaScript library for building user interfaces." />
          <SkillCard skill="Python" description="Popular language for AI, ML, and web development." />
        </div>
      </div>
    </main>
  );
}
