export const initGA = (): void => {
	const GA_ID = process.env.REACT_APP_GA_ID;
  
	if (!GA_ID) {
	  console.warn('Google Analytics ID is not set.');
	  return;
	}
  
	// gtag.js script
	const gtagScript = document.createElement('script');
	gtagScript.async = true;
	gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
	document.head.appendChild(gtagScript);
  
	// configuration script
	const gtagInitScript = document.createElement('script');
	gtagInitScript.innerHTML = `
	  window.dataLayer = window.dataLayer || [];
	  function gtag(){ dataLayer.push(arguments); }
	  gtag('js', new Date());
	  gtag('config', '${GA_ID}');
	`;
	document.head.appendChild(gtagInitScript);
  };
  