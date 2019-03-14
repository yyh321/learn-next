import MainLout from '../components/MainLayout'
import {withRouter} from 'next/router'
import http from 'axios'


const Post = withRouter((props) => (
  <MainLout>
    <h3>
      {props.post.title}
    </h3>
    <p>
      {props.post.description}
    </p>
  </MainLout>
))
Post.getInitialProps = async (context) => {
  const {id} = context.query
  const response = await http.get(`http://localhost:3333/posts/${id}`)
  return {
    post: response.data
  }
}
export default Post

