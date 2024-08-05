// BuyNowPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import event2 from "./images/Event-2.jpg";
import { Button } from "../components/ui/button";
import MenuIcon from "../components/MenuIcon";
import MountainIcon from "../components/Mountainicon";
import { TicketIcon } from "./Icons";
import ModalComponent from './ModalComponent'; // Adjust path as needed

const transactionHistory = [
  { date: 'October 01, 2024', amount: '1,500 BBN', type: 'Purchase' },
  { date: 'September 25, 2024', amount: '1,000 BBN', type: 'Refund' },
  { date: 'September 10, 2024', amount: '1,500 BBN', type: 'Purchase' },
  { date: 'August 15, 2024', amount: '2,000 BBN', type: 'Purchase' },
];

const BuyNowPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      {/* Header */}
      <header className="bg-white flex items-center justify-between px-4 py-3 md:px-6 md:py-4">
        <div className="flex items-center">
          <TicketIcon className="mr-2" />
          <h1 className="text-lg font-bold">TICKET'D</h1>
          <div>
            <input
              type="text"
              className="border-gray-200 border md:w-auto md:pr-auto rounded-lg px-1 mx-1 md:px-5 md:mx-5 focus:outline-none"
              placeholder="Search for events"
            />
          </div>
        </div>

        <nav className="hidden sm:flex items-center space-x-6">
          <Link to="/features" className="text-sm font-medium hover:underline">Features</Link>
          <Link to="/community" className="text-sm font-medium hover:underline">Community</Link>
          <Link to="#" className="text-sm font-medium hover:underline">Contact</Link>
        </nav>
        <Button variant="outline" size="sm" className="sm:hidden">
          <MenuIcon className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="grid gap-6">
            <div className="bg-muted rounded-lg overflow-hidden">
              <img
                src={event2}
                width="600"
                height="400"
                style={{ aspectRatio: '600 / 400', objectFit: 'cover' }}
                alt="Diwali Concert"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="grid gap-4">
              <h1 className="text-3xl font-bold">Diwali Celebration Concert</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M8 2v4"></path>
                    <path d="M16 2v4"></path>
                    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                    <path d="M3 10h18"></path>
                  </svg>
                  <span>November 01, 2024</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>7:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>Taj Palace, New Delhi</span>
                </div>
              </div>
              <div className="prose max-w-none">
                <p>
                  Join us for a mesmerizing Diwali celebration concert featuring renowned Indian artists and musicians.
                  Experience the vibrant sights, sounds, and flavors of the festival of lights in this unforgettable
                  event.
                </p>
                <p>
                  Immerse yourself in the rich cultural heritage of India as you enjoy a captivating performance of
                  traditional and contemporary music, dance, and more. Don't miss this opportunity to celebrate Diwali in
                  style!
                </p>
              </div>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Ticket Details</h3>
              </div>
              <div className="p-6 grid gap-4">
                <div className="flex items-center justify-between">
                  <div className="text-muted-foreground">Ticket Price</div>
                  <div className="text-2xl font-bold">1,500 BBN</div>
                </div>
                <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] w-full"></div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <div className="text-muted-foreground">Price History</div>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                      View
                    </button>
                  </div>
                  <div className="grid gap-1 text-sm">
                    <div className="text-muted-foreground">Last Price Change: 5% Off</div>
                  </div>
                </div>
                <button
                  onClick={openModal}
                  className="inline-flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  Make Offer
                </button>
              </div>
            </div>

            {/* Transaction History */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">Transaction History</h3>
              </div>
              <div className="p-6">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {transactionHistory.map((transaction, index) => (
                      <tr key={index}>
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{transaction.date}</td>
                        <td className="py-4 px-6 text-sm text-gray-500">{transaction.amount}</td>
                        <td className="py-4 px-6 text-sm text-gray-500">{transaction.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
};

export default BuyNowPage;
