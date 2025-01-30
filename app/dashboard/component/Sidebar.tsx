"use client";

import Link from "next/link";
import { useState } from "react";
import { PiDotsThreeVertical } from "react-icons/pi";
import { fetchAllRecords } from "../../utility/adminApi.ts";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [model, setModel] = useState<string>("");
  interface DataItem {
    id: string;
    [key: string]: string | number | boolean | null;
  }

  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const models = [
    "admin",
    "user",
    "order",
    "category",
    "subcategory",
    "tour",
    "hotel",
    "product",
  ];

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleFetchRecords = async (modelItem: string) => {
    setLoading(true);
    try {
      const response = await fetchAllRecords(modelItem);
      if (Array.isArray(response)) {
        setData(response);
      } else if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      } else {
        throw new Error("Unexpected response format");
      }
    } catch (error) {
      toast.error(error instanceof Error ? error.message : String(error));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-16">
      <ToastContainer />
      <div className="flex items-start gap-20">
        {/* Sidebar Model Selector */}
        <div className="mb-4 border border-blue-300 w-96 p-4 h-[calc(100vh-16rem)]">
          {models.map((modelItem) => (
            <ul key={modelItem}>
              <div
                onClick={async () => {
                  try {
                    setModel(modelItem);
                    setData([]);
                    setActiveLink(modelItem);
                    await handleFetchRecords(modelItem);
                  } catch (error) {
                    console.error(
                      error instanceof Error ? error.message : String(error)
                    );
                  }
                }}
                className="flex flex-row"
              >
                <li
                  className={`flex flex-row mb-8 w-full cursor-pointer rounded-md p-2 
                ${
                  activeLink === modelItem
                    ? "bg-blue-300 text-blue-900" // Active styles
                    : "hover:bg-blue-100 hover:text-blue-700"
                }
                focus:outline-none`}
                >
                  {modelItem.charAt(0).toUpperCase() + modelItem.slice(1)}
                </li>
              </div>
            </ul>
          ))}
        </div>

        {/* Records Display */}
        <div className=" h-auto w-full px-12 py-4">
          <div className="w-full  py-4 flex justify-between">
            <h1 className="text-2xl font-bold mb-4">{model}</h1>
            <Link href={`../dashboard/${model}/create`}>
              <h2 className="text-lg font-semibold">Create New {model}</h2>
            </Link>
          </div>
          <div className="">
            {loading ? (
              <p>Loading...</p>
            ) : data.length === 0 ? (
              <p>No data available for {model}.</p>
            ) : (
              <table className="w-full border-t border-b border-collapse  ">
                <thead>
                  <tr>
                    {Object.keys(data[0]).map((key) => (
                      <th key={key} className=" px-2 py-4 text-left">
                        {key}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      {/* Row Data */}
                      {Object.values(item).map((value, i) => (
                        <td
                          key={i}
                          className={`border-t border-b px-2 py-4 ${
                            Object.keys(data[0])[i] === "password"
                              ? "w-32 truncate"
                              : ""
                          }`} // Apply specific width for the password column
                          style={
                            Object.keys(data[0])[i] === "password"
                              ? { maxWidth: "250px" }
                              : undefined
                          } // Inline style as fallback
                          title={
                            Object.keys(data[0])[i] === "password"
                              ? String(value)
                              : undefined
                          } // Tooltip for truncated values
                        >
                          {value as string | number | boolean | null}
                        </td>
                      ))}
                      {/* Dropdown Actions */}

                      <td className="border-t border-b  border-gray-300 px-2 py-4 relative">
                        <button
                          className="text-white rounded-md"
                          onClick={() => handleDropdownToggle(index)}
                        >
                          <PiDotsThreeVertical />
                        </button>
                        {activeDropdown === index && (
                          <div className="absolute left-0 mt-2 bg-white shadow-lg rounded-md z-10">
                            <ul className="text-black">
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link
                                  href={`dashboard/admin/${item.id}?mode=edit`}
                                >
                                  Edit
                                </Link>
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link href={`../dashboard/${model}/${item.id}`}>
                                  Show
                                </Link>
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <Link
                                  href={`dashboard/admin/${item.id}?mode=delete`}
                                >
                                  Delete
                                </Link>
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
