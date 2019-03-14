import Link from 'next/link'
import Header from './Header'

const MaintLaout = (props) => (
  <div>
    <Header />

    {
      props.children
    }
  </div>
)
export default MaintLaout
