import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDatabase, fas,faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFaceSmileBeam} from '@fortawesome/free-regular-svg-icons'

import { faReact,faHtml5,faJs, faCss3Alt, faVuejs } from '@fortawesome/free-brands-svg-icons'

library.add(fas,faReact,faHtml5,faJs,faCss3Alt,faXmark,faVuejs,faFaceSmileBeam,faDatabase)
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
)
