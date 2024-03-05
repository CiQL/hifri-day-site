// V.3: detect os preference
// V.2: uses session storage, hard-coded dark values, changing CSS variables
// future note: consider switching stylesheets!


function darkMode() {
	let session = sessionStorage.getItem('dark')
	let root = document.documentElement

	if (session === 'true') {
		root.style.setProperty('--color-fg', 'var(--bs-light)')
		root.style.setProperty('--color-bg', 'var(--bs-dark)')
		root.style.setProperty('--color-link', 'var(--hawaii-fridays-500)')
	}
	else {
		root.style.setProperty('--color-fg', 'var(--bs-dark)')
		root.style.setProperty('--color-bg', 'var(--bs-light)')
		root.style.setProperty('--color-link', 'var(--hawaii-fridays-800)')
	}
}

function darkModeToggle() {
	// check os preference
	window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
		const osDarkMode = event.matches
		if (osDarkMode) sessionStorage.setItem('dark', 'true')
		else sessionStorage.removeItem('dark')
	})
	if (!document.getElementById('dark-mode-toggle')) {
		const checkbox = document.createElement('input')
		checkbox.type = 'checkbox'
		checkbox.name = 'darkMode'
		checkbox.id = 'dark-mode-toggle'
		checkbox.style.position = 'absolute'
		checkbox.style.top = '0'
		checkbox.style.right = '0'
		checkbox.addEventListener('change', function(e) {
			if (e.currentTarget.checked) sessionStorage.setItem('dark', 'true')
			else sessionStorage.removeItem('dark')
			darkMode()
		})
		document.body.appendChild(checkbox)
	}
	document.getElementById('dark-mode-toggle').checked = (sessionStorage.getItem('dark') === 'true')
}
