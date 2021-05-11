import React, { useState } from "react";
import AdminLayout from "../../../components/adminLayout/AdminLayout";
import Pagination from "../../../components/pagination";
import RowTableCategory from "../../../components/RowTableCategory";
import { categories as data } from "../../../data.json";
const CategoryListAdmin = () => {
  const [categories] = useState(data);

  return (
    <AdminLayout>
      <div className="py-10">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">
            Liste des Categories
          </h2>
        </div>
        <div className="my-2 flex sm:flex-row flex-col">
          <div className="block relative">
            <span className="h-full absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                className="h-4 w-4 fill-current text-gray-500"
              >
                <path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
              </svg>
            </span>
            <input
              placeholder="Search"
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none"
            />
          </div>
          <div>
            <input
              placeholder="create"
              className="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none "
            />
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    titre du categorie
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Ajouté
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    modifier
                  </th>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {categories.map((c) => {
                  return (
                    <tr key={c.id}>
                      <RowTableCategory value={c.name} />
                      <RowTableCategory value={c.created_at} />
                      <RowTableCategory value={c.updated_at} />
                      <RowTableCategory value="actions" />
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default CategoryListAdmin;
