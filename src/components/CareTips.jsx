import React from "react";

const WinterTips = () => {
    const winterTips = [
        {
            id: 1,
            title: "Keep Paws Moisturized",
            desc: "Cold weather can cause dry and cracked paw pads. Use pet-safe balm regularly.",
            icon: "🐾"
        },
        {
            id: 2,
            title: "Limit Outdoor Time",
            desc: "Pets can get frostbite quickly. Keep outdoor walks short during extreme cold.",
            icon: "❄️"
        },
        {
            id: 3,
            title: "Provide Warm Bedding",
            desc: "Give your pet a heated bed or thick blankets to stay warm indoors.",
            icon: "🛏️"
        },
        {
            id: 4,
            title: "Check for Ice Balls",
            desc: "Snow often clumps between toes. Remove them to avoid discomfort and injury.",
            icon: "⚠️"
        },
        {
            id: 5,
            title: "Keep Them Hydrated",
            desc: "Pets drink less in winter. Ensure fresh water is always available.",
            icon: "💧"
        }
    ];
    return (
        <section className="py-12 bg-base-200">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-6 text-center text-primary">
                    Winter Care Tips for Pets
                </h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {winterTips.map((tip) => (
                        <div
                            key={tip.id}
                            className="p-6 bg-base-100 rounded-xl shadow-md border border-base-300 hover:shadow-lg transition"
                        >
                            <div className="text-4xl mb-3">{tip.icon}</div>
                            <h3 className="text-xl font-semibold mb-1">{tip.title}</h3>
                            <p className="text-base-content/70">{tip.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WinterTips;
