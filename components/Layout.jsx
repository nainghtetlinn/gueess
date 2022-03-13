import { useSelector, useDispatch } from 'react-redux'
import { hideToast } from '../store/entities/toast'
import Navmenu from './Nav/Navmenu'
import Footer from './footer/Footer'
import Toast from './Toast'

const Layout = ({ children }) => {
  const toast = useSelector(store => store.toast)
  const dispatch = useDispatch()

  const handleHide = () => {
    dispatch(hideToast())
  }

  return (
    <div className="mx-auto max-w-3xl">
      <Navmenu />
      {children}
      {toast.isShow && (
        <Toast handleHide={handleHide} type={toast.type} msg={toast.msg} />
      )}
      <Footer />
    </div>
  )
}

export default Layout
