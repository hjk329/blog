import {addDoc, collection, getDocs, serverTimestamp, doc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "./firebase";

export const getDocuments = async (collectionId) => {
  const querySnapshot = await getDocs(collection(db, collectionId));
  const result = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    }
  });

  return result;
}

export const addDocument = async (collectionId, data) => {
  const result =  await addDoc(collection(db, collectionId), {
    ...data,
    publishedAt: serverTimestamp(),
  });
  return result;
}

export const getDocument = async (collectionId, documentId) => {
  const docRef = doc(db, collectionId, documentId);
  const docSnap = await getDoc(docRef);
  return docSnap.data();

  // if (docSnap.exists()) {
  //   return docSnap.data();
  // } else {
  //   // doc.data() will be undefined in this case
  //   console.log("No such document!");
  // }

}

export const editDocument = async (collectionId, documentId, data) => {
  const editedRef = doc(db, collectionId, documentId);
  const result = await updateDoc(editedRef,data);
  return result;
}
