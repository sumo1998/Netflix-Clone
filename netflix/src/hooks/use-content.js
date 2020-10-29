import { useEffect, useState, useContext } from 'react';
import { FirebaseContext } from '../context/firebaseContext';
import {db} from '../lib/firebase.prod';

export default function useContent(target) {
  const [content, setContent] = useState([]);
  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    
    console.log("Calling fetch", target);
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snapshot) => {
          
        console.log("Got snapshot");
        const allContent = snapshot.docs.map((contentObj) => ({
          ...contentObj.data(),
          docId: contentObj.id,
        }));
        console.log("Alll content ",allContent);
        setContent(allContent);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return { [target]: content };
}