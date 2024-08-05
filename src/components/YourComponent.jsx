// YourComponent.js
import React, { useState } from 'react';
import ModalComponent from './ModalComponent'; // Adjust path as needed

function YourComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <button
        onClick={openModal}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-11 rounded-md px-8 flex-1"
      >
        Make Offer
      </button>

      <ModalComponent isOpen={isModalOpen} onRequestClose={closeModal} />
    </div>
  );
}

export default YourComponent;
