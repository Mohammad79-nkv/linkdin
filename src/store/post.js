import db, { storage } from "../firebase";
import { postLoading } from "./loadingPost";

const initPosts = "INIT_POSTS";

const postArticleAPI = (payload) => {
  return async (dispatch) => {
    dispatch(postLoading(true));
    if (payload.image !== "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Progress: ${progress}`);
          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}`);
          }
        },
        (err) => console.log(err),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          await db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.given_name,
              date: payload.timestamp,
              image: payload.user.picture,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            discription: payload.discription,
          });
          dispatch(postLoading(false));
        }
      );
      // dispatch(postLoading(false));
    } else if (payload.video !== "") {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.given_name,
          date: payload.timestamp,
          image: payload.user.picture,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        discription: payload.discription,
      });
      // dispatch(postLoading(false));
    }
  };
};

export const getPost = () => {
  return async (dispatch) => {
    let payload;
    db.collection("articles")
      .orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        payload = snapshot.docs.map((doc) => doc.data());
        dispatch({ type: initPosts, payload });
      });
  };
};

const postReducer = (state = [], action) => {
  switch (action.type) {
    case initPosts:
      return [...action.payload];
    default:
      return state;
  }
};

export { postArticleAPI };
export default postReducer;
