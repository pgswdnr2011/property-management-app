import PropertyCard from "./components/PropertyCard";

const properties = [
  {
    address: "123 Main St",
    price: "$1,200",
    status: "Rented",
    yearBuilt: "1998",
    monthlyCharge: "$1,200",
    propertyTax: "$2,000",
    centralAir: "Yes",
    inspectionDate: "2025-07-15",
    comments: "Tenant is great – no issues.",
    images: [
      "/images/house.jpg",
      "/images/kitchen.jpg",
      "/images/tub.jpg",
      "/images/yard.jpg"
    ]
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <PropertyCard property={properties[0]} />
    </div>
  );
}

export default App;
