<script lang="ts">
	const heads = [
		{
			tag: 'h1',
			heading: 'Warten',
			body: 'Überspringt den Zug, ohne etwas zu tun'
		},
		{
			tag: 'h2',
			heading: 'Angreifen',
			body: 'Greift ein benachbartes Ziel im Nahkampf an'
		},
		{
			tag: 'h3',
			heading: 'Schießen',
			body: 'Führt einen Fernkampfangriff auf ein Ziel aus'
		},
		{
			tag: 'h2',
			heading: 'Tür öffnen',
			body: 'Öffnet eine Tür in Reichweite'
		},
		{
			tag: 'h4',
			heading: 'Tür schließen',
			body: 'Schließt eine geöffnete Tür'
		},
		{
			tag: 'h3',
			heading: 'Aufheben',
			body: 'Hebt ein Item vom Boden auf'
		},
		{
			tag: 'h5',
			heading: 'Item verwenden',
			body: 'Benutzt ein Item aus dem Inventar'
		},
		{
			tag: 'h1',
			heading: 'Item ablegen',
			body: 'Lege ein Item auf den Boden'
		},
		{
			tag: 'h3',
			heading: 'Ausrüsten',
			body: 'Rüste ein Item aus dem Inventar aus'
		},
		{
			tag: 'h4',
			heading: 'Ablegen',
			body: 'Lege ein ausgerüstetes Item ab'
		},
		{
			tag: 'h5',
			heading: 'Interagieren',
			body: 'Interagiert mit einem Objekt'
		},
		{
			tag: 'h6',
			heading: 'Treppe runter',
			body: 'Steigt eine Ebene tiefer'
		}
	]

	const page = {
		heading: 'Nwp-Studio',
		body: 'Vite + Svelte + TypeScript + Tailwind'
	}
</script>

<section class="nwp page">
	<div class="content">
		<div class="h-12"></div>
		<section class="page-sector">
			<h1 class="lead">{page.heading}</h1>
			<h3>{page.body}</h3>
			<p>Tailwind</p>
		</section>
		<section class="page-sector content-1">
			<p>Headings 1</p>
			<h1 id="h1">Heading 1</h1>
			<h2 id="h2">Heading 2</h2>
			<h3 id="h3">Heading 3</h3>
			<h4 id="h4">Heading 4</h4>
			<h5 id="h5">Heading 5</h5>
			<h6 id="h6">Heading 6</h6>
		</section>
		<section class="page-sector content-2">
			<p>Headings 2</p>
			<h1 id="h1">Heading 1</h1>
			<h2 id="h2">Heading 2</h2>
			<h3 id="h3">Heading 3</h3>
			<h4 id="h4">Heading 4</h4>
			<h5 id="h5">Heading 5</h5>
			<h6 id="h6">Heading 6</h6>
		</section>

		<div class="page-sector content-1">
			<section>
				<h2 id="buttons">Buttons and links</h2>
				<button>Button</button><a href="#/">Link</a>
			</section>
		</div>
		<div class="page-sector content-1">
			<section>
				<h2 id="tables">Tables</h2>
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
			<section>
				<h2 id="forms">Forms</h2>
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
		</div>
		<div class="page-sector content-1">
			<section>
				<h2 id="code-blocks">Code Blocks</h2>
				<pre><code>&lt;pre&gt;&lt;code&gt;&lt;/code&gt;&lt;/pre&gt;</code></pre>
			</section>
			<section>
				<h2 id="list-types">List Types</h2>
				<h3 id="ordered-list">Ordered List</h3>
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
				<h3 id="unordered-list">Unordered List</h3>
				<ul>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
					<li>Item</li>
				</ul>
				<h3 id="nested-list">Nested list</h3>
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
			<section>
				<h2 id="other-elements--abbr-sub-sup-kbd-mark">Other Elements</h2>
				<p>Text<sup>sup</sup></p>
				<p>Text<sub>sub</sub></p>
				<p><abbr title="Abbreviation">Abbr.</abbr></p>
				<p><kbd>Kbd</kbd></p>
				<p><mark>Marked</mark></p>
			</section>
		</div>
		<section class="page-sector">
			<div class="flex flex-col gap-2">
				<h1>Warten</h1>
				<p class="lead">Überspringt den Zug, ohne etwas zu tun</p>
				<h2>Angreifen</h2>
				<p class="lead">Greift ein benachbartes Ziel im Nahkampf an</p>
				<h3>Schießen</h3>
				<p class="lead">Führt einen Fernkampfangriff auf ein Ziel aus</p>
				<h2>Tür öffnen</h2>
				<p class="lead">Öffnet eine Tür in Reichweite</p>
				<h4>Tür schließen</h4>
				<p class="lead">Schließt eine geöffnete Tür</p>
				<h3>Aufheben</h3>
				<p class="lead">Hebt ein Item vom Boden auf</p>
				<h5>Item verwenden</h5>
				<p class="lead">Benutzt ein Item aus dem Inventar</p>
				<h1>Item ablegen</h1>
				<p class="lead">Lege ein Item auf den Boden</p>
				<h3>Ausrüsten</h3>
				<p class="lead">Rüste ein Item aus dem Inventar aus</p>
				<h4>Ablegen</h4>
				<p class="lead">Lege ein ausgerüstetes Item ab</p>
				<h5>Interagieren</h5>
				<p class="lead">Interagiert mit einem Objekt</p>
				<h6>Treppe runter</h6>
				<p class="lead">Steigt eine Ebene tiefer</p>
			</div>
		</section>
	</div>
</section>
