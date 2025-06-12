import { useState } from "react";

function PropertyCard({ property }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedProperty, setEditedProperty] = useState(property);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProperty((prev) => ({ ...prev, [name]: value }));
  };

  const handleToggleEdit = () => {
    setIsEditing((prev) => !prev);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-6 max-w-2xl mx-auto">
      {/* Single Test Image */}
      <div className="mb-4">
        <img
          src={editedProperty.images[0]}
          alt="Main view"
          className="w-full h-[320px] object-cover rounded-lg border-4 border-blue-500"
        />
      </div>

      {/* Address */}
      <h2 className="text-xl text-black-700 font-semibold mb-3">
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={editedProperty.address}
            onChange={handleChange}
            className="border rounded-md px-2 py-1 w-full"
          />
        ) : (
          editedProperty.address
        )}
      </h2>

      {/* Property Details */}
      {[
        "rentAmount",
        "centralAir",
        "yearBuilt",
        "status",
        "inspectionDate",
        "comments",
        "rooms",
        "squareFootage",
        "homeValue",
        "garage"
      ].map((field) => (
        <p key={field} className="text-black-700 mb-2">
          <strong>{field.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name={field}
              value={editedProperty[field]}
              onChange={handleChange}
              className="border rounded-md px-2 py-1 w-full mt-1"
            />
          ) : (
            editedProperty[field]
          )}
        </p>
      ))}

      {/* Edit/Save Button */}
      <button
        onClick={handleToggleEdit}
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {isEditing ? "Save" : "Edit"}
      </button>

    </div>
  );
}

export default PropertyCard;