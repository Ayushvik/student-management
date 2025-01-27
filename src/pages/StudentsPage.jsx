import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';

function StudentsPage() {
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState({
    id: '',
    name: '',
    class: '',
    section: '',
    rollNumber: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, 'students'), student);
      setShowModal(false);
      alert('Student added successfully!');
    } catch (error) {
      alert('Error adding student: ' + error.message);
    }
  };

  return (
    <div>
      <h2>Students List</h2>
      <button onClick={() => setShowModal(true)}>Add Student</button>
      {showModal && (
        <div className="modal">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="ID"
              onChange={(e) => setStudent({ ...student, id: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Name"
              onChange={(e) => setStudent({ ...student, name: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Class"
              onChange={(e) => setStudent({ ...student, class: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Section"
              onChange={(e) => setStudent({ ...student, section: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Roll Number"
              onChange={(e) => setStudent({ ...student, rollNumber: e.target.value })}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default StudentsPage;
