window.addEventListener('DOMContentLoaded', function() {
				const savedTheme = localStorage.getItem('selectedTheme');
				if (savedTheme) {
					let sheets = document.getElementsByTagName('link');
					sheets[0].href = savedTheme;
				}
			});

			function toggleTheme(value) {
				let sheets = document.getElementsByTagName('link');
				sheets[0].href = value;
				localStorage.setItem('selectedTheme', value);
			}