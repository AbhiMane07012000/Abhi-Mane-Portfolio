import React from 'react';

const CourseDetails = ({ courseName, collegeName, year, details }) => {
  return (
    <div className="shadow-lg shadow-slate-600 max-w-lg mx-auto bg-white rounded-xl overflow-hidden md:max-w-2xl lg:max-w-4xl">
      <div className="px-4 py-5 sm:px-6">
        <h1 className="text-lg font-bold text-gray-900">{courseName}</h1>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">{collegeName} | {year}</p>
      </div>
      <div className="border-t border-gray-200 overflow-y-auto max-h-72">
        <div className="scrollbar-thumb-gray-500 scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          <dl className="md:px-4">
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 text-wrap">
              <dt className="text-sm font-medium text-gray-500">Details</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2">{details}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
