import React from 'react';
import Modal from 'react-modal';
import SignInForm from './logs/SignInForm'; // Import your SignInForm component

// Styles for the modal (you can customize this)
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

function CourseModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            style={modalStyles} // Apply the modal styles
            contentLabel="Course Modal" // Provide a content label for accessibility
        >
            {/* Modal Content */}
            <h2>Course Details</h2>
            <p>This is a sample modal content.</p>

            {/* Include your SignInForm component here */}
            <SignInForm />

            {/* Close button */}
            <button onClick={onRequestClose}>Close Modal</button>
        </Modal>
    );
}

export default CourseModal;
