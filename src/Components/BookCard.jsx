import React from 'react';

const BookCard = ({ book }) => (
  <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow">
    <div className="relative">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover"
      />
      {book.bestseller && (
        <div className="absolute top-4 left-4 bg-red-600 text-white px-2 py-1 rounded text-sm">
          Bestseller
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="font-semibold text-lg mb-2 group-hover:text-yellow-600 transition-colors">
        {book.title}
      </h3>
      <p className="text-gray-600 mb-4">{book.price}</p>
      <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
        Buy Now
      </button>
    </div>
  </div>
);

export default BookCard;