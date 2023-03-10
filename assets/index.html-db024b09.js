import{_ as n,X as s,Y as a,a1 as e}from"./framework-9435e890.js";const t={},i=e(`<h2 id="assembly" tabindex="-1"><a class="header-anchor" href="#assembly" aria-hidden="true">#</a> Assembly</h2><div class="language-assembly line-numbers-mode" data-ext="assembly"><pre class="language-assembly"><code>0000000000401440 &lt;phase_1&gt;:
b0:
  401440:	48 83 ec 08          	sub    $0x8,%rsp
  401444:	48 8d 35 05 1d 00 00 	lea    0x1d05(%rip),%rsi        # 403150 &lt;_IO_stdin_used+0x150&gt;
  40144b:	e8 43 04 00 00       	callq  401893 &lt;strings_not_equal&gt;
  401450:	85 c0                	test   %eax,%eax
  401452:	74 05                	je     401459 &lt;phase_1+0x19&gt;
  401454:	e8 03 07 00 00       	callq  401b5c &lt;explode_bomb&gt;
b1:
  401459:	48 83 c4 08          	add    $0x8,%rsp
  40145d:	c3                   	retq
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="翻译为-c" tabindex="-1"><a class="header-anchor" href="#翻译为-c" aria-hidden="true">#</a> 翻译为 C</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
b0<span class="token operator">:</span>
  rsp <span class="token operator">-=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  rsi <span class="token operator">=</span> rip <span class="token operator">+</span> <span class="token number">0x1d05</span><span class="token punctuation">;</span>
  rax <span class="token operator">=</span> <span class="token function">strings_not_equal</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>rax <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment">// 32-bit</span>
    <span class="token keyword">goto</span> b1<span class="token punctuation">;</span>
  <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
b1<span class="token operator">:</span>
  rsp <span class="token operator">+=</span> <span class="token number">8</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="optimize" tabindex="-1"><a class="header-anchor" href="#optimize" aria-hidden="true">#</a> Optimize</h2><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">phase_1</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token operator">*</span> rdi<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">char</span><span class="token operator">*</span> rsi <span class="token operator">=</span> <span class="token number">0x403150</span><span class="token punctuation">;</span> <span class="token comment">// 403150 &lt;_IO_stdin_used+0x150&gt;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">strings_not_equal</span><span class="token punctuation">(</span>rdi<span class="token punctuation">,</span> rsi<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token function">explode_bomb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="hack" tabindex="-1"><a class="header-anchor" href="#hack" aria-hidden="true">#</a> Hack</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>(gdb) x/s 0x403150
0x403150:       &quot;I am not part of the problem. I am a Republican.&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="solution" tabindex="-1"><a class="header-anchor" href="#solution" aria-hidden="true">#</a> Solution</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>I am not part of the problem. I am a Republican.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,10),c=[i];function p(l,o){return s(),a("div",null,c)}const r=n(t,[["render",p],["__file","index.html.vue"]]);export{r as default};
