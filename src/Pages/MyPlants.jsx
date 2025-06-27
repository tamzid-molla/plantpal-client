import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/FirebaseContext";
import { Link } from "react-router";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import Loader from "../Components/Loader";

const MyPlants = () => {
  const [myData, setMyData] = useState([]);
  const { user, dark } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    document.title = "PlantPal || My Plants";
    fetch(`${import.meta.env.VITE_baseURL}/plants/byEmail?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyData(data);
        setLoader(false);
      })
      .catch((error) => {
        console.error("Error fetching plants:", error);
        setLoader(false);
      });
  }, [user]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to delete this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(`${import.meta.env.VITE_baseURL}/plants/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount) {
                const filter = myData.filter(
                  (singleData) => singleData._id !== id
                );
                setMyData(filter);
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success",
                });
              }
            })
            .catch((err) => {
              Swal.fire({
                icon: "error",
                title: "Oops...",
                text: err.message,
                footer: "Try again",
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="pt-8">
      {loader ? (
        <Loader></Loader>
      ) : (
        <div
          className={`container min-h-[calc(100vh-440px)] mx-auto p-4 sm:p-6 ${
            dark ? "bg-gray-800" : "bg-teal-50"
          } my-16 rounded-xl`}
        >
          <h1
            className={`text-4xl font-extrabold text-center mb-8 ${
              dark ? "text-teal-300" : "text-teal-600"
            }`}
          >
            My Plants
          </h1>
          {myData.length === 0 ? (
            <div className="text-center">
              <p className="text-lg text-gray-500 mb-6">
                No plants found. Add some to get started!
              </p>
              <div className="flex justify-center">
                <Link
                  to="/addPlants"
                  className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition duration-200"
                >
                  Add Plant
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {myData.map((plant) => (
                <div
                  key={plant._id}
                  className={`${
                    dark ? "bg-gray-700 border border-teal-600" : "bg-white border border-teal-200"
                  } rounded-xl shadow-md transform transition-all hover:shadow-lg`}
                >
                  <div className="relative w-full h-48 sm:h-64">
                    <img
                      src={plant.url}
                      alt={plant.plantName}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-teal-900/40 to-transparent"></div>
                  </div>
                  <div className="p-4 sm:p-6 flex flex-col justify-end">
                    <div>
                      <h2
                        className={`text-xl sm:text-2xl font-semibold ${
                          dark ? "text-teal-200" : "text-teal-600"
                        } mb-3`}
                      >
                        {plant.plantName}
                      </h2>
                      <div className="space-y-2 text-sm sm:text-base">
                        <p
                          className={`${
                            dark ? "text-teal-300" : "text-gray-600"
                          }`}
                        >
                          <span className="font-medium">Category:</span>{" "}
                          {plant.category}
                        </p>
                        <p
                          className={`${
                            dark ? "text-teal-300" : "text-gray-600"
                          }`}
                        >
                          <span className="font-medium">Care Level:</span>{" "}
                          {plant.careLevel}
                        </p>
                        <p
                          className={`${
                            dark ? "text-teal-300" : "text-gray-600"
                          }`}
                        >
                          <span className="font-medium">Next Watering:</span>{" "}
                          {formatDate(plant.nextWateringDate)}
                        </p>
                        <p
                          className={`${
                            dark ? "text-teal-300" : "text-gray-600"
                          }`}
                        >
                          <span className="font-medium">Health:</span>{" "}
                          {plant.healthStatus}
                        </p>
                        <p
                          className={`${
                            dark ? "text-teal-400" : "text-gray-500"
                          } text-xs sm:text-sm`}
                        >
                          <span className="font-medium">Added:</span>{" "}
                          {formatDate(plant.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end space-x-3 mt-4">
                      <Link to={`/update/${plant._id}`}>
                        <button
                          className="flex items-center bg-teal-500 text-white px-3 py-2 rounded-lg hover:bg-teal-600 transition duration-200 text-sm"
                        >
                          <FaEdit className="mr-1" /> Update
                        </button>
                      </Link>
                      <button
                        onClick={() => handleDelete(plant._id)}
                        className="flex items-center bg-red-500 text-white px-3 py-2 rounded-lg hover:bg-red-600 transition duration-200 text-sm"
                      >
                        <FaTrash className="mr-1" /> Delete
                        </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyPlants;