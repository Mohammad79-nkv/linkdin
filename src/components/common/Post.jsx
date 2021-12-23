import ReactPlayer from "react-player";
import styled from "styled-components";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import InsertCommentTwoToneIcon from "@material-ui/icons/InsertCommentTwoTone";
import ShareTwoToneIcon from "@material-ui/icons/ShareTwoTone";
import SendTwoToneIcon from "@material-ui/icons/SendTwoTone";

const Post = (props) => {
  const {
    key,
    actorImage,
    actorTitle,
    actorDescription,
    date,
    postDescription,
    postVideo,
    postImage,
  } = props;
  return (
    <Article key={key}>
      <SharedArticle>
        <PostHeader>
          <div>
            <img src={actorImage} />
            <div>
              <span className="actor-name">{actorTitle}</span>
              <span>{actorDescription}</span>
              <span>{date.toDate().toLocaleDateString()}</span>
            </div>
          </div>
          <a>...</a>
        </PostHeader>
        <Description>
          <p>{postDescription}</p>
        </Description>
        <PostImage>
          {!postVideo && postImage ? (
            <img src={postImage} />
          ) : (
            postVideo && <ReactPlayer url={postVideo} width={"100%"} />
          )}
        </PostImage>
      </SharedArticle>
      <SocialInfo>
        <SocialActions>
          <button>
            <ThumbUpAltOutlinedIcon />
            <span>Like</span>
          </button>
          <button>
            <InsertCommentTwoToneIcon />
            <span>Comments</span>
          </button>
          <button>
            <ShareTwoToneIcon />
            <span>Share</span>
          </button>
          <button>
            <SendTwoToneIcon />
            <span>Send</span>
          </button>
        </SocialActions>
      </SocialInfo>
    </Article>
  );
};
const Article = styled.div`
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
  text-align: center;
  margin-bottom: 8px;
  transition: all 83ms;
  position: relative;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
`;
const SharedArticle = styled.div``;
const PostHeader = styled.div`
  padding: 10px 12px;
  div {
    display: flex;
    align-items: center;
    img {
      width: 48px;
      height: 48px;
      border-radius:50%;
    }
    div {
      margin-left: 8px;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-size: 14px;
      font-weight: 600;
      color: rgba(0, 0, 0, 0.5);
      .actor-name{
          color: rgba(0, 0, 0, 0.7)
      }
    }
  }
  a {
    padding: 0 !important;
    margin: 0;import { ThumbUpAltOutlinedIcon } from '@material-ui/icons/ThumbUpAltOutlined';

    position: absolute;
    top: -10px;
    right: 12px;
    font-size: 30px;
    font-weight: 700;
    cursor: pointer;
  }
`;
const Description = styled.div`
  padding-left: 12px;
  text-align: left;
  font-size: 16px;
  font-weight: 600;
`;
const PostImage = styled.div`
  margin-top: 8px;
  width: 100%;
  display: block;
  position: relative;
  background-color: #f9fafb;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;
const SocialInfo = styled.div``;
const SocialActions = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 10px 12px;
  button {
    margin-right: 20px;
    background-color: transparent;
    color: #5378a4;
    font-weight: 600;
    display: flex;
    align-items: center;
    padding: 8px 10px;
    border-radius: 10px;
    &:hover {
      background-color: rgba(83, 120, 164, 0.1);
    }
    span {
        @media (max-width: 480px) {
        display:none;
    }
    }
  }
`;

export default Post;
