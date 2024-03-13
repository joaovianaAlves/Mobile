import React from "react";

export default function About() {
  return (
    <div className="p-6 border-2 border-black m-2 rounded-md ">
      <h2 className="p-2 text-xl font-bold">NexTech Connect:</h2>
      <p className="p-2">
        Welcome to NexTech Connect, your go-to platform for all things
        technology!
      </p>
      <p className="p-2">
        Our mission is to provide cutting-edge services and products that
        empower individuals and businesses to thrive in the digital age.
      </p>
      <h3 className="p-2 text-xl font-bold">Our Values:</h3>
      <ul className="p-2">
        <li className="p-1">
          <strong>Innovation:</strong> We are committed to pushing the
          boundaries of technology and exploring new possibilities.
        </li>
        <li className="p-1">
          <strong>Quality:</strong> We strive for excellence in everything we
          do, delivering top-notch solutions that meet the highest standards.
        </li>
        <li className="p-1">
          <strong>Customer Satisfaction:</strong> Our customers are at the heart
          of everything we do.
        </li>
        <li className="p-1">
          <strong>Integrity:</strong> We conduct business with honesty,
          transparency, and integrity, building trust with our customers and
          partners.
        </li>
      </ul>
      <p className="p-1">
        Thank you for choosing NexTech Connect. Together, let's shape the future
        of technology!
      </p>
    </div>
  );
}
