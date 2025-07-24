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
    <div className="p-6 mb-8 max-w-6xl mx-auto text-black text-left">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left Column – Image Gallery */}
        <div className="flex flex-col gap-4 md:w-1/2">
          <img
            src={editedProperty.images?.[0]}
            alt="Main view"
            className="w-full h-[300px] object-cover rounded-xl"
          />
          <div className="grid grid-cols-2 gap-4">
            <img
              src={editedProperty.images?.[1]}
              alt="Image 1"
              className="h-[120px] object-cover rounded-xl w-full"
            />
            <img
              src={editedProperty.images?.[2]}
              alt="Image 2"
              className="h-[120px] object-cover rounded-xl w-full"
            />
            <img
              src={editedProperty.images?.[3]}
              alt="Image 3"
              className="h-[120px] object-cover rounded-xl w-full"
            />
            <img
              src={editedProperty.images?.[3]}
              alt="Image 4"
              className="h-[120px] object-cover rounded-xl w-full"
            />
          </div>
        </div>

        {/* Right Column – Property Info */}
        <div className="flex-1 text-left">
          <h2 className="text-2xl font-semibold mb-6">
            {isEditing ? (
              <input
                type="text"
                name="address"
                value={editedProperty.address}
                onChange={handleChange}
                className="bg-blue-50 border border-blue-400 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            ) : (
              <p className="bg-white border border-gray-200 rounded-xl px-4 py-2 w-full text-gray-900">
                {editedProperty.address}
              </p>
            )}
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {[
              "price",
              "status",
              "yearBuilt",
              "monthlyCharge",
              "propertyTax",
              "centralAir",
              "inspectionDate",
              "comments"
            ].map((field) => (
              <div key={field}>
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
                    className="bg-blue-50 border border-blue-400 rounded-xl px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                ) : (
                  <p className="bg-white border border-gray-200 rounded-xl px-4 py-2 w-full text-gray-800">
                    {editedProperty[field] || "-"}
                  </p>
                )}
              </div>
            ))}
          </div>

          {editedProperty.inspectionDate && (
            <div className="text-sm text-gray-600 mt-4">
              📅 You can export this inspection date to your iPhone calendar by
              generating an <code>.ics</code> file.
            </div>
          )}

          {isEditing && (
            <p className="text-sm text-blue-500 mt-4 mb-2">Editing…</p>
          )}

          <button
            onClick={handleToggleEdit}
            className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PropertyCard;
