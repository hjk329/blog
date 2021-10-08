import {addDoc, collection, getDocs, serverTimestamp, doc, getDoc, updateDoc, deleteDoc} from "firebase/firestore";
import {db, storage} from "./firebase";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {format} from 'date-fns';

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
}

export const editDocument = async (collectionId, documentId, data) => {
  const editRef = doc(db, collectionId, documentId);
  const result = await updateDoc(editRef,data);
  return result;
}

export const deleteDocument = async (collectionId, documentId) => {
  const result = await deleteDoc(doc(db, collectionId, documentId));
  return result;
}

export const uploadImage = async (file, setProgress, getUrl) => {
  const [name, extension] = file.name.split('.');
  const now = format(Date.now(), 'yyyyMMdd_hhmmss')

  const imageRef = ref(storage, `${name}_${now}.${extension}`);
  const uploadTask = uploadBytesResumable(imageRef, file)

  uploadTask.on('state_changed',
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      setProgress(p => progress)
      switch (snapshot.state) {
        case 'paused':
          console.log('Upload is paused');
          break;
        case 'running':
          console.log('Upload is running');
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
    },
    async () => {
      const url = await getDownloadURL(uploadTask.snapshot.ref);
      getUrl(url);
    }
  );

}
