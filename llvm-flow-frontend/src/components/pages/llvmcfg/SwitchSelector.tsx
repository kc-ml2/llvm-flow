import SwitchSelector from 'react-switch-selector'
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import { setIsFullFalse, setIsFullTrue } from '@/redux/features/mode/modeSlice'
import { COLORS } from '@/const/color'
import origin from '@/images/origin.png'
import simple from '@/images/simple.png'

export default function App() {
  //   isFullIndex 0 = simple / 1 = origin
  const { isFullIndex } = useAppSelector((state) => state.mode)
  const dispatch = useAppDispatch()

  const handleToggle = () => {
    if (isFullIndex === 1) {
      dispatch(setIsFullFalse())
    } else if (isFullIndex === 0) {
      dispatch(setIsFullTrue())
    }
  }

  const switchImg = () => {
    if (isFullIndex === 0) {
      return simple
    } else if (isFullIndex === 1) {
      return origin
    }
  }

  return (
    <div>
      <button
        onClick={handleToggle}
        style={{ backgroundColor: 'transparent', border: 'transparent' }}
      >
        <img src={switchImg()} width="140" height="44" />
      </button>
    </div>
  )
}
