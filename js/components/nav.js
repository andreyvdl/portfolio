class NavComponent extends HTMLElement
{
	connectedCallback()
	{
		this.innerHTML = `<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="html/projects.html">Projects</a></li>
				<li><a href="html/about_me.html">About Me</a></li>
			</ul>
			</nav>`;
	}
}

customElements.define("x-nav", NavComponent);
