
import Link from 'next/link'
import http from 'axios'
import MainLout from '../components/MainLayout'

const ListItem = (props) => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a> {props.title} </a>
    </Link>
  </li>
)

const Index = (props) => (
  <MainLout>
    <ul>
      {
        props.posts.map(item => (
          <ListItem key={item.id} id={item.id} title={item.title} />
        ))
      }
    </ul>
  </MainLout>
)

Index.getInitialProps = async () => {
  const response = await http.get('http://localhost:3333/posts')
  return {
    posts: response.data
  }
}

export default Index