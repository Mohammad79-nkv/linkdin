import styled from "styled-components";
import CloseIcon from "@material-ui/icons/Close";
import PhotoSizeSelectActualTwoToneIcon from "@material-ui/icons/PhotoSizeSelectActualTwoTone";
import VideoLibraryTwoToneIcon from "@material-ui/icons/VideoLibraryTwoTone";
import ReactPlayer from "react-player";
import firebase from "firebase";

import { useSelector, useDispatch } from "react-redux";
import { postArticleAPI } from "../../store/post.js";
import { useState } from "react";

const PostModal = (props) => {
  const { handleShow } = props;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [postText, setPostText] = useState("");
  const [sharedImage, setSharedImage] = useState("");
  const [sharedVideo, setSharedVideo] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleDisabled = () => {
    if (sharedImage !== "" && postText !=="") {
      return false;
    } else if (sharedVideo !== "" && postText !== "") {
      return false;
    } else {
      return true;
    }
  };

  const handleSaveImage = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not an image, file is a ${typeof image}`);
      return;
    }
    setSharedImage(image);
  };
  const reset = () => {
    setPostText("");
    setSharedImage("");
    setSharedVideo("");
    setAssetArea("");
  };
  const handleSharePost = (e) => {
    e.preventDefault();
    const post = {
      image: sharedImage,
      video: sharedVideo,
      discription: postText,
      user,
      timestamp: firebase.firestore.Timestamp.now(),
    };
    dispatch(postArticleAPI(post));
    reset();
    handleShow();
  };

  return (
    <Container>
      <Content>
        <Header>
          <h5>Create a post</h5>
          <button onClick={handleShow}>
            <CloseIcon />
          </button>
        </Header>
        <hr />
        <SharedContent>
          <UserInfo>
            {user && user.picture ? (
              <img src={user.picture} alt="user-photo" />
            ) : (
              <img src="/images/user.svg" alt="" />
            )}
            <span>{user.given_name}</span>
          </UserInfo>
          <Editor>
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              autoFocus={true}
              placeholder="What do you want talk about ?"
            ></textarea>
            {assetArea === "image" ? (
              <UploadImage>
                <label htmlFor="image">Select an image to share</label>
                <input
                  type="file"
                  accept="image/gif, image/jepg, image/png"
                  name="image"
                  id="image"
                  onChange={handleSaveImage}
                />
                {sharedImage && (
                  <img
                    src={URL.createObjectURL(sharedImage)}
                    alt="Shared-img"
                  />
                )}
              </UploadImage>
            ) : (
              assetArea === "media" && (
                <UploadVideo>
                  <input
                    type="text"
                    placeholder="Please input a video link"
                    value={sharedVideo}
                    onChange={(e) => setSharedVideo(e.target.value)}
                  />
                  {sharedVideo && (
                    <ReactPlayer url={sharedVideo} width={"100%"} />
                  )}
                </UploadVideo>
              )
            )}
          </Editor>
          <SharedAction>
            <SharedOptions>
              <button onClick={() => setAssetArea("image")}>
                <PhotoSizeSelectActualTwoToneIcon />
              </button>
              <button onClick={() => setAssetArea("media")}>
                <VideoLibraryTwoToneIcon />
              </button>
            </SharedOptions>
            <SharedPost>
              <button
                onClick={handleSharePost}
                disabled={handleDisabled()}
              >
                Post
              </button>
            </SharedPost>
          </SharedAction>
        </SharedContent>
      </Content>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
  /* display: flex;
    justify-content: center;
    align-items: center; */
  animation: fadeIn 0.2s;
`;
const Content = styled.div`
  width: 100%;
  max-width: 552px;
  background-color: white;
  max-height: 90%;
  overflow: initial;
  border-radius: 5px;
  position: relative;
  top: 32px;
  margin: 0 auto;
  z-index: 999999;
  overflow: scroll;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5;
  padding: 14px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  button {
    background-color: transparent;
  }
`;
const SharedContent = styled.div`
  padding: 8px 12px;
`;
const UserInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 1px 24px;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`;
const SharedAction = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px 12px 8px;
`;
const SharedOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  button {
    padding: 8px 12px;
    border-radius: 10px;
    background-color: transparent;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;
const SharedPost = styled.div`
  button {
    padding: 15px 17px;
    border-radius: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.4);
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;
const Editor = styled.div`
  width: 100%;
  padding: 12px 24px;
  textarea {
    width: 100%;
    resize: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    padding: 0 5px;
    min-height: 100px;
  }
`;
const UploadImage = styled.div`
  text-align: center;
  img {
    width: 100%;
  }
`;
const UploadVideo = styled.div``;
export default PostModal;
