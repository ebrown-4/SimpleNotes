import {
    collection,
    addDoc,
    getDocs,
    getDoc,
    doc,
    updateDoc,
    deleteDoc,
    query,
    where
} from "firebase/firestore";

import { db } from "./firebase";

// CREATE NOTE
export async function addNote(note) {
    const docRef = await addDoc(collection(db, "notes"), note);
    return docRef.id;
}

// READ ALL NOTES FOR USER
export async function getNotes(userId) {
    const q = query(collection(db, "notes"), where("userId", "==", userId));
    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
}

// READ SINGLE NOTE BY ID
export async function getNoteById(id) {
    const docRef = doc(db, "notes", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
    } else {
        return null;
    }
}

// UPDATE NOTE
export async function updateNote(id, updatedFields) {
    const docRef = doc(db, "notes", id);
    await updateDoc(docRef, updatedFields);
}

// DELETE NOTE
export async function deleteNote(id) {
    const docRef = doc(db, "notes", id);
    await deleteDoc(docRef);
}
