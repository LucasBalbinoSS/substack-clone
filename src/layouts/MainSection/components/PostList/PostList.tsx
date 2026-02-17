import Post from '../../../../features/Post/Post'
import './styles.css'
import { POSTS_DATA } from '../../../../data/data'
import ForYouIcon from '../../../../components/icons/ForYouIcon'

export default function PostList() {
  return(
    <ul>
      <span className='post-list-for-you'>
        For you
        <ForYouIcon />
      </span>
      {POSTS_DATA.map((post) => (
        <Post
          id={post.id}
          key={post.id}
          name={post.name}
          profilePhotoUrl={post.profilePhotoUrl}
          postedAt={post.postedAt}
          postContent={post.content}
          likesNumber={post.likesNumber}
          commentsNumber={post.commentsNumber}
          restackNumber={post.restackNumber}
          image={post.image}
          userVerification={post.userVerification}
        />
      ))}
    </ul>
  )
}