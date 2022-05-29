
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Main } from './components/Main'
import { PreventClickSpam } from './components/PreventClickSpam/index'
import { PropsForState } from './components/PropsForState/index'
import { ReactFade } from './components/ReactFade'
import { StateDependentState } from './components/StateDependentState/index'

export const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Main />}></Route>
				<Route path="prevent-click-spam" element={<PreventClickSpam />}></Route>
				<Route path="props-for-state" element={<PropsForState />}></Route>
				<Route path="animate-react-transition" element={<ReactFade />}></Route>
				<Route path="state-dependent-state" element={<StateDependentState />}></Route>
			</Routes>
		</BrowserRouter>
	)
}
