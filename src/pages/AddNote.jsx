// CREATE NOTE
export async function addNote(note) {
    const docRef = await addDoc(collection(db, "notes"), note);
    return docRef.id;
}
