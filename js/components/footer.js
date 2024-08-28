class FooterComponent extends HTMLElement
{
	connectedCallback()
	{
		let year = new Date().getFullYear();
		let mail = "mailto:andreyvictordantasleal2016@gmail.com";
		let git = "https://www.github.com/andreyvdl";
		let insta = "https://www.instagram.com/andrey_vdl";
		let link_base = "https://www.linkedin.com/in/";
		let link = link_base + "andrey-victor-dantas-leal-589b8a222";

		this.innerHTML = `<p>
			&copy; ${year}, made by andrey_vdl with ⌨️ .
			</p>
			<p>Want to talk with me?</p>
			<address>
				<a href=${mail}>
					📧 Mail
				</a><br />
				<a href=${git}>
					🐙 Github
				</a><br />
				<a href=${insta}>
					📷 Instagram
				</a><br />
				<a href=${link}>
					👨‍💼 LinkedIn
				</a>
			</address>`;
	}
}

customElements.define('x-footer', FooterComponent);
