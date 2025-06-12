import './App.css';
import PropertyCard from './components/PropertyCard';
import house from './assets/house.jpg';
import kitchen from './assets/kitchen.jpg';
import tub from './assets/tub.jpg';
import yard from './assets/yard.jpg';

function App() {
  const properties = [
    {
      id: 1,
      address: "123 Main St",
      rentAmount: "$1,200/month",
      centralAir: "Yes",
      yearBuilt: 1998,
      status: "Rented",
      inspectionDate: "2025-07-15",
      comments: "Tenant is great – no issues.",
      rooms: 3,
      squareFootage: 1500,
      homeValue: "$250,000",
      garage: "Yes",
      images: [house, kitchen, tub, yard]
    },
    {
      id: 2,
      address: "456 Oak Ave",
      rentAmount: "$950/month",
      centralAir: "No",
      yearBuilt: 1975,
      status: "Vacant",
      inspectionDate: "2025-06-30",
      comments: "Needs plumbing work.",
      rooms: 2,
      squareFootage: 1100,
      homeValue: "$185,000",
      garage: "No",
      images: [house, kitchen, tub, yard]
    }
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-black-700">Property Management App</h1>
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default App;