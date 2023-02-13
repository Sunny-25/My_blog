import Home from './pages/home'
import SinglePost from './pages/posts/singlePost'
import Write from './pages/write'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/write" element={<Write />} />
				<Route path="/:postId" element={<SinglePost />} />
			</Routes>
		</BrowserRouter>
	)
}

export default App
