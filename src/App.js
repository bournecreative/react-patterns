
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './components/Main'
import { PreventClickSpam } from './components/PreventClickSpam/index'
import { PropsForState } from './components/PropsForState/index'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="prevent-click-spam" element={<PreventClickSpam />}></Route>
				<Route path="props-for-state" element={<PropsForState />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
