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
    <div className="p-6 mb-8 max-w-5xl mx-auto text-black">
      <div className="mb-6">
        <img
          src={editedProperty.images?.[0]}
          alt="Main view"
          className="w-full h-[320px] object-cover rounded-xl"
        />
      </div>

      <div className="flex gap-4 mb-6 flex-col md:flex-row">
        <img
          src={editedProperty.images?.[1]}
          alt="Interior"
          className="w-full md:w-1/2 h-[340px] object-cover rounded-xl"
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2">
          <img
            src={editedProperty.images?.[2]}
            alt="Tub"
            className="w-full h-[165px] object-cover rounded-xl"
          />
          <img
            src={editedProperty.images?.[3]}
            alt="Yard"
            className="w-full h-[165px] object-cover rounded-xl"
          />
          <img
            src={editedProperty.images?.[2]}
            alt="Tub again"
            className="w-full h-[165px] object-cover rounded-xl"
          />
          <img
            src={editedProperty.images?.[3]}
            alt="Yard again"
            className="w-full h-[165px] object-cover rounded-xl"
          />
        </div>
      </div>

      <h2 className="text-2xl font-semibold mb-4">
        {isEditing ? (
          <input
            type="text"
            name="address"
            value={editedProperty.address}
            onChange={handleChange}
            className="border border-gray-400 rounded-md px-3 py-2 w-full"
          />
        ) : (
          editedProperty.address
        )}
      </h2>

      {[
        "price",
        "centralAir",
        "yearBuilt",
        "status",
        "monthlyCharge",
        "propertyTax",
        "inspectionDate",
        "comments"
      ].map((field) => (
        <div key={field} className="mb-4">
          <label className="block font-medium mb-1">
            {field
              .replace(/([A-Z])/g, " $1")
              .replace(/^./, (str) => str.toUpperCase())}
          </label>
          {isEditing ? (
            <input
              type="text"
              name={field}
              value={editedProperty[field] || ""}
              onChange={handleChange}
              className="border border-gray-400 rounded-md px-3 py-2 w-full"
            />
          ) : (
            <p className="text-gray-800">{editedProperty[field]}</p>
          )}
        </div>
      ))}

      <div className="text-sm text-gray-600 mt-2">
        {editedProperty.inspectionDate && (
          <p>
            📅 You can export this inspection date to your iPhone calendar by
            generating an <code>.ics</code> file.
          </p>
        )}
      </div>

      <button
        onClick={handleToggleEdit}
        className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
}

export default PropertyCard;
