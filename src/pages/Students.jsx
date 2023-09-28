import React, { useEffect, useState } from 'react';
import {
    getAuth,
    onAuthStateChanged
} from 'firebase/auth';
import {
    getFirestore,
    collection,
    query,
    where,
    getDocs
} from 'firebase/firestore';

const Students = () => {
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState(null);
    const [showUserData, setShowUserData] = useState(true);
    const [showDatabaseOptions, setShowDatabaseOptions] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    const [numberOfVisits, setNumberOfVisits] = useState(0);

    useEffect(() => {
        const auth = getAuth();
        const db = getFirestore();

        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setUser(user);

                // Fetch user data
                const userRef = collection(db, 'users');
                const q = query(userRef, where('email', '==', user.email));
                try {
                    const querySnapshot = await getDocs(q);
                    if (querySnapshot.size > 0) {
                        const userData = querySnapshot.docs[0].data();
                        setUserData(userData);
                    }
                } catch (error) {
                    console.error('Error fetching user data: ', error);
                }

                // Fetch user details from Firestore
                const userDetailsRef = collection(db, 'userDetails');
                const userDetailsQuery = query(userDetailsRef, where('userId', '==', user.uid));
                try {
                    const userDetailsSnapshot = await getDocs(userDetailsQuery);
                    if (!userDetailsSnapshot.empty) {
                        const details = [];
                        userDetailsSnapshot.forEach((doc) => {
                            details.push(doc.data());
                        });
                        setUserDetails(details);
                    }
                } catch (error) {
                    console.error('Error fetching user details: ', error);
                }

                // Fetch the number of visits to diagrams
                const diagramsRef = collection(db, 'diagrams');
                const diagramsQuery = query(diagramsRef, where('userId', '==', user.uid));
                try {
                    const diagramsSnapshot = await getDocs(diagramsQuery);
                    const visits = diagramsSnapshot.size;
                    setNumberOfVisits(visits);
                } catch (error) {
                    console.error('Error fetching diagram visits: ', error);
                }
            } else {
                // User is not logged in, you can redirect them to the login page here
            }
        });

        return () => unsubscribe();
    }, []);

    // Function to format the date of birth
    const formatDOB = (dob) => {
        if (dob && dob.seconds) {
            const date = new Date(dob.seconds * 1000); // Convert seconds to milliseconds
            return date.toDateString(); // Format the date as a string
        }
        return 'N/A';
    };

    return (
        <div className="bg-gray-100 min-h-screen flex">
            {/* Sidebar - User Details */}
            <div className="bg-blue-500 text-white p-4 w-1/4">
                <h2 className="text-2xl font-semibold mb-4">Welcome, {user ? user.email : 'Guest'}!</h2>
                <ul>
                    <li>
                        <button
                            onClick={() => {
                                setShowUserData(true);
                                setShowDatabaseOptions(false);
                            }}
                            className={`${
                                showUserData ? 'bg-white text-blue-500' : ''
                            } block w-full text-left py-2 px-4`}
                        >
                            User Details
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => {
                                setShowUserData(false);
                                setShowDatabaseOptions(true);
                            }}
                            className={`${
                                showDatabaseOptions ? 'bg-white text-blue-500' : ''
                            } block w-full text-left py-2 px-4`}
                        >
                            Database Options
                        </button>
                    </li>
                </ul>
            </div>

            {/* Sidebar - Database Options */}
            <div className={`bg-green-500 text-white p-4 w-1/4 ${showDatabaseOptions ? '' : 'hidden'}`}>
                <h3 className="text-xl font-semibold mb-2">Database Options</h3>

                {/* Button to fetch user data */}
                <button
                    onClick={async () => {
                        const db = getFirestore();
                        const usersRef = collection(db, 'users');
                        const userQuery = query(usersRef, where('email', '==', user.email));

                        try {
                            const userSnapshot = await getDocs(userQuery);
                            if (!userSnapshot.empty) {
                                const userDoc = userSnapshot.docs[0];
                                const userData = userDoc.data();

                                // Display user data from the "users" collection
                                console.log('User Data:', userData);
                            }
                        } catch (error) {
                            console.error('Error fetching user data: ', error);
                        }

                        // Fetch user visits to diagrams
                        const diagramsRef = collection(db, 'diagrams');
                        const diagramsQuery = query(diagramsRef, where('userId', '==', user.uid));

                        try {
                            const diagramsSnapshot = await getDocs(diagramsQuery);
                            const visits = diagramsSnapshot.size;

                            // Display the number of times the user has visited diagrams
                            console.log('Number of Visits to Diagrams:', visits);
                        } catch (error) {
                            console.error('Error fetching diagram visits: ', error);
                        }
                    }}
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-600 cursor-pointer"
                >
                    Fetch User Data and Diagram Visits
                </button>
            </div>

            {/* Content */}
            <div className="flex-1 p-4">
                {showUserData && user ? (
                    <div className="max-w-lg mx-auto bg-white p-4 rounded-lg shadow-lg">
                        <h3 className="text-xl font-semibold mb-2">User Data:</h3>
                        <p>
                            <span className="font-semibold">Username:</span> {userData?.username}
                        </p>
                        <p>
                            <span className="font-semibold">Date of Birth:</span> {formatDOB(userData?.dob)}
                        </p>
                        <p>
                            <span className="font-semibold">Phone Number:</span> {userData?.phoneNumber}
                        </p>
                        <p>
                            <span className="font-semibold">ID Number:</span> {userData?.idNumber}
                        </p>
                    </div>
                ) : (
                    <div>
                        {/* User is not logged in, you can redirect them to the login page here */}
                    </div>
                )}

                {/* Display user details from the database */}
                {userDetails.length > 0 && showUserData && (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">User Details from Database:</h3>
                        <ul>
                            {userDetails.map((detail, index) => (
                                <li key={index}>
                                    {/* Display user details here */}
                                    <p>
                                        <span className="font-semibold">Field:</span> {detail.fieldName}
                                    </p>
                                    <p>
                                        <span className="font-semibold">Value:</span> {detail.fieldValue}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Display the number of times the user has visited diagrams */}
                {showDatabaseOptions && (
                    <div className="mt-4">
                        <h3 className="text-xl font-semibold mb-2">Diagram Visits:</h3>
                        <p>
                            <span className="font-semibold">Number of Visits to Diagrams:</span> {numberOfVisits}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Students;
