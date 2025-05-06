<script lang="ts">
	const title = 'Vite + Svelte + TypeScript + Tailwind'
</script>

<dialog id="my_modal_1" class="dialog">
	<div>
		<h2>Font Family</h2>
		<p>
			All fonts are provided via <strong>cdn.staticdelivr.com</strong> directly from
			Google Fonts and imported with `@import()` CSS function.
		</p>
	</div>
	<form method="dialog">
		<button autofocus>Close</button>
	</form>
</dialog>

<section class="nwp page">
	<div class="content">
		<div class="page-sector start-area">
			<h1>{title}</h1>
			<p>
				A simple, classless set of semantic styles derived from <a
					href="https://github.com/panr/hugo-theme-terminal"
					target="_blank">Terminal</a> theme that you always wanted.
			</p>
			<div class="start-question">
				<p>Please, choose the type of a file you want to download:</p>
				<ul>
					<li>
						<label>
							<input
								type="radio"
								name="type"
								value="standalone"
								style="margin-right: 10px;"
								checked />Standalone Terminal.css file
						</label>
					</li>
					<li>
						<label>
							<input
								type="radio"
								name="type"
								value="terminal"
								style="margin-right: 10px;" />Terminal Theme color scheme
						</label>
					</li>
				</ul>
			</div>
		</div>
		<section class="page-sector">
			<h2>
				Headings<a href="#headings" class="hanchor" arialabel="Anchor">#</a>
			</h2>
			<p>
				The following HTML <code>&lt;h1&gt;</code>—<code>&lt;h6&gt;</code>
				elements represent six levels of section headings.
				<code>&lt;h1&gt;</code>
				is the highest section level while <code>&lt;h6&gt;</code> is the lowest.
			</p>
			<h1 id="h1">Heading 1</h1>
			<h2 id="h2">Heading 2</h2>
			<h3 id="h3">Heading 3</h3>
			<h4 id="h4">Heading 4</h4>
			<h5 id="h5">Heading 5</h5>
			<h6 id="h6">Heading 6</h6>
		</section>
		<section class="page-sector">
			<h2>
				Paragraphs<a href="#paragraph" class="hanchor" arialabel="Anchor">#</a>
			</h2>
			<p>
				This HTML element represents a paragraph. Paragraphs are usually
				represented in visual media as blocks of text separated from adjacent
				blocks by blank lines and/or first-line indentation, but HTML paragraphs
				can be any structural grouping of related py-4, such as images or form
				fields.
			</p>
			<p>
				Paragraphs are block-level elements, and notably will automatically
				close if another block-level element is parsed before the closing tag
			</p>
		</section>
		<section class="page-sector">
			<h2>Images<a href="#images" class="hanchor" arialabel="Anchor">#</a></h2>
			<img src="./terminal-css.png" alt="Terminal.css preview" loading="lazy" />
			<h3>Figures with caption</h3>
			<figure style="margin: 10px 0;">
				<img
					src="./terminal-css.png"
					alt="Terminal.css preview"
					loading="lazy" />
				<figcaption>Terminal.css preview</figcaption>
			</figure>
		</section>
		<section class="page-sector">
			<h2 id="blockquotes">
				Blockquotes<a href="#blockquotes" class="hanchor" arialabel="Anchor"
					>#</a>
			</h2>
			<blockquote>
				<p>
					The blockquote element represents py-4 that is quoted from another
					source, optionally with a citation which must be within a <code
						>footer</code>
					or <code>cite</code> element, and optionally with in-line changes such
					as annotations and abbreviations.
				</p>
			</blockquote>
		</section>
		<section class="page-sector">
			<h2 id="buttons">
				Buttons and links<a href="#buttons" class="hanchor" arialabel="Anchor"
					>#</a>
			</h2>
			<button onclick={() => my_modal_1.showModal()}>Button</button><a href=""
				>Link</a>
		</section>
		<section class="page-sector">
			<h2 id="tables">
				Tables<a href="#tables" class="hanchor" arialabel="Anchor">#</a>
			</h2>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Bob</td>
						<td>27</td>
					</tr>
					<tr>
						<td>Alice</td>
						<td>23</td>
					</tr>
				</tbody>
			</table>
		</section>
		<section class="page-sector">
			<h2 id="forms">
				Forms<a href="#forms" class="hanchor" arialabel="Anchor">#</a>
			</h2>
			<fieldset>
				<input type="text" placeholder="Type something" />
				<br />
				<input type="number" placeholder="Insert number" />
				<br />
				<input type="text" value="Input value" />
				<br />
				<select>
					<option value="1">Option 1</option>
					<option value="2">Option 2</option>
					<option value="3">Option 3</option>
				</select>
				<br />
				<textarea placeholder="Insert a comment..."></textarea>
				<br />
				<label>
					<input type="checkbox" /> I understand<br />
				</label>
				<button type="submi">Submit</button>
			</fieldset>
		</section>
		<section class="page-sector">
			<h2 id="code-blocks">
				Code Blocks<a href="#code-blocks" class="hanchor" arialabel="Anchor"
					>#</a>
			</h2>
			<pre><code></code></pre>
		</section>
		<section class="page-sector">
			<h2 id="code-blocks">
				Code Blocks<a href="#code-blocks" class="hanchor" arialabel="Anchor"
					>#</a>
			</h2>
			<pre><code
					>&#x3C;pre&#x3E;&#x3C;code&#x3E;&#x3C;/code&#x3E;&#x3C;/pre&#x3E;</code></pre>
		</section>
		<section class="page-sector">
			<h2 id="list-types">
				List Types<a href="#list-types" class="hanchor" arialabel="Anchor">#</a>
			</h2>
			<h3 id="ordered-list">
				Ordered List<a href="#ordered-list" class="hanchor" arialabel="Anchor"
					>#</a>
			</h3>
			<ol>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
			</ol>
			<h3 id="unordered-list">
				Unordered List<a
					href="#unordered-list"
					class="hanchor"
					arialabel="Anchor">#</a>
			</h3>
			<ul>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
				<li>Item</li>
			</ul>
			<h3 id="nested-list">
				Nested list<a href="#nested-list" class="hanchor" arialabel="Anchor"
					>#</a>
			</h3>
			<ul>
				<li>
					Item <ul>
						<li>Nested item</li>
						<li>Nested item</li>
						<li>Nested item</li>
					</ul>
				</li>
				<li>
					Item <ul>
						<li>Nested item</li>
						<li>Nested item</li>
						<li>Nested item</li>
					</ul>
				</li>
			</ul>
		</section>
		<section class="page-sector">
			<h2 id="other-elements--abbr-sub-sup-kbd-mark">
				Other Elements — abbr, sub, sup, kbd, mark<a
					href="#other-elements--abbr-sub-sup-kbd-mark"
					class="hanchor"
					arialabel="Anchor">#</a>
			</h2>
			<p>Text<sup>sup</sup></p>
			<p>Text<sub>sub</sub></p>
			<p><abbr title="Abbreviation">Abbr.</abbr></p>
			<p><kbd>Kbd</kbd></p>
			<p><mark>Marked</mark></p>
		</section>
	</div>
</section>
