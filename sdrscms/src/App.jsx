import React, { useState, useEffect } from 'react';
import { LogIn, Truck, Factory, Shield } from 'lucide-react';

// --- GEMINI API INTEGRATION ---
// Use Vite env var (must be prefixed with VITE_). You can set this in a `.env` file
// at the project root: VITE_GEMINI_API_KEY=your_key
const DEFAULT_API_KEY = import.meta.env.VITE_GEMINI_API_KEY || "";

function App() {
	const [apiKey, setApiKey] = useState(DEFAULT_API_KEY);

	useEffect(() => {
		// placeholder: you could validate the key or attempt a lightweight ping here
		// currently we just keep it in state and show whether it's set
	}, []);

	return (
		<div className="app" style={{ padding: 20, fontFamily: 'sans-serif' }}>
			<header style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
				<h1 style={{ margin: 0 }}>SDRS CMS</h1>
				<LogIn size={20} />
			</header>

			<section style={{ marginTop: 12 }}>
				<p>Gemini API key: <strong>{apiKey ? 'Set' : 'Not set'}</strong></p>
				<div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
					<Truck />
					<Factory />
					<Shield />
				</div>
			</section>
		</div>
	);
}

export default App;
