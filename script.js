const bannerOptions = [
  {
    title: "Single Outfield Banner",
    price: "$1,000",
    description: "Custom full-color banner with annual commitment. Placement in a single outfield location.",
    badge: null
  },
  {
    title: "Full Pod Package",
    price: "$3,200",
    description: "A banner in every field within a pod. Includes a 20% discount — effectively $800 per banner.",
    badge: "Best Value"
  },
  {
    title: "High Traffic Area",
    price: "$1,500",
    description: "Choose from: Main walkway to Pod 1, Main walkway to Pod 2, or Main walkway from batting cage to fields.",
    badge: "High Visibility"
  },
  {
    title: "Premium Parking Lot Placement",
    price: "$2,000",
    description: "Premium fence placement along the parking lot — visible to everyone entering through the main gate.",
    badge: "Premium"
  }
];

const container = document.getElementById("options");

bannerOptions.forEach(option => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    ${option.badge ? `<span class="badge">${option.badge}</span>` : ""}
    <h2>${option.title}</h2>
    <p class="price">${option.price} <span>/ year</span></p>
    <p>${option.description}</p>
  `;

  container.appendChild(card);
});