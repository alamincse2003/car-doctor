import React from "react";

const BookingRaw = ({ booking, handleDelete, handleBookingConfirm }) => {
  const { _id, status, customerName, date, price, service, img } = booking;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-circle btn-sm btn-outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </div>
      </td>
      <td>{customerName}</td>
      <td>{service}</td>
      <td>{price}</td>
      <td>{date}</td>
      <th>
        {status === "confirm" ? (
          <span className="text-primary font-bold">Confirmed</span>
        ) : (
          <button onClick={() => handleBookingConfirm(_id)}>Confirm</button>
        )}
      </th>
    </tr>
  );
};

export default BookingRaw;
