# SimpleNotes  
Final Project – React.js Application  
**Student:** Ericka Brown  
**Course:** Front-End Web Development II (INF655)

---

## Project Description  
SimpleNotes is a clean, minimalistic note‑taking application built with React.js and Firebase.  
The application demonstrates core React concepts including components, routing, state management, forms, dynamic rendering, and user interaction.

Users can:

- Register and log in  
- Add notes  
- Assign categories  
- Edit notes  
- Delete notes  
- Search notes  
- View all notes  
- Manage their profile  

All notes are securely stored in **Firebase Firestore**, and each user only sees their own notes.

---

## Project Features  

### 1. User Authentication (Firebase Auth)
- Register new users  
- Log in existing users  
- Logout  
- Protected routes for Notes, Add Note, Edit Note, and Profile  

### 2. Add Notes  
Users can create new notes with:
- Title  
- Category  
- Content  

Includes validation and error handling.

### 3. Edit Notes  
Users can update existing notes using a dedicated Edit Note page.

### 4. Delete Notes  
Users can remove notes instantly.

### 5. Search Notes  
Real‑time search filters notes by title.

### 6. Firestore Cloud Storage  
Notes persist across sessions and devices.

### 7. Clean UI  
Styled with a consistent black‑and‑gold FHSU‑themed design.

---

## React Concepts Used  

### Components  
The project includes multiple reusable components:

- Navbar  
- Footer  
- NoteCard  
- NoteList  
- SearchBar  
- NoteForm  
- LoginForm  
- RegisterForm  
- ProtectedRoute  
- ProfileCard  

### State Management  
- `useState` for form inputs, search, and notes  
- `useEffect` for loading notes from Firestore  

### Routing  
Implemented using **React Router** with pages:

- Home  
- Notes Dashboard  
- Add Note  
- Edit Note  
- Profile  
- Login  
- Register  
- 404 Not Found  

### Forms  
- Controlled inputs  
- Validation  
- Error messages  
- Submission handling  

### Dynamic Rendering  
- Notes displayed using `.map()`  
- Search results update in real time  
- Reusable components for each note  

### Conditional Rendering  
- “No notes found” message  
- Error messages for invalid form submissions  
- Protected routes based on authentication state  

---

## Folder Structure  

```text
src/
  components/
    Navbar.jsx
    Footer.jsx
    NoteCard.jsx
    NoteList.jsx
    SearchBar.jsx
    NoteForm.jsx
    ProtectedRoute.jsx
    ProfileCard.jsx

  pages/
    Home.jsx
    Notes.jsx
    AddNote.jsx
    EditNote.jsx
    Profile.jsx
    Login.jsx
    Register.jsx
    NotFound.jsx

  firestore.js
  firebase.js
  App.jsx
  main.jsx
  index.css
