import React from "react";

const ExpertVets = () => {

    const expertVets = [
        {
            id: 1,
            name: "Dr. Emily Winters",
            specialization: "Cold Weather Pet Care Specialist",
            experience: "8 years",
            image: "https://i.postimg.cc/exampleVet1.png"
        },
        {
            id: 2,
            name: "Dr. Liam Frost",
            specialization: "Veterinary Surgeon & Winter Injury Expert",
            experience: "10 years",
            image: "https://i.postimg.cc/exampleVet2.png"
        },
        {
            id: 3,
            name: "Dr. Olivia Snow",
            specialization: "Pet Nutritionist (Winter Diet Focus)",
            experience: "6 years",
            image: "https://i.postimg.cc/exampleVet3.png"
        },
        {
            id: 4,
            name: "Dr. Noah Pawsley",
            specialization: "General Vet & Winter Allergy Specialist",
            experience: "7 years",
            image: "https://i.postimg.cc/exampleVet4.png"
        }
    ];

    return (
        <section className="py-12 mb-10 rounded-2xl bg-base-100">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                    Meet Our Expert Vets
                </h2>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {expertVets.map((vet) => (
                        <div
                            key={vet.id}
                            className="bg-base-200 rounded-xl p-5 shadow-md hover:shadow-xl transition"
                        >
                            <img
                                src={vet.image}
                                className="w-full h-44 object-cover rounded-lg mb-4"
                                alt={vet.name}
                            />

                            <h3 className="text-xl font-semibold">{vet.name}</h3>
                            <p className="mt-1 text-sm text-base-content/70">{vet.specialization}</p>

                            <p className="mt-2 text-base font-medium">
                                Experience: <span className="text-primary">{vet.experience}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertVets;
