import firebase from "firebase/app";
import "firebase/storage";
export default {
  actions: {
    async login({ dispatch, commit }, { email, password }) {
      try {
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    async register(
      { dispatch, commit },
      { email, password, name, date, imageData }
    ) {
      try {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
        const uid = await dispatch("getUid");
        // add avatar
        if (imageData === undefined) {
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`images/noavatar.png`);
          const downloadUrl = await imageRef.getDownloadURL();
          // add users
          await firebase.database().ref(`/users/${uid}/info`).set({
            stars: 0,
            name: name,
            date: date,
            avatarImg: downloadUrl,
          });
        } else {
          const metaData = {
            contentType: "image/png",
          };
          const storageRef = firebase.storage().ref();
          const imageRef = storageRef.child(`images/${uid}.png`);
          await imageRef.put(imageData, metaData);
          const downloadUrl = await imageRef.getDownloadURL();
          // add users
          await firebase.database().ref(`/users/${uid}/info`).set({
            stars: 0,
            name: name,
            date: date,
            avatarImg: downloadUrl,
          });
        }
      } catch (error) {
        commit("setError", error);
        throw error;
      }
    },
    getUid() {
      const user = firebase.auth().currentUser;
      return user ? user.uid : null;
    },
    async logout({ commit }) {
      await firebase.auth().signOut();
      commit("clearInfo");
    },
  },
};
