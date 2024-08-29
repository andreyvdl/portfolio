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
				<ul>
					<li>
						<a href=${mail}>
							📧 ${mail.substring("mailto:".length)}
						</a>
					</li>
					<li>
						<a href=${git}>
							🐙 Github
						</a>
					</li>
					<li>
						<a href=${insta}>
							📷 Instagram
						</a>
					</li>
					<li>
						<a href=${link}>
							👨‍💼 LinkedIn
						</a>
					</li>
				</ul>
			</address>`;
	}
}

customElements.define('x-footer', FooterComponent);
