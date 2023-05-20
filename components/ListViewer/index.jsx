import React from 'react';

const ListViewer = ({ data }) => {
  return (
    <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-3">
      {data.map((post) => (
        <article
          key={post.id}
          className="flex flex-col items-start justify-between max-w-xl"
        >
          <div className="">
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
              {post.title}
            </h3>
            <ul className="mt-5 text-sm leading-6 text-gray-600">
              {post.members.map((member) => (
                <li key={member.id}>{member.name}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ListViewer;
